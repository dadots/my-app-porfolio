"use client";

import Image from "next/image";

export default function HeroClient({
    picture,
    name,
}: {
    picture: string;
    name: string;
}) {
    return (
        <div className="flex justify-center md:justify-end">
            <div className="relative group">
                {/* glow (CSS only) */}
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl opacity-60 group-hover:opacity-100 transition" />

                <div className="relative h-80 w-80 rounded-full p-[2px] bg-gradient-to-tr from-emerald-400 to-emerald-300">
                    <div className="h-full w-full overflow-hidden rounded-full bg-card">
                        <Image
                            src={picture}
                            alt={name}
                            width={320}
                            height={320}
                            priority
                            className="object-cover rounded-full transition duration-300 group-hover:scale-110"
                        />
                    </div>
                </div>

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full bg-card/80 backdrop-blur">
                    8+ Years Experience
                </div>
            </div>
        </div>
    );
}