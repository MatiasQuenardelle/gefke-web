import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('realEstateInvestment', '/real-estate-investment-spain', 'da')

const articleSchema = getArticleSchemaFromKey('realEstateInvestment', '/real-estate-investment-spain', 'da')

export default function RealEstateInvestmentLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

