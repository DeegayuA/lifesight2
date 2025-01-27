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
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useSettings } from '@/components/settings-provider';
import { SettingsPanel } from '@/components/settings-panel';
import Link from 'next/link';
import { useSpeech } from '@/hooks/use-speech';
import { useSearchParams } from "next/navigation";



export function MainInterface() {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState<string>('');
  const [selectedMic, setSelectedMic] = useState<string>('');
  const [devices, setDevices] = useState<{ cameras: MediaDeviceInfo[], mics: MediaDeviceInfo[] }>({
    cameras: [],
    mics: []
  });
  const [micPausedForPlayback, setMicPausedForPlayback] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const searchParams = useSearchParams();
  const [textInput, setTextInput] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const { isLoading, response, getResponse } = useAIResponse();
  const { language } = useLanguage();
  const recognitionRef = useRef<any | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { fontSize, lineHeight, letterSpacing, accentColor } = useSettings();
  const [loading, setLoading] = useState(true); // Add loading state
  const { speak, stop: stopSpeaking, isPlaying: isSpeechPlaying } = useSpeech({
    onStart: () => {
      if (isMicOn) {
        toggleMic(false);
        setMicPausedForPlayback(true);
      }
    },
    onEnd: () => {
      if (micPausedForPlayback) {
        toggleMic(true);
        setMicPausedForPlayback(false);
      }
    },
    onError: (error) => {
      console.error('Speech synthesis error:', error);
      if (micPausedForPlayback) {
        toggleMic(true);
        setMicPausedForPlayback(false);
      }
    }
  });

  useEffect(() => {
    async function getDevices() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(device => device.kind === 'videoinput');
        const mics = devices.filter(device => device.kind === 'audioinput');
        setDevices({ cameras, mics });

        // Attempt to select the back camera first using facingMode constraint
        const constraints = {
          video: { facingMode: { exact: 'environment' } }
        };

        let stream = null;
        try {
          stream = await navigator.mediaDevices.getUserMedia(constraints);
          const videoTrack = stream.getVideoTracks()[0];
          const backCamera = cameras.find(camera => camera.deviceId === videoTrack.getSettings().deviceId);
          if (backCamera) {
            setSelectedCamera(backCamera.deviceId);
          }
        } catch (error) {
          console.warn('Back camera not found, selecting default camera.');
          if (cameras.length > 0) {
            setSelectedCamera(cameras[0].deviceId);
          }
        } finally {
          if (stream) {
            stream.getTracks().forEach(track => track.stop());
          }
        }

        if (mics.length) {
          setSelectedMic(mics[0].deviceId);
        }
      } catch (error) {
        console.error('Error getting devices:', error);
      }
    }

    getDevices();
  }, []);

  useEffect(() => {
    async function startMedia() {
      if (devices.cameras.length > 0 && devices.mics.length > 0) {
        await toggleCamera(true);  // Turn on camera immediately
        await toggleMic(true);  // Turn on mic immediately
      }
    }
    startMedia();
  }, [devices]);  // Trigger when devices have been detected

  const toggleCamera = async (forceOn: boolean = false) => {
    if (loading) return;
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

  const toggleMic = async (forceOn: boolean = false) => {
    if (loading) return;
    try {
      if (isMicOn && !forceOn) {
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

  const speakResponse = useCallback(async () => {
    if (!response) return;
    speak(response);
  }, [response, speak]);

  const handleVoiceCommand = useCallback(async (command: string): Promise<boolean> => {
    if (command.includes('start camera')) {
      await toggleCamera(true);
      speak('Camera started');
      return true;
    } else if (command.includes('stop camera')) {
      await toggleCamera(false);
      speak('Camera stopped');
      return true;
    } else if (command.includes('start mic')) {
      await toggleMic(true);
      speak('Microphone started');
      return true;
    } else if (command.includes('stop mic')) {
      await stopSpeaking();
      await toggleMic(false);
      speak('Microphone stopped');
      return true;
    } else if (command.includes('repeat') || command.includes('respeak')) {
      await speakResponse();
      return true;
    }
    return false;
  }, [speak, toggleCamera, toggleMic, stopSpeaking, speakResponse]);


  const getMicStatusIndicator = () => {
    let micText = isMicOn ? 'Listening' : 'Off';
    if (devices.mics.length > 1) {
      const micIndex = devices.mics.findIndex(m => m.deviceId === selectedMic);
      micText = isMicOn ? `Listening ${micIndex + 1} of ${devices.mics.length}` : `Off ${micIndex + 1} of ${devices.mics.length}`;
    } else if (devices.mics.length === 1) {
      micText = isMicOn ? 'Listening (only 1 device)' : 'Off (only 1 device)';
    }
    if (isSpeechPlaying) {
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
          <span className="text-s text-green-500">{micText}</span>
        </div>
      );
    }
    return (
      <div className="absolute left-3 top-2 flex items-center gap-1">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-s text-red-500">{micText}</span>
      </div>
    );
  };

  const getCameraStatusIndicator = () => {
    let cameraText = isCameraOn ? 'Live' : 'Off';
    if (devices.cameras.length > 1) {
      const cameraIndex = devices.cameras.findIndex(c => c.deviceId === selectedCamera);
      cameraText = isCameraOn ? `Live ${cameraIndex + 1} of ${devices.cameras.length}` : `Off ${cameraIndex + 1} of ${devices.cameras.length}`;
    } else if (devices.cameras.length === 1) {
      cameraText = isCameraOn ? 'Live (only 1 device)' : 'Off (only 1 device)';
    }
    if (isCameraOn) {
      return (
        <div className="absolute left-3 top-2 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-s text-green-500">{cameraText}</span>
        </div>
      );
    }
    return (
      <div className="absolute left-3 top-2 flex items-center gap-1">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-s text-red-500">{cameraText}</span>
      </div>
    );
  };

  const handleCameraToggle = async () => {
    if (devices.cameras.length > 1) {
      const currentIndex = devices.cameras.findIndex(c => c.deviceId === selectedCamera);
      const nextIndex = (currentIndex + 1) % (devices.cameras.length + 1);
      if (nextIndex === devices.cameras.length) {
        setSelectedCamera('');
        await toggleCamera(false);
      } else {
        setSelectedCamera(devices.cameras[nextIndex].deviceId);
        await toggleCamera(true);
      }
    } else {
      await toggleCamera();
    }
  };

  const handleMicToggle = async () => {
    if (devices.mics.length > 1) {
      const currentIndex = devices.mics.findIndex(m => m.deviceId === selectedMic);
      const nextIndex = (currentIndex + 1) % (devices.mics.length + 1);
      if (nextIndex === devices.mics.length) {
        setSelectedMic('');
        await toggleMic(false);
      } else {
        setSelectedMic(devices.mics[nextIndex].deviceId);
        await toggleMic(true);
      }
    } else {
      await toggleMic();
    }
  };


  useEffect(() => {
    const handlePageLoad = () => {
      const input = searchParams.get("input");
      if (input) {
        setTextInput(input);  // Set the input field with the query parameter
        handleSubmit();  // Automatically call handleSubmit
      }
      setLoading(false);  // Set loading to false when the page is fully loaded
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => {
        window.removeEventListener("load", handlePageLoad);
      };
    }
  }, [searchParams]);

  // Modify handleSubmit to ensure proper submission after loading
  const handleSubmit = async () => {
    if (loading) return;  // Prevent submission if still loading
    if (!textInput.trim()) return;
    const imageBase64 = isCameraOn ? await captureImage() : undefined;
    await getResponse(textInput, typeof imageBase64 === 'string' ? imageBase64 : undefined);
    setTextInput('');
  };
  
  return (
    <div className="flex w-100 flex-col space-y-4 my-4" style={{ fontSize: `${fontSize / 16}rem`, lineHeight, letterSpacing: `${letterSpacing}px` }}>
      {/* Video Preview - 50vh max */}
      <div className="relative h-[50vh] shrink-0">
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
          {response ? (
            <AIResponseDisplay
              response={response}
              isLoading={isLoading}
              onResponseEnd={handleResponseEnd}
            />
          ) : (
            <div className="text-gray-500">Known Bugs <br /> &#x2022; Speech output not working <br /> &#x2022; Some UI elements aren't mobile friendly and out of place</div>
          )}
        </Card>
      </div>
      <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />


      {/* Controls Section */}
      <div className="flex flex-col gap-2 w-100 xl:flex-row">
        <div className="flex gap-2 flex-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={isCameraOn ? "default" : "outline"}
                onClick={async () => {
                  await handleCameraToggle();
                  speak(isCameraOn ? 'Camera stopped' : 'Camera started');
                }}
                className="flex-1 relative min-h-[48px]"
              >
                <div className="flex items-center justify-center">
                  {isCameraOn ? <Camera className="mr-2" /> : <CameraOff className="mr-2" />}
                  <span>{isCameraOn ? 'Stop Camera' : 'Start Camera'}</span>
                </div>
                {getCameraStatusIndicator()}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              {devices.cameras.length > 1 ? 'Click to toggle camera, cycles through devices and off' : 'Click to toggle camera'}
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={isMicOn ? "default" : "outline"}
                onClick={async () => {
                  await handleMicToggle();
                  speak(isMicOn ? 'Microphone stopped' : 'Microphone started');
                }}
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
              {devices.mics.length > 1 ? 'Click to toggle microphone, cycles through devices and off' : 'Click to toggle microphone'}
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            className="flex-1"
          />
          <Button
            className="w-10 h-10"
            variant="accent"
            onClick={handleSubmit}
            style={{ backgroundColor: accentColor }}
          >
            <Send className="w-10 h-10" />
          </Button>
        </div>
      </div>
    </div>
  );
}
