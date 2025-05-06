export default function TrustedBySection() {
  const brands = ["SONY", "SONY", "SONY", "SONY"]

  return (
    <section className="w-full bg-[#1e1e1e] py-6 border-t border-white/10">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex flex-wrap justify-center items-center gap-10 text-white">
          {/* Heading */}
          <h2 className="text-2xl md:text-5xl md:mr-60 font-extrabold whitespace-nowrap">
            They trust me
          </h2>

          {/* Brand list */}
          {brands.map((brand, i) => (
            <div
              key={i}
              className="text-lg md:text-2xl font-semibold tracking-wide whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
