/**
 * Structured Data (Schema.org) helper functions
 * Generates JSON-LD structured data for SEO
 */

import danish from '../public/locales/da.json'

const baseUrl = 'https://www.christiangefke.com'

/**
 * Generate LegalService organization schema
 * @returns {object} LegalService schema object
 */
export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Christian Gefke - Spansk Advokat",
    "alternateName": "Christian Gefke - Danish Lawyer in Spain",
    "url": baseUrl,
    "logo": `${baseUrl}/images/CristianGefke.png`,
    "image": `${baseUrl}/images/CristianGefke.png`,
    "description": "Authorized Spanish lawyer (abogado) providing legal services to Danish clients in Spain. Specializing in real estate law, business law, family law, and immigration law.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle Luxemburgo 7, C3",
        "addressLocality": "Tías",
        "postalCode": "35510",
        "addressCountry": "ES"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Risdalsvej 39",
        "addressLocality": "Århus",
        "postalCode": "8260",
        "addressCountry": "DK"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "cbgefke@gmail.com",
      "contactType": "Customer Service",
      "availableLanguage": ["Danish", "English", "Spanish"]
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Spain"
      },
      {
        "@type": "Country",
        "name": "Denmark"
      }
    ],
    "serviceType": [
      "Real Estate Law",
      "Business Law",
      "Family Law",
      "Immigration Law",
      "Tax Law",
      "Inheritance Law"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Colegio de Abogados de Lanzarote",
      "member": {
        "@type": "Person",
        "name": "Christian Gefke",
        "identifier": "635"
      }
    }
  }
}

/**
 * Generate Person schema for Christian Gefke
 * @returns {object} Person schema object
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Christian Gefke",
    "jobTitle": "Spanish Lawyer (Abogado)",
    "description": "Authorized Spanish lawyer registered with Colegio de Abogados de Lanzarote (Member #635). Specializing in legal services for Danish clients in Spain.",
    "url": baseUrl,
    "image": `${baseUrl}/images/CristianGefke.png`,
    "email": "cbgefke@gmail.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle Luxemburgo 7, C3",
        "addressLocality": "Tías",
        "postalCode": "35510",
        "addressCountry": "ES"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of Las Palmas de Gran Canaria"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Universidad Internacional de la Rioja (UNIR)"
      }
    ],
    "knowsAbout": [
      "Spanish Law",
      "Real Estate Law",
      "Business Law",
      "Family Law",
      "Immigration Law",
      "Tax Law",
      "Inheritance Law",
      "Cross-border Legal Matters"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Colegio de Abogados de Lanzarote",
      "identifier": "635"
    },
    "sameAs": [
      baseUrl
    ]
  }
}

/**
 * Generate Article schema for service pages
 * @param {string} title - Article title
 * @param {string} description - Article description
 * @param {string} path - URL path
 * @param {string} author - Author name (default: "Christian Gefke")
 * @param {string} datePublished - Publication date (ISO format)
 * @param {string} dateModified - Last modified date (ISO format)
 * @returns {object} Article schema object
 */
export function getArticleSchema({
  title,
  description,
  path,
  author = "Christian Gefke",
  datePublished,
  dateModified
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `${baseUrl}${path}`,
    "author": {
      "@type": "Person",
      "name": author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "LegalService",
      "name": "Christian Gefke - Spansk Advokat",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/CristianGefke.png`
      }
    },
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${path}`
    },
    "image": `${baseUrl}/images/CristianGefke.png`,
    "articleSection": "Legal Services",
    "inLanguage": ["da", "en", "es"]
  }
}

/**
 * Generate FAQPage schema
 * @param {Array} faqs - Array of FAQ objects with question and answer
 * @returns {object} FAQPage schema object
 */
export function getFAQPageSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

/**
 * Get Article schema for a service page using translation key
 * @param {string} translationKey - Translation key (e.g., "realEstateBuySell")
 * @param {string} path - URL path (e.g., "/real-estate-buy-sell-spain")
 * @param {string} lang - Language code (default: "da")
 * @returns {object} Article schema object
 */
export function getArticleSchemaFromKey(translationKey, path, lang = 'da') {
  const pageData = danish[translationKey] || {}
  const title = pageData.metaTitle || pageData.title || 'Legal Service'
  const description = pageData.metaDescription || pageData.subtitle || 'Legal service information'
  
  // Get dates from translation file, with fallback to current date
  const datePublished = pageData.datePublished 
    ? new Date(pageData.datePublished).toISOString()
    : new Date('2024-01-01').toISOString()
  const dateModified = pageData.dateModified 
    ? new Date(pageData.dateModified).toISOString()
    : new Date().toISOString()
  
  return getArticleSchema({
    title,
    description,
    path,
    author: "Christian Gefke",
    datePublished,
    dateModified
  })
}

/**
 * Convert schema object to JSON-LD script tag
 * @param {object} schema - Schema object
 * @returns {string} JSON-LD script tag HTML
 */
export function schemaToScript(schema) {
  return {
    __html: JSON.stringify(schema, null, 2)
  }
}

