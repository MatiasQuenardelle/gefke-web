import Link from "next/link"

const riskCards = [
  {
    title: "Finansiering og dokumenter",
    description: "NIE, bank, fuldmagter og registrering.",
  },
  {
    title: "Forældrekøb",
    description: "Ejerskab og struktur på tværs af lande.",
  },
  {
    title: "Skat DK / ES",
    description: "Undgå overraskelser før og efter køb.",
  },
  {
    title: "Kontrakt og due diligence",
    description: "Få styr på hæftelser, tilladelser og vilkår.",
  },
]

export default function HomepagePropertyRiskSection() {
  return (
    <section className="bg-[#f4f6f4] px-6 py-16 text-gray-900 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-[#3A5A4E] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Før du skriver under
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#14281d] md:text-4xl">
            De vigtigste ting at få afklaret først
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
            Kort fortalt handler det typisk om disse fire områder, når danskere
            køber bolig i Spanien.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {riskCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white bg-white p-6 text-center shadow-[0_12px_32px_rgba(23,43,35,0.06)]"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[#3A5A4E]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#14281d]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-[#3A5A4E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d463d]"
          >
            Få vurderet din situation
          </a>
          <Link
            href="/real-estate-buy-sell-spain"
            className="rounded-full border border-[#3A5A4E]/20 bg-white px-6 py-3 text-sm font-semibold text-[#3A5A4E] transition hover:bg-[#3A5A4E]/5"
          >
            Læs boligguiden
          </Link>
        </div>
      </div>
    </section>
  )
}
