// ============================================================
// TECH STACK DATA
// ============================================================

export const techCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⬡',
    techs: [
      { name: 'React.js', level: 95, description: 'Component architecture, hooks, state management' },
      { name: 'TailwindCSS', level: 92, description: 'Utility-first CSS, custom design systems' },
      { name: 'Framer Motion', level: 85, description: 'Advanced animations and transitions' },
      { name: 'TypeScript', level: 80, description: 'Type-safe JavaScript development' },
      { name: 'Next.js', level: 72, description: 'Server-side rendering and static generation' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⬡',
    techs: [
      { name: 'NestJS', level: 90, description: 'Scalable Node.js enterprise framework' },
      { name: 'Node.js', level: 92, description: 'Server-side JavaScript runtime' },
      { name: 'REST APIs', level: 95, description: 'API design, versioning, documentation' },
      { name: 'WebSockets', level: 78, description: 'Real-time bidirectional communication' },
      { name: 'JWT Auth', level: 88, description: 'Authentication and authorization flows' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '⬡',
    techs: [
      { name: 'PostgreSQL', level: 88, description: 'Relational database design and optimization' },
      { name: 'Prisma ORM', level: 90, description: 'Type-safe database access and migrations' },
      { name: 'Drizzle ORM', level: 82, description: 'Lightweight TypeScript ORM' },
      { name: 'Redis', level: 65, description: 'Caching and session management' },
      { name: 'MySQL', level: 75, description: 'Relational database management' },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment',
    icon: '⬡',
    techs: [
      { name: 'DigitalOcean', level: 85, description: 'VPS deployment, droplets, managed databases' },
      { name: 'AWS', level: 72, description: 'S3, EC2, and cloud infrastructure' },
      { name: 'PM2', level: 88, description: 'Node.js process management in production' },
      { name: 'Nginx', level: 80, description: 'Reverse proxy and web server configuration' },
      { name: 'Docker', level: 68, description: 'Containerization and orchestration' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    icon: '⬡',
    techs: [
      { name: 'ChatGPT', level: 95, description: 'AI-assisted development and debugging' },
      { name: 'Claude', level: 92, description: 'Complex code review and architecture planning' },
      { name: 'Gemini', level: 88, description: 'Multimodal AI for UI/UX and code generation' },
      { name: 'GitHub Copilot', level: 85, description: 'Inline code completion and suggestions' },
      { name: 'AI Debugging', level: 90, description: 'Rapid bug isolation and resolution' },
    ],
  },
]

// Hero floating tech pills
export const heroTechPills = [
  'React', 'NestJS', 'PostgreSQL', 'Prisma', 'TailwindCSS',
  'DigitalOcean', 'TypeScript', 'Framer Motion',
]
