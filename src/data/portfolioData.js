/**
 * PORTFOLIO DATA CONFIGURATION
 * --------------------------------------------------------------------------
 * Customize your portfolio by updating the values below.
 * To change your photo:
 * 1. Place your photo (e.g. photo.jpg or profile.png) into the 'public/' folder.
 * 2. Update the 'photo' property below (e.g., photo: './photo.jpg').
 */

export const personalInfo = {
  firstName: "Rajashekar Reddy",
  lastName: "SANKEPALLY",
  name: "Rajashekar Reddy SANKEPALLY",
  role: "Software Engineer",
  titleDisplay: "Masters: AI - Data analytics(In-Progress)",
  greetingDisplay: "Hi, I'm Rajashekar Reddy SANKEPALLY", // Or "<Firstname> <Lastname>"

  passionTitle: "",
  passionLines: [
    "I am passionate about leveraging AI and Machine Learning to create solutions for highly efficient Business Operations."
  ],

  location: "San Francisco, CA (Open to Remote)",
  statusBadge: "Available for high-impact roles & collaborations",

  // Profile Photo:
  // Place any JPEG, JPG, PNG, or SVG into the 'public/' directory (e.g. public/avatar.jpeg)
  // And reference it with a leading "./" (e.g., photo: "./avatar.jpeg" or photo: "./avatar.jpg")
  photo: "./avatar.jpeg",
  photoAlt: "Rajashekar Reddy SANKEPALLY - Profile Photo",

  bio: [
    "I am a passionate software engineer specializing in scalable full-stack web applications, distributed systems, and modern AI/agentic tooling. I love turning complex architectural problems into intuitive, blazingly fast products.",
    "Over the past 6+ years, I have architected systems ranging from real-time collaborative canvases to distributed data streaming pipelines. I am a firm believer in type safety, deliberate UX, accessible design, and open-source craftsmanship."
  ],

  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Shipped Artifacts", value: "25+" },
    { label: "Open Source Stars", value: "1.8k" },
    { label: "Daily Active Users", value: "150k+" }
  ],

  resumeUrl: "#"
};

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "rajashekarreddy2010@gmail.com"
};

export const experienceTimeline = [
  {
    period: "2023 - Present",
    role: "Staff Software Engineer",
    company: "Apex Labs",
    description: "Spearheaded the core platform architecture and multi-agent AI execution engine, decreasing latency by 45% and supporting 10x traffic growth.",
    badge: "Current"
  },
  {
    period: "2021 - 2023",
    role: "Senior Full-Stack Engineer",
    company: "Vector Cloud",
    description: "Engineered real-time collaboration protocols and visual workflow canvases using React, WebSockets, and distributed state CRDTs.",
    badge: "Full-Time"
  },
  {
    period: "2018 - 2021",
    role: "Software Engineer",
    company: "Nexus Technologies",
    description: "Developed customer-facing dashboard microfrontends, high-throughput analytics pipelines, and scalable GraphQL gateways.",
    badge: "Full-Time"
  }
];

export const artifactCategories = [
  "All",
  "AI & Agents",
  "Web Applications",
  "Developer Tools",
  "Systems & Infrastructure"
];

export const artifacts = [
  {
    id: "ai-timeline",
    shortCode: "Artifact_01",
    title: "Artificial Intelligence Evolution & Key Milestones",
    displayTitle: "Artificial Intelligence Evolution & Key Milestones",
    category: "AI & Agents",
    shortDescription: "Accessible, themeable, enterprise-grade design system featuring 40+ components with automatic token generation and WCAG AAA compliance.",
    fullDescription: "A comprehensive design system and component architecture built for modern web applications. Provides unified design token synchronization between Figma and code, seamless dark/light modes, keyboard navigation, and zero-runtime CSS footprint.",
    image: "./artifacts/1950.png",
    date: "Nov 2, 2026",
    status: "",
    statusColor: "emerald",
    tags: ["AI"],
    metrics: " ",
    keyFeatures: [
      "Dynamic theme switching with semantic CSS custom properties and high-contrast support",
      "Comprehensive keyboard accessibility, ARIA patterns, and screen reader announcements",
      "Automated visual regression testing pipeline via Playwright snapshots",
      "Token generator exporting to CSS, Tailwind presets, and React Native"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "ai-chatbot",
    shortCode: "Artifact_06",
    title: "AI Chatbot: Mindfulness Journey",
    displayTitle: "Artifact_06: Market Streaming Engine",
    category: "AI & Agents",
    shortDescription: "Ultra-low latency financial data pipeline aggregating streaming tick data, sentiment analysis, and order-book heatmaps.",
    fullDescription: "Engineered to ingest and visualize real-time crypto and equity market streams with sub-10ms browser rendering. Uses binary WebSocket protocols and client-side web workers to offload calculations from the main UI thread.",
    image: "./artifacts/ai-chatbot-thumb.png",
    date: "Nov 2, 2026",
    status: "Production Demo",
    statusColor: "blue",
    tags: ["AI", "Production-Demo"],
    metrics: "50,000 messages/sec • <8ms round-trip latency • Zero dropped frames",
    keyFeatures: [
      "High-throughput WebSocket ingestion engine with automatic reconnect backoff",
      "Off-main-thread orderbook depth calculation powered by WebAssembly",
      "Interactive SVG/Canvas hybrid charts with responsive panning and zooming",
      "Real-time NLP sentiment tagging on live financial news wires"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false
  }
];

/**
 export const textBlock = {
  heading: "Personal Value Proposition",
  subheading: "Principles, methodology, and technical focus.",
  paragraphs: [
    "I believe great software is defined by clarity, resilience, and obsessive attention to performance. Over the past 6+ years, my work has centered on architecting scalable backends, real-time collaboration engines, and autonomous agent workflows.",
    "My engineering philosophy emphasizes simple mental models over clever complexity, comprehensive end-to-end type safety, and building accessible, fast web experiences that empower users."
  ]
};
*/
export const textBlock = {
  heading: "Personal Value Proposition",
  paragraphs: [
    "AI/ML Master's student dedicated to data-centric AI. I specialize in designing robust feature engineering pipelines and predictive models that transform messy, real-world data into high-accuracy business forecasts and automated decision systems."
  ]
};
export const skillCategories = [
  {
    category: "Database",
    skills: ["SAP HANA", "Oracle", "Postgres", "Sybase", "DB2"]
  },
  {
    category: "Cloud, Data & DevOps",
    skills: ["AWS", "Azure", "GCP"]
  }
];
export const blockEducation = {
  heading: "Education",
  paragraphs: [
    "Currently pursuing Masters in Artificial Intelligence and Data Analytics. Focussing on developing practical applications that combine technical expertise with ethical considerations. My Coursework includes hands-on experience with cutting-edge AI tools, prompt engineering and collaborative problem-solving."
  ]
};
export const portfolioBlocks = [
  {
    id: "block-text",
    title: "Personal Value Proposition",
    description: "Custom text section with heading and detailed overview."
  },
  {
    id: "block-skills",
    title: "Technical Arsenal & Core Stack",
    description: "Frameworks, languages, cloud platforms, and protocols used across projects."
  },
  {
    id: "block-education",
    title: "Education",
    description: "Custom text section with heading and detailed overview."
  }
];
