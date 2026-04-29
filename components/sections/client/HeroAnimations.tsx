"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Bio } from "@/data/constants";
import { motion } from "framer-motion";

export default function HeroAnimations({ heroSkills, }: { heroSkills: { name: string }[] }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
            >
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
                    <span className="text-foreground/70">Hi, I’m</span>
                    <br />
                    <span className="
                            bg-[linear-gradient(110deg,#10b981,45%,#34d399,55%,#10b981)]
                            bg-size-[200%_100%]
                            animate-[shine_6s_linear_infinite]
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
                                bg-white/60 dark:bg-card/50
                                text-foreground

                                backdrop-blur-md

                                opacity-70
                                hover:opacity-100

                                transition-all duration-200
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
                        className="
                            px-6
                            bg-emerald-500 text-white

                            hover:bg-emerald-600
                            active:bg-emerald-700

                            transition-all duration-200 ease-out

                            shadow-sm
                            hover:shadow-md

                            hover:-translate-y-px
                            active:translate-y-0
                        "
                    >
                        <Link href="#projects">View Projects</Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="
                            px-6
                            border border-border
                            bg-transparent

                            text-foreground
                            hover:bg-muted/50

                            transition-all duration-300
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

                    <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full p-[2px] bg-gradient-to-tr from-emerald-400 via-emerald-300 to-emerald-400">
                        <div className="relative h-full w-full rounded-full overflow-hidden bg-card">

                            <Image
                                src={Bio.picture}
                                alt={Bio.name}
                                fill
                                priority
                                className="object-cover object-center scale-110"
                            />

                        </div>
                    </div>

                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">

                            <div className="absolute inset-0 rounded-full blur-md bg-emerald-400/20" />

                            <span className="
                                relative
                                inline-flex items-center justify-center
                                px-3 sm:px-4 py-1 sm:py-1.5
                                text-[10px] sm:text-xs md:text-sm
                                rounded-full
                                bg-black/60 backdrop-blur-xl
                                border border-white/10
                                text-white
                                whitespace-nowrap
                                shadow-lg
                            ">
                                {Bio.yearExperience} Years Experience
                            </span>

                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
