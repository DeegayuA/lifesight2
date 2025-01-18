"use client";

    import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';
    import { HeartHandshake, ArrowLeft } from 'lucide-react';
    import Link from 'next/link';

    export default function DonatePage() {
      return (
        <main className="min-h-screen bg-background p-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <Card className="p-8 text-center space-y-6">
              <HeartHandshake className="w-12 h-12 mx-auto text-primary" />
              <h1 className="text-3xl font-bold">Help us to help Others</h1>
              <p className="text-lg text-muted-foreground">
              Every contribution counts, no matter how big or small. Thank you for your support!
              </p>
              <Button size="lg" className="w-full">
                Call Now
              </Button>
            </Card>
          </div>
        </main>
      );
    }
