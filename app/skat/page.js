// app/skat/page.js
import Head from "next/head"

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

      <main className="prose lg:prose-lg mx-auto px-4 py-10">
        <h1>
          Skat i Spanien: Hvad udlændinge skal vide om beskatning, bopæl og
          skattepligt
        </h1>

        <p>
          At bo, arbejde eller investere i Spanien medfører en række
          skattemæssige forpligtelser, der afhænger af, om du betragtes som{" "}
          <strong>skattemæssigt hjemmehørende (residente)</strong> eller{" "}
          <strong>ikke-hjemmehørende (no residente)</strong>. Uanset om du
          arbejder, ejer ejendom eller har indkomst i Spanien, er det afgørende
          at forstå, hvordan det spanske skattesystem fungerer, for at undgå
          problemer og optimere din situation.
        </p>

        <p>
          I denne artikel gennemgår vi det <strong>spanske skattesystem</strong>
          , de vigtigste <strong>direkte og indirekte skatter</strong>, samt
          hvad det indebærer at være{" "}
          <strong>residente eller no residente</strong>.
        </p>

        <h2>1. Det spanske skattesystem: overblik</h2>

        <p>
          Det spanske skattesystem er fastlagt i{" "}
          <strong>Ley General Tributaria (lov nr. 58/2003)</strong> og består af
          både
          <strong> direkte og indirekte skatter</strong>, der administreres på{" "}
          <strong>nationalt, regionalt og lokalt niveau</strong>.
        </p>

        <ul>
          <li>
            <strong>Direkte skatter:</strong> pålægges indkomst, formue og
            arv/gaver.
          </li>
          <li>
            <strong>Indirekte skatter:</strong> pålægges forbrug (fx moms og
            afgifter).
          </li>
        </ul>

        <h2>2. Er du skattemæssigt hjemmehørende i Spanien?</h2>

        <p>
          Din skattepligt afhænger først og fremmest af, om du betragtes som{" "}
          <strong>skattemæssigt hjemmehørende</strong> (residente) i Spanien.
        </p>

        <h3>
          Hvornår er du skattemæssigt residente? (jf. artikel 9 i IRPF-loven)
        </h3>
        <ul>
          <li>
            Du opholder dig mere end <strong>183 dage om året</strong> i
            Spanien.
          </li>
          <li>Dit økonomiske og familiemæssige centrum er i Spanien.</li>
          <li>Din ægtefælle og/eller børn bor i Spanien (formodning).</li>
        </ul>

        <h3>Konsekvenser af at være residente:</h3>
        <ul>
          <li>
            Skattepligt af <strong>global indkomst</strong> (verden rundt).
          </li>
          <li>
            Du betaler <strong>personskat (IRPF)</strong> og skal selvangive
            årligt.
          </li>
          <li>
            Adgang til <strong>fradrag</strong> og sociale ydelser.
          </li>
          <li>
            Krav om indsendelse af <strong>Modelo 720</strong> ved udenlandske
            aktiver.
          </li>
        </ul>

        <h3>Konsekvenser af at være ikke-residente:</h3>
        <ul>
          <li>
            Skat kun af <strong>indkomst og aktiver i Spanien</strong>.
          </li>
          <li>
            Du er underlagt <strong>IRNR</strong> (skat for ikke-residente).
          </li>
          <li>Begrænsede fradrag og undtagelser.</li>
          <li>
            Krav om <strong>skatterepæsentant</strong> hvis du bor uden for
            EU/EØS.
          </li>
        </ul>

        <h2>3. Direkte skatter i Spanien</h2>

        <h3>a) IRPF – Indkomstskat for residente</h3>
        <ul>
          <li>Gælder kun for personer med skattemæssig bopæl i Spanien.</li>
          <li>
            Progressiv sats fra <strong>19 % til over 47 %</strong>.
          </li>
          <li>
            Gælder for løn, pension, udlejning, kapitalindkomst og fortjeneste.
          </li>
        </ul>

        <h3>b) IRNR – Skat for ikke-residente</h3>
        <ul>
          <li>
            <strong>24 %</strong> for personer uden for EU/EØS.
          </li>
          <li>
            <strong>19 %</strong> for borgere fra EU/EØS-lande.
          </li>
          <li>
            Pålægges indkomst fra udlejning, renter, udbytte, pension m.m. med
            spansk oprindelse.
          </li>
        </ul>

        <h3>c) Formueskat (Impuesto sobre el Patrimonio)</h3>
        <ul>
          <li>
            Gælder både for residente (global formue) og ikke-residente (kun
            spanske aktiver).
          </li>
          <li>Generel fritagelse op til 700.000 € (kan variere regionalt).</li>
          <li>
            Madrid har fuld skattefritagelse, andre regioner som Katalonien
            opkræver skatten.
          </li>
        </ul>

        <h3>d) Arve- og gaveafgift (Impuesto sobre Sucesiones y Donaciones)</h3>
        <ul>
          <li>
            Afhængig af bopæl for arvelader/modtager og aktivernes placering.
          </li>
          <li>Store regionale forskelle i satser og fritagelser.</li>
        </ul>

        <h2>4. Indirekte skatter</h2>

        <h3>a) Moms (IVA)</h3>
        <ul>
          <li>
            Almindelig sats: <strong>21 %</strong>.
          </li>
          <li>
            Reduceret sats: <strong>10 %</strong> (fx mad, hoteller, transport).
          </li>
          <li>
            Superreduceret sats: <strong>4 %</strong> (basale fødevarer, bøger).
          </li>
        </ul>

        <h3>b) Afgift på overdragelser (ITP og AJD)</h3>
        <ul>
          <li>
            Gælder ved køb af brugte ejendomme og visse dokumenttransaktioner.
          </li>
          <li>
            Sats: mellem <strong>6 % og 10 %</strong>, afhængig af region.
          </li>
        </ul>

        <h3>c) Punktafgifter</h3>
        <ul>
          <li>På alkohol, tobak, brændstof mv.</li>
        </ul>

        <h2>5. Ejendom i Spanien – hvad skal du som udlænding betale?</h2>

        <ul>
          <li>
            Skat af lejeindtægter eller beregnet lejeværdi (&quot;imputación de
            renta&quot;) hvis ikke udlejet.
          </li>
          <li>
            Lokal ejendomsskat (<strong>IBI</strong>).
          </li>
          <li>
            Ved salg: <strong>gevinstsbeskatning + 3 % tilbageholdelse</strong>.
          </li>
        </ul>

        <p>
          Danmark og Spanien har en{" "}
          <strong>dobbeltbeskatningsoverenskomst</strong>, så du undgår at
          betale skat to gange af samme indkomst.
        </p>

        <h2>6. Vigtige formularer og forpligtelser</h2>
        <ul>
          <li>
            <strong>Modelo 030</strong> – registrering hos spansk skat.
          </li>
          <li>
            <strong>Modelo 210</strong> – for ikke-residentes (lejeindtægter,
            m.m.).
          </li>
          <li>
            <strong>Modelo 100</strong> – selvangivelse for residente.
          </li>
          <li>
            <strong>Modelo 720</strong> – erklæring over udenlandske aktiver
            (kun for residente).
          </li>
          <li>
            <strong>Certificado de residencia fiscal</strong> – dokumentation
            for skattebopæl.
          </li>
        </ul>

        <h2>
          Konklusion: Få styr på din skat i Spanien – og undgå overraskelser
        </h2>
        <p>
          Det spanske skattesystem er omfattende og varieret – og adskiller sig
          på flere punkter fra det danske. Derfor er det afgørende, at du som
          udlænding i Spanien ved, om du er residente eller ej, og hvordan det
          påvirker dine <strong>skattemæssige rettigheder og pligter</strong>.
        </p>
        <p>
          Skatteplanlægning og juridisk rådgivning er nøglen til at undgå fejl,
          overbeskatning eller bøder.
        </p>

        <p className="font-semibold">
          Overvejer du at bosætte dig, investere eller arbejde i Spanien?
          Kontakt os i dag for en personlig vurdering af din skattemæssige
          situation og tryg rådgivning på dansk.
        </p>
      </main>
    </>
  )
}
