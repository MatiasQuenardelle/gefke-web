import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('businessHub', '/services/business', 'en')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Legal Advice on Business in Spain",
  "description": "Comprehensive legal advice on business in Spain - company formation, labor law, tax advice and holding structures.",
  "url": "https://www.buxtongefke.es/services/business",
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
      "name": "Starte virksomhed i Spanien",
      "url": "https://www.buxtongefke.es/starte-virksomhed-spanien"
    },
    {
      "@type": "WebPage",
      "name": "Arbejdsret i Spanien",
      "url": "https://www.buxtongefke.es/arbejdsret-i-spanien"
    },
    {
      "@type": "WebPage",
      "name": "Selvstændig og webshop i Spanien",
      "url": "https://www.buxtongefke.es/selvstaendig-webshop-spanien"
    },
    {
      "@type": "WebPage",
      "name": "Dansk holder spansk selskab",
      "url": "https://www.buxtongefke.es/dansk-holder-spansk-selskab"
    },
    {
      "@type": "WebPage",
      "name": "Skatterådgivning",
      "url": "https://www.buxtongefke.es/skat"
    },
    {
      "@type": "WebPage",
      "name": "Arbejde i Spanien",
      "url": "https://www.buxtongefke.es/work-in-spain"
    }
  ]
}

export default function BusinessHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={collectionSchema} id="collection-schema" />
      {children}
    </>
  )
}
