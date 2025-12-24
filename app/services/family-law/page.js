"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import { Heart, Scale, FileCheck, ArrowRight } from "lucide-react"

export default function FamilyLawHub() {
  const { t } = useTranslation()

  const services = [
    {
      title: t("divorce.title"),
      description: t("divorce.subtitle"),
      href: "/divorce-spain",
      icon: Heart,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: t("testamenter.title"),
      description: t("testamenter.subtitle"),
      href: "/testamenter-i-spanien",
      icon: FileCheck,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: t("lawChoice.title"),
      description: t("lawChoice.subtitle"),
      href: "/lovvalg",
      icon: Scale,
      color: "bg-teal-50 text-teal-600"
    }
  ]

  return (
    <>
      <Breadcrumb
        items={[
          { label: t("familyLawHub.breadcrumbServices") || "Tjenester", href: "/" }
        ]}
        currentPage={t("familyLawHub.title")}
      />

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5A7A6E] leading-tight mb-6">
              {t("familyLawHub.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t("familyLawHub.subtitle")}
            </p>
          </header>

          {/* Overview Section */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5A7A6E] mb-4">
              {t("familyLawHub.overviewTitle")}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{t("familyLawHub.overviewText1")}</p>
              <p>{t("familyLawHub.overviewText2")}</p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("familyLawHub.servicesTitle")}
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
                      <span>{t("familyLawHub.learnMore") || "Læs mere"}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5A7A6E] mb-6">
              {t("familyLawHub.whyChooseTitle")}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-rose-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("familyLawHub.whyChoose1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("familyLawHub.whyChoose2")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("familyLawHub.whyChoose3")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t("familyLawHub.whyChoose4")}</span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-[#5A7A6E] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("familyLawHub.ctaTitle")}
            </h2>
            <p className="text-lg mb-6 text-emerald-100">
              {t("familyLawHub.ctaText")}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#5A7A6E] px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              {t("familyLawHub.ctaButton")}
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
