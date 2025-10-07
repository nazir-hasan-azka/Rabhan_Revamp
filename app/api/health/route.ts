import { NextResponse } from 'next/server';

/**
 * Health Check Endpoint
 * Used for load balancer health checks and monitoring
 * Enterprise requirement: <200ms response time
 */
export async function GET() {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: {
      used: Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100,
      total: Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100,
    },
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0',
  };

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Health-Check': 'ok',
    },
  });
}
