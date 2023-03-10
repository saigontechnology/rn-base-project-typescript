import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import en from './en'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', //https://stackoverflow.com/questions/70493788/i18nextpluralresolver-your-environment-seems-not-to-be-intl-api-compatible-u
  lng: 'en',
  fallbackLng: 'en',

  resources: {
    en: {
      translation: en,
    },
  },

  debug: false,

  cache: {
    enabled: true,
  },

  interpolation: {
    escapeValue: false, // not needed for react as it does escape per default to prevent xss!
  },
})

export const getString = (key: string, params?: any): string => i18n.t(key, params)

export default i18n
