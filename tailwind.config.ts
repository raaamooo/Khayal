import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#06060E',
        violet: '#A259FF',
        ember: '#FF6B35',
        lavender: '#E8E4FF',
        fog: '#6B6B8A',
        surface: '#0F0F1A',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        '14': '14px',
        '100': '100px',
      },
    },
  },
  plugins: [],
};

export default config;
