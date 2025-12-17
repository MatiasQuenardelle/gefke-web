"use client"

import { useTranslation } from "react-i18next"

/**
 * ArticleMeta component - Displays author byline and publication/update dates
 * @param {string} translationKey - Translation key for the page (e.g., "realEstateBuySell")
 * @param {string} author - Author name (default: "Christian Gefke")
 */
export default function ArticleMeta({ translationKey, author = "Christian Gefke" }) {
  const { t, i18n } = useTranslation()
  
  // Get dates from translation file
  const datePublished = t(`${translationKey}.datePublished`, { defaultValue: null })
  const dateModified = t(`${translationKey}.dateModified`, { defaultValue: null })
  
  // Format dates based on language
  const formatDate = (dateString) => {
    if (!dateString) return null
    
    const date = new Date(dateString)
    const locale = i18n.language === 'da' ? 'da-DK' : i18n.language === 'es' ? 'es-ES' : 'en-US'
    
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  const formattedPublished = datePublished ? formatDate(datePublished) : null
  const formattedModified = dateModified ? formatDate(dateModified) : null
  
  return (
    <div className="border-t border-b border-gray-200 py-4 my-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{t("articleMeta.by")} {author}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{t("articleMeta.authorTitle")}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs">
          {formattedPublished && (
            <div>
              <span className="font-medium text-gray-700">{t("articleMeta.published")}: </span>
              <time dateTime={datePublished} className="text-gray-600">
                {formattedPublished}
              </time>
            </div>
          )}
          {formattedModified && formattedModified !== formattedPublished && (
            <div>
              <span className="font-medium text-gray-700">{t("articleMeta.updated")}: </span>
              <time dateTime={dateModified} className="text-gray-600">
                {formattedModified}
              </time>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

