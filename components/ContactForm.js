"use client"
import { useState, useRef } from "react"
import { usePathname } from "next/navigation"

import danish from "@/public/locales/da.json"
import WhatsAppWidget from "@/components/WhatsAppWidget"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { trackEvent } from "@/lib/gtag"

const initialFormState = {
  name: "",
  email: "",
  stage: "",
  location: "",
  budget: "",
  message: "",
}

export default function ContactForm({
  showWhatsApp = false,
  phone = "15551234567",
}) {
  const t = danish
  const pathname = usePathname()
  const isPropertyHomepage = pathname === "/"
  const [formData, setFormData] = useState(initialFormState)
  const [captchaToken, setCaptchaToken] = useState("")
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const captchaRef = useRef(null)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleCaptchaExpire = () => {
    setCaptchaToken("")
  }

  const buildMessage = () => {
    if (!isPropertyHomepage) {
      return formData.message
    }

    return [
      "Ny henvendelse fra boligkampagne",
      `Hvor i processen: ${formData.stage || "Ikke angivet"}`,
      `Område i Spanien: ${formData.location || "Ikke angivet"}`,
      `Budget / prisniveau: ${formData.budget || "Ikke angivet"}`,
      "",
      "Besked:",
      formData.message,
    ].join("\n")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!captchaToken) {
      setStatus(t.contactForm.captchaRequired)
      return
    }
    setIsSubmitting(true)
    setStatus("")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: isPropertyHomepage
            ? "Bolig i Spanien lead fra homepage"
            : "Ny kontaktformularbesked",
          name: formData.name,
          email: formData.email,
          message: buildMessage(),
          stage: formData.stage,
          location: formData.location,
          budget: formData.budget,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus(t.contactForm.success)
      setFormData(initialFormState)
      setCaptchaToken("")
      captchaRef.current?.resetCaptcha()

      trackEvent("homepage_property_form_submit", {
        location: isPropertyHomepage ? "homepage" : "generic",
        status: "success",
      })
    } catch (err) {
      console.error("ContactForm: Web3Forms error", err)
      setStatus(t.contactForm.error)
      trackEvent("homepage_property_form_submit", {
        location: isPropertyHomepage ? "homepage" : "generic",
        status: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-gray-100 px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-gray-200 bg-white p-8 shadow-lg md:p-10">
        {isPropertyHomepage ? (
          <div className="mb-8 rounded-[1.75rem] border border-emerald-100 bg-emerald-50/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4AA07D]">
              Uforpligtende første afklaring
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900">
              Få vurderet din situation før du skriver under
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
              Beskriv kort hvor du er i processen, hvilken bolig eller område det
              handler om, og hvad du gerne vil have afklaret. Så bliver det lettere
              at give dig en relevant første vurdering.
            </p>
          </div>
        ) : (
          <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
            {t.contactForm.title || "Contact Our Law Firm"}
          </h2>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                {t.contactForm.nameLabel || "Your Full Name"}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={t.contactForm.namePlaceholder || "Your Full Name"}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                {t.contactForm.emailLabel || "Your Email Address"}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t.contactForm.emailPlaceholder || "Your Email Address"}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {isPropertyHomepage && (
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <label htmlFor="stage" className="mb-2 block text-sm font-medium text-gray-700">
                  Hvor i processen er du?
                </label>
                <select
                  id="stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="">Vælg</option>
                  <option value="Overvejer stadig">Overvejer stadig</option>
                  <option value="Har fundet bolig">Har fundet bolig</option>
                  <option value="Har modtaget kontrakt">Har modtaget kontrakt</option>
                  <option value="Skal snart underskrive">Skal snart underskrive</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-700">
                  Område i Spanien
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  placeholder="Fx Marbella, Alicante, Mallorca"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-gray-700">
                  Budget eller prisniveau
                </label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  placeholder="Fx EUR 450.000"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="message" className="sr-only">
              {t.contactForm.messageLabel || "Your Message"}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={
                isPropertyHomepage
                  ? "Fortæl kort, hvad du gerne vil have afklaret før køb eller underskrift."
                  : t.contactForm.messagePlaceholder || "Your Message"
              }
              rows={isPropertyHomepage ? 7 : 6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div className="pt-2">
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={handleCaptchaExpire}
              ref={captchaRef}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#4AA07D] px-5 py-4 font-medium text-white transition-colors hover:bg-[#3A5A4E]"
          >
            {isSubmitting
              ? t.contactForm.sending || "Sending..."
              : isPropertyHomepage
                ? "Få en første vurdering"
                : t.contactForm.sendButton || "Send Message"}
          </button>
        </form>

        {status && (
          <p aria-live="polite" className="mt-6 text-center text-sm text-gray-700">
            {status}
          </p>
        )}

        {showWhatsApp && (
          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-sm text-gray-600">
              {t.contactForm.orWhatsApp || "...or chat with us on WhatsApp"}
            </span>
            <WhatsAppWidget size={40} phone={phone} />
          </div>
        )}
      </div>
    </section>
  )
}
