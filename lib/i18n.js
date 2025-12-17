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
    lng: "da", // Explicitly set initial language to "da" to match SSR
    debug: false, // Set to true during development
    // Configure LanguageDetector to prevent hydration mismatches
    detection: {
      // Only detect from localStorage/cookie, not from navigator.language
      // This prevents auto-detection on first client render
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
      // Don't auto-detect on initialization to prevent hydration mismatch
      lookupLocalStorage: "i18nextLng",
      lookupCookie: "i18next",
    },
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
