'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Language {
  code: string;
  name: string;
  flag: string;
  flagIcon?: string; // For actual flag icons
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(
    languages[0]
  );
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // TODO: Implement actual language change logic with i18n
    console.log('Language changed to:', language.code);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 h-[45px] w-[137px] px-2',
          'border border-rabhan-grey-100 rounded-[4px] bg-white',
          'hover:border-rabhan-primary-400 transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-rabhan-primary-400 focus:ring-offset-2',
          isOpen && 'border-rabhan-primary-400'
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        {/* Flag Icon */}
        <span className="text-xl flex-shrink-0 w-5 h-5 flex items-center justify-center">
          {selectedLanguage.flag}
        </span>

        {/* Language Name */}
        <span className="font-poppins text-[16px] leading-normal text-black flex-1 text-left">
          {selectedLanguage.name}
        </span>

        {/* Chevron Icon */}
        <ChevronDown
          className={cn(
            'w-6 h-6 text-black transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            'absolute top-full left-0 mt-2 w-[137px]',
            'bg-white border border-rabhan-grey-100 rounded-[4px]',
            'shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]',
            'animate-fade-in z-50 overflow-hidden'
          )}
          role="listbox"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={cn(
                'w-full flex items-center gap-2 px-2 py-2.5',
                'hover:bg-rabhan-primary-50 transition-colors duration-150',
                'first:rounded-t-[4px] last:rounded-b-[4px]',
                selectedLanguage.code === language.code &&
                  'bg-rabhan-primary-50 font-medium'
              )}
              role="option"
              aria-selected={selectedLanguage.code === language.code}
            >
              <span className="text-xl w-5 h-5 flex items-center justify-center">
                {language.flag}
              </span>
              <span className="font-poppins text-[16px] leading-normal text-black">
                {language.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
