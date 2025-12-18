"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useTranslation } from "react-i18next"
import {
  StarIcon as StarSolid,
  CheckCircleIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline"

export default function ReviewFunnel() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [rating, setRating] = useState(0)
  const [captchaToken, setCaptchaToken] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [flow, setFlow] = useState("form")
  const [copied, setCopied] = useState(false)

  const captchaRef = useRef(null)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!rating)
      return alert(t("contactForm.ratingRequired") || "Please select a rating.")
    if (!captchaToken)
      return alert(t("contactForm.captchaRequired") || "Captcha is required.")

    setIsSubmitting(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          rating,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFlow(rating === 5 ? "five" : "other")
        setCaptchaToken("")
        if (captchaRef.current) captchaRef.current.resetCaptcha()
      })
      .catch(console.error)
      .finally(() => setIsSubmitting(false))
  }
  const copyReview = async () => {
    try {
      await navigator.clipboard.writeText(formData.message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      console.error("Copy failed.")
    }
  }

  if (flow !== "form") {
    return (
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-md shadow-lg border border-gray-200 text-center">
          {flow === "five" ? (
            <>
              <CheckCircleIcon className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {t("reviewFunnel.thankYou") ||
                  "Thank you for the glowing review!"}
              </h2>
              <p className="text-gray-700 mb-6">
                {t("reviewFunnel.askGMB") ||
                  "Would you mind sharing it on Google to help others find us?"}
              </p>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJ_VlbQF1rTEYReQftdoanPnA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {t("reviewFunnel.leaveOnGoogle") || "Leave a Google Review"}
              </a>
              <div>
                <button
                  onClick={copyReview}
                  className={`inline-flex items-center ${
                    copied
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-800"
                  } hover:bg-gray-200 font-medium py-2 px-4 rounded-md transition-colors`}
                >
                  <ClipboardIcon className="w-5 h-5 mr-2" />
                  {copied
                    ? t("reviewFunnel.copied") || "Copied!"
                    : t("reviewFunnel.copyText") || "Copy Your Review"}
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {t("reviewFunnel.thankFeedback") ||
                  "Thank you for your feedback!"}
              </h2>
              <p className="text-gray-700">
                {t("reviewFunnel.appreciate") ||
                  "We appreciate you taking the time to help us improve our services."}
              </p>
            </>
          )}
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-md shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          {t("reviewFunnel.title") || "Share Your Experience"}
        </h2>

        {/* Star selector */}
        <div className="flex justify-center mb-8">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none transition-transform transform active:scale-90"
            >
              {rating >= star ? (
                <StarSolid className="w-10 h-10 text-yellow-500" />
              ) : (
                <StarOutline className="w-10 h-10 text-gray-300 hover:text-yellow-400" />
              )}
            </button>
          ))}
        </div>

        {/* Contact form */}
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
            placeholder={t("contactForm.messagePlaceholder") || "Your Review"}
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
          />

          <div className="pt-2">
            <div className="max-w-full overflow-hidden">
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
                onVerify={(token) => setCaptchaToken(token)}
                ref={captchaRef}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-700 text-white font-medium py-3 px-5 rounded-md hover:bg-blue-800 transition-colors"
          >
            {isSubmitting
              ? t("contactForm.sending") || "Sending..."
              : t("contactForm.sendButton") || "Submit Review"}
          </button>
        </form>
      </div>
    </section>
  )
}
