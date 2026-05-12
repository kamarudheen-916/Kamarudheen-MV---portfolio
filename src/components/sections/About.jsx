import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Zap, Users } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion-variants'
import { useCounter } from '../../hooks/useCounter'
import SectionLabel from '../ui/SectionLabel'

const stats = [
  { value: 5, suffix: '+', label: 'Production Projects', icon: <Briefcase size={18} /> },
  { value: 3, suffix: '+', label: 'Years Experience', icon: <Zap size={18} /> },
  { value: 2, suffix: '+', label: 'UAE Companies', icon: <MapPin size={18} /> },
  { value: 12, suffix: '+', label: 'Technologies', icon: <Users size={18} /> },
]

function StatCard({ value, suffix, label, icon }) {
  const { count, ref } = useCounter(value, 1800)

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="card-hover glass rounded-2xl p-6 border border-border-subtle flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <p className="font-heading font-bold text-4xl text-text-primary leading-none">
          <span>{count}</span>
          <span className="text-accent-blue">{suffix}</span>
        </p>
        <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue">
          {icon}
        </div>
      </div>
      <p className="text-text-secondary text-sm font-inter">{label}</p>
    </motion.div>
  )
}

const highlights = [
  {
    title: 'UAE Business Platforms',
    desc: 'Delivered production-grade CRM, HR, e-commerce, and auction platforms for UAE-based companies.',
    color: '#38BDF8',
  },
  {
    title: 'Modern Tech Stack',
    desc: 'Expert in React, NestJS, PostgreSQL, and cloud deployment with DigitalOcean and AWS infrastructure.',
    color: '#A78BFA',
  },
  {
    title: 'AI-Enhanced Workflows',
    desc: 'Leveraging ChatGPT, Claude, and Gemini to accelerate development, improve code quality, and deliver faster.',
    color: '#34D399',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative section-padding"
      style={{
        background:
          'linear-gradient(180deg, #050816 0%, #0B1120 40%, #0F172A 80%, #050816 100%)',
      }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem} className="flex justify-center mb-4">
            <SectionLabel>About Me</SectionLabel>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Engineering{' '}
            <span className="text-gradient">Premium Experiences</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-text-secondary font-inter text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer based in the UAE, passionate about building high-quality,
            scalable digital products that solve real business problems.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>

        {/* Bio + Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            <div className="h-1 w-12 rounded-full bg-accent-blue" />
            <p className="text-text-secondary font-inter leading-relaxed text-base">
              I'm a results-driven Full Stack Developer with hands-on experience building
              enterprise-grade applications for UAE-based businesses. My expertise spans the
              full product lifecycle — from architecture design and API engineering to
              production deployment on cloud infrastructure.
            </p>
            <p className="text-text-secondary font-inter leading-relaxed text-base">
              I specialize in NestJS + React systems with PostgreSQL backends, delivered
              across industries including hospitality, e-commerce, CRM, and real estate. I
              actively incorporate AI tools like ChatGPT, Claude, and Gemini to accelerate
              delivery and improve code quality.
            </p>
            <p className="text-text-secondary font-inter leading-relaxed text-base">
              With a strong focus on clean architecture, developer experience, and product
              quality, I build systems that are maintainable, scalable, and designed to grow
              with the business.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border-subtle bg-card-bg">
                <MapPin size={14} className="text-accent-blue" />
                <span className="text-text-secondary text-sm font-inter">UAE · Remote / On-site</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border-subtle bg-card-bg">
                <Zap size={14} className="text-accent-blue" />
                <span className="text-text-secondary text-sm font-inter">Open to opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={staggerItem}
                className="card-hover glass rounded-2xl p-6 border border-border-subtle relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: h.color }}
                />
                <div className="pl-4">
                  <h3 className="font-heading font-semibold text-text-primary mb-2 text-base">
                    {h.title}
                  </h3>
                  <p className="text-text-secondary font-inter text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050816)' }}
      />
    </section>
  )
}
