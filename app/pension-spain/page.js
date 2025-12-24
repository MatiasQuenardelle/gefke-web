"use client"

import { useTranslation } from "react-i18next"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function PensionSpanienPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/pension-spain", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("pension.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-3xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#3A5A4E] leading-tight">
              {t("pension.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("pension.subtitle")}
            </p>
          </header>

          <ArticleMeta translationKey="pension" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("pension.section1Title")}
            </h2>
            <p>
              {t("pension.section1Text1")}{" "}
              <strong>{t("pension.section1Text1Strong1")}</strong>{" "}
              {t("pension.section1Text1Text")}{" "}
              <strong>{t("pension.section1Text1Strong2")}</strong>.
            </p>
            <p>{t("pension.section1Text2")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("pension.section1Item1")}</li>
              <li>{t("pension.section1Item2")}</li>
              <li>{t("pension.section1Item3")}</li>
              <li>{t("pension.section1Item4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4AA07D]">
              {t("pension.section2Title")}
            </h3>
            <p>
              {t("pension.section2Text1")}{" "}
              <strong>{t("pension.section2Text1Strong")}</strong>
              {t("pension.section2Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("pension.section2Item1")}</li>
              <li>{t("pension.section2Item2")}</li>
              <li>{t("pension.section2Item3")}</li>
            </ul>
            <p>
              {t("pension.section2Text2")}{" "}
              <strong>{t("pension.section2Text2Strong")}</strong>{" "}
              {t("pension.section2Text2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4AA07D]">
              {t("pension.section3Title")}
            </h3>
            <p>
              {t("pension.section3Text1")}
            </p>

            <div>
              <h4 className="font-semibold text-gray-800">{t("pension.section3Subtitle1")}</h4>
              <p>
                {t("pension.section3Text2")}{" "}
                <em>{t("pension.section3Text2Em")}</em>{" "}
                {t("pension.section3Text2Text")}{" "}
                <strong>{t("pension.section3Text2Strong")}</strong>.
                {t("pension.section3Text2Text2")}
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>{t("pension.section3Item1")}</li>
                <li>{t("pension.section3Item2")}</li>
                <li>{t("pension.section3Item3")}</li>
              </ul>
              <p>
                {t("pension.section3Text3")}{" "}
                (<em>{t("pension.section3Text3Em")}</em>).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">{t("pension.section3Subtitle2")}</h4>
              <p>
                {t("pension.section3Text4")}
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>{t("pension.section3Item4")}</li>
                <li>{t("pension.section3Item5")}</li>
                <li>{t("pension.section3Item6")}</li>
              </ul>
              <p>
                {t("pension.section3Text5")}{" "}
                <strong>{t("pension.section3Text5Strong")}</strong>{" "}
                {t("pension.section3Text5Text")}
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4AA07D]">
              {t("pension.section4Title")}
            </h3>
            <p>{t("pension.section4Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("pension.section4Item1")}</li>
              <li>{t("pension.section4Item2")}</li>
              <li>{t("pension.section4Item3")}</li>
            </ul>
            <p>
              {t("pension.section4Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4AA07D]">
              {t("pension.section5Title")}
            </h3>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>
                <strong>{t("pension.section5Item1Label")}</strong>{" "}
                {t("pension.section5Item1Text")}{" "}
                <em>{t("pension.section5Item1Em")}</em>{" "}
                {t("pension.section5Item1Text2")}
              </li>
              <li>
                <strong>{t("pension.section5Item2Label")}</strong>{" "}
                {t("pension.section5Item2Text")}
              </li>
              <li>
                <strong>{t("pension.section5Item3Label")}</strong>{" "}
                {t("pension.section5Item3Text")}
              </li>
              <li>
                <strong>{t("pension.section5Item4Label")}</strong>{" "}
                {t("pension.section5Item4Text")}
              </li>
            </ol>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h3 className="text-2xl font-bold text-[#3A5A4E]">
              {t("pension.conclusionTitle")}
            </h3>
            <p>
              {t("pension.conclusionText1")}{" "}
              <strong>{t("pension.conclusionText1Strong")}</strong>.
            </p>
            <p className="text-lg font-semibold">
              {t("pension.conclusionText2")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
