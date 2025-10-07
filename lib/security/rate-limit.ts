import { env } from '@/lib/env';

/**
 * In-Memory Rate Limiter (Development)
 * For production, use Redis with ioredis
 *
 * Enterprise Rate Limiting:
 * - 1000 requests per minute per user (configurable)
 * - Sliding window algorithm
 * - Distributed across multiple instances using Redis
 */

interface RateLimitStore {
  count: number;
  resetTime: number;
}

// In-memory store for development
const rateLimitStore = new Map<string, RateLimitStore>();

/**
 * Rate Limiter Implementation
 * @param identifier - Unique identifier (IP + path or user ID)
 * @throws {Error} If rate limit is exceeded
 */
export async function rateLimit(identifier: string): Promise<void> {
  const now = Date.now();
  const windowMs = env.RATE_LIMIT_WINDOW; // 60000ms = 1 minute
  const maxRequests = env.RATE_LIMIT_MAX_REQUESTS; // 1000 requests

  // Get or create rate limit entry
  let entry = rateLimitStore.get(identifier);

  // Reset if window has passed
  if (!entry || now > entry.resetTime) {
    entry = {
      count: 1,
      resetTime: now + windowMs,
    };
    rateLimitStore.set(identifier, entry);
    return;
  }

  // Increment request count
  entry.count += 1;

  // Check if limit exceeded
  if (entry.count > maxRequests) {
    throw new Error('Rate limit exceeded');
  }

  // Cleanup old entries periodically (every 10 minutes)
  if (Math.random() < 0.01) {
    cleanupOldEntries();
  }
}

/**
 * Cleanup expired rate limit entries
 */
function cleanupOldEntries(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Get rate limit info for a specific identifier
 * @param identifier - Unique identifier
 * @returns Rate limit information
 */
export function getRateLimitInfo(identifier: string): {
  remaining: number;
  limit: number;
  reset: Date;
} {
  const entry = rateLimitStore.get(identifier);
  const maxRequests = env.RATE_LIMIT_MAX_REQUESTS;

  if (!entry) {
    return {
      remaining: maxRequests,
      limit: maxRequests,
      reset: new Date(Date.now() + env.RATE_LIMIT_WINDOW),
    };
  }

  return {
    remaining: Math.max(0, maxRequests - entry.count),
    limit: maxRequests,
    reset: new Date(entry.resetTime),
  };
}

/**
 * Redis-based Rate Limiter (Production)
 * Uncomment and configure when using Redis
 */
/*
import Redis from 'ioredis';

const redis = new Redis(env.REDIS_URL, {
  password: env.REDIS_PASSWORD,
  lazyConnect: true,
  maxRetriesPerRequest: 3,
});

export async function rateLimitRedis(identifier: string): Promise<void> {
  const key = `rate-limit:${identifier}`;
  const now = Date.now();
  const windowMs = env.RATE_LIMIT_WINDOW;
  const maxRequests = env.RATE_LIMIT_MAX_REQUESTS;

  // Use Redis pipeline for atomic operations
  const pipeline = redis.pipeline();

  // Remove expired entries
  pipeline.zremrangebyscore(key, 0, now - windowMs);

  // Count requests in current window
  pipeline.zcard(key);

  // Add current request
  pipeline.zadd(key, now, `${now}-${Math.random()}`);

  // Set expiry
  pipeline.expire(key, Math.ceil(windowMs / 1000));

  const results = await pipeline.exec();

  if (!results) {
    throw new Error('Redis pipeline failed');
  }

  const count = results[1][1] as number;

  if (count >= maxRequests) {
    throw new Error('Rate limit exceeded');
  }
}
*/
