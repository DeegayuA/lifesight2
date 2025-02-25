import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeFixer, ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { MainNavbar } from '@/components/main-navbar';
import { MainFooter } from '@/components/main-footer';
import { SettingsProvider } from '@/components/settings-provider';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { Theme } from "@radix-ui/themes";
import { Josefin_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });
const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lifesight - AI Assisted Vision',
  description: 'AI-powered assistant helping users navigate their daily tasks independently',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👓</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👓</text></svg>" sizes="any" />
        <link rel="preload" href="/_next/static/media/a34f9d1faa5f3315-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/css/app/layout.css?v=1737186472472" as="style" />
      </head>
      <body className={cn(josefinSans.className, 'h-full min-h-screen')}>
        <Theme>
          <SpeedInsights />
          <Analytics />
          <ThemeFixer />
          <ThemeProvider>
            <LanguageProvider>
              <SettingsProvider>
                <LayoutWrapper>
                  <MainNavbar />
                  <div className="flex-1">
                    {children}
                  </div>
                  <MainFooter />
                  <Toaster />
                </LayoutWrapper>
              </SettingsProvider>
            </LanguageProvider>
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  );
}