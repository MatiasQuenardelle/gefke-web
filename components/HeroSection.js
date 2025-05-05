import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full bg-[#1e3a66] py-8 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Christian Gefke, Advokat
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Jeg er uddannet jurist fra Universidad de Las Palmas de Gran Canaria
          og har en kandidatgrad i ejendomshandler fra Universidad Internacional
          de La Rioja. Med spansk advokatlicens og international erfaring
          rådgiver jeg dig med faglighed og tillid.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/CristianGefke.jpeg"
          alt="Christian Gefke"
          width={500}
          height={500}
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  )
}
