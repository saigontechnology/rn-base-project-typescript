import i18n from 'i18next'
import {getI18n, initReactI18next} from 'react-i18next'

import en from './en'

export const configureLocalization = (locale: string, fallback = 'en') =>
  i18n.use(initReactI18next).init({
    returnNull: false,
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

type TranslateRecord = typeof en

type TranslateKey = keyof TranslateRecord

type TranslateStr<O extends Record<string, any>, Key extends keyof O> = Key extends string
  ? O[Key] extends string
    ? Key
    : `${Key}${TranslateStr<O[Key], keyof O[Key]> extends string
        ? `.${TranslateStr<O[Key], keyof O[Key]>}`
        : never}`
  : Key

export const getString = (key: TranslateStr<TranslateRecord, TranslateKey>, params: object = {}) =>
  getI18n() ? getI18n().t(key, params) : ''

export default i18n
