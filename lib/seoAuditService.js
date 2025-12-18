/**
 * SEO Audit Service
 * 
 * Provides high-level functions for performing SEO audits
 * using Firecrawl integration
 */

import { performSEOAudit, monitorWebsite } from './firecrawl';

/**
 * Get all pages from sitemap for auditing
 * @returns {Promise<string[]>} Array of page URLs
 */
export async function getPagesFromSitemap() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.buxtongefke.es';
    const sitemapUrl = `${baseUrl}/sitemap.xml`;
    
    // In a real implementation, you would parse the sitemap XML
    // For now, return a list of known pages
    const pages = [
      '/',
      '/about',
      '/contact',
      '/reviews',
      '/real-estate-buy-sell-spain',
      '/divorce-spain',
      '/residency-spain',
      '/starte-virksomhed-spanien',
      '/testamenter-i-spanien',
      '/skat',
      '/realkredit',
      '/real-estate-investment-spain',
      '/homeowner-associations',
      '/lejekontrakter-i-spanien',
      '/lovvalg',
      '/opholdstilladelse',
      '/pension-spain',
      '/work-in-spain',
      '/arbejdsret-i-spanien',
      '/selvstaendig-webshop-spanien',
      '/dansk-holder-spansk-selskab',
      '/legalterms',
      '/privacypolicy'
    ];
    
    return pages.map(page => `${baseUrl}${page}`);
  } catch (error) {
    console.error('Error getting pages from sitemap:', error);
    return [];
  }
}

/**
 * Perform SEO audit on all pages
 * @returns {Promise<object>} Comprehensive audit results
 */
export async function auditAllPages() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.buxtongefke.es';
    const pages = await getPagesFromSitemap();
    
    const result = await monitorWebsite(baseUrl, pages);
    return result;
  } catch (error) {
    console.error('Error auditing all pages:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Perform SEO audit on a specific page
 * @param {string} path - Page path (e.g., '/about')
 * @returns {Promise<object>} Audit results for the page
 */
export async function auditPage(path) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.buxtongefke.es';
    const url = path.startsWith('http') ? path : `${baseUrl}${path}`;
    
    const result = await performSEOAudit(url);
    return result;
  } catch (error) {
    console.error('Error auditing page:', error);
    return {
      success: false,
      error: error.message,
      path
    };
  }
}

/**
 * Generate SEO audit report
 * @param {object} auditResults - Results from auditAllPages or monitorWebsite
 * @returns {object} Formatted report
 */
export function generateAuditReport(auditResults) {
  if (!auditResults || !auditResults.success) {
    return {
      success: false,
      error: auditResults?.error || 'Unknown error',
      report: null
    };
  }
  
  const { results, issues, summary } = auditResults;
  
  const report = {
    timestamp: auditResults.timestamp,
    summary: {
      totalPages: summary?.totalPages || results.length,
      pagesWithIssues: summary?.pagesWithIssues || 0,
      totalIssues: summary?.totalIssues || 0,
      issueBreakdown: {
        missingMetaDescriptions: issues?.missingMetaDescriptions?.length || 0,
        missingH1: issues?.missingH1?.length || 0,
        thinContent: issues?.thinContent?.length || 0,
        missingStructuredData: issues?.missingStructuredData?.length || 0,
        duplicateTitles: issues?.duplicateTitles?.length || 0
      }
    },
    issues: issues || {},
    recommendations: generateRecommendations(issues, results),
    pages: results.map(result => ({
      url: result.url,
      hasIssues: result.aeoAnalysis ? (
        result.aeoAnalysis.structure.issues.length > 0 ||
        result.aeoAnalysis.content.issues.length > 0
      ) : false,
      issues: result.aeoAnalysis ? [
        ...result.aeoAnalysis.structure.issues,
        ...result.aeoAnalysis.content.issues
      ] : [],
      recommendations: result.aeoAnalysis?.recommendations || [],
      wordCount: result.aeoAnalysis?.content?.wordCount || 0,
      hasMetaDescription: result.aeoAnalysis?.content?.hasMetaDescription || false,
      hasStructuredData: result.aeoAnalysis?.content?.hasStructuredData || false
    }))
  };
  
  return {
    success: true,
    report
  };
}

/**
 * Generate recommendations based on audit results
 * @param {object} issues - Issues found in audit
 * @param {array} results - Individual page results
 * @returns {array} List of recommendations
 */
function generateRecommendations(issues, results) {
  const recommendations = [];
  
  if (issues?.missingMetaDescriptions?.length > 0) {
    recommendations.push({
      priority: 'high',
      issue: 'Missing Meta Descriptions',
      count: issues.missingMetaDescriptions.length,
      action: 'Add unique meta descriptions (150-160 characters) to all pages',
      pages: issues.missingMetaDescriptions
    });
  }
  
  if (issues?.missingH1?.length > 0) {
    recommendations.push({
      priority: 'high',
      issue: 'Missing H1 Headings',
      count: issues.missingH1.length,
      action: 'Add a single H1 heading to each page',
      pages: issues.missingH1
    });
  }
  
  if (issues?.thinContent?.length > 0) {
    recommendations.push({
      priority: 'medium',
      issue: 'Thin Content',
      count: issues.thinContent.length,
      action: 'Expand content to at least 300 words per page',
      pages: issues.thinContent.map(item => ({
        url: item.url,
        wordCount: item.wordCount
      }))
    });
  }
  
  if (issues?.missingStructuredData?.length > 0) {
    recommendations.push({
      priority: 'medium',
      issue: 'Missing Structured Data',
      count: issues.missingStructuredData.length,
      action: 'Add Schema.org structured data (JSON-LD) to pages',
      pages: issues.missingStructuredData
    });
  }
  
  if (issues?.duplicateTitles?.length > 0) {
    recommendations.push({
      priority: 'high',
      issue: 'Duplicate Page Titles',
      count: issues.duplicateTitles.length,
      action: 'Ensure each page has a unique title',
      pages: issues.duplicateTitles
    });
  }
  
  return recommendations;
}

