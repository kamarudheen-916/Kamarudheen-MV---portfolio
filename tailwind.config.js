/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050816',
        'bg-secondary': '#0B1120',
        'accent-blue': '#38BDF8',
        'accent-blue-dim': 'rgba(56,189,248,0.18)',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'card-bg': 'rgba(255,255,255,0.04)',
        'ocean-dark': '#0F172A',
        'ocean-mid': '#112240',
        'ocean-deep': '#1E3A5F',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 20% 50%, rgba(56,189,248,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(30,58,95,0.4) 0%, transparent 50%)',
        'accent-gradient': 'linear-gradient(135deg, #0F172A 0%, #112240 50%, #1E3A5F 100%)',
        'glow-gradient': 'radial-gradient(circle at center, rgba(56,189,248,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(56,189,248,0.15)',
        'glow-md': '0 0 40px rgba(56,189,248,0.2)',
        'glow-lg': '0 0 80px rgba(56,189,248,0.25)',
        'card': '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6), 0 0 32px rgba(56,189,248,0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scroll-indicator': 'scrollIndicator 1.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      screens: {
        'xs': '380px',
      },
    },
  },
  plugins: [],
}
