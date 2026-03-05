import { getAllPosts } from "@/lib/blog"
import BlogPageClient from "@/app/blog/BlogPageClient"

export const metadata = {
  title: 'Blog | Christian Gefke – Legal News on Spanish Law',
  description: 'Read legal news, insights and updates on Spanish law for foreigners. Get the latest information on tax reforms, legal changes and practical advice.',
  openGraph: {
    title: 'Blog – Legal News on Spanish Law',
    description: 'Get the latest legal news and insights on Spanish law for foreigners.',
  },
}

export default function EnglishBlogPage() {
  const blogPosts = getAllPosts('en')

  return <BlogPageClient blogPosts={blogPosts} lang="en" />
}
