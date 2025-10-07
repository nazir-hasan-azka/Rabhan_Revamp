import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-lg border bg-white px-4 py-3 text-rabhan-base font-poppins transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-rabhan-grey-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-rabhan-grey-100 focus-visible:border-rabhan-primary-400 focus-visible:ring-2 focus-visible:ring-rabhan-primary-400/20',
        error:
          'border-rabhan-error-400 focus-visible:border-rabhan-error-500 focus-visible:ring-2 focus-visible:ring-rabhan-error-400/20',
        success:
          'border-rabhan-success-400 focus-visible:border-rabhan-success-500 focus-visible:ring-2 focus-visible:ring-rabhan-success-400/20',
      },
      inputSize: {
        default: 'h-[79px]',
        sm: 'h-[60px] text-rabhan-sm',
        lg: 'h-[90px] text-rabhan-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      type = 'text',
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputVariant = error ? 'error' : variant;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            className={cn(
              'block text-rabhan-base font-medium text-rabhan-grey-800',
              disabled && 'opacity-50'
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-rabhan-grey-500">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant: inputVariant, inputSize }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? 'error-message' : helperText ? 'helper-text' : undefined
            }
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-rabhan-grey-500">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p
            id="error-message"
            className="text-rabhan-sm text-rabhan-error-400 animate-fade-in"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id="helper-text"
            className="text-rabhan-sm text-rabhan-grey-600"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
