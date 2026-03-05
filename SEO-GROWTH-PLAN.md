# SEO Growth Plan: 62 → 620+ Organic Visitors/Month

**Site:** buxtongefke.es
**Current traffic:** 62 organic / 23 direct / 6 referral (last month)
**Goal:** 10x organic traffic within 4-6 months

---

## Completed

- [x] Convert 4 hub service pages from client to server components (content now in static HTML)
- [x] Fix broken hreflang (all languages pointed to same URL)
- [x] Create custom 404 page with service links and CTAs
- [x] Expand footer from 2 links to 15+ internal links across 4 columns
- [x] Convert footer from JS buttons to crawlable `<a>` tags
- [x] Fix duplicate `<main>` tag on homepage
- [x] Convert reviews page to server component
- [x] Dynamic copyright year in footer

---

## Reality Checks

### 1. English keywords are far more competitive than Danish
Danish keywords like "købe bolig spanien" have 2-3 competing sites.
English keywords like "real estate lawyer spain" have hundreds.
**Strategy:** English pages should lean into the Nordic/Danish angle, not compete
head-on with large English-language firms in Madrid/Barcelona.

### 2. Spanish pages compete against native firms
Christian won't outrank Spanish firms for "abogado inmobiliario".
**Strategy:** Spanish pages target ONLY the niche where there's zero competition —
"abogado danés", "abogado nórdico", "abogado que habla danés".
BUT: generic informational pages (golden visa, NIE guide, property purchase process)
are worth creating in Spanish because they attract foreigners searching in Spanish.

### 3. The `/tjenester/` and `/services/` pages may cannibalize each other
Both exist with similar content in the same language.
**Decision needed:** Either redirect `/tjenester/` → corresponding `/services/` pages
and keep one set, OR repurpose `/services/` as the English hubs (they already have
English slugs) and keep `/tjenester/` as Danish.

### 4. Translation ≠ localization
Each language version should feel native and target that language's search intent.
A Spanish user searching "abogado herencias internacionales" has different questions
than a Dane searching "arv spanien dansk lov". Where possible, adapt the angle —
not just translate word-for-word.

### 5. Blog posts are multilingual but badly routed
Posts with `lang: "en"` or `lang: "es"` frontmatter currently live under `/blog/`.
They need to route to `/en/blog/` and `/es/blog/` to live under the correct
language section.

### 6. Maintenance is real
Content in 3 languages means legal updates (tax rates, law changes, visa rules)
must be updated in 3 places. Christian should understand this commitment. If he can't
maintain all 3, prioritize Danish > English > Spanish.

---

## Phase 1: Replace i18next Runtime with Server-Side JSON Imports ✅ COMPLETED

All pages and components converted from `useTranslation()` to direct `da.json` imports.
- [x] All 21 service pages converted to server components
- [x] All 4 tjenester pages converted to server components
- [x] About, contact, privacypolicy, legalterms converted
- [x] All shared components converted (Breadcrumb, RelatedServices, FAQSection, TrustedBySection, ArticleMeta, PublicationsSection as server; Header, HeroSection, ContactCTA, FAQ, Testimonials, PartnersSection, ArticlesSection, BlogCTA as client with JSON import)
- [x] ContactForm, ReviewFunnel, BlogPageClient, BlogPostClient converted to JSON import
- [x] ClientLayout/I18nProvider removed from layout.js
- [x] LanguageSelector removed from Header
- [x] `i18next`, `react-i18next`, `i18next-browser-languagedetector` uninstalled
- [x] `npm run build` succeeds — all pages statically prerendered

---

## Phase 2: Resolve `/tjenester/` vs `/services/` Duplication ✅ COMPLETED

Repurposed `/services/` as English hubs (already English slugs).

- [x] Convert `/services/real-estate/page.js` to import `en.json` instead of `da.json`
- [x] Convert `/services/business/page.js` to import `en.json`
- [x] Convert `/services/family-law/page.js` to import `en.json`
- [x] Convert `/services/immigration/page.js` to import `en.json`
- [x] Update their layout.js files with English metadata and `lang="en"`
- [x] Add hreflang connecting `/tjenester/ejendom` ↔ `/services/real-estate`, `/tjenester/familie` ↔ `/services/family-law`, `/tjenester/skat-pension` ↔ `/services/immigration`
- [x] Sitemap already included both `/services/` and `/tjenester/` pages — no changes needed
- [x] Updated `getMetadata` helper to support hreflang `languages` option
- [x] Deleted unused i18next files (LanguageSelector.js, i18n-provider.js, lib/i18n.js)
- [x] `npm run build` succeeds — all pages statically prerendered

---

## Phase 3: Create English Pages (`/en/`) ✅ COMPLETED

Created 18 English pages under `/en/` (4 deferred pending translations).

- [x] `/en/layout.js` wrapper with `lang="en"` and English default metadata
- [x] `/en` English homepage with hero, services grid, CTA
- [x] `/en/about` and `/en/contact`
- [x] 15 English service/guide pages (buy-property-spain, real-estate-investment, mortgages-spain, homeowner-associations, rental-contracts-spain, divorce-spain, wills-spain, choice-of-law, inheritance-jurisdiction, residency-spain, pension-spain, work-in-spain, start-business-spain, employment-law-spain, tax-spain)
- [x] Each page has layout.js with English metadata and hreflang alternates linking to Danish equivalent
- [x] Sitemap updated with all 18 English URLs
- [x] `npm run build` succeeds — all pages statically prerendered
- [ ] DEFERRED: golden-visa-spain, nie-number-guide, beckham-law-spain, modelo-720-guide — need English translations added to en.json first
- [ ] DEFERRED: `/en/blog` — blog routing by language (Phase 5)

---

### Original Phase 3 Plan (for reference)

### Page-by-page decision: what gets an English version

All translations exist in `en.json`. The question is which pages are worth
creating as separate English URLs based on whether there's English search demand
and whether Christian can realistically serve that audience.

#### Create in English (20 pages) — international audience exists

