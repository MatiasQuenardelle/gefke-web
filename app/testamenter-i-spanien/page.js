"use client"

import { useTranslation } from "react-i18next"

export default function TestamenterISpanienPage() {
  const { t } = useTranslation()
  return (
    <>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("testamenter.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("testamenter.subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("testamenter.section1Title")}
            </h2>
            <p>
              {t("testamenter.section1Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
              {t("testamenter.section4Title")}
            </h2>
            <p>
              {t("testamenter.section4Text")}
            </p>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
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
              <a href="/contact" className="text-blue-700 underline">
                {t("testamenter.conclusionLink")}
              </a>{" "}
              {t("testamenter.conclusionText3")}
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
