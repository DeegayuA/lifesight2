"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Settings, Moon, Sun, SunMoon } from 'lucide-react';
    import { useTheme } from 'next-themes';
    import { cn } from '@/lib/utils';
    import { useEffect, useRef, useState } from 'react';
    import { SettingsPanel } from './settings-panel';
    import { useSettings } from '@/components/settings-provider';
    import {
      Tooltip,
      TooltipContent,
      TooltipTrigger,
    } from '@/components/ui/tooltip';

    export function MainNavbar() {
      const { setTheme, theme } = useTheme();
      const googleTranslateRef = useRef<HTMLDivElement>(null);
      const [settingsOpen, setSettingsOpen] = useState(false);
      const { accentColor, fontSize } = useSettings();

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
        <header className={cn("sticky top-0 z-50 backdrop-blur-md border-b w-full")} style={{ backgroundColor: accentColor }}>
          <div className="container flex h-16 items-center justify-between px-8 mx-auto max-w-[1280px]">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">👓</span>
                <span className="font-bold text-xl" style={{ fontSize: `${fontSize / 16 * 1.25}rem` }}>LifeSight_v0.2.10</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div ref={googleTranslateRef} className="mr-2" style={{zIndex: 100, position: 'relative'}}></div>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setSettingsOpen(true)} style={{ height: `${fontSize / 16 * 2.5}rem`, width: `${fontSize / 16 * 2.5}rem` }}>
                    <Settings className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  { 'Settings' }
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')}
                    style={{ height: `${fontSize / 16 * 2.5}rem`, width: `${fontSize / 16 * 2.5}rem` }}
                  >
                    {theme === 'light' ? <Moon className="h-5 w-5" /> : theme === 'dark' ? <Sun className="h-5 w-5" /> : <SunMoon className="h-5 w-5" /> }
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  { theme === 'light'
                    ? 'Switch to Dark Mode'
                    : theme === 'dark'
                    ? 'Switch to Light Mode'
                    : 'Theme Auto (System Default)' }
                </TooltipContent>
              </Tooltip>
              
             
            </div>
          </div>
          <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />
        </header>
      );
    }
