"use client"

import React from "react"
import { useTranslation } from "react-i18next"

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-[#003366] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t("privacy.title")}
        </h1>
      </div>
      <div className="bg-white text-black mt-12 px-4 py-8 rounded-md max-w-4xl mx-auto space-y-6 text-justify">
        <p>
          {t("privacy.intro")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section1Title")}</h2>
        <p>
          {t("privacy.section1Text")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section2Title")}</h2>
        <p>
          {t("privacy.section2Text")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section3Title")}</h2>
        <p>
          {t("privacy.section3Text1")}
        </p>
        <p>{t("privacy.section3Text2")}</p>
        <ul className="list-disc pl-6">
          <li>
            {t("privacy.section3Item1")}
          </li>
          <li>
            {t("privacy.section3Item2")}
          </li>
          <li>
            {t("privacy.section3Item3")}
          </li>
          <li>{t("privacy.section3Item4")}</li>
        </ul>
        <p>
          {t("privacy.section3Text3")}
        </p>

        <h2 className="text-xl font-bold">
          {t("privacy.section4Title")}
        </h2>

        <h3 className="font-semibold">{t("privacy.section4Subtitle1")}</h3>
        <p>
          {t("privacy.section4Text1")}
        </p>

        <h3 className="font-semibold">{t("privacy.section4Subtitle2")}</h3>
        <p>
          {t("privacy.section4Text2")}
        </p>

        <h3 className="font-semibold">{t("privacy.section4Subtitle3")}</h3>
        <ul className="list-disc pl-6">
          <li>{t("privacy.section4Item1")}</li>
          <li>{t("privacy.section4Item2")}</li>
        </ul>
        <p>
          {t("privacy.section4Text3")}
        </p>

        <h3 className="font-semibold">{t("privacy.section4Subtitle4")}</h3>
        <p>
          {t("privacy.section4Text4")}
        </p>

        <h3 className="font-semibold">{t("privacy.section4Subtitle5")}</h3>
        <p>
          {t("privacy.section4Text5")}
        </p>
        <p>
          {t("privacy.section4Text6")}
        </p>

        <h3 className="font-semibold">{t("privacy.section4Subtitle7")}</h3>
        <p>
          {t("privacy.section4Text7")}
        </p>

        <h3 className="font-semibold">{t("privacy.section4Subtitle8")}</h3>
        <p>
          {t("privacy.section4Text8")}
        </p>

        <h3 className="font-semibold">{t("privacy.section4Subtitle9")}</h3>
        <p>
          {t("privacy.section4Text9")}
        </p>

        <h2 className="text-xl font-bold">
          {t("privacy.section5Title")}
        </h2>
        <p>
          {t("privacy.section5Text")}
        </p>

        <h2 className="text-xl font-bold">
          {t("privacy.section6Title")}
        </h2>
        <p>
          {t("privacy.section6Text")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section7Title")}</h2>
        <p>
          {t("privacy.section7Text")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section8Title")}</h2>
        <p>
          {t("privacy.section8Text")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section9Title")}</h2>
        <p>
          {t("privacy.section9Text")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section10Title")}</h2>
        <p>{t("privacy.section10Text")}</p>

        <h2 className="text-xl font-bold">{t("privacy.section11Title")}</h2>
        <p>
          {t("privacy.section11Text")}
        </p>

        <h2 className="text-xl font-bold">{t("privacy.section12Title")}</h2>
        <p>
          {t("privacy.section12Text")}
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
