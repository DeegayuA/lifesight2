"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';
    import { Eye, MessageSquareText, Phone, Lightbulb, Users, CalendarDays, Newspaper } from 'lucide-react';
    import { useSettings } from '@/components/settings-provider';
    import { cn } from '@/lib/utils';
    import { Input } from '@/components/ui/input';
    import { TooltipProvider } from '@/components/ui/tooltip';
    import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

    export default function Home() {
      const { reducedMotion } = useSettings();

      return (
        <main className="min-h-screen bg-background p-4 sm:p-6">
          <TooltipProvider>
            {/* Hero Section */}
            <section className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-a3ef193a1c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Immersive Background"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="relative z-10 text-center text-white space-y-4">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  Empowering Independence Through AI Vision
                </h1>
                <p className="text-lg sm:text-xl text-white/80">
                  Experience a new level of accessibility with our AI-powered tools designed for the visually impaired.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button asChild size="lg">
                    <Link href="/app">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Dynamic Content */}
            <section className="py-6 sm:py-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Features</h2>
              <Carousel className="w-full">
                <CarouselContent className="bg-primary rounded-lg p-4">
                  <CarouselItem className="flex-1">
                    <Card className="p-4 sm:p-6 space-y-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        <h3 className="text-lg sm:text-xl font-semibold">Real-Time Visual Assistance</h3>
                      </div>
                      <p className="text-sm sm:text-base">Our AI analyzes your surroundings, providing instant feedback and guidance.</p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="flex-1">
                    <Card className="p-4 sm:p-6 space-y-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MessageSquareText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        <h3 className="text-lg sm:text-xl font-semibold">Natural Voice Interaction</h3>
                      </div>
                      <p className="text-sm sm:text-base">Communicate with the AI using natural voice commands and receive clear, spoken responses.</p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="flex-1">
                    <Card className="p-4 sm:p-6 space-y-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        <h3 className="text-lg sm:text-xl font-semibold">Personalized Task Guidance</h3>
                      </div>
                      <p className="text-sm sm:text-base">Get step-by-step instructions and support for daily tasks, tailored to your needs.</p>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </section>

            {/* Social Proof and Testimonials */}
            <section className="py-6 sm:py-8">
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-4 sm:p-6 space-y-4">
                  <p className="text-lg italic">"Lifesight has truly transformed my daily life. The AI assistance is incredibly helpful and easy to use."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="User 1"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Independent Living Advocate</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 sm:p-6 space-y-4">
                  <p className="text-lg italic">"The voice commands are a game-changer. I can now navigate my surroundings with confidence."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1539571696350-5a941860498e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="User 2"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">David L.</p>
                      <p className="text-sm text-muted-foreground">Technology Enthusiast</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 sm:p-6 space-y-4">
                  <p className="text-lg italic">"I'm so grateful for the support. It's made a huge difference in my ability to live independently."</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741702-a0c7dac9813f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
            <section className="py-6 sm:py-8">
              <h2 className="text-3xl font-bold mb-4">Recent Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-4 sm:p-6 space-y-4 hover:bg-muted/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Blog Post 1"
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xl font-semibold">New AI Features for Task Automation</h3>
                  <p className="text-sm text-muted-foreground">Learn how our latest AI tools can help you automate daily tasks.</p>
                </Card>
                <Card className="p-4 sm:p-6 space-y-4 hover:bg-muted/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1517694720214-e45317eb39ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Blog Post 2"
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xl font-semibold">Improved Collaboration Tools</h3>
                  <p className="text-sm text-muted-foreground">Discover how our new collaboration features can help you work better with teams.</p>
                </Card>
                <Card className="p-4 sm:p-6 space-y-4 hover:bg-muted/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1504711434969-e16129a6ba60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Blog Post 3"
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-xl font-semibold">Case Study: Real-Time Data Insights</h3>
                  <p className="text-sm text-muted-foreground">Read our latest case study on how real-time data insights can improve decision-making.</p>
                </Card>
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-6 sm:py-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Ahead</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Subscribe for the Latest Insights. Get exclusive tips delivered weekly.
                </p>
                <div className="flex justify-center">
                  <Input type="email" placeholder="Enter your email" className="w-full max-w-sm mr-2" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </section>
          </TooltipProvider>
        </main>
      </>
      );
    }
