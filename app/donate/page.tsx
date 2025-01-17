import { Button } from '@/components/ui/button';
    import { Card } from '@/components/ui/card';
    import { ArrowLeft } from 'lucide-react';
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
              <h1 className="text-3xl font-bold">Support LifeSight</h1>
              <p className="text-lg text-muted-foreground">
                Your donation helps us provide essential AI-powered tools for the visually impaired.
              </p>
              <Button size="lg" className="w-full">
                Donate Now
              </Button>
            </Card>
          </div>
        </main>
      );
    }
