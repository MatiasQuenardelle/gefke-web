"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"
import FAQSection from "@/components/FAQSection"

export default function DivorceSpainArticle() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/divorce-spain", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("divorce.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/family.webp"
          alt={t("divorce.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("divorce.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("divorce.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="divorce" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("divorce.section1Title")}
            </h2>
            <p>
              {t("divorce.section1Text1")}{" "}
              <strong>{t("divorce.section1Text1Strong")}</strong>{" "}
              {t("divorce.section1Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("divorce.section1Item1")}</li>
              <li>{t("divorce.section1Item2")}</li>
              <li>{t("divorce.section1Item3")}</li>
            </ul>
            <p>
              {t("divorce.section1Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("divorce.section2Title")}
            </h2>
            <p>
              {t("divorce.section2Text1")}{" "}
              <strong>{t("divorce.section2Text1Strong")}</strong>{" "}
              {t("divorce.section2Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("divorce.section2Item1")}</li>
              <li>{t("divorce.section2Item2")}</li>
              <li>{t("divorce.section2Item3")}</li>
              <li>{t("divorce.section2Item4")}</li>
            </ul>
            <p>{t("divorce.section2Text2")}</p>
            <p className="font-semibold text-rose-700">
              {t("divorce.section2Text3")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("divorce.section3Title")}
            </h2>
            <p>
              {t("divorce.section3Text1")}{" "}
              <strong>{t("divorce.section3Text1Strong")}</strong>.
              {t("divorce.section3Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("divorce.section3Item1")}</li>
              <li>{t("divorce.section3Item2")}</li>
            </ul>
            <p>{t("divorce.section3Text2")}</p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>{t("divorce.section3Item3")}</li>
              <li>{t("divorce.section3Item4")}</li>
              <li>{t("divorce.section3Item5")}</li>
            </ol>
            <p>
              <strong>{t("divorce.section3ExampleLabel")}</strong>{" "}
              {t("divorce.section3ExampleText")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("divorce.section4Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("divorce.section4Item1Label")}</strong>{" "}
                {t("divorce.section4Item1Text")}
              </li>
              <li>
                <strong>{t("divorce.section4Item2Label")}</strong>{" "}
                {t("divorce.section4Item2Text")}
              </li>
              <li>
                <strong>{t("divorce.section4Item3Label")}</strong>{" "}
                {t("divorce.section4Item3Text")}
              </li>
            </ul>
            <p>
              {t("divorce.section4Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("divorce.section5Title")}
            </h2>
            <p>
              <strong>{t("divorce.section5Text1Label")}</strong>{" "}
              {t("divorce.section5Text1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("divorce.section5Item1")}</li>
              <li>{t("divorce.section5Item2")}</li>
              <li>{t("divorce.section5Item3")}</li>
              <li>{t("divorce.section5Item4")}</li>
            </ul>
            <p>
              <strong>{t("divorce.section5Text2Label")}</strong>{" "}
              {t("divorce.section5Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("divorce.section6Title")}
            </h2>
            <p>
              {t("divorce.section6Text")}
            </p>
          </section>

          <FAQSection translationKey="divorce" />

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("divorce.conclusionTitle")}
            </h2>
            <p>
              {t("divorce.conclusionText")}
            </p>
            <p className="font-semibold text-lg">
              {t("divorce.conclusionText2")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
