import React from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { scrollToSection } from '../../hooks/useLenis'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Stack', id: 'techstack' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const socials = [
  { icon: <Mail size={16} />, href: 'mailto:kamaru916@gmail.com', label: 'Email' },
  { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/kamarudheen-mv/', label: 'LinkedIn' },
  { icon: <Github size={16} />, href: 'https://github.com/kamarudheen-916', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="font-heading font-bold text-xl text-text-primary">
              <span className="text-accent-blue">K</span>
              <span>amarudheen MV</span>
            </span>
            <p className="text-text-secondary text-xs mt-1 font-inter">
              Full Stack Developer · UAE
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="text-text-secondary text-sm font-inter hover:text-text-primary transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl border border-border-subtle text-text-secondary
                  hover:text-accent-blue hover:border-accent-blue/40 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('hero')}
              aria-label="Back to top"
              className="p-2.5 rounded-xl border border-border-subtle text-text-secondary
                hover:text-accent-blue hover:border-accent-blue/40 transition-all duration-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle text-center">
          <p className="text-text-secondary text-xs font-inter">
            © {new Date().getFullYear()} Kamarudheen MV. Crafted with React, Vite & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
