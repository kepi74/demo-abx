import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_US from './en_US';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: en_US,
      },
    },
  });

export default i18next;
