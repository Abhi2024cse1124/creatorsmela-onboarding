/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#a855f7',
          light: '#d8b4fe',
          glow: 'rgba(168,85,247,0.25)',
        },
        accent: {
          DEFAULT: '#06b6d4',
          glow: 'rgba(6,182,212,0.2)',
        },
        surface: {
          DEFAULT: '#111118',
          2: '#18181f',
          3: '#1e1e2a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease both',
        'scale-in': 'scaleIn 0.5s ease both',
        'pulse-glow': 'pulse 2s infinite',
        'check-pop': 'checkPop 0.5s ease both',
        'confetti': 'confettiDrop 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.94)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        checkPop: {
          '0%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        confettiDrop: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(200px) rotate(720deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
