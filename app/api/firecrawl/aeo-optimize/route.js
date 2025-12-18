/**
 * API Route: AEO Optimization
 * 
 * POST /api/firecrawl/aeo-optimize
 * 
 * Body: { url: string }
 * 
 * Analyzes and provides AEO optimization recommendations for a page
 */

import { optimizeForAEO } from '@/lib/aeoService';
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
    
    const result = await optimizeForAEO(url);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error, url: result.url },
        { status: 500 }
      );
    }
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('AEO optimize API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

