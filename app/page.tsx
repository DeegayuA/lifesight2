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
import { PlaceholdersAndVanishInputDemo } from '@/components/vanishing_text';
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

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
        className="rounded-lg relative h-[70vh] flex items-center justify-center overflow-hidden mx-auto z-20 max-w-[1280px] mt-[5rem]"
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
          className="h-[40rem] w-full rounded-md relative border flex flex-col items-center justify-center antialiased"
          style={{
            backgroundColor: "var(--background)", // Using dynamic background color from CSS variables
            color: "var(--foreground)", // Using dynamic text color from CSS variables
          }}
        >
          <div className="max-w-2xl mx-auto p-4">
            <h1
              id="join-heading"
              className={cn(
                "relative z-10 text-lg md:text-7xl bg-clip-text text-foreground text-center font-bold",
                playfairDisplay.className
              )}
              style={{ fontSize: `${fontSize / 16 * 3.125}rem` }}
            >
              Join LifeSight: as a volunteer
            </h1>
            <p
              className="text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10"
              style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}
            >
              LifeSight is a powerful tool designed for visually impaired users. We are
              committed to providing inclusive and accessible solutions for education,
              social inclusion, and everyday tasks. Our app leverages AI-powered OCR,
              voice input/output, and offline functionality to make the world more
              accessible to all.
            </p>
            <p
              className="text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10"
              style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}
            >
              Sign up now to receive updates and be part of the LifeSight community!
            </p>
            <Input
              type="email"
              placeholder="your-email@example.com"
              aria-label="Enter your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4"
              style={{
                fontSize: `${fontSize / 16 * 0.875}rem`,
                backgroundColor: "var(--input)", // Using dynamic input color from CSS variables
                color: "var(--foreground)", // Using dynamic text color from CSS variables
              }}
            />
          </div>

          <BackgroundBeams />
        </div>
      </section>
    </main>
  );
}
