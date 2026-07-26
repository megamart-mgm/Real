import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../motionVariants";
import locations from "../data/locations";

export default function Locations() {
  return (
    <section className="py-14 md:py-section-gap bg-surface-container-low">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-8 md:mb-16"
      >
        <span className="text-secondary font-semibold text-[10px] sm:text-sm uppercase tracking-widest block mb-2">
          Elite Locations
        </span>
        <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl text-primary">
          Explore Top Neighborhoods
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
      >
        {locations.map((loc) => (
          <motion.div key={loc.name} variants={fadeUp} className="group cursor-pointer">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-3 shadow-soft">
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${loc.image}')` }}
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all duration-500" />
            </div>
            <h4 className="font-semibold text-[10px] sm:text-sm md:text-base text-center text-primary group-hover:text-secondary-fixed-dim transition-colors">
              {loc.name}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
