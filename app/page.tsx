
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";

const Skills = dynamic(() => import("@/components/sections/skills"));

const Projects = dynamic(() => import("@/components/sections/projects"));

const Experience = dynamic(() => import("@/components/sections/experience"));

import Footer from "@/components/sections/footer";
// import Contact from "@/components/sections/contact";
import { ScrollProgress } from "@/components/scrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      {/* <Contact /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}