"use client";

    import { useEffect, useState } from 'react';
    import { MainInterface } from '@/components/main-interface';
    import { OnboardingDialog } from '@/components/onboarding-dialog';
    import { useLocalStorage } from '@/hooks/use-local-storage';
    import { cn } from '@/lib/utils';
    import { TooltipProvider } from '@/components/ui/tooltip';

    export default function AppPage() {
      const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage('hasSeenOnboarding', false);
      const [isMounted, setIsMounted] = useState(false);

      useEffect(() => {
        setIsMounted(true);
        // Request permissions when component mounts
        if (typeof window !== 'undefined') {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .catch(error => console.error('Error accessing media devices:', error));
        }
      }, []);

      if (!isMounted) {
        return null;
      }

      return (
        <>
          <main className={cn('bg-background overflow-hidden')}>
            <TooltipProvider>
              <MainInterface />
              {!hasSeenOnboarding && (
                <OnboardingDialog 
                  onComplete={() => setHasSeenOnboarding(true)} 
                />
              )}
            </TooltipProvider>
          </main>
        </>
      );
    }
