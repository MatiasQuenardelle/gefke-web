"use client"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useTranslation } from "react-i18next"

export default function FAQ() {
  const { t } = useTranslation()
  const [openItems, setOpenItems] = useState(new Set())
  
  const faqs = [
    {
      question: t("homepage.faq.faq1.question"),
      answer: t("homepage.faq.faq1.answer"),
      category: t("homepage.faq.faq1.category"),
    },
    {
      question: t("homepage.faq.faq2.question"),
      answer: t("homepage.faq.faq2.answer"),
      category: t("homepage.faq.faq2.category"),
    },
    {
      question: t("homepage.faq.faq3.question"),
      answer: t("homepage.faq.faq3.answer"),
      category: t("homepage.faq.faq3.category"),
    },
    {
      question: t("homepage.faq.faq4.question"),
      answer: t("homepage.faq.faq4.answer"),
      category: t("homepage.faq.faq4.category"),
    },
  ]

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 px-6 md:px-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-2000 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#5A7A6E]/10 rounded-full text-sm font-medium text-[#5A7A6E] mb-6 border border-[#5A7A6E]/20 hover:bg-[#5A7A6E]/15 transition-all duration-300">
            <div className="w-2 h-2 bg-[#5A7A6E] rounded-full animate-pulse"></div>
            {t("homepage.faq.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 gradient-text">
            {t("homepage.faq.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("homepage.faq.subtitle")}
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-luxury hover:shadow-luxury-hover 
                         border border-gray-100 overflow-hidden transition-all duration-500 
                         animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Category Badge */}
              <div className="px-6 pt-4">
                <span
                  className="inline-block px-3 py-1 bg-gradient-to-r from-[#5A7A6E]/10 to-emerald-500/10
                                 text-[#5A7A6E] text-xs font-medium rounded-full border border-[#5A7A6E]/20"
                >
                  {faq.category}
                </span>
              </div>

              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 focus:outline-none group-hover:bg-gray-50/50 transition-colors duration-300"
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-panel-${index}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 id={`faq-question-${index}`} className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#4AA07D] transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br from-[#5A7A6E] to-[#4AA07D] rounded-full flex items-center justify-center transform transition-all duration-500 ${
                        openItems.has(index)
                          ? "rotate-180 scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-all duration-500 ease-in-out ${
                  openItems.has(index)
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-xl p-6 border border-gray-100">
                    <div className="prose prose-gray max-w-none">
                      {faq.answer.split("\n\n").map((paragraph, pIndex) => {
                        if (
                          paragraph.startsWith("**") &&
                          paragraph.endsWith("**")
                        ) {
                          return (
                            <h4
                              key={pIndex}
                              className="text-lg font-bold text-[#5A7A6E] mt-6 mb-3 first:mt-0"
                            >
                              {paragraph.replace(/\*\*/g, "")}
                            </h4>
                          )
                        }
                        if (paragraph.startsWith("- ")) {
                          return (
                            <ul key={pIndex} className="space-y-2 mb-4">
                              {paragraph.split("\n").map((item, iIndex) => (
                                <li
                                  key={iIndex}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-2 h-2 bg-[#5A7A6E] rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 leading-relaxed">
                                    {item.replace("- ", "")}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )
                        }
                        return (
                          <p
                            key={pIndex}
                            className="text-gray-700 leading-relaxed mb-4 last:mb-0"
                          >
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-1000">
          <div className="bg-gradient-to-br from-[#5A7A6E] to-[#4AA07D] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-luxury">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t("homepage.faq.ctaTitle")}
              </h3>
              <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
                {t("homepage.faq.ctaText")}
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#5A7A6E] rounded-xl font-bold
                           transition-all duration-500 hover:bg-gray-100 hover:scale-105 shadow-luxury hover:shadow-luxury-hover"
              >
                <span>{t("homepage.faq.ctaButton")}</span>
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
