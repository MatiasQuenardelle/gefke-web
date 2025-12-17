import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('divorce', '/divorce-spain', 'da')

const articleSchema = getArticleSchemaFromKey('divorce', '/divorce-spain', 'da')

export default function DivorceLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

