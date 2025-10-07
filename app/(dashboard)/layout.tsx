import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - RABHAN',
  description: 'User dashboard for managing solar energy solutions',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
