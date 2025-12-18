"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BlogPage() {
  const { t } = useTranslation()
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    // Fetch blog posts on the client side
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog')
        if (response.ok) {
          const posts = await response.json()
          setBlogPosts(posts)
        }
      } catch (error) {
        console.error('Failed to fetch blog posts:', error)
        // Fallback to empty array
        setBlogPosts([])
      }
    }
    fetchPosts()
  }, [])
  
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
          {blogPosts.length === 0 ? (
            <div className="text-center text-gray-600 py-8">
              {t("blog.loading") || "Indlæser blogindlæg..."}
            </div>
          ) : (
            blogPosts.map((post) => (
              <article key={post.slug} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('da-DK', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.tags && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium ml-auto"
                  >
                    {t("blog.readMore") || "Læs mere →"}
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  )
}

