"use client"

import { useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] })

const DEFAULT_LANGUAGE = 'da'

// Extract base slug by removing language suffixes (-en, -es)
function getBaseSlug(slug) {
  return slug.replace(/-(en|es)$/, '')
}

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

function getPostImage(post) {
  if (post.image) return post.image

  // Find matching category image based on tags
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

function BlogHero() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-[#3A5A4E] text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 py-[6vh]">
        <h1 className={`${merri.className} text-4xl md:text-6xl leading-none`}>
          {t("blog.title")}
        </h1>
        <p className="text-lg md:text-xl font-light max-w-xl">
          {t("blog.subtitle")}
        </p>
      </div>
    </section>
  )
}

function FeaturedPost({ post }) {
  const { t, i18n } = useTranslation()
  const postImage = getPostImage(post)
  const currentLang = i18n.language || DEFAULT_LANGUAGE
  const postLang = post.lang || DEFAULT_LANGUAGE
  const showLangBadge = post.isFallback || (currentLang !== postLang && postLang !== currentLang)

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full min-h-[280px]">
            <Image
              src={postImage}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {t("blog.featuredArticle")}
              </span>
              {showLangBadge && (
                <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Dansk
                </span>
              )}
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags && post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-emerald-50 text-[#4AA07D] px-2.5 py-1 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className={`${merri.className} text-2xl md:text-3xl text-[#3A5A4E] mb-3 hover:text-[#4AA07D] transition-colors`}>
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(i18n.language === 'da' ? 'da-DK' : i18n.language === 'es' ? 'es-ES' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {post.author && (
                <>
                  <span className="text-gray-300">|</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

function LanguageBadge({ lang }) {
  const langNames = {
    da: 'Dansk',
    en: 'English',
    es: 'Español'
  }
  return (
    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs font-medium">
      {langNames[lang] || lang}
    </span>
  )
}

function BlogCard({ post }) {
  const { t, i18n } = useTranslation()
  const postImage = getPostImage(post)
  const currentLang = i18n.language || DEFAULT_LANGUAGE
  const postLang = post.lang || DEFAULT_LANGUAGE
  const showLangBadge = post.isFallback || (currentLang !== postLang && postLang !== currentLang)

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block flex-1 flex flex-col">
        <div className="relative h-48">
          <Image
            src={postImage}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {showLangBadge && (
            <div className="absolute top-2 right-2">
              <LanguageBadge lang={postLang} />
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags && post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className={`${merri.className} text-lg text-[#3A5A4E] mb-2 hover:text-[#4AA07D] transition-colors line-clamp-2`}>
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(i18n.language === 'da' ? 'da-DK' : i18n.language === 'es' ? 'es-ES' : 'en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            <span className="text-emerald-600 font-medium hover:text-[#4AA07D]">
              {t("blog.readMore")} →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function BlogPageClient({ blogPosts }) {
  const { t, i18n } = useTranslation()

  // Filter posts by current language with Danish fallback
  // Uses base slug (without -en/-es suffix) to group translations together
  const filteredPosts = useMemo(() => {
    const currentLang = i18n.language || DEFAULT_LANGUAGE
    const postsInLang = []
    const baseSlugsAdded = new Set()

    // First, add posts in the current language
    for (const post of blogPosts) {
      const postLang = post.lang || DEFAULT_LANGUAGE
      const baseSlug = getBaseSlug(post.slug)
      if (postLang === currentLang && !baseSlugsAdded.has(baseSlug)) {
        postsInLang.push(post)
        baseSlugsAdded.add(baseSlug)
      }
    }

    // Then add Danish fallback posts for base slugs we don't have yet
    if (currentLang !== DEFAULT_LANGUAGE) {
      for (const post of blogPosts) {
        const postLang = post.lang || DEFAULT_LANGUAGE
        const baseSlug = getBaseSlug(post.slug)
        if (postLang === DEFAULT_LANGUAGE && !baseSlugsAdded.has(baseSlug)) {
          postsInLang.push({ ...post, isFallback: true })
          baseSlugsAdded.add(baseSlug)
        }
      }
    }

    return postsInLang.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  }, [blogPosts, i18n.language])

  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  return (
    <>
      <BlogHero />

      <main className="bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
          {blogPosts.length === 0 ? (
            <div className="text-center text-gray-600 py-16 bg-white rounded-xl shadow-sm">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-lg">{t("blog.noPosts")}</p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Post */}
              {featuredPost && (
                <section>
                  <FeaturedPost post={featuredPost} />
                </section>
              )}

              {/* Other Posts Grid */}
              {otherPosts.length > 0 && (
                <section>
                  <h2 className={`${merri.className} text-2xl text-[#3A5A4E] mb-6`}>
                    {t("blog.latestArticles")}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
