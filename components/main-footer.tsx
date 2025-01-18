"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { cn } from '@/lib/utils';
    import {
      Tooltip,
      TooltipContent,
      TooltipTrigger,
			TooltipProvider
    } from '@/components/ui/tooltip';
    import { Facebook, Instagram, Twitter } from 'lucide-react';

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
            <div className="flex space-x-4">
							<TooltipProvider>
								<Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  Facebook
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  Instagram
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  Twitter
                </TooltipContent>
              </Tooltip>
							</TooltipProvider>
            </div>
            <div className="flex space-x-4">
              <Link href="/sitemap" className="text-xs hover:underline">Sitemap</Link>
              <Link href="/terms" className="text-xs hover:underline">Terms of Service</Link>
              <Link href="/privacy" className="text-xs hover:underline">Privacy Policy</Link>
              <Link href="/help" className="text-xs hover:underline">Help Center</Link>
            </div>
            <p className="text-xs">
              © {new Date().getFullYear()} LifeSight. All rights reserved.
            </p>
          </div>
        </footer>
      );
    }
