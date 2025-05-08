import React from "react"
import Head from "next/head"
import ContactCTAWrapper from "@/components/ContactCTAWrapper"

export default function SelvstaendigWebshopSpanienPage() {
  return (
    <>
      <Head>
        <title>
          Selvstændig i Spanien med webshop: Sådan sælger du lovligt online
        </title>
        <meta
          name="description"
          content="Få overblik over hvordan du som selvstændig kan drive en webshop målrettet det spanske marked – med korrekt registrering, skatteforhold og forbrugerrettigheder."
        />
        <meta
          name="keywords"
          content="webshop i Spanien, sælge online Spanien, spansk forbrugerret, moms i Spanien, autónomo, drive virksomhed i Spanien"
        />
        <link
          rel="canonical"
          href="https://dinwebsite.dk/selvstaendig-webshop-spanien"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Selvstændig i Spanien med webshop: Sådan sælger du lovligt online"
        />
        <meta
          property="og:description"
          content="Lær hvordan du starter webshop i Spanien som selvstændig: registrering, skat, moms, domæner og forbrugerbeskyttelse."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://dinwebsite.dk/selvstaendig-webshop-spanien"
        />
        <meta property="og:locale" content="da_DK" />
        <meta
          property="og:image"
          content="https://dinwebsite.dk/images/webshop-spanien.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Selvstændig i Spanien med webshop: Sådan sælger du lovligt online"
        />
        <meta
          name="twitter:description"
          content="Kom i gang med webshop i Spanien: krav til NIE, moms, domæne og forbrugerrettigheder. En guide til danske selvstændige."
        />
        <meta
          name="twitter:image"
          content="https://dinwebsite.dk/images/webshop-spanien.jpg"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Selvstændig i Spanien med webshop: Alt du skal vide om at sælge online",
              description:
                "Guide til at drive webshop i Spanien som selvstændig: fra registrering og skat til forbrugerrettigheder og betaling.",
              author: { "@type": "Person", name: "Dit Navn" },
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
                "@id": "https://dinwebsite.dk/selvstaendig-webshop-spanien",
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">
          Selvstændig i Spanien med webshop: Alt du skal vide om at sælge online
          til spanske forbrugere
        </h1>
        <p className="mb-6 text-gray-700">
          Drømmer du om at leve af din egen webshop og sælge til spanske kunder?
          Flere og flere selvstændige – både bosiddende i Spanien og i udlandet
          – vælger at drive{" "}
          <strong>onlinebutik målrettet det spanske marked</strong>. Men det
          kræver både <strong>korrekt registrering</strong>, forståelse for{" "}
          <strong>skattemæssige forhold</strong>, og ikke mindst kendskab til{" "}
          <strong>forbrugerrettigheder i Spanien</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          1. Registrering som selvstændig (autónomo) i Spanien
        </h2>
        <p className="mb-4">
          Hvis du opholder dig i Spanien og ønsker at drive virksomhed, skal du
          registrere dig som <strong>autónomo</strong>, svarende til
          enkeltmandsvirksomhed i Danmark.
        </p>
        <p className="font-semibold mb-2">Trin for registrering:</p>
        <ul className="list-decimal list-inside mb-6 space-y-1">
          <li>
            Få <strong>NIE</strong> – dit personlige ID-nummer i Spanien
          </li>
          <li>
            Tilmeld dig hos <strong>Agencia Tributaria</strong> (spansk skat)
          </li>
          <li>
            Tilmeld dig <strong>RETA</strong> (selvstændige) hos Seguridad
            Social
          </li>
          <li>Registrér virksomheden under relevant branchekode (IAE)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          2. Moms (IVA) og skat
        </h2>
        <p className="mb-4">
          Du skal opkræve og afregne <strong>moms (IVA)</strong>, som er typisk:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>21 % for de fleste varer og ydelser</li>
          <li>10 % eller 4 % for visse fødevarer, bøger, medicin m.m.</li>
        </ul>
        <p className="font-semibold">Skatteforpligtelser:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Kvartalsvis momsindberetning (Modelo 303)</li>
          <li>Kvartalsvis forskudsskat (Modelo 130)</li>
          <li>Årlig selvangivelse (Modelo 100)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          3. Spanske forbrugerrettigheder
        </h2>
        <p className="mb-2">
          Du skal overholde <strong>spansk forbrugerlovgivning</strong>,
          herunder:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>14 dages fortrydelsesret</li>
          <li>Klar info om pris, moms og leveringsomkostninger</li>
          <li>Ordrebekræftelse på skrift (mail)</li>
          <li>Returnerings- og garantipolitik</li>
        </ul>
        <p className="mb-6">
          Handelsbetingelser bør være <strong>tilgængelige på spansk</strong>,
          og det anbefales at have spansk kundeservice.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          4. Domæne og betaling
        </h2>
        <p className="mb-2">
          Du kan bruge et <strong>.es-domæne</strong>, men det kræver spansk NIE
          og evt. spansk virksomhed.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Webshoppen bør være oversat til <strong>spansk</strong>
          </li>
          <li>
            Brug <strong>EU-godkendte betalingsløsninger</strong> (f.eks.
            Stripe, Redsys, PayPal)
          </li>
          <li>Fakturaer skal indeholde: navn, NIE/CIF, kundedata, moms</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          5. Fordele ved det spanske marked
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>47+ millioner indbyggere</strong> med stigende e-handelsvane
          </li>
          <li>Lavere konkurrence i nicher vs. Nordeuropa</li>
          <li>Mobil- og social media-vaner skaber gode markedsmuligheder</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-2">
          6. Alternativ: Drive webshop fra Danmark
        </h2>
        <p className="mb-2">
          Du kan drive webshop fra Danmark og sælge til Spanien, men:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            Du skal momsregistreres via <strong>OSS-ordningen</strong>
          </li>
          <li>
            Du skal stadig{" "}
            <strong>overholde spanske forbrugerrettigheder</strong>
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-12 mb-4">Konklusion</h2>
        <p className="mb-4">
          En webshop i Spanien kræver <strong>korrekt opsætning</strong>:
          registrering, moms, forbrugerlovgivning og struktur. Uanset om du bor
          i Spanien eller Danmark, er det vigtigt at få professionel vejledning.
        </p>

        <p className="font-semibold mt-6">
          Overvejer du at starte webshop i Spanien?{" "}
          <a href="/kontakt" className="text-blue-600 underline">
            Kontakt os og kom godt i gang!
          </a>
        </p>
      </main>
      <ContactCTAWrapper />
    </>
  )
}
