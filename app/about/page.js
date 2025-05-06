import Head from "next/head"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] })

function AboutHero() {
  return (
    <section className="w-full bg-[#003366] text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-[8vh]">
        <h1 className={`${merri.className} text-5xl md:text-7xl leading-none`}>
          Om mig
        </h1>
        <p className="text-lg md:text-2xl font-light">
          Spansk advokat / abogado
        </p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Om mig | Christian Gefke – Spansk Advokat</title>
        <meta
          name="description"
          content="Mød Christian Gefke, en autoriseret spansk advokat med juridisk ekspertise og international baggrund. Få professionel rådgivning om fast ejendom, erhverv og privatretten i Spanien."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourdomain.com/about" />
      </Head>

      <AboutHero />

      <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-relaxed">
        <section className="space-y-6">
          <p className="text-xl font-semibold">
            Mit navn er Christian Gefke, og jeg er en autoriseret advokat
            (medlemsnummer 635 ved Advokatsammenslutningen på Lanzarote) med en
            solid uddannelse og omfattende erfaring inden for jura. Jeg blev
            født i Aarhus, Danmark, men voksede op på Lanzarote, de Kanariske
            Øer.
          </p>

          <p>
            Jeg har en jurauuddannelse fra Universitetet i Las Palmas de Gran
            Canaria, hvorfra jeg besidder min viden inden for de juridiske
            områder. Derefter afsluttede jeg en kandidatuddannelse på
            Universidad Internacional de la Rioja (UNIR), hvor jeg
            specialiserede mig i erhvervelse af fast ejendom. I 2022 bestod jeg
            den nationale advokatprøve som afholdes årligt af det spanske
            justitsministerium, hvilket gav mig ret til optagelse i en lokal
            advokatforening – en nødvendig betingelse i Spanien for at føre
            sager i retten.
          </p>

          <p>
            Gennem min karriere har jeg haft mulighed for at arbejde med flere
            prominente virksomheder, såsom Grupo Stier, en af de førende aktører
            i havnen i Las Palmas, samt Grupo Martinez inden for fast ejendom og
            detailhandel i Spanien. Derudover har jeg samarbejdet med en bred
            vifte af uafhængige konsulenter, revisorer, økonomer og advokater.
          </p>

          <p>
            Min passion for jura opstår primært i privatretten, hvor denne som
            en udviklende realitet medbringer vigtige lektioner, når samfundet
            præsenteres for nye udfordringer – hvad enten det drejer sig om nye
            teknologier eller gamle institutioner med nye særpræg.
          </p>

          <p>
            Jeg er her for at tilbyde dig juridisk rådgivning af høj kvalitet og
            hjælpe dig med at navigere i den komplekse juridiske verden med
            tillid og sikkerhed.
          </p>
        </section>

        <section>
          <h2 className={`${merri.className} text-3xl mb-6`}>
            Min juridiske baggrund
          </h2>

          <ul className="space-y-4">
            <li>
              <span className="font-bold">2012 – 2017:</span> LLB/Bachelor i
              jura ved ULPGC
            </li>
            <li>
              <span className="font-bold">2017 – 2018:</span> Stier Group og BG
              Abogados jurist i praktik
            </li>
            <li>
              <span className="font-bold">2019 – idag:</span> Selvstændig
              rådgiver – primært i Barcelona og de Kanariske Øer
            </li>
            <li>
              <span className="font-bold">2021 – 2023:</span> LLM/Kandidat i
              jura ved UNIR
            </li>
            <li>
              <span className="font-bold">2022 – 2023:</span> Grupo Martinez i
              advokatpraktik/fuldmægtig
            </li>
            <li>
              <span className="font-bold">2022 – 2023:</span> Titel Advokat –
              bestået den nationale statseksamen for advokater afholdt af det
              spanske justitsministerium
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
