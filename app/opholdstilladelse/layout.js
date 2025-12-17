import { getMetadata } from "@/lib/metadata"
import { getArticleSchemaFromKey } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"

export const metadata = getMetadata('internationalInheritance', '/opholdstilladelse', 'da')

const articleSchema = getArticleSchemaFromKey('internationalInheritance', '/opholdstilladelse', 'da')

export default function OpholdstilladelseLayout({ children }) {
  return (
    <>
      <StructuredData schema={articleSchema} id="article-schema" />
      {children}
    </>
  )
}

