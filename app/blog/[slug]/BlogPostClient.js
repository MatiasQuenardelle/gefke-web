"use client"

import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from 'react-markdown'
import { useTranslation } from "react-i18next"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] })

// Default placeholder images for blog posts based on tags/categories
const categoryImages = {
  skat: "/images/services/business.webp",
  pension: "/images/services/business.webp",
  dobbeltbeskatning: "/images/services/business.webp",
  ejendom: "/images/services/housing.webp",
  bolig: "/images/services/housing.webp",
  arv: "/images/services/family.webp",
  testamente: "/images/services/family.webp",
  familie: "/images/services/family.webp",
  udlejning: "/images/services/housing.webp",
  default: "/images/handshake.webp"
}

function getPostImageLocal(post) {
  if (post.image) return post.image

  if (post.tags && post.tags.length > 0) {
    for (const tag of post.tags) {
      const lowerTag = tag.toLowerCase()
      for (const [key, image] of Object.entries(categoryImages)) {
        if (lowerTag.includes(key)) {
          return image
        }
      }
    }
  }

  return categoryImages.default
}

function RelatedPostCard({ post }) {
  const { t, i18n } = useTranslation()
  const postImage = getPostImageLocal(post)

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
        <div className="relative h-36">
          <Image
            src={postImage}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-[#3A5A4E] group-hover:text-[#4AA07D] transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>
          <time className="text-xs text-gray-500" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(i18n.language === 'da' ? 'da-DK' : i18n.language === 'es' ? 'es-ES' : 'en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
        </div>
      </article>
    </Link>
  )
}

export default function BlogPostClient({ post, postImage, readingTime, relatedPosts }) {
  const { t, i18n } = useTranslation()

  const locale = i18n.language === 'da' ? 'da-DK' : i18n.language === 'es' ? 'es-ES' : 'en-US'

  return (
    <>
      {/* Hero with featured image */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src={postImage}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white text-sm mb-4 transition-colors"
            >
              {t("blog.backToBlog")}
            </Link>
            <h1 className={`${merri.className} text-3xl md:text-5xl text-white leading-tight`}>
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 md:px-8 -mt-8 relative z-10">
          {/* Meta info card */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author || 'Christian Gefke'}</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              {post.lastModified && post.lastModified !== post.date && (
                <>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>
                      {t("blog.updated")}: {new Date(post.lastModified).toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </>
              )}
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{readingTime} {t("blog.minRead")}</span>
              </div>
            </div>

            {post.description && (
              <p className="mt-4 text-lg text-gray-700 border-t pt-4">
                {post.description}
              </p>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-emerald-50 text-[#4AA07D] px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Article content */}
          <article className="bg-white rounded-xl shadow-sm p-6 md:p-10 mb-8">
            <div className="prose prose-lg max-w-none
              prose-headings:text-[#3A5A4E] prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:pb-3 prose-h2:border-gray-100
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-emerald-600 hover:prose-a:text-[#4AA07D] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2 prose-li:my-2 prose-li:leading-relaxed
              prose-ol:my-6 prose-ol:space-y-2
              prose-table:my-8
              prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:my-6
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
              prose-hr:my-10 prose-hr:border-gray-200
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>

          {/* Related posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className={`${merri.className} text-xl text-[#3A5A4E] mb-6`}>
                {t("blog.relatedPosts")}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </section>
          )}

          {/* Back to blog */}
          <div className="pb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-[#4AA07D] font-medium transition-colors"
            >
              {t("blog.backToBlog")}
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
