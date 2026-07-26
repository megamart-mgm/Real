import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";

const headline = "Find Your Dream Property Today";

const floatingStats = [
  { label: "Luxury Properties", value: "500+", top: "18%", side: "left" },
  { label: "Client Satisfaction", value: "98%", top: "62%", side: "right" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header ref={ref} className="relative">
      <div className="relative min-h-[78vh] sm:min-h-[88vh] md:min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-10 md:pb-0">
        {/* Parallax background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-16 -bottom-16 z-0">
          <div
            className="w-full h-full bg-cover bg-center scale-110"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDn5RXZg86OJ-B0DBP87jJtDbRrhZJh7hTwuVxfuD9IQy5va1ehOG5KH6nXBIo_w76uJCrF7mE79ZuizaGrFKnJWvV60qQik3YSdMrf9vK8gSf4S-WHRgAkddYHmza3aEpVCvXljiuSZlYu6lDzRfNOCLZknoKjRsEzvVr2_BlWBRlx21LzuMCFOGaTJUoADzbwdHQ05OSKMTjw0qDXpteAqLo5rxbJ_RydID3uKaILkeTAeqB9tfnFJ0B1-q8KMBnDJKMmjrRf454')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full"
        >
          <div className="max-w-2xl text-white">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-5 text-secondary-fixed tracking-widest uppercase font-semibold text-xs sm:text-sm"
            >
              <span className="w-8 h-px bg-secondary-fixed" />
              Premium Real Estate Agency
            </motion.span>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl leading-tight mb-5 md:mb-7">
              {headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg mb-8 md:mb-10 text-white/85 leading-relaxed max-w-lg"
            >
              Discover exclusive residential and commercial investments in Lagos and beyond. We
              simplify your journey to owning, selling, or investing in high-yield premium
              properties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <RippleButton className="bg-gold-gradient text-on-secondary-fixed px-6 py-3.5 md:px-10 md:py-4">
                Browse Properties
              </RippleButton>
              <RippleButton className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white/10 px-6 py-3.5 md:px-10 md:py-4">
                Contact Us
              </RippleButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating stat cards — desktop only, decorative */}
        {floatingStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: s.side === "left" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 + i * 0.15 }}
            className={`hidden lg:flex absolute z-10 ${
              s.side === "right" ? "right-16" : "right-16"
            } glass rounded-2xl px-6 py-4 items-center gap-4 shadow-premium animate-float`}
            style={{ top: s.top, animationDelay: `${i * 0.6}s` }}
          >
            <div className="w-11 h-11 rounded-full bg-secondary-fixed/90 flex items-center justify-center text-on-secondary-fixed">
              <span className="material-symbols-outlined text-lg">trending_up</span>
            </div>
            <div>
              <p className="text-white font-display font-bold text-xl leading-none">{s.value}</p>
              <p className="text-white/70 text-xs mt-1">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search bar: normal flow below hero on mobile, overlapping the hero edge on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-6 sm:mt-8 md:-mt-24 mb-10 md:mb-12"
      >
        <div className="glass rounded-2xl shadow-premium p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            <Field label="Property Type" icon="home_work">
              <select className="field-input">
                <option>All Types</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Commercial</option>
              </select>
            </Field>
            <Field label="Location" icon="location_on">
              <input className="field-input" placeholder="Lekki, Ikoyi..." type="text" />
            </Field>
            <Field label="Budget Range" icon="payments">
              <select className="field-input">
                <option>Any Price</option>
                <option>₦50M - ₦100M</option>
                <option>₦100M - ₦500M</option>
                <option>₦500M+</option>
              </select>
            </Field>
            <Field label="Bedrooms" icon="bed">
              <select className="field-input">
                <option>Any</option>
                <option>2+ Beds</option>
                <option>3+ Beds</option>
                <option>4+ Beds</option>
                <option>5+ Beds</option>
              </select>
            </Field>
            <div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm h-[48px] shadow-soft"
              >
                <HiOutlineSearch size={18} /> Search Property
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

function Field({ label, icon, children }) {
  return (
    <div className="space-y-2">
      <label className="text-on-surface-variant font-medium text-xs flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">{icon}</span> {label}
      </label>
      {children}
    </div>
  );
}

/** Button with a GPU-friendly ripple effect on click */
function RippleButton({ children, className = "", ...props }) {
  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.className =
      "absolute rounded-full bg-white/40 pointer-events-none animate-[ripple_0.6s_ease-out]";
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <motion.button
      onClick={createRipple}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden rounded-full font-semibold text-xs sm:text-sm transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
