import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from '@/components/providers';

import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RABHAN - Buy Now Pay Later for Solar Energy',
    template: '%s | RABHAN',
  },
  description: 'Enterprise BNPL platform for solar energy solutions in Saudi Arabia. Supporting Net Zero 2060 vision.',
  keywords: ['solar energy', 'BNPL', 'Saudi Arabia', 'renewable energy', 'financing'],
  authors: [{ name: 'Azkashine' }],
  creator: 'Azkashine',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'RABHAN - Solar Energy BNPL Platform',
    description: 'Buy Now Pay Later for solar energy solutions in Saudi Arabia',
    siteName: 'RABHAN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RABHAN - Solar Energy BNPL',
    description: 'Buy Now Pay Later for solar energy solutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#42B2B1' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
