"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function InternationalInheritanceJurisdiction() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/opholdstilladelse", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("internationalInheritance.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/family.webp"
          alt={t("internationalInheritance.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("internationalInheritance.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("internationalInheritance.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="internationalInheritance" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">{t("internationalInheritance.section1Title")}</h2>
            <p>
              {t("internationalInheritance.section1Text1")}
            </p>
            <p>
              {t("internationalInheritance.section1Text2")}{" "}
              <strong>{t("internationalInheritance.section1Text2Strong1")}</strong>{" "}
              {t("internationalInheritance.section1Text2Text")}{" "}
              <strong>{t("internationalInheritance.section1Text2Strong2")}</strong>
              {t("internationalInheritance.section1Text2Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("internationalInheritance.section2Title")}
            </h2>
            <p>
              {t("internationalInheritance.section2Text1")}{" "}
              <strong>{t("internationalInheritance.section2Text1Strong")}</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("internationalInheritance.section2Item1")}</li>
              <li>{t("internationalInheritance.section2Item2")}</li>
              <li>{t("internationalInheritance.section2Item3")}</li>
            </ul>
            <p>
              {t("internationalInheritance.section2Text2")}{" "}
              <strong>{t("internationalInheritance.section2Text2Strong")}</strong>{" "}
              {t("internationalInheritance.section2Text2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("internationalInheritance.section3Title")}
            </h2>
            <p>
              {t("internationalInheritance.section3Text1")}{" "}
              <strong>{t("internationalInheritance.section3Text1Strong1")}</strong>{" "}
              {t("internationalInheritance.section3Text1Text")}{" "}
              <strong>{t("internationalInheritance.section3Text1Strong2")}</strong>{" "}
              {t("internationalInheritance.section3Text1Text2")}
            </p>
            <p>
              {t("internationalInheritance.section3Text2")}{" "}
              <strong>{t("internationalInheritance.section3Text2Strong")}</strong>{" "}
              {t("internationalInheritance.section3Text2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("internationalInheritance.section4Title")}
            </h2>
            <p>{t("internationalInheritance.section4Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("internationalInheritance.section4Item1")}</li>
              <li>{t("internationalInheritance.section4Item2")}</li>
              <li>{t("internationalInheritance.section4Item3")}</li>
            </ul>
            <p>
              {t("internationalInheritance.section4Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("internationalInheritance.section5Title")}
            </h2>
            <p>
              {t("internationalInheritance.section5Text1")}{" "}
              <strong>{t("internationalInheritance.section5Text1Strong")}</strong>{" "}
              {t("internationalInheritance.section5Text1Text")}{" "}
              <strong>{t("internationalInheritance.section5Text1Strong2")}</strong>{" "}
              {t("internationalInheritance.section5Text1Text2")}
            </p>
            <p>
              {t("internationalInheritance.section5Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("internationalInheritance.section6Title")}
            </h2>
            <p>
              {t("internationalInheritance.section6Text1")}{" "}
              <strong>{t("internationalInheritance.section6Text1Strong1")}</strong>{" "}
              {t("internationalInheritance.section6Text1Text")}{" "}
              <strong>{t("internationalInheritance.section6Text1Strong2")}</strong>.
            </p>
            <p>
              {t("internationalInheritance.section6Text2")}
            </p>
            <p>
              {t("internationalInheritance.section6Text3")}
            </p>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">{t("internationalInheritance.conclusionTitle")}</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                {t("internationalInheritance.conclusionItem1")}{" "}
                <strong>{t("internationalInheritance.conclusionItem1Strong")}</strong>{" "}
                {t("internationalInheritance.conclusionItem1Text")}
              </li>
              <li>
                <strong>{t("internationalInheritance.conclusionItem2Strong1")}</strong>{" "}
                {t("internationalInheritance.conclusionItem2Text")}{" "}
                <strong>{t("internationalInheritance.conclusionItem2Strong2")}</strong>{" "}
                {t("internationalInheritance.conclusionItem2Text2")}
              </li>
              <li>
                {t("internationalInheritance.conclusionItem3")}{" "}
                <strong>{t("internationalInheritance.conclusionItem3Strong")}</strong>{" "}
                {t("internationalInheritance.conclusionItem3Text")}
              </li>
            </ul>
            <p className="font-semibold text-lg">
              {t("internationalInheritance.conclusionText")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
