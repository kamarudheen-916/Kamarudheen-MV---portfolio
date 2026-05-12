import React from 'react'

const variants = {
  primary: 'bg-accent-blue text-bg-primary font-semibold hover:shadow-glow-md',
  outline: 'border border-accent-blue/40 text-accent-blue hover:border-accent-blue hover:bg-accent-blue/8',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
  glass: 'glass border-white/10 text-text-primary hover:border-accent-blue/30',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  download,
  target,
  onClick,
  disabled,
  icon,
  iconRight,
  ...props
}) {
  const base =
    'inline-flex items-center gap-2.5 rounded-xl font-inter transition-all duration-300 cursor-pointer select-none btn-primary whitespace-nowrap'

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  )
}
