"use client";

import {HeroUIProviders} from "@/components/hero-ui/providers";
import {SessionWrapper} from "@/components/SessionWrapper";

export default function RootLayout({children}: { children: React.ReactNode; }) {

    return (
        <SessionWrapper>
            <HeroUIProviders>
                {children}
            </HeroUIProviders>
        </SessionWrapper>
    );
}
