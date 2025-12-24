"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function BeckhamLovPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/beckham-lov-spanien", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("beckhamLov.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/move.webp"
          alt={t("beckhamLov.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("beckhamLov.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("beckhamLov.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="beckhamLov" />

          <section className="space-y-4">
            <p className="text-lg">
              {t("beckhamLov.intro")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("beckhamLov.section1Title")}
            </h2>
            <p>
              {t("beckhamLov.section1Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("beckhamLov.section2Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("beckhamLov.section2Item1")}</li>
              <li>{t("beckhamLov.section2Item2")}</li>
              <li>{t("beckhamLov.section2Item3")}</li>
              <li>{t("beckhamLov.section2Item4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("beckhamLov.section3Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("beckhamLov.section3Item1")}</li>
              <li>{t("beckhamLov.section3Item2")}</li>
              <li>{t("beckhamLov.section3Item3")}</li>
              <li>{t("beckhamLov.section3Item4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("beckhamLov.section4Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("beckhamLov.section4Item1")}</li>
              <li>{t("beckhamLov.section4Item2")}</li>
              <li>{t("beckhamLov.section4Item3")}</li>
              <li>{t("beckhamLov.section4Item4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("beckhamLov.section5Title")}
            </h2>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>{t("beckhamLov.section5Item1")}</li>
              <li>{t("beckhamLov.section5Item2")}</li>
              <li>{t("beckhamLov.section5Item3")}</li>
              <li>{t("beckhamLov.section5Item4")}</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("beckhamLov.section6Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("beckhamLov.section6Item1")}</li>
              <li>{t("beckhamLov.section6Item2")}</li>
              <li>{t("beckhamLov.section6Item3")}</li>
              <li>{t("beckhamLov.section6Item4")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("beckhamLov.conclusionTitle")}
            </h2>
            <p>
              {t("beckhamLov.conclusionText")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
