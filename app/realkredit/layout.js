import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('realkredit', '/realkredit', 'da')

const articleSchema = getArticleSchemaFromKey('realkredit', '/realkredit', 'da')

export default function RealkreditLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

