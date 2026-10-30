/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#04050c',
          900: '#070915',
          850: '#0b0e1d',
          800: '#10132a',
        },
        charcoal: {
          900: '#0f1016',
          800: '#16171f',
          700: '#1e2029',
        },
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#2f7bff',
          600: '#1f5eea',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      maxWidth: {
        site: '1240px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2f7bff 0%, #8b5cf6 100%)',
        'brand-gradient-soft':
          'linear-gradient(135deg, rgba(47,123,255,0.18) 0%, rgba(139,92,246,0.18) 100%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(47,123,255,0.45)',
        'glow-violet': '0 20px 60px -20px rgba(139,92,246,0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'word-in': {
          '0%': { opacity: '0', transform: 'translateY(60%)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'word-in': 'word-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
        'spin-slower': 'spin 40s linear infinite reverse',
      },
    },
  },
  plugins: [],
};
