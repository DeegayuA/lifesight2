"use client";

    import { useEffect } from 'react';
    import { MainInterface } from '@/components/main-interface';
    import { OnboardingDialog } from '@/components/onboarding-dialog';
    import { useLocalStorage } from '@/hooks/use-local-storage';
    import { cn } from '@/lib/utils';

    export default function AppPage() {
      const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage('hasSeenOnboarding', false);

      useEffect(() => {
        // Request permissions when component mounts
        if (typeof window !== 'undefined') {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .catch(error => console.error('Error accessing media devices:', error));
        }
      }, []);

      return (
        <main className={cn('h-screen bg-background overflow-hidden')}>
          <MainInterface />
          {!hasSeenOnboarding && (
            <OnboardingDialog 
              onComplete={() => setHasSeenOnboarding(true)} 
            />
          )}
        </main>
      );
    }
