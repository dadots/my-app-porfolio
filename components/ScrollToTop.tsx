"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", toggle);
        return () => window.removeEventListener("scroll", toggle);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
            fixed bottom-6 right-6 z-50
            rounded-full p-3
            bg-emerald-400 text-black
            shadow-lg transition-all duration-300

            hover:scale-110
            active:scale-95
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        >
            <ArrowUp size={18} />
        </button>
    );
}