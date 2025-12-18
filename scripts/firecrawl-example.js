/**
 * Firecrawl Example Script
 * 
 * Example usage of Firecrawl for SEO and AEO analysis
 * 
 * Usage:
 *   node scripts/firecrawl-example.js
 * 
 * Make sure to set FIRECRAWL_API_KEY in your environment
 */

// Note: This is a Node.js script example
// For Next.js API routes, use the API endpoints instead

async function exampleAuditSinglePage() {
  console.log('\n=== Example: Audit Single Page ===\n');
  
  // In a real Next.js environment, you would use:
  // import { performSEOAudit } from '@/lib/firecrawl';
  // const result = await performSEOAudit('https://www.christiangefke.com/about');
  
  // Or call the API:
  const response = await fetch('http://localhost:3000/api/firecrawl/audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: 'https://www.christiangefke.com/about'
    })
  });
  
  const result = await response.json();
  console.log('Audit Result:', JSON.stringify(result, null, 2));
}

async function exampleAuditAllPages() {
  console.log('\n=== Example: Audit All Pages ===\n');
  
  const response = await fetch('http://localhost:3000/api/firecrawl/audit-all', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  
  const result = await response.json();
  console.log('Total Pages:', result.report?.summary?.totalPages);
  console.log('Pages with Issues:', result.report?.summary?.pagesWithIssues);
  console.log('\nIssues:');
  console.log('- Missing Meta Descriptions:', result.report?.issues?.missingMetaDescriptions?.length || 0);
  console.log('- Missing H1:', result.report?.issues?.missingH1?.length || 0);
  console.log('- Thin Content:', result.report?.issues?.thinContent?.length || 0);
  console.log('- Missing Structured Data:', result.report?.issues?.missingStructuredData?.length || 0);
  console.log('- Duplicate Titles:', result.report?.issues?.duplicateTitles?.length || 0);
}

async function exampleAEOOptimization() {
  console.log('\n=== Example: AEO Optimization ===\n');
  
  const response = await fetch('http://localhost:3000/api/firecrawl/aeo-optimize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: 'https://www.christiangefke.com/real-estate-buy-sell-spain'
    })
  });
  
  const result = await response.json();
  console.log('AEO Score:', result.score?.overall);
  console.log('Grade:', result.score?.grade);
  console.log('\nRecommendations:');
  result.recommendations?.forEach((rec, i) => {
    console.log(`${i + 1}. [${rec.priority}] ${rec.issue}`);
    console.log(`   ${rec.recommendation}`);
  });
}

async function main() {
  console.log('Firecrawl Examples');
  console.log('==================');
  console.log('\nMake sure your Next.js dev server is running (npm run dev)');
  console.log('And that FIRECRAWL_API_KEY is set in your environment\n');
  
  try {
    // Uncomment the example you want to run:
    
    // await exampleAuditSinglePage();
    // await exampleAuditAllPages();
    // await exampleAEOOptimization();
    
    console.log('\nUncomment examples in the script to run them');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { exampleAuditSinglePage, exampleAuditAllPages, exampleAEOOptimization };

