"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Merriweather } from "next/font/google"

const merriweather = Merriweather({
  weight: "700",
  subsets: ["latin"],
})

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative w-full bg-[#003366] text-white overflow-hidden">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-20 py-24 lg:py-32 max-w-7xl">
        {/* Left — text */}
        <div className="md:w-1/2 space-y-8">
          <h1
            className={`${merriweather.className} text-[56px] sm:text-[70px] lg:text-[90px] leading-none tracking-tight`}
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
            className="inline-block px-8 py-3 border border-white rounded transition hover:bg-white hover:text-[#003366]"
          >
            CONTACT ME
          </button>
        </div>

        {/* Right — image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative">
            <Image
              src="/images/CristianGefke.jpeg"
              alt="Christian Gefke"
              width={550}
              height={700}
              className="w-[300px] sm:w-[400px] md:w-[550px] h-auto rounded-md shadow-2xl object-contain"
              priority
            />

            {/* Caption */}
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
