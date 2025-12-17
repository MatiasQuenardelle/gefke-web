import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('workInSpain', '/work-in-spain', 'da')

const articleSchema = getArticleSchemaFromKey('workInSpain', '/work-in-spain', 'da')

export default function WorkInSpainLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

