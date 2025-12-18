"use client"

import { useTranslation } from "react-i18next"
import { use, useState, useEffect } from "react"
import Link from "next/link"
import ArticleMeta from "@/components/ArticleMeta"
import ReactMarkdown from 'react-markdown'

export default function BlogPostPage({ params }) {
  const { t } = useTranslation()
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  const [blogPost, setBlogPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/blog/${slug}`)
        if (response.ok) {
          const post = await response.json()
          setBlogPost(post)
        } else {
          setError('Blog post not found')
        }
      } catch (err) {
        console.error('Failed to fetch blog post:', err)
        setError('Failed to load blog post')
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug])
  
  if (loading) {
    return (
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <div className="max-w-4xl mx-auto text-center py-20">
          <p className="text-gray-600">{t("blog.loading") || "Indlæser..."}</p>
        </div>
      </main>
    )
  }

  if (error || !blogPost) {
    return (
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {t("blog.notFound") || "Blogindlæg ikke fundet"}
          </h1>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800"
          >
            ← {t("blog.backToBlog") || "Tilbage til blog"}
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
      <article className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 inline-block mb-4"
          >
            ← {t("blog.backToBlog") || "Tilbage til blog"}
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            {blogPost.title}
          </h1>
          {blogPost.description && (
            <p className="text-xl text-gray-700">{blogPost.description}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t">
            <span>{t("blog.author") || "Forfatter"}: {blogPost.author}</span>
            <span>•</span>
            <time dateTime={blogPost.date}>
              {new Date(blogPost.date).toLocaleDateString('da-DK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {blogPost.tags && blogPost.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {blogPost.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
          <ReactMarkdown>{blogPost.content}</ReactMarkdown>
        </div>

        <footer className="border-t pt-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← {t("blog.backToBlog") || "Tilbage til blog"}
          </Link>
        </footer>
      </article>
    </main>
  )
}

