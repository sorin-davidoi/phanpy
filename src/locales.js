import catalogs from './data/catalogs.json';

export const DEFAULT_LANG = 'en';
export const CATALOGS = catalogs;

// Get locales that's >= X% translated
const PERCENTAGE_THRESHOLD = 50;

const locales = [
  DEFAULT_LANG,
  ...catalogs
    .filter(({ completion }) => completion >= PERCENTAGE_THRESHOLD)
    .map(({ code }) => code),
];
export const LOCALES = locales;

let devLocales = [];
if (import.meta.env.DEV || import.meta.env.PHANPY_SHOW_DEV_LOCALES) {
  devLocales = catalogs
    .filter(({ completion }) => completion < PERCENTAGE_THRESHOLD)
    .map(({ code }) => code);
  devLocales.push('pseudo-LOCALE');
}
export const DEV_LOCALES = devLocales;

export const ALL_LOCALES = [...locales, ...devLocales];
