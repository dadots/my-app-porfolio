"use client";

import { motion } from "framer-motion";

export default function HeroQuoteAnimation() {
    return (
        <motion.div
            className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 max-w-2xl px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            <p className="text-sm md:text-base text-muted-foreground italic text-center leading-relaxed tracking-wide">
                “No one has it all figured out at the start. Ideas don’t come fully formed—
                <span className="text-primary"> they become clear as you work on them.</span>
                You just need to get started.”
            </p>
        </motion.div>
    );
}