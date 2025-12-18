/**
 * Firecrawl Utility Library
 * 
 * Provides functions for web crawling, content extraction, and SEO/AEO analysis
 * using the Firecrawl API.
 */

import FirecrawlApp from '@mendable/firecrawl-js';

// Initialize Firecrawl client
let firecrawlApp = null;

/**
 * Initialize Firecrawl client with API key
 * @param {string} apiKey - Firecrawl API key
 * @returns {FirecrawlApp} Initialized Firecrawl app instance
 */
export function initFirecrawl(apiKey) {
  if (!apiKey) {
    throw new Error('Firecrawl API key is required');
  }
  
  if (!firecrawlApp) {
    firecrawlApp = new FirecrawlApp({ apiKey });
  }
  
  return firecrawlApp;
}

/**
 * Get Firecrawl app instance (initializes if needed)
 * @returns {FirecrawlApp} Firecrawl app instance
 */
export function getFirecrawlApp() {
  if (!firecrawlApp) {
    const apiKey = process.env.FIRECRAWL_API_KEY;
    if (!apiKey) {
      throw new Error('Firecrawl API key not configured. Set FIRECRAWL_API_KEY environment variable.');
    }
    firecrawlApp = new FirecrawlApp({ apiKey });
  }
  return firecrawlApp;
}

/**
 * Scrape a single URL
 * @param {string} url - URL to scrape
 * @param {object} options - Scraping options
 * @returns {Promise<object>} Scraped content
 */
export async function scrapeUrl(url, options = {}) {
  const app = getFirecrawlApp();
  
  const defaultOptions = {
    formats: ['markdown', 'html'],
    includeTags: ['h1', 'h2', 'h3', 'meta', 'title'],
    onlyMainContent: true,
    ...options
  };
  
  try {
    // Wrap in additional try-catch to handle SDK internal errors
    let result;
    try {
      // Try calling scrapeUrl - if it fails with status error, it might be an SDK issue
      result = await app.scrapeUrl(url, defaultOptions);
    } catch (sdkError) {
      // Handle SDK-specific errors
      console.error('Firecrawl SDK error:', sdkError);
      console.error('Error details:', {
        message: sdkError.message,
        name: sdkError.name,
        stack: sdkError.stack?.substring(0, 500), // First 500 chars of stack
        hasResponse: !!sdkError.response,
        responseKeys: sdkError.response ? Object.keys(sdkError.response) : []
      });
      
      // Check if it's the specific "status" error - this is an SDK bug
      if (sdkError.message && sdkError.message.includes('status')) {
        return {
          success: false,
          error: 'Firecrawl SDK error: Unable to read response status. This may be due to an API issue or invalid URL. Please verify the URL is accessible and your API key is valid.',
          url,
          errorType: 'SDK_STATUS_ERROR',
          suggestion: 'Try checking: 1) URL is accessible, 2) API key is valid, 3) Firecrawl service is operational'
        };
      }
      
      // Check if it's a response error
      if (sdkError.response) {
        return {
          success: false,
          error: `Firecrawl API error: ${sdkError.response.status} - ${sdkError.response.statusText || sdkError.message}`,
          url,
          statusCode: sdkError.response.status
        };
      }
      
      // Check if it's a network error
      if (sdkError.code === 'ENOTFOUND' || sdkError.code === 'ECONNREFUSED') {
        return {
          success: false,
          error: `Network error: ${sdkError.message}`,
          url
        };
      }
      
      // Generic SDK error
      return {
        success: false,
        error: sdkError.message || String(sdkError),
        url,
        errorType: sdkError.name || 'Unknown'
      };
    }
    
    // Log the result structure for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('Firecrawl scrape result structure:', {
        hasResult: !!result,
        resultKeys: result ? Object.keys(result) : [],
        resultType: typeof result
      });
    }
    
    // Handle different response structures from Firecrawl
    // The response might be the data directly or wrapped in a data property
    let data = result;
    if (result && typeof result === 'object') {
      if (result.data) {
        data = result.data;
      } else if (result.result) {
        data = result.result;
      } else if (result.success === false || result.error) {
        // Handle error response
        return {
          success: false,
          error: result.error?.message || result.error || 'Unknown error from Firecrawl',
          url
        };
      }
    }
    
    // Validate that we have valid data
    if (!data || (typeof data === 'object' && Object.keys(data).length === 0)) {
      return {
        success: false,
        error: 'Empty or invalid response from Firecrawl',
        url
      };
    }
    
    return {
      success: true,
      data: data || result,
      url
    };
  } catch (error) {
    console.error('Firecrawl scrape error:', error);
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      cause: error.cause
    });
    return {
      success: false,
      error: error.message || String(error),
      url,
      errorType: error.name || 'Unknown'
    };
  }
}

/**
 * Crawl entire website
 * @param {string} baseUrl - Base URL to start crawling from
 * @param {object} options - Crawling options
 * @returns {Promise<object>} Crawl results
 */
