import HeroSection from "@/components/HeroSection"
import TrustedBySection from "@/components/TrustedBySection"
import dynamic from "next/dynamic"
import { getFAQPageSchema } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"
import danish from "@/public/locales/da.json"
import { getAllPosts } from "@/lib/blog"
import PublicationsSection from "@/components/PublicationsSection"

// Lazy load below-the-fold components for better initial page load
const FAQSection = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[400px]" />, // Placeholder to prevent layout shift
})
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[500px]" />, // Placeholder to prevent layout shift
})
const PartnersSection = dynamic(() => import("@/components/PartnersSection"), {
  loading: () => <div className="min-h-[400px]" />, // Placeholder to prevent layout shift
})

// Generate FAQ schema for homepage
const faqData = danish.homepage?.faq || {}
const faqs = [
  {
    question: faqData.faq1?.question || "",
    answer: faqData.faq1?.answer || ""
  },
  {
    question: faqData.faq2?.question || "",
    answer: faqData.faq2?.answer || ""
  },
  {
    question: faqData.faq3?.question || "",
    answer: faqData.faq3?.answer || ""
  },
  {
    question: faqData.faq4?.question || "",
    answer: faqData.faq4?.answer || ""
  }
].filter(faq => faq.question && faq.answer) // Only include FAQs with both question and answer

const faqSchema = faqs.length > 0 ? getFAQPageSchema(faqs) : null

export default function Home() {
  const blogPosts = getAllPosts()

  return (
    <>
      {faqSchema && <StructuredData schema={faqSchema} id="faq-schema" />}
      <main className="overflow-x-hidden relative">
      {/* Floating background elements for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-96 right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <TrustedBySection />

        {/* Enhanced visual separation with animated gradient */}
        <div className="h-20 bg-gradient-to-b from-black via-gray-800 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>

        {/* Publications Section */}
        <div className="content-visibility-auto">
          <PublicationsSection posts={blogPosts} />
        </div>

        {/* Sophisticated transition with parallax effect */}
        <div className="h-16 bg-gradient-to-b from-white via-gray-100 to-gray-50 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10"></div>
        </div>

        <div className="content-visibility-auto">
          <Testimonials />
        </div>

        {/* Enhanced transition with depth */}
        <div className="h-16 bg-gradient-to-b from-[#3A5A4E] via-[#4AA07D] to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-y-1"></div>
        </div>

        <div className="content-visibility-auto">
          <FAQSection />
        </div>

        {/* Sophisticated spacing with visual interest */}
        <div className="h-20 bg-gradient-to-b from-gray-50 via-gray-100 to-[#3A5A4E] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-emerald-300/20 to-transparent"></div>
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-teal-300/20 to-transparent"></div>
          </div>
        </div>

        {/* ContactCTA and ContactForm are already in layout.js, so removed from here */}

        {/* Transition to partners section */}
        <div className="h-16 bg-gradient-to-b from-[#3A5A4E] to-gray-50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-teal-600/20"></div>
        </div>

        <div className="content-visibility-auto">
          <PartnersSection />
        </div>
      </div>
    </main>
    </>
  )
}
