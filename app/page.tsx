"use client";
import { useSettings } from '@/components/settings-provider';
import { BackgroundLines } from '@/components/ui/background-lines';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, MessageSquareText, Phone, Lightbulb, Users, CalendarDays, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Playfair_Display } from 'next/font/google';
import { FeaturesSectionDemo } from '@/components/ui/bento';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  const { reducedMotion, fontSize, accentColor, highContrast } = useSettings();

  return (
    <main className="min-h-screen p-4 sm:p-6" style={{ fontSize: `${fontSize / 16}rem` }}>
      {/* Hero Section */}
      <section className="rounded-lg relative h-[70vh] flex items-center justify-center overflow-hidden mx-auto z-20">
        <BackgroundLines reducedMotion={reducedMotion} className="flex items-center justify-center w-full flex-col px-4">
          <div className="absolute inset-0">
            <img
              src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/hero.jpg"
              alt="Immersive Background"
              className={cn(
                "object-cover w-full h-full opacity-40 brightness-120",
                highContrast && "brightness-50 contrast-200" 
              )}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center text-white space-y-4">
            <h1 className={cn("text-5xl font-bold tracking-tight", playfairDisplay.className)} style={{ fontSize: `${fontSize / 16 * 3.125}rem` }}>
              Empowering Independence Through AI Vision
            </h1>
            <p className="text-xl text-white/80" style={{ fontSize: `${fontSize / 16 * 1.25}rem` }}>
              Experience a new level of accessibility with our AI-powered tools designed for the visually impaired.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="accent" size="lg" style={{ fontSize: `${fontSize / 16 * 0.875}rem`, backgroundColor: accentColor }}>
                <Link href="/app">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </BackgroundLines>
      </section>

      <section>
        <FeaturesSectionDemo />
      </section>
    </main>
  );
}
