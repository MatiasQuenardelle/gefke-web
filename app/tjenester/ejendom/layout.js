import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('hubEjendom', '/tjenester/ejendom', 'da')

const articleSchema = getArticleSchemaFromKey('hubEjendom', '/tjenester/ejendom', 'da')

export default function EjendomHubLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}
