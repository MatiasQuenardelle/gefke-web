import { getAllPosts } from "@/lib/blog"
import BlogPageClient from "./BlogPageClient"

export const metadata = {
  title: 'Blog | Christian Gefke – Juridiske nyheder om spansk jura',
  description: 'Læs juridiske nyheder, indsigt og opdateringer om spansk jura for danskere. Få de seneste informationer om skattereformer, lovændringer og praktiske råd.',
  openGraph: {
    title: 'Blog – Juridiske nyheder om spansk jura',
    description: 'Få de seneste juridiske nyheder og indsigt om spansk jura for danskere.',
  },
}

export default function BlogPage() {
  const blogPosts = getAllPosts()

  return <BlogPageClient blogPosts={blogPosts} />
}
