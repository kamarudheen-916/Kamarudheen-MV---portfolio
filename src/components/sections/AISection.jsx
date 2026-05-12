import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Brain, Cpu, Code2, Zap } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion-variants'
import SectionLabel from '../ui/SectionLabel'

const workflowItems = [
  {
    icon: <Brain className="w-6 h-6 text-[#38BDF8]" />,
    title: "Complex Architecture Planning",
    description: "Utilizing Claude-3.5-Sonnet and ChatGPT-4 for rapid exploration of database schemas, service mesh architectures, and edge case analysis before coding begins.",
    tool: "Claude / GPT-4"
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#A78BFA]" />,
    title: "AI-Assisted Debugging",
    description: "Locating intricate regression bugs and memory leak vectors exponentially faster via context-heavy model analysis of error traces and system dynamics.",
    tool: "Cursor / Copilot"
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#34D399]" />,
    title: "Prototyping & Design-to-Code",
    description: "Bridging UI/UX visuals into scalable React + Tailwind implementation workflows using Gemini's multimodal reasoning capabilities for layout analysis.",
    tool: "Gemini / v0"
  }
]

export default function AISection() {
  return (
    <section className="relative section-padding overflow-hidden bg-[#0B1120]">
      {/* Dynamic glowing cybernetic grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050816] to-[#050816]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content left */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={staggerItem}>
              <SectionLabel className="mb-4">Future of Engineering</SectionLabel>
            </motion.div>
            
            <motion.h2 
              variants={staggerItem}
              className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6 tracking-tight leading-[1.15]"
            >
              Supercharged with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-gradient-x drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                AI-Enhanced Workflows
              </span>
            </motion.h2>
            
            <motion.p 
              variants={staggerItem}
              className="text-text-secondary font-inter text-lg leading-relaxed mb-10 max-w-xl"
            >
              I don't just write code; I orchestra intelligent agents. By harnessing advanced language models, I compress product cycles, enhance software rigor, and output 10x engineering depth.
            </motion.p>

            <div className="space-y-6">
              {workflowItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="flex gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all hover:bg-white/[0.04] group"
                >
                  <div className="mt-1 p-3 rounded-xl bg-white/[0.03] group-hover:scale-110 transition-transform duration-300 border border-white/[0.05]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading font-semibold text-lg text-text-primary">{item.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-text-secondary uppercase tracking-wider">{item.tool}</span>
                    </div>
                    <p className="text-text-secondary text-sm font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual right (abstract futuristic visualization) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex justify-center items-center aspect-square"
          >
            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-cyan-500/20 animate-spin-slow"></div>
            <div className="absolute w-[60%] h-[60%] rounded-full border border-accent-blue/10 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Central core */}
            <div className="relative z-20 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-teal-300 p-1 shadow-[0_0_80px_rgba(56,189,248,0.4)] group cursor-pointer animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center flex-col group-hover:bg-transparent transition-colors duration-500">
                <Zap className="w-12 h-12 text-cyan-400 group-hover:text-white transition-colors" fill="currentColor" />
                <span className="font-heading font-bold text-xs mt-2 tracking-[0.3em] uppercase text-cyan-400 group-hover:text-white">Active</span>
              </div>
            </div>

            {/* Satellite Nodes */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-[15%] right-[20%] glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border-cyan-500/30 z-30"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
              <span className="font-mono text-xs font-bold">Claude Opus</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[15%] glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border-purple-500/30 z-30"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_purple]"></div>
              <span className="font-mono text-xs font-bold">GPT-4-Turbo</span>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute top-[40%] left-[10%] glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border-emerald-500/30 z-30"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_emerald]"></div>
              <span className="font-mono text-xs font-bold">Gemini Ultra</span>
            </motion.div>
            
            {/* Beam light lines connecting visual placeholders */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-cyan-500/20 opacity-40" style={{ filter: 'drop-shadow(0 0 2px cyan)' }}>
               <line x1="50%" y1="50%" x2="75%" y2="20%" strokeWidth="1" strokeDasharray="4 4" />
               <line x1="50%" y1="50%" x2="25%" y2="75%" strokeWidth="1" strokeDasharray="4 4" />
               <line x1="50%" y1="50%" x2="18%" y2="43%" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom smooth bleed out into the Contact block */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050816] pointer-events-none"></div>
    </section>
  )
}
