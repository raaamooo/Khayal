'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '@/src/content/en';
import ar from '@/src/content/ar';

type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  content: typeof en | typeof ar;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'ar'>('ar'); // default to arabic

  const getStoredLanguage = (): 'en' | 'ar' => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('khayal-language');
      if (stored === 'en' || stored === 'ar') {
        return stored;
      }
    }
    // If no stored preference, check browser language
    if (typeof navigator !== 'undefined' && navigator.language) {
      return navigator.language.startsWith('ar') ? 'ar' : 'en';
    }
    return 'ar'; // fallback
  };

  useEffect(() => {
    const stored = getStoredLanguage();
    setLanguageState(stored);

    // Update HTML attributes
    if (typeof window !== 'undefined') {
      document.documentElement.lang = stored;
      document.documentElement.dir = stored === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  const setLanguage = (lang: 'en' | 'ar') => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('khayal-language', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  const content = language === 'en' ? en : ar;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};