/**
 * API Route: Test Firecrawl Connection
 * 
 * GET /api/firecrawl/test
 * 
 * Tests the Firecrawl API connection and returns status
 */

import { getFirecrawlApp } from '@/lib/firecrawl';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if API key is configured
    const apiKey = process.env.FIRECRAWL_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: 'Firecrawl API key not configured',
          configured: false
        },
        { status: 500 }
      );
    }
    
    // Try to initialize the app
    try {
      const app = getFirecrawlApp();
      return NextResponse.json({
        success: true,
        configured: true,
        message: 'Firecrawl API key is configured and app initialized',
        apiKeyPrefix: apiKey.substring(0, 5) + '...' // Show first 5 chars for verification
      });
    } catch (error) {
      return NextResponse.json(
        {
          error: 'Failed to initialize Firecrawl app',
          message: error.message,
          configured: true,
          initializationError: true
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        message: error.message 
      },
      { status: 500 }
    );
  }
}

