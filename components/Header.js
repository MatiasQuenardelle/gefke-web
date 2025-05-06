"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

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
      { label: "Skilsmisse" },
      { label: "Testamente" },
      { label: "Divorce in Spain", href: "/divorce-spain" },
      { label: "Pension i Spanien", href: "/pension-spain" },
    ],
  },
  {
    label: "Fast ejendom",
    sub: [
      { label: "Køb og salg", href: "/real-estate-buy-sell-spain" },
      { label: "Lejeret" },
      { label: "Homeowner Associations", href: "/homeowner-associations" },
      {
        label: "Investering i fast ejendom",
        href: "/real-estate-investment-spain",
      },
    ],
  },
  {
    label: "Dansker i Spanien",
    sub: [
      { label: "Boligkøb" },
      { label: "Skatteforhold", href: "/skat" },
      { label: "Residency i Spanien", href: "/residency-spain" },
    ],
  },
  {
    label: "Virksomhed",
    sub: [
      { label: "Kontrakter" },
      { label: "Selskabsret" },
      { label: "Arbejdret i Spanien", href: "/arbejdsret-i-spanien" },
      { label: "Work in Spain", href: "/work-in-spain" },
      {
        label: "Dansk holder spansk selskab",
        href: "/dansk-holder-spansk-selskab",
      },
      {
        label: "Starte virksomhed i Spanien",
        href: "/starte-virksomhed-spanien",
      },
      {
        label: "Selvstændig webshop Spanien",
        href: "/selvstaendig-webshop-spanien",
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
          className="text-4xl md:ml-10 font-bold cursor-pointer"
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
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:underline">
                {item.label}
                <span>▾</span>
              </button>
              {openMenu === index && (
                <div
                  /* keep it open while pointer is inside the dropdown */
                  onMouseEnter={() => setOpenMenu(index)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="absolute top-full left-0 bg-white text-black rounded shadow-md z-50 min-w-[180px]"
                >
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
          <Link href="/about" className="hover:underline">
            Om
          </Link>
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
            href="/om"
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
