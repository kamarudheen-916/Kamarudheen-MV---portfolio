import React from 'react'

export default function Badge({ children, color, className = '' }) {
  return (
    <span
      className={`tech-pill inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border
        bg-white/4 border-white/10 text-text-secondary ${className}`}
      style={color ? { borderColor: `${color}30`, color: color } : {}}
    >
      {children}
    </span>
  )
}
