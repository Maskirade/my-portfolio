// Edit this file to personalize the portfolio — no need to touch component code.

export const profile = {
  name: "John Raymart Tenio",
  role: ["Web Developer", "Mobile App Developer", "AI/ML Developer"],
  tagline:
    "I design and build fast, accessible web products — from database schema to the last pixel.",
  location: "San Jose, Prosperidad Agusan del Sur, Philippines",
  email: "teniojohnraymart@gmail.com",
  resumeUrl: "#",
  // Replace this URL with a direct link to your own photo.
  // Recommended: a square image at least 400×400 px.
  profileImage: "/profile/akeh.jpg",
  socials: {
    github: "https://github.com/Maskirade",
    linkedin: "https://www.linkedin.com/in/john-raymart-tenio-733037315/",
    instagram: "https://www.instagram.com/akehhhhhh/",
    facebook: "https://www.facebook.com/johnraymart.tenio.73",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const certificateCategories = ["All", "Frontend", "Backend", "Cloud", "Design"];

export const certificates = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "Mar 2024",
    category: "Frontend",
    credentialUrl: "#",
    // Paste a real badge/preview image URL, or use null to show the default icon
    badge: null,
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Nov 2023",
    category: "Cloud",
    credentialUrl: "#",
    badge: null,
  },
  {
    title: "Node.js Application Development",
    issuer: "OpenJS Foundation",
    date: "Aug 2023",
    category: "Backend",
    credentialUrl: "#",
    badge: null,
  },
  {
    title: "Google UX Design Professional",
    issuer: "Google",
    date: "Jun 2023",
    category: "Design",
    credentialUrl: "#",
    badge: null,
  },
  {
    title: "React — The Complete Guide",
    issuer: "Udemy",
    date: "Jan 2023",
    category: "Frontend",
    credentialUrl: "#",
    badge: null,
  },
  {
    title: "MongoDB for JavaScript Developers",
    issuer: "MongoDB University",
    date: "Oct 2022",
    category: "Backend",
    credentialUrl: "#",
    badge: null,
  },
];

// ─── Tech Stack (Skills section) ─────────────────────────────────────────────
// `icon`    → Devicon slug  (https://devicon.dev)
// `variant` → SVG variant   ("original" | "plain" | "wordmark")
// `color`   → brand hex, used for card bg tint and hover glow
// `icon: null` → shows a Lucide fallback icon
export const skillGroups = [
  {
    category: "Frontend",
    techs: [
      { name: "React",        icon: "react",       variant: "original", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", variant: "original",    color: "#06B6D4" },
      { name: "Vite",         icon: "vitejs",      variant: "original", color: "#646CFF" },
      { name: "JavaScript",   icon: "javascript",  variant: "original", color: "#F7DF1E" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Laravel",    icon: "laravel",    variant: "original", color: "#FF2D20" },
      { name: "PHP",        icon: "php",        variant: "original", color: "#6F4A8E" },
      { name: "Node.js",    icon: "nodejs",     variant: "original", color: "#339933" },
      { name: "Python",     icon: "python",     variant: "original", color: "#3776AB" },
      { name: "Flask",      icon: "flask",      variant: "original", color: "#c07ff5" },
      { name: "PostgreSQL", icon: "postgresql", variant: "original", color: "#4169E1" },
      { name: "Firebase",   icon: "firebase",   variant: "original", color: "#FFCA28" },
      { name: "Supabase",   icon: "supabase",   variant: "original", color: "#3ECF8E" },
      { name: "MySQL",      icon: "mysql",      variant: "original", color: "#4479A1" },
      { name: "ObjectBox",  icon: null,         variant: "original", color: "#6F4A8E" },
    ],
  },
  {
    category: "AI / Machine Learning",
    techs: [
      { name: "TensorFlow",   icon: "tensorflow", variant: "original", color: "#FF6F00" },
      { name: "PyTorch",      icon: "pytorch",    variant: "original", color: "#EE4C2C" },
      { name: "Hugging Face", icon: null,         variant: null,       color: "#FFD21E" },
      { name: "Roboflow",     icon: null,         variant: null,       color: "#6F4A8E" },
    ],
  },
  {
    category: "Development Tools",
    techs: [
      { name: "GitHub",  icon: "github",  variant: "original", color: "#6F4A8E" },
      { name: "Git",     icon: "git",     variant: "original", color: "#F05032" },
      { name: "VS Code", icon: "vscode",  variant: "original", color: "#007ACC" },
    ],
  },
  {
    category: "Mobile",
    techs: [
      { name: "Flutter", icon: "flutter", variant: "original", color: "#02569B" },
      { name: "Dart",    icon: "dart",    variant: "original", color: "#0175C2" },
    ],
  },
];

// Marquee strip in the About section — all techs in one flat list
export const techStack = [
  "React", "Tailwind CSS", "Vite", "JavaScript",
  "Laravel", "Node.js", "Python", "Flask",
  "PostgreSQL", "Firebase", "Supabase", "MySQL",
  "TensorFlow", "PyTorch", "Hugging Face", "Roboflow",
  "Flutter", "Dart", "GitHub", "Git", "VS Code",
];

export const galleryCategories = ["All", "Grad Pic", "AREA 51", "OJT"];

export const galleryImages = [
  {
    src: "/snapshots/akeh.jpg",
    caption: "Graduation pic",
    category: "Grad Pic",
  },
  {
    src: "/snapshots/dacun5.jpg",
    caption: "17th DACUN Phil-BIST",
    category: "AREA 51",
  },
  {
    src: "/snapshots/dacun.jpg",
    caption: "17th DACUN Phil-BIST",
    category: "AREA 51",
  },
  {
    src: "/snapshots/dacun2.jpg",
    caption: "17th DACUN Phil-BIST",
    category: "AREA 51",
  },
  {
    src: "/snapshots/programmer.jpg",
    caption: "OJT time as a programmer",
    category: "OJT",
  },
  {
    src: "/snapshots/visit.jpg",
    caption: "AREA 51 senior developers along with the CEO and OJT's",
    category: "OJT",
  },
  {
    src: "/snapshots/visit2.jpg",
    caption: "OJT-Visit clients to witness our company CEO communication skills",
    category: "OJT",
  },
  {
    src: "/snapshots/dacun3.jpg",
    caption: "17th DACUN Phil-BIST",
    category: "AREA 51",
  },
  {
    src: "/snapshots/dacun4.jpg",
    caption: "17th DACUN Phil-BIST",
    category: "AREA 51",
  },
];

export const projects = [
  {
    title: "CivicPrep",
    description:
      "A gamified mock reviewer for civil service examination integrated with free spaced repetition scheduler (FSRS).",
    tags: ["Flutter", "Dart", "ObjectBox"],
    image:
      "/projects/civicprep.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Library Attendance System",
    description:
      "A library attendance system with barcode scanner for seamless attendance in and out. The system also integrated with ID generator for quick ID creation.",
    tags: ["PHP", "Tailwind CSS", "JavaScript"],
    image:
      "/projects/library_attendance_system.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  
];
