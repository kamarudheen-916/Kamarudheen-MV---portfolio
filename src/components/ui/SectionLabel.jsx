import React from 'react'

export default function SectionLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-accent-blue/50" />
      <span className="text-accent-blue text-xs font-semibold font-inter uppercase tracking-[0.2em]">
        {children}
      </span>
      <span className="h-px w-8 bg-accent-blue/50" />
    </div>
  )
}
