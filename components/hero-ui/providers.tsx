'use client'

import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";
import React from "react";

export function HeroUIProviders({children}: { children: React.ReactNode }) {
    const [placement, setPlacement] = React.useState("top-right");

    return (
        <HeroUIProvider>
            <ToastProvider placement="top-right" toastOffset={placement.includes("top") ? 50 : 0}
                           toastProps={{
                               color: "primary",
                               variant: "bordered",
                               timeout: 2000,
                               closeIcon: false,
                               shouldShowTimeoutProgress: true,
                               classNames: {
                                   title: "text-warning-500",
                                   description: "text-white"
                               },
                           }} />
            {children}
        </HeroUIProvider>
    )
}
