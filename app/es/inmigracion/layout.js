import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('immigrationHub', '/es/inmigracion', 'es')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Asesoramiento Legal sobre Inmigración a España",
  "description": "Asesoramiento legal integral sobre inmigración a España: permisos de residencia, permisos de trabajo, pensión y todos los asuntos prácticos.",
  "url": "https://www.buxtongefke.es/es/inmigracion",
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
      "name": "Residencia para extranjeros en España",
      "url": "https://www.buxtongefke.es/es/residencia-extranjeros"
    },
    {
      "@type": "WebPage",
      "name": "Herencias internacionales",
      "url": "https://www.buxtongefke.es/es/herencias-internacionales"
    },
    {
      "@type": "WebPage",
      "name": "Pensión en España",
      "url": "https://www.buxtongefke.es/es/pension-espana"
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
