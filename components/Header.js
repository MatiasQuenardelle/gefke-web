"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react" // You can use any icon lib you like
import { useRouter } from "next/navigation"

const menuItems = [
  { label: "Familie og arveret", sub: ["Skilsmisse", "Testamente"] },
  { label: "Fast ejendom", sub: ["Køb og salg", "Lejeret"] },
  { label: "Dansker i Spanien", sub: ["Boligkøb", "Skatteforhold"] },
  { label: "Virksomhed", sub: ["Kontrakter", "Selskabsret"] },
]

export default function Header() {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)

  return (
    <header className="bg-[#002f5a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          onClick={() => router.push("/")}
          className="text-4xl md:ml-10 font-bold"
        >
          Christian Gefke
        </h1>

        {/* Hamburger Button - only visible on mobile */}
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
              key={index}
              className="relative"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:underline">
                {item.label}
                <span>▾</span>
              </button>
              {openMenu === index && (
                <div className="absolute top-full mt-2 bg-white text-black rounded shadow-md z-50 min-w-[180px]">
                  {item.sub.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/${item.label
                        .toLowerCase()
                        .replace(/\s/g, "-")}/${subItem
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/om" className="hover:underline">
            Om
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-white/20 pb-2">
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
                  {item.sub.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/${item.label
                        .toLowerCase()
                        .replace(/\s/g, "-")}/${subItem
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                      className="block text-sm hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem}
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
