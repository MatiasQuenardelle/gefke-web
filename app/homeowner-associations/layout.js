import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('homeownerAssociations', '/homeowner-associations', 'da')

const articleSchema = getArticleSchemaFromKey('homeownerAssociations', '/homeowner-associations', 'da')

export default function HomeownerAssociationsLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

