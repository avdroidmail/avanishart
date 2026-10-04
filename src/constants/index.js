// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "ICAMPS – Mobile Trust & Security Platform",
    description:
      "A government-aligned platform focused on enhancing trust and security in mobile ecosystems under the Digital India initiative. Designed for a mobile-first population, enabling secure access to financial, social, and public services through trusted mobile infrastructure.",
    href: "https://www.icamps.in/",
    image: "/assets/projects/icamps.jpg",
    bgImage: "/assets/backgrounds/background-img.jpg",
    frameworks: [
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "Java 17" },
      { id: 3, name: "React" },
      { id: 4, name: "Next.js" },
      { id: 5, name: "Android (Java/Kotlin)" },
      { id: 6, name: "iOS (Swift)" },
    ],
  },
  {
    id: 2,
    name: "eChallan – Traffic Enforcement System",
    description:
      "A real-time traffic violation management system enabling digital challan issuance, tracking, and payment. Integrated with enforcement devices and Android-based POS systems for on-field officers.",
    href: "https://echallan.parivahan.gov.in/index/accused-challan",
    image: "/assets/projects/echallan.jpg",
    bgImage: "/assets/backgrounds/background-img.jpg",
    frameworks: [
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "Java 11" },
      { id: 3, name: "Angular" },
      { id: 4, name: "Android (POS Integration)" },
      { id: 5, name: "REST APIs" },
    ],
  },
  {
    id: 3,
    name: "mParivahan – Unified Transport Mobile Platform",
    description:
      "A large-scale mobile application integrating VAHAN, SARATHI, and eChallan services to provide citizens with unified access to driving license, vehicle registration, and enforcement data.",
    href: "https://parivahan.gov.in/",
    image: "/assets/projects/mparivahan.jpg",
    bgImage: "/assets/backgrounds/background-img.jpg",
    frameworks: [
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "Java 11" },
      { id: 3, name: "Android" },
      { id: 4, name: "iOS" },
      { id: 5, name: "Microservices Architecture" },
    ],
  },
  {
    id: 4,
    name: "Panini Keypad – Predictive Input Technology",
    description:
      "An award-winning Indian innovation and patented predictive text input system enabling efficient typing in Indian languages using minimal keystrokes. Designed for mobile-first users with multilingual support.",
    href: "https://en.wikipedia.org/wiki/Panini_Keypad",
    image: "/assets/projects/panini-keypad.jpg",
    bgImage: "/assets/backgrounds/background-img.jpg",
    frameworks: [
      { id: 1, name: "Android" },
      { id: 2, name: "iOS" },
      { id: 3, name: "NLP Algorithms" },
      { id: 4, name: "Predictive Text Engine" },
    ],
  },
  {
    id: 5,
    name: "AI Buddy – AI-Powered Matching Platform",
    description:
      "A Tinder-style full-stack application enhanced with AI-driven user profile generation and smart matching logic. Demonstrates integration of AI to improve user engagement and personalization in a modern web application.",
    href: "https://github.com/avanishinfo/myaibuddy",
    image: "/assets/projects/ai-buddy.jpg",
    bgImage: "/assets/backgrounds/background-img.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Spring Boot" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Docker" },
      { id: 5, name: "AI Integration" },
    ],
  },
  {
    id: 6,
    name: "mCam – Real-Time Video Streaming Mobile App",
    description:
      "A mobile application enabling real-time video streaming and processing using device camera input. Implemented computer vision features with OpenCV and integrated backend communication via JSON APIs.",
    href: "",
    image: "/assets/projects/mcams.jpg",
    bgImage: "/assets/backgrounds/background-img.jpg",
    frameworks: [
      { id: 1, name: "Java" },
      { id: 2, name: "Android SDK" },
      { id: 3, name: "OpenCV" },
      { id: 4, name: "JSON APIs" },
      { id: 5, name: "Eclipse IDE" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/kunwaravanish" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@AvanishSingh-q5x",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/avanish-singh-74b76458/" },
  { name: "GitHub", href: "https://github.com/avanishinfo" },
];