| English URL | Danish Equivalent | Why |
|-------------|-------------------|-----|
| `/en` | `/` | Homepage — "danish lawyer spain" |
| `/en/about` | `/about` | Trust/credentials page |
| `/en/contact` | `/contact` | Conversion page |
| `/en/buy-property-spain` | `/real-estate-buy-sell-spain` | Huge expat demand |
| `/en/real-estate-investment` | `/real-estate-investment-spain` | Investor audience |
| `/en/mortgages-spain` | `/realkredit` | Buyers need this |
| `/en/homeowner-associations` | `/homeowner-associations` | Property owners |
| `/en/rental-contracts-spain` | `/lejekontrakter-i-spanien` | Landlords/tenants |
| `/en/divorce-spain` | `/divorce-spain` | International divorces |
| `/en/wills-spain` | `/testamenter-i-spanien` | Cross-border inheritance |
| `/en/choice-of-law` | `/lovvalg` | International inheritance |
| `/en/inheritance-jurisdiction` | `/opholdstilladelse` | International probate |
| `/en/residency-spain` | `/residency-spain` | High search volume |
| `/en/pension-spain` | `/pension-spain` | Nordic retirees |
| `/en/work-in-spain` | `/work-in-spain` | Expat workers |
| `/en/start-business-spain` | `/starte-virksomhed-spanien` | Expat entrepreneurs |
| `/en/employment-law-spain` | `/arbejdsret-i-spanien` | Workers rights |
| `/en/tax-spain` | `/skat` | Tax for foreigners |
| `/en/golden-visa-spain` | `/golden-visa-spanien` | High search volume |
| `/en/nie-number-guide` | `/nie-nummer-guide` | Very high search volume |
| `/en/beckham-law-spain` | `/beckham-lov-spanien` | Growing search trend |
| `/en/modelo-720-guide` | `/modelo-720-guide` | Tax reporting for foreigners |
| `/en/blog` | `/blog` | English blog listing |

#### Skip in English (3 pages) — Danish-specific, no English search intent

| Danish Page | Why Skip |
|-------------|----------|
| `/dansk-holder-spansk-selskab` | Specifically about Danish holding structures — only relevant to Danes |
| `/selvstaendig-webshop-spanien` | Danish freelancers selling online — niche Danish topic |
| `/tjenester/*` (4 pages) | These become redundant since `/services/*` hubs serve as English equivalents |

#### English hub pages (already solved in Phase 2)

The 4 `/services/` pages become the English hubs:
- `/services/real-estate` → English real estate hub
- `/services/business` → English business hub
- `/services/family-law` → English family law hub
- `/services/immigration` → English immigration hub

### Target English keywords

| Page | Primary Keywords | Realistic Ranking Difficulty |
|------|-----------------|----------------------------|
| `/en` homepage | "danish lawyer spain", "scandinavian lawyer spain" | Easy — zero competition |
| `/en/buy-property-spain` | "lawyer buy property spain", "property due diligence spain" | Medium |
| `/en/golden-visa-spain` | "golden visa spain 2026", "spain investor visa requirements" | Medium-Hard |
| `/en/nie-number-guide` | "NIE number spain guide", "how to get NIE spain" | Medium |
| `/en/residency-spain` | "residency spain EU citizen", "how to move to spain EU" | Medium |
| `/en/wills-spain` | "will in spain for foreigner", "inheritance spain foreigner" | Easy-Medium |
| `/en/beckham-law-spain` | "beckham law spain explained", "special tax regime spain" | Easy-Medium |
| `/en/tax-spain` | "tax in spain for foreigners", "non resident tax spain" | Medium-Hard |
| `/en/start-business-spain` | "start business spain foreigner", "autonomo spain guide" | Medium |
| `/en/pension-spain` | "retire to spain from europe", "pension taxation spain" | Medium |

### Technical implementation

```
app/en/
├── layout.js              → lang="en", default English metadata
├── page.js                → English homepage
├── not-found.js           → English 404
├── about/page.js
├── contact/page.js
├── buy-property-spain/
│   ├── layout.js          → metadata + Article schema
│   └── page.js
├── golden-visa-spain/
│   ├── layout.js
│   └── page.js
├── nie-number-guide/
│   ├── layout.js
│   └── page.js
├── ... (all other pages listed above)
└── blog/
    ├── page.js            → English blog listing (filter lang="en")
    └── [slug]/page.js     → English blog posts
```

Each page is a server component importing from `en.json`:

```jsx
import english from "@/public/locales/en.json"
const t = english

export default function BuyPropertySpain() {
  return (
    <section>
      <h1>{t.realEstateBuySell.title}</h1>
      <p>{t.realEstateBuySell.subtitle}</p>
      ...
    </section>
  )
}
```

---

## Phase 4: Create Spanish Pages (`/es/`) ✅ COMPLETED

Created 21 Spanish pages under `/es/` (4 deferred pending translations).

- [x] `/es/layout.js` wrapper with `lang="es"` and Spanish default metadata
- [x] `/es` Spanish homepage with hero, services grid, CTA
- [x] `/es/sobre-mi` and `/es/contacto`
- [x] 14 Spanish service/guide pages (comprar-propiedad-espana, inversion-inmobiliaria, hipotecas-espana, comunidades-propietarios, alquiler-espana, divorcio-internacional, testamentos-espana, herencias-internacionales, residencia-extranjeros, pension-espana, trabajar-espana, crear-empresa-espana, derecho-laboral, impuestos-espana)
- [x] 4 Spanish hub pages (inmobiliaria, empresa-espana, derecho-familia, inmigracion)
- [x] Each page has layout.js with Spanish metadata and hreflang alternates linking to Danish and English equivalents
- [x] Sitemap updated with all 21 Spanish URLs
- [x] `npm run build` succeeds — all pages statically prerendered
- [ ] DEFERRED: golden-visa-espana, numero-nie-guia, ley-beckham, modelo-720-guia — need Spanish translations added to es.json first
- [ ] DEFERRED: `/es/blog` — blog routing by language (Phase 6)

---

### Original Phase 4 Plan (for reference)

### Page-by-page decision

#### Create in Spanish (18 pages) — international/cross-border audience

