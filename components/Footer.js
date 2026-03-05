import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 rounded-b-lg shadow-inner">
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Christian Gefke
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Autoriseret spansk advokat (abogado) med speciale i juridisk rådgivning til danskere i Spanien.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Juridiske tjenester
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/real-estate" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Fast ejendom
                </Link>
              </li>
              <li>
                <Link href="/services/business" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Erhverv og skat
                </Link>
              </li>
              <li>
                <Link href="/services/family-law" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Familieret og arv
                </Link>
              </li>
              <li>
                <Link href="/services/immigration" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Immigration og ophold
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Pages */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Populære sider
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/real-estate-buy-sell-spain" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Køb og salg af bolig
                </Link>
              </li>
              <li>
                <Link href="/residency-spain" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Opholdstilladelse
                </Link>
              </li>
              <li>
                <Link href="/starte-virksomhed-spanien" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Starte virksomhed
                </Link>
              </li>
              <li>
                <Link href="/testamenter-i-spanien" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Testamenter i Spanien
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Kontakt os
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Om mig
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Anmeldelser
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Language links */}
        <div className="border-t border-zinc-800 pt-6 mb-6 flex items-center gap-4 text-sm text-gray-400">
          <Link href="/en" className="hover:text-emerald-400 transition-colors">
            English version
          </Link>
          <span className="text-zinc-700">|</span>
          <Link href="/es" className="hover:text-emerald-400 transition-colors">
            Versión en español
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Christian Gefke</span>
          <div className="flex gap-6">
            <Link href="/privacypolicy" className="hover:text-gray-300 transition-colors">
              Privacy disclaimer
            </Link>
            <Link href="/legalterms" className="hover:text-gray-300 transition-colors">
              Handelsbetingelser
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
