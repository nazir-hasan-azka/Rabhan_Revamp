'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home,
  Calculator,
  FileText,
  DollarSign,
  ShoppingCart,
  File,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Solar Calculator', href: '/calculator', icon: Calculator },
  { name: 'Quote Request', href: '/quote-request', icon: FileText },
  { name: 'Financing', href: '/financing', icon: DollarSign },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
  { name: 'Documents', href: '/documents', icon: File },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[258px] h-screen bg-[#f5ffff] border-r border-[#dddddd] flex flex-col p-6 gap-7 fixed left-0 top-0 z-50">
      {/* Logo */}
      <Link href="/" className="w-[147px] h-[100px] relative flex-shrink-0">
        <Image
          src="/images/rabhan-logo.svg"
          alt="RABHAN"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-0">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 p-2 rounded-lg transition-colors',
                isActive
                  ? 'bg-[#b3e0e0]'
                  : 'hover:bg-[#b3e0e0]/50'
              )}
            >
              <Icon className="w-6 h-6 text-black" strokeWidth={2} />
              <span className={cn(
                'text-[20px] text-black font-poppins',
                isActive ? 'font-medium' : 'font-normal'
              )}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
