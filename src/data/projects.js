// ============================================================
// PROJECTS DATA
// ============================================================
// To update: edit live/github URLs and image paths here.
// Place preview images at /public/projects/<folder>/preview.jpg
// ============================================================

export const projects = [
  {
    id: 'bizzatom',
    title: 'Bizzatom CRM & Admin Dashboard',
    subtitle: 'Enterprise CRM Platform',
    category: 'CRM / Business Platform',
    description:
      'Developed and maintained a CRM-enabled admin dashboard for a loyalty point mobile application platform. Built the admin dashboard from scratch using React.js, Nest.js, and PostgreSQL.',
    longDescription:
      'Developed and maintained a CRM-enabled admin dashboard for a loyalty point mobile application platform. Built the admin dashboard from scratch and continued existing production workflows using React.js, Nest.js, PostgreSQL, and Drizzle ORM.',
    image: '/projects/bizzatom/Screenshot (181).png',
    images: [
      '/projects/bizzatom/Screenshot (181).png',
      '/projects/bizzatom/Screenshot (182).png',
      '/projects/bizzatom/Screenshot (183).png',
      '/projects/bizzatom/Screenshot (184).png',
      '/projects/bizzatom/Screenshot (185).png',
      '/projects/bizzatom/Screenshot (186).png',
      '/projects/bizzatom/Screenshot (187).png',
      '/projects/bizzatom/Screenshot (188).png',
      '/projects/bizzatom/Screenshot (189).png',
      '/projects/bizzatom/Screenshot (190).png',
      '/projects/bizzatom/Screenshot (191).png',
    ],
    // Fallback gradient when image is not available
    gradient: 'from-blue-900/60 via-slate-900/80 to-slate-950',
    tech: ['React.js', 'Nest.js', 'PostgreSQL', 'Drizzle ORM', 'TailwindCSS'],
    liveUrl: '#',       // Replace with live URL when available
    githubUrl: '#',     // Replace with GitHub repo URL
    featured: true,
    accentColor: '#38BDF8',
  },
  {
    id: 'leewaa-staff',
    title: 'Leewaa Staff Management System',
    subtitle: 'HR & Operations Platform',
    category: 'Internal Tools / HR',
    description:
      'Developed a complete internal staff management platform from scratch to deployment using modern responsive infrastructure.',
    longDescription:
      'Developed a complete internal staff management platform from scratch to deployment using React.js, Nest.js, PostgreSQL, and Prisma ORM.',
    image: '/projects/leewaa-staff/Screenshot (201).png',
    images: [
      '/projects/leewaa-staff/Screenshot (201).png',
      '/projects/leewaa-staff/Screenshot (202).png',
      '/projects/leewaa-staff/Screenshot (203).png',
      '/projects/leewaa-staff/Screenshot (204).png',
      '/projects/leewaa-staff/Screenshot (205).png',
      '/projects/leewaa-staff/Screenshot (206).png',
      '/projects/leewaa-staff/Screenshot (207).png',
      '/projects/leewaa-staff/Screenshot (208).png',
    ],
    gradient: 'from-indigo-900/60 via-slate-900/80 to-slate-950',
    tech: ['React.js', 'Nest.js', 'PostgreSQL', 'Prisma ORM', 'DigitalOcean'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    accentColor: '#818CF8',
  },
  {
    id: 'leewaa-shop',
    title: 'Leewaa E-Commerce Platform',
    subtitle: 'Full-Stack E-Commerce Solution',
    category: 'E-Commerce',
    description:
      'Built a full-stack e-commerce platform with customer-facing storefront and complete admin management system. Integrated Razorpay payments and real-time Socket.IO.',
    longDescription:
      'Built a full-stack e-commerce platform with customer-facing storefront and complete admin management system. Integrated Razorpay payments and real-time communication using Socket.IO.',
    image: '/projects/leewaa-shop/Screenshot (192).png',
    images: [
      '/projects/leewaa-shop/Screenshot (192).png',
      '/projects/leewaa-shop/Screenshot (193).png',
      '/projects/leewaa-shop/Screenshot (194).png',
      '/projects/leewaa-shop/Screenshot (195).png',
      '/projects/leewaa-shop/Screenshot (196).png',
      '/projects/leewaa-shop/Screenshot (197).png',
      '/projects/leewaa-shop/Screenshot (198).png',
      '/projects/leewaa-shop/Screenshot (199).png',
      '/projects/leewaa-shop/Screenshot (200).png',
    ],
    gradient: 'from-emerald-900/60 via-slate-900/80 to-slate-950',
    tech: ['React.js', 'Nest.js', 'Razorpay', 'Socket.IO', 'TailwindCSS'],
    liveUrl: 'https://shop.leewaa.in/',
    githubUrl: '#',
    featured: true,
    accentColor: '#34D399',
  },
  {
    id: 'routeguide',
    title: 'RouteGuide Property Booking Platform',
    subtitle: 'Real Estate & Hospitality SaaS',
    category: 'Property / Booking',
    description:
      'A full-scale hospitality and property booking platform serving property owners, channel partners, and guests. Features group bookings, dynamic pricing, multi-portal architecture, real-time availability, and a feature-rich admin console.',
    longDescription:
      'Built as a multi-frontend SaaS (Admin, Public, Property, Channel Partner portals). Integrated group booking API, JWT authentication, real-time availability calendar, and a channel partner onboarding workflow.',
    image: '/projects/routeguide/Screenshot (209).png',
    images: [
      '/projects/routeguide/Screenshot (209).png',
      '/projects/routeguide/Screenshot (210).png',
      '/projects/routeguide/Screenshot (211).png',
      '/projects/routeguide/Screenshot (212).png',
      '/projects/routeguide/Screenshot (213).png',
      '/projects/routeguide/Screenshot (214).png',
      '/projects/routeguide/Screenshot (215).png',
      '/projects/routeguide/Screenshot (216).png',
      '/projects/routeguide/Screenshot (217).png',
      '/projects/routeguide/Screenshot (218).png',
      '/projects/routeguide/Screenshot (219).png',
      '/projects/routeguide/Screenshot (220).png',
      '/projects/routeguide/Screenshot (221).png',
      '/projects/routeguide/Screenshot (222).png',
      '/projects/routeguide/Screenshot (223).png',
    ],
    gradient: 'from-cyan-900/60 via-slate-900/80 to-slate-950',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'AWS', 'Multi-Portal'],
    liveUrl: 'https://myrouteguide.com/',
    githubUrl: '#',
    featured: true,
    accentColor: '#22D3EE',
  },
  {
    id: 'alletre',
    title: 'Alletre Auction Platform',
    subtitle: 'Live Bidding & Auction SaaS',
    category: 'Marketplace / Auction',
    description:
      'Online auction platform focused on real-time bidding and secure transaction workflows. Developed sophisticated frontend/backend modules and integrated payment systems.',
    longDescription:
      'Worked on a UAE-based online auction platform focused on real-time bidding and secure transaction workflows. Developed frontend and backend modules, implemented real-time communication using Socket.IO, and integrated Stripe payment systems.',
    image: '/projects/alletre/preview.jpg',
    images: [],
    gradient: 'from-violet-900/60 via-slate-900/80 to-slate-950',
    tech: ['React', 'Node.js', 'Socket.IO', 'Stripe', 'MERN'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accentColor: '#A78BFA',
  },
]
