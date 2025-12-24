"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function TestamenterISpanienPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/testamenter-i-spanien", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("testamenter.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/family.webp"
          alt={t("testamenter.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("testamenter.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("testamenter.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="testamenter" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("testamenter.section1Title")}
            </h2>
            <p>
              {t("testamenter.section1Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("testamenter.section2Title")}
            </h2>
            <p>
              {t("testamenter.section2Text")}
            </p>
            <p className="italic">
              {t("testamenter.section2Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("testamenter.section3Title")}
            </h2>
            <p>
              {t("testamenter.section3Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("testamenter.section3Item1")}</li>
              <li>{t("testamenter.section3Item2")}</li>
              <li>{t("testamenter.section3Item3")}</li>
            </ul>
            <p>
              {t("testamenter.section3Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("testamenter.section4Title")}
            </h2>
            <p>
              {t("testamenter.section4Text")}
            </p>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("testamenter.conclusionTitle")}
            </h2>
            <p>
              {t("testamenter.conclusionText")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("testamenter.conclusionItem1")}</li>
              <li>{t("testamenter.conclusionItem2")}</li>
              <li>{t("testamenter.conclusionItem3")}</li>
              <li>{t("testamenter.conclusionItem4")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("testamenter.conclusionText2")}
              <br />
              <a href="/contact" className="text-[#4AA07D] underline">
                {t("testamenter.conclusionLink")}
              </a>{" "}
              {t("testamenter.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
