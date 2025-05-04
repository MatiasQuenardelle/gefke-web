export default function Testimonials() {
  const testimonials = [
    {
      text: "Takket være hans dybdegående viden fik vi løst vores komplekse arvesag hurtigt og uden problemer",
      author: "Mikkel S.",
    },
    {
      text: "Hans ekspertise gjorde, at vi kunne købe vores drømmehjem i Spanien uden nogen juridiske bekymringer.",
      author: "Anna L.",
    },
    {
      text: "Med hans hjælp blev vores flytning til Spanien problemfri; alle nødvendige tilladelser og registreringer blev håndteret perfekt.",
      author: "Jens K.",
    },
    {
      text: "Vi startede vores virksomhed i Spanien med fuld tillid, velvidende at alle juridiske aspekter var taget hånd om professionelt.",
      author: "Maria J.",
    },
  ]

  return (
    <section className="relative bg-[url('/images/handshake.jpg')] bg-cover bg-center bg-no-repeat py-24 px-6 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0e3a5e]/80 backdrop-brightness-75"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Nogle få udtalelser
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {testimonials.map((item, index) => (
            <blockquote
              key={index}
              className="italic font-light leading-relaxed"
            >
              <p className="mb-2">{item.text}</p>
              <footer className="not-italic font-normal">
                – {item.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
