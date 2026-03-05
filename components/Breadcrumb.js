import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

/**
 * Breadcrumb Navigation Component
 *
 * @param {Array} items - Array of {label: string, href: string} objects
 * @param {string} currentPage - Label for current page (no link)
 * @param {string} homeLabel - Label for the home link (defaults to "Hjem")
 */
export default function Breadcrumb({ items = [], currentPage, homeLabel = "Hjem" }) {
  const breadcrumbItems = [
    { label: homeLabel, href: "/" },
    ...items,
    ...(currentPage ? [{ label: currentPage, href: null }] : [])
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href ? { "item": `https://www.buxtongefke.es${item.href}` } : {})
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav
        className="bg-gray-50 border-b border-gray-200 py-3 px-6 md:px-16 lg:px-32"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2 text-sm text-gray-600 max-w-7xl mx-auto">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-emerald-600 transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
