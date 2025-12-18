import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('hubFamilie', '/tjenester/familie', 'da')

const articleSchema = getArticleSchemaFromKey('hubFamilie', '/tjenester/familie', 'da')

export default function FamilieHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}
