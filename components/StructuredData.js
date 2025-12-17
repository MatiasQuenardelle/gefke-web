/**
 * Server component for rendering structured data (JSON-LD)
 * Can be used in server components (layouts) or client components
 */
import Script from "next/script"

export default function StructuredData({ schema, id }) {
  if (!schema) return null

  return (
    <Script
      id={id || "structured-data"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  )
}

