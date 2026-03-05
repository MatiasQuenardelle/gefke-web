import Image from "next/image"
import Link from "next/link"
import english from "@/public/locales/en.json"

const t = english

export default function EnglishHomePage() {
  const services = [
    {
      title: t.realEstateHub?.title || "Real Estate in Spain",
      description: t.realEstateHub?.subtitle || "",
      href: "/services/real-estate",
      icon: "🏠",
    },
    {
      title: t.businessHub?.title || "Business in Spain",
      description: t.businessHub?.subtitle || "",
      href: "/services/business",
      icon: "🏢",
    },
    {
      title: t.familyLawHub?.title || "Family Law",
      description: t.familyLawHub?.subtitle || "",
      href: "/services/family-law",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: t.immigrationHub?.title || "Immigration to Spain",
      description: t.immigrationHub?.subtitle || "",
      href: "/services/immigration",
      icon: "✈️",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#3A5A4E] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t.homepage?.hero?.title1 || "Danish Lawyer"}{" "}
              <span className="text-emerald-300">{t.homepage?.hero?.title2 || "in Spain"}</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl">
              {t.homepage?.hero?.description || "Professional legal assistance for Scandinavians in Spain. Real estate, business, family law and immigration."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/en/contact"
                className="px-8 py-4 bg-white text-[#3A5A4E] rounded-xl font-bold transition-all duration-300 hover:bg-emerald-50 hover:scale-105 shadow-lg"
              >
                {t.homepage?.hero?.ctaButton || "Contact me"}
              </Link>
              <Link
                href="/en/about"
                className="px-8 py-4 border-2 border-white/30 rounded-xl font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                {t.homepage?.hero?.secondaryButton || "About me"}
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/CristianGefke.png"
              alt="Christian Gefke - Authorized Spanish lawyer (abogado)"
              width={350}
              height={400}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.homepage?.services?.title || "Our Services"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.homepage?.services?.subtitle || "Comprehensive legal assistance for all your needs in Spain."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4AA07D] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3A5A4E] text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.contactCTA?.heading || "Get the legal support you deserve"}
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            {t.contactCTA?.description || "Whether you're moving, investing, or need reliable advice, I'm here to guide you every step of the way."}
          </p>
          <Link
            href="/en/contact"
            className="inline-block px-8 py-4 bg-white text-[#3A5A4E] rounded-xl font-bold transition-all duration-300 hover:bg-emerald-50 hover:scale-105 shadow-lg"
          >
            {t.contactCTA?.button || "CONTACT ME"}
          </Link>
        </div>
      </section>
    </>
  )
}
