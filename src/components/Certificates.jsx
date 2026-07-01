import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { certificateCategories, certificates } from "../data/content.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

// Subtle per-category accent so cards feel distinct at a glance
const categoryColor = {
  Frontend: "text-violet-400  bg-violet-400/10  border-violet-400/25",
  Backend:  "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Cloud:    "text-sky-400     bg-sky-400/10     border-sky-400/25",
  Design:   "text-rose-400   bg-rose-400/10   border-rose-400/25",
};

function CertCard({ cert, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-ink/10 bg-paper p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10 dark:border-paper/10 dark:bg-ink/40"
    >
      {/* Top row: badge icon + category pill */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          {cert.badge ? (
            <img
              src={cert.badge}
              alt={`${cert.issuer} badge`}
              className="h-8 w-8 object-contain"
            />
          ) : (
            <Award size={24} className="text-primary" />
          )}
        </div>

        <span
          className={`rounded-full border px-3 py-0.5 text-[11px] font-semibold ${
            categoryColor[cert.category] ??
            "border-primary/25 bg-primary/10 text-primary"
          }`}
        >
          {cert.category}
        </span>
      </div>

      {/* Certificate title & issuer */}
      <div className="flex-1">
        <h3 className="font-display text-base font-bold leading-snug">
          {cert.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60 dark:text-paper/60">
          <ShieldCheck size={13} className="text-primary" />
          {cert.issuer}
        </p>
      </div>

      {/* Footer row: date + credential link */}
      <div className="flex items-center justify-between border-t border-ink/10 pt-4 dark:border-paper/10">
        <span className="font-mono text-xs text-ink/50 dark:text-paper/50">
          {cert.date}
        </span>
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          View credential <ExternalLink size={12} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Certificates() {
  const [ref, isVisible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section
      id="certificates"
      className="bg-ink/[0.03] py-24 dark:bg-paper/[0.03] sm:py-32"
    >
      <div className="section">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="eyebrow mb-3">Certificates</p>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Credentials &amp; achievements.
            </h2>
            <p className="max-w-xs text-sm text-ink/60 dark:text-paper/60">
              {certificates.length} certificates earned across{" "}
              {certificateCategories.length - 1} disciplines.
            </p>
          </div>

          {/* Category filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {certificateCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-paper"
                    : "bg-ink/5 text-ink/70 hover:bg-primary/10 hover:text-primary dark:bg-paper/10 dark:text-paper/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate cards grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
