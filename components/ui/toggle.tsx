'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: 'default' | 'sm' | 'lg';
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked = false,
      onCheckedChange,
      disabled,
      size = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    React.useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const handleToggle = () => {
      if (disabled) return;
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onCheckedChange?.(newChecked);
    };

    const sizeClasses = {
      sm: 'w-[60px] h-[32px]',
      default: 'w-[77px] h-[41px]',
      lg: 'w-[90px] h-[48px]',
    };

    const thumbSizeClasses = {
      sm: 'w-[28px] h-[28px]',
      default: 'w-[37px] h-[37px]',
      lg: 'w-[44px] h-[44px]',
    };

    return (
      <button
        ref={ref}
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          'relative inline-flex items-center rounded-full transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rabhan-primary-400 focus-visible:ring-offset-2',
          sizeClasses[size],
          isChecked
            ? 'bg-rabhan-primary-400 hover:bg-rabhan-primary-500'
            : 'bg-rabhan-grey-300 hover:bg-rabhan-grey-400',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'inline-block rounded-full bg-white shadow-md transition-transform duration-200',
            thumbSizeClasses[size],
            isChecked
              ? size === 'sm'
                ? 'translate-x-[30px]'
                : size === 'lg'
                ? 'translate-x-[44px]'
                : 'translate-x-[38px]'
              : 'translate-x-[2px]'
          )}
        />
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle };
