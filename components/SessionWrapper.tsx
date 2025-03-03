// components/SessionWrapper.tsx
"use client";

import { SessionProvider } from "next-auth/react";

export function SessionWrapper({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
}
