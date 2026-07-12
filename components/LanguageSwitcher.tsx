'use client';

import { useTranslation } from '@/lib/i18n/i18n';

export default function LanguageSwitcher() {
  const { t, locale, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-fog text-xs">{t('nav.language')}: </span>
      <button
        onClick={() => changeLanguage(locale === 'en' ? 'ar' : 'en')}
        aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
        className={`px-3 py-1 rounded-full text-sm font-syne ${
          locale === 'en'
            ? 'bg-violet text-white'
            : 'bg-violet/20 text-violet hover:bg-violet/30'
        }`}
      >
        {locale === 'en' ? (
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