import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('residency', '/residency-spain', 'da')

const articleSchema = getArticleSchemaFromKey('residency', '/residency-spain', 'da')

export default function ResidencyLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

