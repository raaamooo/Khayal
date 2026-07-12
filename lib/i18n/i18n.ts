'use client';

import { useState, useEffect, useCallback } from 'react';

const APP_LOCALES = ['en', 'ar'] as const;
type Locale = typeof APP_LOCALES[number];

// Cache for translations
const translationsCache: Record<Locale, Record<string, any> | null> = {
  en: null,
  ar: null
};

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>('ar');
  const [messages, setMessages] = useState<Record<string, any>>({});

  const getStoredLocale = useCallback((): Locale => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('khayal-locale') : null;
    return (stored === 'en' || stored === 'ar') ? stored as Locale : 'ar';
  }, []);

  // Load translations for a given locale
  const loadTranslations = useCallback(async (locale: Locale) => {
    // If we already have it in cache, use it
    if (translationsCache[locale] !== null) {
      return translationsCache[locale]!;
    }

    try {
      // Fetch the JSON file from the public directory
      const response = await fetch(`/locales/${locale}/common.json`);
      if (!response.ok) {
        throw new Error(`Failed to load translations for locale ${locale}`);
      }
      const data = await response.json();
      translationsCache[locale] = data;
      return data;
    } catch (error) {
      console.error(`Error loading translations for ${locale}:`, error);
      // Fallback to a basic object to prevent crashes
      const fallback: Record<string, any> = {};
      translationsCache[locale] = fallback;
      return fallback;
    }
  }, []);

  // Initialize language and load translations
  useEffect(() => {
    const init = async () => {
      const storedLocale = getStoredLocale();
      setLocale(storedLocale);

      // Load transactions for the initial locale
      const initialMessages = await loadTranslations(storedLocale);
      setMessages(initialMessages);

      // Update HTML lang and dir attributes
      if (typeof window !== 'undefined') {
        document.documentElement.lang = storedLocale;
        document.documentElement.dir = storedLocale === 'ar' ? 'rtl' : 'ltr';
      }
    };

    init();
  }, [getStoredLocale, loadTranslations]);

  // Reload translations when locale changes
  useEffect(() => {
    const loadMessages = async () => {
      const newMessages = await loadTranslations(locale);
      setMessages(newMessages);
    };

    loadMessages();
  }, [locale, loadTranslations]);

  const t = useCallback((key: string): string => {
    // Split key by dots and navigate through the translation object
    const keys = key.split('.');
    let result: any = messages;

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to English if key not found
        let fallback: any = translationsCache.en ? translationsCache.en : {};
        for (const k of keys) {
          if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = fallback[k];
          } else {
            return key; // Return the key itself if not found
          }
        }
        return fallback;
      }
    }

    return result ?? key;
  }, [messages]);

  const changeLanguage = useCallback(async (newLocale: Locale) => {
    localStorage.setItem('khayal-locale', newLocale);
    setLocale(newLocale);

    if (typeof window !== 'undefined') {
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  return {
    t,
    locale,
    messages,
    setLanguage: changeLanguage,
    setLocale: changeLanguage,
    changeLanguage
  };
}