# Pillar Content Strategy - Christian Gefke Law Website

## Overview

This document outlines the pillar content strategy for improving internal linking, user navigation, and SEO performance. The strategy organizes content into pillar pages (main topics) and cluster content (supporting articles) that link together to create a strong topical authority.

---

## Content Architecture

### Pillar Pages (Main Topics)

These are comprehensive, high-level pages that cover broad topics. They serve as hubs linking to related cluster content.

1. **Real Estate in Spain** (`/real-estate-buy-sell-spain`)
   - Main pillar: Buying and selling property
   - Cluster pages:
     - Mortgages (`/realkredit`)
     - Rental contracts (`/lejekontrakter-i-spanien`)
     - Homeowner associations (`/homeowner-associations`)
     - Real estate investment (`/real-estate-investment-spain`)
     - Tax implications (`/skat`)

2. **Living in Spain** (`/residency-spain`)
   - Main pillar: Residency and legal status
   - Cluster pages:
     - Work in Spain (`/work-in-spain`)
     - Labor law (`/arbejdsret-i-spanien`)
     - Pension (`/pension-spain`)
     - Tax for residents (`/skat`)

3. **Business in Spain** (`/starte-virksomhed-spanien`)
   - Main pillar: Starting a business
   - Cluster pages:
     - Tax advice (`/skat`)
     - Danish holding companies (`/dansk-holder-spansk-selskab`)
     - E-commerce/webshop (`/selvstaendig-webshop-spanien`)

4. **Family Law** (`/divorce-spain`)
   - Main pillar: International divorce
   - Cluster pages:
     - Wills (`/testamenter-i-spanien`)
     - International inheritance (`/opholdstilladelse`)
     - Law choice (`/lovvalg`)

---

## Internal Linking Strategy

### 1. Breadcrumb Navigation

**Implementation:** `components/Breadcrumb.js`

- Shows hierarchical page structure
- Includes structured data (Schema.org BreadcrumbList)
- Improves user navigation and SEO
- Used on all service pages

**Example:**
```
Home > Opholdstilladelse i Spanien
```

### 2. Related Services Section

**Implementation:** `components/RelatedServices.js` + `lib/relatedServices.js`

- Displays 3-4 related services at the bottom of each page
- Helps users discover relevant content
- Creates contextual internal links
- Improves time on site and reduces bounce rate

**Mapping Logic:**
- Real estate pages link to: mortgages, tax, homeowner associations, rental contracts
- Residency pages link to: work, tax, pension, real estate
- Business pages link to: tax, holding companies, webshop, residency
- Family law pages link to: wills, inheritance, law choice, tax

### 3. Contextual Links in Content

**Strategy:** Link key terms and concepts to relevant pages within the content.

**Key Terms to Link:**
- **NIE-nummer** → `/residency-spain`
- **Skattemæssig bopæl** → `/skat`
- **Realkredit** → `/realkredit`
- **Testamente** → `/testamenter-i-spanien`
- **Skilsmisse** → `/divorce-spain`
- **Autónomo** → `/starte-virksomhed-spanien`
- **IBI** → `/skat` or `/real-estate-buy-sell-spain`
- **Modelo 210/100/720** → `/skat`

**Best Practices:**
- Link naturally within sentences (not forced)
- Use descriptive anchor text (not "click here")
- Link to the most relevant page
- Limit to 2-3 contextual links per section
- Use blue color and underline for visibility

---

## Link Distribution Guidelines

### Homepage
- Links to all pillar pages
- Links to main service categories
- No related services section (too broad)

### Pillar Pages
- 4-6 internal links to cluster pages
- Related services section (4 services)
- Breadcrumb navigation
- Contextual links in content (2-3 per section)

### Cluster Pages
- 2-3 links back to pillar page
- 2-3 links to related cluster pages
- Related services section (4 services)
- Breadcrumb navigation
- Contextual links in content (2-3 per section)

### Legal Pages (Terms, Privacy)
- Minimal internal linking
- Link back to homepage
- No related services section

---

## SEO Benefits

### 1. Improved Crawlability
- Search engines can discover all pages through internal links
- Important pages receive more link equity
- Deep pages are accessible within 2-3 clicks

