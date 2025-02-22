"use client";

import * as React from 'react';
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
import { ACCENT_COLORS } from '@/lib/constants';
import { FloatingNav } from './ui/floating-navbar';
import { IconAppWindow, IconHome, IconMessage, IconSettings } from '@tabler/icons-react';

export function MainNavbar() {
  const { setTheme, theme } = useTheme();
  const googleTranslateRef = useRef<HTMLDivElement | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { accentColor, fontSize, setAccentColor } = useSettings();

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

  const handleThemeChange = () => {
    let newTheme: 'system' | 'dark' | 'light';
    if (theme === 'light') {
      newTheme = 'dark';
    } else if (theme === 'dark') {
      newTheme = 'system';
    } else {
      newTheme = 'light';
    }
    setTheme(newTheme);

    // Update accent color based on the new theme
    const html = document.querySelector('html');
    if (html) {
      let mode = newTheme === 'light' ? 'lightMode' : 'darkMode';
      if (newTheme === 'system') {
        if (html.style.colorScheme === 'light' || html.classList.contains('light')) {
          mode = 'lightMode';
        } else if (html.style.colorScheme === 'dark' || html.classList.contains('dark')) {
          mode = 'darkMode';
        }
      }
      const currentAccent = ACCENT_COLORS.find(
        (color) => color.lightMode === accentColor || color.darkMode === accentColor
      );
      if (currentAccent) {
        setAccentColor(currentAccent[mode as 'lightMode' | 'darkMode']);
      } else {
        setAccentColor(ACCENT_COLORS[5][mode as 'lightMode' | 'darkMode']);
      }
    }
  };

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />,
      hideOnMd: true,
    },
    {
      name: "App",
      link: "/app",
      icon: <IconAppWindow className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />
      ),
    },
    {
      name: "Settings",
      onClick: () => setSettingsOpen(true),  // Opens the popup instead of navigating
      icon: <Settings className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />,
    },
    {
      name: theme === "light" ? "Dark Theme" : theme === "dark" ? "Light Theme" : "System Theme",
      onClick: handleThemeChange,  // Calls the function to toggle themes
      icon: (
        theme === "light" ? (
          <Moon className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />
        ) : theme === "dark" ? (
          <Sun className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />
        ) : (
          <SunMoon className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />
        )
      ),
    }
  ];

  return (

    <header className={cn("sticky top-0 z-50 backdrop-blur-md border-b w-full")} style={{ backgroundColor: accentColor }}>
      <div className="fixed  w-full">
        <FloatingNav navItems={navItems} />
      </div>
      <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />
    </header>
  );
}


 