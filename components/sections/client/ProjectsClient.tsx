"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { projects } from "@/data/constants";
import Link from "next/link";
type Project = (typeof projects)[0];

interface Props {
  featured: Project[];
  others: Project[];
}

const MotionDiv = dynamic(() =>
   import("framer-motion").then((mod) => mod.motion.div)
);

const AnimatePresence = dynamic(() =>
   import("framer-motion").then((mod) => mod.AnimatePresence)
);

export default function ProjectsClient({ featured, others }: Props) {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-black/60 dark:text-white/60 tracking-tight">
                        Projects
                    </h2>
                    <p className="text-black/60 dark:text-white/60 mt-2 text-sm">
                        Selected work and real-world applications I&apos;ve built
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {featured.map((project, i) => (
                        <MotionDiv
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="
                group relative overflow-hidden
                rounded-2xl border border-black/10 dark:border-white/10 
                bg-white dark:bg-white/5 backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-emerald-400/40
                hover:shadow-[0_30px_80px_rgba(16,185,129,0.12)]
                cursor-pointer
              "
                            onClick={() => setSelected(project)}
                        >

                            {(project.status || project.date) && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="
                      text-[10px] px-2 py-1 rounded-full 
                      bg-white/90 text-black/70 border border-black/10
                      dark:bg-black/60 dark:text-white/60 dark:border-white/20
                      backdrop-blur-md
                      shadow-sm
                    ">
                                        {project.status || project.date}
                                    </span>
                                </div>
                            )}

                            <div className="relative h-44 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                  "
                                />

                                <div className="
                  absolute inset-0 
                  bg-black/60 opacity-0 
                  group-hover:opacity-100
                  transition duration-300
                " />

                                <div className="
                  absolute inset-0 
                  flex items-center justify-center gap-3
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition duration-300
                ">
                                    <div className="flex gap-2 mt-5">
                                        {project.webapp && (
                                            <Link
                                                href={project.webapp}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                                className="
                                                text-[11px] px-3 py-1.5 rounded-full 
                                                    bg-emerald-400/90 text-black

                                                    transition-all duration-300
                                                    hover:bg-emerald-300
                                                    hover:scale-105
                                                "
                                            >
                                                Live
                                            </Link>
                                        )}

                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                                className="
                                                    text-[11px] px-3 py-1.5 rounded-full 
                                                    border border-black/10 dark:border-white/10 text-white/70 

                                                    transition-all duration-300
                                                    hover:bg-white/10
                                                "
                                            >
                                                Code
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-medium text-black dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="text-[13px] text-black/60 dark:text-white/60 mt-3 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.slice(0, 8).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="
                        text-[10px] px-2.5 py-1 rounded-full
                        bg-emerald-400/10 
                        text-emerald-400 
                        border border-emerald-400/20

                        backdrop-blur
                        transition-all duration-300

                        hover:bg-emerald-400/20
                        hover:border-emerald-400/40
                      "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="
                  pointer-events-none absolute inset-0 rounded-xl 
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                ">
                                    <div className="
                  absolute inset-0 rounded-xl 
                  bg-emerald-400/5 blur-xl
                " />
                                </div>

                            </div>
                        </MotionDiv>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {others.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelected(project)}
                            className="
                group relative rounded-xl border border-black/10 dark:border-white/10 
                bg-white dark:bg-white/5 p-4 backdrop-blur-xl
                flex flex-col h-full
                cursor-pointer
                hover:border-emerald-400/30
                hover:scale-[1.02]
                transition-all duration-300
              "
                        >

                            {(project.status || project.date) && (
                                <div className="absolute top-3 right-3 z-10">
                                    <span className="
                    text-[9px] px-2 py-0.5 rounded-full 
                    bg-white/90 text-black/70 border border-black/10
                    dark:bg-black/60 dark:text-white/60 dark:border-white/20
                      backdrop-blur-md
                      shadow-sm
                  ">
                                        {project.status || project.date}
                                    </span>
                                </div>
                            )}

                            <h4 className="text-sm text-black/60 dark:text-white/60 font-medium">
                                {project.title}
                            </h4>

                            <p className="text-xs text-black/60 dark:text-white/60 mt-2 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mt-3">
                                {project.tags.slice(0, 5).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="
                      text-[10px] px-2.5 py-1 rounded-full
                      bg-emerald-400/10 
                      text-emerald-400 
                      border border-emerald-400/20

                      backdrop-blur
                      transition-all duration-300

                      hover:bg-emerald-400/20
                      hover:border-emerald-400/40
                    "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-2 pt-4">
                                {project.webapp && (
                                    <Link
                                        href={project.webapp}
                                        target="_blank"
                                        className="
                      text-xs px-3 py-1.5 rounded-full 
                      bg-emerald-400 text-black

                      transition-all duration-300
                      hover:bg-emerald-300
                      hover:scale-105
                      group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]
                    "
                                    >
                                        Live
                                    </Link>
                                )}

                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="
                      text-xs px-3 py-1.5 rounded-full 
                      border border-black/10 dark:border-white/10 
                      text-black/70 dark:text-white/70

                      transition-all duration-300
                      hover:bg-black/5 dark:hover:bg-white/10
                      group-hover:border-emerald-400/30
                    "
                                    >
                                        Code
                                    </Link>
                                )}
                            </div>

                            {/* 🔥 SUBTLE HOVER GLOW */}
                            <div className="
                                pointer-events-none absolute inset-0 rounded-xl 
                                opacity-0 group-hover:opacity-100
                                transition duration-300
                            ">
                                <div className="
                                absolute inset-0 rounded-xl 
                                bg-emerald-400/5 blur-xl
                                " />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <MotionDiv
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="
                            fixed inset-0 z-999 
                            bg-black/80 backdrop-blur-md
                            flex items-center justify-center
                            p-6
                        "
                        onClick={() => setSelected(null)}
                    >
                        <MotionDiv
                            key="modal"
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="
                                relative w-full max-w-3xl 
                                rounded-2xl border border-black/10 dark:border-white/10 
                                bg-white dark:bg-zinc-900 p-6
                                shadow-2xl
                            "
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                onClick={() => setSelected(null)}
                                className="
                                    absolute top-4 right-4 z-20
                                    w-8 h-8 flex items-center justify-center
                                    rounded-full backdrop-blur
                                    bg-white/80 text-black/70 border border-black/10
                                    dark:bg-black/60 dark:text-white/70 dark:border-white/10
                                    hover:bg-black/5 dark:hover:bg-black/80
                                    transition
                                    cursor-pointer
                                "
                            >
                                ✕
                            </button>

                            {/* IMAGE */}
                            <MotionDiv
                                initial={{ scale: 1.05 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="relative h-52 w-full rounded-lg overflow-hidden mb-6"
                            >
                                <Image
                                    src={selected.image}
                                    alt={selected.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 700px"
                                    className="object-cover"
                                />
                            </MotionDiv>

                            {/* TITLE */}
                            <h3 className="text-xl font-semibold text-white">
                                {selected.title}
                            </h3>

                            {/* DATE */}
                            {(selected.status || selected.date) && (
                                <p className="text-xs text-white/40 mt-1">
                                    {selected.status || selected.date}
                                </p>
                            )}

                            {/* DESCRIPTION */}
                            <p className="text-sm text-black/60 dark:text-white/60 mt-4 leading-relaxed">
                                {selected.description}
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                {selected.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="
                                            text-[10px] px-2 py-1 
                                            bg-black/40 rounded-full 
                                            border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60
                                        "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* ACTIONS */}
                            <div className="flex gap-3 mt-6">
                                {selected.webapp && (
                                    <Link
                                        href={selected.webapp}
                                        target="_blank"
                                        className="
                                            text-xs px-4 py-2 rounded-full 
                                            bg-emerald-400 text-black 
                                            hover:bg-emerald-300 transition
                                        "
                                    >
                                        Live Demo
                                    </Link>
                                )}

                                {selected.github && (
                                    <Link
                                        href={selected.github}
                                        target="_blank"
                                        className="
                                            text-xs px-4 py-2 rounded-full 
                                            border border-black/10 dark:border-white/10 text-white/70 
                                            hover:bg-white/10 transition
                                        "
                                    >
                                        Code
                                    </Link>
                                )}
                            </div>
                        </MotionDiv>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </section>
    );
}