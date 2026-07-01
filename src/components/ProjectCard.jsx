import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-shadow hover:shadow-xl hover:shadow-primary/10 dark:border-paper/10 dark:bg-ink/40"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-bold">{project.title}</h3>
        <p className="mt-2 text-sm text-ink/70 dark:text-paper/70">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4">
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-primary dark:text-paper"
          >
            <ExternalLink size={15} /> Live demo
          </a>
          <a
            href={project.codeUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 transition-colors hover:text-primary dark:text-paper/60"
          >
            <Github size={15} /> Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}
