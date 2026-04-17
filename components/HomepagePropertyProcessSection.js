const steps = [
  {
    title: "1. Før reservéring",
    text: "Afklar struktur og risici tidligt.",
  },
  {
    title: "2. Før underskrift",
    text: "Gennemgang af kontrakt, skat og dokumenter.",
  },
  {
    title: "3. Hele processen",
    text: "Koordinering frem til køb og registrering.",
  },
]

const highlights = [
  "Spansk advokat med dansk baggrund",
  "Fokus på Danmark og Spanien",
  "Rådgivning på dansk",
]

export default function HomepagePropertyProcessSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4AA07D]">
            Ét samlet forløb
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#14281d] md:text-4xl">
            En rådgiver gennem hele processen
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-[#dce9e1] bg-[#fbfcfb] p-6 text-center shadow-[0_18px_40px_rgba(23,43,35,0.05)]"
            >
              <h3 className="text-xl font-semibold text-[#14281d]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-[#3A5A4E]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
