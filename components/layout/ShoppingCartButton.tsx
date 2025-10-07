'use client';

import * as React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ShoppingCartButtonProps {
  itemCount?: number;
  className?: string;
}

export function ShoppingCartButton({
  itemCount = 0,
  className,
}: ShoppingCartButtonProps) {
  return (
    <Link
      href="/cart"
      className={cn(
        'relative inline-flex items-center justify-center',
        'bg-rabhan-primary-400 hover:bg-rabhan-primary-500',
        'active:bg-rabhan-primary-600',
        'rounded-[20px] p-3 transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-rabhan-primary-400 focus:ring-offset-2',
        'shadow-sm hover:shadow-md',
        className
      )}
      aria-label={`Shopping cart${itemCount > 0 ? ` with ${itemCount} items` : ''}`}
    >
      {/* Shopping Cart Icon */}
      <ShoppingCart className="w-6 h-6 text-white" strokeWidth={2} />

      {/* Item Count Badge */}
      {itemCount > 0 && (
        <span
          className={cn(
            'absolute -top-1.5 -right-1.5',
            'flex items-center justify-center',
            'min-w-[20px] h-5 px-1.5',
            'bg-rabhan-error-400 text-white',
            'text-xs font-semibold rounded-full',
            'shadow-md',
            'animate-fade-in'
          )}
          aria-live="polite"
          aria-atomic="true"
        >
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </Link>
  );
}
