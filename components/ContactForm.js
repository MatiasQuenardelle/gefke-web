"use client"
import { useState, useRef, lazy, Suspense } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"
import WhatsAppWidget from "@/components/WhatsAppWidget" // ⬅️ new

// Lazy load hCaptcha to reduce initial bundle size
const HCaptcha = lazy(() => import("@hcaptcha/react-hcaptcha"))

export default function ContactForm({
  showWhatsApp = false, // toggle the widget
  phone = "15551234567", // override per-page if needed
}) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [captchaToken, setCaptchaToken] = useState("")
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const captchaRef = useRef(null)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) {
      setStatus(t("contactForm.captchaRequired"))
      return
    }
    setIsSubmitting(true)

    emailjs
      .send(
        "service_3d693zn",
        "template_edqoiij",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "VM0gePEBgxX098yry"
      )
      .then(() => {
        setStatus(t("contactForm.success"))
        setFormData({ name: "", email: "", message: "" })
        setCaptchaToken("")
        captchaRef.current?.resetCaptcha()
      })
      .catch(() => setStatus(t("contactForm.error")))
      .finally(() => setIsSubmitting(false))
  }

  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-md shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          {t("contactForm.title") || "Contact Our Law Firm"}
        </h2>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* inputs … */}
          <input
            type="text"
            name="name"
            placeholder={t("contactForm.namePlaceholder") || "Your Full Name"}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder={
              t("contactForm.emailPlaceholder") || "Your Email Address"
            }
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
          />
          <textarea
            name="message"
            placeholder={t("contactForm.messagePlaceholder") || "Your Message"}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
          />

          {/* captcha - lazy loaded */}
          <div className="pt-2">
            <Suspense fallback={<div className="h-[78px] bg-gray-100 rounded animate-pulse" />}>
              <HCaptcha
                sitekey="171c20da-537c-4c42-b2fa-1a563e6ee7a4"
                onVerify={(token) => setCaptchaToken(token)}
                ref={captchaRef}
              />
            </Suspense>
          </div>

          {/* send button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-700 text-white font-medium py-3 px-5 rounded-md hover:bg-blue-800 transition-colors"
          >
            {isSubmitting
              ? t("contactForm.sending") || "Sending..."
              : t("contactForm.sendButton") || "Send Message"}
          </button>
        </form>

        {/* status message */}
        {status && (
          <p className="mt-6 text-center text-sm text-gray-700">{status}</p>
        )}

        {/* optional WhatsApp CTA */}
        {showWhatsApp && (
          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-sm text-gray-600">
              {t("contactForm.orWhatsApp") || "…or chat with us on WhatsApp"}
            </span>
            <WhatsAppWidget size={40} phone={phone} />
          </div>
        )}
      </div>
    </section>
  )
}
