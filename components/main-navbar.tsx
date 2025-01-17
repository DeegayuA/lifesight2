"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Settings, Moon, Sun } from 'lucide-react';
    import { useTheme } from 'next-themes';
    import { cn } from '@/lib/utils';
    import { useEffect, useRef } from 'react';

    export function MainNavbar() {
      const { setTheme, theme } = useTheme();
      const googleTranslateRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        const googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              autoDisplay: false,
              layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
            },
            "google_translate_element"
          );
        };

        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }, []);

      return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b w-full">
          <div className="container flex h-16 items-center justify-between px-4 mx-auto">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">👓</span>
                <span className="font-bold text-xl">LifeSightV2</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div ref={googleTranslateRef} className="mr-2" style={{zIndex: 100, position: 'relative'}}></div>
              <Button variant="ghost" size="icon">
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
        </header>
      );
    }
