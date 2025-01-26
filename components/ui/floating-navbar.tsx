"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings, Moon, Sun, SunMoon, Contrast } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ACCENT_COLORS } from "@/lib/constants";
import { useSettings } from "../settings-provider";
import { SettingsPanel } from "../settings-panel";
import { useTheme } from "next-themes";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const {
        accentColor,
        fontSize,
        reducedMotion,
        highContrast,
        setHighContrast,
        setAccentColor,
    } = useSettings();
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { setTheme, theme } = useTheme();

    const handleThemeChange = () => {
        let newTheme: "system" | "dark" | "light";
        if (theme === "light") {
            newTheme = "dark";
        } else if (theme === "dark") {
            newTheme = "system";
        } else {
            newTheme = "light";
        }
        setTheme(newTheme);

        const html = document.querySelector("html");
        if (html) {
            let mode = newTheme === "light" ? "lightMode" : "darkMode";
            if (newTheme === "system") {
                if (
                    html.style.colorScheme === "light" ||
                    html.classList.contains("light")
                ) {
                    mode = "lightMode";
                } else {
                    mode = "darkMode";
                }
            }
            const currentAccent = ACCENT_COLORS.find(
                (color) =>
                    color.lightMode === accentColor ||
                    color.darkMode === accentColor
            );
            if (currentAccent) {
                setAccentColor(currentAccent[mode as "lightMode" | "darkMode"]);
            } else {
                setAccentColor(
                    ACCENT_COLORS[5][mode as "lightMode" | "darkMode"]
                );
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                }}
                animate={{
                    opacity: 1,
                }}
                className={cn(
                    "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
                    className
                )}
                style={{ backgroundColor: accentColor }}
            >
                <Link href="/" className="flex space-x-2">
                    <span className="text-2xl hidden sm:inline pt-2">👓</span>
                    <span
                        className="font-bold text-xl hidden sm:inline pt-2"
                        style={{
                            fontSize: `${(fontSize / 16) * 1.25}rem`,
                        }}
                    >
                        LifeSight_v0.3.3
                    </span>
                    <span
                        className="font-bold text-xl sm:hidden pt-2"
                        style={{
                            fontSize: `${(fontSize / 16) * 1}rem`,
                        }}
                    >
                        LifeSight
                    </span>
                </Link>
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative items-center flex space-x-0",
                            "bg-transparent text-foreground hover:filter hover:brightness-110 hover:hue-rotate(10deg) hover:bg-muted/10 hover:text-accent-foreground"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">
                            {navItem.name}
                        </span>
                    </Link>
                ))}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSettingsOpen(true)}
                            style={{
                                height: `${(fontSize / 16) * 2.5}rem`,
                                width: `${(fontSize / 16) * 2.5}rem`,
                            }}
                        >
                            <Settings className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="center">
                        {"Settings"}
                    </TooltipContent>
                </Tooltip>
                <SettingsPanel
                    open={settingsOpen}
                    onOpenChange={setSettingsOpen}
                />
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleThemeChange}
                            style={{
                                height: `${(fontSize / 16) * 2.5}rem`,
                                width: `${(fontSize / 16) * 2.5}rem`,
                            }}
                        >
                            {theme === "light" ? (
                                <Moon className="h-5 w-5" />
                            ) : theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <SunMoon className="h-5 w-5" />
                            )}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="center">
                        {theme === "light"
                            ? "Switch to Dark Mode"
                            : theme === "dark"
                                ? "Switch to Light Mode"
                                : "Theme Auto (System Default)"}
                    </TooltipContent>
                </Tooltip>
                <div className="hidden sm:block">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setHighContrast(!highContrast)}
                                style={{
                                    height: `${(fontSize / 16) * 2.5}rem`,
                                    width: `${(fontSize / 16) * 2.5}rem`,
                                }}
                            >
                                <Contrast className="h-5 w-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="center">
                            {highContrast
                                ? "Disable High Contrast"
                                : "Enable High Contrast"}
                        </TooltipContent>
                    </Tooltip>
                </div>
                <Button
                    className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
                    variant="link"
                    size="sm"
                >
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </Button>
            </motion.div>
        </AnimatePresence>
    );
};
