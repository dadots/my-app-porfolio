"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Bio } from "@/data/constants";
import { motion } from "framer-motion";

export default function HeroAnimations({heroSkills, }: {heroSkills: {name: string}[]}) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
            >
                <h1 className="text-5xl font-bold leading-tight sm:text-6xl tracking-tight">
                    Hi, I&apos;m
                    <br />
                    <span className="
                            bg-[linear-gradient(110deg,#10b981,45%,#34d399,55%,#10b981)]
                            bg-size-[200%_100%]
                            animate-[shine_4s_linear_infinite]
                            bg-clip-text text-transparent
                        ">
                        {Bio.name}
                    </span>
                </h1>

                <h2 className="mt-4 text-lg text-muted-foreground">
                    I build{" "}
                    <span className="text-emerald-400 font-medium">
                        <TypeAnimation
                            sequence={[
                                "modern web apps",
                                2000,
                                "scalable systems",
                                2000,
                                "clean user experiences",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                </h2>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                    {Bio.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                    {heroSkills.map((skill) => (
                        <span
                            key={skill.name}
                            className="
                                rounded-full px-3 py-1 text-xs
                                border border-border
                                bg-white/70 dark:bg-card/60
                                text-foreground
                                shadow-sm backdrop-blur-md
                                cursor-default
                                transition-all duration-300
                                animate-pulse
                                "
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>

                <div className="mt-10 flex gap-4">
                    <Button
                        asChild
                        size="lg"
                        aria-label="View projects"
                        className="
                                relative px-6 text-primary-foreground overflow-hidden

                                bg-[linear-gradient(110deg,#10b981,45%,#34d399,55%,#10b981)]
                                bg-size-[200%_100%]
                                animate-[button-shine_4s_linear_infinite]

                                transition-all duration-300
                                hover:scale-105 active:scale-95

                                shadow-[0_0_18px_rgba(16,185,129,0.25)]
                                hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]
                            "
                    >
                        <Link href="#projects">View Projects</Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        aria-label="View resume"
                        className="
                                relative px-6 text-primary-foreground overflow-hidden

                                bg-[linear-gradient(110deg,#10b981,45%,#34d399,55%,#10b981)]
                                bg-size-[200%_100%]
                                animate-[shine_6s_linear_infinite]

                                transition-all duration-300
                                hover:scale-105 active:scale-95

                                shadow-[0_0_25px_rgba(16,185,129,0.35)]
                                hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]
                            "
                    >
                        <Link href={Bio.resume} target="_blank">
                            Resume
                        </Link>
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center md:justify-end"
            >
                <motion.div
                    whileHover={{ rotate: 2, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className="relative group"
                >
                    <div className="
                            absolute inset-0 rounded-full
                            bg-emerald-400/20 blur-2xl opacity-60
                            group-hover:opacity-100 transition
                        " />

                    <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full p-0.5 bg-linear-to-tr from-emerald-400 to-emerald-300">
                        <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
                            <Image
                                src={Bio.picture}
                                alt={Bio.name}
                                width={320}
                                height={320}
                                priority
                                fetchPriority="high"
                                sizes="320px"
                                quality={75}
                                className="object-cover rounded-full transition duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/80 text-muted-foreground px-4 py-1 text-xs backdrop-blur">
                        8+ Years Experience
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
