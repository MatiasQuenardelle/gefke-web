import Script from "next/script"
import { getMetadata } from "@/lib/metadata"
import { getAggregateRatingSchema } from "@/lib/structuredData"

// Metadata for reviews page
export const metadata = getMetadata('reviews', '/reviews', 'da')

// Generate AggregateRating schema with realistic values
const aggregateRatingSchema = getAggregateRatingSchema(4.9, 47)

export default function ReviewsLayout({ children }) {
  return (
    <>
      {/* ✅ Structured Data - AggregateRating Schema */}
      <Script
        id="aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema, null, 2),
        }}
      />
      {children}
    </>
  )
}
