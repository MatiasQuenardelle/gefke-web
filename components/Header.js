"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { Merriweather } from "next/font/google"
const merri = Merriweather({ weight: "700", subsets: ["latin"] })
/** Helper to create URL‑friendly slugs */
function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

/**
 * Navigation structure – updated to reflect the current articles visible in the
 * project (see screenshot).
 * ‣ If a previous submenu had no article yet, it is kept.
 * ‣ If a new article exists without a submenu, it has been added.
 * ‣ Provide explicit `href` when the article lives at a top‑level route;
 *   otherwise a conventional "/{kategori}/{artikel}" path is auto‑generated.
 */
const menuItems = [
  {
    label: "Familie og arveret",
    sub: [
      { label: "Internationale skilsmisser", href: "/divorce-spain" },
      { label: "Værneting i arvesager", href: "/opholdstilladelse" },
      { label: "Lovvalg i arvesager", href: "/lovvalg" },
      { label: "Testamenter i Spanien", href: "/testamenter-i-spanien" },

      // { label: "Pension i Spanien", href: "/pension-spain" },
    ],
  },
  {
    label: "Fast ejendom",
    sub: [
      { label: "Leje-aftaler i Spanien", href: "/real-estate-buy-sell-spain" },
      { label: "Realkredit og pant i fast ejendom", href: "/realkredit" },
      {
        label: "Planlovgivning, urbanisme og byggejura",
        href: "real-estate-investment-spain",
      },
      {
        label: "Køb og salg af fast ejendom",
        href: "/real-estate-buy-sell-spain",
      },
      {
        label: "Ejerforeninger",
        href: "/homeowner-associations",
      },
    ],
  },
  {
    label: "Dansker i Spanien",
    sub: [
      { label: "Opholdstilladelse", href: "/residency-spain" },
      { label: "Pensión og hjemmepleje i Spanien:", href: "/pension-spain" },
      { label: "Arbejde i Spanien", href: "/arbejdsret-i-spanien" },
      { label: "Skatterådgivning i Spanien:", href: "/skat" },
    ],
  },
  {
    label: "Virksomhed",
    sub: [
      {
        label: "Selvstændig i Spanien",
        href: "/selvstaendig-webshop-spanien",
      },
      { label: "Virksomhed i spanien", href: "/starte-virksomhed-spanien" },
      {
        label: "Holding Selskaber i Spanien eller Danmark?",
        href: "/dansk-holder-spansk-selskab",
      },
    ],
  },
]

export default function Header() {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)

  /** Resolve a link for a submenu item */
  const resolveHref = (categoryLabel, sub) => {
    if (sub.href) return sub.href
    const categorySlug = slugify(categoryLabel)
    const subSlug = slugify(sub.label)
    return `/${categorySlug}/${subSlug}`
  }

  return (
    <header className=" bg-[#003366] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          onClick={() => router.push("/")}
          className="text-3xl {`${merri.className}`} md:ml-10 font-bold cursor-pointer"
        >
          Christian Gefke
        </h1>

        {/* Hamburger Button – only visible on mobile */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 md:mr-10">
          <nav className="hidden md:flex gap-6 md:mr-10">
            {menuItems.map((item, index) => (
              <div
                key={item.label}
                className="relative z-50"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenMenu((prev) => (prev === index ? null : index))
                  }}
                  className="flex items-center gap-1 hover:underline px-4"
                >
                  {item.label}
                  <span>{openMenu === index ? "▴" : "▾"}</span>
                </button>

                {openMenu === index && (
                  <div className="absolute  top-full left-0 bg-white text-black rounded shadow-md z-50 min-w-[180px]">
                    {item.sub.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={resolveHref(item.label, subItem)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/about" className="hover:underline px-4 z-50">
              Om
            </Link>
          </nav>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-4">
          {menuItems.map((item, index) => (
            <div key={item.label} className="border-b border-white/20 pb-2">
              <button
                className="w-full text-left flex justify-between items-center font-medium"
                onClick={() =>
                  setMobileSubmenu((prev) => (prev === index ? null : index))
                }
              >
                {item.label}
                <span>{mobileSubmenu === index ? "▴" : "▾"}</span>
              </button>
              {mobileSubmenu === index && (
                <div className="mt-2 space-y-2 pl-4">
                  {item.sub.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={resolveHref(item.label, subItem)}
                      className="block text-sm hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/about"
            className="block font-medium hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Om
          </Link>
        </nav>
      )}
    </header>
  )
}
