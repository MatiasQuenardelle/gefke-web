import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog"

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
      canonical: `${baseUrl}/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
      <article className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 inline-block mb-4"
          >
            ← Tilbage til blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl text-gray-700">{post.description}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pt-4 border-t">
            <span>Forfatter: {post.author || 'Christian Gefke'}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('da-DK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.lastModified && post.lastModified !== post.date && (
              <>
                <span>•</span>
                <span>
                  Opdateret: {new Date(post.lastModified).toLocaleDateString('da-DK', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </>
            )}
            {post.tags && post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
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
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="border-t pt-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Tilbage til blog
          </Link>
        </footer>
      </article>
    </main>
  )
}
