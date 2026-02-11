import { NextRequest, NextResponse } from 'next/server';
import { getManifest } from '@/lib/manifest';
import { logRequest } from '@/lib/logger';

// Force Node.js runtime (not Edge)
export const runtime = 'nodejs';

// Disable caching
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // Get the manifest with dynamic host replacement
    const manifest = getManifest(req);

    // Log the request
    logRequest(req, 200);

    // Return JSON response with proper headers
    return NextResponse.json(manifest, {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    // Log error
    console.error('Error serving UCP manifest:', error);
    logRequest(req, 500);

    return NextResponse.json(
      { error: 'Internal server error' },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
