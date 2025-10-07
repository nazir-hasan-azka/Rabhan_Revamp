'use client';

import * as React from 'react';
import Link from 'next/link';
import { X, ArrowLeft, Eye, EyeOff } from 'lucide-react';

type UserType = 'customer' | 'contractor';

export default function LoginPage() {
  const [userType, setUserType] = React.useState<UserType>('customer');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', { userType, password, rememberMe });
    // Handle sign in logic
  };

  return (
    <div className="min-h-screen bg-white/10 backdrop-blur-[25px] flex items-center justify-center p-4">
      {/* Sign In Card */}
      <div className="w-full max-w-[822px] bg-white border border-[#dddddd] rounded-[20px] p-12 relative">
        {/* Close Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-7 right-7 w-6 h-6 flex items-center justify-center text-black hover:text-[#42b2b1] transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" strokeWidth={2} />
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[38px] font-medium text-black font-poppins mb-3">
            Sign in to your account
          </h1>
          <p className="text-[20px] font-medium text-[#aaaaaa] font-poppins">
            Welcome back! Please enter your details
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="bg-[#eeeeee] rounded-[20px] p-2 mb-12">
          <div className="grid grid-cols-2 gap-0">
            <button
              onClick={() => setUserType('customer')}
              className={`h-[70px] rounded-[20px] text-[24px] font-poppins transition-all ${
                userType === 'customer'
                  ? 'bg-[#42b2b1] text-white font-medium'
                  : 'bg-transparent text-[#aaaaaa]'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setUserType('contractor')}
              className={`h-[70px] rounded-[20px] text-[24px] font-poppins transition-all ${
                userType === 'contractor'
                  ? 'bg-[#42b2b1] text-white font-medium'
                  : 'bg-transparent text-[#aaaaaa]'
              }`}
            >
              Contractor
            </button>
          </div>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSignIn} className="space-y-6">
          {/* Password Field */}
          <div>
            <label className="block text-[20px] text-black font-poppins mb-3">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter a strong password"
                className="w-full h-[69px] px-4 pr-12 border border-[#b5b5b5] rounded-[10px] text-[20px] text-black placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaaaaa] hover:text-[#42b2b1] transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-6 h-6" strokeWidth={2} />
                ) : (
                  <Eye className="w-6 h-6" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 border border-[#aaaaaa] rounded text-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20"
              />
              <span className="text-[16px] text-black font-poppins">
                Remember me
              </span>
            </label>

            <Link
              href="/forgot-password"
              className="text-[16px] font-medium text-[#499ab2] font-poppins hover:text-[#42b2b1] transition-colors"
            >
              Forgot Password ?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full h-[57px] bg-[#42b2b1] rounded-[8px] flex items-center justify-center gap-2 text-[20px] text-white font-poppins hover:bg-[#358e8e] transition-colors group"
          >
            Sign In
            <svg
              className="w-6 h-6 transform rotate-180 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </form>

        {/* Back to Email */}
        <div className="mt-8 mb-6">
          <button
            onClick={() => window.history.back()}
            className="mx-auto flex items-center gap-2 text-[16px] font-medium text-black font-poppins hover:text-[#42b2b1] transition-colors"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2} />
            Back to Email
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-[20px] font-poppins">
            <span className="text-black">Don't have an account? </span>
            <Link
              href="/register"
              className="font-semibold text-[#42b2b1] hover:text-[#358e8e] transition-colors"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
