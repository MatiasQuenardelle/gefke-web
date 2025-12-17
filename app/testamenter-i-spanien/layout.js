import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('testamenter', '/testamenter-i-spanien', 'da')

const articleSchema = getArticleSchemaFromKey('testamenter', '/testamenter-i-spanien', 'da')

export default function TestamenterLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

