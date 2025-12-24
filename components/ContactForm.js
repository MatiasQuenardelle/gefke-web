"use client"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"
import WhatsAppWidget from "@/components/WhatsAppWidget"
import HCaptcha from "@hcaptcha/react-hcaptcha"

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
          {/* name input */}
          <div>
            <label htmlFor="name" className="sr-only">
              {t("contactForm.nameLabel") || "Your Full Name"}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t("contactForm.namePlaceholder") || "Your Full Name"}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 text-gray-800"
            />
          </div>

          {/* email input */}
          <div>
            <label htmlFor="email" className="sr-only">
              {t("contactForm.emailLabel") || "Your Email Address"}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={
                t("contactForm.emailPlaceholder") || "Your Email Address"
              }
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 text-gray-800"
            />
          </div>

          {/* message textarea */}
          <div>
            <label htmlFor="message" className="sr-only">
              {t("contactForm.messageLabel") || "Your Message"}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contactForm.messagePlaceholder") || "Your Message"}
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 text-gray-800"
            />
          </div>

          {/* captcha */}
          <div className="pt-2">
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
              onVerify={(token) => setCaptchaToken(token)}
              ref={captchaRef}
            />
          </div>

          {/* send button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4AA07D] text-white font-medium py-3 px-5 rounded-md hover:bg-[#5A7A6E] transition-colors"
          >
            {isSubmitting
              ? t("contactForm.sending") || "Sending..."
              : t("contactForm.sendButton") || "Send Message"}
          </button>
        </form>

        {/* status message */}
        {status && (
          <p aria-live="polite" className="mt-6 text-center text-sm text-gray-700">{status}</p>
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
