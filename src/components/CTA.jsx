import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "../motionVariants";

export default function CTA() {
  return (
    <section id="invest" className="py-14 md:py-section-gap bg-primary relative overflow-hidden">
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 rounded-full border border-secondary-fixed/20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 rounded-2xl border border-secondary-fixed/20 hidden md:block"
        animate={{ y: [0, 18, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary-fixed/10 blur-3xl" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
            Invest in the Future of Real Estate
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/75 mb-6 md:mb-8 leading-relaxed">
            Join our exclusive network of investors and access high-yield off-market
            opportunities. From land flipping to luxury developments, we guide you to 25%+ annual
            returns.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-gradient text-on-secondary-fixed px-6 py-3.5 sm:px-10 sm:py-4 rounded-full font-semibold text-xs sm:text-sm shadow-premium"
          >
            Start Investing Now
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
          className="bg-white/10 backdrop-blur-md p-1 border border-white/20 rounded-2xl"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xs h-56 sm:h-72 md:w-80 md:h-96 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB8rul6N3qwzbROppVKDVIxCgn13bXXmHpmgrkc8AcgShj95KjHwEXTOJi7ZlN7BJ9BRyAHXM8wNv0hHX9BGZwv-mltHPu19OKk8XAXNihCVUG8RVcnWFmt6rrBKWiXIIyvMKADp30DdNsRudnkEind4e-BuVQXG6YugdKQFcQ1ddgdlTZRLqHRZJZvdXpjgrlnVVGQMmKKtHJLa7Xf-R1g3XAwCJ1zaK6a8jH4IOibbvYDbCOFQkl7x6VI-LLrXMhMaBhXDOzUsc')",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
