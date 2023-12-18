import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import zh from './locales/zh.json'

export const defaultLanguage = 'zh'

export const defaultNamespace = 'default'

export const resources = {
  'en': {
    [defaultNamespace]: en,
  },
  'zh': {
    [defaultNamespace]: zh,
  },
}

i18n.use(initReactI18next).init({
  defaultNS: defaultNamespace,
  ns: [defaultNamespace],
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
})