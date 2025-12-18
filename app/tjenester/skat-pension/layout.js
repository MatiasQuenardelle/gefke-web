import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('hubSkatPension', '/tjenester/skat-pension', 'da')

const articleSchema = getArticleSchemaFromKey('hubSkatPension', '/tjenester/skat-pension', 'da')

export default function SkatPensionHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}
