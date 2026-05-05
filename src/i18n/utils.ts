import bg from './bg.json';
import en from './en.json';

export const languages = { bg, en } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'bg';
export const supportedLangs: Lang[] = ['bg', 'en'];

export function t(lang: Lang, key: string): string {
  const dict = languages[lang] as Record<string, string>;
  const fallback = languages[defaultLang] as Record<string, string>;
  return dict[key] ?? fallback[key] ?? key;
}
