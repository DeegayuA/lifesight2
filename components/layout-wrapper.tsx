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

  // Determine aria-live value based on the screenReader setting
  const ariaLiveValue = screenReader ? 'polite' : 'off';

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
      aria-live={ariaLiveValue} // Valid ARIA value passed
    >
      {children}
    </div>
  );
}
