'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { ShoppingCartButton } from './ShoppingCartButton';
import { cn } from '@/lib/utils';

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'inline-flex items-center justify-center',
          'p-2 rounded-md text-rabhan-grey-700',
          'hover:bg-rabhan-grey-100 hover:text-rabhan-grey-900',
          'focus:outline-none focus:ring-2 focus:ring-rabhan-primary-400',
          'transition-colors duration-200'
        )}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          'fixed top-[116px] right-0 bottom-0 w-full max-w-sm',
          'bg-white shadow-2xl z-50',
          'transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          {/* Language Selector */}
          <div>
            <label className="block text-sm font-medium text-rabhan-grey-700 mb-2">
              Language
            </label>
            <LanguageSelector />
          </div>

          {/* Shopping Cart */}
          <div className="flex items-center gap-3">
            <ShoppingCartButton itemCount={0} />
            <span className="text-rabhan-base text-rabhan-grey-700">
              Shopping Cart
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-rabhan-grey-200" />

          {/* Auth Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
              >
                Register
              </Button>
            </Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-rabhan-grey-500 pt-6 border-t border-rabhan-grey-200">
            <p>© 2025 RABHAN</p>
            <p className="mt-1">Supporting Saudi Net Zero 2060</p>
          </div>
        </div>
      </div>
    </>
  );
}
