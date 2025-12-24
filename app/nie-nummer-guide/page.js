"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function NieNummerGuidePage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/nie-nummer-guide", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("nieNummerGuide.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/move.webp"
          alt={t("nieNummerGuide.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("nieNummerGuide.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("nieNummerGuide.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="nieNummerGuide" />

          <section className="space-y-4">
            <p className="text-lg">
              {t("nieNummerGuide.intro")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("nieNummerGuide.section1Title")}
            </h2>
            <p>
              {t("nieNummerGuide.section1Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("nieNummerGuide.section2Title")}
            </h2>

            <h3 className="text-xl font-semibold">
              {t("nieNummerGuide.section2Subtitle1")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("nieNummerGuide.section2Item1")}</li>
              <li>{t("nieNummerGuide.section2Item2")}</li>
              <li>{t("nieNummerGuide.section2Item3")}</li>
            </ul>

            <h3 className="text-xl font-semibold">
              {t("nieNummerGuide.section2Subtitle2")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("nieNummerGuide.section2Item4")}</li>
              <li>{t("nieNummerGuide.section2Item5")}</li>
              <li>{t("nieNummerGuide.section2Item6")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("nieNummerGuide.section3Title")}
            </h2>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>{t("nieNummerGuide.section3Item1")}</li>
              <li>{t("nieNummerGuide.section3Item2")}</li>
              <li>{t("nieNummerGuide.section3Item3")}</li>
              <li>{t("nieNummerGuide.section3Item4")}</li>
              <li>{t("nieNummerGuide.section3Item5")}</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("nieNummerGuide.section4Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("nieNummerGuide.section4Item1")}</li>
              <li>{t("nieNummerGuide.section4Item2")}</li>
              <li>{t("nieNummerGuide.section4Item3")}</li>
              <li>{t("nieNummerGuide.section4Item4")}</li>
              <li>{t("nieNummerGuide.section4Item5")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("nieNummerGuide.section5Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("nieNummerGuide.section5Item1")}</li>
              <li>{t("nieNummerGuide.section5Item2")}</li>
              <li>{t("nieNummerGuide.section5Item3")}</li>
              <li>{t("nieNummerGuide.section5Item4")}</li>
              <li>{t("nieNummerGuide.section5Item5")}</li>
              <li>{t("nieNummerGuide.section5Item6")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("nieNummerGuide.conclusionTitle")}
            </h2>
            <p>
              {t("nieNummerGuide.conclusionText")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
