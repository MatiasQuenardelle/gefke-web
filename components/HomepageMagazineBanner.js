import Link from "next/link"

export default function HomepageMagazineBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0f2c3b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(116,204,255,0.28),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(74,160,125,0.3),_transparent_42%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-20">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Set i Berlingske Boligen denne weekend
          </p>
          <p className="max-w-3xl text-sm text-slate-100 md:text-base">
            Overvejer du bolig i Spanien? Her får du et hurtigt overblik over de
            juridiske og skattemæssige spørgsmål, før du skriver under.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/real-estate-buy-sell-spain"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Se boligguiden
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0f2c3b] transition hover:bg-slate-100"
          >
            Få vurderet din situation
          </a>
        </div>
      </div>
    </section>
  )
}
