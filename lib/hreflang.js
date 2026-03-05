/**
 * Centralized hreflang mapping for all pages across languages.
 * Maps every page path to its equivalents in other languages.
 * Used by lib/metadata.js to automatically set alternates.languages.
 */

const baseUrl = 'https://www.buxtongefke.es'

// Define page groups: each array contains [daPath, enPath, esPath]
// null means the page doesn't exist in that language
const pageGroups = [
  // Homepage
  ['/', '/en', '/es'],

  // Core pages
  ['/about', '/en/about', '/es/sobre-mi'],
  ['/contact', '/en/contact', '/es/contacto'],

  // Real estate
  ['/real-estate-buy-sell-spain', '/en/buy-property-spain', '/es/comprar-propiedad-espana'],
  ['/real-estate-investment-spain', '/en/real-estate-investment', '/es/inversion-inmobiliaria'],
  ['/realkredit', '/en/mortgages-spain', '/es/hipotecas-espana'],
  ['/homeowner-associations', '/en/homeowner-associations', '/es/comunidades-propietarios'],
  ['/lejekontrakter-i-spanien', '/en/rental-contracts-spain', '/es/alquiler-espana'],

  // Family law
  ['/divorce-spain', '/en/divorce-spain', '/es/divorcio-internacional'],
  ['/testamenter-i-spanien', '/en/wills-spain', '/es/testamentos-espana'],
  ['/opholdstilladelse', '/en/inheritance-jurisdiction', '/es/herencias-internacionales'],
  ['/lovvalg', '/en/choice-of-law', null],

  // Immigration & residency
  ['/residency-spain', '/en/residency-spain', '/es/residencia-extranjeros'],

  // Work & business
  ['/work-in-spain', '/en/work-in-spain', '/es/trabajar-espana'],
  ['/starte-virksomhed-spanien', '/en/start-business-spain', '/es/crear-empresa-espana'],
  ['/arbejdsret-i-spanien', '/en/employment-law-spain', '/es/derecho-laboral'],

  // Tax & pension
  ['/skat', '/en/tax-spain', '/es/impuestos-espana'],
  ['/pension-spain', '/en/pension-spain', '/es/pension-espana'],

  // Hub pages
  ['/tjenester/ejendom', '/services/real-estate', '/es/inmobiliaria'],
  ['/tjenester/familie', '/services/family-law', '/es/derecho-familia'],
  ['/tjenester/skat-pension', '/services/immigration', '/es/inmigracion'],
  [null, '/services/business', '/es/empresa-espana'],

  // Blog
  ['/blog', '/en/blog', '/es/blog'],
]

// Build a lookup map: path -> { da: url, en: url, es: url }
const langKeys = ['da', 'en', 'es']
const hreflangLookup = {}

for (const group of pageGroups) {
  const languages = {}
  for (let i = 0; i < 3; i++) {
    if (group[i] !== null) {
      languages[langKeys[i]] = `${baseUrl}${group[i]}`
    }
  }
  // Add x-default pointing to the Danish version (or English if no Danish)
  languages['x-default'] = languages.da || languages.en

  for (let i = 0; i < 3; i++) {
    if (group[i] !== null) {
      hreflangLookup[group[i]] = languages
    }
  }
}

/**
 * Get hreflang languages object for a given path.
 * @param {string} path - The URL path (e.g., "/about", "/en/about")
 * @returns {object|null} Languages object for Next.js alternates, or null if not mapped
 */
export function getHreflang(path) {
  return hreflangLookup[path] || null
}
