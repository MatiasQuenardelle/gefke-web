import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

/**
 * size   – number | string
 *          • number → pixel size (e.g. 64)
 *          • string → any valid CSS size (e.g. "4rem", "3.5em")
 * phone  – WhatsApp phone in international format (no + or spaces)
 * className – extra Tailwind classes (for positioning, etc.)
 */
export default function WhatsAppWidget({
  size = 64,
  phone = "+4593841822",
  className = "",
}) {
  const dim = typeof size === "number" ? `${size}px` : size

  return (
    <Link
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg ${className}`}
      style={{ width: dim, height: dim }}
    >
      {/* icon fills ~60 % of the circle so the padding scales automatically */}
      <FaWhatsapp
        aria-label="Chat on WhatsApp"
        className="text-white"
        style={{ width: "60%", height: "60%" }}
      />
    </Link>
  )
}
