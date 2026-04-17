import Link from "next/link"

export default function HomepagePropertyAuthoritySection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f7faf8_0%,#eef4f0_100%)] px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/70 bg-white/90 p-8 text-center shadow-[0_28px_80px_rgba(23,43,35,0.08)] backdrop-blur md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4AA07D]">
          Har du allerede fundet en bolig?
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#14281d] md:text-4xl">
          Få en første juridisk vurdering før næste skridt
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
          Det behøver ikke være kompliceret at starte. Beskriv kort din situation,
          så er det lettere at vurdere, hvad der bør afklares først.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-[#3A5A4E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d463d]"
          >
            Book en uforpligtende samtale
          </a>
          <Link
            href="/real-estate-buy-sell-spain"
            className="rounded-full border border-[#3A5A4E]/20 px-6 py-3 text-sm font-semibold text-[#3A5A4E] transition hover:bg-[#3A5A4E]/5"
          >
            Se købsguiden
          </Link>
        </div>
      </div>
    </section>
  )
}
