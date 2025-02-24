"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useSettings } from "@/components/settings-provider";
import { useState } from "react";

const faqs = [
  {
    question: "What is LifeSight?",
    answer:
      "LifeSight is an AI-enabled web tool designed to assist differently-abled individuals, especially those with visual impairments, by providing accessibility features such as voice input, OCR, text-to-speech, and real-time assistance.",
  },
  {
    question: "Who can use LifeSight?",
    answer:
      "LifeSight is primarily designed for individuals with visual impairments, but anyone who requires digital accessibility enhancements can benefit from its features.",
  },
  {
    question: "Is LifeSight free to use?",
    answer:
      "Yes, LifeSight is a charitable project that operates through donations and sponsorships. Users can access its core features for free.",
  },
  {
    question: "What features does LifeSight offer?",
    answer: `
      - Voice input and text-to-speech functionality
      - Optical Character Recognition (OCR) for reading text from images
      - AI-powered assistance for navigation and object identification
      - High-contrast themes and keyboard navigation for accessibility
    `,
  },
  {
    question: "Can I customize the accessibility settings?",
    answer:
      "Yes, users can customize features such as high-contrast themes, font sizes, voice input settings, and screen reader compatibility.",
  },
  {
    question: "Does LifeSight support multiple languages?",
    answer:
      "Currently, LifeSight supports English, but additional language support is planned for future updates.",
  },
  {
    question: "What are the system requirements for using LifeSight?",
    answer:
      "LifeSight is a web-based tool accessible through modern browsers like Chrome, Firefox, Edge, and Safari. No additional software installation is required.",
  },
  {
    question: "How do I enable voice input?",
    answer:
      "Once you access the application you can enable voice input. Ensure your device’s microphone permissions are enabled for the best experience.",
  },
  {
    question: "What should I do if LifeSight is not working properly?",
    answer:
      "Try refreshing the page, clearing your browser cache, or checking your internet connection. If issues persist, contact our support team.",
  },
  {
    question: "How is my data protected?",
    answer:
      "LifeSight follows strict data protection policies and does not store personal data. Voice and text inputs are processed in real-time without being saved.",
  },
  {
    question: "Do I need to create an account to use LifeSight?",
    answer:
      "No, you can access most features without an account. However, creating an account allows for personalized settings and preferences.",
  },
  {
    question: "How can I support LifeSight’s mission?",
    answer:
      "You can support us through donations, corporate sponsorships, or by spreading awareness about LifeSight.",
  },
];

export default function HelpPage() {
  const { fontSize, accentColor } = useSettings();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main
      className="min-h-screen bg-background p-6"
      style={{ fontSize: `${fontSize / 16}rem` }}
    >
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

        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-3">
                <button
                  className="w-full text-left flex justify-between items-center text-lg font-medium text-foreground focus:outline-none"
                  onClick={() => setOpenIndex(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-muted-foreground text-sm whitespace-pre-line">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
