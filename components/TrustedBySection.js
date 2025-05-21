import Image from "next/image"

export default function TrustedBySection() {
  const logos = [
    { src: "/images/obsidian1.png", alt: "Obsidian Digital" },
    { src: "/images/premier.png", alt: "Premier Relocation Spain S.L." },
    { src: "/images/lumipop.png", alt: "Lumipop" },
  ]

  return (
    <section className="w-full bg-black py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex justify-around">
        <h2 className="text-center text-white text-xl md:text-3xl font-semibold mb-6">
          Trusted by these companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="relative h-10 w-[120px] md:w-[220px] md:h-[80px] flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
