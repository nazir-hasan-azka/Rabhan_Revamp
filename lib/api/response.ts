import { NextResponse } from 'next/server';

/**
 * Standardized API Response Handlers
 * Enterprise-grade error handling and response formatting
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    requestId: string;
    timestamp: string;
    version: string;
  };
}

/**
 * Success Response
 */
export function successResponse<T>(data: T, status = 200): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      meta: {
        requestId: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        version: 'v1',
      },
    },
    { status }
  );
}

/**
 * Error Response
 */
export function errorResponse(
  code: string,
  message: string,
  status = 400,
  details?: unknown
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message,
        details,
      },
      meta: {
        requestId: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        version: 'v1',
      },
    },
    { status }
  );
}

/**
 * Validation Error Response
 */
export function validationError(errors: unknown): NextResponse<ApiResponse> {
  return errorResponse('VALIDATION_ERROR', 'Validation failed', 422, errors);
}

/**
 * Unauthorized Error Response
 */
export function unauthorizedError(message = 'Unauthorized'): NextResponse<ApiResponse> {
  return errorResponse('UNAUTHORIZED', message, 401);
}

/**
 * Forbidden Error Response
 */
export function forbiddenError(message = 'Forbidden'): NextResponse<ApiResponse> {
  return errorResponse('FORBIDDEN', message, 403);
}

/**
 * Not Found Error Response
 */
export function notFoundError(message = 'Resource not found'): NextResponse<ApiResponse> {
  return errorResponse('NOT_FOUND', message, 404);
}

/**
 * Rate Limit Error Response
 */
export function rateLimitError(retryAfter = 60): NextResponse<ApiResponse> {
  const response = errorResponse('RATE_LIMIT_EXCEEDED', 'Too many requests', 429);
  response.headers.set('Retry-After', retryAfter.toString());
  return response;
}

/**
 * Internal Server Error Response
 */
export function serverError(
  message = 'Internal server error',
  details?: unknown
): NextResponse<ApiResponse> {
  // Log error details for monitoring
  console.error('Server Error:', { message, details });
  return errorResponse('INTERNAL_ERROR', message, 500, details);
}
