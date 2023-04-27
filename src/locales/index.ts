import { createI18n } from 'next-international';
import type Locale from './pt';

export const { useI18n, I18nProvider, getLocaleProps } = createI18n<
  typeof Locale
>({
  pt: () => import('./pt'),
  en: () => import('./en')
});
