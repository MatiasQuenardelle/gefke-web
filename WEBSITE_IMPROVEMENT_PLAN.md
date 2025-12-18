# Website Improvement Plan
## Christian Gefke Law Website - Modernization & SEO Optimization Roadmap

**Document Version:** 1.0
**Generated:** December 2024
**Target Domain:** https://www.buxtongefke.es
**Framework:** Next.js 15.5.7 (App Router), React 19, Tailwind CSS 4

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Technical Review](#2-technical-review)
3. [SEO Strategy](#3-seo-strategy)
4. [Step-by-Step Implementation Tasks](#4-step-by-step-implementation-tasks)
5. [Execution Order (Phases)](#5-execution-order-phases)
6. [AI Implementation Directives](#6-ai-implementation-directives)

---

## 1. Executive Summary

### Current State Assessment

**Project Type:** Legal services website for Danish clients in Spain
**Tech Stack:** Next.js 15.5.7, React 19, Tailwind CSS 4, i18next (3 languages)
**Total Pages:** 23 (Homepage, About, Contact, Reviews, 17 service pages, 2 legal pages)
**Build Status:** Functional with recent SEO optimizations

### Technical Debt Overview

| Category | Severity | Summary |
|----------|----------|---------|
| **Type Safety** | High | No TypeScript; runtime errors possible |
| **Testing** | High | Zero test coverage (no Jest, no E2E) |
| **Image Assets** | High | Unoptimized images (2.5MB max, should be <200KB) |
| **Security** | Medium | Hardcoded API keys in source code |
| **Accessibility** | Medium | Missing skip links, aria-live regions, explicit form labels |
| **Performance** | Medium | No resource hints (preconnect), heavy animations |
| **Content** | Medium | Blog section is placeholder-only |
| **Architecture** | Low | Hydration workarounds indicate SSR/CSR mismatch |

### SEO Status Summary

| Element | Status | Notes |
|---------|--------|-------|
| Meta Titles/Descriptions | Done | All 23 pages have unique metadata |
| Sitemap.xml | Done | All pages included with priorities |
| Robots.txt | Done | Proper crawler directives |
| Structured Data | Done | LegalService, Person, Article, FAQ schemas |
| Canonical URLs | Done | Self-referencing canonicals |
| Hreflang | Done | DA, EN, ES with x-default |
| Core Web Vitals | Needs Work | Images, third-party scripts impact LCP/CLS |
| Internal Linking | Partial | Related services exist, needs breadcrumbs on blog |
| Blog/Content | Not Started | Placeholder content only |

### Estimated Improvement Impact

- **Performance Score:** Potential increase from ~60-70 to 90+ (Lighthouse)
- **SEO Visibility:** 20-30% improvement potential with content and Core Web Vitals fixes
- **Maintainability:** Significant improvement with TypeScript and testing
- **Accessibility:** WCAG 2.1 AA compliance achievable

---

## 2. Technical Review

### 2.1 Code Quality Analysis

#### Positive Patterns Found
- Clean component separation (22 components in `/components/`)
- Centralized SEO utilities (`/lib/metadata.js`, `/lib/structuredData.js`)
- Proper lazy loading with `dynamic()` imports
- Translation system properly configured
- Path aliases configured (`@/*` → `./*`)

#### Issues Requiring Attention

**2.1.1 No Type Safety**
- **Files Affected:** All 84 JavaScript files
- **Risk:** Runtime errors, difficult refactoring, no IDE autocomplete
- **Evidence:** No `tsconfig.json`, no `.ts`/`.tsx` files

**2.1.2 Hardcoded Secrets**
- **File:** `components/ContactForm.js:34-41, 97`
- **Issue:** EmailJS service ID, template ID, public key, and hCaptcha sitekey are hardcoded
- **Risk:** Credential exposure if repository becomes public

**2.1.3 Hydration Mismatch Workarounds**
- **Files:** `app/layout.js:40`, `components/LanguageSelector.js:15`
- **Issue:** `suppressHydrationWarning` on `<html>` tag; "mounted" state pattern
- **Impact:** Indicates SSR/CSR inconsistency; potential SEO impact

**2.1.4 Missing Error Boundaries**
- **Impact:** Unhandled errors crash entire page instead of isolated components
- **Affected:** All pages that use dynamic imports

**2.1.5 No Automated Tests**
- **Missing:** Jest configuration, test files, E2E setup (Playwright/Cypress)
- **Risk:** Regressions go undetected; refactoring is risky

### 2.2 Performance Analysis (Core Web Vitals)

#### Largest Contentful Paint (LCP) Issues

**2.2.1 Unoptimized Images**
- `public/images/services/move.jpg` - ~2.5MB (should be <200KB)
- `public/images/CristianGefke.png` - ~891KB (should be <150KB)
- **Impact:** LCP >4s on slow connections

**2.2.2 Missing Resource Hints**
- No `preconnect` for: Google Fonts, Google Analytics, hCaptcha, EmailJS
- **File to Modify:** `app/layout.js`

**2.2.3 Font Loading**
- Geist fonts load via `next/font` (good)
- Merriweather loaded in Header.js (adds FOUT)

#### Cumulative Layout Shift (CLS) Issues

**2.2.4 Dynamic Import Placeholders**
- Placeholders have fixed heights (`min-h-[400px]`) - good
- **Potential Issue:** Actual component heights may differ

**2.2.5 Missing Image Dimensions**
- Some `<img>` tags may lack explicit width/height
- **Files to Check:** All components using images

#### First Input Delay (FID) / Interaction to Next Paint (INP)

**2.2.6 Heavy Animations**
- Floating blobs with `blur-3xl` and `animate-pulse` (5 on homepage)
- **File:** `app/page.js:51-55`
- **Impact:** GPU strain on mobile devices

**2.2.7 Third-Party Script Loading**
- Google Analytics: `afterInteractive` strategy (good)
- hCaptcha: Lazy loaded (good)
- **Improvement:** Add preconnect hints

### 2.3 Accessibility Audit

#### WCAG 2.1 Level A Failures

**2.3.1 Missing Skip-to-Content Link**
- **Impact:** Keyboard users must tab through entire header
- **Fix Location:** `app/layout.js` or `components/Header.js`

**2.3.2 Form Labels**
- **File:** `components/ContactForm.js:63-90`
- **Issue:** Inputs use `placeholder` as labels, no `<label>` elements
- **Impact:** Screen readers don't announce field purpose

**2.3.3 Missing aria-live Regions**
- **File:** `components/ContactForm.js:117-119`
- **Issue:** Status messages don't announce to screen readers

#### WCAG 2.1 Level AA Failures

**2.3.4 Color-Only Status Indicators**
- Form success/error messages use color alone
- **Fix:** Add icons or text to distinguish states

**2.3.5 Dropdown Keyboard Navigation**
- **File:** `components/Header.js:123-154`
- **Issue:** No arrow key navigation in desktop dropdown menus

**2.3.6 Missing aria-expanded on FAQ**
- **File:** `components/FAQ.js`
- **Issue:** Accordion items should have `aria-expanded` attribute

---

## 3. SEO Strategy

### 3.1 Current Implementation (Already Done)

| Element | Implementation | Location |
|---------|---------------|----------|
| Page Metadata | `getMetadata()` helper | `lib/metadata.js` |
| Structured Data | LegalService, Person, Article, FAQ | `lib/structuredData.js` |
| Sitemap | Next.js 15 format | `app/sitemap.js` |
| Robots.txt | Next.js 15 format | `app/robots.js` |
| Hreflang | All 3 languages + x-default | `lib/metadata.js:74-78` |
| Breadcrumbs | With BreadcrumbList schema | `components/Breadcrumb.js` |
| Internal Linking | Related services component | `lib/relatedServices.js` |

### 3.2 SEO Improvements Required

#### 3.2.1 Image SEO Optimization

**Current State:**
- Images referenced in sitemap with alt text
- OG images point to main attorney photo

**Improvements Needed:**
- Compress all images to WebP/AVIF
- Add explicit `width` and `height` to all `<Image>` components
- Create dedicated OG images per service category (1200x630px)

**Files to Modify:**
- `public/images/*` (compress)
- All components using `<Image>` or `<img>`

#### 3.2.2 Schema Markup Enhancements

**Current Schemas:**
- LegalService (organization)
- Person (Christian Gefke)
- Article (service pages)
- FAQPage (homepage)
- BreadcrumbList (service pages)

**Missing Schemas:**
- LocalBusiness (for Google Maps rich results)
- Review/AggregateRating (for star ratings in SERPs)
- Service (individual service offerings)

**Files to Modify:**
- `lib/structuredData.js`
- `app/reviews/layout.js` (add Review schema)

#### 3.2.3 Content Gaps

**Blog Section:**
- **Current:** Placeholder with 2 hardcoded articles
- **Files:** `app/blog/page.js`, `app/blog/[slug]/page.js`
- **Needed:** CMS integration or markdown file system

**Service Page Content:**
- Many pages have thin content
- Need 1,500+ words for pillar content strategy

#### 3.2.4 Technical SEO Fixes

**Canonical URL Consistency:**
- Current: `https://www.buxtongefke.es/path`
- Ensure all internal links use canonical version (no trailing slashes, lowercase)

**Mobile-First Indexing:**
- Verify all content visible on mobile
- Check touch targets are 48x48px minimum

### 3.3 Content Hierarchy Recommendations

```
Homepage (Pillar)
├── Real Estate Law (Cluster Hub)
│   ├── Buy/Sell Property
│   ├── Mortgages
│   ├── Rental Contracts
│   ├── Homeowner Associations
│   └── Investment Properties
├── Family Law (Cluster Hub)
│   ├── Divorce in Spain
│   ├── Wills & Testaments
│   ├── Inheritance Law
│   └── Law Choice
├── Immigration Law (Cluster Hub)
│   ├── Residency Permits
│   ├── Work Permits
│   ├── Pension & Healthcare
│   └── NIE Numbers
├── Business Law (Cluster Hub)
│   ├── Company Formation
│   ├── Self-Employment
│   ├── Holding Companies
│   └── Tax Advisory
└── Blog (Supporting Content)
    ├── How-to Guides
    ├── Legal Updates
    └── Case Studies
```

---

## 4. Step-by-Step Implementation Tasks

### Phase 1: Critical Performance & Security

---

#### Task 1.1: Compress and Optimize All Images

**Priority:** Critical
**Effort:** Low
**Impact:** High (LCP improvement)

**Files to Modify:**
- `public/images/services/move.jpg`
- `public/images/services/business.jpg`
- `public/images/services/housing.jpg`
- `public/images/services/family.jpg`
- `public/images/CristianGefke.png`
- `public/images/CristianGefke.jpeg`
- `public/images/handshake.jpg`
- `public/images/obsidian.png`
- `public/images/obsidian1.png`
- `public/images/premier.png`
- `public/images/lumipop.png`

**Implementation Steps:**
1. Install image optimization tools: `npm install sharp`
2. Create optimization script at `scripts/optimize-images.js`
3. Convert all JPG/PNG to WebP format
4. Generate multiple sizes for responsive images
5. Compress to target: <200KB for hero images, <100KB for thumbnails
6. Update image references if filenames change

**Acceptance Criteria:**
- [ ] All images in `public/images/` are under 200KB
- [ ] WebP versions exist for all images
- [ ] Original files preserved as fallbacks
- [ ] Lighthouse Performance score increases by 10+ points
- [ ] LCP < 2.5s on 4G connection

---

#### Task 1.2: Move Secrets to Environment Variables

**Priority:** Critical
**Effort:** Low
**Impact:** Medium (Security)

**Files to Modify:**
- `components/ContactForm.js`
- `.env.local` (create if not exists)
- `.env.example` (create for documentation)

**Implementation Steps:**
1. Create `.env.example` with placeholder values
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
   NEXT_PUBLIC_HCAPTCHA_SITEKEY=xxxxx
   ```
3. Update `components/ContactForm.js` lines 34-41 and 97 to use `process.env.NEXT_PUBLIC_*`
4. Verify `.env.local` is in `.gitignore`

**Acceptance Criteria:**
- [ ] No hardcoded API keys in source code
- [ ] `.env.example` exists with documentation
- [ ] `.env.local` is gitignored
- [ ] Contact form still functions correctly
- [ ] hCaptcha verification works

---

#### Task 1.3: Add Resource Hints for Third-Party Domains

**Priority:** High
**Effort:** Low
**Impact:** Medium (LCP/FID improvement)

**Files to Modify:**
- `app/layout.js`

**Implementation Steps:**
1. Add preconnect hints to `<head>` section after line 41:
   ```jsx
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
   <link rel="preconnect" href="https://www.googletagmanager.com" />
   <link rel="dns-prefetch" href="https://hcaptcha.com" />
   <link rel="dns-prefetch" href="https://api.emailjs.com" />
   ```

**Acceptance Criteria:**
- [ ] Preconnect hints present in page source
- [ ] No console warnings about missing hints
- [ ] Network waterfall shows earlier connections to third parties

---

#### Task 1.4: Add Skip-to-Content Link

**Priority:** High
**Effort:** Low
**Impact:** Medium (Accessibility - WCAG 2.1 Level A)

**Files to Modify:**
- `app/layout.js`
- `app/globals.css`

**Implementation Steps:**
1. In `app/layout.js`, add skip link as first child of `<body>` (line 77):
   ```jsx
   <a
     href="#main-content"
     className="skip-link"
   >
     Skip to main content
   </a>
   ```
2. Add `id="main-content"` to main content wrapper in each page or layout
3. Add CSS to `app/globals.css`:
   ```css
   .skip-link {
     position: absolute;
     top: -40px;
     left: 0;
     background: #003366;
     color: white;
     padding: 8px 16px;
     z-index: 100;
     transition: top 0.3s;
   }
   .skip-link:focus {
     top: 0;
   }
   ```

**Acceptance Criteria:**
- [ ] Skip link is first focusable element on page
- [ ] Skip link visible only when focused
- [ ] Clicking skip link moves focus to main content
- [ ] Works correctly with keyboard navigation

---

#### Task 1.5: Fix Form Accessibility

**Priority:** High
**Effort:** Medium
**Impact:** High (Accessibility - WCAG 2.1 Level A)

**Files to Modify:**
- `components/ContactForm.js`

**Implementation Steps:**
1. Add explicit `<label>` elements for each input (lines 63-90):
   ```jsx
   <div>
     <label htmlFor="name" className="sr-only">
       {t("contactForm.nameLabel") || "Your Full Name"}
     </label>
     <input
       id="name"
       type="text"
       name="name"
       aria-describedby="name-error"
       // ... rest of props
     />
   </div>
   ```
2. Add `aria-live="polite"` to status message container (line 117)
3. Add `aria-invalid` and `aria-describedby` for validation
4. Add translation keys for labels in all locale files

**Acceptance Criteria:**
- [ ] All form inputs have associated `<label>` elements
- [ ] Labels are visually hidden but screen-reader accessible
- [ ] Status messages announce via `aria-live`
- [ ] Form passes axe accessibility checker

---

### Phase 2: Code Quality & Developer Experience

---

#### Task 2.1: Add TypeScript Configuration

**Priority:** High
**Effort:** High
**Impact:** High (Maintainability)

**Files to Create:**
- `tsconfig.json`

**Files to Modify:**
- `package.json`
- `next.config.mjs` (rename to `next.config.ts` optionally)

**Implementation Steps:**
1. Install TypeScript and type definitions:
   ```bash
   npm install --save-dev typescript @types/react @types/node
   ```
2. Create `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "target": "ES2017",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "strict": false,
       "noEmit": true,
       "esModuleInterop": true,
       "module": "esnext",
       "moduleResolution": "bundler",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "jsx": "preserve",
       "incremental": true,
       "plugins": [{ "name": "next" }],
       "paths": { "@/*": ["./*"] }
     },
     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```
3. Run `npx next build` to generate `next-env.d.ts`
4. Begin gradual migration: rename files `.js` → `.tsx` one at a time
5. Start with leaf components (no dependencies), work toward root

**Acceptance Criteria:**
- [ ] TypeScript compiles without errors
- [ ] `npm run build` succeeds
- [ ] At least `lib/` directory converted to TypeScript
- [ ] Type definitions exist for main interfaces

---

#### Task 2.2: Add Jest Testing Framework

**Priority:** High
**Effort:** Medium
**Impact:** High (Code Quality)

**Files to Create:**
- `jest.config.js`
- `jest.setup.js`
- `__tests__/` directory
- `__tests__/lib/metadata.test.js`
- `__tests__/components/ContactForm.test.js`

**Files to Modify:**
- `package.json`

**Implementation Steps:**
1. Install Jest and testing libraries:
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
   ```
2. Create `jest.config.js`:
   ```javascript
   const nextJest = require('next/jest')
   const createJestConfig = nextJest({ dir: './' })
   const customJestConfig = {
     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
     testEnvironment: 'jest-environment-jsdom',
     moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' }
   }
   module.exports = createJestConfig(customJestConfig)
   ```
3. Add test script to `package.json`: `"test": "jest"`
4. Create initial tests for `lib/metadata.js` and `lib/structuredData.js`
5. Create component test for `ContactForm.js`

**Acceptance Criteria:**
- [ ] `npm test` runs without errors
- [ ] At least 3 unit tests pass
- [ ] Coverage report generates
- [ ] Test script added to package.json

---

#### Task 2.3: Add Error Boundaries

**Priority:** Medium
**Effort:** Low
**Impact:** Medium (User Experience)

**Files to Create:**
- `components/ErrorBoundary.js`
- `app/error.js` (Next.js 15 error boundary)
- `app/global-error.js`

**Implementation Steps:**
1. Create `app/error.js` for page-level errors:
   ```jsx
   'use client'
   export default function Error({ error, reset }) {
     return (
       <div className="min-h-screen flex items-center justify-center">
         <div className="text-center">
           <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
           <button onClick={() => reset()} className="bg-blue-600 text-white px-4 py-2 rounded">
             Try again
           </button>
         </div>
       </div>
     )
   }
   ```
2. Create `app/global-error.js` for root layout errors
3. Create reusable `ErrorBoundary` component for specific sections

**Acceptance Criteria:**
- [ ] Errors display user-friendly message instead of crashing
- [ ] Reset button allows retry without page refresh
- [ ] Error boundaries don't break SSR
- [ ] Errors are logged (console or external service)

---

#### Task 2.4: Add E2E Testing with Playwright

**Priority:** Medium
**Effort:** Medium
**Impact:** High (Regression Prevention)

**Files to Create:**
- `playwright.config.ts`
- `e2e/` directory
- `e2e/homepage.spec.ts`
- `e2e/contact-form.spec.ts`
- `e2e/navigation.spec.ts`

**Files to Modify:**
- `package.json`

**Implementation Steps:**
1. Install Playwright:
   ```bash
   npm install --save-dev @playwright/test
   npx playwright install
   ```
2. Create `playwright.config.ts` with Next.js webServer config
3. Create basic test suites:
   - Homepage loads correctly
   - Navigation works
   - Contact form submits
   - Language switching works
4. Add script: `"test:e2e": "playwright test"`

**Acceptance Criteria:**
- [ ] `npm run test:e2e` passes
- [ ] Tests cover critical user paths
- [ ] Tests run in CI pipeline (when added)
- [ ] Screenshots captured on failure

---

### Phase 3: SEO Enhancements

---

#### Task 3.1: Add LocalBusiness Schema

**Priority:** High
**Effort:** Low
**Impact:** High (Google Maps, Local Pack)

**Files to Modify:**
- `lib/structuredData.js`
- `app/layout.js`

**Implementation Steps:**
1. Add `getLocalBusinessSchema()` function to `lib/structuredData.js`:
   ```javascript
   export function getLocalBusinessSchema() {
     return {
       "@context": "https://schema.org",
       "@type": "LegalService",
       "@id": "https://www.buxtongefke.es/#organization",
       "name": "Christian Gefke - Spansk Advokat",
       "image": "https://www.buxtongefke.es/images/CristianGefke.png",
       "priceRange": "$$",
       "telephone": "+34-XXX-XXX-XXX",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "Calle Luxemburgo 7, C3",
         "addressLocality": "Tías",
         "postalCode": "35510",
         "addressRegion": "Las Palmas",
         "addressCountry": "ES"
       },
       "geo": {
         "@type": "GeoCoordinates",
         "latitude": "XX.XXXXX",
         "longitude": "-X.XXXXX"
       },
       "openingHoursSpecification": [...],
       "sameAs": [/* social profiles */]
     }
   }
   ```
2. Add to root layout head section

**Acceptance Criteria:**
- [ ] LocalBusiness schema validates at schema.org validator
- [ ] Google Rich Results Test shows eligible for local results
- [ ] Schema includes accurate business hours and location

---

#### Task 3.2: Add AggregateRating Schema to Reviews Page

**Priority:** Medium
**Effort:** Low
**Impact:** Medium (Star Ratings in SERPs)

**Files to Modify:**
- `lib/structuredData.js`
- `app/reviews/layout.js`

**Implementation Steps:**
1. Add `getAggregateRatingSchema()` function:
   ```javascript
   export function getAggregateRatingSchema(ratingValue, reviewCount) {
     return {
       "@context": "https://schema.org",
       "@type": "LegalService",
       "name": "Christian Gefke - Spansk Advokat",
       "aggregateRating": {
         "@type": "AggregateRating",
         "ratingValue": ratingValue,
         "bestRating": "5",
         "worstRating": "1",
         "reviewCount": reviewCount
       }
     }
   }
   ```
2. Import and add to reviews page layout

**Acceptance Criteria:**
- [ ] Schema validates without errors
- [ ] Rating values are accurate and verifiable
- [ ] Rich Results Test shows star rating eligible

---

#### Task 3.3: Implement Blog CMS or Markdown System

**Priority:** High
**Effort:** High
**Impact:** High (Content Marketing, Long-tail SEO)

**Files to Create:**
- `content/blog/` directory
- `lib/blog.js` (blog utilities)
- Multiple `.mdx` blog post files

**Files to Modify:**
- `app/blog/page.js`
- `app/blog/[slug]/page.js`
- `package.json`

**Implementation Steps:**
1. Install MDX dependencies:
   ```bash
   npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter
   ```
2. Create `content/blog/` directory for markdown files
3. Create blog utility functions in `lib/blog.js`:
   - `getAllPosts()` - list all posts
   - `getPostBySlug(slug)` - get single post
   - `generateStaticParams()` - for static generation
4. Update blog pages to read from filesystem
5. Add frontmatter support for metadata:
   ```yaml
   ---
   title: "Post Title"
   description: "Meta description"
   date: "2024-01-15"
   author: "Christian Gefke"
   tags: ["real-estate", "spain"]
   ---
   ```
6. Create initial blog posts (3-5 articles)

**Acceptance Criteria:**
- [ ] Blog posts render from markdown files
- [ ] Blog index shows all posts with pagination
- [ ] Individual posts have proper metadata
- [ ] Posts include Article schema
- [ ] Breadcrumbs work on blog posts

---

#### Task 3.4: Create Category Hub Pages

**Priority:** Medium
**Effort:** Medium
**Impact:** Medium (Content Hierarchy, Internal Linking)

**Files to Create:**
- `app/services/real-estate/page.js`
- `app/services/family-law/page.js`
- `app/services/immigration/page.js`
- `app/services/business/page.js`

**Implementation Steps:**
1. Create hub pages that aggregate related service pages
2. Each hub should:
   - Have unique metadata
   - Link to all child service pages
   - Include summary content
   - Have FAQ section specific to category
3. Update sitemap to include hub pages
4. Add hub pages to navigation

**Acceptance Criteria:**
- [ ] Four hub pages exist and are accessible
- [ ] Hub pages link to all relevant service pages
- [ ] Sitemap updated with hub pages
- [ ] Navigation includes hub page links

---

### Phase 4: Advanced Accessibility

---

#### Task 4.1: Add Keyboard Navigation to Dropdowns

**Priority:** Medium
**Effort:** Medium
**Impact:** Medium (WCAG 2.1 Level AA)

**Files to Modify:**
- `components/Header.js`

**Implementation Steps:**
1. Add keyboard event handlers to dropdown menus
2. Implement arrow key navigation (up/down to move, Escape to close)
3. Manage focus correctly when opening/closing
4. Add `aria-expanded`, `aria-haspopup` attributes
5. Add roving tabindex pattern for menu items

**Acceptance Criteria:**
- [ ] Dropdowns navigable with arrow keys
- [ ] Escape key closes dropdown
- [ ] Focus trapped within open dropdown
- [ ] Proper ARIA attributes present

---

#### Task 4.2: Add aria-expanded to FAQ Accordion

**Priority:** Medium
**Effort:** Low
**Impact:** Medium (Screen Reader UX)

**Files to Modify:**
- `components/FAQ.js`

**Implementation Steps:**
1. Add `aria-expanded` to accordion trigger buttons
2. Add `aria-controls` pointing to content panel ID
3. Add `id` to content panels
4. Toggle `aria-expanded` on click

**Acceptance Criteria:**
- [ ] All accordion triggers have `aria-expanded`
- [ ] Content panels have unique IDs
- [ ] State announced correctly by screen readers

---

#### Task 4.3: Add High Contrast Mode Styles

**Priority:** Low
**Effort:** Low
**Impact:** Low (WCAG 2.1 Level AAA)

**Files to Modify:**
- `app/globals.css`

**Implementation Steps:**
1. Expand existing `@media (prefers-contrast: high)` query
2. Add high contrast styles for:
   - Buttons (solid borders, no gradients)
   - Links (underlines always visible)
   - Form inputs (thick borders)
   - Text (black on white, remove shadows)

**Acceptance Criteria:**
- [ ] Site remains usable in high contrast mode
- [ ] All text meets 7:1 contrast ratio
- [ ] Focus indicators are clearly visible

---

### Phase 5: Performance Optimization

---

#### Task 5.1: Optimize Animation Performance

**Priority:** Medium
**Effort:** Low
**Impact:** Medium (INP, Battery Life)

**Files to Modify:**
- `app/page.js`
- `app/globals.css`

**Implementation Steps:**
1. Replace `animate-pulse` on floating blobs with CSS-only animations
2. Add `content-visibility: auto` to below-fold sections
3. Use `transform` instead of changing layout properties
4. Consider removing or reducing floating background elements
5. Add `@media (prefers-reduced-motion: reduce)` override (already exists, verify coverage)

**Acceptance Criteria:**
- [ ] No animations on `prefers-reduced-motion: reduce`
- [ ] Floating elements use GPU-accelerated properties only
- [ ] Lighthouse Performance score improves
- [ ] No janky scrolling on mobile devices

---

#### Task 5.2: Implement Image Component Best Practices

**Priority:** High
**Effort:** Medium
**Impact:** High (LCP, CLS)

**Files to Modify:**
- `components/HeroSection.js`
- `components/ArticlesSection.js`
- `components/PartnersSection.js`
- `components/Testimonials.js`
- Any component using `<img>` tags

**Implementation Steps:**
1. Replace all `<img>` tags with Next.js `<Image>` component
2. Add explicit `width` and `height` props
3. Add `priority` prop to above-fold images
4. Use `placeholder="blur"` with `blurDataURL` for large images
5. Set appropriate `sizes` prop for responsive images

**Acceptance Criteria:**
- [ ] All images use Next.js Image component
- [ ] No CLS from images loading
- [ ] Above-fold images have `priority` prop
- [ ] Lighthouse CLS score < 0.1

---

#### Task 5.3: Add Bundle Analysis

**Priority:** Low
**Effort:** Low
**Impact:** Low (Developer Insight)

**Files to Create:**
- `next.config.mjs` (modify)

**Files to Modify:**
- `package.json`

**Implementation Steps:**
1. Install bundle analyzer:
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```
2. Update `next.config.mjs`:
   ```javascript
   import bundleAnalyzer from '@next/bundle-analyzer'
   const withBundleAnalyzer = bundleAnalyzer({
     enabled: process.env.ANALYZE === 'true'
   })
   export default withBundleAnalyzer(nextConfig)
   ```
3. Add script: `"analyze": "ANALYZE=true next build"`

**Acceptance Criteria:**
- [ ] `npm run analyze` generates bundle report
- [ ] Report accessible in browser
- [ ] Large dependencies identified

---

## 5. Execution Order (Phases)

### Phase 1: Critical Performance & Security (Week 1)
**Goal:** Fix blocking issues that affect Core Web Vitals and security

| Order | Task ID | Task Name | Dependencies |
|-------|---------|-----------|--------------|
| 1 | 1.1 | Compress and Optimize Images | None |
| 2 | 1.2 | Move Secrets to Environment Variables | None |
| 3 | 1.3 | Add Resource Hints | None |
| 4 | 1.4 | Add Skip-to-Content Link | None |
| 5 | 1.5 | Fix Form Accessibility | None |

**Milestone:** Lighthouse Performance 80+, No security warnings

---

### Phase 2: Code Quality & Developer Experience (Week 2-3)
**Goal:** Establish foundation for maintainable codebase

| Order | Task ID | Task Name | Dependencies |
|-------|---------|-----------|--------------|
| 1 | 2.1 | Add TypeScript Configuration | None |
| 2 | 2.2 | Add Jest Testing Framework | 2.1 (optional) |
| 3 | 2.3 | Add Error Boundaries | None |
| 4 | 2.4 | Add E2E Testing with Playwright | 2.2 |

**Milestone:** Test coverage >50%, TypeScript compiles

---

### Phase 3: SEO Enhancements (Week 3-4)
**Goal:** Improve search visibility and content foundation

| Order | Task ID | Task Name | Dependencies |
|-------|---------|-----------|--------------|
| 1 | 3.1 | Add LocalBusiness Schema | None |
| 2 | 3.2 | Add AggregateRating Schema | None |
| 3 | 3.3 | Implement Blog CMS | None |
| 4 | 3.4 | Create Category Hub Pages | 3.3 (recommended) |

**Milestone:** All schemas validate, Blog functional

---

### Phase 4: Advanced Accessibility (Week 4-5)
**Goal:** Achieve WCAG 2.1 Level AA compliance

| Order | Task ID | Task Name | Dependencies |
|-------|---------|-----------|--------------|
| 1 | 4.1 | Add Keyboard Navigation to Dropdowns | None |
| 2 | 4.2 | Add aria-expanded to FAQ | None |
| 3 | 4.3 | Add High Contrast Mode Styles | None |

**Milestone:** axe-core reports 0 violations

---

### Phase 5: Performance Optimization (Week 5-6)
**Goal:** Achieve Lighthouse 90+ across all metrics

| Order | Task ID | Task Name | Dependencies |
|-------|---------|-----------|--------------|
| 1 | 5.1 | Optimize Animation Performance | None |
| 2 | 5.2 | Implement Image Component Best Practices | 1.1 |
| 3 | 5.3 | Add Bundle Analysis | None |

**Milestone:** Lighthouse 90+ Performance, 90+ Accessibility

---

## 6. AI Implementation Directives

### System Prompt for Implementation AI

```
You are implementing improvements to a Next.js 15 legal services website. Follow these directives strictly:

## Project Context
- Framework: Next.js 15.5.7 with App Router
- React: 19.0.0
- Styling: Tailwind CSS 4
- Languages: JavaScript (migrating to TypeScript)
- i18n: i18next with DA/EN/ES locales
- Domain: https://www.buxtongefke.es

## Code Standards
1. Use functional components with hooks
2. Mark client components with "use client" directive
3. Keep server components for metadata exports
4. Use path alias @/* for imports
5. Follow existing file naming conventions (kebab-case for routes)
6. Preserve existing translation structure in /public/locales/

## Before Each Task
1. Read ALL files mentioned in "Files to Modify"
2. Understand existing patterns before making changes
3. Run `npm run build` to verify current state
4. Check git status for uncommitted changes

## During Implementation
1. Make minimal, focused changes
2. Do not refactor unrelated code
3. Preserve existing functionality
4. Add comments only where logic is non-obvious
5. Use existing utility functions where available

## After Each Task
1. Verify acceptance criteria are met
2. Run `npm run lint` and fix any errors
3. Run `npm run build` to confirm no build errors
4. Test in browser (dev mode: `npm run dev`)
5. Do not commit unless all criteria pass

## File Modification Rules
- NEVER delete files without explicit instruction
- ALWAYS read a file before editing
- PRESERVE import order and formatting style
- ADD new exports at end of files
- KEEP existing comments and documentation

## Error Handling
- If a task cannot be completed, document why
- Propose alternative approaches if blocked
- Never skip acceptance criteria verification

## Testing Changes
- For UI changes: verify in browser at localhost:3000
- For SEO changes: check page source, use browser dev tools
- For schema changes: validate at schema.org/validator
- For accessibility: run axe DevTools extension

## Git Conventions (if committing)
- Commit message format: "type(scope): description"
- Types: feat, fix, perf, a11y, refactor, test, docs
- Example: "perf(images): compress all images to WebP format"
```

### Task-Specific Instructions Template

When assigning a task to another AI instance, use this format:

```
## Task: [Task ID] - [Task Name]

### Objective
[One sentence describing the goal]

### Files to Read First
- [file path 1]
- [file path 2]

### Files to Modify
- [file path 1]: [what to change]
- [file path 2]: [what to change]

### Implementation Steps
1. [Step 1]
2. [Step 2]
...

### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
...

### Verification Commands
```bash
npm run lint
npm run build
# Additional commands...
```

### Do NOT
- [Explicit prohibition 1]
- [Explicit prohibition 2]
```

---

## Appendix A: File Reference

### Core Files

| File | Purpose | Key Exports |
|------|---------|-------------|
| `app/layout.js` | Root layout | Default metadata, global providers |
| `lib/metadata.js` | SEO helper | `getMetadata()`, `createMetadataGenerator()` |
| `lib/structuredData.js` | Schema.org | `getLegalServiceSchema()`, `getPersonSchema()`, `getArticleSchema()`, `getFAQPageSchema()` |
| `app/sitemap.js` | Sitemap | Default export returns sitemap array |
| `app/robots.js` | Robots.txt | Default export returns robots config |

### Component Files

| File | Purpose | Props |
|------|---------|-------|
| `components/Header.js` | Navigation | None |
| `components/Footer.js` | Footer | None |
| `components/ContactForm.js` | Contact form | `showWhatsApp`, `phone` |
| `components/Breadcrumb.js` | Breadcrumb nav | `items` array |
| `components/FAQ.js` | FAQ accordion | Uses translations |
| `components/LanguageSelector.js` | Language switcher | None |

### Configuration Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js configuration |
| `package.json` | Dependencies and scripts |
| `jsconfig.json` | Path aliases |
| `postcss.config.mjs` | PostCSS/Tailwind |
| `.env.local` | Environment variables (secrets) |

---

## Appendix B: Translation Key Structure

```json
{
  "pageName": {
    "metaTitle": "Page Title | Christian Gefke",
    "metaDescription": "150-160 character description for search results",
    "ogTitle": "OpenGraph title for social sharing",
    "ogDescription": "OpenGraph description",
    "twitterTitle": "Twitter-specific title (optional)",
    "twitterDescription": "Twitter-specific description (optional)",
    "title": "Page H1 heading",
    "subtitle": "Page subtitle/intro",
    "keywords": "comma, separated, keywords",
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01"
  }
}
```

---

## Appendix C: Acceptance Criteria Checklist

Use this checklist after completing all phases:

### Performance
- [ ] Lighthouse Performance score >= 90
- [ ] LCP < 2.5 seconds
- [ ] FID < 100 milliseconds
- [ ] CLS < 0.1
- [ ] All images optimized and <200KB

### SEO
- [ ] All pages have unique meta titles and descriptions
- [ ] Sitemap.xml accessible and valid
- [ ] Robots.txt accessible and valid
- [ ] All structured data validates
- [ ] Canonical URLs consistent
- [ ] Hreflang tags present

### Accessibility
- [ ] Lighthouse Accessibility score >= 90
- [ ] Skip-to-content link present
- [ ] All forms have proper labels
- [ ] Keyboard navigation works
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Color contrast meets WCAG AA

### Code Quality
- [ ] TypeScript configuration present
- [ ] No hardcoded secrets in code
- [ ] Jest tests pass
- [ ] E2E tests pass
- [ ] No ESLint errors
- [ ] Build completes without warnings

### Security
- [ ] All API keys in environment variables
- [ ] .env.local gitignored
- [ ] No sensitive data in client bundles

---

**Document End**

*This roadmap is designed to be executed by AI coding assistants. Each task is atomic, has clear acceptance criteria, and specifies exact file paths. Execute tasks in order within each phase.*
