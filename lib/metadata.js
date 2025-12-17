/**
 * Server-side metadata helper for Next.js 15 App Router
 * Reads translation files directly for SEO metadata
 */

import danish from '../public/locales/da.json'
import english from '../public/locales/en.json'
import spanish from '../public/locales/es.json'

const translations = {
  da: danish,
  en: english,
  es: spanish,
}

const baseUrl = 'https://www.christiangefke.com'

/**
 * Get metadata for a page based on translation keys
 * @param {string} translationKey - The key path in translation file (e.g., "about", "realEstateBuySell")
 * @param {string} path - The URL path (e.g., "/about", "/real-estate-buy-sell-spain")
 * @param {string} lang - Language code (default: "da")
 * @returns {object} Metadata object for Next.js
 */
export function getMetadata(translationKey, path, lang = 'da') {
  const t = translations[lang] || translations.da
  const pageData = t[translationKey] || {}

  // Handle homepage specially - it has hero.title1 and hero.title2
  let title = pageData.metaTitle || pageData.title || 'Christian Gefke'
  let description = pageData.metaDescription || pageData.subtitle || 'Danish Lawyer in Spain'
  
  // If homepage, construct title from hero section
  if (translationKey === 'homepage' && pageData.hero) {
    title = pageData.metaTitle || `${pageData.hero.title1} ${pageData.hero.title2} | Christian Gefke`
    description = pageData.metaDescription || `${pageData.hero.description}${pageData.hero.descriptionHighlight || ''}`
  }
  
  const ogTitle = pageData.ogTitle || title
  const ogDescription = pageData.ogDescription || description

  return {
    title,
    description,
    keywords: pageData.keywords || '',
    authors: [{ name: 'Christian Gefke' }],
    creator: 'Christian Gefke',
    publisher: 'Christian Gefke Law Office',
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${baseUrl}${path}`,
      siteName: 'Christian Gefke - Spansk Advokat',
      locale: lang === 'da' ? 'da_DK' : lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/CristianGefke.png`,
          width: 1200,
          height: 630,
          alt: 'Christian Gefke - Autoriseret spansk advokat (abogado) medlemsnummer 635 ved Colegio de Abogados de Lanzarote',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.twitterTitle || ogTitle,
      description: pageData.twitterDescription || ogDescription,
      images: [`${baseUrl}/images/CristianGefke.png`],
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'da': `${baseUrl}${path}`,
        'en': `${baseUrl}${path}`,
        'es': `${baseUrl}${path}`,
        'x-default': `${baseUrl}${path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Generate metadata function for Next.js pages
 * @param {string} translationKey - The key path in translation file
 * @param {string} path - The URL path
 * @returns {function} generateMetadata function
 */
export function createMetadataGenerator(translationKey, path) {
  return async function generateMetadata({ params }) {
    // Default to Danish, but can be extended for multi-language support
    const lang = params?.lang || 'da'
    return getMetadata(translationKey, path, lang)
  }
}

