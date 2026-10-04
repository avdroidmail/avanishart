# avanish.art — Portfolio

> **Personal portfolio of Avanish Singh** — Creative Developer & Designer at AS Agency, est. 2014.  
> Built with React, Three.js, GSAP, and TailwindCSS v4.

---

## ✨ Features

- **3D Interactive Model** — Animated butterfly/3D model powered by `@react-three/fiber` and `@react-three/drei`
- **Smooth Scroll Animations** — GSAP-driven scroll-triggered animations with Lenis for buttery-smooth scrolling
- **WebGL Floating Shapes** — Custom WebGL background animation for depth and visual richness
- **Scroll-Triggered Video Background** — `bg-web.mp4` reveals on scroll within the Hero section
- **Marquee Ticker** — Animated scrolling text marquee component
- **Calendly Integration** — "Discovery Call" button linked directly to booking
- **Fully Responsive** — Mobile-first layout using `react-responsive`
- **Dark Aesthetic** — Editorial, minimalist dark-mode design with premium typography

---

## 🗂️ Project Structure

```
avanish.art/
├── public/
│   ├── assets/          # Static assets (SVGs, icons)
│   ├── fonts/           # Custom typefaces
│   ├── images/          # Project/work images
│   ├── models/          # 3D model files (.glb)
│   ├── bg-web.mp4       # Background video
│   └── portrait.png     # Portrait image
├── src/
│   ├── sections/
│   │   ├── Hero.jsx           # Landing hero with 3D model & video
│   │   ├── Navbar.jsx         # Navigation bar with Discovery Call CTA
│   │   ├── About.jsx          # About / identity section
│   │   ├── Services.jsx       # Services overview
│   │   ├── ServiceSummary.jsx # Services summary block
│   │   ├── Works.jsx          # Portfolio / case studies
│   │   ├── Contact.jsx        # Contact form section
│   │   └── ContactSummary.jsx # Contact summary CTA
│   ├── components/
│   │   ├── Planet.jsx               # Three.js 3D model renderer
│   │   ├── FloatingShapes.jsx       # WebGL animated background
│   │   ├── Marquee.jsx              # Scrolling text marquee
│   │   ├── AnimatedHeaderSection.jsx
│   │   └── AnimatedTextLines.jsx
│   ├── constants/       # Shared constants/data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or above
- **npm** v9 or above

### Installation

```bash
# Clone the repository
git clone https://github.com/avanishinfo/avanish.art.git
cd avanish.art

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 6](https://vitejs.dev/) | Build tool & dev server |
| [TailwindCSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | Three.js helpers & abstractions |
| [GSAP](https://gsap.com/) | Scroll-triggered & timeline animations |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll experience |
| [react-responsive](https://github.com/yocontra/react-responsive) | Responsive breakpoint hooks |
| [react-scroll](https://github.com/fisshy/react-scroll) | Smooth in-page scrolling |
| [maath](https://github.com/pmndrs/maath) | Math utilities for 3D |
| [@iconify/react](https://iconify.design/) | Icon library |

---

## 📄 License

All rights reserved © Avanish Singh / AS Agency.  
This codebase is a personal portfolio and is not open for redistribution without permission.

---

## 📬 Contact

- **Website:** [avanish.art](https://avanish.art)
- **Discovery Call:** Book via Calendly from the site's navigation
