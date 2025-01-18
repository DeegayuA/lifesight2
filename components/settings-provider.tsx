"use client";

    import { useLocalStorage } from '@/hooks/use-local-storage';
    import React, { createContext, useContext } from 'react';

    type SettingsContextType = {
      fontSize: number;
      lineHeight: number;
      letterSpacing: number;
      reducedMotion: boolean;
      highContrast: boolean;
      screenReader: boolean;
      antiFlicker: boolean;
      hapticFeedback: boolean;
      accentColor: string;
      setFontSize: (size: number) => void;
      setLineHeight: (height: number) => void;
      setLetterSpacing: (spacing: number) => void;
      setReducedMotion: (reduced: boolean) => void;
      setHighContrast: (contrast: boolean) => void;
      setScreenReader: (reader: boolean) => void;
      setAntiFlicker: (flicker: boolean) => void;
      setHapticFeedback: (haptic: boolean) => void;
      setAccentColor: (color: string) => void;
    };

    const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

    export function SettingsProvider({ children }: { children: React.ReactNode }) {
      const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);
      const [lineHeight, setLineHeight] = useLocalStorage('lineHeight', 1.5);
      const [letterSpacing, setLetterSpacing] = useLocalStorage('letterSpacing', 0);
      const [reducedMotion, setReducedMotion] = useLocalStorage('reducedMotion', false);
      const [highContrast, setHighContrast] = useLocalStorage('highContrast', false);
      const [screenReader, setScreenReader] = useLocalStorage('screenReader', false);
      const [antiFlicker, setAntiFlicker] = useLocalStorage('antiFlicker', false);
      const [hapticFeedback, setHapticFeedback] = useLocalStorage('hapticFeedback', false);
      const [accentColor, setAccentColor] = useLocalStorage('accentColor', 'hsl(230, 85%, 60%)');

      return (
        <SettingsContext.Provider
          value={{
            fontSize,
            lineHeight,
            letterSpacing,
            reducedMotion,
            highContrast,
            screenReader,
            antiFlicker,
            hapticFeedback,
            accentColor,
            setFontSize,
            setLineHeight,
            setLetterSpacing,
            setReducedMotion,
            setHighContrast,
            setScreenReader,
            setAntiFlicker,
            setHapticFeedback,
            setAccentColor,
          }}
        >
          {children}
        </SettingsContext.Provider>
      );
    }

    export const useSettings = () => {
      const context = useContext(SettingsContext);
      if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
      }
      return context;
    };
