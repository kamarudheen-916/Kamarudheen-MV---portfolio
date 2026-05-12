import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { techCategories } from '../../data/techstack'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion-variants'
import SectionLabel from '../ui/SectionLabel'

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(techCategories[0].id)
  const activeData = techCategories.find((c) => c.id === activeTab)

  return (
    <section id="techstack" className="relative section-padding bg-bg-primary overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none opacity-30 translate-x-1/3" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem} className="flex justify-center mb-4">
            <SectionLabel>Tech Stack</SectionLabel>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Modern <span className="text-gradient">Ecosystem</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-text-secondary font-inter text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A carefully curated stack of technologies focused on scalability, performance, and maintainability.
          </motion.p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 rounded-2xl border border-border-subtle bg-card-bg max-w-3xl mx-auto overflow-x-auto no-scrollbar"
        >
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-6 py-3 rounded-xl text-sm font-inter font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === category.id ? 'text-bg-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {activeTab === category.id && (
                <motion.span
                  layoutId="active-tech-tab"
                  className="absolute inset-0 rounded-xl bg-accent-blue shadow-glow-sm"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Active Content Grid */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeData?.techs.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="card-hover group glass rounded-2xl p-6 border border-border-subtle relative overflow-hidden"
                >
                  {/* Inner highlight pulse */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-heading font-bold text-xl text-text-primary tracking-tight group-hover:text-accent-blue transition-colors">
                        {tech.name}
                      </h3>
                      <div className="text-accent-blue/40 group-hover:text-accent-blue transition-colors font-mono text-xs font-bold">
                        {tech.level}%
                      </div>
                    </div>
                    
                    <p className="text-text-secondary font-inter text-sm leading-relaxed mb-2">
                      {tech.description}
                    </p>
                    
                    {/* Level Bar */}
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ delay: 0.2 + (i * 0.05), duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-accent-blue/50 shadow-[0_0_8px_rgba(56,189,248,0.5)] group-hover:bg-accent-blue transition-colors"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
