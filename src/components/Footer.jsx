import { profile, navLinks } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 py-8 dark:border-paper/10">
      <div className="section flex flex-col items-center justify-between gap-4 text-sm text-ink/60 dark:text-paper/60 sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
