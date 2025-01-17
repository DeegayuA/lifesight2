import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, MessageSquareText, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Lifesight-V2
          </h1>
          <p className="text-xl text-muted-foreground">
            Your AI-powered assistant for independent navigation and task completion
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Visual Assistance</h2>
            </div>
            <p>Advanced AI-powered visual recognition to help you understand your surroundings</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquareText className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Voice Interaction</h2>
            </div>
            <p>Natural voice commands and responses in your preferred language</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Human Support</h2>
            </div>
            <p>Connect with trained assistants when you need additional help</p>
          </Card>
        </div>

        <div className="flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link href="/app">Start Using Lifesight</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/call-assistant">Call for Assistance</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
