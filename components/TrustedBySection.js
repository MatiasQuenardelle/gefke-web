"use client"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function TrustedBySection() {
  const { t } = useTranslation()
  const logos = [
    { src: "/images/obsidian1.png", altKey: "obsidian" },
    { src: "/images/premier.png", altKey: "premier" },
    { src: "/images/lumipop.png", altKey: "lumipop" },
  ]

  return (
    <section className="w-full bg-black py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-white text-xl md:text-2xl font-semibold mb-8">
          {t("homepage.trusted.title")}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center
                         p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300
                         border border-white/10 hover:border-white/20"
            >
              <Image
                src={logo.src}
                alt={t(`homepage.trusted.logoAlt.${logo.altKey}`)}
                width={200}
                height={70}
                sizes="(max-width: 768px) 140px, 200px"
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 h-12 w-[140px] md:w-[200px] md:h-[70px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
