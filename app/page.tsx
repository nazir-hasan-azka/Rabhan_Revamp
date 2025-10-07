import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, ShoppingBag, TrendingUp, Sun, Zap, DollarSign } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white pt-[116px]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#f5ffff] to-white py-20">
          <div className="container mx-auto px-4 md:px-[100px]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                    Own Your Solar System with{' '}
                    <span className="text-[#42B2B1]">Zero Upfront Cost</span>
                  </h1>
                  <p className="text-xl text-gray-600">
                    Buy Now Pay Later for solar energy solutions in Saudi Arabia. 
                    Supporting the Kingdom's Net Zero 2060 vision.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/solar-calculator">
                    <Button variant="primary" size="lg" leftIcon={<Calculator className="w-5 h-5" />}>
                      Calculate Savings
                    </Button>
                  </Link>
                  <Link href="/shop">
                    <Button variant="secondary" size="lg" leftIcon={<ShoppingBag className="w-5 h-5" />}>
                      Browse Products
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-[#42B2B1]">26%+</div>
                    <div className="text-sm text-gray-600">System Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#42B2B1]">0%</div>
                    <div className="text-sm text-gray-600">Interest Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#42B2B1]">12-30</div>
                    <div className="text-sm text-gray-600">Months Term</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image/Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#42B2B1] to-[#007d7d] rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">System Price</span>
                      <span className="text-2xl font-bold text-[#007d7d]">SAR 22,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Monthly Payment</span>
                      <span className="text-2xl font-bold text-[#42B2B1]">SAR 3,038</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">You Save</span>
                        <span className="text-3xl font-bold text-[#22BB33]">26%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-[100px]">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Why Choose RABHAN?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The smart way to go solar in Saudi Arabia
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Sun className="w-8 h-8" />}
                  title="Zero Upfront Cost"
                  description="Start saving from day one. Pay as you save with flexible monthly installments from 12 to 30 months."
                />
                <FeatureCard
                  icon={<DollarSign className="w-8 h-8" />}
                  title="0% Interest Rate"
                  description="No hidden fees. Just transparent pricing with zero interest for the entire payment period."
                />
                <FeatureCard
                  icon={<TrendingUp className="w-8 h-8" />}
                  title="Save 26%+"
                  description="Own your system for less. Save over 26% of the system value by paying only 81% of your current bill."
                />
                <FeatureCard
                  icon={<Zap className="w-8 h-8" />}
                  title="Instant Calculations"
                  description="Get accurate estimates in seconds. Our smart calculator analyzes your usage and shows real savings."
                />
                <FeatureCard
                  icon={<ShoppingBag className="w-8 h-8" />}
                  title="Premium Products"
                  description="Access certified solar equipment from global brands. All products meet Saudi standards."
                />
                <FeatureCard
                  icon={<Calculator className="w-8 h-8" />}
                  title="Smart Solar Calculator"
                  description="AI-powered system sizing based on your consumption. See ROI and environmental impact instantly."
                />
              </div>
            </div>
          </section>
        </Suspense>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#42B2B1] to-[#007d7d]">
          <div className="container mx-auto px-4 md:px-[100px] text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Calculate your savings now and join thousands of Saudi homes and businesses 
              supporting Net Zero 2060.
            </p>
            <Link href="/solar-calculator">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-white text-[#42B2B1] hover:bg-gray-100"
                leftIcon={<Calculator className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Start Calculator
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 md:px-[100px]">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-4">RABHAN</h3>
                <p className="text-gray-400 mb-4">
                  Enterprise BNPL platform for solar energy solutions in Saudi Arabia.
                  Supporting the Kingdom's Net Zero 2060 vision.
                </p>
                <p className="text-sm text-gray-500">
                  🏢 Owned by: Alpha Power<br />
                  💻 Developed by: Azkashine<br />
                  🌐 Official: <a href="https://rabhan.sa" className="text-[#42B2B1] hover:underline">rabhan.sa</a>
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/solar-calculator" className="hover:text-[#42B2B1]">Solar Calculator</Link></li>
                  <li><Link href="/shop" className="hover:text-[#42B2B1]">Shop Products</Link></li>
                  <li><Link href="/register" className="hover:text-[#42B2B1]">Register</Link></li>
                  <li><Link href="/login" className="hover:text-[#42B2B1]">Login</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-[#42B2B1]">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-[#42B2B1]">Contact</Link></li>
                  <li><Link href="/faq" className="hover:text-[#42B2B1]">FAQ</Link></li>
                  <li><Link href="/api/health" className="hover:text-[#42B2B1]">API Health</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              <p>© 2025 RABHAN. All rights reserved. Supporting Saudi Arabia's Net Zero 2060 Vision 🇸🇦</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#42B2B1] hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div className="p-3 bg-[#f5ffff] rounded-lg text-[#42B2B1] w-fit group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
