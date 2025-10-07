import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-poppins font-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rabhan-primary-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        // Primary Button - Filled teal background
        primary:
          'bg-rabhan-primary-400 text-white hover:bg-rabhan-primary-500 active:bg-rabhan-primary-600 shadow-sm rounded-[4px]',
        
        // Secondary Button - Outlined with teal border
        secondary:
          'border-2 border-rabhan-secondary-400 text-rabhan-grey-800 bg-white hover:bg-rabhan-secondary-50 active:bg-rabhan-secondary-100 rounded-[8px]',
        
        // Tertiary Button - Text only
        tertiary:
          'text-rabhan-grey-800 bg-transparent hover:bg-rabhan-grey-50 active:bg-rabhan-grey-100 rounded-[4px]',
        
        // Icon Buttons
        'icon-primary':
          'bg-rabhan-primary-400 text-white hover:bg-rabhan-primary-500 active:bg-rabhan-primary-600 shadow-sm rounded-[4px] p-3',
        
        'icon-secondary':
          'border-2 border-rabhan-secondary-400 text-rabhan-grey-800 bg-white hover:bg-rabhan-secondary-50 active:bg-rabhan-secondary-100 rounded-[8px] p-3',
        
        'icon-tertiary':
          'text-rabhan-grey-800 bg-transparent hover:bg-rabhan-grey-50 active:bg-rabhan-grey-100 rounded-[4px] p-3',
        
        // Destructive/Error Button
        destructive:
          'bg-rabhan-error-400 text-white hover:bg-rabhan-error-500 active:bg-rabhan-error-600 shadow-sm rounded-[4px]',
        
        // Success Button
        success:
          'bg-rabhan-success-400 text-white hover:bg-rabhan-success-500 active:bg-rabhan-success-600 shadow-sm rounded-[4px]',
      },
      size: {
        default: 'h-12 px-5 py-3 text-[20px] leading-[24px]', // h6 size from Figma
        sm: 'h-10 px-4 py-2 text-[16px] leading-[19px]', // base size
        lg: 'h-14 px-8 py-4 text-[25px] leading-[30px]', // lg size
        icon: 'h-12 w-12',
        'icon-sm': 'h-10 w-10',
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
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // If asChild is true, don't use leftIcon/rightIcon - they should be in the child component
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    // Regular button with icons
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {leftIcon && <span className="inline-flex items-center shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex items-center shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
