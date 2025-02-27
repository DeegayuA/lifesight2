"use client";

    import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';
    import { ArrowLeft } from 'lucide-react';
    import Link from 'next/link';
    import { useSettings } from '@/components/settings-provider';

    export default function HelpPage() {
      const { fontSize, accentColor } = useSettings();
      return (
        <main className="min-h-screen bg-background p-6 mt-[7rem]" style={{ fontSize: `${fontSize / 16}rem` }}>
          <div className="max-w-2xl mx-auto space-y-8">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <Card className="p-8 text-center space-y-6">
              <h1 className="text-3xl font-bold text-foreground">Help Center</h1>
              <p className="text-lg text-muted-foreground">
                This is the help center page.
              </p>
              <Button size="lg" className="w-full" style={{ backgroundColor: accentColor }}>
                Call Now
              </Button>
            </Card>
          </div>
        </main>
      );
    }
