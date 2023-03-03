import i18n from 'i18next'
import {getI18n, initReactI18next} from 'react-i18next'

import en from './en'

export const configureLocalization = (locale: string, fallback = 'en') => {
  return i18n.use(initReactI18next).init({
    lng: locale,
    fallbackLng: fallback,

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
}

export const getString = (key: keyof typeof en, params?: any) => {
  return getI18n() ? getI18n().t(key, params) : ''
}
