"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session }: any = useSession();

    if (!session) {
        return
    }
    return (
        <div>
            <h1>Welcome, {session?.user?.email}</h1>
            <p>Session Expires: {session.expires}</p>
        </div>
    );
}
