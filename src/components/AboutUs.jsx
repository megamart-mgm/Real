import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "../motionVariants";

const points = [
  { icon: "workspace_premium", label: "Licensed & Registered" },
  { icon: "handshake", label: "Client-First Approach" },
  { icon: "gavel", label: "Transparent Documentation" },
  { icon: "support_agent", label: "Dedicated Support" },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-14 md:py-section-gap bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-premium aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB8rul6N3qwzbROppVKDVIxCgn13bXXmHpmgrkc8AcgShj95KjHwEXTOJi7ZlN7BJ9BRyAHXM8wNv0hHX9BGZwv-mltHPu19OKk8XAXNihCVUG8RVcnWFmt6rrBKWiXIIyvMKADp30DdNsRudnkEind4e-BuVQXG6YugdKQFcQ1ddgdlTZRLqHRZJZvdXpjgrlnVVGQMmKKtHJLa7Xf-R1g3XAwCJ1zaK6a8jH4IOibbvYDbCOFQkl7x6VI-LLrXMhMaBhXDOzUsc')",
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-premium p-5 items-center gap-4 max-w-[220px]"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <p className="text-primary font-medium text-sm leading-snug">
                Trusted by 200+ families and investors across Nigeria
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-2">
              About Us
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl text-primary mb-4 md:mb-6">
              Built on Trust, Driven by Results
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base mb-4 leading-relaxed">
              Seth Idowu Property Marketing Services LTD has spent over a decade connecting
              discerning buyers, sellers and investors with Nigeria's finest residential and
              commercial addresses. We are more than agents — we are advisors who understand the
              market, the paperwork, and the people.
            </p>
            <p className="text-on-surface-variant text-sm sm:text-base mb-6 leading-relaxed">
              From Lekki to Maitama, our team handles every transaction with the same care we'd
              want for our own families, backed by verified listings and transparent processes
              from first viewing to final handover.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {points.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-secondary">{p.icon}</span>
                  <span className="text-primary font-medium text-xs sm:text-sm">{p.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-xs sm:text-sm shadow-soft"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
