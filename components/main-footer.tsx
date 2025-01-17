"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { cn } from '@/lib/utils';

    export function MainFooter() {
      return (
        <footer className="border-t bg-background py-8 text-center text-muted-foreground w-full">
          <div className="container flex flex-col items-center justify-center space-y-4 mx-auto">
            <p className="text-sm">
              LifeSight is a non-profit organization dedicated to helping the visually impaired.
            </p>
            <Button asChild variant="outline">
              <Link href="/donate">Donate to Support Our Mission</Link>
            </Button>
            <p className="text-xs">
              © {new Date().getFullYear()} LifeSight. All rights reserved.
            </p>
          </div>
        </footer>
      );
    }
