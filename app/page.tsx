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
import { BackgroundBeams } from '@/components/ui/background-beams';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { PlaceholdersAndVanishInputDemo } from '@/components/vanishing_text';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  const { reducedMotion, fontSize, accentColor, highContrast } = useSettings();

  return (
    <main
      className="min-h-screen p-4 sm:p-6"
      style={{
        fontSize: `${fontSize / 16}rem`,
      }}
    >      {/* Hero Section */}
      <section
        className="rounded-lg relative h-[70vh] flex items-center justify-center overflow-hidden mx-auto z-20 max-w-[1280px]"
        aria-labelledby="hero-heading"
      >
        <BackgroundLines
          reducedMotion={reducedMotion}
          className="flex items-center justify-center w-full flex-col px-4"
        >
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
          <PlaceholdersAndVanishInputDemo />
          {/* <div className="relative z-10 text-center text-white space-y-4">
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
          </div> */}
        </BackgroundLines>
      </section>

      <section className='flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20'>
        <FeaturesSectionDemo />
      </section>
      
        {/* Waitlist Section */}
        <section
          className="flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20"
          aria-labelledby="waitlist-heading"
        >
          <div
            className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
            style={{
              backgroundColor: highContrast ? '#222' : '#1a1a1a',
              color: highContrast ? '#fff' : '#bbb',
            }}
          >
            <div className="max-w-2xl mx-auto p-4">
              <h1
                id="waitlist-heading"
                className={cn(
                  "relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold",
                  playfairDisplay.className
                )}
                style={{ fontSize: `${fontSize / 16 * 3.125}rem` }}
              >
                Join the waitlist
              </h1>
              <p
                className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
                style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}
              >
                Welcome to MailJet, the best transactional email service on the web.
                We provide reliable, scalable, and customizable email solutions for
                your business. Whether you&apos;re sending order confirmations,
                password reset emails, or promotional campaigns, MailJet has got you
                covered.
              </p>
              <Input
                type="text"
                placeholder="hi@manuarora.in"
                aria-label="Enter your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4"
                style={{
                  fontSize: `${fontSize / 16 * 0.875}rem`,
                  backgroundColor: highContrast ? '#333' : '#1a1a1a',
                  color: highContrast ? '#fff' : '#bbb',
                }}
              />
            </div>
            <BackgroundBeams />
          </div>
        </section>
    </main>
  );
}
