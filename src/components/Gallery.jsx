import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { galleryCategories, galleryImages } from "../data/content.js";

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null); // index into `filtered`, null = closed

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % filtered.length);

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, filtered.length]);

  return (
    <section id="gallery" className="section py-24 sm:py-32">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="eyebrow mb-3">Gallery</p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          My Snapshots.
        </h2>
        <p className="mt-4 max-w-xl text-ink/70 dark:text-paper/70">
          Explore images that related with my background and experience.
        </p>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-paper"
                  : "bg-ink/5 text-ink/70 hover:bg-primary/10 hover:text-primary dark:bg-paper/10 dark:text-paper/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-style responsive grid */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {filtered.map((image, index) => (
              <motion.button
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => openLightbox(index)}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-ink/10 dark:border-paper/10"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex w-full items-center justify-between p-4">
                    <span className="text-sm font-medium text-paper">
                      {image.caption}
                    </span>
                    <ZoomIn size={18} className="text-paper" />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-void/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={closeLightbox}
              aria-label="Close preview"
              className="absolute right-5 top-5 text-paper/70 transition-colors hover:text-paper"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper transition-colors hover:bg-primary sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.figure
              key={filtered[activeIndex].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-3xl"
            >
              <img
                src={filtered[activeIndex].src}
                alt={filtered[activeIndex].caption}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm font-medium text-paper/80">
                {filtered[activeIndex].caption}
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-paper/10 p-2 text-paper transition-colors hover:bg-primary sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
