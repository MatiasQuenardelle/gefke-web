"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function RealkreditSpanienPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/realkredit", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("realkredit.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/housing.webp"
          alt={t("realkredit.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("realkredit.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("realkredit.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="realkredit" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realkredit.section1Title")}
            </h2>
            <p>
              {t("realkredit.section1Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realkredit.section2Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                {t("realkredit.section2Item1")}{" "}
                <strong>{t("realkredit.section2Item1Strong")}</strong>{" "}
                {t("realkredit.section2Item1Text")}
              </li>
              <li>
                {t("realkredit.section2Item2")}{" "}
                <strong>{t("realkredit.section2Item2Strong")}</strong>{" "}
                {t("realkredit.section2Item2Text")}
              </li>
            </ul>
            <p>
              {t("realkredit.section2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realkredit.section3Title")}
            </h2>
            <p>
              {t("realkredit.section3Text")}
            </p>
            <p>
              <strong>{t("realkredit.section3ExampleLabel")}</strong>{" "}
              {t("realkredit.section3ExampleText")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realkredit.section4Title")}
            </h2>
            <p>
              {t("realkredit.section4Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realkredit.section4Item1")}</li>
              <li>{t("realkredit.section4Item2")}</li>
              <li>{t("realkredit.section4Item3")}</li>
              <li>{t("realkredit.section4Item4")}</li>
              <li>{t("realkredit.section4Item5")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realkredit.section5Title")}
            </h2>
            <p>
              {t("realkredit.section5Text")}
            </p>
            <p>
              {t("realkredit.section5Text2")}
            </p>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("realkredit.conclusionTitle")}
            </h2>
            <p>
              {t("realkredit.conclusionText")}
            </p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realkredit.conclusionItem1")}</li>
              <li>{t("realkredit.conclusionItem2")}</li>
              <li>{t("realkredit.conclusionItem3")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("realkredit.conclusionText2")}
              <br />
              <a href="/contact" className="text-[#4AA07D] underline">
                {t("realkredit.conclusionLink")}
              </a>{" "}
              {t("realkredit.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
