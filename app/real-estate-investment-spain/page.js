"use client"

import { useTranslation } from "react-i18next"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function RealEstateInvestmentSpain() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/real-estate-investment-spain", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("realEstateInvestment.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("realEstateInvestment.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("realEstateInvestment.subtitle")}
            </p>
          </header>

          <ArticleMeta translationKey="realEstateInvestment" />

          <section className="space-y-6">
            <p>
              {t("realEstateInvestment.intro1")}
            </p>
            <p>
              {t("realEstateInvestment.intro2")}{" "}
              <strong>{t("realEstateInvestment.intro2Strong1")}</strong>
              {t("realEstateInvestment.intro2Text")}{" "}
              <strong>{t("realEstateInvestment.intro2Strong2")}</strong>{" "}
              {t("realEstateInvestment.intro2Text2")}{" "}
              <strong>{t("realEstateInvestment.intro2Strong3")}</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("realEstateInvestment.section1Title")}
            </h2>
            <p>
              {t("realEstateInvestment.section1Text")}{" "}
              <strong>{t("realEstateInvestment.section1Strong")}</strong>
              {t("realEstateInvestment.section1Text2")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateInvestment.section1Item1")}</li>
              <li>{t("realEstateInvestment.section1Item2")}</li>
              <li>{t("realEstateInvestment.section1Item3")}</li>
            </ul>
            <p>
              {t("realEstateInvestment.section1Text3")}{" "}
              <strong>{t("realEstateInvestment.section1Strong2")}</strong>{" "}
              {t("realEstateInvestment.section1Text4")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("realEstateInvestment.section2Title")}
            </h2>
            <p>
              {t("realEstateInvestment.section2Text")}{" "}
              <strong>{t("realEstateInvestment.section2Strong")}</strong>{" "}
              {t("realEstateInvestment.section2Text2")}
            </p>
            <p>{t("realEstateInvestment.section2Subtitle")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateInvestment.section2Item1")}</li>
              <li>{t("realEstateInvestment.section2Item2")}</li>
              <li>{t("realEstateInvestment.section2Item3")}</li>
              <li>{t("realEstateInvestment.section2Item4")}</li>
              <li>{t("realEstateInvestment.section2Item5")}</li>
              <li>{t("realEstateInvestment.section2Item6")}</li>
            </ul>
            <p className="font-semibold text-red-700">
              {t("realEstateInvestment.section2Text3")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("realEstateInvestment.section3Title")}
            </h2>
            <p>
              {t("realEstateInvestment.section3Text")}{" "}
              <strong>{t("realEstateInvestment.section3Strong")}</strong>
              {t("realEstateInvestment.section3Text2")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("realEstateInvestment.section3Item1Label")}</strong>{" "}
                {t("realEstateInvestment.section3Item1Text")}
              </li>
              <li>
                <strong>{t("realEstateInvestment.section3Item2Label")}</strong>{" "}
                {t("realEstateInvestment.section3Item2Text")}
              </li>
              <li>
                <strong>{t("realEstateInvestment.section3Item3Label")}</strong>{" "}
                {t("realEstateInvestment.section3Item3Text")}
              </li>
              <li>
                <strong>{t("realEstateInvestment.section3Item4Label")}</strong>{" "}
                {t("realEstateInvestment.section3Item4Text")}
              </li>
              <li>
                <strong>{t("realEstateInvestment.section3Item5Label")}</strong>{" "}
                {t("realEstateInvestment.section3Item5Text")}
              </li>
            </ul>
            <p>
              {t("realEstateInvestment.section3Text3")}{" "}
              <strong>{t("realEstateInvestment.section3Strong2")}</strong>
              {t("realEstateInvestment.section3Text4")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("realEstateInvestment.section4Title")}
            </h2>
            <p>
              {t("realEstateInvestment.section4Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                {t("realEstateInvestment.section4Item1")}{" "}
                <strong>{t("realEstateInvestment.section4Item1Strong")}</strong>{" "}
                {t("realEstateInvestment.section4Item1Text")}
              </li>
              <li>{t("realEstateInvestment.section4Item2")}</li>
              <li>
                {t("realEstateInvestment.section4Item3")}{" "}
                <strong>{t("realEstateInvestment.section4Item3Strong")}</strong>
              </li>
              <li>{t("realEstateInvestment.section4Item4")}</li>
            </ul>
            <p>
              {t("realEstateInvestment.section4Text2")}
            </p>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
              {t("realEstateInvestment.conclusionTitle")}
            </h2>
            <p>
              {t("realEstateInvestment.conclusionText")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("realEstateInvestment.conclusionItem1")}</li>
              <li>{t("realEstateInvestment.conclusionItem2")}</li>
              <li>{t("realEstateInvestment.conclusionItem3")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("realEstateInvestment.conclusionText2")}
            </p>
            <p className="text-lg">
              {t("realEstateInvestment.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
