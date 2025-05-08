import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import danish from "../public/locales/da.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "da", // Default language
    debug: false, // Set to true during development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      da: {
        translation: danish,
      },
    },
  })

export default i18n
