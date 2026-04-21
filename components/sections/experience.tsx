"use client";

import { experiences } from "@/data/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll
    ? experiences
    : experiences.slice(0, 3);

  return (
    <section
      id="experience"
      className="
      py-24 md:py-32 relative
      bg-gradient-to-b from-transparent via-black/20 to-transparent
      dark:via-black/40
    "
    >
      {/* 🌌 background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted" />
      </div>

      {/* 🔥 PANEL WRAPPER */}
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="
          relative rounded-3xl p-8 md:p-12

          bg-white/70 dark:bg-white/5
          backdrop-blur-xl

          border border-black/10 dark:border-white/10

          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          dark:shadow-[0_20px_80px_rgba(0,0,0,0.6)]

          overflow-hidden
        "
        >
          {/* ✨ inset glass */}
          <div
            className="
            pointer-events-none absolute inset-0 rounded-3xl
            shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.1)]
            dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.6)]
          "
          />

          {/* ✨ panel glow */}
          <div className="absolute -top-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-foreground tracking-tight">
              Experience
            </h2>
            <p className="text-foreground/60 mt-2 text-sm">
              My professional journey building real-world applications
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* 🔥 animated line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-5 top-0 w-0.5 bg-gradient-to-b from-emerald-400/60 to-transparent"
            />

            <div className="space-y-10">
              {visibleExperiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pl-12"
                >
                  {/* 🔥 DOT */}
                  <div className="absolute left-3.5 top-3 flex items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-emerald-400/30 blur-md animate-pulse" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>

                  {/* 🔥 CARD */}
                  <div
                    className="
                    group relative rounded-2xl p-6

                    bg-background/60
                    border border-border

                    backdrop-blur-xl

                    transition-all duration-300

                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:border-emerald-400/40

                    hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]
                  "
                  >
                    {/* ✨ inset glass (card) */}
                    <div
                      className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]
                      dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    "
                    />

                    {/* HEADER */}
                    <div className="flex items-center gap-4">
                      <div
                        className="
                        relative h-10 w-10 rounded-md overflow-hidden
                        bg-background border border-border
                      "
                      >
                        <Image
                          src={exp.img}
                          alt={exp.company}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-foreground font-medium">
                          {exp.role}
                        </h3>
                        <p className="text-foreground/60 text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* DATE */}
                    <p className="text-xs text-foreground/50 mt-2">
                      {exp.date}
                    </p>

                    {/* DESC */}
                    <p className="text-sm text-foreground/70 mt-4 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 🔥 SHOW MORE */}
            {!showAll && experiences.length > 3 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(true)}
                  aria-label="Show all experience"
                  className="
                    text-sm px-5 py-2 rounded-full

                    border border-border
                    bg-background/60

                    text-foreground/70

                    hover:bg-accent
                    hover:text-foreground

                    transition-all duration-300
                    hover:scale-105
                  "
                >
                  Show all experience ↓
                </button>
              </div>
            )}

            {/* 🔥 SHOW LESS */}
            {showAll && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(false)}
                  className="text-sm text-foreground/60 hover:text-foreground transition"
                >
                  Show less ↑
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}