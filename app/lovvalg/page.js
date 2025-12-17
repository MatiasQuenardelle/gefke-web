"use client"

import { useTranslation } from "react-i18next"

export default function LawChoiceInheritance() {
  const { t } = useTranslation()
  return (
    <>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("lawChoice.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("lawChoice.subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">{t("lawChoice.section1Title")}</h2>
            <p>
              {t("lawChoice.section1Text1")}{" "}
              <strong>{t("lawChoice.section1Text1Strong")}</strong>.
            </p>
            <p>
              {t("lawChoice.section1Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("lawChoice.section2Title")}
            </h2>
            <p>
              {t("lawChoice.section2Text1")}
            </p>
            <p>
              <strong>{t("lawChoice.section2ExampleLabel")}</strong>{" "}
              {t("lawChoice.section2ExampleText")}
            </p>
            <p>
              {t("lawChoice.section2Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("lawChoice.section3Title")}
            </h2>
            <p>
              {t("lawChoice.section3Text1")}{" "}
              <strong>{t("lawChoice.section3Text1Strong")}</strong>{" "}
              {t("lawChoice.section3Text1Text")}
            </p>
            <p>
              {t("lawChoice.section3Text2")}{" "}
              <strong>{t("lawChoice.section3Text2Strong")}</strong>{" "}
              {t("lawChoice.section3Text2Text")}
            </p>
            <p>
              {t("lawChoice.section3Text3")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("lawChoice.section4Title")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("lawChoice.section4Item1")}</li>
              <li>{t("lawChoice.section4Item2")}</li>
              <li>{t("lawChoice.section4Item3")}</li>
            </ul>
            <p>
              {t("lawChoice.section4Text")}{" "}
              <strong>{t("lawChoice.section4TextStrong")}</strong>{" "}
              {t("lawChoice.section4TextText")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("lawChoice.section5Title")}
            </h2>
            <p>
              {t("lawChoice.section5Text1")}
            </p>
            <p>{t("lawChoice.section5Text2")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("lawChoice.section5Item1")}</li>
              <li>{t("lawChoice.section5Item2")}</li>
              <li>{t("lawChoice.section5Item3")}</li>
            </ul>
            <p>
              <strong>{t("lawChoice.section5ExampleLabel")}</strong>{" "}
              {t("lawChoice.section5ExampleText")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("lawChoice.section6Title")}
            </h2>
            <p>
              {t("lawChoice.section6Text1")}
            </p>
            <p>
              {t("lawChoice.section6Text2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("lawChoice.section7Title")}
            </h2>
            <p>{t("lawChoice.section7Text1")}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("lawChoice.section7Item1")}</li>
              <li>{t("lawChoice.section7Item2")}</li>
              <li>{t("lawChoice.section7Item3")}</li>
            </ul>
            <p>
              {t("lawChoice.section7Text2")}
            </p>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">{t("lawChoice.conclusionTitle")}</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{t("lawChoice.conclusionItem1")}</li>
              <li>{t("lawChoice.conclusionItem2")}</li>
              <li>{t("lawChoice.conclusionItem3")}</li>
              <li>{t("lawChoice.conclusionItem4")}</li>
            </ul>
            <p className="font-semibold text-lg">
              {t("lawChoice.conclusionText")}
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
