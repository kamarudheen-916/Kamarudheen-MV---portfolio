import React from 'react'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import TechStack from './components/sections/TechStack'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import AISection from './components/sections/AISection'
import Contact from './components/sections/Contact'

function App() {
  // Initializes smooth scroll system
  useLenis();

  return (
    <div className="bg-bg-primary selection:bg-accent-blue/30 selection:text-white min-h-screen relative">
      
      {/* Top Fixed Nav */}
      <Navbar />
      
      {/* Main Container */}
      <main>
        <Hero />
        <About />
        <TechStack />
        
        {/* Divider for flow */}
        <div className="h-24 bg-gradient-to-b from-bg-primary to-bg-primary pointer-events-none" />
        
        <Projects />
        
        <div className="h-12 bg-bg-primary" />
        
        <Experience />
        
        <div className="h-24 bg-gradient-to-b from-bg-primary to-[#0B1120]" />
        
        <AISection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
