"use client";

import { useRef, ReactNode } from "react";

export default function HeroMouseEffect({
    children,
}: {
    children: ReactNode;
}) {
    const ref = useRef<HTMLElement | null>(null);
    const raf = useRef<number | null>(null);

    const handleMove = (e: React.MouseEvent) => {
        if (raf.current) return;

        raf.current = requestAnimationFrame(() => {
            const x = e.clientX;
            const y = e.clientY;

            if (ref.current) {
                ref.current.style.setProperty("--x", `${x}px`);
                ref.current.style.setProperty("--y", `${y}px`);
            }

            raf.current = null;
        });
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMove}
            className="relative flex min-h-screen items-center px-6 pt-16 overflow-hidden"
        >
            {children}
        </section>
    );
}