import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('danishHolding', '/dansk-holder-spansk-selskab', 'da')

const articleSchema = getArticleSchemaFromKey('danishHolding', '/dansk-holder-spansk-selskab', 'da')

export default function DanskHolderSpanskSelskabLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

