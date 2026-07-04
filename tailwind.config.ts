import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0C0F0A',
        moss: '#1C2818',
        night: '#241A3A',
        spirit: '#7E63D9',
        kodama: '#4A7A3A',
        luna: '#B8CCF0',
        mononoke: '#E85D3A',
        vellum: '#D4DFCA',
      },
      fontFamily: {
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        mincho: ['var(--font-mincho)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        brand: '0.05em',
        mono: '0.14em',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
      animation: {
        breathe: 'breathe 5s cubic-bezier(0.16, 1, 0.3, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
