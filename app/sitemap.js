/**
 * Sitemap for Christian Gefke Law Website
 * Next.js 15 App Router sitemap format
 * Automatically generates /sitemap.xml
 * Includes images for better SEO
 */

export default function sitemap() {
  const baseUrl = 'https://www.buxtongefke.es'
  const currentDate = new Date()

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

  // Combine all pages
  return [...mainPages, ...hubPages, ...servicePages, ...legalPages]
}

