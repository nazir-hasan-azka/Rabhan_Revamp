import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, Database, Lock, Activity } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {' '}
                Next.js Application
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Built for 1,000,000+ users with enterprise-grade security, performance, and
              scalability. Optimized for &lt;200ms response times and 99.99% uptime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/api/health"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              API Health Check
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with industry best practices and optimized for million-user scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="High Performance"
              description="<200ms API response times with optimized caching, CDN, and code splitting"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Enterprise Security"
              description="OWASP compliant with JWT auth, rate limiting, CSRF protection, and encryption"
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Global Scale"
              description="Multi-region deployment with auto-scaling and load balancing for 1M+ users"
            />
            <FeatureCard
              icon={<Database className="w-6 h-6" />}
              title="Optimized Database"
              description="PostgreSQL with read replicas, connection pooling, and query optimization"
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6" />}
              title="Data Protection"
              description="AES-256 encryption at rest, TLS 1.3 in transit, GDPR compliant"
            />
            <FeatureCard
              icon={<Activity className="w-6 h-6" />}
              title="Full Observability"
              description="Real-time monitoring, error tracking, and performance analytics"
            />
          </div>
        </section>
      </Suspense>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Technology Stack</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <TechStackColumn
              title="Frontend"
              items={[
                'Next.js 15 + React 19',
                'TypeScript + Strict Mode',
                'TailwindCSS + Radix UI',
                'Zustand + React Query',
                'PWA + Offline Support',
              ]}
            />
            <TechStackColumn
              title="Backend"
              items={[
                'Next.js API Routes',
                'Prisma ORM',
                'PostgreSQL + Redis',
                'JWT Authentication',
                'Rate Limiting',
              ]}
            />
            <TechStackColumn
              title="DevOps"
              items={[
                'GitHub Actions CI/CD',
                'ESLint + Prettier',
                'Jest + Playwright',
                'Bundle Analyzer',
                'Performance Monitoring',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Rabhan Revamp. Enterprise-grade architecture for 1M+ users.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/api/v1" className="text-muted-foreground hover:text-foreground">
                API
              </Link>
              <Link href="/api/health" className="text-muted-foreground hover:text-foreground">
                Health
              </Link>
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function TechStackColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-center">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
