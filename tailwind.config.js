/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-anton)', 'Impact', 'Arial Black', 'sans-serif'],
        editorial: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#070a10',
        brand: {
          rose: '#e11d48',
          red: '#dc2626',
          coral: '#f43f5e',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beam': 'beamFlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        beamFlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(0.95)' },
          '50%': { opacity: '1', transform: 'scaleY(1.05)' },
        }
      }
    },
  },
  plugins: [],
};