export async function crawlWebsite(baseUrl, options = {}) {
  const app = getFirecrawlApp();
  
  const defaultOptions = {
    limit: 100, // Maximum number of pages to crawl
    scrapeOptions: {
      formats: ['markdown', 'html'],
      includeTags: ['h1', 'h2', 'h3', 'meta', 'title', 'link'],
      onlyMainContent: true,
    },
    ...options
  };
  
  try {
    const result = await app.crawlUrl(baseUrl, defaultOptions);
    return {
      success: true,
      data: result,
      baseUrl
    };
  } catch (error) {
    console.error('Firecrawl crawl error:', error);
    return {
      success: false,
      error: error.message,
      baseUrl
    };
  }
}

/**
 * Extract SEO metadata from scraped content
 * @param {object} scrapedData - Data from Firecrawl scrape
 * @returns {object} Extracted SEO metadata
 */
export function extractSEOMetadata(scrapedData) {
  if (!scrapedData || !scrapedData.data) {
    return null;
  }
  
  const { data } = scrapedData;
  
  // Handle case where data might be nested
  const content = data.data || data.result || data;
  const metadata = {
    url: content.url || data.url || scrapedData.url,
    title: content.metadata?.title || data.metadata?.title || '',
    description: content.metadata?.description || data.metadata?.description || '',
    ogTitle: content.metadata?.ogTitle || data.metadata?.ogTitle || '',
    ogDescription: content.metadata?.ogDescription || data.metadata?.ogDescription || '',
    ogImage: content.metadata?.ogImage || data.metadata?.ogImage || '',
    canonical: content.metadata?.canonical || data.metadata?.canonical || '',
    h1: [],
    h2: [],
    h3: [],
    links: [],
    images: [],
    wordCount: 0,
    language: content.metadata?.language || data.metadata?.language || 'da'
  };
  
  // Extract headings
  const markdown = content.markdown || data.markdown;
  const html = content.html || data.html;
  
  if (markdown) {
    const h1Matches = markdown.match(/^#\s+(.+)$/gm);
    const h2Matches = markdown.match(/^##\s+(.+)$/gm);
    const h3Matches = markdown.match(/^###\s+(.+)$/gm);
    
    metadata.h1 = h1Matches ? h1Matches.map(h => h.replace(/^#\s+/, '')) : [];
    metadata.h2 = h2Matches ? h2Matches.map(h => h.replace(/^##\s+/, '')) : [];
    metadata.h3 = h3Matches ? h3Matches.map(h => h.replace(/^###\s+/, '')) : [];
    
    // Count words (approximate)
    const text = markdown.replace(/[#*\[\]()]/g, '').trim();
    metadata.wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  }
  
  // Extract links and images from HTML if available
  if (html) {
    // This is a simplified extraction - in production, use a proper HTML parser
    const linkMatches = html.match(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi) || [];
    metadata.links = linkMatches.map(link => {
      const hrefMatch = link.match(/href=["']([^"']+)["']/i);
      return hrefMatch ? hrefMatch[1] : null;
    }).filter(Boolean);
    
    const imageMatches = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
    metadata.images = imageMatches.map(img => {
      const srcMatch = img.match(/src=["']([^"']+)["']/i);
      return srcMatch ? srcMatch[1] : null;
    }).filter(Boolean);
  }
  
  return metadata;
}

/**
 * Analyze content for AEO (AI Engine Optimization)
 * @param {object} scrapedData - Data from Firecrawl scrape
 * @returns {object} AEO analysis results
 */
export function analyzeAEO(scrapedData) {
  if (!scrapedData || !scrapedData.data) {
    return null;
  }
  
  const { data } = scrapedData;
  
  // Handle case where data might be nested
  const content = data.data || data.result || data;
  const analysis = {
    url: data.url || scrapedData.url,
    readability: {
      score: 0,
      issues: []
    },
    structure: {
      hasH1: false,
      hasH2: false,
      headingHierarchy: 'good', // good, fair, poor
      issues: []
    },
    content: {
      wordCount: 0,
      hasMetaDescription: false,
      hasStructuredData: false,
      issues: []
    },
    recommendations: []
  };
  
  const markdown = content.markdown || data.markdown;
  const html = content.html || data.html;
  const metadata = content.metadata || data.metadata;
  
  // Check for H1
  if (markdown) {
    const hasH1 = /^#\s+/.test(markdown);
    analysis.structure.hasH1 = hasH1;
    if (!hasH1) {
      analysis.structure.issues.push('Missing H1 heading');
      analysis.recommendations.push('Add a single H1 heading to improve content structure');
    }
    
    // Check heading hierarchy
    const h1Count = (markdown.match(/^#\s+/gm) || []).length;
    const h2Count = (markdown.match(/^##\s+/gm) || []).length;
    
    if (h1Count > 1) {
      analysis.structure.issues.push('Multiple H1 headings found');
      analysis.recommendations.push('Use only one H1 heading per page');
    }
    
    if (h2Count === 0 && h1Count > 0) {
      analysis.structure.headingHierarchy = 'fair';
      analysis.structure.issues.push('No H2 headings found');
      analysis.recommendations.push('Add H2 headings to organize content sections');
    }
    
    // Word count
    const text = markdown.replace(/[#*\[\]()]/g, '').trim();
    analysis.content.wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    
    if (analysis.content.wordCount < 300) {
      analysis.content.issues.push('Content is too short (less than 300 words)');
      analysis.recommendations.push('Expand content to at least 300 words for better SEO and AEO');
    }
  }
  
  // Check metadata
  if (metadata) {
    analysis.content.hasMetaDescription = !!metadata.description;
    if (!analysis.content.hasMetaDescription) {
      analysis.content.issues.push('Missing meta description');
      analysis.recommendations.push('Add a meta description for better search engine visibility');
    }
  }
  
  // Check for structured data (simplified - would need HTML parsing in production)
  if (html && html.includes('application/ld+json')) {
    analysis.content.hasStructuredData = true;
  } else {
    analysis.content.issues.push('No structured data (JSON-LD) found');
    analysis.recommendations.push('Add structured data (Schema.org) to help AI engines understand content');
  }
  
  // Calculate readability score (simplified)
  let score = 100;
  score -= analysis.structure.issues.length * 10;
  score -= analysis.content.issues.length * 15;
  analysis.readability.score = Math.max(0, score);
  
  return analysis;
}

/**
 * Perform comprehensive SEO audit on a page
 * @param {string} url - URL to audit
 * @returns {Promise<object>} SEO audit results
 */
export async function performSEOAudit(url) {
  try {
    // Scrape the URL
    const scraped = await scrapeUrl(url, {
      formats: ['markdown', 'html'],
      includeTags: ['h1', 'h2', 'h3', 'meta', 'title', 'link', 'script'],
      onlyMainContent: false
    });
    
    if (!scraped.success) {
      return {
        success: false,
        error: scraped.error,
        url
      };
    }
    
    // Extract SEO metadata
    const seoMetadata = extractSEOMetadata(scraped);
    
    // Perform AEO analysis
    const aeoAnalysis = analyzeAEO(scraped);
    
    return {
      success: true,
      url,
      seoMetadata,
      aeoAnalysis,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('SEO audit error:', error);
    return {
      success: false,
      error: error.message,
      url
    };
  }
}

/**
 * Monitor website for SEO issues
 * @param {string} baseUrl - Base URL to monitor
 * @param {array} urls - Specific URLs to check (optional)
 * @returns {Promise<object>} Monitoring results
 */
export async function monitorWebsite(baseUrl, urls = []) {
  try {
    const results = [];
    
    if (urls.length > 0) {
      // Check specific URLs
      for (const url of urls) {
        const audit = await performSEOAudit(url);
        results.push(audit);
      }
    } else {
      // Crawl entire website
      const crawlResult = await crawlWebsite(baseUrl, {
        limit: 50 // Limit for monitoring
      });
      
      if (crawlResult.success && crawlResult.data?.data) {
        // Process each page
        for (const page of crawlResult.data.data) {
          const audit = await performSEOAudit(page.url || page.sourceURL);
          results.push(audit);
        }
      }
    }
    
    // Aggregate issues
    const issues = {
      missingMetaDescriptions: [],
      missingH1: [],
      thinContent: [],
      missingStructuredData: [],
      duplicateTitles: []
    };
    
    const titles = new Map();
    
    results.forEach(result => {
      if (result.success) {
        if (result.aeoAnalysis) {
          if (!result.aeoAnalysis.content.hasMetaDescription) {
            issues.missingMetaDescriptions.push(result.url);
          }
          if (!result.aeoAnalysis.structure.hasH1) {
            issues.missingH1.push(result.url);
          }
          if (result.aeoAnalysis.content.wordCount < 300) {
            issues.thinContent.push({
              url: result.url,
              wordCount: result.aeoAnalysis.content.wordCount
            });
          }
          if (!result.aeoAnalysis.content.hasStructuredData) {
            issues.missingStructuredData.push(result.url);
          }
        }
        
        if (result.seoMetadata?.title) {
          if (titles.has(result.seoMetadata.title)) {
            issues.duplicateTitles.push({
              title: result.seoMetadata.title,
              urls: [titles.get(result.seoMetadata.title), result.url]
            });
          } else {
            titles.set(result.seoMetadata.title, result.url);
          }
        }
      }
    });
    
    return {
      success: true,
      baseUrl,
      totalPages: results.length,
      results,
      issues,
      summary: {
        pagesWithIssues: results.filter(r => 
          r.success && r.aeoAnalysis && (
            r.aeoAnalysis.structure.issues.length > 0 ||
            r.aeoAnalysis.content.issues.length > 0
          )
        ).length,
        totalIssues: Object.values(issues).reduce((sum, arr) => sum + arr.length, 0)
      },
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Website monitoring error:', error);
    return {
      success: false,
      error: error.message,
      baseUrl
    };
  }
}

