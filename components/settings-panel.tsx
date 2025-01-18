"use client";

    import { useState } from 'react';
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

    interface SettingsPanelProps {
      open: boolean;
      onOpenChange: (open: boolean) => void;
    }

    const accentColors = [
      { name: 'Classic Blue', value: 'hsl(230, 85%, 60%)' },
      { name: 'Soft Green', value: 'hsl(150, 85%, 60%)' },
      { name: 'Warm Red', value: 'hsl(280, 75%, 60%)' },
      { name: 'Vibrant Purple', value: 'hsl(330, 65%, 60%)' },
      { name: 'Bright Yellow', value: 'hsl(50, 85%, 60%)' },
      { name: 'Cool Cyan', value: 'hsl(200, 85%, 60%)' },
    ];

    export function SettingsPanel({ open, onOpenChange }: SettingsPanelProps) {
      const { theme, setHapticFeedback, hapticFeedback, setFontSize, fontSize, setLineHeight, lineHeight, setLetterSpacing, letterSpacing, setReducedMotion, reducedMotion, setHighContrast, highContrast, setScreenReader, screenReader, setAntiFlicker, antiFlicker, setAccentColor, accentColor } = useSettings();
      const { setTheme: setNextTheme } = useTheme();

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
        setFontSize(16);
        setLineHeight(1.5);
        setLetterSpacing(0);
        setReducedMotion(false);
        setHighContrast(false);
        setScreenReader(false);
        setAntiFlicker(false);
        setHapticFeedback(false);
        setAccentColor('hsl(230, 85%, 60%)');
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
                <Label htmlFor="theme-toggle">Theme</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleThemeChange}
                >
                  {theme === 'light' ? 'Dark' : 'Light'}
                </Button>
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
                  min={12}
                  max={24}
                  step={1}
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
                  {accentColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setAccentColor(color.value)}
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
