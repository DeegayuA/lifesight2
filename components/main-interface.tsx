"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Camera, Mic, MicOff, CameraOff, Send, Volume2, VolumeX, Phone } from 'lucide-react';
import { useAIResponse } from '@/hooks/use-ai-response';
import { AIResponseDisplay } from '@/components/ai-response-display';
import { useLanguage } from '@/components/language-provider';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useSettings } from '@/components/settings-provider';
import { SettingsPanel } from '@/components/settings-panel';
import Link from 'next/link';

export function MainInterface() {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [selectedCamera, setSelectedCamera] = useState<string>('');
  const [selectedMic, setSelectedMic] = useState<string>('');
  const [devices, setDevices] = useState<{ cameras: MediaDeviceInfo[], mics: MediaDeviceInfo[] }>({
    cameras: [],
    mics: []
  });
  const [micPausedForPlayback, setMicPausedForPlayback] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const { isLoading, response, getResponse } = useAIResponse();
  const { language } = useLanguage();
  const recognitionRef = useRef<any | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { fontSize, lineHeight, letterSpacing } = useSettings();

  useEffect(() => {
    async function getDevices() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(device => device.kind === 'videoinput');
        const mics = devices.filter(device => device.kind === 'audioinput');
        setDevices({ cameras, mics });

        if (cameras.length) setSelectedCamera(cameras[0].deviceId);
        if (mics.length) setSelectedMic(mics[0].deviceId);
      } catch (error) {
        console.error('Error getting devices:', error);
      }
    }

    getDevices();
  }, []);

  useEffect(() => {
    const startMedia = async () => {
      await toggleCamera(true);
      await toggleMic(true);
    };

    startMedia();
  }, []);

  const toggleCamera = async (forceOn: boolean = false) => {
    try {
      if (isCameraOn || forceOn) {
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach(track => track.stop());
        }
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
      if (!isCameraOn || forceOn) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: selectedCamera }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        mediaStreamRef.current = stream;
      }
      setIsCameraOn(!isCameraOn || forceOn);
    } catch (error) {
      console.error('Error toggling camera:', error);
    }
  };

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    if (micPausedForPlayback) {
      toggleMic(true);
      setMicPausedForPlayback(false);
    }
  }, [micPausedForPlayback]);

  const toggleMic = async (forceOn: boolean = false) => {
    try {
      // Stop any ongoing speech synthesis when toggling mic
      stopSpeaking();

      if (isMicOn || forceOn) {
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach(track => {
            if (track.kind === 'audio') track.stop();
          });
        }
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      }
      if (!isMicOn || forceOn) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: { deviceId: selectedMic }
        });
        mediaStreamRef.current = stream;
        startSpeechRecognition();
      }
      setIsMicOn(!isMicOn || forceOn);
    } catch (error) {
      console.error('Error toggling microphone:', error);
    }
  };

  const captureImage = async (): Promise<string | null> => {
    if (!videoRef.current) return null;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.drawImage(videoRef.current, 0, 0);
    return canvas.toDataURL('image/jpeg').split(',')[1];
  };

  const handleSubmit = async () => {
    if (!textInput.trim()) return;

    const imageBase64 = isCameraOn ? await captureImage() : undefined;
    await getResponse(textInput, typeof imageBase64 === 'string' ? imageBase64 : undefined);
    setTextInput('');
  };

  const handleResponseEnd = () => {
    if (isMicOn) {
      toggleMic();
    }
  };

  const startSpeechRecognition = () => {
    if (typeof window === 'undefined' || !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      console.error('Speech recognition is not supported in this browser.');
      return;
    }
  
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Speech recognition is not supported in this browser.');
      return;
    }
  
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = language;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;
  
    recognitionRef.current.onresult = async (event: any) => {
      const transcript = event.results[0][0].transcript.trim().toLowerCase();
      console.log(`Voice command detected: "${transcript}"`);
  
      // Pause mic for processing commands
      await toggleMic(false);
  
      // Handle specific voice commands
      const handled = await handleVoiceCommand(transcript);
      if (handled) {
        // Resume mic if a command was executed
        if (!micPausedForPlayback) {
          await toggleMic(true);
        }
      } else {
        // Treat it as regular input if not a command
        setTextInput(transcript);
        const imageBase64 = isCameraOn ? await captureImage() : undefined;
        await getResponse(transcript, typeof imageBase64 === 'string' ? imageBase64 : undefined);
      }
    };
  
    recognitionRef.current.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };
  
    recognitionRef.current.onend = () => {
      if (isMicOn && !micPausedForPlayback) {
        recognitionRef.current?.start();
      }
    };
  
    recognitionRef.current.start();
  };
  
  const handleVoiceCommand = useCallback(async (command: string): Promise<boolean> => {
    if (command.includes('start camera')) {
      await toggleCamera(true);
      return true;
    } else if (command.includes('stop camera')) {
      await toggleCamera(false);
      return true;
    } else if (command.includes('start mic')) {
      await toggleMic(true);
      return true;
    } else if (command.includes('stop mic')) {
      await toggleMic(false);
      return true;
    } else if (command.includes('repeat') || command.includes('respeak')) {
      await speakResponse();
      return true;
    }
    return false;
  }, [response]);
  
  const speakResponse = async () => {
    if (!response) return;
  
    // Pause mic during response playback
    if (isMicOn) {
      await toggleMic(false);
      setMicPausedForPlayback(true);
    }
  
    const utterance = new SpeechSynthesisUtterance(response);
    synthRef.current = utterance;
    setIsPlaying(true);
  
    utterance.onend = () => {
      setIsPlaying(false);
      if (micPausedForPlayback) {
        toggleMic(true);
        setMicPausedForPlayback(false);
      }
    };
  
    utterance.onerror = () => {
      setIsPlaying(false);
      if (micPausedForPlayback) {
        toggleMic(true);
        setMicPausedForPlayback(false);
      }
    };
  
    window.speechSynthesis.speak(utterance);
  };
  

  const getMicStatusIndicator = () => {
    if (isPlaying) {
      return (
        <div className="absolute left-3 top-2 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-s text-yellow-500">Paused</span>
        </div>
      );
    }
    if (isMicOn) {
      return (
        <div className="absolute left-3 top-2 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-s text-green-500">Listening</span>
        </div>
      );
    }
    return (
      <div className="absolute left-3 top-2 flex items-center gap-1">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-s text-red-500">Off</span>
      </div>
    );
  };

  const getCameraStatusIndicator = () => {
    if (isCameraOn) {
      return (
        <div className="absolute left-3 top-2 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-s text-green-500">Live</span>
        </div>
      );
    }
    return (
      <div className="absolute left-3 top-2 flex items-center gap-1">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-s text-red-500">Off</span>
      </div>
    );
  };

  return (
    <div className="flex w-100 flex-col space-y-4 my-4" style={{ fontSize, lineHeight, letterSpacing: `${letterSpacing}px` }}>
      {/* Video Preview - 40vh max */}
      <div className="relative h-[40vh] shrink-0">
        <Card className="h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={cn(
              "w-full h-full object-cover",
              !isCameraOn && "hidden"
            )}
          />
          {!isCameraOn && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <CameraOff className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
        </Card>
      </div>

      {/* AI Response Area - 15vh max */}
      <div className="h-[15vh] overflow-y-auto">
        <Card className="h-full p-4">
          <AIResponseDisplay
            response={response}
            isLoading={isLoading}
            onResponseEnd={() => { }}
          />
        </Card>
      </div>
      <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />

      {/* Controls Section */}
      <div className="flex flex-col gap-2 w-100 xl:flex-row">
        <div className="flex gap-2 flex-1">
          <Button
            variant={isCameraOn ? "default" : "outline"}
            onClick={() => toggleCamera()}
            className="flex-1 relative min-h-[48px]"
          >
            <div className="flex items-center justify-center">
              {isCameraOn ? <Camera className="mr-2" /> : <CameraOff className="mr-2" />}
              <span>{isCameraOn ? 'Stop Camera' : 'Start Camera'}</span>
            </div>
            {getCameraStatusIndicator()}
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={isMicOn ? "default" : "outline"}
                onClick={() => toggleMic()}
                className="flex-1 relative min-h-[48px]"
              >
                <div className="flex items-center justify-center">
                  {isMicOn ? <Mic className="mr-2" /> : <MicOff className="mr-2" />}
                  <span>{isMicOn ? 'Stop Mic' : 'Start Mic'}</span>
                </div>
                {getMicStatusIndicator()}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <div className="space-y-1">
                <p>Available voice commands:</p>
                <ul className="list-disc pl-4">
                  <li>start camera</li>
                  <li>stop camera</li>
                  <li>start mic</li>
                  <li>stop mic</li>
                  <li>repeat</li>
                  <li>respeak</li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>

          <Button 
            asChild 
            variant="secondary" 
            className="flex-1 relative min-h-[48px]"
          >
            <Link href="/call-assistant">
              <Phone className="mr-2" />
              <span>Call Assistance</span>
            </Link>
          </Button>
        </div>

        {/* Input area remains the same */}
        <div className="flex gap-2 flex-1">
          <Input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type your question or command..."
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            className="flex-1"
          />
          <Button className="w-16 h-16" onClick={handleSubmit}>
            <Send className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
