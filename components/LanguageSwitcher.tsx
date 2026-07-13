'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();

  return (
    <div className="flex items-center">
      <button
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        aria-label={`Switch to ${language === 'en' ? content.footer.language.arabic : content.footer.language.english}`}
        className="relative flex items-center bg-surface/80 rounded-full p-1 border border-violet/10 hover:border-violet/30 transition-all duration-300"
      >
        {/* Sliding indicator */}
        <motion.div
          layout
          className="absolute top-1 bottom-1 w-8 rounded-full bg-gradient-to-r from-violet to-violet-dark"
          animate={{ left: language === 'en' ? '4px' : 'calc(100% - 36px)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
        <span className={`relative z-10 px-2.5 py-1 text-xs font-syne font-bold rounded-full transition-colors duration-300 ${
          language === 'en' ? 'text-white' : 'text-fog'
        }`}>
          EN
        </span>
        <span className={`relative z-10 px-2.5 py-1 text-xs font-syne font-bold rounded-full transition-colors duration-300 ${
          language === 'ar' ? 'text-white' : 'text-fog'
        }`}>
          ع
        </span>
      </button>
    </div>
  );
}