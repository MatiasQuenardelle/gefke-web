"use client"

import { useTranslation } from "react-i18next"
import Breadcrumb from "@/components/Breadcrumb"
import RelatedServices from "@/components/RelatedServices"
import { getRelatedServices } from "@/lib/relatedServices"

export default function StarteVirksomhedSpanienPage() {
  const { t } = useTranslation()
  const relatedServices = getRelatedServices("/starte-virksomhed-spanien", t)

  return (
    <>
      <Breadcrumb
        items={[]}
        currentPage={t("startVirksomhed.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#5A7A6E] leading-tight">
              {t("startVirksomhed.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("startVirksomhed.subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("startVirksomhed.section0Title")}
            </h2>
            <ul className="list-decimal list-inside ml-4 space-y-1">
              <li>{t("startVirksomhed.section0Item1")}</li>
              <li>{t("startVirksomhed.section0Item2")}</li>
              <li>{t("startVirksomhed.section0Item3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("startVirksomhed.section1Title")}
            </h2>
            <p>
              {t("startVirksomhed.section1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("startVirksomhed.section1Item1")}</li>
              <li>{t("startVirksomhed.section1Item2")}</li>
              <li>{t("startVirksomhed.section1Item3")}</li>
              <li>{t("startVirksomhed.section1Item4")}</li>
              <li>{t("startVirksomhed.section1Item5")}</li>
            </ul>
            <p className="font-semibold">{t("startVirksomhed.section1Subtitle")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("startVirksomhed.section1Item6")}</li>
              <li>{t("startVirksomhed.section1Item7")}</li>
              <li>{t("startVirksomhed.section1Item8")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("startVirksomhed.section2Title")}
            </h2>
            <p>
              {t("startVirksomhed.section2Text")}{" "}
              <strong>{t("startVirksomhed.section2Strong")}</strong>
              {t("startVirksomhed.section2Text2")}
            </p>
            <p className="font-semibold">{t("startVirksomhed.section2Subtitle")}</p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>{t("startVirksomhed.section2Item1")}</li>
              <li>{t("startVirksomhed.section2Item2")}</li>
              <li>{t("startVirksomhed.section2Item3")}</li>
              <li>{t("startVirksomhed.section2Item4")}</li>
              <li>{t("startVirksomhed.section2Item5")}</li>
            </ol>
            <p className="font-semibold">{t("startVirksomhed.section2Subtitle2")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("startVirksomhed.section2Item6")}</li>
              <li>{t("startVirksomhed.section2Item7")}</li>
              <li>{t("startVirksomhed.section2Item8")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("startVirksomhed.section3Title")}
            </h2>
            <p>
              {t("startVirksomhed.section3Text")}
            </p>
            <p className="font-semibold">{t("startVirksomhed.section3Subtitle")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("startVirksomhed.section3Item1")}</li>
              <li>{t("startVirksomhed.section3Item2")}</li>
              <li>{t("startVirksomhed.section3Item3")}</li>
              <li>{t("startVirksomhed.section3Item4")}</li>
            </ul>
            <p className="font-semibold">{t("startVirksomhed.section3Subtitle2")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("startVirksomhed.section3Item5")}</li>
              <li>{t("startVirksomhed.section3Item6")}</li>
              <li>{t("startVirksomhed.section3Item7")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#4AA07D]">
              {t("startVirksomhed.section4Title")}
            </h2>
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">{t("startVirksomhed.tableHeader1")}</th>
                  <th className="p-2 border">{t("startVirksomhed.tableHeader2")}</th>
                  <th className="p-2 border">{t("startVirksomhed.tableHeader3")}</th>
                  <th className="p-2 border">{t("startVirksomhed.tableHeader4")}</th>
                  <th className="p-2 border">{t("startVirksomhed.tableHeader5")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">{t("startVirksomhed.tableRow1Col1")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow1Col2")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow1Col3")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow1Col4")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow1Col5")}</td>
                </tr>
                <tr>
                  <td className="p-2 border">{t("startVirksomhed.tableRow2Col1")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow2Col2")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow2Col3")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow2Col4")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow2Col5")}</td>
                </tr>
                <tr>
                  <td className="p-2 border">{t("startVirksomhed.tableRow3Col1")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow3Col2")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow3Col3")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow3Col4")}</td>
                  <td className="p-2 border">{t("startVirksomhed.tableRow3Col5")}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-6 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h2 className="text-2xl font-bold text-[#5A7A6E]">
              {t("startVirksomhed.conclusionTitle")}
            </h2>
            <p>
              {t("startVirksomhed.conclusionText")}
            </p>
            <p className="font-semibold text-lg">
              {t("startVirksomhed.conclusionText2")}{" "}
              <a href="/contact" className="text-[#4AA07D] underline">
                {t("startVirksomhed.conclusionLink")}
              </a>{" "}
              {t("startVirksomhed.conclusionText3")}
            </p>
          </section>
        </article>
      </main>

      <RelatedServices services={relatedServices} />
    </>
  )
}
