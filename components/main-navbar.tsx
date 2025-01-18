"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Settings, Moon, Sun } from 'lucide-react';
    import { useTheme } from 'next-themes';
    import { cn } from '@/lib/utils';
    import { useEffect, useRef, useState } from 'react';
    import { SettingsPanel } from './settings-panel';

    export function MainNavbar() {
      const { setTheme, theme } = useTheme();
      const googleTranslateRef = useRef<HTMLDivElement>(null);
      const [settingsOpen, setSettingsOpen] = useState(false);

      useEffect(() => {
        const googleTranslateElementInit = () => {
          if (typeof window !== 'undefined' && (window as any).google && (window as any).google.translate) {
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: "en",
                autoDisplay: false,
                layout: (window as any).google.translate.TranslateElement.FloatPosition.TOP_LEFT
              },
              "google_translate_element"
            );
          }
        };

        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        (window as any).googleTranslateElementInit = googleTranslateElementInit;
      }, []);

      return (
        <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b w-full">
          <div className="container flex h-16 items-center justify-between px-8 mx-auto max-w-[1280px]">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">👓</span>
                <span className="font-bold text-xl">LifeSight_v2.0.9</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div ref={googleTranslateRef} className="mr-2" style={{zIndex: 100, position: 'relative'}}></div>
              <Button variant="ghost" size="icon" onClick={() => setSettingsOpen(true)}>
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />
        </header>
      );
    }
