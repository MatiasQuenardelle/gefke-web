import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('blog', '/en/blog', 'en')

export default function EnglishBlogLayout({ children }) {
  return children
}
