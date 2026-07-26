import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiX, HiChevronDown } from "react-icons/hi";

const propertyDropdown = [
  { label: "Villas", desc: "Standalone luxury homes", icon: "villa" },
  { label: "Apartments", desc: "High-rise city living", icon: "apartment" },
  { label: "Penthouses", desc: "Top-floor exclusives", icon: "location_city" },
  { label: "Commercial", desc: "Offices & retail spaces", icon: "store" },
];

const navLinks = [
  { label: "Properties", href: "#properties", dropdown: propertyDropdown },
  { label: "Services", href: "#why-us" },
  { label: "Investment", href: "#invest" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,17,58,0.08)] py-2"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Logo */}
          <a
            href="#"
            className={`font-display font-extrabold tracking-tight transition-all duration-500 ${
              scrolled ? "text-primary text-xl md:text-2xl" : "text-white text-2xl md:text-3xl"
            }`}
          >
            Seth Idowu <span className="text-secondary-fixed">Property</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleLeave()}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 font-semibold text-sm tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? "text-primary/80 hover:text-secondary-fixed-dim"
                      : "text-white/90 hover:text-secondary-fixed"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Falling dropdown */}
                <AnimatePresence>
                  {link.dropdown && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -18, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 rounded-2xl bg-white shadow-premium border border-outline-variant/40 overflow-hidden"
                    >
                      <div className="p-2">
                        {link.dropdown.map((item, i) => (
                          <motion.a
                            key={item.label}
                            href="#properties"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 + 0.05 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors duration-200 group"
                          >
                            <span className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary-fixed group-hover:text-on-secondary-fixed transition-colors duration-200">
                              <span className="material-symbols-outlined text-lg">
                                {item.icon}
                              </span>
                            </span>
                            <span>
                              <span className="block text-primary font-semibold text-sm">
                                {item.label}
                              </span>
                              <span className="block text-on-surface-variant text-xs">
                                {item.desc}
                              </span>
                            </span>
                          </motion.a>
                        ))}
                      </div>
                      <div className="h-1 w-full bg-gold-gradient" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              className={`hidden sm:inline-flex px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                scrolled
                  ? "text-primary hover:text-secondary-fixed-dim"
                  : "text-white hover:text-secondary-fixed"
              }`}
            >
              Login
            </button>
            <button className="hidden sm:inline-flex bg-gold-gradient text-on-secondary-fixed px-6 py-2.5 rounded-full font-semibold text-sm shadow-soft hover:scale-105 active:scale-95 transition-transform duration-300">
              List Property
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              <HiOutlineMenu size={26} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-[82%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/30">
                <span className="font-display font-bold text-primary text-lg">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-primary hover:bg-primary/5"
                >
                  <HiX size={22} />
                </button>
              </div>
              <div className="flex flex-col px-6 py-4 gap-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="py-3.5 border-b border-outline-variant/15 text-primary font-semibold text-base"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <button className="mt-6 w-full bg-gold-gradient text-on-secondary-fixed py-3.5 rounded-full font-semibold">
                  List Property
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
