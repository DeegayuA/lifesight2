"use client";

import {useSession} from "next-auth/react";
import {StarRating} from "@/components/star-rating";
import React from "react";
import {Bar, BarChart, XAxis, YAxis} from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";

export default function Dashboard() {
    const {data: session}: any = useSession();

    if (!session) {
        return
    }
    const chartData = [
        { day: "Monday", helpedCount: 186, mobile: 80 },
        { day: "Tuesday", helpedCount: 305, mobile: 200 },
        { day: "Wednesday", helpedCount: 237, mobile: 120 },
        { day: "Thursday", helpedCount: 73, mobile: 190 },
        { day: "Friday", helpedCount: 209, mobile: 130 },
        { day: "Saturday", helpedCount: 20, mobile: 140 },
        { day: "Sunday", helpedCount: 214, mobile: 140 },
    ]

    const chartConfig = {
        helpedCount: {
            label: "Helped Count ",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig
    return (
        <div className="my-5 flex flex-col gap-4">
            <div className="grid min-[900px]:grid-cols-2 gap-6">
                <StarRating starCount={3} title="You Gathered Rate"></StarRating>
                <div className="border rounded-lg flex flex-col justify-center items-center space-y-2 w-full p-3">
                    <h2 className="text-2xl font-semibold leading-none tracking-tight">Earned Points</h2>
                    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-yellow-500">+ 201 </h1>
                </div>
            </div>
            <div className="border rounded-lg">
                <h3 className="text-center text-xl font-bold underline">Daily Helped Count</h3>
                <ChartContainer config={chartConfig} className="max-h-[400px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent/>}/>
                        <ChartLegend content={<ChartLegendContent/>}/>
                        <Bar dataKey="helpedCount" fill="#2563eb" radius={4}/>
                        {/*<Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}/>*/}
                    </BarChart>
                </ChartContainer>
            </div>
        </div>
    );

}
