"use client"

import { useTranslation } from "react-i18next"
import { use } from "react"
import Link from "next/link"
import ArticleMeta from "@/components/ArticleMeta"

// This is a placeholder for individual blog post pages
// In production, you would fetch the blog post content based on the slug
export default function BlogPostPage({ params }) {
  const { t } = useTranslation()
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  
  // Placeholder content - in production, this would come from a CMS or markdown files
  const blogPost = {
    slug: slug,
    title: "Blog Post Title",
    content: "This is placeholder content for a blog post. In a real implementation, you would fetch this from a CMS, markdown files, or a database.",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01"
  }
  
  return (
    <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
      <article className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <Link 
            href="/blog"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← {t("blog.backToBlog") || "Tilbage til blog"}
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            {blogPost.title}
          </h1>
        </header>

        <ArticleMeta 
          translationKey="blog" 
          author="Christian Gefke"
        />

        <div className="prose prose-lg max-w-none">
          <p>{blogPost.content}</p>
          <p className="text-gray-600 italic">
            Note: This is a placeholder blog post. In production, you would implement a proper blog system with content management.
          </p>
        </div>
      </article>
    </main>
  )
}

