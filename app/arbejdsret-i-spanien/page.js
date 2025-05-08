// app/(legal)/arbejdsret-i-spanien/page.js

import React from "react"
import Head from "next/head"

export default function ArbejdsretISpanienPage() {
  return (
    <>
      <Head>
        <title>
          Arbejdsret i Spanien: Hvad danske borgere skal vide om at arbejde
          lovligt
        </title>
        <meta
          name="description"
          content="Få overblik over spansk arbejdsret som dansk statsborger: krav til dokumentation, social sikring, rettigheder, selvstændig virksomhed og mere."
        />
        <meta
          name="keywords"
          content="arbejdsret i Spanien, arbejde i Spanien, dansker i Spanien, selvstændig Spanien, spansk arbejdsmarked, social sikring Spanien"
        />
        <link
          rel="canonical"
          href="https://dinwebsite.dk/arbejdsret-i-spanien"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Arbejdsret i Spanien: Hvad danske borgere skal vide om at arbejde lovligt"
        />
        <meta
          property="og:description"
          content="Få overblik over spansk arbejdsret som dansk statsborger: krav til dokumentation, social sikring, rettigheder, selvstændig virksomhed og mere."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://dinwebsite.dk/arbejdsret-i-spanien"
        />
        <meta property="og:locale" content="da_DK" />
        <meta
          property="og:image"
          content="https://dinwebsite.dk/images/arbejdsret.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arbejdsret i Spanien: Hvad danske borgere skal vide om at arbejde lovligt"
        />
        <meta
          name="twitter:description"
          content="Alt hvad danske statsborgere skal vide for at arbejde lovligt i Spanien – NIE, Seguridad Social, rettigheder og selvstændighed."
        />
        <meta
          name="twitter:image"
          content="https://dinwebsite.dk/images/arbejdsret.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Arbejdsret i Spanien: Hvad danske borgere skal vide om at arbejde lovligt",
              description:
                "Få overblik over spansk arbejdsret som dansk statsborger: krav til dokumentation, social sikring, rettigheder, selvstændig virksomhed og mere.",
              author: {
                "@type": "Person",
                name: "Dit Navn",
              },
              publisher: {
                "@type": "Organization",
                name: "Din Virksomhed",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dinwebsite.dk/logo.png",
                },
              },
              datePublished: "2025-05-05",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://dinwebsite.dk/arbejdsret-i-spanien",
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Arbejdsret i Spanien</h1>
        <h2 className="text-lg text-gray-600 mb-8">
          Hvad du skal vide som dansk statsborger
        </h2>

        <p className="mb-6">
          Spanien er et attraktivt land for mange EU-borgere, der søger
          livskvalitet og nye karrieremuligheder. Hvis du som dansk statsborger
          ønsker at arbejde lovligt i Spanien, er det vigtigt at forstå, hvordan
          det spanske arbejdsretssystem fungerer – både dine rettigheder,
          pligter og nødvendige registreringer.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          1. Dokumentation og registrering for danske statsborgere
        </h2>
        <p className="mb-2">
          Som EU-borger behøver du ikke visum for at arbejde i Spanien. Men du
          skal registreres korrekt:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>
              Certificado de Registro de Ciudadano de la Unión Europea (grønt
              NIE-bevis):
            </strong>{" "}
            Obligatorisk hvis du opholder dig i Spanien i mere end 90 dage og
            ønsker at arbejde.
          </li>
          <li>
            <strong>NIE-nummer:</strong> Bruges ved alle skattemæssige,
            arbejdsrelaterede og administrative processer.
          </li>
        </ul>

        <h3 className="font-semibold mb-2">
          Hvad giver det grønne NIE dig adgang til?
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li>Ret til at arbejde som lønmodtager eller selvstændig</li>
          <li>Adgang til det offentlige sundhedssystem</li>
          <li>Adgang til sociale ydelser (arbejdsløshed, pension)</li>
          <li>Mulighed for at registrere bopæl i kommunen (empadronamiento)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          2. Social sikring og arbejdsregistrering
        </h2>
        <p className="mb-2">
          Før du starter lønnet arbejde, skal du være tilmeldt den spanske
          sociale sikring:
          <strong> Seguridad Social</strong>.
        </p>

        <h3 className="font-semibold mb-2">Hvad er cotizaciones sociales?</h3>
        <p className="mb-2">
          Det er obligatoriske månedlige bidrag, som både arbejdsgiver og
          arbejdstager betaler til det offentlige velfærdssystem. De dækker:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Offentlig sundhedspleje</li>
          <li>Arbejdsløshedsunderstøttelse</li>
          <li>Barsel/sygdom</li>
          <li>Pension og invalideydelser</li>
          <li>Familie- og børnetilskud</li>
        </ul>
        <p className="mb-6">
          Din del udgør ca. <strong>6,35 %</strong> af bruttolønnen.
          Arbejdsgiveren bidrager med omkring <strong>30 % ekstra</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          3. Adgang til arbejdsløshedsunderstøttelse (paro)
        </h2>
        <p className="mb-2">
          Du kan få ret til paro, hvis du opfylder følgende betingelser:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Du er reelt arbejdsløs (ikke frivillig opsigelse)</li>
          <li>Du har indbetalt bidrag i mindst 360 dage de sidste 6 år</li>
          <li>Du er registreret som aktivt jobsøgende (inscrito en el SEPE)</li>
          <li>Du har gyldig opholdsstatus i Spanien</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          4. Dine grundlæggende arbejdsrettigheder i Spanien
        </h2>
        <p className="mb-2">
          Som arbejdstager i Spanien har du rettigheder beskyttet af loven.
          Disse omfatter:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Skriftlig og registreret ansættelseskontrakt</li>
          <li>Ret til ferie, pauser og fridage</li>
          <li>Beskyttelse mod uberettiget afskedigelse</li>
          <li>Ret til faglig repræsentation og kollektive forhandlinger</li>
          <li>Gratis adgang til arbejdsdomstole (jurisdicción social)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          5. Arbejde som selvstændig (autónomo)
        </h2>
        <p className="mb-2">
          Hvis du ønsker at arbejde som freelancer eller drive selvstændig
          virksomhed, skal du registreres som <strong>autónomo</strong>. Det
          indebærer:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            Registrering hos skattemyndighederne (Hacienda) og Seguridad Social
          </li>
          <li>
            Betaling af en <strong>fast månedlig afgift</strong> – i 2025 ca.
            230 €/måned (nedsat takst)
          </li>
          <li>Indberetning af indtægter og udgifter kvartalsvis</li>
          <li>
            Bidrag til sociale ydelser som sundhed, pension og arbejdsophør (
            <em>cese de actividad</em>)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          Konklusion: Retssikkerhed og muligheder i Spanien
        </h2>
        <p className="mb-2">
          Det er fuldt ud muligt for danske statsborgere at arbejde lovligt i
          Spanien, så længe du overholder kravene til:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>NIE-registrering</li>
          <li>Tilmelding til Seguridad Social</li>
          <li>Gyldig og registreret ansættelseskontrakt</li>
        </ul>
        <p className="mb-6">
          Spanien tilbyder et omfattende og velfungerende arbejdsmarkedssystem
          med adgang til sundhed, pension og sociale ydelser. Med den rette
          rådgivning undgår du fejl og sikrer, at dine rettigheder respekteres.
        </p>

        <p className="font-semibold mt-6">
          Har du spørgsmål om arbejdstilladelse, kontrakter eller social sikring
          i Spanien?{" "}
          <a href="/kontakt" className="text-blue-600 underline">
            Kontakt mig i dag
          </a>{" "}
          for juridisk rådgivning på dansk.
        </p>
      </main>
      <ContactCTAWrapper />
    </>
  )
}
