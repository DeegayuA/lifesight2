"use client";

    import { useEffect, useState } from 'react';
    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';
    import { Eye, MessageSquareText, Phone, Lightbulb, Users, CalendarDays, Newspaper } from 'lucide-react';
    import { useSettings } from '@/components/settings-provider';
    import { cn } from '@/lib/utils';
    import { Input } from '@/components/ui/input';
    import { TooltipProvider } from '@/components/ui/tooltip';
    import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
    import { Analytics } from "@vercel/analytics/react"
    import { SpeedInsights } from "@vercel/speed-insights/next"
    import { Playfair_Display } from 'next/font/google';

    const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

    export default function Home() {
      const { reducedMotion, fontSize, accentColor } = useSettings();
      const [currentSlide, setCurrentSlide] = useState(0);

      const features = [
        {
          icon: Eye,
          title: 'Real-Time Visual Assistance',
          description: 'Our AI analyzes your surroundings, providing instant feedback and guidance.',
        },
        {
          icon: MessageSquareText,
          title: 'Natural Voice Interaction',
          description: 'Communicate with the AI using natural voice commands and receive clear, spoken responses.',
        },
        {
          icon: Lightbulb,
          title: 'Personalized Task Guidance',
          description: 'Get step-by-step instructions and support for daily tasks, tailored to your needs.',
        },
      ];

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % features.length);
        }, 5000);

        return () => clearInterval(interval);
      }, [features.length]);

      const dynamicTop = `${fontSize / 16 * -5}rem`;
      const dynamicH = `${fontSize / 16 * 8}rem`;

      return (
        <main className="min-h-screen p-4 sm:p-6" style={{ fontSize: `${fontSize / 16}rem` }}>
          <TooltipProvider>
            {/* Hero Section */}
            <section className="rounded-lg relative h-[80vh] flex items-center justify-center overflow-hidden  mx-auto z-20">
              <div className="absolute inset-0">
                <img
                  src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/hero.jpg"
                  alt="Immersive Background"
                  className="object-cover w-full h-full"
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
                    <Link href="/web/app">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>
                    <Link href="/web/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Dynamic Content */}
            <section className="py-8 max-w-[1280px] mx-auto h-auto">
              <h2 className="text-3xl font-bold mb-4" style={{ fontSize: `${fontSize / 16 * 1.875}rem`, height: dynamicH }}>Key Features</h2>
              <div className="relative">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-500',
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{ top: dynamicTop }}
                  >
                    <Card className="p-6 space-y-4 hover:bg-muted/80 transition-colors" style={{ backgroundColor: accentColor }}>
                      <div className="flex items-center space-x-2">
                        <feature.icon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-semibold" style={{ fontSize: `${fontSize / 16 * 1.25}rem` }}>{feature.title}</h3>
                      </div>
                      <p style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>{feature.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Proof and Testimonials */}
            <section className="py-8 max-w-[1280px] mx-auto">
              <h2 className="text-3xl font-bold mb-4" style={{ fontSize: `${fontSize / 16 * 1.875}rem` }}>What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 space-y-4">
                  <p className="text-lg italic" style={{ fontSize: `${fontSize / 16 * 1.125}rem` }}>"Lifesight has truly transformed my daily life. The AI assistance is incredibly helpful and easy to use."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/michael-dam-mEZ3PoFGs_k-unsplash%20(1).jpg"
                      alt="User 1"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>Sarah M.</p>
                      <p className="text-sm text-muted-foreground" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>Independent Living Advocate</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 space-y-4">
                  <p className="text-lg italic" style={{ fontSize: `${fontSize / 16 * 1.125}rem` }}>"The voice commands are a game-changer. I can now navigate my surroundings with confidence."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                      alt="User 2"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>David L.</p>
                      <p className="text-sm text-muted-foreground" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>Technology Enthusiast</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 space-y-4">
                  <p className="text-lg italic" style={{ fontSize: `${fontSize / 16 * 1.125}rem` }}>"I'm so grateful for the support. It's made a huge difference in my ability to live independently."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/oguz-yagiz-kara-MZf0mI14RI0-unsplash%20(1).jpg"
                      alt="User 3"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>Emily R.</p>
                      <p className="text-sm text-muted-foreground" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>Vision Impaired User</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold" style={{ fontSize: `${fontSize / 16 * 2.5}rem` }}>5,000+</span>
                <p className="text-sm text-muted-foreground" style={{ fontSize: `${fontSize / 16 * 0.875}rem` }}>Lives Improved</p>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-8 max-w-[1280px] mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4" style={{ fontSize: `${fontSize / 16 * 1.875}rem` }}>Stay Ahead</h2>
                <p className="text-lg text-muted-foreground mb-4" style={{ fontSize: `${fontSize / 16 * 1.125}rem` }}>
                  Subscribe for the Latest Insights. Get exclusive tips delivered weekly.
                </p>
                <div className="flex justify-center">
                  <Input type="email" placeholder="Enter your email" className="w-full max-w-sm mr-2" />
                  <Button variant="accent" className="w-24 h-16" style={{ backgroundColor: accentColor, fontSize: `${fontSize / 16 * 0.875}rem` }}>Subscribe</Button>
                </div>
              </div>
            </section>
          </TooltipProvider>
        </main>
      );
    }
