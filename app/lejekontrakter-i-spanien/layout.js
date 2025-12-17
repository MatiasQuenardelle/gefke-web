import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('rentalContracts', '/lejekontrakter-i-spanien', 'da')

const articleSchema = getArticleSchemaFromKey('rentalContracts', '/lejekontrakter-i-spanien', 'da')

export default function LejekontrakterLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

