"use client"

import { useTranslation } from "react-i18next"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import Link from "next/link"

export default function WorkInSpainArticle() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/work-in-spain", t)
  
  return (
    <>
      <Breadcrumb 
        items={[]}
        currentPage={t("workInSpain.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#3A5A4E] leading-tight">
              {t("workInSpain.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("workInSpain.subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("workInSpain.section1Title")}
            </h2>
            <p>
              {t("workInSpain.section1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>
                  <Link href="/residency-spain" className="text-emerald-600 hover:text-emerald-800 underline">
                    {t("workInSpain.section1Item1Label")}
                  </Link>
                </strong>{" "}
                {t("workInSpain.section1Item1Text")}
              </li>
            </ul>
            <h3 className="font-semibold text-gray-800">
              {t("workInSpain.section1Subtitle")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("workInSpain.section1Item2")}</li>
              <li>{t("workInSpain.section1Item3")}</li>
              <li>{t("workInSpain.section1Item4")}</li>
              <li>{t("workInSpain.section1Item5")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("workInSpain.section2Title")}
            </h2>
            <p>
              {t("workInSpain.section2Text")}
            </p>
            <h3 className="font-semibold text-gray-800">
              {t("workInSpain.section2Subtitle")}
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("workInSpain.section2Item1")}</li>
              <li>{t("workInSpain.section2Item2")}</li>
              <li>{t("workInSpain.section2Item3")}</li>
              <li>{t("workInSpain.section2Item4")}</li>
              <li>{t("workInSpain.section2Item5")}</li>
            </ul>
            <p>
              {t("workInSpain.section2Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("workInSpain.section3Title")}
            </h2>
            <p>{t("workInSpain.section3Text")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("workInSpain.section3Item1")}</li>
              <li>{t("workInSpain.section3Item2")}</li>
              <li>{t("workInSpain.section3Item3")}</li>
              <li>{t("workInSpain.section3Item4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("workInSpain.section4Title")}
            </h2>
            <p>
              {t("workInSpain.section4Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("workInSpain.section4Item1")}</li>
              <li>{t("workInSpain.section4Item2")}</li>
              <li>{t("workInSpain.section4Item3")}</li>
              <li>{t("workInSpain.section4Item4")}</li>
              <li>{t("workInSpain.section4Item5")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("workInSpain.section5Title")}
            </h2>
            <p>
              {t("workInSpain.section5Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("workInSpain.section5Item1")}</li>
              <li>{t("workInSpain.section5Item2")}</li>
              <li>{t("workInSpain.section5Item3")}</li>
              <li>{t("workInSpain.section5Item4")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("workInSpain.conclusionTitle")}
            </h2>
            <p>
              {t("workInSpain.conclusionText1")}
            </p>
            <p>
              {t("workInSpain.conclusionText2")}
            </p>
            <p className="text-lg font-semibold">
              {t("workInSpain.conclusionText3")}
            </p>
          </section>
        </article>
      </main>
      
      <RelatedServices services={relatedServices} />
    </>
  )
}
