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
      const [textInput, setTextInput] = useState('');
      const [selectedCamera, setSelectedCamera] = useState<string>('');
      const [selectedMic, setSelectedMic] = useState<string>('');
      const [devices, setDevices] = useState<{ cameras: MediaDeviceInfo[], mics: MediaDeviceInfo[] }>({
        cameras: [],
        mics: []
      });
      const [settingsOpen, setSettingsOpen] = useState(false);

      const videoRef = useRef<HTMLVideoElement>(null);
      const mediaStreamRef = useRef<MediaStream | null>(null);
      const { isLoading, response, getResponse } = useAIResponse();
      const { language } = useLanguage();
      const recognitionRef = useRef<SpeechRecognition | null>(null);
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

      const toggleCamera = async (forceOn?: boolean) => {
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

      const toggleMic = async (forceOn?: boolean) => {
        try {
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
        await getResponse(textInput, imageBase64);
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

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = language;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.maxAlternatives = 1;

        recognitionRef.current.onresult = async (event) => {
          const transcript = event.results[0][0].transcript;
          setTextInput(transcript);
          const imageBase64 = isCameraOn ? await captureImage() : undefined;
          await getResponse(transcript, imageBase64);
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
        };

        recognitionRef.current.onend = () => {
          if (isMicOn) {
            recognitionRef.current?.start();
          }
        };

        recognitionRef.current.start();
      };

      const handleVoiceCommand = useCallback(async (command: string) => {
        if (command.includes('start camera')) {
          await toggleCamera(true);
        } else if (command.includes('stop camera')) {
          await toggleCamera(false);
        } else if (command.includes('start mic')) {
          await toggleMic(true);
        } else if (command.includes('stop mic')) {
          await toggleMic(false);
        } else if (command.includes('repeat') || command.includes('respeak')) {
          if (response) {
            const utterance = new SpeechSynthesisUtterance(response);
            window.speechSynthesis.speak(utterance);
          }
        }
      }, [response, toggleCamera, toggleMic]);

      useEffect(() => {
        if (textInput && !isLoading) {
          handleVoiceCommand(textInput.toLowerCase());
        }
      }, [textInput, isLoading, handleVoiceCommand]);

      return (
        <div className="flex flex-col p-4 space-y-4" style={{fontSize, lineHeight, letterSpacing: `${letterSpacing}px`}}>
          {/* Video Preview */}
          <div className="relative flex-1 max-h-[10vh]">
						<Card className="relative w-full aspect-[16/9] max-h-[60vh]">
							<video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-cover rounded-lg ${!isCameraOn ? 'hidden' : ''}`}
              />
              {!isCameraOn && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <CameraOff className="w-12 h-12 text-muted-foreground" />
                </div>
              )}
            </Card>
          </div>

					{/* Response Area */}
          <div className="flex-1 overflow-y-auto">
            <AIResponseDisplay
              response={response}
              isLoading={isLoading}
              onResponseEnd={handleResponseEnd}
            />
          </div>
          <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />
        </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 max-w-[1280px] mx-4 w-full flex flex-col sm:flex-row gap-2 items-center justify-center overflow-hidden">
            <div className="flex flex-wrap flex-1 w-full w-full ">
              <Button
                variant={isCameraOn ? "default" : "outline"}
                onClick={() => toggleCamera()}
              >
                {isCameraOn ? <Camera /> : <CameraOff />}
                <span className="ml-2">{isCameraOn ? 'Stop Camera' : 'Start Camera'}</span>
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={isMicOn ? "default" : "outline"}
                    onClick={() => toggleMic()}
                  >
                    {isMicOn ? <Mic /> : <MicOff />}
                    <span className="ml-2">{isMicOn ? 'Stop Mic' : 'Start Mic'}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center">
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
              <Button asChild variant="outline">
                <Link href="/call-assistant">
                  <Phone className="h-5 w-5" />
                  <span className="ml-2">Call Assistance</span>
                </Link>
              </Button>
            </div>
            <div className="flex flex-1 mr-2 w-full ">
              <Input
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Type your question or command..."
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                className="flex-1"
              />
              <Button onClick={handleSubmit}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          
      );
    }
