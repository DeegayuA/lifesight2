"use client";

    import { useEffect, useRef } from 'react';
    import { Card } from '@/components/ui/card';
    import { Loader2 } from 'lucide-react';

    interface AIResponseDisplayProps {
      response: string;
      isLoading: boolean;
      onResponseEnd?: () => void;
    }

    export function AIResponseDisplay({
      response,
      isLoading,
      onResponseEnd
    }: AIResponseDisplayProps) {
      const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

      useEffect(() => {
        if (response && !isLoading) {
          utteranceRef.current = new SpeechSynthesisUtterance(response);
          utteranceRef.current.onend = () => {
            onResponseEnd?.();
          };
          window.speechSynthesis.speak(utteranceRef.current);
        }

        return () => {
          if (utteranceRef.current) {
            window.speechSynthesis.cancel();
          }
        };
      }, [response, isLoading, onResponseEnd]);

      if (isLoading) {
        return (
          <Card className="p-4 flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-[var(--accent)]" />
            <span className="ml-2">Processing your request...</span>
          </Card>
        );
      }

      if (!response) {
        return null;
      }

      return (
        <Card className="p-4 space-y-2">
          <p className="text-lg">{response}</p>
        </Card>
      );
    }
