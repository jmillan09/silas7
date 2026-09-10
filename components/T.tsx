'use client';

import { createElement, type ComponentPropsWithoutRef, type ElementType } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { TranslationKey } from '@/lib/i18n/en';

type TProps<E extends ElementType> = {
  k: TranslationKey;
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, 'children' | 'dangerouslySetInnerHTML'>;

/** Renders a translated string (may contain inline HTML) for the current language. */
export default function T<E extends ElementType = 'span'>({ k, as, ...rest }: TProps<E>) {
  const { t } = useLanguage();
  const Tag = (as ?? 'span') as ElementType;
  return createElement(Tag, { ...rest, dangerouslySetInnerHTML: { __html: t(k) } });
}
