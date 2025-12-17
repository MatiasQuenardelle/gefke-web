"use client"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function ArticlesSection() {
  const { t } = useTranslation()
  
  const services = [
    {
      title: t("homepage.services.service1.title"),
      description: t("homepage.services.service1.description"),
      href: "/services/selvstaendig-i-spanien",
      image: "/images/services/business.jpg",
      icon: "🏢",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: t("homepage.services.service2.title"),
      description: t("homepage.services.service2.description"),
      href: "/services/bolig-i-spanien",
      image: "/images/services/housing.jpg",
      icon: "🏠",
      color: "from-green-500 to-green-600",
    },
    {
      title: t("homepage.services.service3.title"),
      description: t("homepage.services.service3.description"),
      href: "/services/flytte-til-spanien",
      image: "/images/services/move.jpg",
      icon: "✈️",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: t("homepage.services.service4.title"),
      description: t("homepage.services.service4.description"),
      href: "/services/familie-og-arveret",
      image: "/images/services/family.jpg",
      icon: "👨‍👩‍👧‍👦",
      color: "from-purple-500 to-purple-600",
    },
  ]
  return (
    <section className="bg-gradient-to-b from-[#f9f9f9] via-white to-gray-50 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header with animation */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#003366]/10 rounded-full text-sm font-medium text-[#003366] mb-6 border border-[#003366]/20 hover:bg-[#003366]/15 transition-all duration-300">
            <div className="w-2 h-2 bg-[#003366] rounded-full animate-pulse"></div>
            {t("homepage.services.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 gradient-text">
            {t("homepage.services.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("homepage.services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-hover bg-white rounded-3xl shadow-luxury hover:shadow-luxury-hover 
                         overflow-hidden border border-gray-100 relative"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Card header with icon */}
              <div className="absolute top-6 left-6 z-20">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
              </div>

              {service.image && (
                <div className="w-full h-64 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`homepage.services.service${index + 1}.imageAlt`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Enhanced overlay with gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent 
                                  opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  ></div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-1000"></div>
                </div>
              )}

              <div className="p-8 pt-12 relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 
                               group-hover:text-[#003366] transition-colors duration-500 relative z-10"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg relative z-10">
                  {service.description}
                </p>

                {/* Enhanced CTA button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="group/btn inline-flex items-center gap-3 text-[#003366] font-semibold text-lg
                             hover:gap-6 transition-all duration-500 relative z-10
                             px-6 py-3 rounded-xl hover:bg-[#003366]/5 hover:shadow-lg"
                >
                  <span>{t("homepage.services.readMore")}</span>
                  <div className="relative">
                    <svg
                      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-500"
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
                    <div className="absolute inset-0 bg-[#003366]/20 rounded-full scale-0 group-hover/btn:scale-150 transition-transform duration-500"></div>
                  </div>
                </button>
              </div>

              {/* Hover effect overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 via-transparent to-blue-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-1000">
          <p className="text-gray-600 mb-6 text-lg">
            {t("homepage.services.ctaText")}
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-[#003366] to-[#004080] text-white rounded-xl font-semibold 
                       transition-all duration-500 hover:from-[#004080] hover:to-[#003366] hover:scale-105 
                       shadow-luxury hover:shadow-luxury-hover border border-[#003366]/20"
          >
            {t("homepage.services.ctaButton")}
          </button>
        </div>
      </div>
    </section>
  )
}
