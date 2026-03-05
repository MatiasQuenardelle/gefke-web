import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('immigrationHub', '/services/immigration', 'en')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Legal Advice on Immigration to Spain",
  "description": "Comprehensive legal advice on immigration to Spain - residence permits, work permits, pension and all practical matters.",
  "url": "https://www.buxtongefke.es/services/immigration",
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
      "name": "Opholdstilladelse i Spanien",
      "url": "https://www.buxtongefke.es/residency-spain"
    },
    {
      "@type": "WebPage",
      "name": "Internationale opholdstilladelser",
      "url": "https://www.buxtongefke.es/opholdstilladelse"
    },
    {
      "@type": "WebPage",
      "name": "Pension i Spanien",
      "url": "https://www.buxtongefke.es/pension-spain"
    }
  ]
}

export default function ImmigrationHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={collectionSchema} id="collection-schema" />
      {children}
    </>
  )
}
