'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Building2, Factory, Building, ChevronDown, ShoppingCart } from 'lucide-react';

type ConsumerCategory = 'resident' | 'commercial' | 'industry' | 'government';

export default function ConsumerRegisterPage() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    category: 'resident' as ConsumerCategory,
    email: '',
    phoneCountry: 'SA +966',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consumer Registration:', formData);
    // Handle registration logic
  };

  const categories = [
    { id: 'resident', label: 'Resident', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building2 },
    { id: 'industry', label: 'Industry', icon: Factory },
    { id: 'government', label: 'Government', icon: Building },
  ];

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

            {/* Register Button - Active */}
            <button className="h-[48px] w-[140px] bg-[#007d7d] rounded-[4px] flex items-center justify-center text-[20px] text-white font-poppins">
              Register
            </button>

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
        <div className="max-w-[1920px] mx-auto px-[100px] py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-[48px] font-semibold text-[#42b2b1] font-poppins mb-4">
              Create Your Account
            </h1>
            <p className="text-[24px] font-medium text-[#444444] font-poppins">
              Join RABHAN Solar BNPL Platform
            </p>
          </div>

          {/* Registration Form */}
          <div className="max-w-[743px] mx-auto">
            <div className="border border-[#dddddd] rounded-[12px] p-12 bg-white">
              <form onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* First Name */}
                  <div>
                    <label className="block text-[20px] text-black font-poppins mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      placeholder="Enter First Name"
                      className="w-full h-[69px] px-4 border border-[#b5b5b5] rounded-[10px] text-[20px] text-black placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-[20px] text-black font-poppins mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      placeholder="Enter Last Name"
                      className="w-full h-[69px] px-4 border border-[#b5b5b5] rounded-[10px] text-[20px] text-black placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                      required
                    />
                  </div>
                </div>

                {/* Consumer Category */}
                <div className="mb-8">
                  <label className="block text-[20px] text-black font-poppins mb-4">
                    Consumer Category
                  </label>
                  <div className="grid grid-cols-4 gap-4">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      const isSelected = formData.category === category.id;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => handleChange('category', category.id)}
                          className={`h-[117px] rounded-[8px] border flex flex-col items-center justify-center gap-2 transition-colors ${
                            isSelected
                              ? 'bg-[#f5ffff] border-[#007d7d] border-2'
                              : 'bg-[#eeeeee] border-[#dddddd] hover:bg-[#e5e5e5]'
                          }`}
                        >
                          {/* Radio indicator */}
                          <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-[#42b2b1]' : 'border-[#dddddd]'
                          }`}>
                            {isSelected && (
                              <div className="w-[10px] h-[10px] rounded-full bg-[#42b2b1]" />
                            )}
                          </div>

                          {/* Icon */}
                          <Icon className="w-6 h-6 text-black" strokeWidth={2} />

                          {/* Label */}
                          <span className="text-[16px] text-black font-poppins">
                            {category.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email Address */}
                <div className="mb-8">
                  <label className="block text-[20px] text-black font-poppins mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="Enter Email"
                    className="w-full h-[69px] px-4 border border-[#b5b5b5] rounded-[10px] text-[20px] text-black placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-8">
                  <label className="block text-[20px] text-black font-poppins mb-3">
                    Phone Number *
                  </label>
                  <div className="flex gap-3">
                    {/* Country Code */}
                    <div className="relative">
                      <select
                        value={formData.phoneCountry}
                        onChange={(e) => handleChange('phoneCountry', e.target.value)}
                        className="h-[69px] w-[139px] px-4 border border-[#b5b5b5] rounded-[10px] text-[20px] text-[#222222] font-poppins appearance-none focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                      >
                        <option>SA +966</option>
                        <option>UAE +971</option>
                        <option>US +1</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#222222] pointer-events-none" strokeWidth={2} />
                    </div>

                    {/* Phone Input */}
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="5XXXXXXXX"
                      className="flex-1 h-[69px] px-4 border border-[#b5b5b5] rounded-[10px] text-[20px] text-black placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-8">
                  <label className="block text-[20px] text-black font-poppins mb-3">
                    Password *
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="Enter the Strong Password"
                    className="w-full h-[69px] px-4 border border-[#b5b5b5] rounded-[10px] text-[20px] text-black placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-8">
                  <label className="block text-[20px] text-black font-poppins mb-3">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full h-[69px] px-4 border border-[#b5b5b5] rounded-[10px] text-[20px] text-black placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                    required
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="mb-8 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
                    className="w-5 h-5 border border-[#aaaaaa] rounded text-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                    required
                  />
                  <label htmlFor="terms" className="text-[16px] text-black font-poppins">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#42b2b1] hover:underline">
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-[#42b2b1] hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[57px] bg-[#42b2b1] rounded-[8px] text-[20px] text-white font-poppins hover:bg-[#358e8e] transition-colors"
                >
                  Register as Consumer
                </button>

                {/* Sign In Link */}
                <div className="mt-8 text-center">
                  <p className="text-[20px] font-poppins">
                    <span className="text-black">Already have account? </span>
                    <Link href="/login" className="text-[#42b2b1] font-semibold hover:underline">
                      Sign In here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
