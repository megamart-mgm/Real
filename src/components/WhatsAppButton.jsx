import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348123456789"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 bg-[#25D366] text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-premium"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </motion.a>
  );
}
