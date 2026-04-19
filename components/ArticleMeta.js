import danish from "@/public/locales/da.json"
import english from "@/public/locales/en.json"
import spanish from "@/public/locales/es.json"

/**
 * ArticleMeta component - Displays author byline and publication/update dates
 * @param {string} translationKey - Translation key for the page (e.g., "realEstateBuySell")
 * @param {string} author - Author name (default: "Christian Gefke")
 * @param {string} lang - Language code (defaults to "da")
 */
export default function ArticleMeta({
  translationKey,
  author = "Christian Gefke",
  lang = "da",
}) {
  const t = lang === "en" ? english : lang === "es" ? spanish : danish
  const articleMeta = t.articleMeta || {
    by: lang === "es" ? "Por" : lang === "en" ? "By" : "Af",
    authorTitle:
      lang === "es"
        ? "Abogado español"
        : lang === "en"
          ? "Spanish Lawyer"
          : "Spansk Advokat",
    published: lang === "es" ? "Publicado" : lang === "en" ? "Published" : "Publiceret",
    updated: lang === "es" ? "Actualizado" : lang === "en" ? "Updated" : "Opdateret",
  }

  // Get dates from translation file
  const datePublished = t[translationKey]?.datePublished || null
  const dateModified = t[translationKey]?.dateModified || null
  
  // Format dates based on language
  const formatDate = (dateString) => {
    if (!dateString) return null
    
    const date = new Date(dateString)
    const locale = lang === "da" ? "da-DK" : lang === "es" ? "es-ES" : "en-US"
    
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
          <span className="font-semibold text-gray-900">{articleMeta.by} {author}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{articleMeta.authorTitle}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs">
          {formattedPublished && (
            <div>
              <span className="font-medium text-gray-700">{articleMeta.published}: </span>
              <time dateTime={datePublished} className="text-gray-600">
                {formattedPublished}
              </time>
            </div>
          )}
          {formattedModified && formattedModified !== formattedPublished && (
            <div>
              <span className="font-medium text-gray-700">{articleMeta.updated}: </span>
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
