import { useState } from 'react'
import { ProgressBar, StepDots } from '../features/onboarding/components/UI'
import Step0Welcome from '../features/onboarding/components/Step0Welcome'
import Step1Account from '../features/onboarding/components/Step1Account'
import Step2Profile from '../features/onboarding/components/Step2Profile'
import Step3Socials from '../features/onboarding/components/Step3Socials'
import Step4Audience from '../features/onboarding/components/Step4Audience'
import Step5Success from '../features/onboarding/components/Step5Success'

const TOTAL_STEPS = 6  // 0–5

export default function App() {
  const [step, setStep] = useState(0)
  const [account, setAccount] = useState({ name: '', email: '', password: '' })
  const [profile, setProfile] = useState({ name: '', bio: '', niches: [] })
  const [socials, setSocials] = useState({})
  const [audience, setAudience] = useState({ followers: '', contentType: '', rate: '' })

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))
  const reset = () => {
    setStep(0)
    setAccount({ name: '', email: '', password: '' })
    setProfile({ name: '', bio: '', niches: [] })
    setSocials({})
    setAudience({ followers: '', contentType: '', rate: '' })
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-5"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%,rgba(168,85,247,0.08) 0%,transparent 50%),' +
          'radial-gradient(ellipse at 80% 20%,rgba(6,182,212,0.06) 0%,transparent 50%),' +
          '#0a0a0f',
      }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-5">
          <span
            className="text-xl font-bold"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(135deg,#a855f7,#06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CreatorsMela
          </span>
        </div>

        <div
          className="rounded-3xl p-8"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
          }}
        >
          {step > 0 && step < TOTAL_STEPS - 1 && (
            <div className="mb-6">
              <ProgressBar current={step} total={TOTAL_STEPS} />
            </div>
          )}

          {step === 0 && <Step0Welcome onNext={next} />}
          {step === 1 && <Step1Account data={account} onChange={setAccount} onNext={next} onBack={back} />}
          {step === 2 && <Step2Profile data={profile} onChange={setProfile} onNext={next} onBack={back} />}
          {step === 3 && <Step3Socials data={socials} onChange={setSocials} onNext={next} onBack={back} />}
          {step === 4 && <Step4Audience data={audience} onChange={setAudience} onNext={next} onBack={back} />}
          {step === 5 && (
            <Step5Success
              accountData={account}
              profileData={profile}
              socialData={socials}
              audienceData={audience}
              onReset={reset}
            />
          )}

          {step > 0 && step < TOTAL_STEPS - 1 && (
            <div className="mt-5">
              <StepDots current={step} total={TOTAL_STEPS - 1} />
            </div>
          )}
        </div>

        <p className="text-center text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
