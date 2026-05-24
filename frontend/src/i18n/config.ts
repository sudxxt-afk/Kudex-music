import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { logAction } from '../theme/loggerDecorator';

import translationRU from '../locales/ru.json';
import translationEN from '../locales/en.json';

const resources = {
  ru: {
    translation: translationRU
  },
  en: {
    translation: translationEN
  }
};

const logLanguageChange = logAction('Language', (lng: string): void => {
  // Логирование выполняется через декоратор logAction
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React защищает от XSS по умолчанию
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    }
  });

// Слушаем событие смены языка для логирования
i18n.on('languageChanged', (lng: string) => {
  logLanguageChange(lng);
});

export default i18n;
