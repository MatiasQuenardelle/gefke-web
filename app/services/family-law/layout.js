import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('familyLawHub', '/services/family-law', 'da')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Juridisk Rådgivning om Familieret i Spanien",
  "description": "Omfattende juridisk rådgivning til danskere om familieret i Spanien - skilsmisse, testamenter, arv og lovvalg.",
  "url": "https://www.buxtongefke.es/services/family-law",
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
      "name": "Skilsmisse i Spanien",
      "url": "https://www.buxtongefke.es/divorce-spain"
    },
    {
      "@type": "WebPage",
      "name": "Testamenter i Spanien",
      "url": "https://www.buxtongefke.es/testamenter-i-spanien"
    },
    {
      "@type": "WebPage",
      "name": "Lovvalg i internationale forhold",
      "url": "https://www.buxtongefke.es/lovvalg"
    }
  ]
}

export default function FamilyLawHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={collectionSchema} id="collection-schema" />
      {children}
    </>
  )
}
