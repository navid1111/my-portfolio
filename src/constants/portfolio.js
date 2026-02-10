/**
 * Portfolio Data Constants
 * Centralized data for the portfolio website
 */

// Color Palette
export const COLORS = {
  bg: '#F9F7F1',
  line: '#C44D58',
  text: '#3E4095',
  accent: '#EFD6AC',
};

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    slug: 'orbital-finance',
    label: 'ORBITAL',
    title: 'Orbital Finance',
    year: '2023',
    description:
      'A decentralized trading terminal featuring real-time WebGL data visualization and sub-millisecond updates via WebSocket streams.',
    technologies: ['React', 'D3.js', 'WebSockets', 'Tailwind'],
    links: [
      { text: 'LIVE DEMO ↗', href: '#' },
      { text: 'GITHUB REPO ↗', href: '#' },
    ],
    // Detail page data
    detail: {
      caseStudyLabel: 'CASE_STUDY_001',
      overview:
        'Orbital Finance is a next-generation decentralized trading terminal. The challenge was to condense massive amounts of real-time market data into a highly performant, visually striking interface that feels more like a spaceship cockpit than a spreadsheet.',
      detailLinks: [
        { text: 'LIVE_SITE ↗', href: '#' },
        { text: 'SOURCE_CODE ↗', href: '#' },
      ],
      fullTechStack: ['React', 'Three.js', 'D3.js', 'Rust/WASM', 'WebSockets', 'Tailwind', 'Framer Motion'],
      dateRange: 'JAN 2023 —\nOCT 2023',
      status: 'V2.4_LIVE',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
          label: 'TRADING_VIEW_MOCK_01.PNG',
          labelPosition: 'top-left',
          aspect: 'aspect-video',
          cursor: 'cursor-crosshair',
        },
        {
          url: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop',
          label: 'MOBILE_INTERFACE.PNG',
          labelPosition: 'bottom-right',
          aspect: 'aspect-square',
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
          label: 'DATA_VIZ_MODULES.PNG',
          labelPosition: 'bottom-right',
          aspect: 'aspect-square',
        },
      ],
      features: [
        {
          number: '01',
          title: 'Real-time WebGL Engine',
          description: 'Custom rendering engine for visualizing 50k+ data points simultaneously at 120FPS using React Three Fiber and GLSL.',
        },
        {
          number: '02',
          title: 'Low-Latency Streams',
          description: 'Direct WebSocket integration with Binance and Kraken APIs with binary message compression for minimum delay.',
        },
        {
          number: '03',
          title: 'Adaptive UI System',
          description: 'A fully modular layout engine allowing traders to drag, drop, and resize visualization widgets across multiple monitors.',
        },
      ],
      timeline: [
        {
          phase: 'PHASE_01 (JAN-MAR)',
          title: 'Research & Architecture',
          description: 'Benchmarking WebSocket throughput and selecting the core 3D engine. Developing the "Brutalist-Dark" design language.',
        },
        {
          phase: 'PHASE_02 (APR-JUL)',
          title: 'Core Engine Build',
          description: 'Implementing the GLSL shader pipeline for massive data heatmaps and building the React component library.',
        },
        {
          phase: 'PHASE_03 (AUG-OCT)',
          title: 'Stress Testing & Launch',
          description: 'Beta testing with 500 power users. Optimizing garbage collection to prevent memory leaks during long sessions.',
        },
      ],
      problemStatement: 'The browser would freeze when trying to render real-time candlestick data for 200+ symbols at once.',
      solution: 'Offloaded data parsing to a Rust-based Web Worker (WASM) and used InstancedMesh in Three.js to render all candles in a single draw call.',
      nextProject: { title: 'Synthwave UI Kit', slug: 'synthwave-ui-kit' },
    },
  },
  {
    id: 2,
    slug: 'synthwave-ui-kit',
    label: 'SYNTH',
    title: 'Synthwave UI Kit',
    year: '2022',
    description:
      'An open-source component library focusing on retro-futuristic interaction patterns and strict accessibility compliance (WCAG 2.1 AA).',
    technologies: ['Storybook', 'TypeScript', 'A11y', 'NPM'],
    links: [
      { text: 'DOCUMENTATION ↗', href: '#' },
      { text: 'GITHUB REPO ↗', href: '#' },
    ],
    detail: {
      caseStudyLabel: 'CASE_STUDY_002',
      overview:
        'A comprehensive, open-source UI component library built for the modern web. Synthwave UI Kit blends retro-futuristic aesthetics with strict accessibility standards, enabling developers to build stunning, inclusive interfaces out of the box.',
      detailLinks: [
        { text: 'DOCUMENTATION ↗', href: '#' },
        { text: 'SOURCE_CODE ↗', href: '#' },
      ],
      fullTechStack: ['Storybook', 'TypeScript', 'A11y', 'NPM', 'React', 'CSS Modules'],
      dateRange: 'MAR 2022 —\nDEC 2022',
      status: 'V3.1_STABLE',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
          label: 'COMPONENT_LIBRARY.PNG',
          labelPosition: 'top-left',
          aspect: 'aspect-video',
          cursor: 'cursor-crosshair',
        },
      ],
      features: [
        {
          number: '01',
          title: 'WCAG 2.1 AA Compliance',
          description: 'Every component passes automated and manual accessibility audits, ensuring inclusive design by default.',
        },
        {
          number: '02',
          title: 'Themeable Design Tokens',
          description: 'A powerful token-based theming system allowing full visual customization through CSS custom properties.',
        },
        {
          number: '03',
          title: 'Storybook Integration',
          description: 'Comprehensive documentation with interactive examples, usage guides, and live code editors for every component.',
        },
      ],
      timeline: [
        {
          phase: 'PHASE_01 (MAR-MAY)',
          title: 'Design System Foundations',
          description: 'Establishing the core design tokens, color palette, and typography scale for the retro-futuristic aesthetic.',
        },
        {
          phase: 'PHASE_02 (JUN-SEP)',
          title: 'Component Development',
          description: 'Building the core component library with full TypeScript support and accessibility testing infrastructure.',
        },
        {
          phase: 'PHASE_03 (OCT-DEC)',
          title: 'Documentation & Launch',
          description: 'Writing comprehensive Storybook documentation and publishing to NPM with full CI/CD pipeline.',
        },
      ],
      problemStatement: 'Existing UI libraries forced a tradeoff between visual uniqueness and accessibility compliance.',
      solution: 'Built a custom testing pipeline that runs axe-core audits on every component variant during CI, ensuring zero accessibility regressions.',
      nextProject: { title: 'Cyberspace Gallery', slug: 'cyberspace-gallery' },
    },
  },
  {
    id: 3,
    slug: 'cyberspace-gallery',
    label: 'MUSEUM',
    title: 'Cyberspace Gallery',
    year: '2021',
    description:
      'Interactive 3D gallery for digital art collections. Features procedural geometry generation and custom GLSL shaders for environmental effects.',
    technologies: ['Three.js', 'React Three Fiber', 'GLSL', 'Blender'],
    links: [{ text: 'ENTER WORLD ↗', href: '#' }],
    detail: {
      caseStudyLabel: 'CASE_STUDY_003',
      overview:
        'Cyberspace Gallery is an immersive 3D web experience for browsing digital art collections. Visitors navigate through procedurally generated architecture with custom GLSL shaders creating dynamic lighting and atmospheric effects.',
      detailLinks: [
        { text: 'ENTER_WORLD ↗', href: '#' },
      ],
      fullTechStack: ['Three.js', 'React Three Fiber', 'GLSL', 'Blender', 'React', 'Zustand'],
      dateRange: 'FEB 2021 —\nAUG 2021',
      status: 'V1.2_LIVE',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2000&auto=format&fit=crop',
          label: '3D_GALLERY_VIEW.PNG',
          labelPosition: 'top-left',
          aspect: 'aspect-video',
          cursor: 'cursor-crosshair',
        },
      ],
      features: [
        {
          number: '01',
          title: 'Procedural Architecture',
          description: 'Gallery spaces are generated algorithmically, creating unique layouts for each art collection using noise functions and L-systems.',
        },
        {
          number: '02',
          title: 'Custom GLSL Shaders',
          description: 'Handwritten fragment and vertex shaders for volumetric lighting, fog effects, and dynamic material responses to viewer proximity.',
        },
        {
          number: '03',
          title: 'Spatial Audio',
          description: 'Web Audio API integration with 3D spatialization, creating an immersive soundscape that responds to gallery navigation.',
        },
      ],
      timeline: [
        {
          phase: 'PHASE_01 (FEB-APR)',
          title: 'Concept & Prototyping',
          description: 'Exploring procedural generation algorithms and developing the initial shader library in Blender before porting to WebGL.',
        },
        {
          phase: 'PHASE_02 (MAY-JUL)',
          title: '3D Engine Development',
          description: 'Building the React Three Fiber application with custom controls, collision detection, and optimized rendering pipeline.',
        },
        {
          phase: 'PHASE_03 (JUL-AUG)',
          title: 'Polish & Exhibition',
          description: 'Final performance optimizations, mobile fallbacks, and launching with a curated digital art exhibition.',
        },
      ],
      problemStatement: 'WebGL performance dropped below 30FPS on mid-range devices when rendering complex procedural geometries with multiple shader passes.',
      solution: 'Implemented LOD (Level of Detail) system with frustum culling and deferred rendering, bringing performance to 60FPS on target hardware.',
      nextProject: { title: 'Orbital Finance', slug: 'orbital-finance' },
    },
  },
];

