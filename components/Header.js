"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { Merriweather } from "next/font/google"
import { useTranslation } from "react-i18next"
import LanguageSelector from "./LanguageSelector"

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

export default function Header() {
  const router = useRouter()
  const { t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const [focusedItemIndex, setFocusedItemIndex] = useState(-1)
  const menuRefs = useRef([])
  const dropdownRefs = useRef([])

  /**
   * Navigation structure – updated to reflect the current articles visible in the
   * project (see screenshot).
   * ‣ If a previous submenu had no article yet, it is kept.
   * ‣ If a new article exists without a submenu, it has been added.
   * ‣ Provide explicit `href` when the article lives at a top‑level route;
   *   otherwise a conventional "/{kategori}/{artikel}" path is auto‑generated.
   */
  const menuItems = useMemo(() => [
    {
      label: t("menu.familyAndInheritance.label"),
      sub: [
        { label: t("menu.familyAndInheritance.sub.internationalDivorces"), href: "/divorce-spain" },
        { label: t("menu.familyAndInheritance.sub.probateInInheritance"), href: "/opholdstilladelse" },
        { label: t("menu.familyAndInheritance.sub.lawChoiceInInheritance"), href: "/lovvalg" },
        { label: t("menu.familyAndInheritance.sub.willsInSpain"), href: "/testamenter-i-spanien" },
      ],
    },
    {
      label: t("menu.realEstate.label"),
      sub: [
        { label: t("menu.realEstate.sub.rentalContracts"), href: "/lejekontrakter-i-spanien" },
        { label: t("menu.realEstate.sub.mortgageAndLien"), href: "/realkredit" },
        {
          label: t("menu.realEstate.sub.planningLaw"),
          href: "/real-estate-investment-spain",
        },
        {
          label: t("menu.realEstate.sub.buySellRealEstate"),
          href: "/real-estate-buy-sell-spain",
        },
        {
          label: t("menu.realEstate.sub.homeownerAssociations"),
          href: "/homeowner-associations",
        },
      ],
    },
    {
      label: t("menu.daneInSpain.label"),
      sub: [
        { label: t("menu.daneInSpain.sub.residency"), href: "/residency-spain" },
        { label: t("menu.daneInSpain.sub.pensionAndHomeCare"), href: "/pension-spain" },
        { label: t("menu.daneInSpain.sub.workInSpain"), href: "/arbejdsret-i-spanien" },
        { label: t("menu.daneInSpain.sub.taxAdvice"), href: "/skat" },
      ],
    },
    {
      label: t("menu.business.label"),
      sub: [
        {
          label: t("menu.business.sub.selfEmployed"),
          href: "/selvstaendig-webshop-spanien",
        },
        { label: t("menu.business.sub.startBusiness"), href: "/starte-virksomhed-spanien" },
        {
          label: t("menu.business.sub.holdingCompanies"),
          href: "/dansk-holder-spansk-selskab",
        },
      ],
    },
  ], [t])

  /** Resolve a link for a submenu item */
  const resolveHref = (categoryLabel, sub) => {
    if (sub.href) return sub.href
    const categorySlug = slugify(categoryLabel)
    const subSlug = slugify(sub.label)
    return `/${categorySlug}/${subSlug}`
  }

  /** Handle keyboard navigation in dropdown menus */
  const handleDropdownKeyDown = (e, menuIndex, itemCount) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setFocusedItemIndex((prev) => {
          const nextIndex = prev < itemCount - 1 ? prev + 1 : 0
          return nextIndex
        })
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedItemIndex((prev) => {
          const nextIndex = prev > 0 ? prev - 1 : itemCount - 1
          return nextIndex
        })
        break
      case "Escape":
        e.preventDefault()
        setOpenMenu(null)
        setFocusedItemIndex(-1)
        // Return focus to the menu button
        if (menuRefs.current[menuIndex]) {
          menuRefs.current[menuIndex].focus()
        }
        break
      case "Enter":
      case " ":
        e.preventDefault()
        // The link click will be handled by the Link component
        if (dropdownRefs.current[menuIndex]?.[focusedItemIndex]) {
          dropdownRefs.current[menuIndex][focusedItemIndex].click()
        }
        break
      case "Tab":
        // Allow default tab behavior but close the menu
        setOpenMenu(null)
        setFocusedItemIndex(-1)
        break
      default:
        break
    }
  }

  /** Focus management when dropdown opens/closes */
  useEffect(() => {
    if (openMenu !== null && focusedItemIndex >= 0) {
      const itemRef = dropdownRefs.current[openMenu]?.[focusedItemIndex]
      if (itemRef) {
        itemRef.focus()
      }
    }
  }, [focusedItemIndex, openMenu])

  /** Reset focused item when menu changes */
  useEffect(() => {
    if (openMenu === null) {
      setFocusedItemIndex(-1)
    } else {
      setFocusedItemIndex(0)
    }
  }, [openMenu])

  return (
    <header className=" bg-[#003366] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          onClick={() => router.push("/")}
          className="text-3xl {`${merri.className}`} md:ml-10 font-bold cursor-pointer"
        >
          Christian Gefke
        </h1>

        {/* Hamburger Button and Language Selector – only visible on mobile */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 md:mr-10 items-center">
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
                    className="flex items-center gap-1 hover:underline px-4"
                  >
                    {item.label}
                    <span aria-hidden="true">{openMenu === index ? "▴" : "▾"}</span>
                  </button>

                  {openMenu === index && (
                    <div
                      role="menu"
                      className="absolute  top-full left-0 bg-white text-black rounded shadow-md z-50 min-w-[180px]"
                      onKeyDown={(e) => handleDropdownKeyDown(e, index, item.sub.length)}
                    >
                      {item.sub.map((subItem, subIndex) => (
                        <Link
                          key={subItem.label}
                          ref={(el) => (dropdownRefs.current[index][subIndex] = el)}
                          href={resolveHref(item.label, subItem)}
                          role="menuitem"
                          tabIndex={focusedItemIndex === subIndex ? 0 : -1}
                          className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <Link href="/about" className="hover:underline px-4 z-50">
              {t("menu.about")}
            </Link>
            <LanguageSelector />
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
            {t("menu.about")}
          </Link>
        </nav>
      )}
    </header>
  )
}
