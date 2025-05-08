"use client"

import Head from "next/head"
import ContactForm from "@/components/ContactForm"
import ContactCTA from "@/components/ContactCTA"
import ContactCTAWrapper from "@/components/ContactCTAWrapper"

export default function DivorceSpainArticle() {
  return (
    <>
      <Head>
        <title>Skilsmisse mellem udlændinge i Spanien | Christian Gefke</title>
        <meta
          name="description"
          content="Få juridisk overblik over skilsmisse mellem udlændinge i Spanien – herunder økonomiske aspekter, lovvalg og ægteskabsformue."
        />
        <meta
          name="keywords"
          content="skilsmisse i Spanien, ægtefælleformue, EU-forordning, ægteskab, advokat Spanien, international skilsmisse"
        />
        <meta name="author" content="Christian Gefke" />
        <meta
          property="og:title"
          content="Skilsmisse mellem udlændinge i Spanien"
        />
        <meta
          property="og:description"
          content="Juridisk gennemgang af skilsmisse og ægteskabsformue for udlændinge i Spanien. Kontakt advokat Christian Gefke for rådgivning."
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="da_DK" />
        <meta
          property="og:url"
          content="https://www.christiangefke.com/divorce-spain"
        />
      </Head>

      <main className="bg-white text-black px-6 md:px-12 lg:px-32 py-16">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-zinc-800">
            Skilsmisse mellem udlændinge i Spanien: økonomiske aspekter og
            ægteskabsformue
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-zinc-700">
            Flere og flere danske statsborgere bor permanent eller ejer ejendom
            i Spanien. Det betyder, at antallet af skilsmisser med
            internationale elementer er stigende. Denne artikel forklarer de
            vigtigste juridiske og økonomiske aspekter ved en
            <strong> skilsmisse mellem udlændinge i Spanien</strong>, herunder
            hvilken lovgivning der gælder, hvordan formuen deles, og hvilke
            rettigheder parterne har.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-zinc-800">
            Kan to udlændinge blive skilt i Spanien?
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-zinc-700">
            Ja. Ifølge <strong>EU-forordning 2019/1111</strong> (Bruxelles
            II-ter) kan spanske domstole behandle en skilsmissesag, hvis:
          </p>
          <ul className="list-disc pl-6 text-lg text-zinc-700 space-y-2 mb-6">
            <li>Begge ægtefæller har sædvanlig bopæl i Spanien;</li>
            <li>
              Den ene ægtefælle har sædvanlig bopæl i Spanien og indgiver
              begæringen;
            </li>
            <li>
              Spanien var det sidste fælles bopælsland, og den ene ægtefælle
              fortsat bor der.
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-zinc-700 mb-8">
            Det betyder, at{" "}
            <strong>
              to danske (eller andre udenlandske) statsborgere kan blive skilt i
              Spanien
            </strong>
            , selvom ægteskabet er indgået i Danmark, så længe der er en reel
            tilknytning til landet.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-zinc-800">
            Hvilken lov gælder for selve skilsmissen?
          </h2>
          <p className="text-lg leading-relaxed text-zinc-700 mb-4">
            Selve opløsningen af ægteskabet er reguleret af{" "}
            <strong>EU-forordning 1259/2010</strong> (Rom III-forordningen). Den
            giver ægtefællerne mulighed for at vælge, hvilken lov der skal gælde
            for deres skilsmisse, fx:
          </p>
          <ul className="list-disc pl-6 text-lg text-zinc-700 space-y-2 mb-6">
            <li>Loven i det land, hvor de har fælles bopæl;</li>
            <li>
              Loven i det land, hvor de senest boede sammen (hvis den ene stadig
              bor der);
            </li>
            <li>Fælles nationalitet;</li>
            <li>Loven i det land, hvor sagen anlægges (dvs. Spanien).</li>
          </ul>
          <p className="text-lg leading-relaxed text-zinc-700 mb-6">
            Hvis der ikke er truffet et aktivt valg, anvendes ovenstående
            kriterier i nævnte rækkefølge.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-rose-700 mb-12">
            Vigtigt: Den lov, der gælder for selve skilsmissen,{" "}
            <strong>
              regulerer ikke automatisk det økonomiske forhold mellem parterne
            </strong>{" "}
            (formueforholdet). Det er et separat spørgsmål.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-zinc-800">
            Hvilken lov gælder for ægtefællernes formueforhold?
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-zinc-700">
            De økonomiske forhold mellem ægtefæller – dvs. hvordan aktiver og
            ejendom håndteres og fordeles – reguleres af{" "}
            <strong>EU-forordning 2016/1103</strong>, som trådte i kraft i 2019.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-zinc-800">
            a) Valg af lov (ægtepagt)
          </h3>
          <p className="text-lg leading-relaxed text-zinc-700 mb-4">
            Ægtefællerne kan i en ægtepagt vælge, at loven fra:
          </p>
          <ul className="list-disc pl-6 text-lg text-zinc-700 space-y-2 mb-6">
            <li>Deres nationalstat; eller</li>
            <li>Deres bopælsland på tidspunktet for aftalen</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-zinc-800">
            b) I mangel af aftale gælder:
          </h3>
          <ol className="list-decimal pl-6 text-lg text-zinc-700 space-y-2 mb-6">
            <li>
              Loven i det land, hvor de først havde fælles bopæl efter
              ægteskabets indgåelse;
            </li>
            <li>
              Hvis ikke, loven i det land, de begge var statsborgere i ved
              ægteskabets indgåelse;
            </li>
            <li>
              Som sidste mulighed: loven i det land, de har den tætteste
              tilknytning til.
            </li>
          </ol>

          <p className="text-lg leading-relaxed text-zinc-700 mb-6">
            <strong>Eksempel:</strong> Et dansk par gifter sig i København og
            flytter umiddelbart derefter til Malaga. Hvis de ikke har oprettet
            en ægtepagt, vil det typisk være <strong>dansk ret</strong>, der
            gælder for deres formueforhold, selvom skilsmissen behandles i
            Spanien.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-zinc-800">
            Hvordan deles aktiver og ejendom?
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-zinc-700">
            Det afhænger af den gældende lovgivning:
          </p>
          <ul className="list-disc pl-6 text-lg text-zinc-700 space-y-2 mb-6">
            <li>
              <strong>I spansk ret</strong>: fælleseje (gananciales), med
              ligelig deling af alt erhvervet under ægteskabet.
            </li>
            <li>
              <strong>I dansk ret</strong>: formuefællesskab med særeje ved arv
              og gave. Fuldstændigt særeje er muligt ved ægtepagt.
            </li>
            <li>
              <strong>I systemer med formuefællesskab med udligningsret</strong>
              : opgørelse og udligning af værdistigningen under ægteskabet.
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-zinc-700 mb-12">
            Hvis parret ejer ejendom i Spanien, er det nødvendigt at dokumentere
            ejerskab, værdi og eventuel medejerskab – og ofte få juridisk og
            skattemæssig bistand ved delingen.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-zinc-800">
            Ægtefællebidrag og børnebidrag
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-zinc-700">
            Ifølge <strong>spansk civilret (Código Civil, artikel 97)</strong>{" "}
            kan en ægtefælle have ret til <strong>kompensationsbidrag</strong>,
            hvis skilsmissen medfører en økonomisk skævhed. Retten vurderer
            blandt andet:
          </p>
          <ul className="list-disc pl-6 text-lg text-zinc-700 space-y-2 mb-6">
            <li>Ægteskabets varighed;</li>
            <li>Den bidragssøgendes alder og erhvervsmuligheder;</li>
            <li>Bidrag til hjem og familie;</li>
            <li>Tabte indtjeningsmuligheder.</li>
          </ul>
          <p className="text-lg leading-relaxed text-zinc-700 mb-12">
            Hvis der er fælles børn, fastsættes også{" "}
            <strong>børnebidrag</strong> efter spansk ret og{" "}
            <strong>EU-forordning 4/2009</strong> om underholdsbidrag.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-zinc-800">
            International anerkendelse af skilsmissedomme
          </h2>
          <p className="text-lg leading-relaxed text-zinc-700 mb-4">
            En spansk skilsmissedom anerkendes automatisk i hele EU, inkl.
            Danmark, uden behov for særskilt godkendelse.
          </p>
          <p className="text-lg leading-relaxed text-zinc-700 mb-12">
            Hvis den anden part er statsborger i et{" "}
            <strong>tredjeland uden for EU</strong> (f.eks. Storbritannien eller
            Norge), kan det være nødvendigt med en{" "}
            <strong>eksekvaturprocedure</strong> for at få dommen anerkendt der.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-zinc-800">
            Konklusion: Få juridisk rådgivning i grænseoverskridende skilsmisse
          </h2>
          <p className="text-lg leading-relaxed text-zinc-700">
            Ved en international skilsmisse i Spanien er det afgørende at få
            professionel rådgivning i <strong>international privatret</strong>,
            da forskellige love kan gælde for selve skilsmissen og det
            økonomiske opgør. Et forkert valg kan have store økonomiske
            konsekvenser.
          </p>
        </article>

        <ContactCTAWrapper />
      </main>
    </>
  )
}
