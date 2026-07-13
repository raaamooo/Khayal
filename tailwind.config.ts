import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void)',
        violet: 'var(--color-violet)',
        'violet-light': 'var(--color-violet-light)',
        'violet-dark': 'var(--color-violet-dark)',
        ember: 'var(--color-ember)',
        'ember-light': 'var(--color-ember-light)',
        'ember-dark': 'var(--color-ember-dark)',
        lavender: 'var(--color-lavender)',
        fog: 'var(--color-fog)',
        surface: 'var(--color-surface)',
        glass: 'var(--color-glass)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        '14': '14px',
        '100': '100px',
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(162, 89, 255, 0.3), 0 0 60px rgba(162, 89, 255, 0.1)',
        'glow-violet-lg': '0 0 30px rgba(162, 89, 255, 0.4), 0 0 80px rgba(162, 89, 255, 0.15)',
        'glow-ember': '0 0 20px rgba(255, 107, 53, 0.3), 0 0 60px rgba(255, 107, 53, 0.1)',
        'glow-mixed': '0 0 30px rgba(162, 89, 255, 0.25), 0 0 60px rgba(255, 107, 53, 0.1)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(162, 89, 255, 0.1)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(162, 89, 255, 0.15)',
      },
      backgroundImage: {
        'gradient-violet': 'linear-gradient(135deg, var(--color-violet), var(--color-violet-dark))',
        'gradient-ember': 'linear-gradient(135deg, var(--color-ember), var(--color-ember-dark))',
        'gradient-mixed': 'linear-gradient(135deg, var(--color-violet), var(--color-ember))',
        'gradient-cta': 'linear-gradient(135deg, var(--color-violet) 0%, var(--color-violet-dark) 50%, var(--color-ember) 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(162, 89, 255, 0.08), rgba(255, 107, 53, 0.04))',
        'gradient-radial-violet': 'radial-gradient(circle at 50% 50%, rgba(162, 89, 255, 0.15) 0%, transparent 60%)',
        'dot-pattern': 'radial-gradient(circle, rgba(162, 89, 255, 0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '24px 24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
