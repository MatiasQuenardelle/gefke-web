/**
 * API Route: Scrape Single URL
 * 
 * POST /api/firecrawl/scrape
 * 
 * Body: { url: string, options?: object }
 * 
 * Scrapes a single URL and returns the content
 */

import { scrapeUrl } from '@/lib/firecrawl';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, options } = body;
    
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
    
    const result = await scrapeUrl(url, options);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error, url: result.url },
        { status: 500 }
      );
    }
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Scrape API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

