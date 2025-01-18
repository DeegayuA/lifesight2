"use client";

import { useSettings } from '@/components/settings-provider';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const {
    fontSize,
    lineHeight,
    letterSpacing,
    reducedMotion,
    highContrast,
    screenReader,
    antiFlicker,
    accentColor,
  } = useSettings();

  return (
    <div
      style={{
        fontSize,
        lineHeight,
        letterSpacing: `${letterSpacing}px`,
      }}
      className={cn(
        reducedMotion ? 'transition-none' : '',
        highContrast ? 'high-contrast' : '',
        antiFlicker ? 'no-flicker' : '',
        `accent-[${accentColor}]`
      )}
      aria-live={screenReader ? 'polite' : 'off'} // Always sets a valid ARIA value
    >
      {children}
    </div>
  );
}
