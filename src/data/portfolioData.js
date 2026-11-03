/**
 * PORTFOLIO DATA CONFIGURATION
 * --------------------------------------------------------------------------
 * Customize your portfolio by updating the values below.
 * To change your photo:
 * 1. Place your photo (e.g. photo.jpg or profile.png) into the 'public/' folder.
 * 2. Update the 'photo' property below (e.g., photo: './photo.jpg').
 */

export const personalInfo = {
  name: "Alex Rivera",
  role: "Full-Stack Engineer & AI Systems Architect",
  headline: "Crafting resilient software architectures, intelligent agents, and sleek user experiences.",
  location: "San Francisco, CA (Open to Remote)",
  statusBadge: "Available for high-impact roles & collaborations",
  
  // Profile Photo:
  // Default points to the included vector illustration in public/avatar.svg
  // To use your own photo, save it to public/ (e.g., public/myphoto.jpg) and set: photo: "./myphoto.jpg"
  photo: "./avatar.svg",
  photoAlt: "Alex Rivera - Profile Photo",

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

  resumeUrl: "#contact"
};

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "alex.rivera.dev@example.com"
};

export const skillCategories = [
  {
    category: "Frontend & UI",
    skills: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Next.js", "WebSockets", "Canvas API", "CSS Modules"]
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Python / FastAPI", "Go", "GraphQL", "REST APIs", "gRPC", "Microservices"]
  },
  {
    category: "AI & Autonomous Agents",
    skills: ["LLM Orchestration", "LangChain / LlamaIndex", "Vector DBs (Pinecone, Chroma)", "RAG Pipelines", "Function Calling"]
  },
  {
    category: "Cloud, Data & DevOps",
    skills: ["PostgreSQL", "Redis", "Docker & K8s", "AWS / GCP", "GitHub Actions CI/CD", "Vercel / Cloudflare"]
  }
];

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
    id: "autonomous-agent-engine",
    title: "Autonomous Multi-Agent Workflow Engine",
    category: "AI & Agents",
    shortDescription: "A distributed orchestration runtime that empowers teams of autonomous AI agents to collaborate, plan, and execute multi-step workflows.",
    fullDescription: "A production-grade multi-agent runtime designed for complex asynchronous reasoning, task delegation, and external tool execution. Built with fault-tolerant state recovery, hierarchical supervisor models, and human-in-the-loop inspection mechanisms.",
    image: "./artifacts/artifact-agentic-engine.svg",
    date: "2024",
    status: "Featured Artifact",
    statusColor: "emerald",
    tags: ["TypeScript", "Python", "Vector Memory", "LLM Tooling", "Distributed Runtime"],
    metrics: "450k+ runs executed • <250ms node dispatch • 99.9% task reliability",
    keyFeatures: [
      "Dynamic agent topology synthesis based on runtime objective breakdown",
      "Vector episodic memory indexing with hybrid semantic and reciprocal rank search",
      "Sandboxed environment runner supporting deterministic code execution and rollback",
      "Interactive debugger and live execution DAG visualizer"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "neural-creative-canvas",
    title: "Real-Time Neural Creative Canvas",
    category: "Web Applications",
    shortDescription: "Interactive WebGL-accelerated infinite whiteboard with generative AI copilot, real-time multi-cursor syncing, and spatial audio notes.",
    fullDescription: "A fluid, infinite vector canvas designed for creative and architectural collaboration. Combines custom 60 FPS WebGL rendering with real-time CRDT state synchronization, enabling thousands of simultaneous collaborative edits without server bottlenecks.",
    image: "./artifacts/artifact-neural-canvas.svg",
    date: "2024",
    status: "Live Production",
    statusColor: "blue",
    tags: ["React", "WebGL", "CRDTs", "WebSockets", "Tailwind CSS"],
    metrics: "60 FPS rendering • <15ms peer latency • 80k+ monthly boards created",
    keyFeatures: [
      "Custom hardware-accelerated pan/zoom canvas handling 50,000+ vector shapes",
      "Conflict-free replicated data types (Yjs) powering offline-first collaborative edits",
      "Context-aware generative layout engine proposing UI wireframes on the fly",
      "Zero-latency optimistic UI updates with deterministic undo/redo history"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "cloud-pipeline-orchestrator",
    title: "Distributed Cloud Pipeline Orchestrator",
    category: "Developer Tools",
    shortDescription: "Declarative CI/CD & cloud infrastructure orchestrator featuring instant DAG visualization and zero-downtime rolling canary deployments.",
    fullDescription: "An ergonomic developer CLI and control plane that abstracts complex Kubernetes and cloud native deployments into elegant declarative manifests. Includes live telemetry streaming and automatic rollbacks on anomalous latency spikes.",
    image: "./artifacts/artifact-cloud-orchestrator.svg",
    date: "2023",
    status: "Open Source",
    statusColor: "purple",
    tags: ["Go", "Kubernetes", "gRPC", "Docker", "Prometheus"],
    metrics: "12k+ GitHub stars • 4x faster CI stages • 0 downtime rollouts",
    keyFeatures: [
      "Declarative YAML specification with compile-time topological sort validation",
      "Sub-second container image layer caching and differential deduplication",
      "Automated canary testing with automated rollback triggers based on p99 metrics",
      "Extensible plugin system via WebAssembly (Wasm) runtimes"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "raft-consensus-kv-store",
    title: "High-Throughput Raft Distributed KV Store",
    category: "Systems & Infrastructure",
    shortDescription: "Fault-tolerant key-value database implementing Raft consensus protocol with Log-Structured Merge (LSM) storage engine.",
    fullDescription: "An exploratory distributed storage engine engineered to deeply study consensus algorithms under extreme network partitions and chaos engineering conditions. Achieves high linearizable write throughput through batched fsync and zero-copy serialization.",
    image: "./artifacts/artifact-kv-store.svg",
    date: "2023",
    status: "Research Prototype",
    statusColor: "teal",
    tags: ["Go", "Raft Consensus", "LSM-Tree", "Distributed Systems", "Protobuf"],
    metrics: "120,000 writes/sec • Linearizable consistency (Jepsen tested) • 3ms cluster consensus",
    keyFeatures: [
      "Strict leader election and heartbeat leases with randomized election jitter",
      "Compact write-ahead logging (WAL) with incremental background snapshots",
      "Custom memtable and bloom-filter backed SSTables for microsecond point lookups",
      "Simulated Byzantine fault injection harness for automated fuzz testing"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: "quantum-design-system",
    title: "Quantum Design System & Component Studio",
    category: "Web Applications",
    shortDescription: "Accessible, themeable, enterprise-grade design system featuring 40+ components with automatic token generation and WCAG AAA compliance.",
    fullDescription: "A comprehensive design system and component architecture built for modern web applications. Provides unified design token synchronization between Figma and code, seamless dark/light modes, keyboard navigation, and zero-runtime CSS footprint.",
    image: "./artifacts/artifact-design-system.svg",
    date: "2023",
    status: "Live Package",
    statusColor: "emerald",
    tags: ["React", "CSS Architecture", "Accessibility (a11y)", "Design Tokens", "Figma API"],
    metrics: "40+ Accessible Components • 100% WCAG AAA Compliant • <12kB bundle size",
    keyFeatures: [
      "Dynamic theme switching with semantic CSS custom properties and high-contrast support",
      "Comprehensive keyboard accessibility, ARIA patterns, and screen reader announcements",
      "Automated visual regression testing pipeline via Playwright snapshots",
      "Token generator exporting to CSS, Tailwind presets, and React Native"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: "realtime-market-intelligence",
    title: "High-Frequency Market Streaming Engine",
    category: "Systems & Infrastructure",
    shortDescription: "Ultra-low latency financial data pipeline aggregating streaming tick data, sentiment analysis, and order-book heatmaps.",
    fullDescription: "Engineered to ingest and visualize real-time crypto and equity market streams with sub-10ms browser rendering. Uses binary WebSocket protocols and client-side web workers to offload calculations from the main UI thread.",
    image: "./artifacts/artifact-market-intelligence.svg",
    date: "2022",
    status: "Production Demo",
    statusColor: "blue",
    tags: ["Python", "Rust", "WebSockets", "Web Workers", "TradingView Lightweight"],
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
