'use client';

import * as React from 'react';
import { Calculator } from 'lucide-react';

type ClientType = 'residential' | 'commercial';
type InputMethod = 'usage' | 'bill';

export default function DashboardCalculatorPage() {
  const [clientType, setClientType] = React.useState<ClientType>('residential');
  const [inputMethod, setInputMethod] = React.useState<InputMethod>('usage');
  const [inputValue, setInputValue] = React.useState('8000');
  const [paymentPeriod, setPaymentPeriod] = React.useState(12);

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
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-black font-poppins mb-8">
          Solar Calculator
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div>
            {/* Client Type */}
            <div className="mb-8">
              <label className="block text-xl text-black font-poppins mb-4">
                Select Client Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setClientType('residential')}
                  className={`h-16 rounded-lg flex items-center gap-4 px-4 transition-all ${
                    clientType === 'residential'
                      ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                      : 'bg-[#eeeeee] border-0'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    clientType === 'residential' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                  }`}>
                    {clientType === 'residential' && (
                      <div className="w-2 h-2 rounded-full bg-[#42b2b1]" />
                    )}
                  </div>
                  <span className="text-xl font-medium text-black font-poppins">
                    🏠 Residential
                  </span>
                </button>

                <button
                  onClick={() => setClientType('commercial')}
                  className={`h-16 rounded-lg flex items-center gap-4 px-4 transition-all ${
                    clientType === 'commercial'
                      ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                      : 'bg-[#eeeeee] border-0'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    clientType === 'commercial' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                  }`}>
                    {clientType === 'commercial' && (
                      <div className="w-2 h-2 rounded-full bg-[#42b2b1]" />
                    )}
                  </div>
                  <span className="text-xl text-black font-poppins">
                    🏢 Commercial
                  </span>
                </button>
              </div>
            </div>

            {/* Input Method */}
            <div className="mb-8">
              <label className="block text-xl text-black font-poppins mb-4">
                Choose the Input Method (Monthly)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setInputMethod('usage')}
                  className={`h-16 rounded-lg flex items-center gap-4 px-4 transition-all ${
                    inputMethod === 'usage'
                      ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                      : 'bg-[#eeeeee] border-0'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    inputMethod === 'usage' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                  }`}>
                    {inputMethod === 'usage' && (
                      <div className="w-2 h-2 rounded-full bg-[#42b2b1]" />
                    )}
                  </div>
                  <span className="text-xl font-medium text-black font-inter">
                    ⚡ Usage (KWH)
                  </span>
                </button>

                <button
                  onClick={() => setInputMethod('bill')}
                  className={`h-16 rounded-lg flex items-center gap-4 px-4 transition-all ${
                    inputMethod === 'bill'
                      ? 'bg-[#f5ffff] border-2 border-[#3eb2b1]'
                      : 'bg-[#eeeeee] border-0'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    inputMethod === 'bill' ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                  }`}>
                    {inputMethod === 'bill' && (
                      <div className="w-2 h-2 rounded-full bg-[#42b2b1]" />
                    )}
                  </div>
                  <span className="text-xl text-black font-poppins">
                    💵 Bill (SAR)
                  </span>
                </button>
              </div>
            </div>

            {/* Enter Value */}
            <div className="mb-8">
              <label className="block text-xl text-black font-poppins mb-4">
                Enter Value
              </label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full h-16 px-4 border border-[#b5b5b5] rounded-lg text-xl text-black font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
              />
              <p className="mt-2 text-sm text-[#868686] font-poppins">
                Enter between 6,000 - 24,000 KWH
              </p>
            </div>

            {/* Payment Period */}
            <div className="mb-8">
              <label className="block text-xl text-black font-poppins mb-4">
                Payment Period
              </label>
              <div className="relative w-full">
                <input
                  type="range"
                  min="12"
                  max="30"
                  step="6"
                  value={paymentPeriod}
                  onChange={(e) => setPaymentPeriod(Number(e.target.value))}
                  className="w-full h-2 bg-[#cccccc] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#42b2b1]"
                />
                <div className="flex justify-between mt-4">
                  {[12, 18, 24, 30].map((period) => (
                    <div key={period} className="text-center">
                      <p className="text-sm text-black font-poppins">{period}</p>
                      <p className="text-sm text-black font-poppins">Month</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="w-full h-14 bg-[#42b2b1] rounded flex items-center justify-center gap-3 text-lg text-white font-poppins hover:bg-[#358e8e] transition-colors"
            >
              <Calculator className="w-5 h-5" strokeWidth={2} />
              Calculate the value
            </button>
          </div>

          {/* Right Column - Results */}
          <div>
            {/* Headline */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#358e8e] font-poppins mb-4 leading-tight">
                Save more than 26% of the system value and own it for life
              </h2>
              <p className="text-lg font-medium text-black font-poppins">
                By paying just 81% plus on your electricity monthly bill for only 12 months
              </p>
            </div>

            {/* Price Summary */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📊</span>
                  <p className="text-xl font-semibold text-black font-poppins">
                    System Price
                  </p>
                </div>
                <p className="text-xl font-semibold text-[#007d7d] font-poppins">
                  SAR {results.systemPrice.toLocaleString()}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📅</span>
                  <p className="text-xl font-semibold text-black font-poppins">
                    Monthly Payment
                  </p>
                </div>
                <p className="text-xl font-semibold text-[#007d7d] font-poppins">
                  SAR {results.monthlyPayment.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Details Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-[#dddddd] rounded-lg p-4">
                <div className="flex justify-center mb-3">
                  <span className="text-3xl">☀️</span>
                </div>
                <p className="text-base font-medium text-black font-poppins text-center mb-2">
                  System Size
                </p>
                <p className="text-xl font-medium text-black font-poppins text-center">
                  {results.systemSize}
                </p>
              </div>

              <div className="bg-white border border-[#dddddd] rounded-lg p-4">
                <div className="flex justify-center mb-3">
                  <span className="text-3xl">📄</span>
                </div>
                <p className="text-base font-medium text-black font-poppins text-center mb-2 leading-tight">
                  Average Electricity Monthly Bill
                </p>
                <p className="text-xl font-medium text-black font-poppins text-center">
                  SAR {results.avgElectricityBill.toLocaleString()}
                </p>
              </div>

              <div className="bg-white border border-[#dddddd] rounded-lg p-4">
                <div className="flex justify-center mb-3">
                  <span className="text-3xl">🔋</span>
                </div>
                <p className="text-base font-medium text-black font-poppins text-center mb-2 leading-tight">
                  Average Monthly Power Production
                </p>
                <p className="text-xl font-medium text-black font-poppins text-center">
                  {results.avgPowerProduction}
                </p>
              </div>
            </div>

            {/* Get Quote Button */}
            <div className="flex justify-center">
              <button className="h-12 px-8 border border-[#007d7d] rounded-lg text-lg text-[#222222] font-poppins hover:bg-[#007d7d] hover:text-white transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
