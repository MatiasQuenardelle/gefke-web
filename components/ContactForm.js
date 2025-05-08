"use client"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useTranslation } from "react-i18next"

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [captchaToken, setCaptchaToken] = useState("")
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const captchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
        if (captchaRef.current) captchaRef.current.resetCaptcha()
      })
      .catch((error) => {
        console.error(error)
        setStatus(t("contactForm.error"))
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-md shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          {t("contactForm.title") || "Contact Our Law Firm"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
          <div className="pt-2">
            <HCaptcha
              sitekey="171c20da-537c-4c42-b2fa-1a563e6ee7a4"
              onVerify={(token) => setCaptchaToken(token)}
              ref={captchaRef}
            />
          </div>
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
        {status && (
          <p className="mt-6 text-center text-sm text-gray-700">{status}</p>
        )}
      </div>
    </section>
  )
}
