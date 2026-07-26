import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../motionVariants";

const stats = [
  { label: "Luxury Properties", target: 500, suffix: "+" },
  { label: "Happy Clients", target: 200, suffix: "+" },
  { label: "Years Experience", target: 10, suffix: "+" },
  { label: "Client Satisfaction", target: 98, suffix: "%" },
];

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-secondary font-display font-extrabold text-2xl sm:text-4xl md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 text-center"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="space-y-2">
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-on-surface-variant font-medium text-[11px] sm:text-sm md:text-base">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
