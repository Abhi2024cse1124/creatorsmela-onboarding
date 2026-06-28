import { useState } from 'react'

export function ProgressBar({ current, total }) {
  const pct = (current / (total - 1)) * 100
  return (
    <div className="flex items-center gap-3 px-1">
      <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
          }}
        />
      </div>
      <span className="text-xs font-medium" style={{ color: 'var(--text-muted)', minWidth: 36 }}>
        {current} of {total - 1}
      </span>
    </div>
  )
}

export function StepDots({ current, total }) {
  return (
    <div className="flex gap-2 justify-center pt-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? 24 : 8,
            height: 8,
            borderRadius: 99,
            background:
              i < current
                ? 'var(--brand)'
                : i === current
                ? 'linear-gradient(90deg,#a855f7,#06b6d4)'
                : 'rgba(255,255,255,0.12)',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  )
}

export function Input({ label, hint, value, onChange, placeholder, type = 'text', prefix }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </label>
      )}
      <div
        className="flex items-center overflow-hidden rounded-xl transition-all duration-200"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: `1.5px solid ${focused ? 'var(--brand)' : 'rgba(255,255,255,0.1)'}`,
          boxShadow: focused ? '0 0 0 3px var(--brand-glow)' : 'none',
        }}
      >
        {prefix && (
          <span className="pl-3.5 text-base" style={{ color: 'var(--text-muted)' }}>
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent border-none outline-none text-white text-sm"
          style={{
            padding: prefix ? '13px 14px 13px 6px' : '13px 14px',
            fontFamily: 'Inter, sans-serif',
          }}
        />
      </div>
      {hint && <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  )
}

export function Btn({ children, onClick, variant = 'primary', disabled, style = {} }) {
  const [hov, setHov] = useState(false)
  const base = {
    padding: '14px 28px',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 15,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'all 0.2s',
    fontFamily: 'Inter, sans-serif',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    ...style,
  }

  if (variant === 'primary') {
    return (
      <button
        onClick={!disabled ? onClick : undefined}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        disabled={disabled}
        style={{
          ...base,
          background: disabled ? 'rgba(168,85,247,0.3)' : 'linear-gradient(135deg,#a855f7,#7c3aed)',
          color: '#fff',
          opacity: disabled ? 0.5 : 1,
          transform: hov && !disabled ? 'translateY(-1px)' : 'none',
          boxShadow:
            hov && !disabled
              ? '0 8px 25px rgba(168,85,247,0.4)'
              : disabled
              ? 'none'
              : '0 4px 15px rgba(168,85,247,0.2)',
        }}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...base,
        background: hov ? 'rgba(255,255,255,0.05)' : 'transparent',
        color: 'var(--text-secondary)',
        border: '1.5px solid rgba(255,255,255,0.12)',
        transform: hov ? 'translateY(-1px)' : 'none',
      }}
    >
      {children}
    </button>
  )
}

export function Card({ children, style = {}, glowing }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',
        border: `1.5px solid ${glowing ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 18,
        padding: 28,
        backdropFilter: 'blur(10px)',
        boxShadow: glowing ? '0 0 30px rgba(168,85,247,0.1)' : 'none',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
