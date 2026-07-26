import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../motionVariants";

const services = [
  {
    icon: "sell",
    title: "Residential Sales",
    desc: "Buy or sell homes across Lagos, Abuja and beyond with expert guidance at every step.",
  },
  {
    icon: "apartment",
    title: "Commercial Leasing",
    desc: "Find offices and retail spaces that fit your business, on terms that work for you.",
  },
  {
    icon: "landscape",
    title: "Land Banking",
    desc: "Secure verified land in high-growth corridors before prices climb.",
  },
  {
    icon: "trending_up",
    title: "Investment Advisory",
    desc: "Portfolio strategy built around real yield data, not guesswork.",
  },
];

export default function Services() {
  return (
    <section className="py-14 md:py-section-gap bg-primary relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary-fixed/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary-fixed/10 blur-3xl" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-secondary-fixed font-semibold text-[10px] sm:text-sm uppercase tracking-widest block mb-2">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl text-white">
            Full-Service Real Estate Solutions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="glass-dark rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center text-secondary-fixed mb-3 sm:mb-5">
                <span className="material-symbols-outlined text-lg sm:text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-white font-display font-semibold text-xs sm:text-base md:text-xl mb-1 sm:mb-2">
                {s.title}
              </h3>
              <p className="text-white/70 text-[10px] sm:text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
