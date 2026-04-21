import ProjectsClient from "./client/ProjectsClient";
import { projects } from "@/data/constants";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects">
      <ProjectsClient featured={featured} others={others} />
    </section>
  );
}