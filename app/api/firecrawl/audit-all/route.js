/**
 * API Route: Audit All Pages
 * 
 * POST /api/firecrawl/audit-all
 * 
 * Performs SEO audit on all pages from the sitemap
 */

import { auditAllPages, generateAuditReport } from '@/lib/seoAuditService';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const result = await auditAllPages();
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }
    
    const report = generateAuditReport(result);
    
    return NextResponse.json({
      success: true,
      audit: result,
      report: report.report
    }, { status: 200 });
  } catch (error) {
    console.error('Audit all API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

