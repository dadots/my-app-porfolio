import { coreSkills, skills } from "@/data/constants";
import HeroAnimations from "./client/HeroAnimations";
import HeroMouseEffect from "./client/HeroMouseEffect";

export default function Hero() {
    const allSkills = skills.flatMap(group => group.skills);

    const heroSkills = allSkills.filter(skill =>
        coreSkills.includes(skill.name)
    );

    return (
        <HeroMouseEffect>
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-br from-background via-background to-emerald-50/40 dark:to-transparent" />

                <div
                    className="
                        pointer-events-none absolute inset-0
                        [background:radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(16,185,129,0.08),transparent_60%)]
                    "
                />

                <div className="absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[80px]" />

                <div className="absolute left-0 bottom-0 h-64 w-64 bg-emerald-400/5 blur-2xl" />
                <div className="absolute right-0 top-0 h-64 w-64 bg-emerald-400/5 blur-2xl" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
                <HeroAnimations heroSkills={heroSkills} />
            </div>
        </HeroMouseEffect>
    );
}