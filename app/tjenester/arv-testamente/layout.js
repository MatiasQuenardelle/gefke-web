import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('hubArvTestamente', '/tjenester/arv-testamente', 'da')

const articleSchema = getArticleSchemaFromKey('hubArvTestamente', '/tjenester/arv-testamente', 'da')

export default function ArvTestamenteHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}
