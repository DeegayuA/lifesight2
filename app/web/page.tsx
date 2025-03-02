'use client'

import { Playfair_Display } from "next/font/google";
import { useSettings } from "@/components/settings-provider";
import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";
import { PlaceholdersAndVanishInputDemo } from "@/components/vanishing_text";
import { FeaturesSectionDemo } from "@/components/ui/bento";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useRouter } from 'next/navigation'; // Import useRouter

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const loadingStates = [
  {
    text: "Enhancing accessibility features...",
  },
  {
    text: "Researching visual impairments...",
  },
  {
    text: "Configuring AI assistance...",
  },
  {
    text: "Setting up OCR for text extraction...",
  },
  {
    text: "Activating voice recognition & TTS...",
  },
  {
    text: "Customizing UI with light/dark modes...",
  },
  {
    text: "Optimizing for gamification & tools...",
  },
  {
    text: "Finalizing social inclusion features...",
  },
];

export default function Home() {
  const { reducedMotion, fontSize, accentColor, highContrast } = useSettings();
  const [loading, setLoading] = useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const inputValue = (event.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    localStorage.setItem('userInput', inputValue); // Store the input value
    router.push('/web/app'); // Navigate to the app page
  };

  return (
    <div
      className="min-h-screen p-4 sm:p-6"
      style={{
        fontSize: `${fontSize / 16}rem`,
      }}
    >
      {!reducedMotion && (
        <Loader loadingStates={loadingStates} loading={loading} duration={500} />
      )}
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
                "object-cover w-full h-full opacity-40 brightness-60 contrast-10",
                highContrast && "brightness-40 contrast-150 border-2 border-white antialiased"
              )}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <PlaceholdersAndVanishInputDemo />
        </BackgroundLines>
      </section>

      <section className='flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20'>
        <FeaturesSectionDemo />
      </section>

      <section
        className="flex items-center justify-center overflow-hidden max-w-[1280px] mx-auto z-20"
        aria-labelledby="waitlist-heading"
      >
        <div
          className="h-[40rem] w-full rounded-md relative border flex flex-col items-center justify-center antialiased"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
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
            <form className="relative w-full" onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email" // Added name attribute
                placeholder="your-email@example.com"
                aria-label="Enter your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4"
                style={{
                  fontSize: `${fontSize / 16 * 0.875}rem`,
                  backgroundColor: "var(--input)",
                  color: "var(--foreground)",
                }}
              />
              <Button
                variant="default"
                type="submit"
                className="absolute right-0 top-0 bg-teal-500 text-white p-2 rounded-sm border-r border-y border-neutral-800 focus:ring-2 focus:ring-teal-500"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>

          <BackgroundBeams />
        </div>
      </section>
    </div>
  );
}
