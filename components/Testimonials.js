"use client"
import { useTranslation } from "react-i18next"

export default function Testimonials() {
  const { t } = useTranslation()
  
  const testimonials = [
    {
      text: t("homepage.testimonials.testimonial1.text"),
      author: t("homepage.testimonials.testimonial1.author"),
      location: t("homepage.testimonials.testimonial1.location"),
      service: t("homepage.testimonials.testimonial1.service"),
      rating: 5,
    },
    {
      text: t("homepage.testimonials.testimonial2.text"),
      author: t("homepage.testimonials.testimonial2.author"),
      location: t("homepage.testimonials.testimonial2.location"),
      service: t("homepage.testimonials.testimonial2.service"),
      rating: 5,
    },
    {
      text: t("homepage.testimonials.testimonial3.text"),
      author: t("homepage.testimonials.testimonial3.author"),
      location: t("homepage.testimonials.testimonial3.location"),
      service: t("homepage.testimonials.testimonial3.service"),
      rating: 5,
    },
    {
      text: t("homepage.testimonials.testimonial4.text"),
      author: t("homepage.testimonials.testimonial4.author"),
      location: t("homepage.testimonials.testimonial4.location"),
      service: t("homepage.testimonials.testimonial4.service"),
      rating: 5,
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#0e3a5e] via-[#1a4b6b] to-[#0e3a5e] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Animated overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6 hover:bg-white/15 transition-all duration-300">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            {t("homepage.testimonials.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">
            {t("homepage.testimonials.title")}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-shadow">
            {t("homepage.testimonials.subtitle")}
          </p>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 
                         border border-white/20 hover:bg-white/15 card-hover
                         shadow-luxury hover:shadow-luxury-hover relative overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

              {/* Service badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-medium text-white shadow-lg">
                  {item.service}
                </span>
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote icon */}
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-white/30 group-hover:text-white/50 transition-colors duration-500"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Testimonial text */}
              <blockquote className="mb-8 relative z-10">
                <p className="italic font-light leading-relaxed text-lg lg:text-xl group-hover:text-white transition-colors duration-300 text-shadow">
                  &ldquo;{item.text}&rdquo;
                </p>
              </blockquote>

              {/* Author information */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg text-white group-hover:text-blue-100 transition-colors duration-300">
                      {item.author}
                    </p>
                    <p className="text-blue-200 text-sm flex items-center gap-2 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.location}
                    </p>
                  </div>

                  {/* Verified badge */}
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-green-300 text-xs font-medium">
                      {t("homepage.testimonials.verified")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="text-center mt-20 animate-fade-in-up delay-1000">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden shadow-luxury">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-shadow">
                {t("homepage.testimonials.ctaTitle")}
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto text-shadow">
                {t("homepage.testimonials.ctaText")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#003366] rounded-xl font-bold 
                             transition-all duration-500 hover:bg-gray-100 hover:scale-105 shadow-luxury hover:shadow-luxury-hover"
                >
                  <span>{t("homepage.testimonials.ctaButton1")}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    window.open("tel:+4593841822", "_self")
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 rounded-xl font-bold 
                             transition-all duration-500 hover:bg-white/10 hover:border-white/50 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{t("homepage.testimonials.ctaButton2")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
