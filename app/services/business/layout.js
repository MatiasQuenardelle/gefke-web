import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('businessHub', '/services/business', 'da')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Juridisk Rådgivning om Erhverv i Spanien",
  "description": "Omfattende juridisk rådgivning til danskere om erhverv i Spanien - virksomhedsetablering, arbejdsret, skatterådgivning og holding-strukturer.",
  "url": "https://www.buxtongefke.es/services/business",
  "inLanguage": ["da", "en", "es"],
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
