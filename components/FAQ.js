"use client"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    question: "Hvorfor skal jeg vælge dig frem for andre jurister i Spanien?",
    answer: `Som ekspert i dansk og spansk retssystem tilbyder jeg skræddersyet juridisk rådgivning og bistand til danske klienter, der ønsker at navigere i Spaniens komplekse lovgivning. Med min omfattende viden og erfaring sikrer jeg, at dine juridiske anliggender bliver håndteret professionelt og effektivt. Jeg leverer også juridiske ydelser til spaniere i Spanien, såvel som danskere i Danmark, dvs. ikke kun til danskere i Spanien.
    
Jeg besidder både titlen som advokat og jurist, hvilket betyder, at jeg kan tilbyde en bred vifte af juridiske tjenester. Disse skal primært ses som supplementerende til hinanden, da advokatydelser typisk involverer repræsentation for retten, mens juristydelser omfatter rådgivning, dokumenthåndtering og andre juridiske opgaver uden for retssalen.

Min tilgang er altid personlig og målrettet mod at forstå dine specifikke behov og omstændigheder. Uanset om du har brug for hjælp til ejendomshandler, familieretssager, virksomhedsdannelse eller skattemæssige spørgsmål, arbejder jeg tæt sammen med dig for at sikre, at du får den mest effektive løsning.

Derudover har jeg opbygget et omfattende netværk af professionelle samarbejdspartnere, herunder ejendomsmæglere, revisorer og andre specialister. Dette betyder, at jeg kan tilbyde dig en helhedsorienteret service, der dækker alle aspekter af dit projekt i Spanien.

Min flersprogethed og kulturelle forståelse af både Danmark og Spanien gør mig til den ideelle partner for danske klienter, der ønsker professionel juridisk bistand i Spanien.`,
    category: "Generelt",
  },
  {
    question: "Hvilke juridiske ydelser tilbyder du specifikt?",
    answer: `Jeg tilbyder en omfattende vifte af juridiske ydelser designet til at dække alle dine behov i Spanien:

**Ejendomsret og boligforhold:**
- Køb og salg af fast ejendom
- Due diligence og ejendomsundersøgelser
- Udarbejdelse og gennemgang af købskontrakter
- Registrering af ejendomsrettigheder
- Lejekontrakter og udlejningsforhold
- Tvister vedrørende ejendom

**Virksomhed og erhverv:**
- Etablering af selskaber og virksomheder
- Skattetilpasning og compliance
- Kontraktudarbejdelse og forhandling
- Arbejdsret og ansættelsesforhold
- Fusioner og opkøb
- Erhvervsjuridiske tvister

**Familie- og arveret:**
- Testamenter og arvebehandling
- Familiesammenføring og visum
- Ægteskabskontrakter
- Skilsmisse og separation
- Børns rettigheder og forældremyndighed

**Immigration og ophold:**
- Opholdstilladelser og arbejdstilladelser
- Statsborgerskab og naturalisering
- Familiesammenføring
- Investorvisum (Golden Visa)

**Skat og finans:**
- Skattetilpasning for danske borgere
- Årlige selvangivelser
- International beskatning
- Investeringsrådgivning
- Bankforhold og finansiering

Alle ydelser leveres med fokus på kvalitet, professionalisme og personlig service.`,
    category: "Ydelser",
  },
  {
    question: "Hvad koster det at få juridisk rådgivning?",
    answer: `Mine priser er transparente og konkurrencedygtige, tilpasset det specifikke arbejdes kompleksitet og omfang:

**Konsultation og rådgivning:**
- Første konsultation (30 min): Gratis
- Løbende konsultation: €150-200 per time
- Telefonisk/email rådgivning: €100 per time

**Ejendomshandler:**
- Standard ejendomskøb: 1-1.5% af ejendomsværdien
- Komplekse transaktioner: Efter aftale
- Due diligence rapport: €500-1.500

**Virksomhedsetablering:**
- Standard selskabsstiftelse: €800-1.500
- Kompleks virksomhedsstruktur: €2.000-5.000
- Løbende compliance: €200-500 per måned

**Testamenter og arveret:**
- Standard testamente: €400-800
- Arvebehandling: 2-4% af boets værdi
- Internationale arvesager: Efter aftale

**Særlige forhold:**
- Alle priser er ekskl. moms og offentlige gebyrer
- Faste priser aftales altid på forhånd for større projekter
- Betalingsplaner kan arrangeres efter behov
- Ingen skjulte omkostninger

Jeg tilbyder altid et uforpligtende møde, hvor vi kan diskutere dit projekt og de forventede omkostninger i detaljer.`,
    category: "Priser",
  },
  {
    question: "Hvor lang tid tager typiske juridiske processer?",
    answer: `Tidsrammerne varierer betydeligt afhængigt af sagstypen og kompleksiteten:

**Ejendomshandler:**
- Standard ejendomskøb: 6-12 uger
- Komplekse transaktioner: 3-6 måneder
- Due diligence: 1-3 uger

**Virksomhedsetablering:**
- Standard selskabsstiftelse: 2-4 uger
- Bankkonto åbning: 3-8 uger
- Skatteregistrering: 1-2 uger

**Immigration og ophold:**
- Opholdstilladelse: 3-6 måneder
- Golden Visa: 6-12 måneder
- Statsborgerskab: 12-24 måneder

**Familie- og arveret:**
- Standard testamente: 1-2 uger
- Arvebehandling: 6-18 måneder
- Internationale arvesager: 12-36 måneder

**Faktorer der påvirker tidsrammen:**
- Dokumentationens fuldstændighed
- Myndighedernes arbejdsbyrde
- Kompleksiteten af sagen
- Internationale elementer
- Sprogbarrierer

Jeg holder dig altid informeret om fremskridt og eventuelle forsinkelser, og arbejder proaktivt for at minimere behandlingstiden hvor det er muligt.`,
    category: "Timing",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500/3 rounded-full blur-3xl animate-pulse delay-2000 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#003366]/10 rounded-full text-sm font-medium text-[#003366] mb-6 border border-[#003366]/20 hover:bg-[#003366]/15 transition-all duration-300">
            <div className="w-2 h-2 bg-[#003366] rounded-full animate-pulse"></div>
            Ofte stillede spørgsmål
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 gradient-text">
            Svar på dine spørgsmål
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find svar på de mest almindelige spørgsmål om juridisk bistand i
            Spanien
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
                  className="inline-block px-3 py-1 bg-gradient-to-r from-[#003366]/10 to-blue-500/10 
                                 text-[#003366] text-xs font-medium rounded-full border border-[#003366]/20"
                >
                  {faq.category}
                </span>
              </div>

              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 focus:outline-none group-hover:bg-gray-50/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#003366] transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br from-[#003366] to-[#004080] rounded-full flex items-center justify-center transform transition-all duration-500 ${
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
                className={`transition-all duration-500 ease-in-out ${
                  openItems.has(index)
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-6 border border-gray-100">
                    <div className="prose prose-gray max-w-none">
                      {faq.answer.split("\n\n").map((paragraph, pIndex) => {
                        if (
                          paragraph.startsWith("**") &&
                          paragraph.endsWith("**")
                        ) {
                          return (
                            <h4
                              key={pIndex}
                              className="text-lg font-bold text-[#003366] mt-6 mb-3 first:mt-0"
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
                                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2 flex-shrink-0"></div>
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
          <div className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-luxury">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Har du andre spørgsmål?
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Jeg er altid klar til at hjælpe med juridisk rådgivning og
                besvare dine spørgsmål om Spanien
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#003366] rounded-xl font-bold 
                           transition-all duration-500 hover:bg-gray-100 hover:scale-105 shadow-luxury hover:shadow-luxury-hover"
              >
                <span>Kontakt mig direkte</span>
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
