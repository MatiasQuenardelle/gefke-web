import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import danish from "../public/locales/da.json"
import english from "../public/locales/en.json"
import spanish from "../public/locales/es.json"

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "da",
    supportedLngs: ["da", "en", "es"],
    lng: "da",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      da: { translation: danish },
      en: { translation: english },
      es: { translation: spanish },
    },
  })

export default i18n
