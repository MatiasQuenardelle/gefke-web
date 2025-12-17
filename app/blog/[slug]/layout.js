import { getMetadata } from "@/lib/metadata"

// This is a placeholder - in production, you would generate metadata based on the blog post
export const metadata = getMetadata('blog', '/blog', 'da')

export default function BlogPostLayout({ children }) {
  return children
}

