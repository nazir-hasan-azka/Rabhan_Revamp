'use client';

import * as React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[258px]">
        {/* Header */}
        <DashboardHeader />

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto p-10 mt-[80px]">
          {/* Page Title */}
          <h1 className="text-[38px] font-semibold text-black font-poppins mb-8">
            Dashboard
          </h1>

          {/* Coming Soon Section */}
          <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 300px)' }}>
            <div className="relative">
              {/* Coming Soon Graphic */}
              <div className="relative w-[328px] h-[328px] flex items-center justify-center">
                {/* Top Diamond */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rotate-45 bg-gradient-to-br from-[#42B2B1] to-[#68c1c1] rounded-lg shadow-lg z-10"></div>
                
                {/* Main Badge */}
                <div className="relative bg-white border-8 border-black rounded-3xl px-12 py-8 shadow-2xl z-20">
                  <div className="text-center">
                    <h2 className="text-7xl font-black text-black font-poppins leading-none tracking-tight">
                      COMING
                    </h2>
                    <h2 className="text-7xl font-black text-black font-poppins leading-none tracking-tight mt-2">
                      SOON
                    </h2>
                  </div>
                </div>

                {/* Bottom Diamond */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rotate-45 bg-gradient-to-br from-[#42B2B1] to-[#68c1c1] rounded-lg shadow-lg z-10"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
