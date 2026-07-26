import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiCheck } from "react-icons/hi";
import { fadeUp, viewportOnce } from "../motionVariants";

const quickLinks = [
  "Residential Sales",
  "Commercial Leasing",
  "Land Banking",
  "Property Management",
  "Investment Portfolio",
];

const resources = ["Real Estate Blog", "Market Reports", "Buyer's Guide", "Mortgage Calculator", "FAQs"];

const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white w-full pt-16 pb-8 border-t border-white/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Newsletter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-dark rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16"
        >
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl mb-1">Stay in the know</h3>
            <p className="text-white/70 text-sm">
              New listings and market insights, straight to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex gap-2">
            <div className="relative flex-1 md:w-72">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 rounded-full pl-11 pr-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:border-secondary-fixed transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gold-gradient text-on-secondary-fixed px-6 py-3 rounded-full font-semibold text-sm shrink-0 flex items-center gap-1.5"
            >
              {subscribed ? (
                <>
                  <HiCheck /> Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </motion.button>
          </form>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="md:col-span-1">
            <div className="font-display font-bold text-lg sm:text-xl mb-6">
              Seth Idowu <span className="text-secondary-fixed">Property</span>
            </div>
            <p className="text-white/70 text-sm mb-8">
              Lagos's premier property marketing and investment advisory firm. We bridge the gap
              between high-end developers and discerning investors.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, backgroundColor: "#e9c349", color: "#241a00" }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={quickLinks} />
          <FooterCol title="Resources" items={resources} />
          <FooterCol title="Legal & Policy" items={legal} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Seth Idowu Property Marketing Services LTD. All rights
            reserved.
          </p>
          <p className="text-white/60 text-sm italic">
            Elevating the standard of Nigerian real estate.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h5 className="font-semibold text-xs uppercase tracking-widest mb-6">{title}</h5>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-white/70 hover:text-secondary-fixed transition-colors text-sm">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
