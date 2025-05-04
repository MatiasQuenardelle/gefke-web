import {
  CurrencyDollarIcon,
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"

const PartnersSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Partnere i Danmark og Spanien
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vi samarbejder med eksperter på tværs af juridiske og finansielle
            områder
          </p>
          <button className="mt-6 px-6 py-3 border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition rounded-md">
            Contact Me
          </button>
        </div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full">
            <CurrencyDollarIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Økonomi, bogføring og revision
            </h3>
            <p className="text-gray-600">
              Vi samarbejder med højt kvalificerede skønsmænd indenfor økonomi,
              bogføring og revision.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full">
            <HomeIcon className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Byplanlægning og fast ejendom
            </h3>
            <p className="text-gray-600">
              Vores partnere omfatter dygtige arkitekter og eksperter inden for
              byplanlægningslovgivning og fast ejendom.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full">
            <UsersIcon className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Arveret og familieret
            </h3>
            <p className="text-gray-600">
              Notarer, økonomer, psykologer, valuarer samt andre professionelle
              ifm. bosopgørelsen, dødsboet, skilsmissen eller andre familie- og
              arveretlige emner.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full">
            <BriefcaseIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ønsker du at blive samarbejdspartner?
            </h3>
            <p className="text-gray-700">
              Kontakt os for at diskutere samarbejdsmuligheder og hvordan vi
              sammen leverer de bedste ydelser til vores klienter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
