"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { Merriweather } from "next/font/google"

const merri = Merriweather({ weight: "700", subsets: ["latin"] })

function getMenuItems(lang) {
  if (lang === "en") {
    return [
      {
        label: "Cross-border advisory",
        sub: [
          { label: "Tax residency DK \u2194 ES", href: "/en/tax-spain" },
          { label: "Relocation between Denmark and Spain", href: "/en/residency-spain" },
          { label: "Pensions & double taxation", href: "/en/pension-spain" },
          { label: "International family & succession", href: "/en/choice-of-law" },
          { label: "Dual-country structures", href: "/en/start-business-spain" },
        ],
      },
      {
        label: "Business & international trade",
        sub: [
          { label: "Company formation in Spain", href: "/en/start-business-spain" },
          { label: "Danish companies operating in Spain", href: "/en/start-business-spain" },
          { label: "Cross-border contracts", href: "/en/work-in-spain" },
          { label: "Export & payment structures", href: "/en/start-business-spain" },
          { label: "Risk allocation & financing structures", href: "/en/contact" },
          { label: "Cooperation with Spanish partners", href: "/en/contact" },
        ],
      },
      {
        label: "Tax & private matters",
        sub: [
          { label: "Tax on relocation", href: "/en/tax-spain" },
          { label: "Pensions in Spain", href: "/en/pension-spain" },
          { label: "Inheritance & wills", href: "/en/wills-spain" },
          { label: "Choice of law & jurisdiction", href: "/en/choice-of-law" },
          { label: "Worldwide income", href: "/en/tax-spain" },
        ],
      },
      {
        label: "Property in Spain",
        sub: [
          { label: "Buying property in Spain", href: "/en/buy-property-spain" },
          { label: "Selling property", href: "/en/buy-property-spain" },
          { label: "Property tax", href: "/en/real-estate-investment" },
          { label: "Due diligence", href: "/en/buy-property-spain" },
          { label: "Land registry & registration", href: "/en/mortgages-spain" },
        ],
      },
      {
        label: "Insights",
        sub: [
          { label: "Articles", href: "/en/blog" },
          { label: "Current topics", href: "/en/blog" },
          { label: "International affairs", href: "/en/blog" },
        ],
      },
      {
        label: "About",
        sub: [
          { label: "Profile", href: "/en/about" },
          { label: "Bar admission", href: "/en/about" },
          { label: "Cooperation", href: "/en/about" },
          { label: "Contact", href: "/en/contact" },
        ],
      },
    ]
  }

  if (lang === "es") {
    return [
      {
        label: "Asesoramiento transfronterizo",
        sub: [
          { label: "Residencia fiscal DK \u2194 ES", href: "/es/impuestos-espana" },
          { label: "Traslado entre Dinamarca y Espa\u00f1a", href: "/es/residencia-extranjeros" },
          { label: "Pensiones y doble imposici\u00f3n", href: "/es/pension-espana" },
          { label: "Sucesiones internacionales", href: "/es/herencias-internacionales" },
          { label: "Estructuras entre dos jurisdicciones", href: "/es/crear-empresa-espana" },
        ],
      },
      {
        label: "Empresa y comercio internacional",
        sub: [
          { label: "Constituci\u00f3n de empresa en Espa\u00f1a", href: "/es/crear-empresa-espana" },
          { label: "Empresas danesas en Espa\u00f1a", href: "/es/empresa-espana" },
          { label: "Contratos internacionales", href: "/es/trabajar-espana" },
          { label: "Exportaci\u00f3n y estructura de pagos", href: "/es/crear-empresa-espana" },
          { label: "Distribuci\u00f3n de riesgos y financiaci\u00f3n", href: "/es/contacto" },
          { label: "Cooperaci\u00f3n con socios espa\u00f1oles", href: "/es/contacto" },
        ],
      },
      {
        label: "Fiscalidad y asuntos privados",
        sub: [
          { label: "Fiscalidad por traslado", href: "/es/impuestos-espana" },
          { label: "Pensiones en Espa\u00f1a", href: "/es/pension-espana" },
          { label: "Herencias y testamentos", href: "/es/testamentos-espana" },
          { label: "Elecci\u00f3n de ley y jurisdicci\u00f3n", href: "/es/herencias-internacionales" },
          { label: "Renta mundial", href: "/es/impuestos-espana" },
        ],
      },
      {
        label: "Inmobiliario en Espa\u00f1a",
        sub: [
          { label: "Compra de vivienda en Espa\u00f1a", href: "/es/comprar-propiedad-espana" },
          { label: "Venta de vivienda", href: "/es/comprar-propiedad-espana" },
          { label: "Fiscalidad inmobiliaria", href: "/es/inversion-inmobiliaria" },
          { label: "Due diligence", href: "/es/comprar-propiedad-espana" },
          { label: "Registro de la propiedad", href: "/es/hipotecas-espana" },
        ],
      },
      {
        label: "Art\u00edculos",
        sub: [
          { label: "Art\u00edculos", href: "/es/blog" },
          { label: "Temas actuales", href: "/es/blog" },
          { label: "Asuntos internacionales", href: "/es/blog" },
        ],
      },
      {
        label: "Sobre",
        sub: [
          { label: "Perfil", href: "/es/sobre-mi" },
          { label: "Colegiaci\u00f3n", href: "/es/sobre-mi" },
          { label: "Colaboraci\u00f3n", href: "/es/sobre-mi" },
          { label: "Contacto", href: "/es/contacto" },
        ],
      },
    ]
  }

  // Default: Danish
  return [
    {
      label: "Cross-border r\u00e5dgivning",
      sub: [
        { label: "Skattem\u00e6ssig bop\u00e6l DK \u2194 ES", href: "/skat" },
        { label: "Flytning mellem Danmark og Spanien", href: "/residency-spain" },
        { label: "Pension & dobbeltbeskatning", href: "/pension-spain" },
        { label: "International familie- og arveret", href: "/lovvalg" },
        { label: "Struktur ved aktiviteter i begge lande", href: "/dansk-holder-spansk-selskab" },
      ],
    },
    {
      label: "Virksomhed & international handel",
      sub: [
        { label: "Etablering af virksomhed i Spanien", href: "/starte-virksomhed-spanien" },
        { label: "Dansk virksomhed med aktiviteter i Spanien", href: "/dansk-holder-spansk-selskab" },
        { label: "Kontrakter mellem DK og spansktalende markeder", href: "/arbejdsret-i-spanien" },
        { label: "Eksport & betalingsstruktur", href: "/selvstaendig-webshop-spanien" },
        { label: "Risikofordeling og finansieringsstruktur", href: "/contact" },
        { label: "Samarbejde med spanske partnere", href: "/contact" },
      ],
    },
    {
      label: "Skat & private forhold",
      sub: [
        { label: "Skat ved flytning", href: "/skat" },
        { label: "Pension i Spanien", href: "/pension-spain" },
        { label: "Arv & testamente i Spanien", href: "/testamenter-i-spanien" },
        { label: "Lovvalg og v\u00e6rneting", href: "/lovvalg" },
        { label: "Global indkomst & skattem\u00e6ssig hjemsted", href: "/skat" },
      ],
    },
    {
      label: "Ejendom i Spanien",
      sub: [
        { label: "K\u00f8b af bolig i Spanien", href: "/real-estate-buy-sell-spain" },
        { label: "Salg af bolig", href: "/real-estate-buy-sell-spain" },
        { label: "Skat ved ejendom", href: "/real-estate-investment-spain" },
        { label: "Due diligence", href: "/real-estate-buy-sell-spain" },
        { label: "Tinglysning & registrering", href: "/realkredit" },
      ],
    },
    {
      label: "Indsigter",
      sub: [
        { label: "Artikler", href: "/blog" },
        { label: "Aktuelle emner", href: "/blog" },
        { label: "Internationale forhold", href: "/blog" },
      ],
    },
    {
      label: "Om Christian Gefke",
      sub: [
        { label: "Profil", href: "/about" },
        { label: "Advokatbeskikkelse", href: "/about" },
        { label: "Samarbejde", href: "/about" },
        { label: "Kontakt", href: "/contact" },
      ],
    },
  ]
}

