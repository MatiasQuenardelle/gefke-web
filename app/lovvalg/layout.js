import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('lawChoice', '/lovvalg', 'da')

const articleSchema = getArticleSchemaFromKey('lawChoice', '/lovvalg', 'da')

export default function LovvalgLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

