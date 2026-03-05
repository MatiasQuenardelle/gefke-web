import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('familyLawHub', '/es/derecho-familia', 'es')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Asesoramiento Legal sobre Derecho de Familia en España",
  "description": "Asesoramiento legal integral sobre derecho de familia en España: divorcio, testamentos, herencias y elección de ley en relaciones internacionales.",
  "url": "https://www.buxtongefke.es/es/derecho-familia",
  "inLanguage": "es",
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
      "name": "Divorcio internacional en España",
      "url": "https://www.buxtongefke.es/es/divorcio-internacional"
    },
    {
      "@type": "WebPage",
      "name": "Testamentos en España",
      "url": "https://www.buxtongefke.es/es/testamentos-espana"
    },
    {
      "@type": "WebPage",
      "name": "Herencias internacionales",
      "url": "https://www.buxtongefke.es/es/herencias-internacionales"
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
