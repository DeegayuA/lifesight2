"use client";

    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';
    import { ArrowLeft } from 'lucide-react';
    import { cn } from '@/lib/utils';

    export default function NotFound() {
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
              <h1 className="text-3xl font-bold">Oops! Page Not Found</h1>
              <p className="text-lg text-muted-foreground">
                The page you are looking for does not exist.
              </p>
              <Button asChild size="lg" className="w-full">
                <Link href="/">Go Back Home</Link>
              </Button>
            </Card>
          </div>
        </main>
      );
    }
