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
      { name: 'TypeScript', level: 85, description: 'Type-safe JavaScript development' },
      { name: 'Redux Toolkit', level: 88, description: 'Predictable state container for JS apps' },
      { name: 'TailwindCSS', level: 92, description: 'Utility-first CSS, custom design systems' },
      { name: 'HTML5 / CSS3', level: 95, description: 'Semantic web design and presentation' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⬡',
    techs: [
      { name: 'Nest.js', level: 90, description: 'Scalable Node.js enterprise framework' },
      { name: 'Node.js', level: 92, description: 'Server-side JavaScript runtime' },
      { name: 'PHP / Laravel', level: 80, description: 'Server-side architecture and routing' },
      { name: 'REST APIs', level: 95, description: 'API design, versioning, documentation' },
      { name: 'Socket.IO', level: 88, description: 'Real-time bidirectional communication' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '⬡',
    techs: [
      { name: 'PostgreSQL', level: 88, description: 'Relational database design and optimization' },
      { name: 'Prisma ORM', level: 90, description: 'Type-safe database access and migrations' },
      { name: 'Drizzle ORM', level: 85, description: 'Lightweight TypeScript ORM' },
      { name: 'MongoDB', level: 82, description: 'NoSQL document database management' },
      { name: 'SQL', level: 90, description: 'Standard query language structures' },
    ],
  },
  {
    id: 'cms',
    label: 'CMS & Web',
    icon: '⬡',
    techs: [
      { name: 'WordPress', level: 85, description: 'Core theme and plugin configuration' },
      { name: 'WooCommerce', level: 80, description: 'E-commerce store infrastructure' },
      { name: 'Elementor', level: 90, description: 'Visual site building and component layout' },
      { name: 'Customization', level: 85, description: 'Tailored template modifications' },
    ],
  },
  {
    id: 'deployment',
    label: 'DevOps',
    icon: '⬡',
    techs: [
      { name: 'DigitalOcean', level: 85, description: 'VPS deployment, droplets, managed databases' },
      { name: 'AWS', level: 75, description: 'Cloud infrastructure and S3 storage' },
      { name: 'Linux Server', level: 82, description: 'Environment setup and management' },
      { name: 'Nginx', level: 80, description: 'Reverse proxy and web server configuration' },
      { name: 'Git & GitHub', level: 90, description: 'Version control and CI/CD workflows' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    icon: '⬡',
    techs: [
      { name: 'ChatGPT', level: 95, description: 'AI-assisted development and debugging' },
      { name: 'Claude', level: 92, description: 'Complex code review and architecture planning' },
      { name: 'Gemini', level: 90, description: 'Advanced model context window optimization' },
      { name: 'AI Workflow', level: 92, description: 'Optimized engineering productivity' },
    ],
  },
]

// Hero floating tech pills
export const heroTechPills = [
  'React.js', 'Nest.js', 'PostgreSQL', 'Prisma', 'Drizzle', 'TailwindCSS',
  'Socket.IO', 'TypeScript', 'DigitalOcean',
]
