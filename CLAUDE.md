# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

No test runner is configured yet. No linter config is wired; `npm run lint` exists in package.json but ESLint is not configured (no `.eslintrc`).

## Architecture

**Stack**: React 18 + Vite 7 + Tailwind CSS 3 + Framer Motion 11 + React Router DOM 6

### Folder structure

```
src/
├── App.jsx              # BrowserRouter + ThemeProvider + AnimatedRoutes
├── main.jsx             # Entry point, HelmetProvider wrapper
├── index.css            # Tailwind directives + global CSS variables, glass utilities,
│                        # gradient-text helper, noise/dot/grid overlays, marquee keyframes
├── context/
│   └── ThemeContext.jsx  # isDark/toggle, persists to localStorage as 'jc-theme'
├── utils/
│   └── animations.js    # Shared Framer Motion variants (fadeUp, fadeIn, fadeLeft,
│                        # fadeRight, scaleIn, staggerContainer, staggerItem, viewportConfig)
├── data/                # Static content arrays — edit here to change copy
│   ├── services.js      # 8 practice areas (id, icon, title, short, description, features)
│   ├── testimonials.js  # 4 client quotes with metric and avatar gradient
│   ├── team.js          # leadership[] + values[]
│   ├── portfolio.js     # 6 case studies with metrics[]
│   └── blogPosts.js     # 6 articles + blogCategories[]
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx   # Sticky, scroll-aware, animated hamburger, active NavLink indicator
│   │   ├── Footer.jsx   # Multi-column nav + contact strip + social icons
│   │   └── Layout.jsx   # Wraps all pages; resets scroll on route change
│   ├── ui/
│   │   ├── Button.jsx         # Polymorphic: renders <button>, <a>, or <Link> based on props
│   │   ├── SectionTitle.jsx   # eyebrow + h2 + subtitle with scroll animation
│   │   ├── AnimatedCounter.jsx # react-countup triggered by IntersectionObserver
│   │   └── Badge.jsx          # Color-mapped tag chip (8 color variants)
│   ├── home/            # One component per Home page section
│   │   ├── Hero.jsx      # Floating stat cards, grid bg, diagonal SVG, two CTAs
│   │   ├── TrustedBy.jsx # Infinite marquee + Google/Meta/Anthropic feature badges
│   │   ├── ServicesPreview.jsx # 6-card grid from services data
│   │   ├── Stats.jsx     # 6-cell grid with AnimatedCounter
│   │   ├── WhyUs.jsx     # 2-col: editorial left + 6-pillar grid right
│   │   ├── Testimonials.jsx # Featured panel + sidebar selector + dot nav
│   │   ├── Support247.jsx   # 2-col: copy left + 4 channel cards right
│   │   └── Newsletter.jsx   # Email capture with simulated submit + react-hot-toast
│   └── shared/
│       ├── BackToTop.jsx   # Appears after 400px scroll
│       └── ChatWidget.jsx  # FAB + slide-up chat panel (UI placeholder, no backend)
└── pages/
    ├── Home.jsx      # Assembles all home/ components
    ├── About.jsx     # Story timeline, Mission/Vision, Values, Leadership
    ├── Services.jsx  # Accordion grid — click to expand features + Badge chips
    ├── Portfolio.jsx # Case study grid (first card spans 2 cols), partnership strip
    ├── Careers.jsx   # Benefits grid + open roles list
    ├── Blog.jsx      # Featured post + filterable/searchable article grid
    └── Contact.jsx   # 5-col split: form (3) + sidebar (2), FAQ accordion below
```

### Design system

- **Colors**: Custom Tailwind palette — `navy-*` (brand blues), `silver-*` (grays), `midnight` (`#080C14` body bg)
- **Typography**: `font-display` = Cormorant Garamond (headings), `font-sans` = DM Sans (body), `font-counter` = Bebas Neue (stats)
- **Glass panels**: `.glass` / `.glass-strong` utility classes (backdrop-blur + semi-transparent bg + subtle border)
- **Gradient text**: `.gradient-text` (white→silver→blue diagonal) applied to all page h1/h2
- **Animations**: All scroll-triggered sections use `motion.div` with variants from `utils/animations.js` + `viewport={{ once: true }}`

### Key conventions

- All page `<h1>` elements use `style={{ fontSize: 'clamp(...)' }}` for fluid type scaling
- `border-gradient` class creates an animated gradient border via CSS `mask` trick (defined in `index.css`)
- Environment variables are all prefixed `VITE_` and accessed via `import.meta.env.VITE_*`
- `.env` is gitignored; `.env.example` is the committed template
