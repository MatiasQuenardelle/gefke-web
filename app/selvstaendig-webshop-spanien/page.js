"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"
import ArticleMeta from "@/components/ArticleMeta"

export default function SelvstaendigWebshopSpanienPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/selvstaendig-webshop-spanien", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("webshop.title")}
      />

      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[450px] bg-[#3A5A4E]">
        <Image
          src="/images/services/business.webp"
          alt={t("webshop.title")}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A4E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {t("webshop.title")}
            </h1>
            <p className="mt-4 text-lg text-white/90">
              {t("webshop.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">

          <ArticleMeta translationKey="webshop" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("webshop.section1Title")}
            </h2>
            <p>
              {t("webshop.section1Text1")}{" "}
              <strong>{t("webshop.section1Text1Strong")}</strong>{" "}
              {t("webshop.section1Text1Text")}
            </p>
            <p className="font-semibold">{t("webshop.section1Subtitle")}</p>
            <ul className="list-decimal list-inside ml-4 space-y-1">
              <li>{t("webshop.section1Item1")}</li>
              <li>{t("webshop.section1Item2")}</li>
              <li>{t("webshop.section1Item3")}</li>
              <li>{t("webshop.section1Item4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("webshop.section2Title")}
            </h2>
            <p>
              {t("webshop.section2Text1")}{" "}
              <strong>{t("webshop.section2Text1Strong")}</strong>{" "}
              {t("webshop.section2Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("webshop.section2Item1")}</li>
              <li>{t("webshop.section2Item2")}</li>
            </ul>
            <p className="font-semibold">{t("webshop.section2Subtitle")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("webshop.section2Item3")}</li>
              <li>{t("webshop.section2Item4")}</li>
              <li>{t("webshop.section2Item5")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("webshop.section3Title")}
            </h2>
            <p>
              {t("webshop.section3Text1")}{" "}
              <strong>{t("webshop.section3Text1Strong")}</strong>
              {t("webshop.section3Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("webshop.section3Item1")}</li>
              <li>{t("webshop.section3Item2")}</li>
              <li>{t("webshop.section3Item3")}</li>
              <li>{t("webshop.section3Item4")}</li>
            </ul>
            <p>
              {t("webshop.section3Text2")}{" "}
              <strong>{t("webshop.section3Text2Strong")}</strong>
              {t("webshop.section3Text2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("webshop.section4Title")}
            </h2>
            <p>
              {t("webshop.section4Text1")}{" "}
              <strong>{t("webshop.section4Text1Strong")}</strong>
              {t("webshop.section4Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                {t("webshop.section4Item1")}{" "}
                <strong>{t("webshop.section4Item1Strong")}</strong>
              </li>
              <li>{t("webshop.section4Item2")}</li>
              <li>{t("webshop.section4Item3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("webshop.section5Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("webshop.section5Item1")}</li>
              <li>{t("webshop.section5Item2")}</li>
              <li>{t("webshop.section5Item3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("webshop.section6Title")}
            </h2>
            <p>
              {t("webshop.section6Text1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("webshop.section6Item1")}</li>
              <li>{t("webshop.section6Item2")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#3A5A4E]">
              {t("webshop.conclusionTitle")}
            </h2>
            <p>
              {t("webshop.conclusionText1")}
            </p>
            <p className="font-semibold text-lg">
              {t("webshop.conclusionText2")}
              <br />
              <a href="/contact" className="text-[#4AA07D] underline">
                {t("webshop.conclusionLink")}
              </a>{" "}
              {t("webshop.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
