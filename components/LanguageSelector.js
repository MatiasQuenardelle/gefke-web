"use client"

import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

const languages = [
  { code: "da", flag: "🇩🇰", name: "Dansk" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" },
]

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Get current language code (handle cases like "da-DK" -> "da")
  // Use "da" as default during SSR to match server render
  const currentLangCode = mounted 
    ? (i18n.language?.split("-")[0] || "da")
    : "da"
  const currentLanguage = languages.find((lang) => lang.code === currentLangCode) || languages[0]
  
  // Track when component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
    // Update HTML lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = langCode
    }
  }

  // Sync HTML lang attribute on mount and language change
  // Only update after component has mounted to avoid hydration issues
  useEffect(() => {
    if (mounted && typeof document !== "undefined") {
      document.documentElement.lang = currentLangCode
    }
  }, [currentLangCode, mounted])

  return (
    <div className="relative">
      {/* Desktop: Dropdown */}
      <div className="hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 transition-colors"
          aria-label="Select language"
        >
          <span className="text-2xl">{currentLanguage.flag}</span>
          <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 bg-white text-black rounded shadow-lg z-50 min-w-[120px] overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors ${
                    currentLangCode === lang.code ? "bg-gray-50 font-semibold" : ""
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Mobile: Horizontal buttons */}
      <div className="md:hidden flex items-center gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`p-2 rounded transition-colors ${
              currentLangCode === lang.code
                ? "bg-white/20"
                : "hover:bg-white/10"
            }`}
            aria-label={`Switch to ${lang.name}`}
          >
            <span className="text-xl">{lang.flag}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

