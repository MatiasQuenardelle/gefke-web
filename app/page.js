import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import TrustedBySection from "@/components/TrustedBySection"
import ArticlesSection from "@/components/ArticlesSection"
import FAQSection from "@/components/FAQ"
import Testimonials from "@/components/Testimonials"
import PartnersSection from "@/components/PartnersSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ArticlesSection />
      <Testimonials />
      <FAQSection />
      <PartnersSection />
    </>
  )
}
