import { Input, Btn } from './UI'
import { NICHES } from '../data/constants'

export default function Step2({ data, onChange, onNext, onBack }) {
  const valid = data.name.trim() && data.bio.trim() && data.niches.length > 0

  const toggleNiche = (id) => {
    const n = data.niches.includes(id)
      ? data.niches.filter((x) => x !== id)
      : [...data.niches, id]
    onChange({ ...data, niches: n })
  }

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--brand)' }}>
          Step 2 of 5
        </span>
        <h2 className="text-2xl font-bold mt-1.5 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Build your profile
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Tell brands who you are and what you create.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <Input
          label="Creator name / username"
          value={data.name}
          onChange={(v) => onChange({ ...data, name: v })}
          placeholder="priyacreates"
          prefix="@"
        />

        <div>
          <label className="text-sm font-medium block mb-1.5" style={{ color: 'var(--text-secondary)' }}>Bio</label>
          <textarea
            value={data.bio}
            onChange={(e) => onChange({ ...data, bio: e.target.value.slice(0, 200) })}
            placeholder="I create lifestyle content that helps people live more intentionally..."
            rows={3}
            className="w-full rounded-xl text-white text-sm resize-none outline-none transition-colors duration-200"
            style={{
              padding: '13px 14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1.5px solid rgba(255,255,255,0.1)',
              fontFamily: 'Inter, sans-serif',
            }}
          />
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{data.bio.length}/200</span>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2.5" style={{ color: 'var(--text-secondary)' }}>
            Your niches <span style={{ color: 'var(--text-muted)' }}>(pick up to 3)</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {NICHES.map((n) => {
              const sel = data.niches.includes(n.id)
              const maxed = !sel && data.niches.length >= 3
              return (
                <button
                  key={n.id}
                  onClick={() => toggleNiche(n.id)}
                  disabled={maxed}
                  className="flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl transition-all duration-200"
                  style={{
                    border: `1.5px solid ${sel ? 'var(--brand)' : 'rgba(255,255,255,0.08)'}`,
                    background: sel ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.03)',
                    cursor: maxed ? 'not-allowed' : 'pointer',
                    opacity: maxed ? 0.35 : 1,
                    boxShadow: sel ? '0 0 12px rgba(168,85,247,0.2)' : 'none',
                  }}
                >
                  <span className="text-lg">{n.icon}</span>
                  <span
                    className="text-xs font-medium leading-tight text-center"
                    style={{ color: sel ? 'var(--brand-light)' : 'var(--text-secondary)' }}
                  >
                    {n.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-7 justify-between">
        <Btn variant="ghost" onClick={onBack}>← Back</Btn>
        <Btn onClick={onNext} disabled={!valid}>Continue →</Btn>
      </div>
    </div>
  )
}
