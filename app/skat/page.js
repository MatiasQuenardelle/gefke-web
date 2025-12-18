"use client"

import { useTranslation } from "react-i18next"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function SkatPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/skat", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("skat.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("skat.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("skat.subtitle")}
            </p>
          </header>

          <ArticleMeta translationKey="skat" />

          <section className="space-y-6">
            <p>
              {t("skat.intro1")}{" "}
              <strong>{t("skat.intro1Strong1")}</strong>{" "}
              {t("skat.intro1Text")}{" "}
              <strong>{t("skat.intro1Strong2")}</strong>.
            </p>

            <p>
              {t("skat.intro2")}{" "}
              <strong>{t("skat.intro2Strong")}</strong>
              {t("skat.intro2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("skat.section1Title")}
            </h2>
            <p>
              {t("skat.section1Text")}{" "}
              <strong>{t("skat.section1Strong")}</strong>
              {t("skat.section1Text2")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("skat.section1Item1Label")}</strong> {t("skat.section1Item1Text")}
              </li>
              <li>
                <strong>{t("skat.section1Item2Label")}</strong> {t("skat.section1Item2Text")}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("skat.section2Title")}
            </h2>
            <p>
              {t("skat.section2Text")}{" "}
              <strong>{t("skat.section2Strong")}</strong>.
            </p>

            <h3 className="text-xl font-semibold">
              {t("skat.section2Subtitle")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section2Item1")}</li>
              <li>{t("skat.section2Item2")}</li>
              <li>{t("skat.section2Item3")}</li>
            </ul>

            <h3 className="text-xl font-semibold">
              {t("skat.section2Subtitle2")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section2Item4")}</li>
              <li>{t("skat.section2Item5")}</li>
              <li>{t("skat.section2Item6")}</li>
              <li>{t("skat.section2Item7")}</li>
            </ul>

            <h3 className="text-xl font-semibold">
              {t("skat.section2Subtitle3")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section2Item8")}</li>
              <li>{t("skat.section2Item9")}</li>
              <li>{t("skat.section2Item10")}</li>
              <li>{t("skat.section2Item11")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("skat.section3Title")}
            </h2>

            <h3 className="text-xl font-semibold">
              {t("skat.section3Subtitle1")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section3Item1")}</li>
              <li>
                {t("skat.section3Item2")}{" "}
                <strong>{t("skat.section3Item2Strong")}</strong>
              </li>
              <li>{t("skat.section3Item3")}</li>
            </ul>

            <h3 className="text-xl font-semibold">
              {t("skat.section3Subtitle2")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("skat.section3Item4Strong")}</strong> {t("skat.section3Item4Text")}
              </li>
              <li>
                <strong>{t("skat.section3Item5Strong")}</strong> {t("skat.section3Item5Text")}
              </li>
              <li>{t("skat.section3Item6")}</li>
            </ul>

            <h3 className="text-xl font-semibold">{t("skat.section3Subtitle3")}</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section3Item7")}</li>
              <li>{t("skat.section3Item8")}</li>
              <li>{t("skat.section3Item9")}</li>
            </ul>

            <h3 className="text-xl font-semibold">{t("skat.section3Subtitle4")}</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section3Item10")}</li>
              <li>{t("skat.section3Item11")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("skat.section4Title")}
            </h2>

            <h3 className="text-xl font-semibold">{t("skat.section4Subtitle1")}</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                {t("skat.section4Item1")}{" "}
                <strong>{t("skat.section4Item1Strong")}</strong>
              </li>
              <li>
                {t("skat.section4Item2")}{" "}
                <strong>{t("skat.section4Item2Strong")}</strong>
              </li>
              <li>
                {t("skat.section4Item3")}{" "}
                <strong>{t("skat.section4Item3Strong")}</strong>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              {t("skat.section4Subtitle2")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section4Item4")}</li>
              <li>
                {t("skat.section4Item5")}{" "}
                <strong>{t("skat.section4Item5Strong")}</strong> {t("skat.section4Item5Text")}
              </li>
            </ul>

            <h3 className="text-xl font-semibold">{t("skat.section4Subtitle3")}</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section4Item6")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("skat.section5Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("skat.section5Item1")}</li>
              <li>
                {t("skat.section5Item2")}{" "}
                (<strong>{t("skat.section5Item2Strong")}</strong>)
              </li>
              <li>
                {t("skat.section5Item3")}{" "}
                <strong>{t("skat.section5Item3Strong")}</strong>
              </li>
            </ul>
            <p>
              {t("skat.section5Text")}{" "}
              <strong>{t("skat.section5Strong")}</strong>
              {t("skat.section5Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("skat.section6Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("skat.section6Item1Strong")}</strong> {t("skat.section6Item1Text")}
              </li>
              <li>
                <strong>{t("skat.section6Item2Strong")}</strong> {t("skat.section6Item2Text")}
              </li>
              <li>
                <strong>{t("skat.section6Item3Strong")}</strong> {t("skat.section6Item3Text")}
              </li>
              <li>
                <strong>{t("skat.section6Item4Strong")}</strong> {t("skat.section6Item4Text")}
              </li>
              <li>
                <strong>{t("skat.section6Item5Strong")}</strong> {t("skat.section6Item5Text")}
              </li>
            </ul>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
              {t("skat.conclusionTitle")}
            </h2>
            <p>
              {t("skat.conclusionText1")}
            </p>
            <p>
              {t("skat.conclusionText2")}
            </p>
            <p className="font-semibold text-lg">
              {t("skat.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
