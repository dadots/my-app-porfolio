"use client";

import { skills } from "@/data/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const coreSkills = [
    "React Js",
    "Next Js",
    "Laravel",
    "NodeJS",
    "TypeScript",
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 md:py-32 overflow-hidden">

            <div className="absolute inset-0 -z-10">

                {/* base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

                {/* subtle directional glow (like hero) */}
                <div className="absolute left-1/3 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[100px]" />

                <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-emerald-400/5 blur-[90px]" />

            </div>

            <div className="mx-auto max-w-7xl px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-foreground tracking-tight">
                        Skills & Technologies
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Tools I use to build scalable and modern applications
                    </p>
                </div>

                {/* 🔥 GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((group, i) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="
                                group relative min-h-65 flex flex-col justify-start
                                overflow-hidden rounded-2xl p-5

                                backdrop-blur-md

                                bg-white/70 dark:bg-card/60
                                border border-border

                                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                transition-all duration-300
                                hover:-translate-y-2
                                hover:scale-[1.02]
                                hover:border-emerald-400/40

                                hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]

                                before:absolute before:inset-0 before:rounded-2xl
                                before:bg-linear-to-b before:from-white/60 before:to-transparent
                                dark:before:from-white/10
                                before:pointer-events-none
                            "
                        >
                            <div className="
                                pointer-events-none absolute inset-0 rounded-2xl
                                shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
                                dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                            " />

                            <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition">
                                <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-2xl" />
                            </div>

                            <h3 className="text-sm font-medium text-foreground mb-4">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => {
                                    const isCore = coreSkills.includes(skill.name);

                                    return (
                                        <div
                                            key={skill.name}
                                            className={`
                                                group flex items-center gap-2 
                                                rounded-full px-2.5 py-1 text-[11px]
                                                border transition-all duration-300

                                                ${isCore
                                                    ? "border-primary/50 text-primary bg-primary/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                                                    : "border-border/60 text-foreground/80 bg-white/80 dark:bg-card/30 shadow-sm dark:shadow-none"
                                                }

                                                hover:border-primary/40
                                                hover:bg-primary/15
                                                hover:text-primary
                                            `}
                                        >
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                width={12}
                                                height={12}
                                                className="w-6 h-auto transition group-hover:scale-110"
                                            />
                                            {skill.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}