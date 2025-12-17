import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('blog', '/blog', 'da')

export default function BlogLayout({ children }) {
  return children
}

