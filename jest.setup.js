import '@testing-library/jest-dom';

// Mock environment variables for testing
process.env.NODE_ENV = 'test';
process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000';
process.env.DATABASE_URL = 'file:./test.db';
process.env.NEXTAUTH_URL = 'http://localhost:3000';
process.env.NEXTAUTH_SECRET = 'test-secret-key-for-testing-only-32chars';
process.env.ENCRYPTION_KEY = 'test-encryption-key-32-chars-min';
process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing';
