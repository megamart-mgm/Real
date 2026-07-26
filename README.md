# Seth Idowu Property — React + Tailwind + Framer Motion

Premium, animated rebuild of the homepage. All original content, branding
(navy `#00113a` / gold gradient), copy, and section order are preserved —
only the UI/UX, interactions, and code architecture were upgraded.

## Setup

```bash
npm install
npm run dev       # local dev server (Vite)
npm run build     # production build → /dist
npm run preview   # preview the production build
```

Requires Node 18+.

## What changed vs. the HTML version

- **Navbar** — sticky, transparent over the hero, turns solid white with a
  shadow on scroll. The "Properties" link has an animated **fall-down
  dropdown** (rounded corners, shadow, staggered item entrance, gold
  underline). Mobile menu slides in from the right with a backdrop.
- **Hero** — parallax background (scroll-linked via `useScroll` /
  `useTransform`), word-by-word headline entrance, floating stat cards
  (desktop), ripple-effect CTA buttons. The search panel sits **below** the
  hero in normal flow on mobile and overlaps the hero edge on desktop,
  exactly as requested earlier.
- **Property cards** — glassmorphism surface, image zoom on hover, animated
  heart/favorite toggle (spring transition), price + status badges, staggered
  grid entrance. Two-per-row on mobile.
- **Why Choose Us** — cards animate in independently with spring hover lift.
- **Services** — new full-service overview section (dark glass cards) to
  flesh out "Services" beyond the properties dropdown.
- **Testimonials** — new auto-sliding carousel (5s interval, pauses on
  hover), directional slide transitions, dot + arrow controls.
- **Investment CTA** — floating rotating shapes, animated gold button.
- **Footer** — added a newsletter signup with inline success state, animated
  social icons.
- **Global** — every section fades/slides into view on scroll
  (`whileInView`, fires once), respecting `prefers-reduced-motion`.

## Component structure

```
src/
  App.jsx                 assembles all sections + page-load fade
  motionVariants.js        shared Framer Motion variants (fadeUp, fadeLeft, fadeRight, scaleIn, stagger)
  data/
    properties.js          the 6 original listings
    locations.js            the 6 original neighborhoods
    testimonials.js         4 client testimonials
  components/
    Navbar.jsx              sticky nav + fall-down dropdown + mobile slide-in menu
    Hero.jsx                 parallax hero + search panel
    Stats.jsx                 animated counters
    AboutUs.jsx
    FeaturedProperties.jsx    property grid + PropertyCard
    WhyChooseUs.jsx
    Services.jsx
    Locations.jsx
    Testimonials.jsx
    CTA.jsx                   "Invest in the Future" section
    Contact.jsx
    Footer.jsx
    WhatsAppButton.jsx
```

## Notes

- Tailwind config (`tailwind.config.js`) mirrors the original design tokens
  (colors, spacing, container width) so paddings/margins match 1:1.
- Images are still pointed at the original placeholder URLs — swap in your
  own property photography before going live (see `src/data/*.js`).
- The contact form and newsletter form are UI-only; wire `onSubmit` up to
  your backend or a service like Formspree/Resend when ready.
- Build was verified with `npm run build` — compiles clean, no errors.
