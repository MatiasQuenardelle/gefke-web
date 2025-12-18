"use client"

import { useTranslation } from "react-i18next"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function ArbejdsretISpanienPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/arbejdsret-i-spanien", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("laborLaw.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("laborLaw.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("laborLaw.subtitle")}
            </p>
          </header>

          <ArticleMeta translationKey="laborLaw" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("laborLaw.section1Title")}
            </h2>
            <p>
              {t("laborLaw.section1Text1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("laborLaw.section1Item1Label")}</strong>{" "}
                {t("laborLaw.section1Item1Text")}
              </li>
              <li>
                <strong>{t("laborLaw.section1Item2Label")}</strong>{" "}
                {t("laborLaw.section1Item2Text")}
              </li>
            </ul>
            <p>
              {t("laborLaw.section1Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("laborLaw.section2Title")}
            </h2>
            <p>
              {t("laborLaw.section2Text1")}{" "}
              <strong>{t("laborLaw.section2Text1Strong")}</strong>.
            </p>
            <p>
              {t("laborLaw.section2Text2")}{" "}
              <em>{t("laborLaw.section2Text2Em")}</em>
              {t("laborLaw.section2Text2Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("laborLaw.section2Item1")}</li>
              <li>{t("laborLaw.section2Item2")}</li>
              <li>{t("laborLaw.section2Item3")}</li>
              <li>{t("laborLaw.section2Item4")}</li>
            </ul>
            <p>
              {t("laborLaw.section2Text3")}{" "}
              <strong>{t("laborLaw.section2Text3Strong1")}</strong>{" "}
              {t("laborLaw.section2Text3Text")}{" "}
              <strong>{t("laborLaw.section2Text3Strong2")}</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("laborLaw.section3Title")}
            </h2>
            <p>{t("laborLaw.section3Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("laborLaw.section3Item1")}</li>
              <li>{t("laborLaw.section3Item2")}</li>
              <li>{t("laborLaw.section3Item3")}</li>
              <li>{t("laborLaw.section3Item4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("laborLaw.section4Title")}
            </h2>
            <p>{t("laborLaw.section4Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("laborLaw.section4Item1")}</li>
              <li>{t("laborLaw.section4Item2")}</li>
              <li>{t("laborLaw.section4Item3")}</li>
              <li>{t("laborLaw.section4Item4")}</li>
              <li>{t("laborLaw.section4Item5")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("laborLaw.section5Title")}
            </h2>
            <p>{t("laborLaw.section5Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("laborLaw.section5Item1")}</li>
              <li>{t("laborLaw.section5Item2")}</li>
              <li>{t("laborLaw.section5Item3")}</li>
              <li>{t("laborLaw.section5Item4")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
              {t("laborLaw.conclusionTitle")}
            </h2>
            <p>
              {t("laborLaw.conclusionText1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("laborLaw.conclusionItem1")}</li>
              <li>{t("laborLaw.conclusionItem2")}</li>
              <li>{t("laborLaw.conclusionItem3")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("laborLaw.conclusionText2")}
              <br />
              <a href="/contact" className="text-blue-700 underline">
                {t("laborLaw.conclusionLink")}
              </a>{" "}
              {t("laborLaw.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