| Spanish URL | Danish Equivalent | Why |
|-------------|-------------------|-----|
| `/es` | `/` | Homepage — "abogado danés en España" |
| `/es/sobre-mi` | `/about` | Trust/credentials |
| `/es/contacto` | `/contact` | Conversion |
| `/es/comprar-propiedad-espana` | `/real-estate-buy-sell-spain` | Foreigners buying property |
| `/es/inversion-inmobiliaria` | `/real-estate-investment-spain` | Foreign investors |
| `/es/hipotecas-espana` | `/realkredit` | Buyers need this |
| `/es/comunidades-propietarios` | `/homeowner-associations` | Property owners |
| `/es/alquiler-espana` | `/lejekontrakter-i-spanien` | Rental market |
| `/es/divorcio-internacional` | `/divorce-spain` | Mixed-nationality divorce |
| `/es/testamentos-espana` | `/testamenter-i-spanien` | Cross-border wills |
| `/es/herencias-internacionales` | `/lovvalg` + `/opholdstilladelse` | International succession |
| `/es/residencia-extranjeros` | `/residency-spain` | EU citizens in Spain |
| `/es/pension-espana` | `/pension-spain` | Nordic retirees |
| `/es/trabajar-espana` | `/work-in-spain` | Foreign workers |
| `/es/crear-empresa-espana` | `/starte-virksomhed-spanien` | Foreign entrepreneurs |
| `/es/derecho-laboral` | `/arbejdsret-i-spanien` | Workers rights |
| `/es/impuestos-espana` | `/skat` | Tax for foreigners |
| `/es/golden-visa-espana` | `/golden-visa-spanien` | High search volume in Spanish |
| `/es/numero-nie-guia` | `/nie-nummer-guide` | Very common search |
| `/es/ley-beckham` | `/beckham-lov-spanien` | Special tax regime |
| `/es/modelo-720-guia` | `/modelo-720-guide` | Tax reporting |
| `/es/blog` | `/blog` | Spanish blog listing |

#### Spanish hub pages (4 new routes)

| Spanish Hub | English Hub Equivalent |
|-------------|----------------------|
| `/es/inmobiliaria` | `/services/real-estate` |
| `/es/empresa-espana` | `/services/business` |
| `/es/derecho-familia` | `/services/family-law` |
| `/es/inmigracion` | `/services/immigration` |

#### Skip in Spanish (3 pages)

| Danish Page | Why Skip |
|-------------|----------|
| `/dansk-holder-spansk-selskab` | Danish holding company — no Spanish search intent |
| `/selvstaendig-webshop-spanien` | Danish freelancer niche |
| `/modelo-720-guide` | Actually, DO create this — many foreigners search in Spanish for Modelo 720 |

### Target Spanish keywords

| Page | Primary Keywords | Competition |
|------|-----------------|-------------|
| `/es` homepage | "abogado danés España", "abogado que habla danés" | Zero — own this niche |
| `/es/comprar-propiedad-espana` | "abogado compraventa inmobiliaria extranjeros" | Medium |
| `/es/golden-visa-espana` | "golden visa España requisitos 2026" | Medium-Hard |
| `/es/numero-nie-guia` | "número NIE España cómo conseguir" | Medium |
| `/es/herencias-internacionales` | "herencia internacional España", "sucesiones transfronterizas" | Low-Medium |
| `/es/divorcio-internacional` | "divorcio internacional España", "divorcio mixto" | Medium |
| `/es/ley-beckham` | "ley beckham España requisitos" | Medium |
| `/es/impuestos-espana` | "impuestos España extranjeros", "doble imposición" | Medium-Hard |

### Technical implementation

Same pattern as English — `app/es/layout.js` with `lang="es"`, server components, `es.json` imports.

---

## Phase 5: Hreflang & Sitemap Wiring ✅ COMPLETED

Created centralized hreflang system with auto-lookup.

- [x] Created `lib/hreflang.js` with complete mapping of all 22 page groups across da/en/es
- [x] Updated `lib/metadata.js` to auto-lookup hreflang from centralized map (no per-page config needed)
- [x] Added `x-default` hreflang pointing to Danish (or English for en-only pages)
- [x] Made canonical URLs absolute (prefixed with baseUrl)
- [x] Removed redundant inline `languages` options from all 43 layout.js files
- [x] Sitemap already included all `/en/` and `/es/` pages from Phases 3 & 4
- [x] `npm run build` succeeds — all pages statically prerendered with correct hreflang

### Create `lib/hreflang.js`

```js
// Maps every page path to its equivalents in other languages.
// Only include languages where the page actually exists.
export const hreflangMap = {
  // Homepage
  '/': { da: '/', en: '/en', es: '/es' },

  // About
  '/about': { da: '/about', en: '/en/about', es: '/es/sobre-mi' },

  // Contact
  '/contact': { da: '/contact', en: '/en/contact', es: '/es/contacto' },

  // Property
  '/real-estate-buy-sell-spain': {
    da: '/real-estate-buy-sell-spain',
    en: '/en/buy-property-spain',
    es: '/es/comprar-propiedad-espana',
  },

  // ... all other cross-language page pairs

  // Danish-only pages (no hreflang needed)
  // '/dansk-holder-spansk-selskab': { da: '/dansk-holder-spansk-selskab' },
  // '/selvstaendig-webshop-spanien': { da: '/selvstaendig-webshop-spanien' },

  // Hub pages
  '/tjenester/ejendom': {
    da: '/tjenester/ejendom',
    en: '/services/real-estate',
    es: '/es/inmobiliaria',
  },
  // ... etc
}
```

### Update `lib/metadata.js`

```js
export function getMetadata(translationKey, path, lang = 'da', hreflang = null) {
  return {
    // ... existing fields ...
    alternates: {
      canonical: path,
      ...(hreflang && { languages: hreflang }),
    },
  }
}
```

### Update `app/sitemap.js`

Add all `/en/` and `/es/` pages:
- Language homepages: priority 0.9
- Service pages: priority 0.8
- Blog: priority 0.7

---

## Phase 6: Route Blog Posts by Language ✅ COMPLETED

Created language-specific blog routes so posts live under the correct language section.

- [x] Made `BlogPageClient` and `BlogPostClient` language-aware via `lang` prop
- [x] Created `/en/blog/` listing page (filters English posts)
- [x] Created `/en/blog/[slug]/` for English blog post pages
- [x] Created `/es/blog/` listing page (filters Spanish posts)
- [x] Created `/es/blog/[slug]/` for Spanish blog post pages
- [x] Updated `/blog/` to filter Danish-only posts
- [x] `generateStaticParams` only generates routes for actual posts (no Danish fallbacks)
- [x] Added `/en/blog` and `/es/blog` to sitemap
- [x] Added blog hreflang group to `lib/hreflang.js`
- [x] Blog post URLs in sitemap now route by language (e.g., `/en/blog/slug-en`, `/es/blog/slug-es`)
- [x] Dates, UI strings, and links localized per language
- [x] `npm run build` succeeds — all pages statically prerendered

### Original Phase 6 Plan (for reference)

### Current problem

English posts like `buying-property-spain-guide-en.md` live at
`/blog/buying-property-spain-guide-en`. This is under the Danish `lang="da"` site.
Google sees an English post in a Danish context — bad signal.

