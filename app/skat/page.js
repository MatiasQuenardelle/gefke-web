"use client"

import Head from "next/head"
import ContactCTAWrapper from "@/components/ContactCTAWrapper"

export default function SkatPage() {
  return (
    <>
      <Head>
        <title>Skatterådgivning i Spanien for danskere | Juridisk hjælp</title>
        <meta
          name="description"
          content="Forstå forskellen på skattepligt som residente og ikke-residente i Spanien. Få styr på spansk skat, formularer og optimer din situation som dansker i Spanien."
        />
      </Head>

      <main className="bg-gray-50 text-gray-900 px-6 py-12 md:px-16 lg:px-32 font-sans">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              Skat i Spanien: Hvad udlændinge skal vide om beskatning, bopæl og
              skattepligt
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Et overblik over spansk skat for danskere, uanset om du bor,
              arbejder eller investerer i Spanien.
            </p>
          </header>

          <section className="space-y-6">
            <p>
              At bo, arbejde eller investere i Spanien medfører skattemæssige
              forpligtelser. Det er afgørende at forstå, om du er{" "}
              <strong>skattemæssigt hjemmehørende (residente)</strong> eller{" "}
              <strong>ikke-hjemmehørende (no residente)</strong>.
            </p>

            <p>
              Denne artikel giver dig indsigt i{" "}
              <strong>spansk skattesystem</strong>, forskellen på direkte og
              indirekte skatter, samt hvad skattemæssig bopæl betyder.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              1. Det spanske skattesystem – overblik
            </h2>
            <p>
              Fastlagt i <strong>Ley General Tributaria (lov 58/2003)</strong>,
              administreres skatter på nationalt, regionalt og lokalt niveau:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Direkte skatter:</strong> indkomst, formue, arv/gaver.
              </li>
              <li>
                <strong>Indirekte skatter:</strong> forbrug, fx moms og
                afgifter.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              2. Skattepligt – er du residente?
            </h2>
            <p>
              Skattepligt i Spanien afhænger af, om du betragtes som{" "}
              <strong>skattemæssigt hjemmehørende (residente)</strong>.
            </p>

            <h3 className="text-xl font-semibold">
              Hvornår er du residente? (jf. IRPF-lovens artikel 9)
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Ophold i Spanien i mere end 183 dage om året</li>
              <li>Økonomisk og familiemæssigt centrum i Spanien</li>
              <li>Ægtefælle og/eller børn bosat i Spanien</li>
            </ul>

            <h3 className="text-xl font-semibold">
              Konsekvenser som residente:
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Skattepligt af global indkomst</li>
              <li>Selvangivelse via IRPF</li>
              <li>Fradragsmuligheder og sociale ydelser</li>
              <li>Indsendelse af Modelo 720 ved udenlandske aktiver</li>
            </ul>

            <h3 className="text-xl font-semibold">
              Konsekvenser som ikke-residente:
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Skat kun af spansk indkomst og aktiver</li>
              <li>Beskatning via IRNR</li>
              <li>Begrænsede fradrag og undtagelser</li>
              <li>Krav om skatterepæsentant uden for EU/EØS</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              3. Direkte skatter i Spanien
            </h2>

            <h3 className="text-xl font-semibold">
              a) IRPF – Indkomstskat for residente
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Gælder for alle residente</li>
              <li>
                Progressiv sats: <strong>19 % – 47 %+</strong>
              </li>
              <li>Omfatter løn, pension, udlejning, kapitalindkomst, m.m.</li>
            </ul>

            <h3 className="text-xl font-semibold">
              b) IRNR – Skat for ikke-residente
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>24 %</strong> for personer uden for EU/EØS
              </li>
              <li>
                <strong>19 %</strong> for personer fra EU/EØS
              </li>
              <li>Gælder spansk indkomst: leje, pension, udbytte mv.</li>
            </ul>

            <h3 className="text-xl font-semibold">c) Formueskat</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Residente: global formue. Ikke-residente: spanske aktiver.
              </li>
              <li>Fritagelse op til 700.000 € (regionalt varieret)</li>
              <li>Madrid fritager helt – Katalonien opkræver</li>
            </ul>

            <h3 className="text-xl font-semibold">d) Arv og gaveafgift</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Bopæl og aktivernes placering afgør skatten</li>
              <li>Store regionale forskelle</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              4. Indirekte skatter
            </h2>

            <h3 className="text-xl font-semibold">a) Moms (IVA)</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Almindelig sats: <strong>21 %</strong>
              </li>
              <li>
                Reduceret sats: <strong>10 %</strong>
              </li>
              <li>
                Superreduceret sats: <strong>4 %</strong>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              b) Afgift på ejendom og dokumenter
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Gælder brugte boliger og notartransaktioner</li>
              <li>
                Sats: <strong>6 % – 10 %</strong> afhængig af region
              </li>
            </ul>

            <h3 className="text-xl font-semibold">c) Punktafgifter</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>På fx alkohol, tobak og brændstof</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              5. Ejendom i Spanien – Skatter og gebyrer
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Skat af lejeindtægter eller beregnet lejeværdi</li>
              <li>
                Lokal ejendomsskat (<strong>IBI</strong>)
              </li>
              <li>
                Ved salg: gevinstskat + <strong>3 % tilbageholdelse</strong>
              </li>
            </ul>
            <p>
              Spanien og Danmark har en{" "}
              <strong>dobbeltbeskatningsoverenskomst</strong>, som forhindrer
              dobbeltskat.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              6. Centrale skatteformularer
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Modelo 030</strong> – registrering hos spansk SKAT
              </li>
              <li>
                <strong>Modelo 210</strong> – for ikke-residente (fx udlejning)
              </li>
              <li>
                <strong>Modelo 100</strong> – årlig selvangivelse (IRPF)
              </li>
              <li>
                <strong>Modelo 720</strong> – oplysning om udenlandske aktiver
              </li>
              <li>
                <strong>Certificado de residencia fiscal</strong> –
                skattebopælsbevis
              </li>
            </ul>
          </section>

          <section className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900">
              Konklusion: Få styr på din skat – og undgå dyre overraskelser
            </h2>
            <p>
              Det spanske skattesystem er komplekst og adskiller sig væsentligt
              fra det danske. At vide, om du er residente eller ej, er nøglen
              til korrekt skatteplanlægning.
            </p>
            <p>
              Juridisk skatterådgivning er afgørende for at undgå fejl, bøder og
              overbeskatning.
            </p>
            <p className="font-semibold text-lg">
              Overvejer du at flytte, investere eller arbejde i Spanien? Kontakt
              os i dag for professionel skattegennemgang og rådgivning på dansk.
            </p>
          </section>
        </article>
      </main>
      <ContactCTAWrapper />
    </>
  )
}
