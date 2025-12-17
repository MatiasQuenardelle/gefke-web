import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('startVirksomhed', '/starte-virksomhed-spanien', 'da')

const articleSchema = getArticleSchemaFromKey('startVirksomhed', '/starte-virksomhed-spanien', 'da')

export default function StartVirksomhedLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