### Fix

Create language-specific blog routes:

```
app/en/blog/
├── page.js          → Lists only posts with lang="en"
└── [slug]/
    ├── layout.js    → English metadata
    └── page.js      → Renders English posts
```

```
app/es/blog/
├── page.js          → Lists only posts with lang="es"
└── [slug]/
    ├── layout.js    → Spanish metadata
    └── page.js      → Renders Spanish posts
```

Update `lib/blog.js` `getAllPosts()` to filter by language when called
from language-specific routes.

The existing `/blog/` route continues to show Danish posts only.

---

## Phase 7: Update Navigation ✅ COMPLETED

Added language switching to Header and Footer.

- [x] Added DA/EN/ES language links to desktop Header navigation (right side, with border separator)
- [x] Added Dansk/English/Español links to mobile Header navigation
- [x] Added "English version" and "Versión en español" links to Footer (above bottom bar)
- [x] `npm run build` succeeds — all pages statically prerendered

### Original Phase 7 Plan (for reference)

### Replace LanguageSelector with URL links in Header

```jsx
<Link href="/">🇩🇰</Link>
<Link href="/en">🇬🇧</Link>
<Link href="/es">🇪🇸</Link>
```

Ideally these link to the equivalent page in that language (using hreflang map),
falling back to the language homepage.

### Footer

Keep current 4-column Danish footer. Add small language links at bottom:
- "English version" → `/en`
- "Versión en español" → `/es`

Don't add full English/Spanish link trees — that dilutes Danish internal linking.

---

## Phase 8: Add FAQ Sections to All Service Pages

**Status:** Not started
**Priority:** High — FAQ rich results drive significant CTR improvement

### Current state

5 Danish pages already have `FAQSection` components:
- `/divorce-spain`, `/pension-spain`, `/real-estate-buy-sell-spain`, `/residency-spain`, `/skat`

7 English pages have FAQ sections:
- `/en/buy-property-spain`, `/en/divorce-spain`, `/en/pension-spain`, `/en/residency-spain`, `/en/start-business-spain`, `/en/tax-spain`, `/en/wills-spain`

7 Spanish pages have FAQ sections:
- `/es/comprar-propiedad-espana`, `/es/crear-empresa-espana`, `/es/divorcio-internacional`, `/es/impuestos-espana`, `/es/pension-espana`, `/es/residencia-extranjeros`, `/es/testamentos-espana`

### Danish pages missing FAQ sections (16 pages)

- [ ] `/real-estate-investment-spain` — "Er det en god investering at kobe bolig i Spanien?"
- [ ] `/realkredit` — "Kan danskere fa realkredit i Spanien?"
- [ ] `/homeowner-associations` — "Hvad er en comunidad de propietarios?"
- [ ] `/lejekontrakter-i-spanien` — "Hvad er reglerne for lejekontrakter i Spanien?"
- [ ] `/testamenter-i-spanien` — "Skal jeg have et spansk testamente?"
- [ ] `/lovvalg` — "Hvilken lov gaelder for min arv i Spanien?"
- [ ] `/opholdstilladelse` — "Hvilket lands ret gaelder for dodsboskifte?"
- [ ] `/golden-visa-spanien` — "Hvad er Golden Visa kravene i 2026?"
- [ ] `/nie-nummer-guide` — "Hvad er et NIE-nummer, og hvem skal bruge det?"
- [ ] `/beckham-lov-spanien` — "Hvem kan bruge Beckham-loven?"
- [ ] `/modelo-720-guide` — "Hvad er Modelo 720?"
- [ ] `/work-in-spain` — "Kan jeg arbejde i Spanien som dansker?"
- [ ] `/arbejdsret-i-spanien` — "Hvad er opsigelsesreglerne i Spanien?"
- [ ] `/starte-virksomhed-spanien` — "Hvordan starter jeg en virksomhed i Spanien?"
- [ ] `/dansk-holder-spansk-selskab` — "Hvad er fordelene ved et dansk holdingselskab?"
- [ ] `/selvstaendig-webshop-spanien` — "Skal jeg registreres som autonomo?"

### English pages missing FAQ sections (8 pages)

- [ ] `/en/real-estate-investment` — "Is buying property in Spain a good investment?"
- [ ] `/en/mortgages-spain` — "Can foreigners get a mortgage in Spain?"
- [ ] `/en/homeowner-associations` — "What is a comunidad de propietarios?"
- [ ] `/en/rental-contracts-spain` — "What are tenant rights in Spain?"
- [ ] `/en/choice-of-law` — "Which country's law applies to my inheritance?"
- [ ] `/en/inheritance-jurisdiction` — "Which court handles international probate?"
- [ ] `/en/employment-law-spain` — "What are dismissal rules in Spain?"
- [ ] `/en/work-in-spain` — "Can EU citizens work freely in Spain?"

### Spanish pages missing FAQ sections (7 pages)

- [ ] `/es/inversion-inmobiliaria` — "Es buena inversion comprar propiedad en Espana?"
- [ ] `/es/hipotecas-espana` — "Pueden los extranjeros obtener hipoteca en Espana?"
- [ ] `/es/comunidades-propietarios` — "Cuales son las obligaciones del propietario?"
- [ ] `/es/alquiler-espana` — "Cuales son los derechos del inquilino?"
- [ ] `/es/herencias-internacionales` — "Que ley se aplica a herencias internacionales?"
- [ ] `/es/trabajar-espana` — "Necesito permiso de trabajo como ciudadano de la UE?"
- [ ] `/es/derecho-laboral` — "Cuales son las causas de despido en Espana?"

### Implementation per page

Each FAQ section should:

1. Include 5-7 questions per page, using actual search queries as question text
2. Use the existing `FAQSection` component with `FAQPage` structured data
3. Add corresponding FAQ translations to `da.json`, `en.json`, and `es.json`
4. Questions should target long-tail keywords for that topic
5. Answers should be 2-4 sentences — concise enough for a featured snippet

### FAQ content guidelines

- **Source questions from:** Google "People Also Ask", Search Console queries, client intake questions
- **Answer format:** Direct answer in first sentence, then 1-2 supporting details
- **Cross-link:** Where relevant, link FAQ answers to related service pages or blog posts
- **Keep updated:** Review FAQ content annually for legal/regulatory changes

---

## Phase 9: Expand Thin Pages & Internal Linking

**Status:** Not started
**Priority:** High — topical depth is the biggest ranking factor after technical SEO

