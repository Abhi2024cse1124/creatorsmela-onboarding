import { Input, Btn } from './UI'
import { FOLLOWER_RANGES, CONTENT_TYPES } from '../data/constants'

export default function Step4({ data, onChange, onNext, onBack }) {
  const valid = data.followers && data.rate

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--brand)' }}>
          Step 4 of 5
        </span>
        <h2 className="text-2xl font-bold mt-1.5 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Audience & rates
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Set your collaboration terms. You can change these anytime.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium block mb-2.5" style={{ color: 'var(--text-secondary)' }}>
            Total audience size
          </label>
          <div className="grid grid-cols-2 gap-2">
            {FOLLOWER_RANGES.map((r) => {
              const sel = data.followers === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => onChange({ ...data, followers: r.id })}
                  className="p-3.5 rounded-xl text-left transition-all duration-200"
                  style={{
                    border: `1.5px solid ${sel ? 'var(--brand)' : 'rgba(255,255,255,0.08)'}`,
                    background: sel ? 'rgba(168,85,247,0.12)' : 'rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    boxShadow: sel ? '0 0 16px rgba(168,85,247,0.15)' : 'none',
                  }}
                >
                  <div className="text-sm font-semibold" style={{ color: sel ? '#fff' : 'var(--text-secondary)' }}>
                    {r.label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: sel ? 'var(--brand-light)' : 'var(--text-muted)' }}>
                    {r.sub}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2.5" style={{ color: 'var(--text-secondary)' }}>
            Content type you primarily offer
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CONTENT_TYPES.map((t) => {
              const sel = data.contentType === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => onChange({ ...data, contentType: t.id })}
                  className="p-3 rounded-xl flex items-center gap-2.5 transition-all duration-200"
                  style={{
                    border: `1.5px solid ${sel ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                    background: sel ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    boxShadow: sel ? '0 0 16px rgba(6,182,212,0.1)' : 'none',
                  }}
                >
                  <span className="text-lg">{t.icon}</span>
                  <span className="text-sm font-medium" style={{ color: sel ? '#fff' : 'var(--text-secondary)' }}>
                    {t.label}
                  </span>
                  {sel && <span className="ml-auto text-sm" style={{ color: 'var(--accent)' }}>✓</span>}
                </button>
              )
            })}
          </div>
        </div>

        <Input
          label="Starting rate per post / collab (₹)"
          value={data.rate}
          onChange={(v) => onChange({ ...data, rate: v })}
          placeholder="e.g. 5000"
          type="number"
          prefix="₹"
          hint="This is your floor rate — brands can negotiate above this."
        />
      </div>

      <div className="flex gap-3 mt-7 justify-between">
        <Btn variant="ghost" onClick={onBack}>← Back</Btn>
        <Btn onClick={onNext} disabled={!valid}>Finish setup →</Btn>
      </div>
    </div>
  )
}
