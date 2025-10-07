'use client';

import * as React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

export default function QuoteRequestPage() {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[258px]">
        {/* Header */}
        <DashboardHeader />

        {/* Main Content */}
        <main className="flex-1 overflow-auto mt-[80px]">
          {/* Header Section */}
          <div className="px-6 py-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-[38px] font-semibold text-black font-poppins mb-2">
                  Solar Quotes
                </h1>
                <p className="text-[16px] text-[#666666] font-poppins max-w-3xl">
                  Request quotes from verified contractors and compare offers for your solar installation
                </p>
              </div>

              {/* New Request Button */}
              <Link href="/quote-request/new">
                <button className="flex items-center gap-2 h-[48px] px-4 bg-[#42B2B1] hover:bg-[#358e8e] text-white rounded-[4px] transition-colors whitespace-nowrap">
                  <Plus className="w-6 h-6" strokeWidth={2} />
                  <span className="text-[20px] font-poppins">New Request</span>
                </button>
              </Link>
            </div>

            {/* Empty State Container */}
            <div className="border border-[#dddddd] rounded-[8px] h-[502px] flex flex-col items-center justify-center">
              {/* Empty State Icon */}
              <div className="mb-6">
                <svg
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#42B2B1]"
                >
                  {/* Document Icon */}
                  <rect
                    x="24"
                    y="16"
                    width="64"
                    height="96"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                  <line
                    x1="36"
                    y1="32"
                    x2="76"
                    y2="32"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="36"
                    y1="48"
                    x2="68"
                    y2="48"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="36"
                    y1="64"
                    x2="76"
                    y2="64"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="36"
                    y1="80"
                    x2="60"
                    y2="80"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Magnifying Glass */}
                  <circle
                    cx="84"
                    cy="84"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="white"
                  />
                  <line
                    x1="98"
                    y1="98"
                    x2="112"
                    y2="112"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* X mark inside magnifying glass */}
                  <line
                    x1="78"
                    y1="78"
                    x2="90"
                    y2="90"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="90"
                    y1="78"
                    x2="78"
                    y2="90"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Empty State Text */}
              <h2 className="text-[24px] font-medium text-[#42B2B1] font-poppins mb-4 text-center">
                No quote requests yet
              </h2>
              
              <p className="text-[20px] text-[#666666] font-poppins text-center max-w-[744px] px-4 leading-relaxed">
                Get started by requesting quotes from certified contractors in your area.
                It's free and takes just a few minutes.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
