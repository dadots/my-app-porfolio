"use client";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Bio } from "@/data/constants";

export default function Footer() {


  return (
    <footer className="relative mt-24 border-t border-black/10 dark:border-white/10">

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-muted/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14 text-center">

        <h2 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide">
          DADOTS
        </h2>

        <p className="mt-2 text-sm text-black/60 dark:text-white/60">
          You may visit my social accounts.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <Link
            href={Bio.facebook}
            aria-label="Visit Facebook profile"
            className="
              text-black/60 dark:text-white/60
              hover:text-emerald-600 dark:hover:text-emerald-400
              transition
            "
          >
            <FaFacebook size={18} />
          </Link>

          <Link
            aria-label="Visit GitHub profile"
            href={Bio.github}
            className="
              text-black/60 dark:text-white/60
              hover:text-emerald-600 dark:hover:text-emerald-400
              transition
            "
          >
            <FaGithub size={18} />
          </Link>

          <Link
            aria-label="Visit LinkedIn profile"
            href={Bio.linkedin}
            className="
              text-black/60 dark:text-white/60
              hover:text-emerald-600 dark:hover:text-emerald-400
              transition
            "
          >
            <FaLinkedin size={18} />
          </Link>
        </div>

        <p className="mt-8 text-xs text-black/50 dark:text-white/50">
          © {new Date().getFullYear()} Darius Paul Bacate. All rights reserved.
        </p>

      </div>
    </footer>
  );
}