/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00113a",
        "primary-dark": "#000b26",
        "primary-container": "#002366",
        "on-primary": "#ffffff",
        secondary: "#735c00",
        "secondary-fixed": "#e9c349",
        "secondary-fixed-dim": "#d4af37",
        "secondary-container": "#fed65b",
        "on-secondary-fixed": "#241a00",
        background: "#fcf9f8",
        surface: "#ffffff",
        "surface-container-low": "#f6f3f2",
        "surface-container": "#f0eded",
        "on-surface": "#1c1b1b",
        "on-surface-variant": "#5a5c66",
        "outline-variant": "#e1e0e6",
      },
      fontFamily: {
        display: ["'Hanken Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "container-max": "1280px",
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "section-gap": "120px",
        gutter: "24px",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0, 17, 58, 0.15)",
        premium: "0 20px 60px -15px rgba(0, 17, 58, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #fed65b 0%, #e9c349 50%, #d4af37 100%)",
      },
    },
  },
  plugins: [],
};
