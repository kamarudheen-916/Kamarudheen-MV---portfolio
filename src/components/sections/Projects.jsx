import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion-variants'
import SectionLabel from '../ui/SectionLabel'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0
  const [imgIndex, setImgIndex] = useState(0)
  const hasMultiple = project.images && project.images.length > 1
  const imageList = hasMultiple ? project.images : [project.image]

  const handleNext = (e) => {
    e.stopPropagation()
    setImgIndex((prev) => (prev + 1) % imageList.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setImgIndex((prev) => (prev - 1 + imageList.length) % imageList.length)
  }

  return (
    <motion.div
      variants={fadeUp}
      className="relative group mb-24 last:mb-0"
    >
      <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
        {/* Image Side */}
        <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle group/imgContainer project-card shadow-2xl group-hover:shadow-card-hover transition-all duration-500">
            
            {/* Cinematic Slide Engine */}
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIndex}
                src={imageList[imgIndex]}
                alt={`${project.title} View ${imgIndex + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-top project-img filter saturate-[0.85] group-hover:saturate-100"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.className = `absolute inset-0 w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`;
                  e.target.parentElement.innerHTML = `<div class="font-heading text-2xl font-bold text-white/30 uppercase tracking-widest text-center px-8">${project.title}</div>`;
                }}
              />
            </AnimatePresence>
            
            {/* Fixed Hover overlay always on top of slides */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60 group-hover:opacity-30 pointer-events-none transition-opacity duration-500" />
            
            {/* Sliders Controls UI */}
            {hasMultiple && (
              <>
                <div className="absolute inset-0 z-20 opacity-0 group-hover/imgContainer:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4 pointer-events-none">
                  <button 
                    onClick={handlePrev}
                    className="pointer-events-auto w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-accent-blue hover:text-bg-primary hover:border-accent-blue transition-all duration-300 shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="pointer-events-auto w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-accent-blue hover:text-bg-primary hover:border-accent-blue transition-all duration-300 shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                {/* Pagination Indicators bubble */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex gap-1.5 opacity-0 group-hover/imgContainer:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {imageList.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${i === imgIndex ? 'w-4 bg-accent-blue' : 'w-1 bg-white/40'}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Spotlight mouse effect (Top Level z-40) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 mix-blend-overlay z-40"
                 style={{ background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15) 0%, transparent 50%)' }} 
                 onMouseMove={(e) => {
                   const rect = e.currentTarget.getBoundingClientRect();
                   e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                   e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                 }}
            />
          </div>
        </div>

        {/* Content Side */}
        <div className={`lg:col-span-5 flex flex-col z-30 ${isEven ? 'lg:order-2 lg:-ml-16 lg:pl-8' : 'lg:order-1 lg:-mr-16 lg:pr-8'}`}>
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-3 flex justify-between items-center">
              <span className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-accent-blue flex items-center gap-2">
                <span className="w-6 h-px bg-accent-blue/40"></span>
                {project.category}
              </span>
              {hasMultiple && (
                <span className="text-[10px] font-mono font-bold text-text-secondary/50 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {imgIndex + 1} / {imageList.length} SHOTS
                </span>
              )}
            </div>
            
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4 tracking-tight leading-tight">
              {project.title}
            </h3>
            
            <div className="glass rounded-2xl p-6 md:p-8 border border-border-subtle shadow-card mb-6 backdrop-blur-xl relative">
              {/* Subtle glow accent at top left */}
              <div className="absolute top-0 left-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl" style={{ background: project.accentColor }} />
              
              <p className="text-text-secondary font-inter text-base leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <Badge key={t} color={project.accentColor}>{t}</Badge>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              {project.liveUrl !== '#' && (
                <Button 
                  href={project.liveUrl} 
                  target="_blank" 
                  variant="primary" 
                  iconRight={<ExternalLink size={16} />}
                >
                  Visit Live Project
                </Button>
              )}
              <Button 
                href={project.githubUrl} 
                target="_blank" 
                variant="outline"
                className="!px-4"
                icon={<Github size={18} />}
                aria-label="GitHub Repository"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative section-padding bg-bg-primary">
      {/* Deep dark layered background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.div variants={staggerItem}>
            <SectionLabel>Featured Work</SectionLabel>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-heading font-bold text-4xl md:text-6xl text-text-primary mt-4 mb-6 tracking-tight"
          >
            Selected <span className="text-gradient">Productions</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-text-secondary font-inter text-lg max-w-2xl leading-relaxed"
          >
            A collection of real-world commercial platforms and SaaS applications engineered for scale, usability, and visual impact.
          </motion.p>
        </motion.div>

        {/* Featured Projects Grid/List */}
        <div className="flex flex-col gap-0">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other notable projects (if any) */}
        {otherProjects.length > 0 && (
          <div className="mt-32">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              className="font-heading font-bold text-2xl text-text-primary mb-12 text-center flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-border-subtle"></span>
              Other Notable Projects
              <span className="h-px w-12 bg-border-subtle"></span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="glass rounded-2xl p-8 border border-border-subtle card-hover flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                      <Github size={24} />
                    </div>
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-blue transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <h4 className="font-heading font-bold text-xl text-text-primary mb-3">
                    {p.title}
                  </h4>
                  
                  <p className="text-text-secondary text-sm font-inter leading-relaxed mb-6 flex-grow">
                    {p.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs font-inter font-medium text-text-secondary/80">
                        #{t.replace(/\s/g, '')}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
