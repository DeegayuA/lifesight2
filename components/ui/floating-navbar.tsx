"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ACCENT_COLORS } from "@/lib/constants";
import { useSettings } from "../settings-provider";
import { useTheme } from "next-themes";
import { UserCog, User } from 'lucide-react';
import { useRouter } from "next/navigation";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        divider?: any;
        name: string;
        link?: string;
        onClick?: () => void;
        icon?: JSX.Element;
        tooltip?: string; // Tooltip text
        hideOnMd?: boolean; // New prop to hide nav item on larger screens
    }[];
    className?: string;
}) => {
    const {
        accentColor,
        fontSize,
        setAccentColor,
    } = useSettings();
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { setTheme, theme } = useTheme();
    const router = useRouter()

    // Calculate dynamic font size
    const dynamicFontSize = `${(fontSize / 16) * 1}rem`;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className={cn(
                    "flex max-w-fit fixed top-7 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] pr-2 pl-2 py-1 items-center justify-center",
                    className
                )}
                style={{ backgroundColor: accentColor }}
            >
                <Link href="/" className="flex space-x-1">
                    {/* <span className="text-2xl hidden sm:inline py-2">👓</span> */}
                    <span
                        className="font-bold text-xl hidden sm:inline py-2 pl-2"
                        style={{ fontSize: dynamicFontSize }}
                    >
                        LifeSight_v0.3.8
                    </span>
                </Link>

                {navItems.map((navItem, idx) => (
                    <div key={`nav-item-${idx}`} className={navItem.hideOnMd ? "sm:hidden" : ""}>
                        {navItem.divider ? (
                            <span
                                className="px-0 !important flex items-center justify-center text-muted-foreground"
                            >
                                {navItem.icon}
                            </span>
                        ) : (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    {navItem.link ? (
                                        <Link
                                            key={`nav-item-${idx}`}
                                            href={navItem.link}
                                            className={cn(
                                                "relative items-center flex space-x-0 px-2 py-2",
                                                "bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate-10 hover:bg-muted/10 hover:text-accent-foreground",
                                                navItem.hideOnMd && "md:hidden"
                                            )}
                                        >
                                            <span className="block sm:hidden">{navItem.icon}</span>
                                            <span className="hidden sm:block">{navItem.name}</span>
                                        </Link>
                                    ) : (
                                        <button
                                            key={`nav-item-${idx}`}
                                            onClick={navItem.onClick}
                                            className={cn(
                                                "relative items-center flex space-x-0 px-2 py-2",
                                                "bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate-10 hover:bg-muted/10 hover:text-accent-foreground",
                                                navItem.hideOnMd && "md:hidden"
                                            )}
                                        >
                                            <span className="block sm:hidden">{navItem.icon}</span>
                                            <span className="hidden sm:block">{navItem.name}</span>
                                        </button>
                                    )}
                                </TooltipTrigger>
                                <TooltipContent side="top" align="center" className="md:block">
                                    {navItem.tooltip || navItem.name}
                                </TooltipContent>
                            </Tooltip>
                        )}
                    </div>
                ))}


                <Button
                    className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full sm:px-4 sm:py-2 sm:rounded-full mr-2"
                    variant="link"
                    size="sm"
                    onClick={() => router.push('/volunteer/login')}
                >
                    {/* Show icon on smaller screens */}
                    <span className="hidden sm:inline">Volunteer</span>
                    <span className="sm:hidden">
                        <User className="h-3 w-3 sm:h-5 sm:w-5 text-black dark:text-white" />
                    </span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px sm:block hidden" />
                </Button>
                <Button
                    className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full sm:px-4 sm:py-2 sm:rounded-full"
                    variant="link"
                    size="sm"
                    onClick={() => router.push('/admin/login')}
                >
                    {/* Show text on larger screens */}
                    <span className="hidden sm:inline">Admin</span>

                    {/* Show icon on smaller screens */}
                    <span className="sm:hidden">
                        <UserCog className="h-3 w-3 sm:h-5 sm:w-5 text-black dark:text-white" />
                    </span>

                    {/* Decorative underline */}
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px sm:block hidden" />
                </Button>

            </motion.div>
        </AnimatePresence>
    );
};