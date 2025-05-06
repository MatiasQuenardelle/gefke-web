"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="w-full bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-20 py-24 lg:py-32">
        {/* Text block */}
        <div className="md:w-1/2 space-y-8">
          <h1
            className={`${merri.className} text-6xl md:text-8xl leading-none`}
          >
            EUs
            <br />
            indflydelse
          </h1>

          <p className="max-w-lg text-lg md:text-xl text-gray-200">
            Grundet europæisk lovgivning, er det nemmere end nogensinde at
            flytte til Spanien og få opholdstilladelse.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-3 border border-white rounded transition hover:bg-white hover:text-[#003366]"
          >
            CONTACT ME
          </button>
        </div>

        {/* Image block */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/CristianGefke.jpeg"
              alt="Christian Gefke"
              width={550}
              height={700}
              className="w-full h-auto rounded-md shadow-2xl object-contain"
              priority
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/70 text-center px-4 py-3 text-sm md:text-base">
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
