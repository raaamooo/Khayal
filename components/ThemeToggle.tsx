'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/src/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle Theme"
        className="relative flex items-center justify-center w-10 h-8 bg-surface/80 rounded-full border border-violet/10 hover:border-violet/30 transition-all duration-300"
      >
        <motion.div
          layout
          className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-violet to-violet-dark"
          animate={{ x: theme === 'dark' ? -4 : 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
        
        {/* Icons */}
        <div className="absolute flex justify-between w-full px-2 pointer-events-none">
          {/* Moon Icon (Dark) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-colors duration-300 ${theme === 'dark' ? 'text-lavender' : 'text-fog'}`}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>

          {/* Sun Icon (Light) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-colors duration-300 ${theme === 'light' ? 'text-lavender' : 'text-fog'}`}
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </div>
      </button>
    </div>
  );
}
