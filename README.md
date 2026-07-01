# Developer Portfolio

A responsive, animated portfolio built with React, Tailwind CSS, and Framer Motion.

## Color palette

| Token     | Hex       | Used for                                  |
|-----------|-----------|--------------------------------------------|
| `primary` | `#6F4A8E` | Accent, buttons, links, highlights         |
| `ink`     | `#221F3B` | Headings/text in light mode, dark surfaces |
| `void`    | `#050505` | Dark mode background                       |
| `paper`   | `#EEEEEE` | Light mode background, dark mode text      |

## Getting started

```bash
npm install
npm run dev      # starts a local dev server at http://localhost:5173
npm run build    # creates a production build in /dist
npm run preview  # serves the production build locally
```

## Project structure

```
src/
  components/   # One component per section (Navbar, Hero, About, ...)
  context/      # ThemeContext — handles dark/light mode + persistence
  hooks/        # useScrollReveal — IntersectionObserver-based reveal animations
  data/         # content.js — all editable text/links/projects in one place
  App.jsx       # Composes the page from sections
  main.jsx      # React entry point
  index.css     # Tailwind layers + global styles
```

## Personalizing

Almost everything you'll want to change — your name, bio, skills, and
projects — lives in `src/data/content.js`. Swap in your own values there;
the components will pick them up automatically.

## Dark / light mode

Toggled via the sun/moon icon in the navbar. The choice is saved to
`localStorage` and falls back to the visitor's OS preference on first visit.
Implemented with Tailwind's `class` dark mode strategy in `ThemeContext.jsx`.

## Responsiveness

Every section uses Tailwind's responsive prefixes (`sm:`, `lg:`) and is
tested down to a 360px mobile viewport, including a slide-down mobile nav menu.

## Animations

- Page-load stagger on the hero (Framer Motion)
- Scroll-triggered reveals on About, Skills, and Projects (`useScrollReveal` + Framer Motion `whileInView`)
- Animated skill progress bars
- Ambient background blobs and a scrolling tech-stack marquee
- All animations respect `prefers-reduced-motion`
