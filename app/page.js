import HeroSection from "@/components/HeroSection"
import TrustedBySection from "@/components/TrustedBySection"
import dynamic from "next/dynamic"
import { getFAQPageSchema } from "@/lib/structuredData"
import StructuredData from "@/components/StructuredData"
import danish from "@/public/locales/da.json"

// Lazy load below-the-fold components for better initial page load
const ArticlesSection = dynamic(() => import("@/components/ArticlesSection"), {
  loading: () => <div className="min-h-[600px]" />, // Placeholder to prevent layout shift
})
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
  return (
    <>
      {faqSchema && <StructuredData schema={faqSchema} id="faq-schema" />}
      <main className="overflow-x-hidden relative">
      {/* Floating background elements for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-96 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <TrustedBySection />

        {/* Enhanced visual separation with animated gradient */}
        <div className="h-20 bg-gradient-to-b from-black via-gray-800 to-[#f9f9f9] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>

        <div className="content-visibility-auto">
          <ArticlesSection />
        </div>

        {/* Sophisticated transition with parallax effect */}
        <div className="h-16 bg-gradient-to-b from-[#f9f9f9] via-gray-100 to-gray-50 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        </div>

        <div className="content-visibility-auto">
          <Testimonials />
        </div>

        {/* Enhanced transition with depth */}
        <div className="h-16 bg-gradient-to-b from-[#0e3a5e] via-[#1a4b6b] to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-y-1"></div>
        </div>

        <div className="content-visibility-auto">
          <FAQSection />
        </div>

        {/* Sophisticated spacing with visual interest */}
        <div className="h-20 bg-gradient-to-b from-gray-50 via-gray-100 to-[#003366] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"></div>
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-purple-300/20 to-transparent"></div>
          </div>
        </div>

        {/* ContactCTA and ContactForm are already in layout.js, so removed from here */}

        {/* Transition to partners section */}
        <div className="h-16 bg-gradient-to-b from-[#003366] to-gray-50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-indigo-600/20"></div>
        </div>

        <div className="content-visibility-auto">
          <PartnersSection />
        </div>
      </div>
    </main>
    </>
  )
}
