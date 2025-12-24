"use client"

import { useTranslation } from "react-i18next"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import Link from "next/link"
import ArticleMeta from "@/components/ArticleMeta"

export default function ResidencySpainArticle() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/residency-spain", t)
  
  return (
    <>
      <Breadcrumb 
        items={[]}
        currentPage={t("residency.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-[#3A5A4E]">
              {t("residency.title")}
            </h1>
            <p className="mt-4 text-lg text-center text-gray-700">
              {t("residency.subtitle")}
            </p>
          </header>

          <ArticleMeta translationKey="residency" />

          <section className="space-y-6">
            <p>
              {t("residency.intro1")}
            </p>

            <p className="font-medium">
              {t("residency.intro2")}
              <span className="text-[#4AA07D] font-semibold">
                {" "}
                {t("residency.intro2Strong")}
              </span>
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-800">
              <li>{t("residency.introItem1")}</li>
              <li>{t("residency.introItem2")}</li>
              <li>{t("residency.introItem3")}</li>
            </ol>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("residency.section1Title")}
            </h2>

            <h3 className="text-xl font-semibold text-gray-800">
              {t("residency.section1Subtitle1")}
            </h3>
            <p>
              {t("residency.section1Text1")}{" "}
              <strong>
                <Link href="/residency-spain" className="text-emerald-600 hover:text-emerald-800 underline">
                  {t("residency.section1Text1Strong")}
                </Link>
              </strong>{" "}
              {t("residency.section1Text1Text")}
            </p>
            <p className="font-medium">{t("residency.section1Subtitle2")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("residency.section1Item1")}</li>
              <li>{t("residency.section1Item2")}</li>
              <li>{t("residency.section1Item3")}</li>
              <li>{t("residency.section1Item4")}</li>
            </ul>
            <p>
              {t("residency.section1Text2")}{" "}
              <strong>{t("residency.section1Text2Strong")}</strong>{" "}
              {t("residency.section1Text2Text")}
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              {t("residency.section1Subtitle3")}
            </h3>
            <p>
              {t("residency.section1Text3")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("residency.section1Item5")}</li>
              <li>{t("residency.section1Item6")}</li>
              <li>{t("residency.section1Item7")}</li>
            </ul>
            <p>
              {t("residency.section1Text4")}
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("residency.section2Title")}
            </h2>

            <h3 className="text-xl font-semibold">
              {t("residency.section2Subtitle1")}
            </h3>
            <p>
              {t("residency.section2Text1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("residency.section2Item1")}</li>
              <li>{t("residency.section2Item2")}</li>
              <li>{t("residency.section2Item3")}</li>
            </ul>
            <p>{t("residency.section2Subtitle2")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("residency.section2Item4")}</li>
              <li>{t("residency.section2Item5")}</li>
              <li>{t("residency.section2Item6")}</li>
            </ul>

            <h3 className="text-xl font-semibold">
              {t("residency.section2Subtitle3")}
            </h3>
            <p>
              {t("residency.section2Text2")}
            </p>
            <p className="italic">
              {t("residency.section2Text3")}
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("residency.section3Title")}
            </h2>

            <p>
              {t("residency.section3Text1")}{" "}
              <strong>{t("residency.section3Text1Strong")}</strong>{" "}
              {t("residency.section3Text1Text")}
            </p>

            <h3 className="text-xl font-semibold">{t("residency.section3Subtitle1")}</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("residency.section3Item1")}</li>
              <li>{t("residency.section3Item2")}</li>
              <li>{t("residency.section3Item3")}</li>
              <li>{t("residency.section3Item4")}</li>
            </ul>

            <h3 className="text-xl font-semibold">{t("residency.section3Subtitle2")}</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("residency.section3Item5")}</li>
              <li>{t("residency.section3Item6")}</li>
            </ul>

            <p>
              <strong>{t("residency.section3Text2Label")}</strong>{" "}
              {t("residency.section3Text2")}
            </p>
          </section>

          {/* Legal Help Section */}
          <section className="space-y-4 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("residency.helpTitle")}
            </h2>
            <p>
              {t("residency.helpText")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("residency.helpItem1")}</li>
              <li>{t("residency.helpItem2")}</li>
              <li>{t("residency.helpItem3")}</li>
              <li>{t("residency.helpItem4")}</li>
              <li>{t("residency.helpItem5")}</li>
            </ul>
          </section>

          <section className="text-center mt-10">
            <h2 className="text-2xl font-bold text-[#4AA07D] mb-4">
              {t("residency.ctaTitle")}
            </h2>
            <p className="text-lg">
              {t("residency.ctaText")}
            </p>
          </section>
        </article>
      </main>
      
      <RelatedServices services={relatedServices} />
    </>
  )
}
