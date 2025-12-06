"use client"

import Head from "next/head"
import { Merriweather } from "next/font/google"
import { useTranslation } from "react-i18next"

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] })

function AboutHero() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-[#003366] text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-[8vh]">
        <h1 className={`${merri.className} text-5xl md:text-7xl leading-none`}>
          {t("about.heroTitle")}
        </h1>
        <p className="text-lg md:text-2xl font-light">
          {t("about.heroSubtitle")}
        </p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t("about.metaTitle")}</title>
        <meta
          name="description"
          content={t("about.metaDescription")}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourdomain.com/about" />
      </Head>

      <AboutHero />

      <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-relaxed bg-gray-50 text-gray-900">
        <section className="space-y-6">
          <p className="text-xl font-semibold text-gray-900">
            {t("about.intro")}
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            {t("about.introEnglish")}
          </p>

          <p className="text-gray-800">
            {t("about.education")}
          </p>

          <p className="text-gray-800">
            {t("about.career")}
          </p>

          <p className="text-gray-800">
            {t("about.passion")}
          </p>

          <p className="text-gray-800">
            {t("about.closing")}
          </p>
        </section>

        <section>
          <h2 className={`${merri.className} text-3xl mb-6 text-gray-900`}>
            {t("about.backgroundTitle")}
          </h2>

          <ul className="space-y-4 text-gray-800">
            <li>
              <span className="font-bold text-gray-900">{t("about.background2012")}</span> {t("about.background2012Text")}
            </li>
            <li>
              <span className="font-bold text-gray-900">{t("about.background2017")}</span> {t("about.background2017Text")}
            </li>
            <li>
              <span className="font-bold text-gray-900">{t("about.background2019")}</span> {t("about.background2019Text")}
            </li>
            <li>
              <span className="font-bold text-gray-900">{t("about.background2021")}</span> {t("about.background2021Text")}
            </li>
            <li>
              <span className="font-bold text-gray-900">{t("about.background2022")}</span> {t("about.background2022Text")}
            </li>
            <li>
              <span className="font-bold text-gray-900">{t("about.background2022b")}</span> {t("about.background2022bText")}
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
