"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session }: any = useSession();

    if (!session) {
        return
    }
    return (<>
            <h1>Volunteer Dashboard Page</h1>
        </>);

}
