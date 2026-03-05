import Image from "next/image"
import Link from "next/link"
import spanish from "@/public/locales/es.json"

const t = spanish

export default function SpanishHomePage() {
  const services = [
    {
      title: t.realEstateHub?.title || "Inmobiliaria en España",
      description: t.realEstateHub?.subtitle || "",
      href: "/es/inmobiliaria",
      icon: "🏠",
    },
    {
      title: t.businessHub?.title || "Negocios en España",
      description: t.businessHub?.subtitle || "",
      href: "/es/empresa-espana",
      icon: "🏢",
    },
    {
      title: t.familyLawHub?.title || "Derecho de Familia",
      description: t.familyLawHub?.subtitle || "",
      href: "/es/derecho-familia",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: t.immigrationHub?.title || "Inmigración a España",
      description: t.immigrationHub?.subtitle || "",
      href: "/es/inmigracion",
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
              {t.homepage?.hero?.title1 || "Abogado Danés"}{" "}
              <span className="text-emerald-300">{t.homepage?.hero?.title2 || "en España"}</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl">
              {t.homepage?.hero?.description || "Asistencia legal profesional para escandinavos en España. Inmobiliaria, negocios, derecho de familia e inmigración."}
            </p>
            <p className="text-sm text-emerald-200/80 max-w-2xl">
              Si buscas un abogado en España que habla danés, estás en el lugar correcto. Asesoramiento legal nórdico y escandinavo en toda España.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/es/contacto"
                className="px-8 py-4 bg-white text-[#3A5A4E] rounded-xl font-bold transition-all duration-300 hover:bg-emerald-50 hover:scale-105 shadow-lg"
              >
                {t.homepage?.hero?.ctaButton || "Contáctame"}
              </Link>
              <Link
                href="/es/sobre-mi"
                className="px-8 py-4 border-2 border-white/30 rounded-xl font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                {t.homepage?.hero?.secondaryButton || "Sobre mí"}
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/CristianGefke.png"
              alt="Christian Gefke - Abogado español autorizado (abogado)"
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
              {t.homepage?.services?.title || "Nuestros Servicios"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.homepage?.services?.subtitle || "Asistencia legal integral para todas tus necesidades en España."}
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
            {t.contactCTA?.heading || "Obtén el apoyo legal que mereces"}
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            {t.contactCTA?.description || "Ya sea que te estés mudando, invirtiendo o necesites asesoramiento confiable, estoy aquí para guiarte en cada paso."}
          </p>
          <Link
            href="/es/contacto"
            className="inline-block px-8 py-4 bg-white text-[#3A5A4E] rounded-xl font-bold transition-all duration-300 hover:bg-emerald-50 hover:scale-105 shadow-lg"
          >
            {t.contactCTA?.button || "CONTÁCTAME"}
          </Link>
        </div>
      </section>
    </>
  )
}