### 9A: Expand thin service pages to 2000+ words

Many service pages are currently 800-1200 words of translated JSON content. To rank for
competitive terms, they need deeper content covering the full user journey.

**Content expansion template for each service page:**

```
1. Hero + intro (existing)
2. What/Why section (existing)
3. Step-by-step process — what the client experience looks like
4. Costs & fees breakdown (real numbers, updated annually)
5. Common mistakes / pitfalls
6. Required documents checklist
7. Timeline expectations
8. FAQ section (Phase 8)
9. Related articles from blog
10. CTA
```

**Priority pages to expand first (highest search volume):**

| Priority | Page | Current ~Words | Target | Key Addition |
|----------|------|---------------|--------|-------------|
| 1 | `/real-estate-buy-sell-spain` | ~1200 | 2500+ | Step-by-step buying process, costs table |
| 2 | `/en/buy-property-spain` | ~1200 | 2500+ | Same as above, English |
| 3 | `/golden-visa-spanien` | ~1000 | 2000+ | Updated 2026 requirements, investment options table |
| 4 | `/nie-nummer-guide` | ~1000 | 2000+ | Application process, office locations, wait times |
| 5 | `/residency-spain` + `/en/residency-spain` | ~1000 | 2000+ | EU vs non-EU paths, Padron, healthcare |
| 6 | `/skat` + `/en/tax-spain` | ~1100 | 2500+ | Tax brackets, IRPF vs IRNR, double taxation |
| 7 | `/testamenter-i-spanien` + `/en/wills-spain` | ~900 | 2000+ | Forced heirship, EU Succession Reg |
| 8 | `/starte-virksomhed-spanien` + `/en/start-business-spain` | ~1000 | 2000+ | SL vs autonomo comparison table |

- [ ] Expand top 8 Danish pages (add process steps, costs, documents)
- [ ] Mirror expansions to corresponding English pages
- [ ] Mirror expansions to corresponding Spanish pages
- [ ] Add cost/fee tables where applicable (property purchase costs, company formation costs)
- [ ] Add "required documents" checklists as bullet lists

### 9B: Internal linking strategy

Current internal linking is mostly navigation-based (header, footer, related services).
Service pages and blog posts should cross-reference each other.

**Rules:**

1. Every service page should link to 2-3 related blog posts in a "Related Articles" section
2. Every blog post should link to its parent service page and 1-2 sibling service pages
3. Hub pages (`/tjenester/*`, `/services/*`, `/es/inmobiliaria` etc.) should link to ALL child pages
4. Use descriptive anchor text (not "click here" or "read more")

**Implementation:**

- [ ] Add `RelatedArticles` component that takes a service key and renders matching blog posts
- [ ] Map each service page to its 2-3 most relevant blog posts in `lib/relatedServices.js`
- [ ] Add related article sections to all 30+ Danish service pages
- [ ] Add related article sections to all English and Spanish service pages
- [ ] Audit blog posts — add inline links to relevant service pages where missing
- [ ] Add breadcrumb-style "parent hub" links on service pages (e.g., "Ejendom > Kob og salg")

### 9C: Blog post interlinking

Current blog posts (44 total: 18 Danish, 13 English, 13 Spanish) should reference each other.

- [ ] Add "Related Posts" section to `BlogPostClient` (3 posts, same language)
- [ ] Within blog post content, add inline links to related service pages
- [ ] Create a blog post series linkage for multi-part topics (e.g., property purchase + tax + mortgage)

---

## Phase 10: Lead Magnet Landing Pages

**Status:** Not started
**Priority:** Medium — converts traffic into leads with email capture

### Current state

5 HTML guides exist in `/public/downloads/`:
- `tjekliste-boligkob-spanien.html` — Real estate checklist
- `skattekalender-dansker-spanien-2025.html` — Tax calendar
- `arv-spanien-komplet-guide.html` — Inheritance guide
- `flytte-pensionist-spanien-guide.html` — Pensioner relocation guide
- `starte-virksomhed-spanien-guide.html` — Start business guide

These are standalone HTML files with no tracking, no email capture, and no internal
linking back to the main site. They're also not indexed by Google.

### Plan

Convert each guide to a proper Next.js page with:
1. Landing page with guide preview/summary (indexable, good SEO)
2. Email capture form (Web3Forms) to "unlock" the full PDF download
3. Thank-you page with PDF download link + related service page CTA
4. `FAQPage` structured data
5. Hreflang alternates (Danish first, English versions later)

### New routes

| Route | Source HTML | Lead Magnet |
|-------|-----------|-------------|
| `/guides/tjekliste-koeb-bolig` | `tjekliste-boligkob-spanien.html` | PDF checklist |
| `/guides/skattekalender` | `skattekalender-dansker-spanien-2025.html` | PDF calendar |
| `/guides/arv-komplet-guide` | `arv-spanien-komplet-guide.html` | PDF guide |
| `/guides/flytte-pensionist` | `flytte-pensionist-spanien-guide.html` | PDF guide |
| `/guides/starte-virksomhed` | `starte-virksomhed-spanien-guide.html` | PDF guide |

### Implementation steps

- [ ] Create `app/guides/layout.js` with shared metadata and "Gratis guider" branding
- [ ] Create 5 guide landing pages as server components
- [ ] Build `GuideDownloadForm` client component (name + email → Web3Forms → show download link)
- [ ] Generate PDF versions of each guide (or keep as HTML downloads)
- [ ] Add guide CTAs to relevant service pages (e.g., property checklist CTA on `/real-estate-buy-sell-spain`)
- [ ] Add guide pages to sitemap
- [ ] Add guide pages to footer under new "Gratis guider" column or section
- [ ] Track downloads as GA4 custom events

### Future English versions

| Route | Content |
|-------|---------|
| `/en/guides/property-checklist` | English property buying checklist |
| `/en/guides/tax-calendar` | Tax deadlines for foreigners in Spain |
| `/en/guides/inheritance-guide` | Cross-border inheritance guide |
| `/en/guides/retire-to-spain` | Pensioner relocation guide |
| `/en/guides/start-business` | Start a business in Spain guide |

---

## Phase 11: Local SEO & Google Business Profile

**Status:** Not started
**Priority:** High — GBP is the single highest-ROI action for a local service business

### 11A: Google Business Profile optimization

