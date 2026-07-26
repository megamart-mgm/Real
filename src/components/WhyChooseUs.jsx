import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../motionVariants";

const reasons = [
  {
    icon: "verified_user",
    title: "Verified Listings",
    desc: "Every property is inspected and title-checked before it reaches you.",
  },
  {
    icon: "savings",
    title: "Best Market Value",
    desc: "Data-driven pricing so you never overpay or undersell.",
  },
  {
    icon: "support_agent",
    title: "24/7 Support",
    desc: "Our advisors are on call throughout your entire journey.",
  },
  {
    icon: "gavel",
    title: "Secure Paperwork",
    desc: "Clean titles and transparent contracts, every single time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-14 md:py-section-gap bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-secondary font-semibold text-[10px] sm:text-sm uppercase tracking-widest block mb-2">
            Why Choose Us
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl text-primary">
            Why We Are The Best
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -10, boxShadow: "0 20px 60px -15px rgba(0,17,58,0.25)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-surface-container-low rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gold-gradient flex items-center justify-center text-on-secondary-fixed mb-3 sm:mb-5"
              >
                <span className="material-symbols-outlined text-lg sm:text-2xl">{r.icon}</span>
              </motion.div>
              <h3 className="text-primary font-display font-semibold text-xs sm:text-base md:text-xl mb-1 sm:mb-2">
                {r.title}
              </h3>
              <p className="text-on-surface-variant text-[10px] sm:text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
