import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { experiences } from '../../data/experience'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion-variants'
import SectionLabel from '../ui/SectionLabel'

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-bg-primary">
      {/* Gradient Top Edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem} className="flex justify-center mb-4">
            <SectionLabel>Career Journey</SectionLabel>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 md:pl-0">
          {/* Center/Left line */}
          <div className="absolute top-0 bottom-0 left-[21px] md:left-1/2 md:-translate-x-px w-px bg-gradient-to-b from-accent-blue/50 via-accent-blue/10 to-transparent" />

          <div className="flex flex-col gap-16 relative z-10">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 0; // Alternating for desktop layout

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative grid md:grid-cols-2 md:gap-12"
                >
                  {/* Center node dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-6 z-20">
                    <div 
                      className="w-4 h-4 rounded-full bg-bg-primary border-2 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                      style={{ borderColor: exp.color }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
                      style={{ backgroundColor: exp.color }}
                    />
                  </div>

                  {/* Content wrapper aligned depending on left/right */}
                  <div className={`pl-8 md:pl-0 ${isRight ? 'md:order-1 md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    {/* Time bubble for mobile is inline, desktop can be positioned opposite */}
                    <div className={`flex items-center gap-2 text-xs font-inter font-bold uppercase tracking-wider mb-2 text-accent-blue ${isRight ? 'md:justify-end' : ''}`}>
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    
                    <h3 className="font-heading font-bold text-2xl text-text-primary">
                      {exp.role}
                    </h3>
                    
                    <div className={`flex items-center gap-2 font-inter text-lg text-text-secondary font-medium mt-1 mb-4 ${isRight ? 'md:justify-end' : ''}`}>
                      <span style={{ color: exp.color }}>@{exp.company}</span>
                      <span className="text-border-subtle">•</span>
                      <span className="flex items-center gap-1 text-sm opacity-70">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Card Side */}
                  <div className={`pl-8 md:pl-0 ${isRight ? 'md:col-start-2 md:pl-12' : 'md:order-1 md:pr-12'}`}>
                    <div className="glass rounded-2xl p-6 border border-border-subtle card-hover relative group overflow-hidden h-full">
                      {/* Edge gradient light */}
                      <div 
                        className="absolute top-0 left-0 w-full h-1 opacity-60"
                        style={{ background: `linear-gradient(to right, transparent, ${exp.color}, transparent)` }}
                      />
                      
                      <p className="text-text-secondary text-sm font-inter leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs text-text-primary/80 font-inter leading-relaxed">
                            <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: exp.color }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Type tag */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-text-secondary/50 font-inter">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
