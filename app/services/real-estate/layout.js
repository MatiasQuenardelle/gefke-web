import { getMetadata } from "@/lib/metadata"
import { schemaToScript } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('realEstateHub', '/services/real-estate', 'en')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Legal Advice on Real Estate in Spain",
  "description": "Comprehensive legal advice on all aspects of real estate in Spain - buying, selling, renting, mortgages, homeowner associations and investments.",
  "url": "https://www.buxtongefke.es/services/real-estate",
  "inLanguage": "en",
  "about": {
    "@type": "Service",
    "serviceType": "Legal Services",
    "provider": {
      "@type": "LegalService",
      "name": "Christian Gefke - Spansk Advokat"
    }
  },
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Køb og salg af fast ejendom i Spanien",
      "url": "https://www.buxtongefke.es/real-estate-buy-sell-spain"
    },
    {
      "@type": "WebPage",
      "name": "Ejendomsinvestering i Spanien",
      "url": "https://www.buxtongefke.es/real-estate-investment-spain"
    },
    {
      "@type": "WebPage",
      "name": "Realkredit og finansiering",
      "url": "https://www.buxtongefke.es/realkredit"
    },
    {
      "@type": "WebPage",
      "name": "Ejerforeninger",
      "url": "https://www.buxtongefke.es/homeowner-associations"
    },
    {
      "@type": "WebPage",
      "name": "Lejekontrakter i Spanien",
      "url": "https://www.buxtongefke.es/lejekontrakter-i-spanien"
    }
  ]
}

export default function RealEstateHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={collectionSchema} id="collection-schema" />
      {children}
    </>
  )
}
