import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 rounded-md text-rabhan-md font-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rabhan-primary-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-rabhan-primary-400 text-white hover:bg-rabhan-primary-500 active:bg-rabhan-primary-600 shadow-sm',
        secondary:
          'border-2 border-rabhan-secondary-400 text-rabhan-grey-800 bg-transparent hover:bg-rabhan-secondary-50 active:bg-rabhan-secondary-100',
        tertiary:
          'text-rabhan-grey-800 bg-transparent hover:bg-rabhan-grey-100 active:bg-rabhan-grey-200',
        'icon-primary':
          'bg-rabhan-primary-400 text-white hover:bg-rabhan-primary-500 active:bg-rabhan-primary-600 shadow-sm p-3 rounded-lg',
        'icon-secondary':
          'border-2 border-rabhan-secondary-400 text-rabhan-grey-800 bg-transparent hover:bg-rabhan-secondary-50 active:bg-rabhan-secondary-100 p-3',
        'icon-tertiary':
          'text-rabhan-grey-800 bg-transparent hover:bg-rabhan-grey-100 active:bg-rabhan-grey-200 p-3',
      },
      size: {
        default: 'h-12 px-5 py-3',
        sm: 'h-9 px-3 text-rabhan-base',
        lg: 'h-14 px-8 text-rabhan-lg',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {leftIcon && <span className="inline-flex">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
