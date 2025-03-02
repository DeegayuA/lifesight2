import './globals.css';
<<<<<<< Updated upstream
import {Inter} from 'next/font/google';
import {cn} from '@/lib/utils';
import {Josefin_Sans} from 'next/font/google';
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {SettingsProvider} from "@/components/settings-provider";
import {ThemeFixer, ThemeProvider} from "@/components/theme-provider";
import {Theme} from "@radix-ui/themes";
import {LanguageProvider} from "@/components/language-provider";


const inter = Inter({subsets: ['latin']});
const josefinSans = Josefin_Sans({subsets: ['latin']});

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en" suppressHydrationWarning className="h-full">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <link rel="icon"
                  href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👓</text></svg>"
                  sizes="any"/>
            <link rel="preload" href="/_next/static/media/a34f9d1faa5f3315-s.p.woff2" as="font" type="font/woff2"
                  crossOrigin="anonymous"/>
            <link rel="preload" href="/_next/static/css/app/layout.css?v=1737186472472" as="style"/>
        </head>
        <body className={cn(inter.className, 'h-full min-h-screen')}>
        <SpeedInsights/>
        <Analytics/>
        <Theme>

            <ThemeFixer/>
            <ThemeProvider>
                <LanguageProvider>
                    <SettingsProvider>
                        <div id='web' className="flex-1">
                            {children}
                        </div>
                    </SettingsProvider>
                </LanguageProvider>
            </ThemeProvider>
        </Theme>
        </body>
        </html>
    );
=======
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SettingsProvider } from '@/components/settings-provider';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/components/language-provider';
import { ThemeProvider } from '@/components/theme-provider'; // Import ThemeProvider


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👓</text></svg>" sizes="any" />
        <link rel="preload" href="/_next/static/media/a34f9d1faa5f3315-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/css/app/layout.css?v=1737186472472" as="style" />
      </head>
      <body className={cn(inter.className, 'h-full min-h-screen')}>
        <ThemeProvider>
          <SettingsProvider>
            <TooltipProvider>
              <LanguageProvider>
                <LayoutWrapper>
                  {children}
                </LayoutWrapper>
              </LanguageProvider>
            </TooltipProvider>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
>>>>>>> Stashed changes
}
