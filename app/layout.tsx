import './globals.css';
    import type { Metadata } from 'next';
    import { Inter } from 'next/font/google';
    import { ThemeProvider } from '@/components/theme-provider';
    import { LanguageProvider } from '@/components/language-provider';
    import { Toaster } from '@/components/ui/sonner';
    import { cn } from '@/lib/utils';
    import { MainNavbar } from '@/components/main-navbar';
    import { MainFooter } from '@/components/main-footer';

    const inter = Inter({ subsets: ['latin'] });

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
          </head>
          <body className={cn(inter.className, 'h-full min-h-screen')}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <LanguageProvider>
                <MainNavbar />
                <div className="flex-1">
                  {children}
                </div>
                <MainFooter />
                <Toaster />
              </LanguageProvider>
            </ThemeProvider>
          </body>
        </html>
      );
    }
