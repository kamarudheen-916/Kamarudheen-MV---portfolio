import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageSquare, Copy, Check, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { fadeUp, scaleIn, viewportOnce } from '../../lib/motion-variants'
import Button from '../ui/Button'

export default function Contact() {
  const email = 'kamaru916@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const contacts = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "in/kamarudheen-mv",
      href: "https://www.linkedin.com/in/kamarudheen-mv/",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: <MessageSquare size={20} />,
      label: "WhatsApp",
      value: "+91 98476 78427",
      href: "https://wa.me/919847678427",
      color: "hover:text-[#25D366]"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "kamarudheen-916",
      href: "https://github.com/kamarudheen-916",
      color: "hover:text-white"
    }
  ]

  return (
    <section id="contact" className="relative py-32 bg-[#050816] overflow-hidden">
      {/* Huge atmospheric blob background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] opacity-40 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-strong rounded-3xl border border-white/[0.07] relative overflow-hidden shadow-2xl"
        >
          {/* Subtle inner corner ambient light */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="p-8 md:p-16 flex flex-col items-center text-center relative z-10">
            
            <motion.div 
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-xs font-inter uppercase font-bold tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
              Available for new opportunities
            </motion.div>
            
            <motion.h2 
              variants={fadeUp}
              className="font-heading font-bold text-4xl md:text-6xl text-text-primary mb-6 tracking-tight"
            >
              Let’s Build Something <br className="hidden md:block"/>
              <span className="text-gradient">Exceptional</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="text-text-secondary font-inter text-lg max-w-xl leading-relaxed mb-12"
            >
              Looking for a premium developer to power your next enterprise CRM, platform, or SaaS? Get in touch directly.
            </motion.p>

            {/* Main Email Display Block */}
            <motion.div 
              variants={fadeUp}
              className="w-full max-w-md bg-[#070b1a] border border-white/10 rounded-2xl p-2 flex items-center justify-between gap-4 mb-16 shadow-inner group focus-within:border-accent-blue/50 transition-colors"
            >
              <div className="flex items-center gap-3 pl-4 overflow-hidden">
                <Mail className="text-accent-blue shrink-0" size={20} />
                <span className="font-heading font-medium text-text-primary truncate text-lg">{email}</span>
              </div>
              
              <button 
                onClick={handleCopy}
                className="shrink-0 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary px-4 py-3 rounded-xl transition-all font-inter text-sm font-medium group"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="group-hover:text-accent-blue transition-colors" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Social grid row */}
            <motion.div 
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl border-t border-white/5 pt-12"
            >
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/[0.05] transition-all duration-300"
                >
                  <div className={`mb-3 text-text-secondary ${item.color} transition-colors duration-300 scale-110 group-hover:scale-125`}>
                    {item.icon}
                  </div>
                  <span className="font-inter text-xs uppercase tracking-widest text-text-secondary/60 font-bold mb-1">{item.label}</span>
                  <div className="font-heading font-medium text-text-primary flex items-center gap-1 text-sm">
                    {item.value}
                    <ArrowRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                  </div>
                </a>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
