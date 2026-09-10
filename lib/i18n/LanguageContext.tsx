'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en, type TranslationKey } from './en';
import { es } from './es';

export type Lang = 'es' | 'en';

const DICTIONARIES: Record<Lang, Record<TranslationKey, string>> = { es, en };
const STORAGE_KEY = 'sshc-lang';

interface LanguageContextValue {
  lang: Lang;
  t: (key: TranslationKey) => string;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: (key) => DICTIONARIES[lang][key],
      toggle: () =>
        setLang((current) => {
          const next: Lang = current === 'es' ? 'en' : 'es';
          window.localStorage.setItem(STORAGE_KEY, next);
          return next;
        }),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
