import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/blog"
import BlogPostClient from "./BlogPostClient"

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Blog post ikke fundet',
    }
  }

  const baseUrl = 'https://www.buxtongefke.es'

  return {
    title: `${post.title} | Christian Gefke - Spansk Advokat`,
    description: post.description,
    keywords: post.keywords || post.tags,
    authors: [{ name: post.author || 'Christian Gefke' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified || post.date,
      authors: [post.author || 'Christian Gefke'],
      tags: post.tags,
      url: `${baseUrl}/blog/${slug}`,
      images: post.image ? [{ url: `${baseUrl}${post.image}`, alt: post.imageAlt || post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
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

// Get related posts based on matching tags
function getRelatedPosts(currentPost, allPosts, limit = 3) {
  if (!currentPost.tags || currentPost.tags.length === 0) {
    return allPosts.filter(p => p.slug !== currentPost.slug).slice(0, limit)
  }

  const currentTags = new Set(currentPost.tags.map(t => t.toLowerCase()))

  const postsWithScore = allPosts
    .filter(p => p.slug !== currentPost.slug)
    .map(post => {
      const postTags = (post.tags || []).map(t => t.toLowerCase())
      const matchingTags = postTags.filter(t => currentTags.has(t)).length
      return { post, score: matchingTags }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return postsWithScore.map(p => p.post)
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const relatedPosts = getRelatedPosts(post, allPosts)
  const postImage = getPostImage(post)

  // Calculate reading time (approx 200 words per minute)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <BlogPostClient
      post={post}
      postImage={postImage}
      readingTime={readingTime}
      relatedPosts={relatedPosts}
    />
  )
}
