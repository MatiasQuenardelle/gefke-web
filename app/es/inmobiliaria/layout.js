import { getMetadata } from "@/lib/metadata"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('realEstateHub', '/es/inmobiliaria', 'es')

// CollectionPage schema for hub page
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Asesoramiento Legal sobre Inmuebles en España",
  "description": "Asesoramiento legal integral sobre todos los aspectos de bienes raíces en España: compra, venta, alquiler, hipotecas, comunidades de propietarios e inversiones.",
  "url": "https://www.buxtongefke.es/es/inmobiliaria",
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
      "name": "Compra y venta de inmuebles en España",
      "url": "https://www.buxtongefke.es/es/comprar-propiedad-espana"
    },
    {
      "@type": "WebPage",
      "name": "Inversión inmobiliaria en España",
      "url": "https://www.buxtongefke.es/es/inversion-inmobiliaria"
    },
    {
      "@type": "WebPage",
      "name": "Hipotecas en España",
      "url": "https://www.buxtongefke.es/es/hipotecas-espana"
    },
    {
      "@type": "WebPage",
      "name": "Comunidades de propietarios",
      "url": "https://www.buxtongefke.es/es/comunidades-propietarios"
    },
    {
      "@type": "WebPage",
      "name": "Contratos de alquiler en España",
      "url": "https://www.buxtongefke.es/es/alquiler-espana"
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
