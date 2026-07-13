import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { profile } from "../data/content.js";

// ─── Animation variants ──────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

// ─── Social icon config ──────────────────────────────────────────────────────
const socialConfig = {
  github: {
    Icon: Github,
    label: "GitHub",
    hoverClass: "hover:text-paper hover:bg-[#24292e] hover:border-[#24292e]",
  },
  linkedin: {
    Icon: Linkedin,
    label: "LinkedIn",
    hoverClass: "hover:text-paper hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  instagram: {
    Icon: Instagram,
    label: "Instagram",
    hoverClass: "hover:text-paper hover:bg-[#E1306C] hover:border-[#E1306C]",
  },
  facebook: {
    Icon: Facebook,
    label: "Facebook",
    hoverClass: "hover:text-paper hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
};

// ─── Typing animation hook ───────────────────────────────────────────────────
function useTypingEffect(roles, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed]   = useState("");
  const [roleIndex, setRoleIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing]   = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];

    if (isPausing) {
      const id = setTimeout(() => setIsPausing(false), pauseMs);
      return () => clearTimeout(id);
    }

    if (!isDeleting) {
      if (displayed.length < currentRole.length) {
        const id = setTimeout(
          () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(id);
      }
      setIsPausing(true);
      setIsDeleting(true);
    } else {
      if (displayed.length > 0) {
        const id = setTimeout(
          () => setDisplayed(currentRole.slice(0, displayed.length - 1)),
          deletingSpeed
        );
        return () => clearTimeout(id);
      }
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
  }, [displayed, isDeleting, isPausing, roleIndex, roles, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

// ─── Blinking cursor ─────────────────────────────────────────────────────────
function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      className="ml-[2px] inline-block h-[1em] w-[3px] translate-y-[2px] rounded-sm bg-primary align-middle"
      aria-hidden="true"
    />
  );
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Hero() {
  const typedRole = useTypingEffect(profile.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Ambient background blobs — decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 animate-blob rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 animate-blob rounded-full bg-ink/20 blur-3xl [animation-delay:4s] dark:bg-primary/20" />
      </div>

      <div className="section relative z-10 grid w-full items-center gap-14 py-16 lg:grid-cols-[1fr_auto] lg:gap-20">

        {/* ── Left column: text content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="eyebrow mb-5">
            Available for new opportunities
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {"Hi, I'm "}{profile.name}.
          </motion.h1>

          {/* Terminal typing role line */}
          <motion.div
            variants={itemVariants}
            className="mt-3 flex items-center gap-2 sm:mt-4"
          >
            <span
              aria-hidden="true"
              className="select-none font-mono text-xl font-bold text-primary/60 sm:text-3xl lg:text-4xl"
            >
              {'> _'}
            </span>
            <span className="font-display text-xl font-bold text-primary sm:text-3xl lg:text-4xl">
              {typedRole}
              <Cursor />
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base text-ink/70 dark:text-paper/70 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-paper shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary dark:border-paper/20 dark:text-paper"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social icons with tooltip + brand-color hover */}
          <motion.div variants={itemVariants} className="mt-10 flex gap-3">
            {Object.entries(profile.socials).map(([key, url]) => {
              const config = socialConfig[key];
              if (!config) return null;
              const { Icon, label, hoverClass } = config;

              return (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-all duration-200 dark:border-paper/20 dark:text-paper/60 ${hoverClass}`}
                >
                  <Icon size={18} />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-0.5 text-[10px] font-medium text-paper opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-paper dark:text-ink">
                    {label}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ── Right column: profile photo ── */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer decorative ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-3 animate-[spin_18s_linear_infinite] rounded-full border-2 border-dashed border-primary/30"
            />
            {/* Glowing halo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
            />
            {/* Photo frame */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/60 shadow-2xl shadow-primary/20 sm:h-80 sm:w-80">
              <img
                src={profile.profileImage}
                alt={`Profile photo of ${profile.name}`}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>
            {/* Floating status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/10 bg-paper px-4 py-1.5 shadow-lg dark:border-paper/10 dark:bg-ink"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-ink dark:text-paper">
                Open to work
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink/40 dark:text-paper/40"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}