'use client';

import { useLanguage } from '@/src/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-fog text-xs">{language === 'en' ? 'EN' : 'ع'}</span>
      <button
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        aria-label={`Switch to ${language === 'en' ? content.footer.language.arabic : content.footer.language.english}`}
        className={`px-3 py-1 rounded-full text-sm font-syne ${
          language === 'en'
            ? 'bg-violet text-white'
            : 'bg-violet/20 text-violet hover:bg-violet/30'
        }`}
      >
        {language === 'en' ? (
          <>
            <span className='mr-1'>EN</span>
          </>
        ) : (
          <>
            <span className='mr-1'>ع</span>
          </>
        )}
      </button>
    </div>
  );
}