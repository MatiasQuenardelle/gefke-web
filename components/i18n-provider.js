"use client"

import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

const STORAGE_KEY = "i18nextLng"
const SUPPORTED_LANGS = ["da", "en", "es"]

export default function I18nProvider({ children }) {
  // Detect stored language preference after hydration to avoid mismatch
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LANGS.includes(stored) && stored !== i18n.language) {
      i18n.changeLanguage(stored)
    }
  }, [])

  // Persist language changes to localStorage
  useEffect(() => {
    const onChanged = (lng) => {
      localStorage.setItem(STORAGE_KEY, lng)
    }
    i18n.on("languageChanged", onChanged)
    return () => i18n.off("languageChanged", onChanged)
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
