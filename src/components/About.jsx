import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { techStack } from "../data/content.js";

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section py-24 sm:py-32">
      <div
        ref={ref}
        className={`grid items-start gap-12 transition-all duration-700 lg:grid-cols-[0.8fr_1.2fr] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div>
          <p className="eyebrow mb-3">About me</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Developer with care, from idea to deploy.
          </h2>
        </div>

        <div className="space-y-5 text-ink/75 dark:text-paper/75 max-w-3xl leading-8">
          <p>
            I'm a full-stack developer who enjoys turning ambiguous problems
            into reliable, well-tested software. Over the past several years
            I've worked across startups and product teams, shipping
            interfaces people actually enjoy using and the APIs that power
            them.
          </p>
          <p>
            My focus is on performance, accessibility, and code that's easy
            for the next person to read — including future me. When I'm not
            building, I'm usually searchng for new trend technologies for more knowledge.
          </p>

          {/* Scrolling tech stack marquee */}
          <div className="relative mt-10 overflow-hidden py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent dark:from-void" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent dark:from-void" />

            <div className="flex w-max animate-marquee gap-3">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="whitespace-nowrap rounded-full border border-ink/10 px-4 py-1.5 text-sm font-medium text-ink/70 dark:border-paper/15 dark:text-paper/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
