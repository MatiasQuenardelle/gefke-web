import Image from "next/image"
import Link from "next/link"
import { Merriweather } from "next/font/google"
import danish from "@/public/locales/da.json"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })
const t = danish

const authorityPoints = [
  t.about.bg1,
  t.about.bg3,
  t.about.bg4,
  t.about.bg6,
]

const whyChoosePoints = [
  "Dansk baggrund og juridisk uddannelse gennemført i Spanien",
  "Dagligt arbejde mellem to retssystemer, to sprog og to juridiske kulturer",
  "Fokus på korrekt struktur fra begyndelsen, før fejl bliver dyre senere",
]

const clientTypes = [
  t.about.client1,
  t.about.client2,
  t.about.client3,
]

export default function TrustedBySection() {
  return (
    <section className="w-full bg-[#f6f7f5] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#d9e4dd] bg-white shadow-[0_30px_80px_rgba(23,43,35,0.08)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative bg-gradient-to-br from-[#2f493f] via-[#3A5A4E] to-[#4AA07D] p-8 text-white md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_30%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Om Christian Gefke
                </div>

                <div className="mt-8 max-w-sm overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-sm">
                  <Image
                    src="/images/CristianGefke.png"
                    alt={t.homepage.hero.imageAlt}
                    width={520}
                    height={620}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-white/15 bg-black/15 p-5 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-emerald-100">
                    {t.about.heroSubtitle}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {t.about.registration}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4AA07D]">
                Autoritet og tillid
              </p>
              <h2
                className={`${merri.className} mt-4 text-3xl leading-tight text-[#14281d] md:text-5xl`}
              >
                En advokat, der forstår både Danmark og Spanien
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
                {t.about.work}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
                {t.about.bridge}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[#dce9e1] bg-[#fbfcfb] p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4AA07D]">
                    Hvorfor giver det tryghed?
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                    {whyChoosePoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-[#3A5A4E]">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-[#dce9e1] bg-[#173228] p-6 text-white">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Professionel baggrund
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-50">
                    {authorityPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10 text-emerald-200">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-[#e5ece7] bg-[#f7faf8] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4AA07D]">
                  Typiske klienter
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {clientTypes.map((client) => (
                    <div
                      key={client}
                      className="rounded-full border border-[#d5e3db] bg-white px-4 py-2 text-sm font-medium text-[#2f493f]"
                    >
                      {client}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-700">
                  {t.about.focus}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[#3A5A4E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d463d] text-center"
                >
                  Kontakt mig
                </a>
                <Link
                  href="/about"
                  className="rounded-full border border-[#3A5A4E]/20 px-6 py-3 text-sm font-semibold text-[#3A5A4E] transition hover:bg-[#3A5A4E]/5 text-center"
                >
                  Læs mere om Christian Gefke
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
