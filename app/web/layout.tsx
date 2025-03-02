import { Inter, Josefin_Sans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { MainNavbar } from "@/components/main-navbar";
import { MainFooter } from "@/components/main-footer";
import { Toaster } from "@/components/ui/sonner";
import './web.css';
import TransitionWrapper from "@/components/TransitionWrapper";


const inter = Inter({ subsets: ['latin'] });
const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Lifesight - AI Assisted Vision',
    description: 'AI-powered assistant helping users navigate their daily tasks independently',
    icons: {
        icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👓</text></svg>",
    },
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {

    return (
        <div className={cn(josefinSans.className, 'h-full min-h-screen')}>

            
            <LayoutWrapper>
                <TransitionWrapper>
                <MainNavbar />
                <div className="flex-1">
                    {children}
                </div>
                <MainFooter />
                <Toaster />
            </TransitionWrapper>

        </LayoutWrapper>

        </div>
    )

}
