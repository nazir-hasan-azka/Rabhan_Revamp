'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Trophy, Star, ChevronRight, ShoppingCart, ChevronDown } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="h-[116px] bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-[100px]">
          {/* Logo */}
          <Link href="/" className="block">
            <div className="w-[147px] h-[100px] relative">
              <Image
                src="/logo.png"
                alt="Rabhan"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right Side Navigation */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button className="h-[45px] w-[137px] border border-[#dddddd] rounded-[4px] flex items-center gap-2 px-3">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/flags/uk.png"
                    alt="English"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <span className="text-[16px] text-black font-poppins">English</span>
                <ChevronDown className="w-5 h-5 text-black ml-auto" strokeWidth={2} />
              </button>
            </div>

            {/* Cart */}
            <button className="w-[48px] h-[48px] bg-[#42b2b1] rounded-[20px] flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" strokeWidth={2} />
            </button>

            {/* Register Button */}
            <Link
              href="/register"
              className="h-[48px] w-[140px] border border-[#007d7d] rounded-[8px] flex items-center justify-center text-[20px] text-[#222222] font-poppins hover:bg-[#007d7d] hover:text-white transition-colors"
            >
              Register
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="h-[48px] w-[140px] bg-[#42b2b1] rounded-[4px] flex items-center justify-center text-[20px] text-white font-poppins hover:bg-[#358e8e] transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[116px]">
        <div className="max-w-[1920px] mx-auto px-[100px] py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-[48px] font-semibold text-black font-poppins mb-4">
              Welcome to Rabhan
            </h1>
            <p className="text-[20px] font-medium text-[#aaaaaa] font-poppins">
              A winning platform for everyone!
            </p>
          </div>

          {/* Registration Cards */}
          <div className="grid grid-cols-2 gap-8 max-w-[1363px] mx-auto">
            {/* Consumer Registration Card */}
            <div className="border border-[#dddddd] rounded-[12px] p-12 bg-white">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-[92px] h-[92px] relative">
                  <Home className="w-full h-full text-[#42b2b1]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[32px] font-medium text-black font-poppins text-center mb-4">
                Consumer Registration
              </h2>

              {/* Subtitle */}
              <p className="text-[20px] text-[#aaaaaa] font-poppins text-center mb-10">
                Transform Your Premises with Rabhan
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Smart Energy Estimations
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Flexible BNPL Financing
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Instant Approvals
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Real-Time Monitoring
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/register/consumer"
                className="w-full h-[48px] bg-[#42b2b1] rounded-[4px] flex items-center justify-center gap-2 text-[20px] text-white font-poppins hover:bg-[#358e8e] transition-colors"
              >
                Dive into Rabhan
                <ChevronRight className="w-6 h-6" strokeWidth={2} />
              </Link>
            </div>

            {/* Vendor & Contractor Registration Card */}
            <div className="border border-[#dddddd] rounded-[12px] p-12 bg-white">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-[92px] h-[92px] relative">
                  <Trophy className="w-full h-full text-[#42b2b1]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[32px] font-medium text-black font-poppins text-center mb-4">
                Vendor & Contractor Registration
              </h2>

              {/* Subtitle */}
              <p className="text-[20px] text-[#aaaaaa] font-poppins text-center mb-10">
                Grow Business with Rabhan
              </p>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Digital Marketplace
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Smart Customer Matching
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Business Analytics
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-[#42b2b1] flex-shrink-0" strokeWidth={2} fill="#42b2b1" />
                  <span className="text-[16px] text-[#222222] font-poppins">
                    Certification & Verification
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/register/vendor"
                className="w-full h-[48px] bg-[#42b2b1] rounded-[4px] flex items-center justify-center gap-2 text-[20px] text-white font-poppins hover:bg-[#358e8e] transition-colors"
              >
                Join Rabhan Network
                <ChevronRight className="w-6 h-6" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