### 2. Topical Authority
- Related content clusters signal expertise
- Pillar pages establish authority on broad topics
- Cluster pages support and expand on pillar topics

### 3. User Experience
- Users can easily navigate to related content
- Reduces bounce rate
- Increases time on site
- Improves engagement metrics

### 4. PageRank Distribution
- Link equity flows from homepage → pillar pages → cluster pages
- Important pages receive more internal links
- Deep pages are not orphaned

---

## Implementation Checklist

### ✅ Completed
- [x] Breadcrumb component with structured data
- [x] Related Services component
- [x] Related services mapping (`lib/relatedServices.js`)
- [x] Translation keys for breadcrumbs and related services
- [x] Example implementations on:
  - `/residency-spain`
  - `/real-estate-buy-sell-spain`
  - `/work-in-spain`

### ⏳ To Do
- [ ] Add breadcrumbs to all service pages
- [ ] Add related services to all service pages
- [ ] Add contextual links in content across all pages
- [ ] Review and optimize anchor text
- [ ] Test internal linking structure
- [ ] Monitor user navigation patterns
- [ ] Update related services mapping based on analytics

---

## Content Updates Needed

### High Priority Contextual Links

1. **Residency Page** (`/residency-spain`)
   - Link "NIE-nummer" mentions to `/residency-spain` (self-link for emphasis)
   - Link "skattemæssig bopæl" to `/skat`
   - Link "arbejde" to `/work-in-spain`

2. **Work in Spain** (`/work-in-spain`)
   - Link "NIE-nummer" to `/residency-spain` ✅ (completed)
   - Link "socialforsikring" to `/pension-spain`
   - Link "skat" to `/skat`

3. **Tax Page** (`/skat`)
   - Link "residency" to `/residency-spain`
   - Link "ejendom" to `/real-estate-buy-sell-spain`
   - Link "virksomhed" to `/starte-virksomhed-spanien`

4. **Real Estate Buy/Sell** (`/real-estate-buy-sell-spain`)
   - Link "realkredit" to `/realkredit`
   - Link "skat" to `/skat`
   - Link "ejerforening" to `/homeowner-associations`

5. **Divorce Page** (`/divorce-spain`)
   - Link "testamente" to `/testamenter-i-spanien`
   - Link "arv" to `/opholdstilladelse`
   - Link "lovvalg" to `/lovvalg`

---

## Analytics & Monitoring

### Key Metrics to Track

1. **Internal Link Clicks**
   - Which related services get clicked most?
   - Which contextual links are used?
   - Navigation patterns

2. **User Flow**
   - Path from homepage to conversion
   - Most common page sequences
   - Exit pages

3. **Engagement**
   - Time on site
   - Pages per session
   - Bounce rate by page

4. **SEO Performance**
   - Keyword rankings
   - Organic traffic growth
   - Page authority scores

### Tools
- Google Analytics 4 (user flow, events)
- Google Search Console (internal links report)
- Ahrefs/SEMrush (internal link analysis)

---

## Maintenance

### Quarterly Reviews
1. Review related services mapping
2. Update contextual links based on new content
3. Analyze user navigation patterns
4. Optimize anchor text
5. Add links to new pages

### When Adding New Pages
1. Add to related services mapping
2. Add breadcrumb navigation
3. Add related services section
4. Link from relevant existing pages
5. Add contextual links in content

---

## Best Practices Summary

✅ **DO:**
- Link naturally within content
- Use descriptive anchor text
- Link to the most relevant page
- Keep related services to 3-4 items
- Use breadcrumbs on all service pages
- Update links when content changes

❌ **DON'T:**
- Over-link (max 2-3 per section)
- Use generic anchor text ("click here")
- Create orphaned pages
- Link to irrelevant pages
- Forget to update links when pages move

---

## Resources

- [Google: Internal Linking Best Practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Schema.org BreadcrumbList](https://schema.org/BreadcrumbList)
- [Ahrefs: Internal Linking Guide](https://ahrefs.com/blog/internal-linking/)
- [Moz: Internal Linking Strategy](https://moz.com/learn/seo/internal-link)

---

**Last Updated:** December 2024  
**Status:** Implementation in progress (Step 6 of SEO plan)

