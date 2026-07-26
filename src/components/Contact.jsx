import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { fadeLeft, fadeRight, viewportOnce } from "../motionVariants";

const info = [
  {
    icon: HiOutlineLocationMarker,
    title: "Our Office",
    lines: ["Lekki Phase 1, Admiral Way, Lagos State, Nigeria"],
  },
  {
    icon: HiOutlinePhone,
    title: "Call Us",
    lines: ["+234 812 345 6789", "+234 901 234 5678"],
  },
  {
    icon: HiOutlineMail,
    title: "Email",
    lines: ["hello@sethidowu.com", "investment@sethidowu.com"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="text-secondary font-semibold text-[10px] sm:text-sm uppercase tracking-widest block mb-2">
              Get In Touch
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-4xl text-primary mb-6 md:mb-8">
              We'd Love to Help You Find Your Property
            </h2>
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input className="field-input !bg-surface-container !border-0 !py-4" placeholder="Your Name" type="text" />
                <input className="field-input !bg-surface-container !border-0 !py-4" placeholder="Email Address" type="email" />
              </div>
              <input className="field-input !bg-surface-container !border-0 !py-4" placeholder="Phone Number" type="text" />
              <select className="field-input !bg-surface-container !border-0 !py-4 text-on-surface-variant">
                <option>Inquiry Type</option>
                <option>Buying Property</option>
                <option>Selling Property</option>
                <option>Investment Consultation</option>
              </select>
              <textarea
                className="field-input !bg-surface-container !border-0 resize-none"
                placeholder="Your Message"
                rows={5}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-4 sm:py-5 rounded-xl font-semibold text-sm shadow-soft"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-5 sm:space-y-6">
              {info.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3.5 sm:p-4 rounded-full text-primary shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg text-primary mb-1">
                      {item.title}
                    </h4>
                    {item.lines.map((line) => (
                      <p key={line} className="text-on-surface-variant text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-52 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-soft relative grayscale hover:grayscale-0 transition-all duration-700">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf3sK-Y7UFwtI5FjknOP40VLKRhUNSqFq-yvX1GcBn_9m7NOmN-XAlnpmgY2lp18vk5l1Camfe2GnAiOch9Z4r1VZ6AyG9khVpkq4U-Tv9sRLFTw005p8rsKtFN-mO8t48ffzw7TRJ6v5R8bhc8yUFRwbelWXwHvkpzCPKTaaihy2_rx6twA_-9XcKfEG-s1sO2qt1skW0Hy8PcltkALxOiQmaDRFGRDD8_WXM-RYbqtMqmynSnlUB94o-jFODl40PIOTancV8LCw')",
                }}
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
