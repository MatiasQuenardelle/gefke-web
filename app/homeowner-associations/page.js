"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function EjerforeningerSpainArticle() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/homeowner-associations", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("homeownerAssociations.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/housing.webp"
          alt={t("homeownerAssociations.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("homeownerAssociations.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("homeownerAssociations.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-3xl mx-auto space-y-10">

          <ArticleMeta translationKey="homeownerAssociations" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("homeownerAssociations.section1Title")}
            </h2>
            <p>
              {t("homeownerAssociations.section1Text1")}{" "}
              <strong>{t("homeownerAssociations.section1Text1Strong")}</strong>.
              {t("homeownerAssociations.section1Text1Text")}{" "}
              <strong>{t("homeownerAssociations.section1Text1Strong2")}</strong>
              {t("homeownerAssociations.section1Text1Text2")}{" "}
              <strong>{t("homeownerAssociations.section1Text1Strong3")}</strong>.
            </p>
            <p>
              {t("homeownerAssociations.section1Text2")}{" "}
              <strong>{t("homeownerAssociations.section1Text2Strong")}</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("homeownerAssociations.section2Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("homeownerAssociations.section2Item1")}</li>
              <li>{t("homeownerAssociations.section2Item2")}</li>
              <li>{t("homeownerAssociations.section2Item3")}</li>
              <li>{t("homeownerAssociations.section2Item4")}</li>
            </ul>
            <p>
              {t("homeownerAssociations.section2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("homeownerAssociations.section3Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("homeownerAssociations.section3Item1Label")}</strong>{" "}
                {t("homeownerAssociations.section3Item1Text")}
              </li>
              <li>
                <strong>{t("homeownerAssociations.section3Item2Label")}</strong>{" "}
                {t("homeownerAssociations.section3Item2Text")}
              </li>
            </ul>
            <p>
              {t("homeownerAssociations.section3Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("homeownerAssociations.section4Title")}
            </h2>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>
                <strong>{t("homeownerAssociations.section4Item1Label")}</strong>{" "}
                {t("homeownerAssociations.section4Item1Text")}
              </li>
              <li>
                <strong>{t("homeownerAssociations.section4Item2Label")}</strong>{" "}
                {t("homeownerAssociations.section4Item2Text")}
              </li>
              <li>
                <strong>{t("homeownerAssociations.section4Item3Label")}</strong>{" "}
                {t("homeownerAssociations.section4Item3Text")}
              </li>
              <li>
                <strong>{t("homeownerAssociations.section4Item4Label")}</strong>{" "}
                {t("homeownerAssociations.section4Item4Text")}
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("homeownerAssociations.section5Title")}
            </h2>
            <p>
              {t("homeownerAssociations.section5Text1")}{" "}
              <strong>{t("homeownerAssociations.section5Text1Strong")}</strong>{" "}
              {t("homeownerAssociations.section5Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("homeownerAssociations.section5Item1")}</li>
              <li>{t("homeownerAssociations.section5Item2")}</li>
              <li>{t("homeownerAssociations.section5Item3")}</li>
              <li>{t("homeownerAssociations.section5Item4")}</li>
            </ul>
            <p>{t("homeownerAssociations.section5Text2")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("homeownerAssociations.section5Item5")}</li>
              <li>{t("homeownerAssociations.section5Item6")}</li>
              <li>{t("homeownerAssociations.section5Item7")}</li>
            </ul>
            <p>
              <strong>
                {t("homeownerAssociations.section5Text3")}
              </strong>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("homeownerAssociations.section6Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("homeownerAssociations.section6Item1")}</li>
              <li>{t("homeownerAssociations.section6Item2")}</li>
              <li>{t("homeownerAssociations.section6Item3")}</li>
              <li>{t("homeownerAssociations.section6Item4")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("homeownerAssociations.conclusionTitle")}
            </h2>
            <p>
              {t("homeownerAssociations.conclusionText")}
            </p>
            <p className="text-lg font-semibold">
              {t("homeownerAssociations.conclusionText2")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
