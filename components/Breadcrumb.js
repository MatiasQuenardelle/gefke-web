"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { ChevronRight, Home } from "lucide-react"

/**
 * Breadcrumb Navigation Component
 * 
 * Provides hierarchical navigation and improves SEO by showing page structure.
 * Uses structured data for better search engine understanding.
 * 
 * @param {Array} items - Array of {label: string, href: string} objects
 * @param {string} currentPage - Label for current page (no link)
 */
export default function Breadcrumb({ items = [], currentPage }) {
  const { t } = useTranslation()

  // Build breadcrumb structure
  const breadcrumbItems = [
    { label: t("breadcrumb.home") || "Hjem", href: "/" },
    ...items,
    ...(currentPage ? [{ label: currentPage, href: null }] : [])
  ]

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href ? { "item": `https://www.christiangefke.com${item.href}` } : {})
    }))
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Visual Breadcrumb */}
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
                  className="hover:text-blue-600 transition-colors flex items-center gap-1"
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

