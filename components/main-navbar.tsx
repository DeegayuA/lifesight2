"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Settings, Moon, Sun } from 'lucide-react';
    import { useTheme } from 'next-themes';
    import { cn } from '@/lib/utils';

    export function MainNavbar() {
      const { setTheme, theme } = useTheme();

      return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b w-full">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">👓</span>
                <span className="font-bold text-xl">LifeSightV2</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
							              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>
      );
    }
