import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('realEstateBuySell', '/real-estate-buy-sell-spain', 'da')

const articleSchema = getArticleSchemaFromKey('realEstateBuySell', '/real-estate-buy-sell-spain', 'da')

export default function RealEstateLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

