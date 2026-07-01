import { projects } from "../data/content.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section py-24 sm:py-32">
      <p className="eyebrow mb-3">Selected work</p>
      <h2 className="font-display mb-12 text-3xl font-bold sm:text-4xl">
        A few things I've built.
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
