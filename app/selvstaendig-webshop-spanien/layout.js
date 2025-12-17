import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('webshop', '/selvstaendig-webshop-spanien', 'da')

const articleSchema = getArticleSchemaFromKey('webshop', '/selvstaendig-webshop-spanien', 'da')

export default function SelvstaendigWebshopLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

