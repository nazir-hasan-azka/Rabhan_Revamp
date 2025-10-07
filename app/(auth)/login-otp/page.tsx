'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

type UserType = 'customer' | 'contractor';

export default function LoginOTPPage() {
  const router = useRouter();
  const [userType, setUserType] = React.useState<UserType>('customer');
  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = React.useState(30);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  // Timer countdown
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = pastedData.split('').filter(char => /^\d$/.test(char));
    
    if (newOtp.length > 0) {
      const updatedOtp = [...otp];
      newOtp.forEach((digit, index) => {
        if (index < 6) updatedOtp[index] = digit;
      });
      setOtp(updatedOtp);
      
      // Focus last filled input or next empty
      const nextIndex = Math.min(newOtp.length, 5);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    console.log('Verify OTP:', { userType, otp: otpCode });
    // Handle OTP verification
    router.push('/dashboard');
  };

  const handleResend = () => {
    setTimeLeft(30);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    console.log('Resend OTP');
  };

  return (
    <div className="min-h-screen bg-white/10 backdrop-blur-[25px] flex items-center justify-center p-4">
      {/* OTP Verification Card */}
      <div className="w-full max-w-[822px] bg-white border border-[#dddddd] rounded-[20px] p-12 relative">
        {/* Close Button */}
        <button
          onClick={() => router.push('/')}
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

        {/* OTP Verification Section */}
        <form onSubmit={handleVerify} className="space-y-6">
          {/* OTP Label */}
          <div className="text-center">
            <h2 className="text-[20px] font-medium text-black font-poppins mb-2">
              OTP Verification
            </h2>
            <p className="text-[16px] text-[#aaaaaa] font-poppins">
              OTP Number: +9666******06
            </p>
          </div>

          {/* OTP Input Fields */}
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-[60px] h-[60px] border-2 border-[#b5b5b5] rounded-[10px] text-center text-[24px] font-semibold text-black font-poppins focus:outline-none focus:border-[#42b2b1] focus:ring-2 focus:ring-[#42b2b1]/20 transition-colors"
                required
              />
            ))}
          </div>

          {/* Resend Timer */}
          <div className="text-center">
            {timeLeft > 0 ? (
              <p className="text-[16px] text-[#499ab2] font-poppins">
                Resend in {timeLeft}s
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-[16px] font-medium text-[#499ab2] font-poppins hover:text-[#42b2b1] transition-colors"
              >
                Resend OTP
              </button>
            )}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full h-[57px] bg-[#42b2b1] rounded-[8px] flex items-center justify-center gap-2 text-[20px] text-white font-poppins hover:bg-[#358e8e] transition-colors group"
          >
            Verify the OTP
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </form>

        {/* Back to Email */}
        <div className="mt-8 mb-6">
          <button
            onClick={() => router.push('/login-email')}
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
