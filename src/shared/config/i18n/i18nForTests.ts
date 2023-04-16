import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',

  // have a common namespace used around the full app
  // ns: ['translationsNS'],
  defaultNS: 'translations',

  debug: false,

  // interpolation: {
  //   escapeValue: false, // not needed for react!!
  // },

  resources: { en: { translations: {} } },
});

export default i18n;
