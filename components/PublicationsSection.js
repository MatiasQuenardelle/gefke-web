"use client"

import Link from "next/link"
import Image from "next/image"
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

// Category translation keys based on tags
const categoryKeys = {
  skat: "publications.categories.tax",
  pension: "publications.categories.pension",
  dobbeltbeskatning: "publications.categories.tax",
  ejendom: "publications.categories.property",
  bolig: "publications.categories.property",
  arv: "publications.categories.inheritance",
  testamente: "publications.categories.will",
  familie: "publications.categories.family",
  udlejning: "publications.categories.rental",
  guide: "publications.categories.guide",
  spanien: "publications.categories.spain"
}

function getPostImage(post) {
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

function getPostCategoryKey(post) {
  if (post.tags && post.tags.length > 0) {
    for (const tag of post.tags) {
      const lowerTag = tag.toLowerCase()
      for (const [key, translationKey] of Object.entries(categoryKeys)) {
        if (lowerTag.includes(key)) {
          return translationKey
        }
      }
    }
  }
  return "publications.categories.blog"
}

function formatDate(dateString, locale) {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()
  return `${day} / ${month} / ${year}`
}

function PublicationCard({ post }) {
  const { t, i18n } = useTranslation()
  const postImage = getPostImage(post)
  const categoryKey = getPostCategoryKey(post)
  const category = t(categoryKey)

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
          <Image
            src={postImage}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category badge at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-[#4AA07D] text-white text-sm font-medium py-2 px-4 text-center">
              {category}
            </div>
          </div>
        </div>
        <time className="text-gray-500 text-sm block mb-2">
          {formatDate(post.date, i18n.language)}
        </time>
        <h3 className={`${merri.className} text-lg text-gray-800 leading-snug group-hover:text-[#4AA07D] transition-colors`}>
          {post.title}
        </h3>
      </Link>
    </article>
  )
}

export default function PublicationsSection({ posts }) {
  const { t } = useTranslation()

  // Show only 3 most recent posts
  const displayPosts = posts.slice(0, 3)

  if (!displayPosts || displayPosts.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section header with green underline */}
        <div className="mb-10">
          <h2 className={`${merri.className} text-3xl md:text-4xl text-gray-800 inline-block`}>
            {t("publications.title")}
          </h2>
          <div className="h-1 w-24 bg-[#4AA07D] mt-2"></div>
        </div>

        {/* Publications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <PublicationCard key={post.slug} post={post} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#4AA07D] font-medium hover:text-[#5A7A6E] transition-colors"
          >
            {t("publications.viewAll")}
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
