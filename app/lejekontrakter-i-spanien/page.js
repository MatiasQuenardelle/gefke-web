"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function LejekontrakterISpanienPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/lejekontrakter-i-spanien", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("rentalContracts.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/housing.webp"
          alt={t("rentalContracts.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("rentalContracts.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("rentalContracts.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="rentalContracts" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("rentalContracts.section1Title")}
            </h2>
            <p>
              {t("rentalContracts.section1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("rentalContracts.section1Item1Label")}</strong>{" "}
                {t("rentalContracts.section1Item1Text")}
              </li>
              <li>
                <strong>{t("rentalContracts.section1Item2Label")}</strong>{" "}
                {t("rentalContracts.section1Item2Text")}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("rentalContracts.section2Title")}
            </h2>
            <p>{t("rentalContracts.section2Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("rentalContracts.section2Item1Label")}</strong>{" "}
                {t("rentalContracts.section2Item1Text")}
              </li>
              <li>
                <strong>{t("rentalContracts.section2Item2Label")}</strong>{" "}
                {t("rentalContracts.section2Item2Text")}
              </li>
              <li>
                <strong>{t("rentalContracts.section2Item3Label")}</strong>{" "}
                {t("rentalContracts.section2Item3Text")}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("rentalContracts.section3Title")}
            </h2>
            <p>
              {t("rentalContracts.section3Text1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("rentalContracts.section3Item1")}</li>
              <li>{t("rentalContracts.section3Item2")}</li>
              <li>{t("rentalContracts.section3Item3")}</li>
            </ul>
            <p className="italic">
              {t("rentalContracts.section3Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("rentalContracts.section4Title")}
            </h2>
            <p>
              {t("rentalContracts.section4Text1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("rentalContracts.section4Item1")}</li>
              <li>{t("rentalContracts.section4Item2")}</li>
              <li>{t("rentalContracts.section4Item3")}</li>
            </ul>
            <p>
              {t("rentalContracts.section4Text2")}
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>{t("rentalContracts.section4Item4")}</li>
                <li>{t("rentalContracts.section4Item5")}</li>
                <li>{t("rentalContracts.section4Item6")}</li>
              </ul>
            </p>
            <p>
              {t("rentalContracts.section4Text3")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("rentalContracts.section5Title")}
            </h2>
            <p>{t("rentalContracts.section5Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("rentalContracts.section5Item1")}</li>
              <li>{t("rentalContracts.section5Item2")}</li>
              <li>{t("rentalContracts.section5Item3")}</li>
            </ul>
            <p className="italic">
              {t("rentalContracts.section5Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">{t("rentalContracts.section6Title")}</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("rentalContracts.section6Item1Label")}</strong>{" "}
                {t("rentalContracts.section6Item1Text")}
              </li>
              <li>
                <strong>{t("rentalContracts.section6Item2Label")}</strong>{" "}
                {t("rentalContracts.section6Item2Text")}
              </li>
            </ul>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("rentalContracts.conclusionTitle")}
            </h2>
            <p>
              {t("rentalContracts.conclusionText1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("rentalContracts.conclusionItem1")}</li>
              <li>{t("rentalContracts.conclusionItem2")}</li>
              <li>{t("rentalContracts.conclusionItem3")}</li>
              <li>{t("rentalContracts.conclusionItem4")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("rentalContracts.conclusionText2")}
              <br />
              <a href="/contact" className="text-[#4AA07D] underline">
                {t("rentalContracts.conclusionLink")}
              </a>{" "}
              {t("rentalContracts.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
