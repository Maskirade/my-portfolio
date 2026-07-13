import { motion } from "framer-motion";
import { Box, Brain, HelpCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { skillGroups } from "../data/content.js";

// ─── Lucide fallbacks for techs not in Devicon ───────────────────────────────
const fallbackIcons = {
  ObjectBox:    Box,
  "Hugging Face": Brain,
  Roboflow:     HelpCircle,
};

// ─── Single tech card ─────────────────────────────────────────────────────────
function TechCard({ tech, index }) {
  const FallbackIcon = fallbackIcons[tech.name];

  const iconSrc = tech.icon
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-${tech.variant}.svg`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.04 }}
      style={{
        "--brand": tech.color,
        borderColor: `${tech.color}30`,
        backgroundColor: `${tech.color}0d`,
      }}
      className="group relative flex cursor-default flex-col items-center gap-2.5 rounded-xl border p-4 transition-shadow duration-200 hover:shadow-lg"
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${tech.color}20`)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = `${tech.color}0d`)}
    >
      <div className="flex h-10 w-10 items-center justify-center">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={`${tech.name} logo`}
            loading="lazy"
            className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110"
          />
        ) : (
          <FallbackIcon
            size={28}
            style={{ color: tech.color }}
            className="transition-transform duration-200 group-hover:scale-110"
          />
        )}
      </div>

      <span className="text-center text-xs font-semibold leading-tight text-ink/80 dark:text-paper/80">
        {tech.name}
      </span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl transition-[box-shadow] duration-300 group-hover:[box-shadow:inset_0_0_0_1.5px_var(--brand)]"
      />
    </motion.div>
  );
}

// ─── Category group ───────────────────────────────────────────────────────────
function CategoryGroup({ group, groupIndex }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${groupIndex * 80}ms` }}
    >
      <h3 className="font-mono mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
        {group.category}
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {group.techs.map((tech, i) => (
          <TechCard key={tech.name} tech={tech} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-ink/[0.03] py-24 dark:bg-paper/[0.03] sm:py-32"
    >
      <div className="section">
        <p className="eyebrow mb-3">Skills</p>
        <h2 className="font-display mb-14 text-3xl font-bold sm:text-4xl">
          Tech Stack
        </h2>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group, i) => (
            <CategoryGroup key={group.category} group={group} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}