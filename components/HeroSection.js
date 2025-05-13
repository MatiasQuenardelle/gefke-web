"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="w-full bg-[#003366] text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-[5vh] md:py-[7vh]">
        {/* Text */}
        <div className="md:w-1/2 space-y-5">
          <h1
            className={`${merri.className} text-4xl md:text-6xl leading-none`}
          >
            EUs
            <br />
            indflydelse
          </h1>

          <p className="max-w-lg text-base md:text-lg text-gray-200">
            Grundet europæisk lovgivning, er det nemmere end nogensinde at
            flytte til Spanien og få opholdstilladelse.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-3 border border-white rounded transition hover:bg-white hover:text-[#003366]"
          >
            Kontakt Mig
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm pb-20 md:pb-0">
            <Image
              src="/images/CristianGefke.png"
              alt="Christian Gefke"
              width={550}
              height={600}
              className="w-full h-auto max-h-[420px] scale-115 lg:scale-140 pb-6 rounded-md  object-cover"
            />
            <div
              className="bg-black/70 text-center px-4 py-3 text-xs md:text-sm 
                         md:absolute  md:top-93 inset-x-0"
            >
              Vi varetager overgangen til et liv i Spanien for dig som dansker.
              <br />
              <span className="font-bold">
                Christian Gefke, Lanzarote Bar Association
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
