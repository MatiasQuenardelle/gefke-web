/**
 * Sitemap for Christian Gefke Law Website
 * Next.js 15 App Router sitemap format
 * Automatically generates /sitemap.xml
 * Includes images for better SEO
 */

import { getAllPosts } from '@/lib/blog'

export default function sitemap() {
  const baseUrl = 'https://www.buxtongefke.es'
  const currentDate = new Date()

  // Get blog posts per language for dynamic sitemap generation
  const allPosts = getAllPosts()
  const blogPosts = allPosts.map((post) => {
    const lang = post.lang || 'da'
    const prefix = lang === 'da' ? '' : `/${lang}`
    return {
      url: `${baseUrl}${prefix}/blog/${post.slug}`,
      lastModified: post.lastModified ? new Date(post.lastModified) : new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  })

  // Image definitions with alt text
  const images = {
    homepage: [
      {
        loc: `${baseUrl}/images/CristianGefke.png`,
        title: 'Christian Gefke - Autoriseret spansk advokat (abogado) medlemsnummer 635 ved Colegio de Abogados de Lanzarote',
        caption: 'Christian Gefke - Spansk Advokat',
      },
    ],
    services: [
      {
        loc: `${baseUrl}/images/services/business.jpg`,
        title: 'Juridisk rådgivning til selvstændige og virksomheder i Spanien',
        caption: 'Virksomhedsetablering, skatter og compliance',
      },
      {
        loc: `${baseUrl}/images/services/housing.jpg`,
        title: 'Juridisk rådgivning ved køb og salg af bolig i Spanien',
        caption: 'Ejendomsret, kontrakter og lejekontrakter',
      },
      {
        loc: `${baseUrl}/images/services/move.jpg`,
        title: 'Juridisk hjælp ved flytning til Spanien',
        caption: 'Opholdstilladelse, NIE-nummer og administrativt arbejde',
      },
      {
        loc: `${baseUrl}/images/services/family.jpg`,
        title: 'Juridisk rådgivning i familie- og arveret i Spanien',
        caption: 'Testamenter, arv og familieretlige forhold',
      },
    ],
    partners: [
      {
        loc: `${baseUrl}/images/obsidian1.png`,
        title: 'Obsidian Digital - Partner virksomhed',
      },
      {
        loc: `${baseUrl}/images/premier.png`,
        title: 'Premier Relocation Spain S.L. - Partner virksomhed',
      },
      {
        loc: `${baseUrl}/images/lumipop.png`,
        title: 'Lumipop - Partner virksomhed',
      },
    ],
  }

  // Main pages - high priority
  const mainPages = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: images.homepage,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: images.homepage,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: images.homepage,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Hub pages - high priority for SEO
  const hubPages = [
    {
      url: `${baseUrl}/services/real-estate`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[1]], // housing.jpg
    },
    {
      url: `${baseUrl}/services/family-law`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[3]], // family.jpg
    },
    {
      url: `${baseUrl}/services/immigration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[2]], // move.jpg
    },
    {
      url: `${baseUrl}/services/business`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[0]], // business.jpg
    },
    {
      url: `${baseUrl}/tjenester/ejendom`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[1]], // housing.jpg
    },
    {
      url: `${baseUrl}/tjenester/arv-testamente`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[3]], // family.jpg
    },
    {
      url: `${baseUrl}/tjenester/skat-pension`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[0]], // business.jpg
    },
    {
      url: `${baseUrl}/tjenester/familie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [images.services[3]], // family.jpg
    },
  ]

  // Service pages - high priority
  const servicePages = [
    {
      url: `${baseUrl}/real-estate-buy-sell-spain`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[1]], // housing.jpg
    },
    {
      url: `${baseUrl}/divorce-spain`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[3]], // family.jpg
    },
    {
      url: `${baseUrl}/residency-spain`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[2]], // move.jpg
    },
    {
      url: `${baseUrl}/starte-virksomhed-spanien`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[0]], // business.jpg
    },
    {
      url: `${baseUrl}/testamenter-i-spanien`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[3]], // family.jpg
    },
    {
      url: `${baseUrl}/skat`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[0]], // business.jpg
    },
    {
      url: `${baseUrl}/realkredit`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[1]], // housing.jpg
    },
    {
      url: `${baseUrl}/real-estate-investment-spain`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[1]], // housing.jpg
    },
    {
      url: `${baseUrl}/homeowner-associations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[1]], // housing.jpg
    },
    {
      url: `${baseUrl}/lejekontrakter-i-spanien`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[1]], // housing.jpg
    },
    {
      url: `${baseUrl}/lovvalg`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/opholdstilladelse`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[2]], // move.jpg
    },
    {
      url: `${baseUrl}/pension-spain`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work-in-spain`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[0]], // business.jpg
    },
    {
      url: `${baseUrl}/arbejdsret-i-spanien`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[0]], // business.jpg
    },
    {
      url: `${baseUrl}/selvstaendig-webshop-spanien`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[0]], // business.jpg
    },
    {
      url: `${baseUrl}/dansk-holder-spansk-selskab`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [images.services[0]], // business.jpg
    },
  ]

  // English pages
  const englishPages = [
    { url: `${baseUrl}/en`, priority: 0.9 },
    { url: `${baseUrl}/en/about`, priority: 0.8 },
    { url: `${baseUrl}/en/contact`, priority: 0.8 },
    { url: `${baseUrl}/en/buy-property-spain`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/en/real-estate-investment`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/en/mortgages-spain`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/en/homeowner-associations`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/en/rental-contracts-spain`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/en/divorce-spain`, priority: 0.8, images: [images.services[3]] },
    { url: `${baseUrl}/en/wills-spain`, priority: 0.8, images: [images.services[3]] },
    { url: `${baseUrl}/en/choice-of-law`, priority: 0.8 },
    { url: `${baseUrl}/en/inheritance-jurisdiction`, priority: 0.8, images: [images.services[2]] },
    { url: `${baseUrl}/en/residency-spain`, priority: 0.8, images: [images.services[2]] },
    { url: `${baseUrl}/en/pension-spain`, priority: 0.8 },
    { url: `${baseUrl}/en/work-in-spain`, priority: 0.8, images: [images.services[0]] },
    { url: `${baseUrl}/en/start-business-spain`, priority: 0.8, images: [images.services[0]] },
    { url: `${baseUrl}/en/employment-law-spain`, priority: 0.8, images: [images.services[0]] },
    { url: `${baseUrl}/en/tax-spain`, priority: 0.8, images: [images.services[0]] },
  ].map(page => ({
    ...page,
    lastModified: currentDate,
    changeFrequency: 'monthly',
  }))

  // Spanish pages
  const spanishPages = [
    { url: `${baseUrl}/es`, priority: 0.9 },
    { url: `${baseUrl}/es/sobre-mi`, priority: 0.8 },
    { url: `${baseUrl}/es/contacto`, priority: 0.8 },
    { url: `${baseUrl}/es/comprar-propiedad-espana`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/es/inversion-inmobiliaria`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/es/hipotecas-espana`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/es/comunidades-propietarios`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/es/alquiler-espana`, priority: 0.8, images: [images.services[1]] },
    { url: `${baseUrl}/es/divorcio-internacional`, priority: 0.8, images: [images.services[3]] },
    { url: `${baseUrl}/es/testamentos-espana`, priority: 0.8, images: [images.services[3]] },
    { url: `${baseUrl}/es/herencias-internacionales`, priority: 0.8, images: [images.services[3]] },
    { url: `${baseUrl}/es/residencia-extranjeros`, priority: 0.8, images: [images.services[2]] },
    { url: `${baseUrl}/es/pension-espana`, priority: 0.8 },
    { url: `${baseUrl}/es/trabajar-espana`, priority: 0.8, images: [images.services[0]] },
    { url: `${baseUrl}/es/crear-empresa-espana`, priority: 0.8, images: [images.services[0]] },
    { url: `${baseUrl}/es/derecho-laboral`, priority: 0.8, images: [images.services[0]] },
    { url: `${baseUrl}/es/impuestos-espana`, priority: 0.8, images: [images.services[0]] },
    { url: `${baseUrl}/es/inmobiliaria`, priority: 0.9, images: [images.services[1]] },
    { url: `${baseUrl}/es/empresa-espana`, priority: 0.9, images: [images.services[0]] },
    { url: `${baseUrl}/es/derecho-familia`, priority: 0.9, images: [images.services[3]] },
    { url: `${baseUrl}/es/inmigracion`, priority: 0.9, images: [images.services[2]] },
  ].map(page => ({
    ...page,
    lastModified: currentDate,
    changeFrequency: 'monthly',
  }))

  // Legal/informational pages - lower priority
  const legalPages = [
    {
      url: `${baseUrl}/legalterms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacypolicy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Blog hub pages
  const blogHub = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Combine all pages
  return [...mainPages, ...hubPages, ...servicePages, ...englishPages, ...spanishPages, ...blogHub, ...blogPosts, ...legalPages]
}

