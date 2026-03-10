import { Merriweather } from "next/font/google"
import spanish from "@/public/locales/es.json"

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] })

const t = spanish

function AboutHero() {
  return (
    <section className="w-full bg-[#3A5A4E] text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-[8vh]">
        <h1 className={`${merri.className} text-5xl md:text-7xl leading-none`}>
          {t.about.heroTitle}
        </h1>
        <p className="text-lg md:text-2xl font-light">
          {t.about.heroSubtitle}
        </p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <main className="mx-auto max-w-4xl px-6 md:px-8 py-16 space-y-10 leading-relaxed bg-gray-50 text-gray-900">
        <section className="space-y-6">
          <p className="text-xl font-semibold text-gray-900">
            {t.about.intro}
          </p>

          <p className="text-gray-800">
            {t.about.work}
          </p>

          <p className="text-gray-800">
            {t.about.registration}
          </p>

          <p className="text-gray-800">
            {t.about.education}
          </p>

          <p className="text-gray-800">
            {t.about.bridge}
          </p>

          <div>
            <p className="text-gray-800 mb-3">
              {t.about.clientsIntro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>{t.about.client1}</li>
              <li>{t.about.client2}</li>
              <li>{t.about.client3}</li>
              <li>{t.about.client4}</li>
            </ul>
          </div>

          <p className="text-gray-800 font-medium">
            {t.about.focus}
          </p>
        </section>

        <section>
          <h2 className={`${merri.className} text-3xl mb-6 text-gray-900`}>
            {t.about.backgroundTitle}
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>{t.about.bg1}</li>
            <li>{t.about.bg2}</li>
            <li>{t.about.bg3}</li>
            <li>{t.about.bg4}</li>
            <li>{t.about.bg5}</li>
            <li>{t.about.bg6}</li>
          </ul>
        </section>
      </main>
    </>
  )
}
