"use client"

import { useTranslation } from "react-i18next"

export default function SelvstaendigWebshopSpanienPage() {
  const { t } = useTranslation()
  return (
    <>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("webshop.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("webshop.subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
              {t("webshop.section5Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("webshop.section5Item1")}</li>
              <li>{t("webshop.section5Item2")}</li>
              <li>{t("webshop.section5Item3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
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

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
              {t("webshop.conclusionTitle")}
            </h2>
            <p>
              {t("webshop.conclusionText1")}
            </p>
            <p className="font-semibold text-lg">
              {t("webshop.conclusionText2")}
              <br />
              <a href="/contact" className="text-blue-700 underline">
                {t("webshop.conclusionLink")}
              </a>{" "}
              {t("webshop.conclusionText3")}
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
