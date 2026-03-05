import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('familyLawHub', '/services/family-law', 'en')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Legal Advice on Family Law in Spain",
  "description": "Comprehensive legal advice on family law in Spain - divorce, wills, inheritance and choice of law in international relationships.",
  "url": "https://www.buxtongefke.es/services/family-law",
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