// Experience Data
export const EXPERIENCES = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    period: '2022 — PRESENT',
    company: '@ HYPERLOOP_DIGITAL',
    active: true,
    achievements: [
      'Architected the core design system used across 12 enterprise products.',
      'Reduced initial load time by 40% through code splitting and asset optimization.',
      'Mentored a team of 4 junior developers in React patterns and TypeScript best practices.',
    ],
  },
  {
    id: 2,
    title: 'Creative Developer',
    period: '2020 — 2022',
    company: '@ STUDIO_VOID',
    active: false,
    achievements: [
      'Developed award-winning marketing sites for Fortune 500 clients.',
      'Implemented complex GSAP animations and WebGL experiences.',
      'Collaborated closely with designers to bridge the gap between Figma and code.',
    ],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    period: '2018 — 2020',
    company: '@ TECH_STARTUP_INC',
    active: false,
    achievements: [
      'Built the MVP of the company\'s flagship SaaS product using Vue.js.',
      'Maintained 99.9% uptime during critical launch phases.',
    ],
  },
];

// Achievements Data
export const ACHIEVEMENTS = [
  {
    id: 1,
    icon: 'ph-trophy',
    title: 'Awwwards SOTD',
    date: 'October 2023',
    description: 'Recognition for "Orbital Finance" design and usability.',
    filled: true,
  },
  {
    id: 2,
    icon: 'ph-code',
    title: 'Hackathon Winner',
    date: 'ETH Global 2022',
    description: 'First place in UX/UI track for decentralized finance dashboard.',
    filled: false,
  },
  {
    id: 3,
    icon: 'ph-microphone-stage',
    title: 'ReactConf Speaker',
    date: 'San Francisco 2023',
    description: 'Presented "Breaking the DOM: High Performance Animations in React".',
    filled: false,
  },
  {
    id: 4,
    icon: 'ph-github-logo',
    title: 'OSS Contributor',
    date: 'Ongoing',
    description: 'Core maintainer of \'react-brutalist-ui\' with 5k+ stars.',
    filled: false,
  },
];

