import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { navLinks, profile } from "../data/content.js";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Adds a background + shadow to the navbar once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-paper/80 dark:bg-void/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section flex h-16 items-center justify-between sm:h-20">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-primary dark:text-paper/70 dark:hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-full p-2 text-ink/70 transition-colors hover:bg-primary/10 hover:text-primary dark:text-paper/70"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-paper transition-transform hover:scale-105 sm:inline-block"
          >
            Let's talk
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className="rounded-full p-2 text-ink/70 dark:text-paper/70 md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-paper dark:bg-void md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href} className="section">
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 text-sm font-medium text-ink/80 dark:text-paper/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
