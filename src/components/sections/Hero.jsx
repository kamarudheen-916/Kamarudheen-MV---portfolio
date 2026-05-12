import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, ChevronRight } from 'lucide-react'
import { heroHeading, fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion-variants'
import { scrollToSection } from '../../hooks/useLenis'
import { heroTechPills } from '../../data/techstack'
import Button from '../ui/Button'

// ── Particle Canvas ─────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = '#38BDF8'
        ctx.shadowBlur = 4
        ctx.shadowColor = '#38BDF8'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: 90 }, () => new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" className="absolute inset-0 w-full h-full" />
}

// ── Floating Orbs ────────────────────────────────────────────
function FloatingOrb({ size, color, opacity, x, y, delay, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 40% 40%, ${color}, transparent 70%)`,
        opacity,
        left: x,
        top: y,
        filter: 'blur(40px)',
      }}
      animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

// ── Main Hero ────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050816 0%, #0B1120 60%, #0F172A 100%)' }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Ambient Orbs */}
      <FloatingOrb size={600} color="rgba(56,189,248,0.18)" opacity={0.7} x="-10%" y="-10%" delay={0} duration={12} />
      <FloatingOrb size={400} color="rgba(30,58,95,0.6)" opacity={0.8} x="60%" y="20%" delay={2} duration={10} />
      <FloatingOrb size={300} color="rgba(56,189,248,0.12)" opacity={0.6} x="80%" y="60%" delay={1} duration={14} />
      <FloatingOrb size={200} color="rgba(120,80,255,0.08)" opacity={0.5} x="30%" y="70%" delay={3} duration={9} />

      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(56,189,248,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer(0.12, 0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Overline badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-inter
                border border-accent-blue/25 bg-accent-blue/8 text-accent-blue tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse-glow" />
                Available for Work · UAE
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                variants={heroHeading}
                className="font-heading font-bold leading-[1.05] text-text-primary"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                Kamarudheen{' '}
                <span className="text-gradient glow-text">MV</span>
              </motion.h1>
            </div>

            {/* Title */}
            <motion.div variants={staggerItem}>
              <h2 className="font-heading font-semibold text-xl md:text-2xl text-text-secondary tracking-tight">
                Full Stack Web Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-text-secondary font-inter leading-relaxed text-base md:text-lg max-w-lg"
            >
              Building scalable business platforms, CRM systems, and premium digital experiences
              using modern AI-assisted development workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                variant="primary"
                iconRight={<ChevronRight size={16} />}
              >
                View Projects
              </Button>
              <Button
                href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/cv/kamarudheen-mv-cv.pdf`}
                download
                size="lg"
                variant="outline"
                icon={<Download size={16} />}
              >
                Download CV
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="ghost"
                icon={<Mail size={16} />}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Tech pills */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2 pt-1">
              {heroTechPills.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.07, duration: 0.4, ease: 'backOut' }}
                  className="tech-pill px-3 py-1 rounded-full text-xs font-inter font-medium
                    border border-border-subtle bg-card-bg text-text-secondary"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full opacity-30"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, #38BDF8 20%, transparent 40%, #1E3A5F 60%, transparent 80%)',
                }}
              />
              {/* Glow behind */}
              <div
                className="absolute -inset-2 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)' }}
              />
              {/* Profile frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                border-2 border-accent-blue/30 shadow-glow-md">
                {/*
                  PROFILE IMAGE:
                  Replace /profile/profile-placeholder.png with your actual profile photo.
                  Recommended: square image, minimum 600x600px
                */}
                <img
                  src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/profile/profile-placeholder.png`}
                  alt="Kamarudheen MV — Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient if image not yet placed
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background =
                      'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #112240 100%)'
                  }}
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, transparent 60%, rgba(56,189,248,0.12) 100%)',
                  }}
                />
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-8 glass rounded-2xl px-4 py-2.5 shadow-card border border-border-subtle"
              >
                <p className="text-accent-blue font-heading font-bold text-lg leading-none">5+</p>
                <p className="text-text-secondary text-xs font-inter mt-0.5">Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-8 glass rounded-2xl px-4 py-2.5 shadow-card border border-border-subtle"
              >
                <p className="text-accent-blue font-heading font-bold text-lg leading-none">UAE</p>
                <p className="text-text-secondary text-xs font-inter mt-0.5">Based</p>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 top-4 glass rounded-2xl px-4 py-2.5 shadow-card border border-border-subtle"
              >
                <p className="text-accent-blue font-heading font-bold text-lg leading-none">AI</p>
                <p className="text-text-secondary text-xs font-inter mt-0.5">Powered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-text-secondary text-xs font-inter tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-text-secondary/30 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2.5 rounded-full bg-accent-blue"
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050816)' }}
      />
    </section>
  )
}
