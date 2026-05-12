import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../../hooks/useLenis'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Stack', id: 'techstack' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section detection
      const sections = navLinks.map((l) => document.getElementById(l.id))
      const current = sections.find((s) => {
        if (!s) return false
        const rect = s.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      setActive(current?.id || '')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass-strong shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-heading font-bold text-lg text-text-primary hover:text-accent-blue transition-colors duration-300 tracking-tight"
          >
            <span className="text-accent-blue">K</span>
            <span className="text-gradient-subtle">MV</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative px-4 py-2 text-sm font-inter font-medium rounded-lg transition-all duration-300 ${
                  active === link.id
                    ? 'text-accent-blue'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-accent-blue/8 border border-accent-blue/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/cv/kamarudheen-mv-cv.pdf`}
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-inter font-medium
                text-accent-blue border border-accent-blue/30 rounded-lg
                hover:bg-accent-blue/8 hover:border-accent-blue/60
                transition-all duration-300"
            >
              Download CV
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[68px] left-4 right-4 z-40 glass-strong rounded-2xl p-6 shadow-card"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-inter font-medium transition-all duration-200 ${
                    active === link.id
                      ? 'text-accent-blue bg-accent-blue/8'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="h-px bg-border-subtle my-1" />
              <a
                href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/cv/kamarudheen-mv-cv.pdf`}
                download
                className="text-center py-3 text-sm font-inter font-semibold text-bg-primary bg-accent-blue rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
