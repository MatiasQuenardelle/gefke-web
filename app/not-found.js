import Link from "next/link"

export const metadata = {
  title: "Side ikke fundet | Christian Gefke - Spansk Advokat",
  description: "Siden du leder efter findes ikke. Find juridisk rådgivning om ejendom, erhverv, familieret og immigration i Spanien.",
}

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-[#3A5A4E] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Siden blev ikke fundet
        </h2>
        <p className="text-gray-600 mb-8">
          Siden du leder efter er muligvis blevet flyttet eller eksisterer ikke længere.
          Brug linkene herunder til at finde det, du søger.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/services/real-estate"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900">Fast ejendom</h3>
            <p className="text-sm text-gray-600">Køb, salg og leje i Spanien</p>
          </Link>
          <Link
            href="/services/business"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900">Erhverv</h3>
            <p className="text-sm text-gray-600">Virksomhed og skat i Spanien</p>
          </Link>
          <Link
            href="/services/family-law"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900">Familieret</h3>
            <p className="text-sm text-gray-600">Skilsmisse, arv og testamente</p>
          </Link>
          <Link
            href="/services/immigration"
            className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900">Immigration</h3>
            <p className="text-sm text-gray-600">Opholdstilladelse og pension</p>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#3A5A4E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4a3e] transition-colors"
          >
            Gå til forsiden
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#3A5A4E] border border-[#3A5A4E] px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Kontakt mig
          </Link>
        </div>
      </div>
    </section>
  )
}
