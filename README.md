# CreatorsMela – Creator Onboarding Flow

A polished, multi-step creator onboarding experience built with **React + Vite + Tailwind CSS**.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── UI.jsx              # Shared: Input, Btn, Card, ProgressBar, StepDots
│   ├── Step0Welcome.jsx    # Welcome screen
│   ├── Step1Account.jsx    # Account setup
│   ├── Step2Profile.jsx    # Profile & niche selection
│   ├── Step3Socials.jsx    # Social account linking
│   ├── Step4Audience.jsx   # Audience size & rates
│   └── Step5Success.jsx    # Completion screen
├── constants.js            # Niches, platforms, follower ranges
├── App.jsx                 # Main orchestrator with step state
├── main.jsx                # React root
└── index.css               # Tailwind + custom animations
```

## ✨ Features

- **6-screen onboarding flow** with smooth animations
- **Live progress bar** + step dot indicators
- **Form validation** — buttons lock until required fields are filled
- **Niche grid** — pick up to 3 from 12 categories
- **Social linking** — expandable accordion cards per platform
- **Audience segmentation** — follower range + content type selector
- **Confetti success screen** — profile summary with all entered data
- **Dark theme** with purple-cyan gradient brand identity
- **Fully responsive** — works on mobile and desktop

## 🛠️ Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Google Fonts (Inter + Space Grotesk)
