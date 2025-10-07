import { NextResponse } from 'next/server';

/**
 * API v1 Root Endpoint
 * Enterprise API versioning strategy
 */
export async function GET() {
  return NextResponse.json({
    version: 'v1',
    status: 'active',
    documentation: '/api/v1/docs',
    endpoints: {
      health: '/api/health',
      auth: '/api/v1/auth',
      users: '/api/v1/users',
    },
    rateLimit: {
      window: '1 minute',
      maxRequests: 1000,
    },
  });
}
