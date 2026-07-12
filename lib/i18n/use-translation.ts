import { useState, useEffect, useCallback } from 'react';
import type { Locale } from './types';

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('locale') as Locale | null;
      if (['en', 'ar'].includes(stored ?? '')) {
        return stored;
      }
      return navigator.language.startsWith('ar') ? 'ar' : 'en';
    }
    return 'en';
  });

  const [messages, setMessages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const loadMessages = useCallback(async (lang: Locale) => {
    setLoading(true);
    try {
      const res = await fetch(`/locales/${lang}/common.json`);
      if (!res.ok) {
        throw new Error(`Failed to load translations for ${lang}`);
      }
      const msg = await res.json();
      setMessages(msg);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to English if available
      if (lang !== 'en') {
        loadMessages('en');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMessages(locale);
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale, loadMessages]);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let result: any = messages;
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return key;
        }
      }
      return typeof result === 'string' ? result : key;
    },
    [messages]
  );

  const setLanguage = (lang: Locale) => {
    if (lang !== locale) {
      setLocale(lang);
    }
  };

  return { t, locale, setLanguage, loading };
}