- [ ] Claim and verify GBP listing for "Buxton Gefke Abogados" (or confirm existing)
- [ ] Set primary category: "Law Firm" / secondary: "Immigration Attorney", "Real Estate Attorney"
- [ ] Add all services as GBP services with descriptions
- [ ] Upload 10+ photos: office exterior, interior, Christian at work, team, local area
- [ ] Write GBP description (750 chars) with keywords: "Danish lawyer in Spain", "abogado danes"
- [ ] Add business hours, phone, WhatsApp, website URL
- [ ] Enable messaging and Q&A
- [ ] Add attributes: "Identifies as Nordic-owned", languages spoken
- [ ] Set service areas (all of Spain or specific provinces served)

### 11B: Google Posts (ongoing)

Publish 1 Google Post per week. Content ideas:
- New blog post summaries with link
- Legal updates affecting foreigners in Spain
- Client success stories (anonymized)
- Seasonal reminders (tax deadlines, Modelo 720 deadline, property season)
- Event announcements (webinars, consultations)

### 11C: Review generation

Target: 20+ reviews with keywords within 3 months.

- [ ] Create a review request email template (send after case completion)
- [ ] Add review link to email signature
- [ ] Add "Review us on Google" CTA to thank-you / confirmation pages
- [ ] Respond to every review within 48 hours (builds trust + engagement signal)
- [ ] Use the existing `/reviews` page ReviewFunnel to redirect happy clients to Google

**Review request timing:** Send 1-2 days after a positive case milestone, not at case close
(when clients may be fatigued).

### 11D: Directory listings

**Danish directories:**
- [ ] Krak.dk — business listing
- [ ] De Gule Sider — business listing
- [ ] DanskiSpanien.dk — Danish expat community (if listing available)
- [ ] SpanieniBilleder.dk or similar Danish expat portals

**English expat directories:**
- [ ] Expatica Spain — professional listing
- [ ] InterNations — lawyer profile
- [ ] AngloINFO Costa del Sol / Costa Blanca
- [ ] ThinkSpain directory
- [ ] Spain Guru professional directory

**Spanish legal directories:**
- [ ] Colegio de Abogados — public registry (verify Christian is listed)
- [ ] Abogados365.com
- [ ] LegalToday.com directory
- [ ] MisAbogados.com

**General directories:**
- [ ] LinkedIn company page (fully optimized)
- [ ] Yelp Spain
- [ ] Google Maps (covered by GBP)
- [ ] Apple Maps Connect

### 11E: Backlink outreach

**Partner backlinks (warm leads):**
- [ ] Obsidian Digital — get linked from partner/client page
- [ ] Premier Relocation — cross-referral link
- [ ] Lumipop — portfolio/client link
- [ ] Any Danish accountants or tax advisors serving Spain clients

**Guest post targets:**
- [ ] Danish expat blogs (e.g., Danes in Spain Facebook groups often have blog contributors)
- [ ] Spain Revealed (English, high DA)
- [ ] Eye on Spain (English expat community)
- [ ] The Local Spain (English news for expats)
- [ ] SpanienPosten (Danish newspaper in Spain)

**PR / media opportunities:**
- [ ] Pitch to Danish media: "X ting du skal vide for du kober bolig i Spanien" — Berlingske, BT, Politiken travel/lifestyle
- [ ] Pitch to Jyllands-Posten or Borsen: "Beckham-loven: Skattefordele for danskere i Spanien"
- [ ] Comment source for Ritzau on Spanish legal topics affecting Danes
- [ ] HARO (Help A Reporter Out) — monitor for Spain/expat/immigration queries

---

## Phase 12: Conversion Optimization

**Status:** Not started
**Priority:** Medium-High — maximize value from existing traffic

### 12A: WhatsApp integration

- [ ] Add WhatsApp floating button (bottom-right) on all pages
- [ ] Use WhatsApp Business API link: `https://wa.me/34XXXXXXXXX?text=...`
- [ ] Pre-fill message based on page context (e.g., "I'm interested in buying property in Spain")
- [ ] Add WhatsApp as alternative CTA in blog post template alongside contact form
- [ ] Track WhatsApp clicks as GA4 events

### 12B: Free consultation landing pages

Create dedicated landing pages optimized for "free consultation" searches:

| Route | Language | Target Keyword |
|-------|----------|---------------|
| `/gratis-konsultation` | Danish | "gratis konsultation advokat spanien" |
| `/en/free-consultation` | English | "free consultation lawyer spain" |
| `/es/consulta-gratuita` | Spanish | "consulta gratuita abogado espana" |

Each page includes:
- What the free consultation covers (scope)
- What to prepare / bring
- Calendar booking widget or contact form
- Trust signals (reviews, credentials, partner logos)
- FAQ about the consultation process

- [ ] Create `/gratis-konsultation/page.js`
- [ ] Create `/en/free-consultation/page.js`
- [ ] Create `/es/consulta-gratuita/page.js`
- [ ] Add to navigation and footer
- [ ] Add hreflang between all three

### 12C: GA4 conversion tracking

- [ ] Set up GA4 property (if not already done)
- [ ] Track contact form submissions as `generate_lead` event
- [ ] Track WhatsApp clicks as `contact` event
- [ ] Track guide downloads as `file_download` event
- [ ] Track phone number clicks as `click` event with `link_url` parameter
- [ ] Create conversion goals in GA4 for: form submit, WhatsApp click, guide download
- [ ] Set up Google Search Console and link to GA4
- [ ] Create a basic GA4 dashboard: sessions by language, top landing pages, conversion rate

### 12D: CTA optimization

- [ ] A/B test CTA button text: "Kontakt os" vs "Book gratis konsultation" vs "Fa et tilbud"
- [ ] Add urgency/specificity to CTAs: "Svar inden 24 timer" / "Response within 24 hours"
- [ ] Add trust badges near CTAs (Colegio de Abogados member, years of experience)
- [ ] Test sticky CTA bar on mobile (appears after scrolling past hero)
- [ ] Add exit-intent popup with guide download offer (desktop only)

---

## Phase 13: Technical SEO Hardening

**Status:** Not started
**Priority:** Medium — polish and performance

### 13A: Structured data improvements

- [ ] Add `sameAs` to Organization schema: GBP URL, LinkedIn, any social profiles
- [ ] Add `LegalService` schema type (more specific than generic `Organization`)
- [ ] Add `Attorney` schema for Christian's personal profile
- [ ] Verify all `FAQPage` schemas pass Google Rich Results Test
- [ ] Add `BreadcrumbList` schema to all pages (auto-generate from URL path)
- [ ] Add `Article` schema to all blog posts (verify `datePublished`, `dateModified`, `author`)
- [ ] Add `HowTo` schema to guide/process pages (NIE guide, property purchase)

