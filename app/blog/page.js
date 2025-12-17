"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import ArticleMeta from "@/components/ArticleMeta"

// This is a placeholder for the blog listing page
// In a real implementation, you would fetch blog posts from a CMS or markdown files
export default function BlogPage() {
  const { t } = useTranslation()
  
  // Placeholder blog posts - in production, these would come from a data source
  const blogPosts = [
    {
      slug: "nyheder-om-spansk-jura-2024",
      title: "Nyheder om spansk jura 2024",
      excerpt: "En oversigt over de vigtigste juridiske ændringer i Spanien i 2024, der påvirker danskere.",
      datePublished: "2024-12-01",
      dateModified: "2024-12-01"
    },
    {
      slug: "skattereform-i-spanien",
      title: "Skattereform i Spanien: Hvad betyder det for danskere?",
      excerpt: "En gennemgang af de seneste skattereformer i Spanien og deres konsekvenser for danske statsborgere.",
      datePublished: "2024-11-15",
      dateModified: "2024-11-15"
    }
  ]
  
  return (
    <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            {t("blog.title") || "Blog"}
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            {t("blog.subtitle") || "Juridiske nyheder og indsigt om spansk jura for danskere"}
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-700">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <time dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString('da-DK', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {t("blog.readMore") || "Læs mere →"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

