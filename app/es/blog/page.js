import { getAllPosts } from "@/lib/blog"
import BlogPageClient from "@/app/blog/BlogPageClient"

export const metadata = {
  title: 'Blog | Christian Gefke – Noticias Legales sobre Derecho Español',
  description: 'Lea noticias legales, información y actualizaciones sobre derecho español para extranjeros. Obtenga la información más reciente sobre reformas fiscales, cambios legales y consejos prácticos.',
  openGraph: {
    title: 'Blog – Noticias Legales sobre Derecho Español',
    description: 'Obtenga las últimas noticias legales e información sobre derecho español para extranjeros.',
  },
}

export default function SpanishBlogPage() {
  const blogPosts = getAllPosts('es')

  return <BlogPageClient blogPosts={blogPosts} lang="es" />
}