// Navigation Menu Items
export const NAV_MENU = [
  { label: 'Projects', href: '#projects', icon: 'ph-arrow-right' },
  { label: 'Experience', href: '#experience', icon: 'ph-arrow-right' },
  { label: 'Awards', href: '#achievements', icon: 'ph-arrow-right' },
  { label: 'Contact', href: '#contact', icon: 'ph-paper-plane-right', highlight: true },
];

// Tech Stack
export const TECH_STACK = [
  { label: 'REACT / NEXT.JS', enabled: true },
  { label: 'THREE.JS / R3F', enabled: true },
  { label: 'WEBGL / GLSL', enabled: true },
  { label: 'TYPESCRIPT', enabled: true },
  { label: 'NODE.JS / SQL', enabled: true },
  { label: 'RUST / WASM', enabled: false },
];

// Profile Data
export const PROFILE = {
  name: 'Navid Kamal',
  title: 'Full Stack Developer',
  email: 'hello@.dev',
  location: 'New York, NY',
  role: 'Senior Frontend Engineer',
  experience: '6+ Years',
  bio: 'Full-stack creative engineer passionate about building immersive digital experiences. Specializing in React, WebGL, and modern web technologies. Open-source contributor and conference speaker advocating for performant, accessible interfaces.',
  tags: ['Available for Hire', 'Remote Work', 'Open to Collaborations'],
};
