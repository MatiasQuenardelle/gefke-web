/**
 * Robots.txt for Christian Gefke Law Website
 * Next.js 15 App Router robots format
 * Automatically generates /robots.txt route at /robots.txt
 * 
 * This file tells search engine crawlers which pages they can and cannot access.
 * - Allows all crawlers to access all public pages
 * - Blocks access to API routes, private areas, and admin sections
 * - References the sitemap location for crawlers
 */

export default function robots() {
  const baseUrl = 'https://www.christiangefke.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

