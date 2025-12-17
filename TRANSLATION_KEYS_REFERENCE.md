# Translation Keys Reference

Quick reference for mapping page URLs to translation keys used in metadata.

## Page → Translation Key Mapping

| Page URL | Translation Key | Layout File |
|----------|----------------|-------------|
| `/` (homepage) | `homepage` | `app/layout.js` |
| `/about` | `about` | `app/about/layout.js` |
| `/real-estate-buy-sell-spain` | `realEstateBuySell` | `app/real-estate-buy-sell-spain/layout.js` |
| `/divorce-spain` | `divorce` | `app/divorce-spain/layout.js` |
| `/residency-spain` | `residency` | `app/residency-spain/layout.js` |
| `/starte-virksomhed-spanien` | `startVirksomhed` | `app/starte-virksomhed-spanien/layout.js` |
| `/testamenter-i-spanien` | `testamenter` | `app/testamenter-i-spanien/layout.js` |
| `/skat` | `skat` | `app/skat/layout.js` |
| `/realkredit` | `realkredit` | `app/realkredit/layout.js` |
| `/real-estate-investment-spain` | `realEstateInvestment` | `app/real-estate-investment-spain/layout.js` |
| `/homeowner-associations` | `homeownerAssociations` | `app/homeowner-associations/layout.js` |
| `/lejekontrakter-i-spanien` | `rentalContracts` | `app/lejekontrakter-i-spanien/layout.js` |
| `/lovvalg` | `lawChoice` | `app/lovvalg/layout.js` |
| `/opholdstilladelse` | `internationalInheritance` | `app/opholdstilladelse/layout.js` |
| `/pension-spain` | `pension` | `app/pension-spain/layout.js` |
| `/work-in-spain` | `workInSpain` | `app/work-in-spain/layout.js` |
| `/arbejdsret-i-spanien` | `laborLaw` | `app/arbejdsret-i-spanien/layout.js` |
| `/selvstaendig-webshop-spanien` | `webshop` | `app/selvstaendig-webshop-spanien/layout.js` |
| `/dansk-holder-spansk-selskab` | `danishHolding` | `app/dansk-holder-spansk-selskab/layout.js` |

## Required Translation Keys Structure

Each page translation key should have these metadata fields:

```json
{
  "pageKey": {
    "metaTitle": "Page Title | Christian Gefke - Spansk Advokat",
    "metaDescription": "150-160 character description for search engines",
    "ogTitle": "Title for social media sharing",
    "ogDescription": "Description for social media sharing",
    "twitterTitle": "Title for Twitter (optional)",
    "twitterDescription": "Description for Twitter (optional)",
    "title": "Main page heading (H1)",
    "subtitle": "Page subtitle/lead text",
    // ... other content keys
  }
}
```

## Usage in Layout Files

```javascript
// app/[page]/layout.js
import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('translationKey', '/page-url', 'da')

export default function PageLayout({ children }) {
  return children
}
```

## Finding Translation Keys

To find the correct translation key for a page:
1. Check the page component (`page.js`)
2. Look for `t("keyName.title")` or similar
3. The first part before the dot is the translation key
4. Example: `t("divorce.title")` → key is `divorce`

## Adding New Pages

When adding a new page:
1. Choose a translation key name (camelCase)
2. Add it to all translation files (`da.json`, `en.json`, `es.json`)
3. Include all required metadata fields
4. Create layout.js with `getMetadata('keyName', '/url', 'da')`

