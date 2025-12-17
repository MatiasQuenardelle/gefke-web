"use client"

import { useTranslation } from "react-i18next"

export default function DanskHoldingSpanienPage() {
  const { t } = useTranslation()
  return (
    <>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("danishHolding.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("danishHolding.subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("danishHolding.section1Title")}
            </h2>
            <p>
              {t("danishHolding.section1Text1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{t("danishHolding.section1Item1Label")}</strong>{" "}
                {t("danishHolding.section1Item1Text")}
              </li>
              <li>
                <strong>{t("danishHolding.section1Item2Label")}</strong>
              </li>
            </ul>
            <p className="font-semibold">{t("danishHolding.section1Subtitle")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("danishHolding.section1Item3")}</li>
              <li>{t("danishHolding.section1Item4")}</li>
              <li>{t("danishHolding.section1Item5")}</li>
            </ul>
            <p>
              {t("danishHolding.section1Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("danishHolding.section2Title")}
            </h2>
            <p>
              {t("danishHolding.section2Text1")}{" "}
              <strong>{t("danishHolding.section2Text1Strong")}</strong>{" "}
              {t("danishHolding.section2Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("danishHolding.section2Item1")}</li>
              <li>{t("danishHolding.section2Item2")}</li>
            </ul>
            <p>
              {t("danishHolding.section2Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("danishHolding.section3Title")}
            </h2>
            <p>
              {t("danishHolding.section3Text1")}
            </p>
            <p className="font-semibold">{t("danishHolding.section3Subtitle")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("danishHolding.section3Item1")}</li>
              <li>{t("danishHolding.section3Item2")}</li>
              <li>{t("danishHolding.section3Item3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("danishHolding.section4Title")}
            </h2>
            <p>
              {t("danishHolding.section4Text1")}{" "}
              <strong>{t("danishHolding.section4Text1Strong")}</strong>
              {t("danishHolding.section4Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("danishHolding.section4Item1")}</li>
              <li>{t("danishHolding.section4Item2")}</li>
            </ul>
            <p>
              {t("danishHolding.section4Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("danishHolding.section5Title")}
            </h2>
            <p>
              {t("danishHolding.section5Text1")}{" "}
              <strong>{t("danishHolding.section5Text1Strong")}</strong>.
              {t("danishHolding.section5Text1Text")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("danishHolding.section5Item1")}</li>
              <li>{t("danishHolding.section5Item2")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
              {t("danishHolding.conclusionTitle")}
            </h2>
            <p>
              {t("danishHolding.conclusionText1")}
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("danishHolding.conclusionItem1")}</li>
              <li>{t("danishHolding.conclusionItem2")}</li>
              <li>{t("danishHolding.conclusionItem3")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("danishHolding.conclusionText2")}
            </p>
            <p className="font-semibold text-lg">
              <a href="/contact" className="text-blue-700 underline">
                {t("danishHolding.conclusionLink")}
              </a>{" "}
              {t("danishHolding.conclusionText3")}
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
