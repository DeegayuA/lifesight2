"use client";

    import { useLocalStorage } from '@/hooks/use-local-storage';
    import React, { createContext, useContext, useState, useEffect } from 'react'; // <-- Import useState
    import { THEME_COLORS } from '@/lib/constants';

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
      theme: string;
      palette: string;
      setTheme?: (theme: string) => void;
      setFontSize: (size: number) => void;
      setLineHeight: (height: number) => void;
      setLetterSpacing: (spacing: number) => void;
      setReducedMotion: (reduced: boolean) => void;
      setHighContrast: (contrast: boolean) => void;
      setScreenReader: (reader: boolean) => void;
      setAntiFlicker: (flicker: boolean) => void;
      setHapticFeedback: (haptic: boolean) => void;
      setAccentColor: (color: string) => void;
      setPalette: (palette: string) => void;
    };

    const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

    export function SettingsProvider({ children }: { children: React.ReactNode }) {
      const [fontSize, setFontSize] = useLocalStorage('fontSize', 24);
      const [lineHeight, setLineHeight] = useLocalStorage('lineHeight', 1.5);
      const [letterSpacing, setLetterSpacing] = useLocalStorage('letterSpacing', 0);
      const [reducedMotion, setReducedMotion] = useLocalStorage('reducedMotion', false);
      const [highContrast, setHighContrast] = useLocalStorage('highContrast', false);
      const [screenReader, setScreenReader] = useLocalStorage('screenReader', false);
      const [antiFlicker, setAntiFlicker] = useLocalStorage('antiFlicker', false);
      const [hapticFeedback, setHapticFeedback] = useLocalStorage('hapticFeedback', false);
      const [accentColor, setAccentColor] = useLocalStorage('accentColor', 'hsl(230, 85%, 60%)');
      const [palette, setPalette] = useLocalStorage('palette', 'palette-1');
      const [theme, setTheme] = useState('light'); // <-- Now useState is available
      const [accentRgb, setAccentRgb] = useState('230, 85%, 60%');

      useEffect(() => {
        const hslToRgb = (hsl: string) => {
          const hslValues = hsl.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
          if (!hslValues) return '0, 0, 0';
          let h = parseInt(hslValues[1]) / 360;
          let s = parseInt(hslValues[2]) / 100;
          let l = parseInt(hslValues[3]) / 100;
          let r, g, b;

          if (s === 0) {
            r = g = b = l;
          } else {
            const hue2rgb = (p: number, q: number, t: number) => {
              if (t < 0) t += 1;
              if (t > 1) t -= 1;
              if (t < 1 / 6) return p + (q - p) * 6 * t;
              if (t < 1 / 2) return q;
              if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
              return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }

          return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`;
        };

        setAccentRgb(hslToRgb(accentColor));
      }, [accentColor]);

      return (
        <SettingsContext.Provider
          value={{
            theme,
            fontSize,
            lineHeight,
            letterSpacing,
            reducedMotion,
            highContrast,
            screenReader,
            antiFlicker,
            hapticFeedback,
            accentColor,
            palette,
            setTheme,
            setFontSize,
            setLineHeight,
            setLetterSpacing,
            setReducedMotion,
            setHighContrast,
            setScreenReader,
            setAntiFlicker,
            setHapticFeedback,
            setAccentColor: (color: string) => {
              setAccentColor(color);
            },
            setPalette: (palette: string) => {
              setPalette(palette);
            }
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
