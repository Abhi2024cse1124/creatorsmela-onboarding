import { Input, Btn } from './UI'

export default function Step1({ data, onChange, onNext, onBack }) {
  const valid = data.name.trim() && data.email.trim() && data.password.length >= 8

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--brand)' }}>
          Step 1 of 5
        </span>
        <h2 className="text-2xl font-bold mt-1.5 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Create your account
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Let's start with the basics.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          label="Full name"
          value={data.name}
          onChange={(v) => onChange({ ...data, name: v })}
          placeholder="Priya Sharma"
        />
        <Input
          label="Email address"
          type="email"
          value={data.email}
          onChange={(v) => onChange({ ...data, email: v })}
          placeholder="priya@gmail.com"
        />
        <Input
          label="Password"
          type="password"
          value={data.password}
          onChange={(v) => onChange({ ...data, password: v })}
          placeholder="At least 8 characters"
          hint="Use a mix of letters, numbers, and symbols."
        />
      </div>

      <div className="flex gap-3 mt-7 justify-between">
        <Btn variant="ghost" onClick={onBack}>← Back</Btn>
        <Btn onClick={onNext} disabled={!valid}>Continue →</Btn>
      </div>
    </div>
  )
}
