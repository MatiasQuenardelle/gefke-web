import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('businessHub', '/es/empresa-espana', 'es')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Asesoramiento Legal sobre Negocios en España",
  "description": "Asesoramiento legal integral sobre negocios en España: constitución de empresas, derecho laboral, asesoramiento fiscal y estructuras holding.",
  "url": "https://www.buxtongefke.es/es/empresa-espana",
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
      "name": "Crear empresa en España",
      "url": "https://www.buxtongefke.es/es/crear-empresa-espana"
    },
    {
      "@type": "WebPage",
      "name": "Derecho laboral en España",
      "url": "https://www.buxtongefke.es/es/derecho-laboral"
    },
    {
      "@type": "WebPage",
      "name": "Impuestos en España",
      "url": "https://www.buxtongefke.es/es/impuestos-espana"
    },
    {
      "@type": "WebPage",
      "name": "Trabajar en España",
      "url": "https://www.buxtongefke.es/es/trabajar-espana"
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
