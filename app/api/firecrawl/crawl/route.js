/**
 * API Route: Crawl Website
 * 
 * POST /api/firecrawl/crawl
 * 
 * Body: { baseUrl: string, options?: object }
 * 
 * Crawls an entire website starting from the base URL
 */

import { crawlWebsite } from '@/lib/firecrawl';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { baseUrl, options } = body;
    
    if (!baseUrl) {
      return NextResponse.json(
        { error: 'baseUrl is required' },
        { status: 400 }
      );
    }
    
    // Validate URL
    try {
      new URL(baseUrl);
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }
    
    const result = await crawlWebsite(baseUrl, options);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error, baseUrl: result.baseUrl },
        { status: 500 }
      );
    }
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Crawl API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

