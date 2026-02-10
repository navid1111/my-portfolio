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
    slug: 'football-video-analysis',
    label: 'VISION',
    title: 'Football Video Analysis',
    year: '2025',
    description:
      'End-to-end football analytics pipeline that processes raw match footage to perform detailed player and ball analysis using computer vision and machine learning.',
    technologies: ['Python', 'OpenCV', 'PyTorch', 'NumPy'],
    links: [
      { text: 'VIEW PROJECT ↗', href: '#' },
    ],
    detail: {
      caseStudyLabel: 'CASE_STUDY_001',
      overview:
        'An end-to-end football analytics pipeline that processes raw match footage to perform detailed player and ball tracking, possession detection, speed/distance computation, and camera bias removal — all powered by computer vision and machine learning.',
      detailLinks: [
        { text: 'SOURCE_CODE ↗', href: '#' },
      ],
      fullTechStack: ['Python', 'OpenCV', 'NumPy', 'pandas', 'PyTorch', 'scikit-learn'],
      dateRange: 'JAN 2025 —\nMAR 2025',
      status: 'V1.0_COMPLETE',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop',
          label: 'MATCH_ANALYSIS_01.PNG',
          labelPosition: 'top-left',
          aspect: 'aspect-video',
          cursor: 'cursor-crosshair',
        },
      ],
      features: [
        {
          number: '01',
          title: 'Ball Interpolation & Tracking',
          description: 'Continuous ball tracking even during occlusions using interpolation algorithms, with player-ball assignment via Euclidean distance thresholding for possession detection.',
        },
        {
          number: '02',
          title: 'Camera Movement Estimation',
          description: 'Lucas-Kanade Optical Flow to estimate and remove camera movement bias, ensuring accurate player position tracking across frames.',
        },
        {
          number: '03',
          title: 'Perspective Transformation',
          description: 'Homography-based mapping of pixel coordinates to real-world positions, enabling real-time speed (km/h) and distance (meters) calculation for each player.',
        },
      ],
      timeline: [
        {
          phase: 'PHASE_01 (JAN)',
          title: 'Object Detection Pipeline',
          description: 'Setting up YOLO-based detection models for player and ball tracking. Building the core video processing pipeline.',
        },
        {
          phase: 'PHASE_02 (FEB)',
          title: 'Tracking & Interpolation',
          description: 'Implementing ball interpolation, optical flow for camera movement, and Euclidean-distance based possession detection.',
        },
        {
          phase: 'PHASE_03 (MAR)',
          title: 'Analytics & Visualization',
          description: 'Adding perspective transformation, speed/distance calculations, and generating visual analytics overlays on match footage.',
        },
      ],
      problemStatement: 'Raw match footage contains camera movement, occlusions, and perspective distortion that make accurate player analytics extremely difficult.',
      solution: 'Combined Lucas-Kanade Optical Flow for camera stabilization with homography-based perspective transformation, enabling sub-meter accuracy for player position tracking.',
      nextProject: { title: 'Kreshok Bondhu', slug: 'kreshok-bondhu' },
    },
  },
  {
    id: 2,
    slug: 'kreshok-bondhu',
    label: 'KRISHI',
    title: 'Kreshok Bondhu',
    year: '2025',
    description:
      'A comprehensive agricultural assistance platform that helps farmers with crop recommendations, fertilizer suggestions, and plant disease detection.',
    technologies: ['Next.js', 'FastAPI', 'TensorFlow', 'Node.js'],
    links: [
      { text: 'LIVE SITE ↗', href: 'https://krishok-bondhu.vercel.app/' },
      { text: 'GITHUB REPO ↗', href: 'https://github.com/Kashshaf-Labib/KrishokBondhu' },
    ],
    detail: {
      caseStudyLabel: 'CASE_STUDY_002',
      overview:
        'Kreshok Bondhu is a comprehensive agricultural assistance platform designed to empower farmers with AI-driven crop recommendations, fertilizer suggestions, and automated plant disease detection using deep learning models.',
      detailLinks: [
        { text: 'LIVE_SITE ↗', href: 'https://krishok-bondhu.vercel.app/' },
        { text: 'SOURCE_CODE ↗', href: 'https://github.com/Kashshaf-Labib/KrishokBondhu' },
      ],
      fullTechStack: ['Node.js', 'Next.js', 'FastAPI', 'TensorFlow', 'Python', 'MongoDB'],
      dateRange: 'JAN 2025 —\nMAR 2025',
      status: 'V1.0_LIVE',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop',
          label: 'CROP_ANALYSIS_DASHBOARD.PNG',
          labelPosition: 'top-left',
          aspect: 'aspect-video',
          cursor: 'cursor-crosshair',
        },
      ],
      features: [
        {
          number: '01',
          title: 'AI Crop Recommendations',
          description: 'Machine learning models analyze soil conditions, weather patterns, and regional data to recommend optimal crops for each season.',
        },
        {
          number: '02',
          title: 'Plant Disease Detection',
          description: 'TensorFlow-powered image classification that identifies plant diseases from leaf photographs with high accuracy.',
        },
        {
          number: '03',
          title: 'Fertilizer Optimization',
          description: 'Data-driven fertilizer suggestions based on soil nutrient analysis and crop requirements, reducing waste and improving yield.',
        },
      ],
      timeline: [
        {
          phase: 'PHASE_01 (JAN)',
          title: 'Research & Data Collection',
          description: 'Gathering agricultural datasets, training disease detection models, and designing the recommendation engine architecture.',
        },
        {
          phase: 'PHASE_02 (FEB)',
          title: 'Platform Development',
          description: 'Building the Next.js frontend, FastAPI backend for ML inference, and integrating TensorFlow models into the pipeline.',
        },
        {
          phase: 'PHASE_03 (MAR)',
          title: 'Testing & Deployment',
          description: 'User testing with local farmers, optimizing model inference speed, and deploying to Vercel with CI/CD.',
        },
      ],
      problemStatement: 'Smallholder farmers lack access to expert agricultural advice, leading to suboptimal crop selection and late disease detection.',
      solution: 'Built an accessible web platform with offline-capable disease detection and localized crop recommendation models trained on regional agricultural data.',
      nextProject: { title: 'UniSphere', slug: 'unisphere' },
    },
  },
  {
    id: 3,
    slug: 'unisphere',
    label: 'UNI',
    title: 'UniSphere',
    year: '2024',
    description:
      'AI-powered social networking platform for university students to connect, collaborate, and share resources. Champion project at MIST Hackathon 2024.',
    technologies: ['React', 'LangChain', 'Node.js', 'MongoDB'],
    links: [
      { text: 'GITHUB REPO ↗', href: 'https://github.com/Siyam-Bhuiyan/UniSphere' },
    ],
    detail: {
      caseStudyLabel: 'CASE_STUDY_003',
      overview:
        'UniSphere is an AI-powered university networking platform that won first place at MIST Hackathon 2024. Built in 12 hours by a team of 4, it connects students through intelligent resource sharing, collaborative tools, and LangChain-powered assistance.',
      detailLinks: [
        { text: 'SOURCE_CODE ↗', href: 'https://github.com/Siyam-Bhuiyan/UniSphere' },
      ],
      fullTechStack: ['React', 'LangChain', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
      dateRange: 'OCT 2024',
      status: 'HACKATHON_CHAMPION',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?q=80&w=2000&auto=format&fit=crop',
          label: 'UNISPHERE_PLATFORM.PNG',
          labelPosition: 'top-left',
          aspect: 'aspect-video',
          cursor: 'cursor-crosshair',
        },
      ],
      features: [
        {
          number: '01',
          title: 'AI-Powered Assistance',
          description: 'LangChain integration providing intelligent study assistance, resource recommendations, and automated content summarization for students.',
        },
        {
          number: '02',
          title: 'Social Networking',
          description: 'University-focused social features enabling students to connect by courses, interests, and collaborative projects.',
        },
        {
          number: '03',
          title: 'Resource Sharing',
          description: 'Centralized platform for sharing notes, study materials, and academic resources with intelligent tagging and search.',
        },
      ],
      timeline: [
        {
          phase: 'PHASE_01 (HOUR 0-4)',
          title: 'Architecture & Design',
          description: 'Rapid prototyping of the platform architecture, designing the database schema, and setting up the LangChain pipeline.',
        },
        {
          phase: 'PHASE_02 (HOUR 4-9)',
          title: 'Core Development',
          description: 'Building the React frontend, Node.js API, and integrating LangChain for AI-powered features.',
        },
        {
          phase: 'PHASE_03 (HOUR 9-12)',
          title: 'Polish & Presentation',
          description: 'Final UI polish, bug fixes, demo preparation, and winning presentation to the judging panel.',
        },
      ],
      problemStatement: 'University students lack a unified platform that combines social networking with AI-assisted academic collaboration.',
      solution: 'Built a full-stack platform in 12 hours integrating LangChain for intelligent content assistance with a social networking layer designed specifically for academic contexts.',
      nextProject: { title: 'TurfMania', slug: 'turfmania' },
    },
  },
  {
    id: 4,
    slug: 'turfmania',
    label: 'TURF',
    title: 'TurfMania',
    year: '2024',
    description:
      'Full-featured turf booking platform connecting sports enthusiasts with turf owners, featuring dedicated interfaces for clients, organizations, and administrators.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: [
      { text: 'LIVE SITE ↗', href: 'https://turfmania.vercel.app' },
      { text: 'GITHUB REPO ↗', href: 'https://github.com/navid1111/devorbit' },
    ],
    detail: {
      caseStudyLabel: 'CASE_STUDY_004',
      overview:
        'TurfMania is a full-stack web application built during Geeky Solutions Learnathon 3.0 to help users discover and book turf fields for sports. It features modular architecture with three dedicated portals for clients, organization owners, and administrators.',
      detailLinks: [
        { text: 'CLIENT_APP ↗', href: 'https://turfmania.vercel.app' },
        { text: 'SOURCE_CODE ↗', href: 'https://github.com/navid1111/devorbit' },
      ],
      fullTechStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      dateRange: 'JAN 2024 —\nMAR 2024',
      status: 'V1.0_LIVE',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2000&auto=format&fit=crop',
          label: 'BOOKING_INTERFACE.PNG',
          labelPosition: 'top-left',
          aspect: 'aspect-video',
          cursor: 'cursor-crosshair',
        },
      ],
      features: [
        {
          number: '01',
          title: 'Multi-Portal Architecture',
          description: 'Three dedicated interfaces for clients (booking), organization owners (management), and administrators (oversight) with role-based access control.',
        },
        {
          number: '02',
          title: 'Real-time Availability',
          description: 'Live turf availability checking and instant booking confirmation with conflict resolution for overlapping time slots.',
        },
        {
          number: '03',
          title: 'Discovery Engine',
          description: 'Location-based turf discovery with filtering by sport type, amenities, pricing, and user ratings.',
        },
      ],
      timeline: [
        {
          phase: 'PHASE_01 (JAN)',
          title: 'Planning & Architecture',
          description: 'Designing the multi-portal architecture, database schema, and API contracts for the booking system.',
        },
        {
          phase: 'PHASE_02 (FEB)',
          title: 'Core Development',
          description: 'Building the React frontends, Express API, MongoDB integration, and implementing the booking engine.',
        },
        {
          phase: 'PHASE_03 (MAR)',
          title: 'Deployment & Polish',
          description: 'Deploying all three portals to Vercel, implementing payment flows, and conducting user acceptance testing.',
        },
      ],
      problemStatement: 'Sports enthusiasts struggle to discover available turfs and manage bookings, while turf owners lack digital tools for scheduling and management.',
      solution: 'Built a three-portal platform with role-based access, real-time availability tracking, and an intuitive booking flow that serves all stakeholders in the turf ecosystem.',
      nextProject: { title: 'Football Video Analysis', slug: 'football-video-analysis' },
    },
  },
];