### 13B: Performance & Core Web Vitals

- [ ] Run Lighthouse on top 10 pages — fix any scores below 90
- [ ] Optimize images: convert to WebP, add explicit `width`/`height`, use `next/image`
- [ ] Self-host blog images (replace external Unsplash URLs with local copies)
- [ ] Verify no layout shift (CLS) from dynamically loaded components
- [ ] Preload critical fonts if using custom fonts
- [ ] Check mobile usability in Search Console — fix any issues

### 13C: Page-specific OG images

- [ ] Create branded OG image template (1200x630) with Buxton Gefke logo + page title
- [ ] Use `next/og` ImageResponse API to generate dynamic OG images per page
- [ ] Or create 10 static OG images for highest-traffic pages and set via metadata
- [ ] Test OG images with Facebook Sharing Debugger and Twitter Card Validator

### 13D: Indexing & crawl optimization

- [ ] Verify Google Search Console ownership for buxtongefke.es
- [ ] Submit sitemap.xml in Search Console
- [ ] Check Coverage report — fix any "Excluded" or "Error" pages
- [ ] Request indexing for all new `/en/` and `/es/` pages
- [ ] Monitor "Discovered — currently not indexed" pages
- [ ] Add `robots.txt` if missing (allow all, point to sitemap)
- [ ] Verify no accidental `noindex` tags on important pages
- [ ] Check for orphan pages (pages not linked from anywhere)

### 13E: Deferred translations (from Phases 3 & 4)

Complete the 4 deferred English pages and 4 deferred Spanish pages:

**English (need `en.json` translations):**
- [ ] `/en/golden-visa-spain`
- [ ] `/en/nie-number-guide`
- [ ] `/en/beckham-law-spain`
- [ ] `/en/modelo-720-guide`

**Spanish (need `es.json` translations):**
- [ ] `/es/golden-visa-espana`
- [ ] `/es/numero-nie-guia`
- [ ] `/es/ley-beckham`
- [ ] `/es/modelo-720-guia`

These are high-value pages (golden visa, NIE, Beckham law all have significant search
volume in English and Spanish). Should be prioritized.

---

## Phase 14: Content Calendar & Ongoing SEO (Month 3+)

**Status:** Not started
**Priority:** Critical for sustained growth — SEO compounds only with ongoing investment

### 14A: Blog publishing cadence

| Language | Posts/Month | Approach |
|----------|-------------|---------|
| Danish | 2-3 | New original content targeting Danish long-tail keywords |
| English | 1-2 | Adapt best-performing Danish posts for English expat audience |
| Spanish | 0-1 | Only if Christian can review for native quality |

**Current blog inventory:** 44 posts (18 DA, 13 EN, 13 ES)

### 14B: Blog topic ideas (next 20 posts)

**Danish (high-priority topics not yet covered):**

| # | Topic | Target Keyword | Related Service Page |
|---|-------|---------------|---------------------|
| 1 | Ny boligskat i Spanien 2026 — hvad det betyder for danskere | "boligskat spanien 2026" | `/skat` |
| 2 | Saelge bolig i Spanien som dansker — trin for trin | "saelge bolig spanien" | `/real-estate-buy-sell-spain` |
| 3 | Autonomo i Spanien — komplet guide til selvstaendige | "autonomo spanien" | `/starte-virksomhed-spanien` |
| 4 | Digital nomad visum Spanien — krav og ansogning | "digital nomad visum spanien" | `/work-in-spain` |
| 5 | Sundhedsforsikring i Spanien for danskere | "sundhedsforsikring spanien dansker" | `/residency-spain` |
| 6 | Padron — hvad er det og hvorfor skal du tilmelde dig? | "padron spanien" | `/residency-spain` |
| 7 | Spanske arveafgifter — satser og fradrag pr. region | "arveafgift spanien" | `/testamenter-i-spanien` |
| 8 | Kobe nybyggeri i Spanien — saerlige risici og beskyttelse | "kobe nybyggeri spanien" | `/real-estate-buy-sell-spain` |
| 9 | Lejekontrakt opsigelse Spanien — hvad siger loven? | "opsige lejekontrakt spanien" | `/lejekontrakter-i-spanien` |
| 10 | Modelo 720 strafaendringer — hvad der aendrede sig efter EU-dommen | "modelo 720 straf" | `/modelo-720-guide` |

**English (adapt from Danish or new):**

| # | Topic | Target Keyword |
|---|-------|---------------|
| 1 | Selling Property in Spain as a Foreigner — Tax & Process | "sell property spain foreigner tax" |
| 2 | Digital Nomad Visa Spain 2026 — Requirements & Application | "digital nomad visa spain" |
| 3 | Spanish Inheritance Tax Rates by Region — Complete Guide | "inheritance tax spain rates" |
| 4 | How to Register on the Padron in Spain | "padron spain registration" |
| 5 | Buying Off-Plan Property in Spain — Risks & Protections | "off plan property spain risks" |
| 6 | Spanish Health Insurance for EU Citizens | "health insurance spain EU citizen" |
| 7 | Autonomo in Spain — Complete Freelancer Guide | "autonomo spain guide freelancer" |
| 8 | Capital Gains Tax Spain — Property Sale Guide | "capital gains tax spain property" |
| 9 | Power of Attorney in Spain — When You Need One | "power of attorney spain" |
| 10 | Residencia vs NIE — What's the Difference? | "residencia vs NIE spain" |

### 14C: Content refresh schedule

Update existing content quarterly:
- [ ] Update all tax/fee figures to current year
- [ ] Update Golden Visa requirements if legislation changes
- [ ] Update NIE process if wait times or procedures change
- [ ] Review and update Beckham Law content for any amendments
- [ ] Update Modelo 720 deadline reminders annually
- [ ] Add "Last updated: [date]" to service pages and guides

### 14D: Content performance tracking

Monthly review:
- [ ] Top 10 pages by organic impressions (Search Console)
- [ ] Top 10 pages by clicks
- [ ] Pages with high impressions but low CTR (optimize titles/descriptions)
- [ ] New keywords ranking in positions 5-20 (optimize for page 1)
- [ ] Blog posts driving the most traffic → create related service pages or guides
- [ ] Pages with declining traffic → refresh content or improve internal linking

---

## Phase 15: Advanced Growth (Month 4-6)

