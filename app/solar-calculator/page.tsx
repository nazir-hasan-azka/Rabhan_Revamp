'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ShoppingCart, Calculator } from 'lucide-react';

type ClientType = 'residential' | 'commercial';
type InputMethod = 'usage' | 'bill';

export default function PublicSolarCalculatorPage() {
  const [clientType, setClientType] = React.useState<ClientType>('residential');
  const [inputMethod, setInputMethod] = React.useState<InputMethod>('usage');
  const [inputValue, setInputValue] = React.useState('8000');
  const [paymentPeriod, setPaymentPeriod] = React.useState(12);

  // Calculation results (mock data)
  const results = {
    systemPrice: 22000,
    monthlyPayment: 3038,
    systemSize: '10 KWP',
    avgElectricityBill: 1680,
    avgPowerProduction: '1,583 KWH',
  };

  const handleCalculate = () => {
    console.log('Calculate:', {
      clientType,
      inputMethod,
      inputValue,
      paymentPeriod,
    });
    // Perform calculations here
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Cyan Background Section */}
      <div className="absolute left-[912px] top-0 w-[1008px] h-[1080px] bg-[#f5ffff] -z-10" />

      {/* Header */}
      <header className="h-[116px] bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-4 md:px-[100px]">
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
            <div className="relative hidden md:block">
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
        <div className="max-w-[1920px] mx-auto px-4 md:px-[100px] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="relative z-10">
              {/* Title */}
              <h1 className="text-3xl md:text-[48px] font-semibold text-black font-poppins mb-8">
                Solar Calculator
              </h1>

              {/* Client Type */}
              <div className="mb-8">
                <label className="block text-lg md:text-[20px] text-black font-poppins mb-4">
                  Select Client Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setClientType('residential')}
                    className={`h-[72px] rounded-[8px] flex items-center gap-4 px-4 transition-all ${
                      clientType === 'residential'
                        ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                        : 'bg-[#eeeeee] border-0'
                    }`}
                  >
                    <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                      clientType === 'residential' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                    }`}>
                      {clientType === 'residential' && (
                        <div className="w-[10px] h-[10px] rounded-full bg-[#42b2b1]" />
                      )}
                    </div>
                    <span className="text-xl md:text-[24px] font-medium text-black font-poppins ml-2">
                      🏠 Residential
                    </span>
                  </button>

                  <button
                    onClick={() => setClientType('commercial')}
                    className={`h-[72px] rounded-[8px] flex items-center gap-4 px-4 transition-all ${
                      clientType === 'commercial'
                        ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                        : 'bg-[#eeeeee] border-0'
                    }`}
                  >
                    <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                      clientType === 'commercial' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                    }`}>
                      {clientType === 'commercial' && (
                        <div className="w-[10px] h-[10px] rounded-full bg-[#42b2b1]" />
                      )}
                    </div>
                    <span className="text-xl md:text-[24px] text-black font-poppins ml-2">
                      🏢 Commercial
                    </span>
                  </button>
                </div>
              </div>

              {/* Input Method */}
              <div className="mb-8">
                <label className="block text-lg md:text-[20px] text-black font-poppins mb-4">
                  Choose the Input Method (Monthly)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setInputMethod('usage')}
                    className={`h-[72px] rounded-[8px] flex items-center gap-4 px-4 transition-all ${
                      inputMethod === 'usage'
                        ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                        : 'bg-[#eeeeee] border-0'
                    }`}
                  >
                    <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                      inputMethod === 'usage' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                    }`}>
                      {inputMethod === 'usage' && (
                        <div className="w-[10px] h-[10px] rounded-full bg-[#42b2b1]" />
                      )}
                    </div>
                    <span className="text-xl md:text-[24px] font-medium text-black font-inter ml-2">
                      ⚡ Usage (KWH)
                    </span>
                  </button>

                  <button
                    onClick={() => setInputMethod('bill')}
                    className={`h-[72px] rounded-[8px] flex items-center gap-4 px-4 transition-all ${
                      inputMethod === 'bill'
                        ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                        : 'bg-[#eeeeee] border-0'
                    }`}
                  >
                    <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                      inputMethod === 'bill' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                    }`}>
                      {inputMethod === 'bill' && (
                        <div className="w-[10px] h-[10px] rounded-full bg-[#42b2b1]" />
                      )}
                    </div>
                    <span className="text-xl md:text-[24px] text-black font-poppins ml-2">
                      💵 Bill (SAR)
                    </span>
                  </button>
                </div>
              </div>

              {/* Enter Value */}
              <div className="mb-8">
                <label className="block text-lg md:text-[20px] text-black font-poppins mb-4">
                  Enter Value
                </label>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full max-w-[563px] h-[69px] px-4 border border-[#b5b5b5] rounded-[10px] text-lg md:text-[20px] text-black font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                />
                <p className="mt-2 text-sm md:text-[14px] text-[#868686] font-poppins">
                  Enter between 6,000 - 24,000 KWH
                </p>
              </div>

              {/* Payment Period */}
              <div className="mb-8">
                <label className="block text-lg md:text-[20px] text-black font-poppins mb-4">
                  Payment Period
                </label>
                <div className="relative w-full max-w-[550px]">
                  <input
                    type="range"
                    min="12"
                    max="30"
                    step="6"
                    value={paymentPeriod}
                    onChange={(e) => setPaymentPeriod(Number(e.target.value))}
                    className="w-full h-[10px] bg-[#cccccc] rounded-[10px] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#42b2b1] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                  />
                  <div className="flex justify-between mt-4">
                    {[12, 18, 24, 30].map((period) => (
                      <div key={period} className="text-center">
                        <p className="text-sm md:text-[16px] text-black font-poppins">{period}</p>
                        <p className="text-sm md:text-[16px] text-black font-poppins">Month</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="w-full max-w-[584px] h-[59px] bg-[#42b2b1] rounded-[4px] flex items-center justify-center gap-3 text-lg md:text-[20px] text-white font-poppins hover:bg-[#358e8e] transition-colors"
              >
                <Calculator className="w-6 h-6" strokeWidth={2} />
                Calculate the value
              </button>
            </div>

            {/* Right Column - Results */}
            <div className="relative z-10">
              {/* Headline */}
              <div className="mb-12 mt-0 lg:mt-16">
                <h2 className="text-2xl md:text-[38px] font-bold text-[#358e8e] font-poppins mb-4 leading-tight">
                  Save more than 26% of the system value and own it for life
                </h2>
                <p className="text-lg md:text-[20px] font-medium text-black font-poppins">
                  By paying just 81% plus on your electricity monthly bill for only 12 months
                </p>
              </div>

              {/* Price Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[32px]">📊</span>
                    <p className="text-xl md:text-[24px] font-semibold text-black font-poppins">
                      System Price
                    </p>
                  </div>
                  <p className="text-xl md:text-[24px] font-semibold text-[#007d7d] font-poppins">
                    SAR {results.systemPrice.toLocaleString()}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[32px]">📅</span>
                    <p className="text-xl md:text-[24px] font-semibold text-black font-poppins">
                      Monthly Payment
                    </p>
                  </div>
                  <p className="text-xl md:text-[24px] font-semibold text-[#007d7d] font-poppins">
                    SAR {results.monthlyPayment.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Details Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* System Size */}
                <div className="bg-white border border-[#dddddd] rounded-[10px] p-6">
                  <div className="flex justify-center mb-4">
                    <span className="text-[36px]">☀️</span>
                  </div>
                  <p className="text-lg md:text-[20px] font-medium text-black font-poppins text-center mb-4">
                    System Size
                  </p>
                  <p className="text-xl md:text-[24px] font-medium text-black font-poppins text-center">
                    {results.systemSize}
                  </p>
                </div>

                {/* Average Bill */}
                <div className="bg-white border border-[#dddddd] rounded-[10px] p-6">
                  <div className="flex justify-center mb-4">
                    <span className="text-[36px]">📄</span>
                  </div>
                  <p className="text-lg md:text-[20px] font-medium text-black font-poppins text-center mb-4">
                    Average Electricity Monthly Bill
                  </p>
                  <p className="text-xl md:text-[24px] font-medium text-black font-poppins text-center">
                    SAR {results.avgElectricityBill.toLocaleString()}
                  </p>
                </div>

                {/* Average Production */}
                <div className="bg-white border border-[#dddddd] rounded-[10px] p-6">
                  <div className="flex justify-center mb-4">
                    <span className="text-[36px]">🔋</span>
                  </div>
                  <p className="text-lg md:text-[20px] font-medium text-black font-poppins text-center mb-4">
                    Average Monthly Power Production
                  </p>
                  <p className="text-xl md:text-[24px] font-medium text-black font-poppins text-center">
                    {results.avgPowerProduction}
                  </p>
                </div>
              </div>

              {/* Get Quote Button */}
              <div className="flex justify-center">
                <Link
                  href="/quote"
                  className="h-[48px] w-[140px] border border-[#007d7d] rounded-[8px] flex items-center justify-center text-lg md:text-[20px] text-[#222222] font-poppins hover:bg-[#007d7d] hover:text-white transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
