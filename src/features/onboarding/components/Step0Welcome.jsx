import { useState, useEffect } from 'react'
import { Btn } from './UI'

export default function Step0({ onNext }) {
  const [show, setShow] = useState(false)
  useEffect(() => { setTimeout(() => setShow(true), 80) }, [])

  return (
    <div className="text-center py-2" style={{ animation: show ? 'fadeUp 0.5s ease both' : 'none' }}>
      <div
        className="w-22 h-22 rounded-3xl mx-auto mb-7 flex items-center justify-center text-5xl"
        style={{
          width: 88,
          height: 88,
          background: 'linear-gradient(135deg,#a855f7,#06b6d4)',
          boxShadow: '0 0 40px rgba(168,85,247,0.4)',
          animation: 'pulseGlow 2s infinite',
        }}
      >
        ✨
      </div>

      <h1
        className="text-4xl font-bold mb-3 leading-tight"
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          background: 'linear-gradient(135deg,#fff,rgba(255,255,255,0.7))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Welcome to CreatorsMela
      </h1>

      <p className="text-base leading-relaxed max-w-sm mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
        Where creators meet brands. Set up your profile in 5 minutes and start getting paid for your content.
      </p>

      <div className="flex flex-col items-center gap-3">
        <Btn onClick={onNext} style={{ width: 260, padding: '16px 28px', fontSize: 16 }}>
          Get started →
        </Btn>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Takes about 5 minutes</span>
      </div>

      <div className="flex gap-8 justify-center mt-9">
        {[['🎯', 'Brand Deals'], ['💰', 'Get Paid'], ['📊', 'Track Growth']].map(([emoji, label]) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <span className="text-2xl">{emoji}</span>
            <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
