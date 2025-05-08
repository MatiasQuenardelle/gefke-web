import HeroSection from "@/components/HeroSection"
import TrustedBySection from "@/components/TrustedBySection"
import ArticlesSection from "@/components/ArticlesSection"
import FAQSection from "@/components/FAQ"
import Testimonials from "@/components/Testimonials"
import PartnersSection from "@/components/PartnersSection"
import ContactForm from "@/components/ContactForm"
import ContactCTA from "@/components/ContactCTA"
import ContactCTAWrapper from "@/components/ContactCTAWrapper"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ArticlesSection />
      <Testimonials />
      <FAQSection />
      <ContactForm />
      <PartnersSection />
    </>
  )
}
