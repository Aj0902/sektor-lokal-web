/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'Impact', 'Arial Black', 'sans-serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#07090E',
        obsidian: {
          DEFAULT: '#07090E',
          surface: '#0B0F17',
          card: '#0E131F',
          border: 'rgba(245, 239, 235, 0.08)',
        },
        ivory: {
          DEFAULT: '#F5EFEB',
          soft: '#EDE8DC',
          muted: '#8E95A5',
          subtle: 'rgba(245, 239, 235, 0.65)',
        },
        crimson: {
          DEFAULT: '#E11D48',
          deep: '#BE123C',
          blood: '#9F1239',
          glow: 'rgba(225, 29, 72, 0.55)',
        },
        brand: {
          rose: '#E11D48',
          red: '#DC2626',
          coral: '#F43F5E',
        }
      },
      boxShadow: {
        'crimson-glow': '0 0 25px rgba(225, 29, 72, 0.45)',
        'crimson-glow-lg': '0 0 40px rgba(225, 29, 72, 0.6)',
        'crimson-subtle': '0 0 15px rgba(225, 29, 72, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beam': 'beamFlow 2.5s ease-in-out infinite',
        'crimson-breathe': 'crimsonBreathe 4s ease-in-out infinite',
      },
      keyframes: {
        beamFlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(0.95)' },
          '50%': { opacity: '1', transform: 'scaleY(1.05)' },
        },
        crimsonBreathe: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(225, 29, 72, 0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(225, 29, 72, 0.7)' },
        }
      }
    },
  },
  plugins: [],
};