// Experience Data
export const EXPERIENCES = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    period: 'OCT 2024 — FEB 2025',
    company: '@ REDDOT_DIGITAL',
    active: true,
    achievements: [
      'Engineered a custom MCP Server enabling AI agents (Claude Code, GitHub Copilot) to securely interface with MySQL, PostgreSQL, and MSSQL databases.',
      'Architected advanced reporting features with dynamic SQL joins and complex filtering for flexible custom report generation.',
      'Directed local SonarQube integration to identify and remediate security vulnerabilities and technical debt.',
      'Managed end-to-end flow from client requirement gathering to workflow design, translating wireframes into functional frontend components.',
    ],
  },
  {
    id: 2,
    title: 'B.Sc. Software Engineering',
    period: 'AUG 2022 — AUG 2026',
    company: '@ ISLAMIC_UNIVERSITY_OF_TECHNOLOGY',
    active: true,
    achievements: [
      'Pursuing Bachelor\'s degree in Software Engineering at IUT, Dhaka, Bangladesh.',
      'Active participant in hackathons and competitive programming.',
      'Focus areas: AI/ML, Full-Stack Development, DevOps.',
    ],
  },
];

// Achievements Data
export const ACHIEVEMENTS = [
  {
    id: 1,
    icon: 'ph-trophy',
    title: 'MIST Hackathon Champion',
    date: '2024',
    description: 'Won first place with UniSphere, an AI-powered university networking platform. Built in 12 hours by a team of 4.',
    filled: true,
  },
  {
    id: 2,
    icon: 'ph-code',
    title: 'BUET CSE Fest',
    date: '2026',
    description: 'Top 20 in Microservice and DevOps Hackathon at BUET CSE Fest.',
    filled: false,
  },
  {
    id: 3,
    icon: 'ph-lightning',
    title: 'KUET Bitfest',
    date: '2024-2026',
    description: 'Top 20 finalist at KUET Bitfest hackathon competition.',
    filled: false,
  },
  {
    id: 4,
    icon: 'ph-rocket',
    title: 'Multiple Top 20 Finishes',
    date: '2024-2026',
    description: 'Top 20 at MillionX Hackathon, BUP Hackathon, and CUET DevOps Hackathon.',
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
  { label: 'NODE.JS / EXPRESS', enabled: true },
  { label: 'PYTHON / FASTAPI', enabled: true },
  { label: 'TENSORFLOW / PYTORCH', enabled: true },
  { label: 'DOCKER / KUBERNETES', enabled: true },
  { label: 'SPRING BOOT / JAVA', enabled: true },
];

// Profile Data
export const PROFILE = {
  name: 'Navid Kamal',
  title: 'Software Engineer',
  email: 'navidkamal@iut-dhaka.edu',
  location: 'Dhaka, Bangladesh',
  role: 'Software Engineer',
  experience: 'B.Sc. SWE @ IUT',
  bio: 'Software engineer with practical experience in full-stack development, AI integration, and database tooling. Experienced in building custom AI agent integrations and dynamic reporting systems. Specializing in React, computer vision, and scalable web technologies.',
  tags: ['Open to Opportunities', 'Full-Stack', 'AI & ML', 'DevOps'],
  socials: {
    github: 'https://github.com/navid1111',
    linkedin: 'https://linkedin.com/in/navid-kamal',
  },
};
