"use client"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    question: "Hvorfor skal jeg vælge dig frem for andre jurister i Spanien?",
    answer: `Som ekspert i dansk og spansk retssystem tilbyder jeg skræddersyet juridisk rådgivning og bistand til danske klienter, der ønsker at navigere i Spaniens komplekse lovgivning. Med min omfattende viden og erfaring sikrer jeg, at dine juridiske anliggender bliver håndteret professionelt og effektivt. Jeg leverer også juridiske ydelser til spaniere i Spanien, såvel som danskere i Danmark, dvs. ikke kun til danskere i Spanien.
    
Jeg besidder både titlen som advokat og jurist, hvilket betyder, at jeg kan tilbyde en bred vifte af juridiske tjenester. Disse skal primært, hvor andet ikke meldes ud, betragtes som leveret af jurist og ikke som advokatbistand, da mine samarbejdspartnere leverer de procesrelaterede ydelser hvor advokattitlen såvel som ansvarsforsikringen gør sig gældende.

Jeg har bestået den spanske advokateksamen, som er et lovkrav for at praktisere som advokat i Spanien og i EU, og jeg er medlem af Lanzarote Advokatforening – medlemsnummer 635. Dette sikrer, at jeg opererer inden for de højeste etiske standarder og leverer førsteklasses juridisk rådgivning.`,
  },
  {
    question:
      "Hvordan vil du kommunikere med mig, hvis jeg ikke er flydende i spansk?",
    answer: `Jeg taler spansk, dansk og engelsk, så du kan føle dig tryg ved at diskutere dine juridiske behov på dit foretrukne sprog. Jeg håndterer også al kommunikation med spanske og danske myndigheder på dine vegne. Når det kommer til samarbejde, der kræver revisorer eller økonomer, vil jeg være din synlige kontaktperson, så du ikke behøver at bekymre dig om, hvem du skal kontakte, når en sag er påbegyndt.`,
  },
  {
    question: "Hvilke retsområder specialiserer du i?",
    answer: `Jeg fokuserer på erhvervsinvesteringer, ejendomstransaktioner, flytteassistance og beskatning i Spanien. Mine tjenester er skræddersyet specifikt til behovene hos danske udlændinge og investorer. Området med spansk lovgivning relateret til udlændinge kan være ganske komplekst, da muligheden for at anvende en udlændings valgte lovgivning er en realitet, ligesom valg af jurisdiktion for retssager. Gennem mig og mit team sikrer vi, at dine interesser bliver varetaget, og at du trygt kan navigere på tværs af grænser.`,
  },
  {
    question:
      "Hvordan sikrer du, at mine juridiske anliggender bliver håndteret effektivt?",
    answer: `Med omfattende erfaring og en proaktiv tilgang arbejder jeg flittigt på at håndtere dine juridiske anliggender smidigt og uden unødvendige forsinkelser. Mit mål er at løse din sag så hurtigt og effektivt som muligt. Mine 7 års juridiske uddannelse har givet mig værktøjerne til at vurdere, hvornår en opgave kan håndteres selvstændigt, og hvornår andre fagfolk kan komme i spil. Alt dette bliver håndteret af mig og mit team, så vi kan overvinde enhver juridisk udfordring.`,
  },
  {
    question: "Hvad kan jeg forvente i forhold til omkostninger?",
    answer: `Jeg tilbyder gennemsigtig prissætning med klare og ligetil pakker. Du vil modtage en detaljeret omkostningsoversigt på forhånd, så der ikke opstår overraskelser. Mit mål er at levere juridiske tjenester af høj kvalitet til en fair pris. Når det kommer til retssager, afhængigt af hvor i landet du bor, eller hvor valg af jurisdiktion er blevet anvendt, kan vi anvende eksterne advokater til den fysiske håndtering af retssager, men stadig være den synlige kontaktperson i forhold til ansvar og kommunikation. Langt de fleste juridiske tjenester kræver ikke retssagsbehandling og håndteres gennem moderne teknologi.`,
  },
  {
    question:
      "Kan du assistere med juridiske anliggender ud over de nævnte tjenester?",
    answer: `Ja, jeg håndterer en bred vifte af juridiske spørgsmål. Hvis du har et specifikt eller unikt juridisk behov, er du velkommen til at kontakte mig. Jeg kan enten assistere dig direkte eller henvise dig til en betroet specialist.`,
  },
  {
    question: "Hvordan kommer jeg i gang med dine tjenester?",
    answer: `At komme i gang er enkelt. Kontakt mig blot via min hjemmeside, så kan vi arrangere en indledende konsultation for at drøfte dine juridiske behov og hvordan jeg kan hjælpe dig.`,
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="bg-gray-50 py-16 px-4 flex justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Hvorfor vælge mig? Ofte stillede spørgsmål
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded bg-gray-100">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left text-lg font-medium text-gray-900"
                onClick={() => toggle(i)}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 pt-0 pb-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-800 whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
