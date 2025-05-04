import Image from "next/image"

const services = [
  {
    title: "Selvstændig i Spanien",
    description:
      "Vi kan hjælpe med alt fra virksomhedsetablering og skatteforhold til kontraktkoncipering og compliance med spansk lovgivning.",
    href: "/services/selvstaendig-i-spanien",
    image: "/images/services/business.jpg",
  },
  {
    title: "Bolig i Spanien",
    description:
      "Vi sikrer korrekt udfyldelse af juridiske dokumenter og udarbejdelse af kontrakter, rådgivning om ejendomsret og lokale lovkrav, samt bistå med udlejning og lejekontrakter.",
    href: "/services/bolig-i-spanien",
    image: "/images/services/housing.jpg",
  },
  {
    title: "Flytte til Spanien",
    description:
      "Vi sørger for at alt det administrative er på plads inden du overhovedet lander i den spanske lufthavn.",
    href: "/services/flytte-til-spanien",
    image: "/images/services/move.jpg",
  },
  {
    title: "Familie og arveret",
    description:
      "Vi tilbyder juridiske tjenester med fokus på både dansk og spansk lovgivning, herunder testamenter, tvangsarv, forældremyndighed og bodeling.",
    href: "/services/familie-og-arveret",
    image: "/images/services/family.jpg",
  },
]

export default function ArticlesSection() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
          Juridiske specialområder
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {service.image && (
                <div className="w-full h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.href}
                  className="text-blue-700 font-medium hover:underline"
                >
                  → Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
