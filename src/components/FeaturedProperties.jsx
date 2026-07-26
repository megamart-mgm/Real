import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineHeart, HiHeart, HiOutlineLocationMarker, HiArrowRight } from "react-icons/hi";
import { fadeUp, staggerContainer, viewportOnce } from "../motionVariants";
import properties from "../data/properties";

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-14 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-between items-end mb-8 md:mb-12"
        >
          <div>
            <span className="text-secondary font-semibold text-[10px] sm:text-sm uppercase tracking-widest block mb-2">
              Curated Listings
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl text-primary">
              Featured Properties
            </h2>
          </div>
          <a
            href="#properties"
            className="hidden sm:flex text-primary font-semibold text-sm items-center gap-2 hover:gap-3 transition-all group"
          >
            View All Listings
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);
  const {
    title,
    location,
    price,
    beds,
    baths,
    size,
    tag,
    tagColor,
    image,
    sold,
  } = property;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative rounded-xl md:rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/60 shadow-soft hover:shadow-premium transition-shadow duration-500"
    >
      <div className="relative h-28 sm:h-40 md:h-64 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span
          className={`absolute top-1.5 left-1.5 sm:top-4 sm:left-4 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[7px] sm:text-xs font-bold uppercase tracking-wide ${tagColor}`}
        >
          {tag}
        </span>

        {/* Favorite heart */}
        <motion.button
          onClick={() => setLiked((v) => !v)}
          whileTap={{ scale: 0.8 }}
          aria-label="Save to favorites"
          className="absolute top-1.5 right-1.5 sm:top-4 sm:right-4 w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm"
        >
          <AnimatePresence mode="wait" initial={false}>
            {liked ? (
              <motion.span
                key="filled"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <HiHeart className="text-red-500 text-xs sm:text-lg" />
              </motion.span>
            ) : (
              <motion.span
                key="outline"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <HiOutlineHeart className="text-primary text-xs sm:text-lg" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <div className={`p-2.5 sm:p-4 md:p-6 ${sold ? "opacity-80" : ""}`}>
        <div className="text-secondary font-display font-bold text-xs sm:text-base md:text-2xl mb-0.5 md:mb-2 truncate">
          {price}
        </div>
        <h3 className="text-primary font-display font-semibold text-[11px] sm:text-sm md:text-xl mb-0.5 md:mb-2 truncate">
          {title}
        </h3>
        <p className="text-on-surface-variant text-[9px] sm:text-xs md:text-sm mb-1.5 md:mb-6 flex items-center gap-1 truncate">
          <HiOutlineLocationMarker className="text-xs sm:text-sm shrink-0" /> {location}
        </p>
        <div className="flex flex-wrap items-center gap-1 sm:gap-3 md:gap-6 text-on-surface-variant text-[8px] sm:text-[10px] md:text-sm border-t border-outline-variant/40 pt-1.5 md:pt-4">
          <span className="flex items-center gap-0.5 sm:gap-1">
            <span className="material-symbols-outlined text-primary text-xs sm:text-sm md:text-base">bed</span>
            {beds} Beds
          </span>
          <span className="flex items-center gap-0.5 sm:gap-1">
            <span className="material-symbols-outlined text-primary text-xs sm:text-sm md:text-base">bathtub</span>
            {baths} Baths
          </span>
          <span className="flex items-center gap-0.5 sm:gap-1">
            <span className="material-symbols-outlined text-primary text-xs sm:text-sm md:text-base">square_foot</span>
            {size}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
