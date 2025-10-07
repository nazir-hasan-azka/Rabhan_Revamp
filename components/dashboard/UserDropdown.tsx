'use client';

import * as React from 'react';
import Link from 'next/link';
import { User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserDropdown({ isOpen, onClose }: UserDropdownProps) {
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={cn(
        'absolute top-full right-0 mt-2 w-[105px] bg-white rounded-lg shadow-lg border border-[#dddddd] py-2 z-50',
        'animate-in fade-in slide-in-from-top-2 duration-200'
      )}
    >
      {/* Profile Option */}
      <Link
        href="/profile"
        onClick={onClose}
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors"
      >
        <User className="w-4 h-4 text-black" strokeWidth={2} />
        <span className="text-[12px] text-black font-poppins">Profile</span>
      </Link>

      {/* Logout Option */}
      <button
        onClick={() => {
          onClose();
          // Add logout logic here
          console.log('Logout clicked');
        }}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors text-left"
      >
        <LogOut className="w-4 h-4 text-black" strokeWidth={2} />
        <span className="text-[12px] text-black font-poppins">Logout</span>
      </button>
    </div>
  );
}
