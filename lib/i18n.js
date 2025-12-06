import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import danish from "../public/locales/da.json"
import english from "../public/locales/en.json"
import spanish from "../public/locales/es.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "da", // Default language
    supportedLngs: ["da", "en", "es"], // Supported languages
    debug: false, // Set to true during development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      da: {
        translation: danish,
      },
      en: {
        translation: english,
      },
      es: {
        translation: spanish,
      },
    },
  })

export default i18n
