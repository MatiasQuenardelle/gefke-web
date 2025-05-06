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
    <section className="w-full bg-[#003366] text-white px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between">
      {/* Left text content */}
      <div className="md:w-1/2 flex flex-col justify-center text-left space-y-8">
        <h1
          className={`${merriweather.className} text-[60px] md:text-[76px] leading-tight tracking-tight`}
        >
          EUs
          <br />
          indflydelse
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-md">
          Grundet europæisk lovgivning, er det nemmere end nogensinde at flytte
          til Spanien og få opholdstilladelse.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="mt-4 w-fit px-6 py-3 text-white border border-white rounded hover:bg-white hover:text-[#003366] transition"
        >
          CONTACT ME
        </button>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 mt-16 md:mt-0 flex flex-col items-center relative">
        <div className="relative">
          <Image
            src="/images/CristianGefke.jpeg"
            alt="Christian Gefke"
            width={550}
            height={700}
            className="rounded-md shadow-2xl object-contain"
            priority
          />
          {/* Subtext bar under image */}
          <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center px-4 py-3 text-sm md:text-base">
            Vi varetager overgangen til et liv i Spanien for dig som dansker.
            <br />
            <span className="font-bold text-white">
              Christian Gefke, Lanzarote Bar Association
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
