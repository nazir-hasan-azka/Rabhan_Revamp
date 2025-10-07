'use client';

import * as React from 'react';
import { 
  Search,
  Bell,
  ShoppingCart,
  ChevronDown
} from 'lucide-react';
import { UserDropdown } from './UserDropdown';

interface DashboardHeaderProps {
  userName?: string;
  userEmail?: string;
  cartItemCount?: number;
}

export function DashboardHeader({ 
  userName = 'Fayaz rahman',
  userEmail = 'fayazrahman.....',
  cartItemCount = 2
}: DashboardHeaderProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // Get user initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="h-[80px] border-b border-[#dddddd] bg-white flex items-center justify-between px-6 ml-[258px] fixed top-0 right-0 left-0 z-40">
      {/* Search Bar */}
      <div className="relative w-[555px]">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-[45px] pl-4 pr-12 border border-[#dddddd] rounded-lg text-[16px] text-[#666666] font-poppins placeholder:text-[#666666] focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 transition-all"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#aaaaaa]" />
      </div>

      {/* Right Side - Icons and User */}
      <div className="flex items-center gap-6">
        {/* Shopping Cart with Badge */}
        <button className="relative hover:opacity-80 transition-opacity">
          <ShoppingCart className="w-6 h-6 text-black" strokeWidth={2} />
          {cartItemCount > 0 && (
            <div className="absolute -top-1 -right-1 w-[12px] h-[12px] bg-[#42B2B1] rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-medium font-poppins leading-none">
                {cartItemCount}
              </span>
            </div>
          )}
        </button>

        {/* Notifications */}
        <button className="relative hover:opacity-80 transition-opacity">
          <Bell className="w-6 h-6 text-black" strokeWidth={2} />
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {/* Avatar */}
            <div className="w-[42px] h-[42px] rounded-full bg-[#68c1c1] flex items-center justify-center">
              <span className="text-[20px] text-white font-poppins">
                {getInitials(userName)}
              </span>
            </div>

            {/* User Info */}
            <div className="flex flex-col items-start">
              <span className="text-[12px] text-black font-poppins leading-tight">
                {userName}
              </span>
              <span className="text-[10px] text-[#aaaaaa] font-poppins leading-tight">
                {userEmail}
              </span>
            </div>

            {/* Dropdown Icon */}
            <ChevronDown 
              className={`w-6 h-6 text-black transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {/* Dropdown Menu */}
          <UserDropdown 
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
