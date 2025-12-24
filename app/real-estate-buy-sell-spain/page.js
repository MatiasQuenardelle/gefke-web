"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"
import FAQSection from "@/components/FAQSection"

export default function BuySellPropertySpain() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/real-estate-buy-sell-spain", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("realEstateBuySell.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/housing.webp"
          alt={t("realEstateBuySell.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("realEstateBuySell.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("realEstateBuySell.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="realEstateBuySell" />

          <section className="space-y-6">
            <p>
              {t("realEstateBuySell.intro1")}{" "}
              <strong>{t("realEstateBuySell.intro1Strong")}</strong>.
            </p>
            <p>
              {t("realEstateBuySell.intro2")}{" "}
              <strong>{t("realEstateBuySell.intro2Strong")}</strong>
              {t("realEstateBuySell.intro2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realEstateBuySell.section0Title")}
            </h2>
            <p>
              {t("realEstateBuySell.section0Text")}{" "}
              <strong>{t("realEstateBuySell.section0Strong1")}</strong>
              {t("realEstateBuySell.section0Text2")}{" "}
              <strong>{t("realEstateBuySell.section0Strong2")}</strong>
              {t("realEstateBuySell.section0Text3")}
            </p>
            <p>
              {t("realEstateBuySell.section0Text4")}{" "}
              <strong>{t("realEstateBuySell.section0Strong3")}</strong>{" "}
              {t("realEstateBuySell.section0Text5")}{" "}
              <strong>{t("realEstateBuySell.section0Strong4")}</strong>
              {t("realEstateBuySell.section0Text6")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realEstateBuySell.section1Title")}
            </h2>
            <p>
              {t("realEstateBuySell.section1Text")}{" "}
              <strong>{t("realEstateBuySell.section1Strong")}</strong>{" "}
              {t("realEstateBuySell.section1Text2")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateBuySell.section1Item1")}</li>
              <li>{t("realEstateBuySell.section1Item2")}</li>
              <li>{t("realEstateBuySell.section1Item3")}</li>
            </ul>
            <p>
              {t("realEstateBuySell.section1Text3")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realEstateBuySell.section2Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong>{t("realEstateBuySell.section2Item1Label")}</strong>{" "}
                {t("realEstateBuySell.section2Item1Text")}{" "}
                <strong>{t("realEstateBuySell.section2Item1Strong")}</strong>{" "}
                {t("realEstateBuySell.section2Item1Text2")}
              </li>
              <li>
                <strong>{t("realEstateBuySell.section2Item2Label")}</strong>{" "}
                {t("realEstateBuySell.section2Item2Text")}
              </li>
              <li>
                <strong>{t("realEstateBuySell.section2Item3Label")}</strong>{" "}
                {t("realEstateBuySell.section2Item3Text")}
              </li>
              <li>
                <strong>{t("realEstateBuySell.section2Item4Label")}</strong>{" "}
                {t("realEstateBuySell.section2Item4Text")}
              </li>
              <li>
                <strong>{t("realEstateBuySell.section2Item5Label")}</strong>{" "}
                {t("realEstateBuySell.section2Item5Text")}
              </li>
            </ul>
            <p>
              {t("realEstateBuySell.section2Text")}{" "}
              <strong>{t("realEstateBuySell.section2Strong")}</strong>{" "}
              {t("realEstateBuySell.section2Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realEstateBuySell.section3Title")}
            </h2>
            <p>
              {t("realEstateBuySell.section3Text")}{" "}
              <strong>{t("realEstateBuySell.section3Strong")}</strong>{" "}
              {t("realEstateBuySell.section3Text2")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateBuySell.section3Item1")}</li>
              <li>{t("realEstateBuySell.section3Item2")}</li>
              <li>{t("realEstateBuySell.section3Item3")}</li>
              <li>{t("realEstateBuySell.section3Item4")}</li>
              <li>{t("realEstateBuySell.section3Item5")}</li>
            </ul>
            <p className="font-semibold text-red-700">
              {t("realEstateBuySell.section3Text3")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realEstateBuySell.section4Title")}
            </h2>
            <p>
              {t("realEstateBuySell.section4Text")}{" "}
              <strong>{t("realEstateBuySell.section4Strong")}</strong>
              {t("realEstateBuySell.section4Text2")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateBuySell.section4Item1")}</li>
              <li>{t("realEstateBuySell.section4Item2")}</li>
              <li>{t("realEstateBuySell.section4Item3")}</li>
            </ul>
            <p>
              {t("realEstateBuySell.section4Text3")}{" "}
              <strong>{t("realEstateBuySell.section4Strong2")}</strong>{" "}
              {t("realEstateBuySell.section4Text4")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("realEstateBuySell.section5Title")}
            </h2>
            <p>{t("realEstateBuySell.section5Text")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateBuySell.section5Item1")}</li>
              <li>{t("realEstateBuySell.section5Item2")}</li>
              <li>
                {t("realEstateBuySell.section5Item3")}{" "}
                (<strong>{t("realEstateBuySell.section5Item3Strong")}</strong>)
              </li>
              <li>{t("realEstateBuySell.section5Item4")}</li>
            </ul>
            <p>
              {t("realEstateBuySell.section5Text2")}{" "}
              <strong>{t("realEstateBuySell.section5Strong")}</strong>{" "}
              {t("realEstateBuySell.section5Text3")}
            </p>
          </section>

          <FAQSection translationKey="realEstateBuySell" />

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("realEstateBuySell.conclusionTitle")}
            </h2>
            <p>
              {t("realEstateBuySell.conclusionText")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateBuySell.conclusionItem1")}</li>
              <li>{t("realEstateBuySell.conclusionItem2")}</li>
              <li>{t("realEstateBuySell.conclusionItem3")}</li>
              <li>{t("realEstateBuySell.conclusionItem4")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("realEstateBuySell.conclusionText2")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
