/**
 * AEO (AI Engine Optimization) Service
 * 
 * Provides functions for optimizing content for AI search engines
 * and virtual assistants using Firecrawl
 */

import { scrapeUrl, analyzeAEO } from './firecrawl';

/**
 * Optimize content for AI engines
 * @param {string} url - URL to optimize
 * @returns {Promise<object>} AEO optimization recommendations
 */
export async function optimizeForAEO(url) {
  try {
    const scraped = await scrapeUrl(url, {
      formats: ['markdown', 'html'],
      includeTags: ['h1', 'h2', 'h3', 'meta', 'title', 'script'],
      onlyMainContent: false
    });
    
    if (!scraped.success) {
      return {
        success: false,
        error: scraped.error,
        url
      };
    }
    
    const aeoAnalysis = analyzeAEO(scraped);
    
    if (!aeoAnalysis) {
      return {
        success: false,
        error: 'Failed to analyze content',
        url
      };
    }
    
    // Generate optimization recommendations
    const recommendations = generateAEORecommendations(aeoAnalysis);
    
    return {
      success: true,
      url,
      analysis: aeoAnalysis,
      recommendations,
      score: calculateAEOScore(aeoAnalysis),
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('AEO optimization error:', error);
    return {
      success: false,
      error: error.message,
      url
    };
  }
}

/**
 * Generate AEO recommendations based on analysis
 * @param {object} analysis - AEO analysis results
 * @returns {array} List of recommendations
 */
function generateAEORecommendations(analysis) {
  const recommendations = [];
  
  // Structure recommendations
  if (!analysis.structure.hasH1) {
    recommendations.push({
      priority: 'critical',
      category: 'structure',
      issue: 'Missing H1 heading',
      recommendation: 'Add a single, descriptive H1 heading that clearly states the page topic',
      impact: 'AI engines use H1 to understand page context'
    });
  }
  
  if (analysis.structure.headingHierarchy === 'poor' || analysis.structure.headingHierarchy === 'fair') {
    recommendations.push({
      priority: 'high',
      category: 'structure',
      issue: 'Poor heading hierarchy',
      recommendation: 'Use proper heading hierarchy (H1 → H2 → H3) to organize content logically',
      impact: 'Clear hierarchy helps AI engines understand content structure'
    });
  }
  
  // Content recommendations
  if (analysis.content.wordCount < 300) {
    recommendations.push({
      priority: 'high',
      category: 'content',
      issue: 'Thin content',
      recommendation: `Expand content to at least 300 words (currently ${analysis.content.wordCount} words)`,
      impact: 'AI engines prefer comprehensive, detailed content'
    });
  }
  
  if (!analysis.content.hasMetaDescription) {
    recommendations.push({
      priority: 'medium',
      category: 'metadata',
      issue: 'Missing meta description',
      recommendation: 'Add a clear, descriptive meta description (150-160 characters)',
      impact: 'Meta descriptions help AI engines summarize content'
    });
  }
  
  if (!analysis.content.hasStructuredData) {
    recommendations.push({
      priority: 'high',
      category: 'structured-data',
      issue: 'Missing structured data',
      recommendation: 'Add Schema.org structured data (JSON-LD) to help AI engines understand content type and context',
      impact: 'Structured data significantly improves AI engine comprehension'
    });
  }
  
  // Readability recommendations
  if (analysis.readability.score < 70) {
    recommendations.push({
      priority: 'medium',
      category: 'readability',
      issue: 'Low readability score',
      recommendation: 'Improve content structure and organization to enhance readability',
      impact: 'Better readability improves AI engine understanding'
    });
  }
  
  return recommendations;
}

/**
 * Calculate overall AEO score
 * @param {object} analysis - AEO analysis results
 * @returns {object} Score breakdown
 */
function calculateAEOScore(analysis) {
  let score = 100;
  const deductions = [];
  
  // Deduct points for issues
  if (!analysis.structure.hasH1) {
    score -= 20;
    deductions.push({ reason: 'Missing H1', points: -20 });
  }
  
  if (analysis.structure.headingHierarchy === 'poor') {
    score -= 15;
    deductions.push({ reason: 'Poor heading hierarchy', points: -15 });
  } else if (analysis.structure.headingHierarchy === 'fair') {
    score -= 10;
    deductions.push({ reason: 'Fair heading hierarchy', points: -10 });
  }
  
  if (analysis.content.wordCount < 300) {
    score -= 15;
    deductions.push({ reason: 'Thin content', points: -15 });
  }
  
  if (!analysis.content.hasMetaDescription) {
    score -= 10;
    deductions.push({ reason: 'Missing meta description', points: -10 });
  }
  
  if (!analysis.content.hasStructuredData) {
    score -= 20;
    deductions.push({ reason: 'Missing structured data', points: -20 });
  }
  
  // Ensure score doesn't go below 0
  score = Math.max(0, score);
  
  // Determine grade
  let grade = 'F';
  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  
  return {
    overall: score,
    grade,
    deductions,
    maxScore: 100
  };
}

/**
 * Check if content is optimized for AI engines
 * @param {string} url - URL to check
 * @returns {Promise<object>} Optimization status
 */
export async function checkAEOStatus(url) {
  try {
    const result = await optimizeForAEO(url);
    
    if (!result.success) {
      return result;
    }
  
    const isOptimized = result.score.overall >= 80;
    const criticalIssues = result.recommendations.filter(r => r.priority === 'critical');
    const highPriorityIssues = result.recommendations.filter(r => r.priority === 'high');
  
    return {
      ...result,
      isOptimized,
      hasCriticalIssues: criticalIssues.length > 0,
      hasHighPriorityIssues: highPriorityIssues.length > 0,
      status: isOptimized ? 'optimized' : 'needs-improvement'
    };
  } catch (error) {
    console.error('AEO status check error:', error);
    return {
      success: false,
      error: error.message,
      url
    };
  }
}

/**
 * Generate AEO optimization report
 * @param {array} urls - URLs to analyze
 * @returns {Promise<object>} Comprehensive AEO report
 */
export async function generateAEOReport(urls) {
  try {
    const results = [];
    
    for (const url of urls) {
      const result = await optimizeForAEO(url);
      results.push(result);
    }
    
    // Aggregate statistics
    const stats = {
      totalPages: results.length,
      optimizedPages: results.filter(r => r.success && r.score.overall >= 80).length,
      averageScore: results
        .filter(r => r.success)
        .reduce((sum, r) => sum + r.score.overall, 0) / results.filter(r => r.success).length || 0,
      criticalIssues: results
        .filter(r => r.success)
        .reduce((sum, r) => sum + r.recommendations.filter(rec => rec.priority === 'critical').length, 0),
      highPriorityIssues: results
        .filter(r => r.success)
        .reduce((sum, r) => sum + r.recommendations.filter(rec => rec.priority === 'high').length, 0)
    };
    
    return {
      success: true,
      stats,
      results,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('AEO report generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

