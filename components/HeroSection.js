"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="w-full bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244] text-white relative overflow-hidden min-h-[50vh] flex items-center">
      {/* Enhanced background elements with animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float delay-1000 translate-y-36 -translate-x-36"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-20 py-8 md:py-12 z-10">
        {/* Enhanced Text Section */}
        <div className="md:w-1/2 space-y-4 z-10">
          <div className="space-y-3 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Juridisk ekspert i Spanien
            </div>
            <h1
              className={`${merri.className} text-3xl md:text-4xl xl:text-5xl leading-tight animate-slide-in-right text-shadow-lg`}
            >
              Jurist i
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-glow">
                Spanien
              </span>
            </h1>
          </div>

          <p className="max-w-lg text-sm md:text-base text-gray-200 leading-relaxed animate-fade-in-up delay-300 text-shadow">
            Juridisk rådgivning til dig i Spanien med ekspertise i både dansk og
            spansk ret.
            <span className="text-blue-200 font-medium">
              Professionel service siden 2017.
            </span>
          </p>

          {/* Enhanced trust indicators */}
          <div className="flex flex-wrap gap-3 text-xs text-gray-300 animate-fade-in-up delay-500">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <svg
                className="w-3 h-3 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              7+ års erfaring
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <svg
                className="w-3 h-3 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Dansk & Spansk ret
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <svg
                className="w-3 h-3 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Gratis konsultation
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in-up delay-700">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group px-6 py-3 bg-white text-[#003366] rounded-lg font-semibold 
                         transition-all duration-500 hover:bg-gray-100 hover:scale-105 
                         shadow-luxury hover:shadow-luxury-hover relative overflow-hidden text-sm"
            >
              <span className="relative z-10">Kontakt Mig</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => {
                const articlesSection = document.querySelector(
                  ".bg-gradient-to-b.from-\\[\\#f9f9f9\\]"
                )
                if (articlesSection) {
                  articlesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group px-6 py-3 border-2 border-white/30 rounded-lg font-semibold 
                         transition-all duration-500 hover:bg-white/10 hover:border-white/50 
                         backdrop-blur-sm hover:scale-105 relative overflow-hidden text-sm"
            >
              <span className="relative z-10">Læs mere</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Image Section - Dark Overlay Only on Text Area */}
        <div className="md:w-1/2 flex justify-center z-10 animate-slide-in-right delay-500">
          <div className="relative w-full max-w-md">
            <div className="relative group">
              {/* Floating elements around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-lg blur-sm animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400/20 rounded-full blur-sm animate-float delay-1000"></div>

              {/* Main image container - clear and visible */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm">
                <Image
                  src="/images/CristianGefke.png"
                  alt="Christian Gefke"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Dark overlay ONLY on bottom text area */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                  <div className="text-center px-4 py-4 text-xs md:text-sm">
                    <div className="backdrop-blur-sm bg-black/20 rounded-lg p-3 border border-white/20">
                      <p className="mb-2 text-shadow">
                        Vi varetager overgangen til et liv i Spanien for dig som
                        dansker.
                      </p>
                      <p className="font-bold text-blue-200 text-shadow">
                        Christian Gefke, Lanzarote Bar Association
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional badge with enhanced styling */}
              <div
                className="absolute -top-3 -right-3 bg-gradient-to-br from-white to-gray-100 text-[#003366] 
                              px-3 py-1 rounded-full text-xs font-semibold shadow-lg 
                              border border-gray-200 animate-float delay-500"
              >
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Certificeret Advokat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
