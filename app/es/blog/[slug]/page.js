import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import BlogPostClient from "@/app/blog/[slug]/BlogPostClient"

// Generate static params for Spanish blog posts at build time (no Danish fallbacks)
export async function generateStaticParams() {
  const posts = getAllPosts('es').filter(p => !p.isFallback)
  return posts.map((post) => ({ slug: post.slug }))
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Artículo no encontrado' }
  }

  const baseUrl = 'https://www.buxtongefke.es'

  return {
    title: `${post.title} | Christian Gefke - Abogado Español`,
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
      url: `${baseUrl}/es/blog/${slug}`,
      locale: 'es_ES',
      images: post.image ? [{ url: `${baseUrl}${post.image}`, alt: post.imageAlt || post.title }] : [],
    },
    alternates: {
      canonical: `${baseUrl}/es/blog/${slug}`,
    },
  }
}

// Default placeholder images for blog posts based on tags/categories
const categoryImages = {
  propiedad: "/images/services/housing.webp",
  inmobiliaria: "/images/services/housing.webp",
  impuestos: "/images/services/business.webp",
  empresa: "/images/services/business.webp",
  herencia: "/images/services/family.webp",
  familia: "/images/services/family.webp",
  alquiler: "/images/services/housing.webp",
  default: "/images/handshake.webp"
}

function getPostImage(post) {
  if (post.image) return post.image
  if (post.tags && post.tags.length > 0) {
    for (const tag of post.tags) {
      const lowerTag = tag.toLowerCase()
      for (const [key, image] of Object.entries(categoryImages)) {
        if (lowerTag.includes(key)) return image
      }
    }
  }
  return categoryImages.default
}

function getRelatedPosts(currentPost, allPosts, limit = 3) {
  if (!currentPost.tags || currentPost.tags.length === 0) {
    return allPosts.filter(p => p.slug !== currentPost.slug).slice(0, limit)
  }
  const currentTags = new Set(currentPost.tags.map(t => t.toLowerCase()))
  return allPosts
    .filter(p => p.slug !== currentPost.slug)
    .map(post => {
      const postTags = (post.tags || []).map(t => t.toLowerCase())
      const matchingTags = postTags.filter(t => currentTags.has(t)).length
      return { post, score: matchingTags }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(p => p.post)
}

export default async function SpanishBlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts('es')
  const relatedPosts = getRelatedPosts(post, allPosts)
  const postImage = getPostImage(post)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <BlogPostClient
      post={post}
      postImage={postImage}
      readingTime={readingTime}
      relatedPosts={relatedPosts}
      lang="es"
    />
  )
}
