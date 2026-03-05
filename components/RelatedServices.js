import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Related Services Component
 *
 * @param {Array} services - Array of service objects with {title, href, description}
 * @param {string} title - Optional custom title (defaults to "Relaterede tjenester")
 */
export default function RelatedServices({ services = [], title = "Relaterede tjenester" }) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-emerald-500 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </div>
              {service.description && (
                <p className="text-gray-600 text-sm flex-grow">
                  {service.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
