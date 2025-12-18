# Firecrawl Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Get Your API Key
1. Sign up at https://www.firecrawl.dev/
2. Get your API key from the dashboard

### Step 2: Configure Environment
Create `.env.local` in the project root:
```bash
FIRECRAWL_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=https://www.christiangefke.com
```

### Step 3: Test It Out
Start your dev server:
```bash
npm run dev
```

Test the audit endpoint:
```bash
curl -X POST http://localhost:3000/api/firecrawl/audit \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.christiangefke.com/about"}'
```

## 📋 What's Included

✅ **Firecrawl SDK** - Installed and ready  
✅ **API Routes** - 6 endpoints for SEO/AEO operations  
✅ **Utility Libraries** - Reusable functions for audits and analysis  
✅ **Documentation** - Complete guides and examples  

## 🎯 Common Use Cases

### 1. Audit a Single Page
```bash
POST /api/firecrawl/audit
Body: { "url": "https://www.christiangefke.com/about" }
```

### 2. Audit All Pages
```bash
POST /api/firecrawl/audit-all
```

### 3. Check AEO Optimization
```bash
POST /api/firecrawl/aeo-optimize
Body: { "url": "https://www.christiangefke.com/about" }
```

### 4. Monitor Website
```bash
POST /api/firecrawl/monitor
Body: { 
  "baseUrl": "https://www.christiangefke.com",
  "urls": ["/about", "/contact"]
}
```

## 📚 Documentation

- **Full Guide:** `FIRECRAWL_USAGE.md` - Complete usage reference
- **SEO Guide:** `SEO_IMPLEMENTATION_GUIDE.md` - Firecrawl section added
- **Example Script:** `scripts/firecrawl-example.js` - Code examples

## 🔍 What Gets Analyzed

**SEO Analysis:**
- Meta titles & descriptions
- Heading structure (H1, H2, H3)
- Internal/external links
- Image alt text
- Word count
- Structured data

**AEO Analysis:**
- Content readability
- Heading hierarchy
- Content depth
- Structured data presence
- AI comprehension score (0-100)

## ⚡ Quick Tips

1. **Start small** - Test with single page first
2. **Fix critical issues** - Missing H1, duplicate titles
3. **Aim for 80+ AEO score** - Good optimization target
4. **Run regularly** - Weekly or monthly audits
5. **Use reports** - Track improvements over time

## 🆘 Troubleshooting

**"API key not configured"**
→ Add `FIRECRAWL_API_KEY` to `.env.local`

**"Invalid URL format"**
→ Include full URL with `https://`

**Slow responses**
→ Firecrawl operations can take time, be patient

## 📞 Need Help?

- Check `FIRECRAWL_USAGE.md` for detailed examples
- Review `SEO_IMPLEMENTATION_GUIDE.md` for integration details
- Firecrawl Docs: https://docs.firecrawl.dev/

---

**Ready to optimize your SEO and AEO!** 🎉

