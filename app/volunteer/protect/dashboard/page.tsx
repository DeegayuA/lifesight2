"use client";

import { useSession } from "next-auth/react";
import {StarRating} from "@/components/star-rating";
import React from "react";

export default function Dashboard() {
    const { data: session }: any = useSession();

    if (!session) {
        return
    }
    return (<div className="my-5">
        <StarRating starCount={3} title="You gathered value"></StarRating>
        </div>);

}