export default function Header() {
  const pathname = usePathname()
  const lang = pathname.startsWith("/en") ? "en" : pathname.startsWith("/es") ? "es" : "da"
  const homePath = lang === "da" ? "/" : `/${lang}`

  const menuItems = getMenuItems(lang)

  const [openMenu, setOpenMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const [focusedItemIndex, setFocusedItemIndex] = useState(-1)
  const menuRefs = useRef([])
  const dropdownRefs = useRef([])

  const handleDropdownKeyDown = (e, menuIndex, itemCount) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setFocusedItemIndex((prev) => (prev < itemCount - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedItemIndex((prev) => (prev > 0 ? prev - 1 : itemCount - 1))
        break
      case "Escape":
        e.preventDefault()
        setOpenMenu(null)
        setFocusedItemIndex(-1)
        if (menuRefs.current[menuIndex]) {
          menuRefs.current[menuIndex].focus()
        }
        break
      case "Enter":
      case " ":
        e.preventDefault()
        if (dropdownRefs.current[menuIndex]?.[focusedItemIndex]) {
          dropdownRefs.current[menuIndex][focusedItemIndex].click()
        }
        break
      case "Tab":
        setOpenMenu(null)
        setFocusedItemIndex(-1)
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (openMenu !== null && focusedItemIndex >= 0) {
      const itemRef = dropdownRefs.current[openMenu]?.[focusedItemIndex]
      if (itemRef) {
        itemRef.focus()
      }
    }
  }, [focusedItemIndex, openMenu])

  useEffect(() => {
    if (openMenu === null) {
      setFocusedItemIndex(-1)
    } else {
      setFocusedItemIndex(0)
    }
  }, [openMenu])

  return (
    <header className="bg-[#3A5A4E] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={homePath} className="md:ml-10 cursor-pointer flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Buxton-Gefke Law"
            width={50}
            height={50}
            className="brightness-0 invert"
            priority
          />
          <span className={`text-2xl font-bold ${merri.className}`}>
            Buxton-Gefke Law
          </span>
        </Link>

        {/* Hamburger Button – only visible on mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6 md:mr-10 items-center">
          {menuItems.map((item, index) => {
            if (!dropdownRefs.current[index]) {
              dropdownRefs.current[index] = []
            }
            return (
              <div
                key={item.label}
                className="relative z-50"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  ref={(el) => (menuRefs.current[index] = el)}
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenMenu((prev) => (prev === index ? null : index))
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" && openMenu === index) {
                      e.preventDefault()
                      setFocusedItemIndex(0)
                    } else if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                      if (openMenu !== index) {
                        e.preventDefault()
                        setOpenMenu(index)
                      }
                    } else if (e.key === "Escape") {
                      e.preventDefault()
                      setOpenMenu(null)
                    }
                  }}
                  aria-expanded={openMenu === index}
                  aria-haspopup="true"
                  className="flex items-center gap-1 hover:underline px-2 lg:px-4 text-sm lg:text-base whitespace-nowrap"
                >
                  {item.label}
                  <span aria-hidden="true">{openMenu === index ? "\u25b4" : "\u25be"}</span>
                </button>

                {openMenu === index && (
                  <div
                    role="menu"
                    className="absolute top-full left-0 bg-white text-black rounded shadow-md z-50 min-w-[220px]"
                    onKeyDown={(e) => handleDropdownKeyDown(e, index, item.sub.length)}
                  >
                    {item.sub.map((subItem, subIndex) => (
                      <Link
                        key={subItem.label}
                        ref={(el) => (dropdownRefs.current[index][subIndex] = el)}
                        href={subItem.href}
                        role="menuitem"
                        tabIndex={focusedItemIndex === subIndex ? 0 : -1}
                        className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {/* Language links */}
          <div className="flex items-center gap-1 pl-2 border-l border-white/30 ml-2">
            <Link href="/" className="px-1.5 py-0.5 rounded text-sm hover:bg-white/10 transition-colors" title="Dansk">
              DA
            </Link>
            <Link href="/en" className="px-1.5 py-0.5 rounded text-sm hover:bg-white/10 transition-colors" title="English">
              EN
            </Link>
            <Link href="/es" className="px-1.5 py-0.5 rounded text-sm hover:bg-white/10 transition-colors" title="Espa\u00f1ol">
              ES
            </Link>
          </div>
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
                <span>{mobileSubmenu === index ? "\u25b4" : "\u25be"}</span>
              </button>
              {mobileSubmenu === index && (
                <div className="mt-2 space-y-2 pl-4">
                  {item.sub.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
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

          {/* Language links */}
          <div className="flex gap-4 pt-2 border-t border-white/20">
            <Link href="/" className="text-sm hover:underline" onClick={() => setMobileMenuOpen(false)}>
              Dansk
            </Link>
            <Link href="/en" className="text-sm hover:underline" onClick={() => setMobileMenuOpen(false)}>
              English
            </Link>
            <Link href="/es" className="text-sm hover:underline" onClick={() => setMobileMenuOpen(false)}>
              Espa\u00f1ol
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
