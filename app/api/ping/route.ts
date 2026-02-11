import { NextRequest, NextResponse } from 'next/server';
import { logRequest } from '@/lib/logger';

// Force Node.js runtime (not Edge)
export const runtime = 'nodejs';

// Disable caching
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // Log the request
    logRequest(req, 200);

    // Return simple pong response
    return NextResponse.json(
      {
        status: 'ok',
        message: 'pong',
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error('Error in ping endpoint:', error);
    logRequest(req, 500);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
