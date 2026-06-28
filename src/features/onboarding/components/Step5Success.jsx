import { useState, useEffect } from 'react'
import { Card, Btn } from './UI'
import { NICHES, PLATFORMS } from '../data/constants'

const CONFETTI_COLORS = ['#a855f7', '#06b6d4', '#10b981', '#f59e0b', '#ec4899']

export default function Step5({ accountData, profileData, socialData, audienceData, onReset }) {
  const [show, setShow] = useState(false)
  useEffect(() => { setTimeout(() => setShow(true), 100) }, [])

  const linked = PLATFORMS.filter((p) => socialData[p.id]?.trim())
  const initials = (profileData.name || accountData.name || '?')[0].toUpperCase()

  return (
    <div className="text-center relative" style={{ animation: show ? 'scaleIn 0.5s ease both' : 'none' }}>
      {show &&
        Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="confetti-piece absolute top-0 w-2 h-2 rounded-sm pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              '--duration': `${0.8 + Math.random() * 0.8}s`,
              '--delay': `${Math.random() * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

      <div
        className="w-24 h-24 rounded-3xl mx-auto mb-6 flex items-center justify-center text-5xl"
        style={{
          background: 'linear-gradient(135deg,#10b981,#059669)',
          boxShadow: '0 0 50px rgba(16,185,129,0.4)',
          animation: 'checkPop 0.5s ease both',
        }}
      >
        ✓
      </div>

      <h2 className="text-3xl font-bold text-white mb-2.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        You're live on CreatorsMela! 🎉
      </h2>
      <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--text-muted)' }}>
        Your creator profile is ready. Brands can now discover and collaborate with you.
      </p>

      <Card style={{ textAlign: 'left', marginBottom: 20 }}>
        <div className="flex items-center gap-3.5 mb-5">
          <div
            className="w-13 h-13 rounded-2xl flex items-center justify-center text-xl font-bold text-white"
            style={{
              width: 52,
              height: 52,
              background: 'linear-gradient(135deg,#a855f7,#06b6d4)',
            }}
          >
            {initials}
          </div>
          <div>
            <div className="text-base font-bold text-white">@{profileData.name || 'creator'}</div>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{accountData.email}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            ['Audience', audienceData.followers ? audienceData.followers.toUpperCase() + ' followers' : '—'],
            ['Rate', audienceData.rate ? `₹${Number(audienceData.rate).toLocaleString()}` : '—'],
            ['Socials', `${linked.length} linked`],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl p-3"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</div>
              <div className="text-sm font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {profileData.niches?.map((id) => {
            const niche = NICHES.find((x) => x.id === id)
            return niche ? (
              <span
                key={id}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(168,85,247,0.12)',
                  border: '1px solid rgba(168,85,247,0.3)',
                  color: 'var(--brand-light)',
                }}
              >
                {niche.icon} {niche.label}
              </span>
            ) : null
          })}
        </div>
      </Card>

      <div className="flex gap-2.5 justify-center">
        <Btn onClick={() => alert('Opening dashboard…')} style={{ flex: 1, maxWidth: 200 }}>
          View dashboard
        </Btn>
        <Btn variant="ghost" onClick={() => alert('Profile link copied!')} style={{ flex: 1, maxWidth: 200 }}>
          Share profile 🔗
        </Btn>
      </div>

      <div className="mt-4">
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1.5px dashed rgba(255,255,255,0.15)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
            e.currentTarget.style.color = 'var(--brand-light)'
            e.currentTarget.style.background = 'rgba(168,85,247,0.06)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = 'var(--text-muted)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
          }}
        >
          <span style={{ fontSize: 16 }}>＋</span>
          Create another profile
        </button>
      </div>
    </div>
  )
}
