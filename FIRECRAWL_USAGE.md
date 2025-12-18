# Firecrawl Usage Guide

Quick reference guide for using Firecrawl in the Christian Gefke Law website project.

## Setup

1. Add to `.env.local`:
```bash
FIRECRAWL_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=https://www.christiangefke.com
```

2. Get API key from: https://www.firecrawl.dev/

## Quick Commands

### Audit Single Page
```bash
curl -X POST http://localhost:3000/api/firecrawl/audit \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.christiangefke.com/about"}'
```

### Audit All Pages
```bash
curl -X POST http://localhost:3000/api/firecrawl/audit-all
```

### AEO Optimization Check
```bash
curl -X POST http://localhost:3000/api/firecrawl/aeo-optimize \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.christiangefke.com/real-estate-buy-sell-spain"}'
```

### Monitor Multiple Pages
```bash
curl -X POST http://localhost:3000/api/firecrawl/monitor \
  -H "Content-Type: application/json" \
  -d '{
    "baseUrl": "https://www.christiangefke.com",
    "urls": ["/about", "/contact", "/real-estate-buy-sell-spain"]
  }'
```

## JavaScript Usage

### Import Functions
```javascript
// SEO Audit
import { performSEOAudit } from '@/lib/firecrawl';
import { auditAllPages, generateAuditReport } from '@/lib/seoAuditService';

// AEO Optimization
import { optimizeForAEO, checkAEOStatus } from '@/lib/aeoService';

// Monitoring
import { monitorWebsite } from '@/lib/firecrawl';
```

### Example: Audit Single Page
```javascript
const result = await performSEOAudit('https://www.christiangefke.com/about');

if (result.success) {
  console.log('SEO Metadata:', result.seoMetadata);
  console.log('AEO Analysis:', result.aeoAnalysis);
  console.log('Issues:', result.aeoAnalysis.structure.issues);
  console.log('Recommendations:', result.aeoAnalysis.recommendations);
}
```

### Example: Audit All Pages
```javascript
const audit = await auditAllPages();
const report = generateAuditReport(audit);

console.log('Total Pages:', report.report.summary.totalPages);
console.log('Pages with Issues:', report.report.summary.pagesWithIssues);
console.log('Issues:', report.report.issues);
console.log('Recommendations:', report.report.recommendations);
```

### Example: AEO Optimization
```javascript
const result = await optimizeForAEO('https://www.christiangefke.com/about');

console.log('AEO Score:', result.score.overall); // 0-100
console.log('Grade:', result.score.grade); // A-F
console.log('Recommendations:', result.recommendations);
```

### Example: Check AEO Status
```javascript
const status = await checkAEOStatus('https://www.christiangefke.com/about');

console.log('Is Optimized:', status.isOptimized);
console.log('Status:', status.status); // 'optimized' or 'needs-improvement'
console.log('Has Critical Issues:', status.hasCriticalIssues);
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/firecrawl/scrape` | POST | Scrape single URL |
| `/api/firecrawl/crawl` | POST | Crawl entire website |
| `/api/firecrawl/audit` | POST | SEO audit single page |
| `/api/firecrawl/audit-all` | POST | SEO audit all pages |
| `/api/firecrawl/monitor` | POST | Monitor website for issues |
| `/api/firecrawl/aeo-optimize` | POST | AEO optimization analysis |

## Response Formats

### SEO Audit Response
```json
{
  "success": true,
  "url": "https://www.christiangefke.com/about",
  "seoMetadata": {
    "title": "Page Title",
    "description": "Meta description",
    "h1": ["Main Heading"],
    "h2": ["Section 1", "Section 2"],
    "wordCount": 500,
    "links": ["/contact", "/services"],
    "images": ["/images/photo.jpg"]
  },
  "aeoAnalysis": {
    "structure": {
      "hasH1": true,
      "hasH2": true,
      "headingHierarchy": "good",
      "issues": []
    },
    "content": {
      "wordCount": 500,
      "hasMetaDescription": true,
      "hasStructuredData": true,
      "issues": []
    },
    "recommendations": []
  }
}
```

### AEO Optimization Response
```json
{
  "success": true,
  "url": "https://www.christiangefke.com/about",
  "score": {
    "overall": 85,
    "grade": "B",
    "deductions": [],
    "maxScore": 100
  },
  "recommendations": [
    {
      "priority": "medium",
      "category": "content",
      "issue": "Thin content",
      "recommendation": "Expand content to at least 300 words",
      "impact": "AI engines prefer comprehensive content"
    }
  ]
}
```

## Common Issues & Solutions

### Missing Meta Descriptions
**Issue:** Pages without meta descriptions
**Solution:** Add to translation files or use `getMetadata()` helper

### Missing H1
**Issue:** Pages without H1 headings
**Solution:** Add H1 to page content

### Thin Content
**Issue:** Pages with less than 300 words
**Solution:** Expand content in translation files

### Missing Structured Data
**Issue:** Pages without JSON-LD structured data
**Solution:** Use `getArticleSchemaFromKey()` in page layouts

## Scheduling Audits

### Using Cron (Linux/Mac)
```bash
# Weekly audit every Sunday at midnight
0 0 * * 0 curl -X POST https://www.christiangefke.com/api/firecrawl/audit-all
```

### Using GitHub Actions
Create `.github/workflows/seo-audit.yml`:
```yaml
name: SEO Audit
on:
  schedule:
    - cron: '0 0 * * 0' # Weekly
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - name: Run SEO Audit
        run: |
          curl -X POST ${{ secrets.SITE_URL }}/api/firecrawl/audit-all
```

## Tips

1. **Start with single page audits** to understand the output
2. **Fix critical issues first** (missing H1, duplicate titles)
3. **Monitor AEO scores** - aim for 80+ on all pages
4. **Run audits regularly** - weekly or monthly
5. **Track improvements** over time
6. **Use reports** to prioritize fixes

## Support

- Firecrawl Docs: https://docs.firecrawl.dev/
- Project SEO Guide: `SEO_IMPLEMENTATION_GUIDE.md`
- Firecrawl Support: https://www.firecrawl.dev/

