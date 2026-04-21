/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { menu } from "@/data/constants";
import { motion, AnimatePresence } from "framer-motion";

import {
    Home,
    User,
    Briefcase,
    FolderKanban,
    Menu,
    X,
} from "lucide-react";

const iconMap = {
    home: Home,
    skills: User,
    experience: Briefcase,
    projects: FolderKanban,
};

export default function Navbar() {
    const [active, setActive] = useState("#home");
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            menu.forEach((item) => {
                const section = document.querySelector(`#${item.link}`);
                if (!section) return;

                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActive(`#${item.link}`);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-6 z-50 w-full px-4">
            <div className="mx-auto max-w-5xl">

                {/* NAV CONTAINER */}
                <motion.div
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        e.currentTarget.style.setProperty("--x", `${x}px`);
                        e.currentTarget.style.setProperty("--y", `${y}px`);
                    }}
                    animate={{
                        scale: scrolled ? 0.96 : 1,
                        y: scrolled ? -6 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="
                        relative flex items-center justify-between px-6 py-2 rounded-full

                        backdrop-blur-xl
                        border border-black/10 dark:border-white/10

                        bg-white/60 dark:bg-black/50

                        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                        dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]

                        overflow-hidden
                    "
                >
                    <div
                        className="
                            pointer-events-none absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition
                            [background:radial-gradient(300px_circle_at_var(--x)_var(--y),rgba(16,185,129,0.15),transparent_60%)]
                        "
                    />

                    <div
                        className="
                            pointer-events-none absolute inset-0 rounded-full
                            bg-linear-to-b from-white/60 to-transparent
                            dark:from-white/10
                        "
                    />

                    <Link
                        href="/"
                        className="text-sm font-semibold tracking-widest text-foreground/80 hover:text-foreground transition"
                    >
                        DADOTS
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {menu.map((item) => (
                            <NavItem key={item.id} item={item} active={active} />
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <button
                            aria-label="Toggle Navbar"
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-foreground/80 hover:text-foreground transition"
                        >
                            {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </motion.div>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {open && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
                                onClick={() => setOpen(false)}
                            />

                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="
                                    md:hidden mt-3 p-4 space-y-2 rounded-2xl
                                    border border-border/50
                                    bg-white/90 dark:bg-black/90
                                    backdrop-blur-xl shadow-xl
                                "
                            >
                                {menu.map((item) => (
                                    <NavItem
                                        key={item.id}
                                        item={item}
                                        active={active}
                                        onClick={() => setOpen(false)}
                                    />
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

function NavItem({
    item,
    active,
    onClick,
}: {
    item: any;
    active: string;
    onClick?: () => void;
}) {
    const Icon = iconMap[item.icon as keyof typeof iconMap];
    const href = `#${item.link}`;
    const isActive = active === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm transition"
        >
            <Icon
                size={16}
                className={isActive ? "text-emerald-500" : "text-foreground/60"}
            />
            <span
                className={
                    isActive
                        ? "text-foreground font-medium"
                        : "text-foreground/60"
                }
            >
                {item.name}
            </span>

            {isActive && (
                <motion.span
                    layoutId="nav-pill"
                    className="
                        absolute inset-0 rounded-full
                        bg-emerald-500/10
                        border border-emerald-500/20
                        shadow-[0_0_20px_rgba(16,185,129,0.15)]
                    "
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }}
                />
            )}
        </Link>
    );
}