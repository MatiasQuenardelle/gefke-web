import english from "@/public/locales/en.json"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

const t = english

export default function LawChoiceInheritance() {
  const relatedServices = getRelatedServices("/lovvalg", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t.lawChoice.title}
      />

      <section className="relative overflow-hidden bg-[#3A5A4E]">
        <Image
          src="/images/services/family.webp"
          alt={t.lawChoice.title}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#20342d]/95 via-[#3A5A4E]/88 to-[#4AA07D]/75" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              International inheritance law
            </div>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Choice of law in international inheritance cases
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              When can Danish inheritance law be applied to a foreign estate, and
              when will the case still be handled abroad?
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/85">
              <div className="rounded-full border border-white/10 bg-black/15 px-4 py-2 backdrop-blur-sm">
                Choice of law
              </div>
              <div className="rounded-full border border-white/10 bg-black/15 px-4 py-2 backdrop-blur-sm">
                Danish inheritance law
              </div>
              <div className="rounded-full border border-white/10 bg-black/15 px-4 py-2 backdrop-blur-sm">
                Cross-border estates
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="lawChoice" lang="en" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">{t.lawChoice.section1Title}</h2>
            <p>
              {t.lawChoice.section1Text1}{" "}
              <strong>{t.lawChoice.section1Text1Strong}</strong>.
            </p>
            <p>
              {t.lawChoice.section1Text2}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t.lawChoice.section2Title}
            </h2>
            <p>
              {t.lawChoice.section2Text1}
            </p>
            <p>
              <strong>{t.lawChoice.section2ExampleLabel}</strong>{" "}
              {t.lawChoice.section2ExampleText}
            </p>
            <p>
              {t.lawChoice.section2Text2}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t.lawChoice.section3Title}
            </h2>
            <p>
              {t.lawChoice.section3Text1}{" "}
              <strong>{t.lawChoice.section3Text1Strong}</strong>{" "}
              {t.lawChoice.section3Text1Text}
            </p>
            <p>
              {t.lawChoice.section3Text2}{" "}
              <strong>{t.lawChoice.section3Text2Strong}</strong>{" "}
              {t.lawChoice.section3Text2Text}
            </p>
            <p>
              {t.lawChoice.section3Text3}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t.lawChoice.section4Title}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t.lawChoice.section4Item1}</li>
              <li>{t.lawChoice.section4Item2}</li>
              <li>{t.lawChoice.section4Item3}</li>
            </ul>
            <p>
              {t.lawChoice.section4Text}{" "}
              <strong>{t.lawChoice.section4TextStrong}</strong>{" "}
              {t.lawChoice.section4TextText}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t.lawChoice.section5Title}
            </h2>
            <p>
              {t.lawChoice.section5Text1}
            </p>
            <p>{t.lawChoice.section5Text2}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t.lawChoice.section5Item1}</li>
              <li>{t.lawChoice.section5Item2}</li>
              <li>{t.lawChoice.section5Item3}</li>
            </ul>
            <p>
              <strong>{t.lawChoice.section5ExampleLabel}</strong>{" "}
              {t.lawChoice.section5ExampleText}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t.lawChoice.section6Title}
            </h2>
            <p>
              {t.lawChoice.section6Text1}
            </p>
            <p>
              {t.lawChoice.section6Text2}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t.lawChoice.section7Title}
            </h2>
            <p>{t.lawChoice.section7Text1}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t.lawChoice.section7Item1}</li>
              <li>{t.lawChoice.section7Item2}</li>
              <li>{t.lawChoice.section7Item3}</li>
            </ul>
            <p>
              {t.lawChoice.section7Text2}
            </p>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">{t.lawChoice.conclusionTitle}</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t.lawChoice.conclusionItem1}</li>
              <li>{t.lawChoice.conclusionItem2}</li>
              <li>{t.lawChoice.conclusionItem3}</li>
              <li>{t.lawChoice.conclusionItem4}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t.lawChoice.conclusionText}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
