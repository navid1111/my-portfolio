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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    label: 'MUSEUM',
    title: 'Cyberspace Gallery',
    year: '2021',
    description:
      'Interactive 3D gallery for digital art collections. Features procedural geometry generation and custom GLSL shaders for environmental effects.',
    technologies: ['Three.js', 'React Three Fiber', 'GLSL', 'Blender'],
    links: [{ text: 'ENTER WORLD ↗', href: '#' }],
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
