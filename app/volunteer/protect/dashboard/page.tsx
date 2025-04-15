"use client";

import { useSession } from "next-auth/react";
import Table from "@/components/hero-ui/Table";

export default function Dashboard() {
    const { data: session }: any = useSession();

    if (!session) {
        return
    }
    return (
        <div>
            <Table></Table>
        </div>
    );
}
