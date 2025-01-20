"use client";

    import { useState, useEffect } from 'react';
    import {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
    } from '@/components/ui/dialog';
    import { Button } from '@/components/ui/button';
    import { useTheme } from 'next-themes';
    import { cn } from '@/lib/utils';
    import { useLocalStorage } from '@/hooks/use-local-storage';
    import { Switch } from '@/components/ui/switch';
    import { Label } from '@/components/ui/label';
    import { Slider } from '@/components/ui/slider';
    import { useSettings } from '@/components/settings-provider';
    import { Circle } from 'lucide-react';
    import { THEME_COLORS } from '@/lib/constants';

    interface SettingsPanelProps {
      open: boolean;
      onOpenChange: (open: boolean) => void;
    }

    export const accentColors = [
      { name: 'Classic Black', value: 'hsl(0, 0%, 10%)', darkValue: 'hsl(0, 0%, 95%)' },
      { name: 'Classic Blue', value: 'hsl(230, 85%, 40%)', darkValue: 'hsl(230, 85%, 60%)' },
      { name: 'Soft Green', value: 'hsl(150, 50%, 40%)', darkValue: 'hsl(150, 50%, 70%)' },
      { name: 'Warm Orange', value: 'hsl(30, 85%, 45%)', darkValue: 'hsl(30, 85%, 65%)' },
      { name: 'Vibrant Purple', value: 'hsl(280, 65%, 40%)', darkValue: 'hsl(280, 65%, 60%)' },
      { name: 'Bright Yellow', value: 'hsl(50, 85%, 50%)', darkValue: 'hsl(50, 85%, 70%)' },
      { name: 'Cool Cyan', value: 'hsl(200, 85%, 45%)', darkValue: 'hsl(200, 85%, 65%)' },
      { name: 'Soft Brown', value: 'hsl(25, 55%, 40%)', darkValue: 'hsl(25, 55%, 65%)' },
      { name: 'Muted Red', value: 'hsl(0, 65%, 40%)', darkValue: 'hsl(0, 65%, 65%)' },
      { name: 'Teal Green', value: 'hsl(180, 55%, 40%)', darkValue: 'hsl(180, 55%, 65%)' },
    ];
    
    
    const themePalettes = Object.entries(THEME_COLORS)
      .filter(([key]) => key.startsWith('palette-'))
      .map(([key, value]) => ({
        name: key.replace('palette-', '').replace(/-/g, ' '),
        value: key,
        primary: value.primary,
        secondary: value.secondary,
        backgroundLight: value.backgroundLight,
        backgroundDark: value.backgroundDark,
        textLight: value.textLight,
        textDark: value.textDark,
      }));

    export function SettingsPanel({ open, onOpenChange }: SettingsPanelProps) {
      const { theme, setHapticFeedback, hapticFeedback, setFontSize, fontSize, setLineHeight, lineHeight, setLetterSpacing, letterSpacing, setReducedMotion, reducedMotion, setHighContrast, highContrast, setScreenReader, screenReader, setAntiFlicker, antiFlicker, setAccentColor, accentColor, setPalette, palette } = useSettings();
      const { setTheme: setNextTheme } = useTheme();
      const [displayedAccentColors, setDisplayedAccentColors] = useState(accentColors);

      useEffect(() => {
        setDisplayedAccentColors(
          accentColors.map(color => ({
            ...color,
            value: theme === 'light' ? color.value : color.darkValue,
          }))
        );
      }, [theme]);

      const handleThemeChange = () => {
        setNextTheme(theme === 'light' ? 'dark' : 'light');
      };

      const handleHapticFeedbackChange = (haptic: boolean) => {
        setHapticFeedback(haptic);
        if (haptic && typeof window !== 'undefined' && 'vibrate' in navigator) {
          navigator.vibrate(50);
        }
      };

      const handleResetSettings = () => {
        setFontSize(10);
        setLineHeight(1.5);
        setLetterSpacing(0);
        setReducedMotion(false);
        setHighContrast(false);
        setScreenReader(false);
        setAntiFlicker(false);
        setHapticFeedback(false);
        setAccentColor('hsl(230, 85%, 60%)');
        setPalette('palette-1');
      };

      const handleAccentColorChange = (color: string) => {
        setAccentColor(color);
      };

      const handlePaletteChange = (palette: string) => {
        setPalette(palette);
      };

      return (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-[425px]" style={{fontSize, lineHeight, letterSpacing: `${letterSpacing}px`}}>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Customize your experience.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="flex items-center justify-between">
                {/* <Label htmlFor="theme-toggle">Theme</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleThemeChange}
                >
                  {theme === 'light' ? 'Dark' : 'Light'}
                </Button> */}
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="haptic-feedback">Haptic Feedback</Label>
                <Switch
                  id="haptic-feedback"
                  checked={hapticFeedback}
                  onCheckedChange={handleHapticFeedbackChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="reduced-motion">Reduced Motion</Label>
                <Switch
                  id="reduced-motion"
                  checked={reducedMotion}
                  onCheckedChange={setReducedMotion}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast">High Contrast</Label>
                <Switch
                  id="high-contrast"
                  checked={highContrast}
                  onCheckedChange={setHighContrast}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="screen-reader">Screen Reader Support</Label>
                <Switch
                  id="screen-reader"
                  checked={screenReader}
                  onCheckedChange={setScreenReader}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="anti-flicker">Anti-Flicker</Label>
                <Switch
                  id="anti-flicker"
                  checked={antiFlicker}
                  onCheckedChange={setAntiFlicker}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Slider
                  id="font-size"
                  min={6}
                  max={24}
                  step={2}
                  value={[fontSize]}
                  onValueChange={(value) => setFontSize(value[0])}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="line-height">Line Height</Label>
                <Slider
                  id="line-height"
                  min={1}
                  max={2}
                  step={0.1}
                  value={[lineHeight]}
                  onValueChange={(value) => setLineHeight(value[0])}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="letter-spacing">Letter Spacing</Label>
                <Slider
                  id="letter-spacing"
                  min={-2}
                  max={2}
                  step={0.1}
                  value={[letterSpacing]}
                  onValueChange={(value) => setLetterSpacing(value[0])}
                />
              </div>
              <div className="space-y-2">
                <Label>Accent Color</Label>
                <div className="flex items-center gap-2">
                  {displayedAccentColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleAccentColorChange(color.value)}
                      className={cn(
                        'h-6 w-6 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                        accentColor === color.value && 'ring-2 ring-primary',
                      )}
                      style={{ backgroundColor: color.value }}
                    >
                      <span className="sr-only">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              {/* <div className="space-y-2">
                <Label>Theme Palette</Label>
                <div className="flex items-center gap-2 flex-wrap">
                  {themePalettes.map((paletteItem) => (
                    <button
                      key={paletteItem.value}
                      onClick={() => handlePaletteChange(paletteItem.value)}
                      className={cn(
                        'h-12 w-12 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                        palette === paletteItem.value && 'ring-2 ring-primary',
                      )}
                    >
                      <div className="flex flex-col h-full w-full">
                        <div className="h-1/6 w-full" style={{ backgroundColor: THEME_COLORS[paletteItem.value as keyof typeof THEME_COLORS]?.primary }} />
                        <div className="h-1/6 w-full" style={{ backgroundColor: THEME_COLORS[paletteItem.value as keyof typeof THEME_COLORS]?.secondary }} />
                        <div className="h-1/6 w-full" style={{ backgroundColor: THEME_COLORS[paletteItem.value as keyof typeof THEME_COLORS]?.backgroundLight }} />
                        <div className="h-1/6 w-full" style={{ backgroundColor: THEME_COLORS[paletteItem.value as keyof typeof THEME_COLORS]?.backgroundDark }} />
                        <div className="h-1/6 w-full" style={{ backgroundColor: THEME_COLORS[paletteItem.value as keyof typeof THEME_COLORS]?.textLight }} />
                        <div className="h-1/6 w-full" style={{ backgroundColor: THEME_COLORS[paletteItem.value as keyof typeof THEME_COLORS]?.textDark }} />
                      </div>
                      <span className="sr-only">
                        {paletteItem.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div> */}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleResetSettings}>
                Reset Settings
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
