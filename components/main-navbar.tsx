"use client";

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Settings, Moon, Sun, SunMoon, Globe, Building2, Dot } from 'lucide-react';
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
import { IconAppWindow, IconHome, IconMessage, IconUsersGroup } from '@tabler/icons-react';
import { LanguagePanel } from './LanguagePanel';



export function MainNavbar() {
  const { setTheme, theme } = useTheme();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false); // New state for language panel

  const { accentColor, fontSize, setAccentColor } = useSettings();

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
      name: "|", 
      divider: true, 
      icon: <Dot className="h-3 w-3 sm:h-3 sm:w-3 text-foreground ml-2" /> 
    },
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />,
      hideOnMd: true,
    },
    {
      name: "App",
      link: "/web/app",
      icon: <IconAppWindow className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />,
    },
    {
      name: "Contact",
      link: "/web/contact",
      icon: (
        <IconMessage className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />
      ),
    },
    {
      name: "About",
      link: "/web/about",
      icon: (
        <IconUsersGroup className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />
      ),
    },
    { 
      name: "|", 
      divider: true, 
      icon: <Dot className="h-3 w-3 sm:h-3 sm:w-3 text-foreground" /> 
    },
    {
      name: "Settings",
      onClick: () => setSettingsOpen(true),  // Opens the popup instead of navigating
      icon: <Settings className="h-3 w-3 sm:h-5 sm:w-5 bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground" />,
    },
    {
      name: "Language",
      onClick: () => setLanguageOpen(true),
      icon: <Globe className="h-3 w-3 sm:h-5 sm:w-5 text-foreground hover:text-accent-foreground" />, // Mobile icon
    },
    {
      name: theme === "light" ? "Dark" : theme === "dark" ? "Light" : "System",
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
    },
    { 
      name: "|", 
      divider: true, 
      icon: <Dot className="h-3 w-3 sm:h-3 sm:w-3 text-foreground mr-2" /> 
    },
    
  ];

  return (

    <header className={cn("sticky top-0 z-50 backdrop-blur-md border-b w-full")} style={{ backgroundColor: accentColor }}>
      <div className="fixed  w-full">
        <FloatingNav navItems={navItems} />
      </div>
      <SettingsPanel open={settingsOpen} onOpenChange={setSettingsOpen} />
      <LanguagePanel open={languageOpen} onOpenChange={setLanguageOpen} />

    </header>
  );
}
