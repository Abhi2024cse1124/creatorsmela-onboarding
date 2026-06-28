import { useState } from 'react'
import { Input, Btn } from './UI'
import { PLATFORMS } from '../data/constants'

export default function Step3({ data, onChange, onNext, onBack }) {
  const [expanded, setExpanded] = useState(null)
  const linked = Object.values(data).filter((v) => v.trim()).length

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--brand)' }}>
          Step 3 of 5
        </span>
        <h2 className="text-2xl font-bold mt-1.5 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Link your socials
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Connect at least one platform to continue.
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {PLATFORMS.map((p) => {
          const val = data[p.id] || ''
          const active = expanded === p.id
          const filled = val.trim()

          return (
            <div
              key={p.id}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                border: `1.5px solid ${filled ? p.color + '66' : active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                background: filled ? `${p.color}0d` : 'rgba(255,255,255,0.02)',
              }}
            >
              <button
                onClick={() => setExpanded(active ? null : p.id)}
                className="w-full flex items-center gap-3 text-left bg-transparent border-none cursor-pointer"
                style={{ padding: '14px 16px' }}
              >
                <span className="text-xl">{p.icon}</span>
                <span className="flex-1 text-sm font-medium" style={{ color: filled ? '#fff' : 'var(--text-secondary)' }}>
                  {p.label}
                </span>
                {filled && (
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-md"
                    style={{ color: p.color, background: `${p.color}22` }}
                  >
                    ✓ Linked
                  </span>
                )}
                <span
                  className="text-xs transition-transform duration-200"
                  style={{ color: 'var(--text-muted)', transform: active ? 'rotate(180deg)' : 'none' }}
                >
                  ▾
                </span>
              </button>

              {active && (
                <div className="px-4 pb-3.5" style={{ animation: 'fadeUp 0.2s ease both' }}>
                  <Input
                    value={val}
                    onChange={(v) => onChange({ ...data, [p.id]: v })}
                    placeholder={p.placeholder}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex gap-3 mt-7 justify-between">
        <Btn variant="ghost" onClick={onBack}>← Back</Btn>
        <Btn onClick={onNext} disabled={linked === 0}>
          Continue ({linked} linked) →
        </Btn>
      </div>
    </div>
  )
}
