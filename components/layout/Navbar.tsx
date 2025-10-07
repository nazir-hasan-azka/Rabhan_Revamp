'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { ShoppingCartButton } from './ShoppingCartButton';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)]',
        isScrolled && 'shadow-lg',
        className
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-[100px]">
        <div className="flex items-center justify-between h-[116px]">
          {/* Logo */}
          <Link
            href="/"
            className="relative h-[100px] w-[147px] flex-shrink-0 transition-transform hover:scale-105"
            aria-label="RABHAN Home"
          >
            <Image
              src="/images/rabhan-logo.svg"
              alt="RABHAN"
              fill
              className="object-contain"
              priority
              sizes="147px"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Shopping Cart */}
            <ShoppingCartButton itemCount={0} />

            {/* Register Button - Secondary Style */}
            <Link href="/register">
              <Button
                variant="secondary"
                size="default"
                className="h-12 w-[140px]"
              >
                Register
              </Button>
            </Link>

            {/* Login Button - Primary Style */}
            <Link href="/login">
              <Button
                variant="primary"
                size="default"
                className="h-12 w-[140px] rounded-[4px]"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
