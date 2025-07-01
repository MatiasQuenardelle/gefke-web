"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })

export default function ContactCTA() {
  const router = useRouter()

  return (
    <section className="w-full bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244] text-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float delay-1000 translate-y-36 translate-x-36"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-[10vh] md:py-[12vh] z-10">
        {/* Enhanced Portrait Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1 z-10">
          <div className="relative group animate-slide-in-right">
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-400/20 rounded-full blur-lg animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-purple-400/20 rounded-lg blur-lg animate-float delay-1000"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:shadow-luxury-hover transition-all duration-700">
              <Image
                src="/images/CristianGefke.png"
                alt="Christian Gefke"
                width={480}
                height={560}
                priority
                className="w-full max-w-xs md:max-w-sm h-auto object-cover 
                           transition-transform duration-700 group-hover:scale-110"
              />

              {/* Enhanced overlay effect */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>

            {/* Enhanced floating badge */}
            <div
              className="absolute -top-4 -right-4 bg-gradient-to-br from-white to-gray-100 text-[#003366] 
                            px-6 py-3 rounded-2xl text-sm font-bold shadow-luxury 
                            border border-gray-200 animate-float delay-500 group-hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-xs text-gray-600">Medlem af</div>
                  <div className="font-bold">Lanzarote Bar Association</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Copy Section */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left order-1 md:order-2 z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Klar til at komme i gang?
            </div>
          </div>

          <h2
            className={`${merri.className} text-4xl md:text-6xl lg:text-7xl leading-tight animate-slide-in-right delay-300 text-shadow-lg`}
          >
            Få den juridiske
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              støtte du fortjener
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 max-w-md md:max-w-none mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-500 text-shadow">
            Uanset om du flytter, investerer eller blot har brug for pålidelig
            rådgivning, er jeg her for at guide dig gennem hver fase.
            <span className="text-blue-200 font-semibold block mt-2">
              Lad os tale om, hvordan jeg kan sætte min erfaring i arbejde for
              dig.
            </span>
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up delay-700">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group px-10 py-5 bg-white text-[#003366] rounded-xl font-bold text-lg
                         transition-all duration-500 hover:bg-gray-100 hover:scale-105 
                         shadow-luxury hover:shadow-luxury-hover relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Kontakt Mig Nu
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </button>

            <button
              onClick={() => {
                window.open("tel:+4593841822", "_self")
              }}
              className="group px-10 py-5 border-2 border-white/30 rounded-xl font-bold text-lg
                         transition-all duration-500 hover:bg-white/10 hover:border-white/50 
                         backdrop-blur-sm hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Ring Direkte
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-8 text-sm text-gray-300 animate-fade-in-up delay-1000">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              </div>
              <div>
                <div className="font-semibold text-white">7+ års erfaring</div>
                <div className="text-xs">Erfaren jurist</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">
                  Dansk & Spansk ret
                </div>
                <div className="text-xs">Tosproglig ekspertise</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">
                  Gratis konsultation
                </div>
                <div className="text-xs">Første møde uden omkostninger</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
