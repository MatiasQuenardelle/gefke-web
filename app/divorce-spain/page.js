"use client"

import Head from "next/head"
import { useTranslation } from "react-i18next"

export default function DivorceSpainArticle() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("divorce.metaTitle")}</title>
        <meta
          name="description"
          content={t("divorce.metaDescription")}
        />
        <meta
          name="keywords"
          content="skilsmisse i Spanien, ægtefælleformue, EU-forordning, ægteskab, advokat Spanien, international skilsmisse"
        />
        <meta name="author" content="Christian Gefke" />
        <meta
          property="og:title"
          content={t("divorce.ogTitle")}
        />
        <meta
          property="og:description"
          content={t("divorce.ogDescription")}
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="da_DK" />
        <meta
          property="og:url"
          content="https://www.christiangefke.com/divorce-spain"
        />
      </Head>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("divorce.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("divorce.subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
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
            <h2 className="text-2xl font-bold text-blue-800">
              {t("divorce.section6Title")}
            </h2>
            <p>
              {t("divorce.section6Text")}
            </p>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
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
    </>
  )
}
