"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeartHandshake, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSettings } from '@/components/settings-provider';

export default function DonatePage() {
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
          <HeartHandshake className="w-12 h-12 mx-auto text-primary" />
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-lg text-muted-foreground">
          Welcome to LifeSight an innovative AI-powered web application designed to empower visually impaired individuals to navigate their world with ease, independence, and confidence. Our mission is to bridge the accessibility gap and provide real-time assistance to those who need it the most, enabling them to carry out everyday tasks without dependency on others.
          </p>
          
          <h2 className='text-lg'>Our Vision</h2>
          <p className="text-lg text-muted-foreground">
          At <b>LifeSight</b>, we believe in a world where everyone, regardless of visual impairments, can explore, engage, and thrive independently. We envision a future where advanced AI solutions not only help individuals perform tasks but also enhance their daily experiences by providing real-time, contextual guidance that is easy to use and adapt to various environments.
          </p>
        </Card>
      </div>
    </main>
  );
}