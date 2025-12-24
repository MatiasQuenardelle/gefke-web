"use client"

import { useTranslation } from "react-i18next"
import StructuredData from "./StructuredData"
import { getFAQPageSchema } from "@/lib/structuredData"

/**
 * FAQSection component
 * Displays an FAQ section with schema markup for SEO
 *
 * @param {string} translationKey - The translation key for FAQ data (e.g., "skat")
 */
export default function FAQSection({ translationKey }) {
  const { t } = useTranslation()

  // Get FAQ data from translations
  const faqData = t(`${translationKey}.faqs`, { returnObjects: true })

  // If no FAQ data exists, don't render anything
  if (!faqData || !Array.isArray(faqData) || faqData.length === 0) {
    return null
  }

  // Prepare FAQ schema
  const faqSchema = getFAQPageSchema(faqData)

  return (
    <>
      {/* FAQ Schema Markup */}
      <StructuredData data={faqSchema} />

      {/* FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#4AA07D]">
          {t(`${translationKey}.faqTitle`) || "Ofte Stillede Spørgsmål"}
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#4AA07D] transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:bg-emerald-50 transition-colors">
                <span className="text-lg">{faq.question}</span>
                <svg
                  className="w-5 h-5 text-[#4AA07D] transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-5 pt-2 text-gray-700 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
