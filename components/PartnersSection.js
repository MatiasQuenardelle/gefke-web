"use client"

import {
  CurrencyDollarIcon,
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"

import { useRouter } from "next/navigation"

const PartnersSection = () => {
  const router = useRouter()
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-2 bg-[#003366]/10 rounded-full text-sm font-medium text-[#003366] mb-4">
            Samarbejdspartnere
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Partnere i Danmark og Spanien
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Vi samarbejder med eksperter på tværs af juridiske og finansielle
            områder for at give dig den bedste service
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="px-8 py-4 bg-[#003366] text-white rounded-lg font-semibold 
                       transition-all duration-300 hover:bg-[#004080] hover:scale-105 
                       shadow-lg hover:shadow-xl"
          >
            Kontakt Mig
          </button>
        </div>

        {/* Enhanced 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                          transition-all duration-500 border border-gray-100 
                          hover:scale-[1.02] hover:-translate-y-2"
          >
            <div
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl 
                            flex items-center justify-center mb-6 group-hover:scale-110 
                            transition-transform duration-300"
            >
              <CurrencyDollarIcon className="h-8 w-8 text-white" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-gray-800 mb-4 
                           group-hover:text-[#003366] transition-colors duration-300"
            >
              Økonomi, bogføring og revision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Vi samarbejder med højt kvalificerede eksperter inden for økonomi,
              bogføring og revision for at sikre dine finansielle interesser.
            </p>
          </div>

          <div
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                          transition-all duration-500 border border-gray-100 
                          hover:scale-[1.02] hover:-translate-y-2"
          >
            <div
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl 
                            flex items-center justify-center mb-6 group-hover:scale-110 
                            transition-transform duration-300"
            >
              <HomeIcon className="h-8 w-8 text-white" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-gray-800 mb-4 
                           group-hover:text-[#003366] transition-colors duration-300"
            >
              Byplanlægning og fast ejendom
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Vores partnere omfatter dygtige arkitekter og eksperter inden for
              byplanlægningslovgivning og ejendomsret i både Danmark og Spanien.
            </p>
          </div>

          <div
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                          transition-all duration-500 border border-gray-100 
                          hover:scale-[1.02] hover:-translate-y-2"
          >
            <div
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl 
                            flex items-center justify-center mb-6 group-hover:scale-110 
                            transition-transform duration-300"
            >
              <UsersIcon className="h-8 w-8 text-white" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-gray-800 mb-4 
                           group-hover:text-[#003366] transition-colors duration-300"
            >
              Arveret og familieret
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Notarer, økonomer, psykologer, valuarer samt andre professionelle
              ifm. bosopgørelsen, dødsboet, skilsmissen eller andre familie- og
              arveretlige emner.
            </p>
          </div>

          <div
            className="group bg-gradient-to-br from-[#003366] to-[#004080] p-8 rounded-2xl 
                          shadow-lg hover:shadow-2xl transition-all duration-500 
                          border border-[#003366]/20 hover:scale-[1.02] hover:-translate-y-2 text-white"
          >
            <div
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl 
                            flex items-center justify-center mb-6 group-hover:scale-110 
                            transition-transform duration-300 border border-white/30"
            >
              <BriefcaseIcon className="h-8 w-8 text-white" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-200 
                           transition-colors duration-300"
            >
              Ønsker du at blive samarbejdspartner?
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Kontakt os for at diskutere samarbejdsmuligheder og hvordan vi
              sammen kan levere de bedste ydelser til vores klienter.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#003366] 
                         rounded-lg font-semibold transition-all duration-300 
                         hover:bg-gray-100 hover:scale-105 shadow-lg"
            >
              Bliv partner
              <svg
                className="w-4 h-4"
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
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection

// just to commit
