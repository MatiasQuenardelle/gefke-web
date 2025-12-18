/**
 * API Route: Website Monitoring
 * 
 * POST /api/firecrawl/monitor
 * 
 * Body: { baseUrl: string, urls?: string[] }
 * 
 * Monitors website for SEO issues across multiple pages
 */

import { monitorWebsite } from '@/lib/firecrawl';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { baseUrl, urls } = body;
    
    if (!baseUrl && (!urls || urls.length === 0)) {
      return NextResponse.json(
        { error: 'Either baseUrl or urls array is required' },
        { status: 400 }
      );
    }
    
    // Validate baseUrl if provided
    if (baseUrl) {
      try {
        new URL(baseUrl);
      } catch (e) {
        return NextResponse.json(
          { error: 'Invalid baseUrl format' },
          { status: 400 }
        );
      }
    }
    
    // Validate URLs array if provided
    if (urls && Array.isArray(urls)) {
      for (const url of urls) {
        try {
          new URL(url);
        } catch (e) {
          return NextResponse.json(
            { error: `Invalid URL in urls array: ${url}` },
            { status: 400 }
          );
        }
      }
    }
    
    const result = await monitorWebsite(baseUrl || '', urls || []);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error, baseUrl: result.baseUrl },
        { status: 500 }
      );
    }
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Monitor API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

