import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('laborLaw', '/arbejdsret-i-spanien', 'da')

const articleSchema = getArticleSchemaFromKey('laborLaw', '/arbejdsret-i-spanien', 'da')

export default function ArbejdsretLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

