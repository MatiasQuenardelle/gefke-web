"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import { ArrowRight, Heart, FileText } from "lucide-react"

export default function FamilieHubPage() {
  const { t } = useTranslation()

  const services = [
    {
      title: t("divorce.title"),
      description: t("divorce.subtitle"),
      href: "/divorce-spain",
      icon: Heart
    },
    {
      title: t("testamenter.title"),
      description: t("testamenter.subtitle"),
      href: "/testamenter-i-spanien",
      icon: FileText
    }
  ]

  return (
    <>
      <Breadcrumb
        items={[
          { label: t("nav.services") || "Tjenester", href: "/services" }
        ]}
        currentPage={t("hubFamilie.title")}
      />
      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("hubFamilie.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t("hubFamilie.subtitle")}
            </p>
          </header>

          <section className="space-y-6">
            <p className="text-lg">
              {t("hubFamilie.intro")}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("hubFamilie.servicesTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-gray-600 text-sm flex-grow">
                      {service.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              {t("hubFamilie.whyChooseTitle")}
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>{t("hubFamilie.reason1")}</li>
              <li>{t("hubFamilie.reason2")}</li>
              <li>{t("hubFamilie.reason3")}</li>
              <li>{t("hubFamilie.reason4")}</li>
            </ul>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
              {t("hubFamilie.ctaTitle")}
            </h2>
            <p>
              {t("hubFamilie.ctaText")}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t("hubFamilie.ctaButton")}
            </Link>
          </section>
        </article>
      </main>
    </>
  )
}
