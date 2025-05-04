export default function TrustedBySection() {
  const brands = ["SONY", "SONY", "SONY", "SONY"] // Replace with actual brand names or logos

  return (
    <section className="bg-[#1e1e1e] py-8 flex ">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          De stoler på mig
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="text-2xl font-bold tracking-wide">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
