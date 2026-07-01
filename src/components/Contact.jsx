import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/content.js";

const initialFormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Front-end only — wire this up to your own backend or a form service
  // (e.g. Formspree, EmailJS) to actually deliver messages.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setForm(initialFormState);
  };

  return (
    <section id="contact" className="section py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let's build something together.
          </h2>
          <p className="mt-5 max-w-md text-ink/70 dark:text-paper/70">
            Have a role, project, or idea in mind? My inbox is open — I
            usually reply within a day or two.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary"
            >
              <Mail size={18} className="text-primary" /> {profile.email}
            </a>
            <p className="flex items-center gap-3 text-sm font-medium text-ink/70 dark:text-paper/70">
              <MapPin size={18} className="text-primary" /> {profile.location}
            </p>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 rounded-2xl border border-ink/10 bg-ink/[0.02] p-6 dark:border-paper/10 dark:bg-paper/[0.03] sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Raymart Tenio"
              className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-paper/15 dark:bg-void"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="teniojohnraymart@gmail.com"
              className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-paper/15 dark:bg-void"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project..."
              className="w-full resize-none rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-paper/15 dark:bg-void"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-paper transition-transform hover:scale-[1.02]"
          >
            <Send size={16} /> Send message
          </button>

          {status === "sent" && (
            <p className="text-center text-sm font-medium text-primary">
              Thanks! Your message has been noted.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
