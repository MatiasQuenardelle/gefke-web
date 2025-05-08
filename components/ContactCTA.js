"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })

export default function ContactCTA() {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <section className="w-full bg-[#003366] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-[6vh]">
        {/* Portrait */}
        <div className="md:w-1/2 md:scale-136 flex justify-center md:justify-start order-2 md:order-1">
          <Image
            src="/images/CristianGefke.png"
            alt={t("contactCTA.imageAlt")}
            width={480}
            height={560}
            priority
            className="w-full max-w-xs md:max-w-sm h-auto object-cover grayscale contrast-125 brightness-110"
          />
        </div>

        {/* Copy */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left order-1 md:order-2">
          <h2
            className={`${merri.className} text-3xl md:text-5xl leading-tight`}
          >
            {t("contactCTA.heading")}
          </h2>

          <p className="text-gray-200 max-w-md md:max-w-none mx-auto md:mx-0">
            {t("contactCTA.description")}
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="inline-block px-9 py-3 border border-white rounded transition-all duration-200 hover:bg-white hover:text-[#003366]"
          >
            {t("contactCTA.button")}
          </button>
        </div>
      </div>
    </section>
  )
}
