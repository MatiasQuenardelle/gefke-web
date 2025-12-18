/**
 * API Route: SEO Audit
 * 
 * POST /api/firecrawl/audit
 * 
 * Body: { url: string }
 * 
 * Performs comprehensive SEO and AEO audit on a single page
 */

import { performSEOAudit } from '@/lib/firecrawl';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { url } = body;
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }
    
    // Validate URL
    try {
      new URL(url);
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }
    
    const result = await performSEOAudit(url);
    
    if (!result || !result.success) {
      return NextResponse.json(
        { 
          error: result?.error || 'Unknown error occurred', 
          url: result?.url || url,
          details: result
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Audit API error:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

