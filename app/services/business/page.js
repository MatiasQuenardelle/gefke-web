"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import { Building, Briefcase, ShoppingCart, Building2, DollarSign, Users, ArrowRight } from "lucide-react"

export default function BusinessHub() {
  const { t } = useTranslation()

  const services = [
    {
      title: t("startVirksomhed.title"),
      description: t("startVirksomhed.subtitle"),
      href: "/starte-virksomhed-spanien",
      icon: Building,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: t("laborLaw.title"),
      description: t("laborLaw.subtitle"),
      href: "/arbejdsret-i-spanien",
      icon: Briefcase,
      color: "bg-green-50 text-green-600"
    },
    {
      title: t("webshop.title"),
      description: t("webshop.subtitle"),
      href: "/selvstaendig-webshop-spanien",
      icon: ShoppingCart,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: t("danishHolding.title"),
      description: t("danishHolding.subtitle"),
      href: "/dansk-holder-spansk-selskab",
      icon: Building2,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: t("skat.title"),
      description: t("skat.subtitle"),
      href: "/skat",
      icon: DollarSign,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: t("workInSpain.title"),
      description: t("workInSpain.subtitle"),
      href: "/work-in-spain",
      icon: Users,
      color: "bg-teal-50 text-teal-600"
    }
  ]

  return (
    <>
      <Breadcrumb
        items={[
          { label: t("businessHub.breadcrumbServices") || "Tjenester", href: "/" }
        ]}
        currentPage={t("businessHub.title")}
      />

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5A7A6E] leading-tight mb-6">
              {t("businessHub.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t("businessHub.subtitle")}
            </p>
          </header>

          {/* Overview Section */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5A7A6E] mb-4">
              {t("businessHub.overviewTitle")}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{t("businessHub.overviewText1")}</p>
              <p>{t("businessHub.overviewText2")}</p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("businessHub.servicesTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col"
                  >
                    <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-emerald-600 font-medium">
                      <span>{t("businessHub.learnMore") || "Læs mere"}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5A7A6E] mb-6">
              {t("businessHub.whyChooseTitle")}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("businessHub.whyChoose1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("businessHub.whyChoose2")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("businessHub.whyChoose3")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("businessHub.whyChoose4")}</span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-[#5A7A6E] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("businessHub.ctaTitle")}
            </h2>
            <p className="text-lg mb-6 text-emerald-100">
              {t("businessHub.ctaText")}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#5A7A6E] px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              {t("businessHub.ctaButton")}
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
