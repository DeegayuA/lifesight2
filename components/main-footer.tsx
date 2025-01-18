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
    import { GitHub } from 'lucide-react';

    export function MainFooter() {
      return (
        <footer className="border-t bg-background py-8 text-center text-muted-foreground w-full">
          <div className="container flex flex-col items-center justify-center space-y-4 mx-auto">
            <p className="text-sm">
              LifeSight is a non-profit organization dedicated to helping the visually impaired. This website is done to fulfill a requirement to complete the Master of IT degree [2024], University of Kelaniya.
            </p>
            <Button asChild variant="outline">
              <Link href="/donate">Donate to Support Our Mission</Link>
            </Button>
            <div className="flex space-x-4">
							<TooltipProvider>
								<Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
											<p className="text-sm">Github</p>
                     	{/* <Github size={40} strokeWidth={2.5} absoluteStrokeWidth /> */}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    GitHub
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