**Status:** Future
**Priority:** Medium — execute after Phases 8-14 are established

### 15A: Video content

- [ ] Create 3-5 minute explainer videos for top service pages (embed on page)
- [ ] YouTube channel with Danish/English legal tips for expats in Spain
- [ ] Video FAQ series: Christian answers common client questions on camera
- [ ] Embed videos on service pages (improves time-on-page, a ranking signal)

### 15B: Email marketing

- [ ] Build email list from guide downloads (Phase 10)
- [ ] Monthly newsletter: legal updates, new blog posts, seasonal reminders
- [ ] Segmented by language (DA/EN/ES)
- [ ] Automated welcome sequence: download → related service info → consultation CTA

### 15C: Social proof amplification

- [ ] Publish case studies (anonymized) on dedicated `/cases` or `/en/case-studies` page
- [ ] Add client count / cases handled numbers to homepage
- [ ] Feature Google Reviews on homepage (live widget or curated selection)
- [ ] "As seen in" section if any media coverage is secured (Phase 11E)

### 15D: Programmatic SEO opportunities

If traffic grows, consider auto-generated pages for:
- [ ] `/en/lawyer-spain/[city]` — "Danish lawyer in [Marbella/Malaga/Alicante/Barcelona]"
- [ ] `/es/abogado-danes/[city]` — "Abogado danes en [city]"
- [ ] Regional pages targeting specific Costa del Sol / Costa Blanca / Balearic Islands

Only if there's actual search volume — verify with Search Console data first.

### 15E: Schema markup for attorney profiles

- [ ] Add `Person` schema for Christian with `jobTitle: "Abogado"`, `knowsLanguage`, etc.
- [ ] Add `Review` aggregate schema from Google Reviews
- [ ] Apply for Google Knowledge Panel (requires multiple authoritative sources)

---

## Summary: Total Page Count

| Language | Pages | Notes |
|----------|-------|-------|
| Danish `/` | ~30 | Current pages, all converted to server components |
| English `/en/` + `/services/` | ~24 | 20 new `/en/` pages + 4 repurposed `/services/` hubs |
| Spanish `/es/` | ~22 | All new |
| Guide landing pages `/guides/` | ~5-10 | Lead magnets with email capture |
| Consultation landing pages | 3 | DA/EN/ES free consultation pages |
| Blog (all languages) | ~65+ | 44 existing + 20+ new posts |
| **Total** | **~150+** | Up from current ~35 indexable pages |

---

## Implementation Order

| Order | Phase | Status | Effort | Impact |
|-------|-------|--------|--------|--------|
| 1 | Phase 1: Remove i18next, server components | DONE | -- | Critical |
| 2 | Phase 2: Resolve /tjenester/ vs /services/ | DONE | -- | High |
| 3 | Phase 3: Create /en/ pages | DONE | -- | High |
| 4 | Phase 4: Create /es/ pages | DONE | -- | High |
| 5 | Phase 5: Hreflang & sitemap | DONE | -- | High |
| 6 | Phase 6: Blog routing by language | DONE | -- | High |
| 7 | Phase 7: Navigation language links | DONE | -- | Medium |
| 8 | Phase 8: FAQ sections on all service pages | TODO | 2-3 days | High |
| 9 | Phase 9: Expand thin pages + internal linking | TODO | 3-5 days | High |
| 10 | Phase 10: Lead magnet landing pages | TODO | 2-3 days | Medium |
| 11 | Phase 11: GBP + directories + backlinks | TODO | Ongoing | High |
| 12 | Phase 12: Conversion optimization | TODO | 2-3 days | Medium-High |
| 13 | Phase 13: Technical SEO hardening | TODO | 2-3 days | Medium |
| 14 | Phase 14: Content calendar + blog publishing | TODO | Ongoing | Critical |
| 15 | Phase 15: Advanced growth (video, email, programmatic) | TODO | Ongoing | Medium |

**Recommended execution order for maximum impact:**
1. Phase 13E first (deferred translations) — unblocks 8 high-value pages
2. Phase 8 (FAQ sections) — quick wins for rich results
3. Phase 11A-C (GBP) — highest ROI for local business
4. Phase 9A (expand thin pages) — biggest ranking factor
5. Phase 12A-C (WhatsApp + GA4 + consultation pages) — start tracking conversions
6. Everything else in parallel as capacity allows

---

## Metrics to Track

| Metric | Tool | Target |
|--------|------|--------|
| Indexed pages | Google Search Console | All ~150 pages indexed |
| Impressions by language/country | Google Search Console | Growing weekly |
| Average position for target keywords | Google Search Console | Top 20 for niche terms |
| Organic sessions | GA4 | 620+/month by month 4-6 |
| Contact form submissions | GA4 Events | Track conversion rate |
| WhatsApp clicks | GA4 Events | Track as secondary conversion |
| Guide downloads | GA4 Events | Track lead generation |
| GBP views + actions | GBP Dashboard | Growing monthly |
| Review count | Google Reviews | 20+ within 3 months |
| Backlinks | Search Console / Ahrefs | 10+ referring domains |

---

## Expected Timeline

| Month | Expected Organic Sessions | Driver |
|-------|--------------------------|--------|
| Current | 62 | -- |
| Month 1 | 120-180 | Phases 1-7 complete — all 80+ pages indexable |
| Month 2 | 250-400 | FAQ rich results, expanded pages, 8 deferred pages live |
| Month 3 | 400-600 | GBP driving local traffic, guide pages, blog content |
| Month 4 | 550-750 | Backlinks + directory listings compounding |
| Month 5 | 650-900 | Content calendar producing 3-4 posts/month across languages |
| Month 6 | 750-1100+ | Full flywheel: content + backlinks + reviews + rich results |

**Key milestones:**
- **Week 2:** All FAQ sections live, GBP claimed
- **Week 4:** 8 deferred pages published, top 8 pages expanded
- **Week 6:** Guide landing pages live, WhatsApp integrated, GA4 tracking
- **Week 8:** 10+ directory listings, first guest post published
- **Month 3:** 20+ Google reviews, consultation pages live
- **Month 6:** 150+ indexed pages, 10+ referring domains, 1000+ organic sessions

**Caveat:** These numbers assume consistent effort — blog posts, reviews, backlinks.
If the site is built and left alone, traffic plateaus around month 2-3. SEO compounds
only with ongoing investment. The biggest risk is content staleness — legal content
must be updated when laws change, or it loses trust and rankings.
