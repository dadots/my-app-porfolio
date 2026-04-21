"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative overflow-hidden"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100" />
            ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100" />
            )}
        </Button>
    );
}