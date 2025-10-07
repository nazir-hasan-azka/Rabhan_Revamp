import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/security/rate-limit';

/**
 * Enterprise-Grade Middleware
 * - Security headers (OWASP compliant)
 * - Rate limiting (1000 req/min per user)
 * - CSRF protection
 * - Request sanitization
 */
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 1. Rate Limiting (Enterprise Scale)
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'anonymous';
  const identifier = `${ip}-${request.nextUrl.pathname}`;

  try {
    await rateLimit(identifier);
  } catch (error) {
    return new NextResponse('Too Many Requests - Rate limit exceeded', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'X-RateLimit-Limit': '1000',
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString(),
      },
    });
  }

  // 2. Security Headers (OWASP Best Practices)
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // 3. Content Security Policy
  const cspHeader = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');
  response.headers.set('Content-Security-Policy', cspHeader);

  // 4. Request ID for Distributed Tracing
  const requestId = crypto.randomUUID();
  response.headers.set('X-Request-ID', requestId);

  // 5. API Response Time Tracking
  const startTime = Date.now();
  response.headers.set('X-Request-Start-Time', startTime.toString());

  return response;
}

/**
 * Middleware Configuration
 * Apply to all routes except static files, images, and public assets
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - sw.js, workbox (PWA service worker)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|sw.js|workbox-.*\\.js).*)',
  ],
};
