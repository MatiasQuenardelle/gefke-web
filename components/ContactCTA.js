"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Merriweather } from "next/font/google"
import danish from "@/public/locales/da.json"
import { trackEvent } from "@/lib/gtag"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })

export default function ContactCTA() {
  const t = danish
  const pathname = usePathname()
  const isPropertyHomepage = pathname === "/"

  const badge = isPropertyHomepage
    ? "Afklaring før køb og underskrift"
    : t.contactCTA.badge
  const title1 = isPropertyHomepage ? "Overvejer du bolig" : t.contactCTA.title1
  const title2 = isPropertyHomepage ? "i Spanien?" : t.contactCTA.title2
  const description = isPropertyHomepage
    ? "Få en samlet juridisk vurdering af køb, struktur og skat, før små fejl udvikler sig til dyre konsekvenser."
    : t.contactCTA.description
  const descriptionHighlight = isPropertyHomepage
    ? "Ét samlet forløb fra første spørgsmål til næste konkrete skridt."
    : t.contactCTA.descriptionHighlight
  const button1 = isPropertyHomepage
    ? "Book en uforpligtende samtale"
    : t.contactCTA.button1
  const button2 = isPropertyHomepage ? "Ring direkte nu" : t.contactCTA.button2

  const scrollToContact = () => {
    trackEvent("homepage_property_cta_click", {
      location: "bottom_cta",
      target: "contact",
    })

    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const callNow = () => {
    trackEvent("homepage_property_cta_click", {
      location: "bottom_cta",
      target: "phone",
    })

    window.open("tel:+4593841822", "_self")
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#3A5A4E] via-[#4AA07D] to-[#4A6A5E] text-white">
      <div className="absolute inset-0">
        <div className="absolute -translate-x-48 -translate-y-48 left-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-36 translate-y-36 rounded-full bg-emerald-400/10 blur-3xl animate-float delay-1000" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/5 blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-[10vh] md:flex-row md:px-20 md:py-[12vh]">
        <div className="order-2 z-10 flex justify-center md:order-1 md:w-1/2 md:justify-start">
          <div className="relative group animate-slide-in-right">
            <div className="absolute -left-6 -top-6 h-12 w-12 rounded-full bg-emerald-400/20 blur-lg animate-float" />
            <div className="absolute -bottom-6 -right-6 h-8 w-8 rounded-lg bg-teal-400/20 blur-lg animate-float delay-1000" />

            <div className="relative overflow-hidden rounded-3xl shadow-luxury transition-all duration-700 group-hover:shadow-luxury-hover">
              <Image
                src="/images/CristianGefke.png"
                alt={t.contactCTA.imageAlt}
                width={480}
                height={560}
                priority
                className="h-auto w-full max-w-xs object-cover transition-transform duration-700 group-hover:scale-110 md:max-w-sm"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <div className="absolute -right-4 -top-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 px-6 py-3 text-sm font-bold text-[#3A5A4E] shadow-luxury animate-float delay-500 transition-transform duration-500 group-hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <div className="text-xs text-gray-600">{t.contactCTA.badgeMember}</div>
                  <div className="font-bold">{t.contactCTA.badgeAssociation}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 z-10 space-y-8 text-center md:order-2 md:w-1/2 md:text-left">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              {badge}
            </div>
          </div>

          <h2
            className={`${merri.className} text-4xl leading-tight animate-slide-in-right delay-300 text-shadow-lg md:text-6xl lg:text-7xl`}
          >
            {title1}
            <br />
            <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              {title2}
            </span>
          </h2>

          <p className="mx-auto max-w-md text-xl leading-relaxed text-gray-200 animate-fade-in-up delay-500 text-shadow md:mx-0 md:max-w-none md:text-2xl">
            {description}
            <span className="mt-2 block font-semibold text-emerald-200">
              {descriptionHighlight}
            </span>
          </p>

          <div className="flex flex-col gap-4 pt-6 animate-fade-in-up delay-700 sm:flex-row">
            <button
              onClick={scrollToContact}
              className="group relative overflow-hidden rounded-xl bg-white px-10 py-5 text-lg font-bold text-[#3A5A4E] shadow-luxury transition-all duration-500 hover:scale-105 hover:bg-gray-100 hover:shadow-luxury-hover"
            >
              <span className="relative z-10 flex items-center gap-3">
                {button1}
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
            </button>

            <button
              onClick={callNow}
              className="group relative overflow-hidden rounded-xl border-2 border-white/30 px-10 py-5 text-lg font-bold backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/50 hover:bg-white/10"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {button2}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-300 animate-fade-in-up delay-1000 md:justify-start">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:bg-white/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-500">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">
                  {isPropertyHomepage ? "Køb, struktur og skat" : t.contactCTA.trust1.title}
                </div>
                <div className="text-xs">
                  {isPropertyHomepage ? "Afklares samlet før underskrift" : t.contactCTA.trust1.subtitle}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:bg-white/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">
                  {isPropertyHomepage ? "Rådgivning på dansk" : t.contactCTA.trust2.title}
                </div>
                <div className="text-xs">
                  {isPropertyHomepage ? "Kommunikation og næste skridt uden friktion" : t.contactCTA.trust2.subtitle}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:bg-white/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-500">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">
                  {isPropertyHomepage ? "Før små fejl bliver dyre" : t.contactCTA.trust3.title}
                </div>
                <div className="text-xs">
                  {isPropertyHomepage ? "Tidlig afklaring giver bedre beslutninger" : t.contactCTA.trust3.subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
