import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { fadeUp, viewportOnce } from "../motionVariants";
import testimonials from "../data/testimonials";

const AUTO_SLIDE_MS = 5000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTO_SLIDE_MS);
    return () => clearInterval(timer);
  }, [next, paused]);

  const t = testimonials[index];

  return (
    <section className="py-14 md:py-section-gap bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-8 md:mb-14"
        >
          <span className="text-secondary font-semibold text-[10px] sm:text-sm uppercase tracking-widest block mb-2">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl text-primary">
            What Our Clients Say
          </h2>
        </motion.div>

        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-premium p-6 sm:p-10 min-h-[280px] sm:min-h-[240px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-center"
              >
                <div className="flex justify-center gap-1 mb-4 text-secondary-fixed-dim">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <HiStar key={i} />
                  ))}
                </div>
                <p className="text-primary text-sm sm:text-lg leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <p className="font-display font-semibold text-primary">{t.name}</p>
                <p className="text-on-surface-variant text-xs sm:text-sm">{t.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="hidden sm:flex absolute top-1/2 -left-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-soft items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <HiChevronLeft size={20} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="hidden sm:flex absolute top-1/2 -right-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-soft items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <HiChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className="p-1"
              >
                <motion.span
                  animate={{
                    width: i === index ? 24 : 8,
                    backgroundColor: i === index ? "#00113a" : "#c9c6c6",
                  }}
                  className="block h-2 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
