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


    export default function Home() {
      const { reducedMotion } = useSettings();
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

      return (
        <main className="min-h-screen p-4 sm:p-6">
          <TooltipProvider>
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden  mx-auto z-20">
              <div className="absolute inset-0">
                <img
                  src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/hero.jpg"
                  alt="Immersive Background"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="relative z-10 text-center text-white space-y-4">
                <h1 className="text-5xl font-bold tracking-tight">
                  Empowering Independence Through AI Vision
                </h1>
                <p className="text-xl text-white/80">
                  Experience a new level of accessibility with our AI-powered tools designed for the visually impaired.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button asChild variant="default" size="lg">
                    <Link href="/app">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Dynamic Content */}
            <section className="py-8 max-w-[1280px] mx-auto h-auto">
              <h2 className="text-3xl font-bold mb-4 h-40">Key Features</h2>
              <div className="relative">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      'absolute inset-0 -top-28 transition-opacity duration-500',
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    <Card className="p-6 space-y-4 hover:bg-muted/80 transition-colors">
                      <div className="flex items-center space-x-2">
                        <feature.icon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p>{feature.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Proof and Testimonials */}
            <section className="py-8 max-w-[1280px] mx-auto">
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 space-y-4">
                  <p className="text-lg italic">"Lifesight has truly transformed my daily life. The AI assistance is incredibly helpful and easy to use."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/michael-dam-mEZ3PoFGs_k-unsplash%20(1).jpg"
                      alt="User 1"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Independent Living Advocate</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 space-y-4">
                  <p className="text-lg italic">"The voice commands are a game-changer. I can now navigate my surroundings with confidence."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                      alt="User 2"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">David L.</p>
                      <p className="text-sm text-muted-foreground">Technology Enthusiast</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 space-y-4">
                  <p className="text-lg italic">"I'm so grateful for the support. It's made a huge difference in my ability to live independently."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/oguz-yagiz-kara-MZf0mI14RI0-unsplash%20(1).jpg"
                      alt="User 3"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Emily R.</p>
                      <p className="text-sm text-muted-foreground">Vision Impaired User</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">5,000+</span>
                <p className="text-sm text-muted-foreground">Lives Improved</p>
              </div>
            </section>

            {/* Blog/Updates Section */}
            <section className="py-8 max-w-[1280px] mx-auto">
              <h2 className="text-3xl font-bold mb-4">Recent Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 space-y-4 hover:bg-muted/50 transition-colors">
                  <img
                    src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/blog00001.jpg"
                    alt="Blog Post 1"
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xl font-semibold">New AI Features for Task Automation</h3>
                  <p className="text-sm text-muted-foreground">Learn how our latest AI tools can help you automate daily tasks.</p>
                </Card>
                <Card className="p-6 space-y-4 hover:bg-muted/50 transition-colors">
                  <img
                    src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/blog00002.jpg"
                    alt="Blog Post 2"
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xl font-semibold">Improved Collaboration Tools</h3>
                  <p className="text-sm text-muted-foreground">Discover how our new collaboration features can help you work better with teams.</p>
                </Card>
                <Card className="p-6 space-y-4 hover:bg-muted/50 transition-colors">
                  <img
                    src="https://pub-f3746e8bbc624ef5a6987eac05efe3f7.r2.dev/blog00003.jpg"
                    alt="Blog Post 3"
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xl font-semibold">Case Study: Real-Time Data Insights</h3>
                  <p className="text-sm text-muted-foreground">Read our latest case study on how real-time data insights can improve decision-making.</p>
                </Card>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-8 max-w-[1280px] mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Ahead</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Subscribe for the Latest Insights. Get exclusive tips delivered weekly.
                </p>
                <div className="flex justify-center">
                  <Input type="email" placeholder="Enter your email" className="w-full max-w-sm mr-2" />
                  <Button className="w-24 h-16">Subscribe</Button>
                </div>
              </div>
            </section>
          </TooltipProvider>
        </main>
      );
    }
