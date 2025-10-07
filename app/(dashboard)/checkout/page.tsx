'use client';

import * as React from 'react';
import { ShoppingBag, X, ChevronDown, Wallet, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

const CART_ITEMS = [
  {
    id: '1',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    brand: 'Sunny',
    price: 500,
    quantity: 1,
    image: '/products/solar-panel.jpg',
  },
  {
    id: '2',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    brand: 'Sunny',
    price: 500,
    quantity: 1,
    image: '/products/solar-panel.jpg',
  },
];

const PAYMENT_METHODS = [
  {
    id: 'bnpl',
    name: 'Buy Now, Pay Later (SAMA Compliant)',
    description: 'Split your payment into installments with SAMA-approved financing',
    icon: Wallet,
    selected: false,
    disabled: false,
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Pay securely with your Visa, Mastercard, or local bank cards',
    icon: CreditCard,
    selected: true,
    disabled: false,
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    description: 'Pay in cash when your solar equipment is delivered',
    icon: Banknote,
    selected: false,
    disabled: true,
  },
  {
    id: 'upi',
    name: 'UPI Payment',
    description: 'Pay with any one of your UPI apps',
    icon: Smartphone,
    selected: false,
    disabled: true,
  },
];

export default function CheckoutPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState('card');
  const [shippingData, setShippingData] = React.useState({
    fullName: 'Fayaz Rahman',
    phone: '+9665643210789',
    address: 'Street address, building number, apartment',
    city: 'Enter City',
    region: 'Select Region',
    postalCode: '000 000',
  });

  const [cardData, setCardData] = React.useState({
    cardNumber: '1234 5678 9876 5432',
    cardholderName: 'Name of Card Holder',
    expiryDate: 'MM/YY',
    cvv: '000',
  });

  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subtotal * 0.15;
  const shipping = 50;
  const total = subtotal + vat + shipping;

  const handleRemoveItem = (itemId: string) => {
    console.log('Remove item:', itemId);
  };

  const handleProcessPayment = () => {
    console.log('Processing payment...');
    console.log('Shipping:', shippingData);
    console.log('Payment Method:', selectedPaymentMethod);
    console.log('Card Data:', cardData);
  };

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
          <div className="px-6 py-6 max-w-[1920px]">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-[38px] font-semibold text-black font-poppins mb-2">
                Checkout
              </h1>
              <p className="text-[16px] text-[#666666] font-poppins">
                Complete your solar equipment purchase
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="flex gap-8">
              {/* Left Column - Forms */}
              <div className="flex-1">
                {/* Shipping Address */}
                <div className="mb-12">
                  <h2 className="text-[32px] font-semibold text-black font-poppins mb-6">
                    Shipping Address
                  </h2>
                  <div className="border-t border-[#dddddd] pt-6">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={shippingData.fullName}
                          onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
                          className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={shippingData.phone}
                          onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                          className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                        />
                      </div>

                      {/* Address */}
                      <div className="col-span-2">
                        <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          value={shippingData.address}
                          onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                          className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={shippingData.city}
                          onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                          className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                        />
                      </div>

                      {/* Region */}
                      <div>
                        <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                          Region
                        </label>
                        <div className="relative">
                          <select
                            value={shippingData.region}
                            onChange={(e) => setShippingData({ ...shippingData, region: e.target.value })}
                            className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 appearance-none"
                          >
                            <option>Select Region</option>
                            <option>Riyadh</option>
                            <option>Jeddah</option>
                            <option>Dammam</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888] pointer-events-none" />
                        </div>
                      </div>

                      {/* Postal Code */}
                      <div>
                        <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          value={shippingData.postalCode}
                          onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
                          className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h2 className="text-[32px] font-semibold text-black font-poppins mb-6">
                    Payment Method
                  </h2>
                  <div className="border-t border-[#dddddd] pt-6">
                    <div className="space-y-4">
                      {PAYMENT_METHODS.map((method) => (
                        <div key={method.id}>
                          <button
                            onClick={() => !method.disabled && setSelectedPaymentMethod(method.id)}
                            disabled={method.disabled}
                            className={`w-full p-4 rounded-[8px] border-2 transition-colors ${
                              selectedPaymentMethod === method.id
                                ? 'bg-[#f5ffff] border-[#007d7d]'
                                : method.disabled
                                ? 'bg-[#eeeeee] border-[#eeeeee] cursor-not-allowed'
                                : 'bg-white border-transparent hover:border-[#dddddd]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Radio Button */}
                              <div
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                  selectedPaymentMethod === method.id
                                    ? 'border-[#007d7d]'
                                    : 'border-[#aaaaaa]'
                                }`}
                              >
                                {selectedPaymentMethod === method.id && (
                                  <div className="w-2 h-2 rounded-full bg-[#007d7d]" />
                                )}
                              </div>

                              {/* Icon */}
                              <method.icon 
                                className={`w-4 h-4 ${method.disabled ? 'text-[#aaaaaa]' : 'text-black'}`} 
                                strokeWidth={2}
                              />

                              {/* Text */}
                              <div className="flex-1 text-left">
                                <p className={`text-[16px] font-medium font-poppins ${
                                  method.disabled ? 'text-[#aaaaaa]' : 'text-black'
                                }`}>
                                  {method.name}
                                </p>
                                <p className="text-[12px] text-[#aaaaaa] font-poppins mt-1">
                                  {method.description}
                                </p>
                              </div>
                            </div>
                          </button>

                          {/* Card Details Form - shown only when card is selected */}
                          {selectedPaymentMethod === 'card' && method.id === 'card' && (
                            <div className="mt-6 p-6 bg-[#f5ffff] border-2 border-[#007d7d] rounded-[8px]">
                              <h3 className="text-[16px] font-medium text-black font-poppins mb-4">
                                Card Details
                              </h3>
                              <div className="border-t border-[#007d7d] pt-4">
                                <div className="space-y-4">
                                  {/* Card Number */}
                                  <div>
                                    <label className="block text-[12px] text-black font-poppins mb-1">
                                      Card Number *
                                    </label>
                                    <input
                                      type="text"
                                      value={cardData.cardNumber}
                                      onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                                      placeholder="1234 5678 9876 5432"
                                      className="w-full h-[39px] px-3 border border-[#b5b5b5] rounded-[4px] text-[12px] text-[#aaaaaa] placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42B2B1]"
                                    />
                                  </div>

                                  <div className="grid grid-cols-2 gap-4">
                                    {/* Cardholder Name */}
                                    <div>
                                      <label className="block text-[12px] text-black font-poppins mb-1">
                                        Cardholder Name *
                                      </label>
                                      <input
                                        type="text"
                                        value={cardData.cardholderName}
                                        onChange={(e) => setCardData({ ...cardData, cardholderName: e.target.value })}
                                        placeholder="Name of Card Holder"
                                        className="w-full h-[39px] px-3 border border-[#b5b5b5] rounded-[4px] text-[12px] text-[#aaaaaa] placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42B2B1]"
                                      />
                                    </div>

                                    {/* Expiry Date */}
                                    <div>
                                      <label className="block text-[12px] text-black font-poppins mb-1">
                                        Expiry Date *
                                      </label>
                                      <input
                                        type="text"
                                        value={cardData.expiryDate}
                                        onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
                                        placeholder="MM/YY"
                                        className="w-full h-[39px] px-3 border border-[#b5b5b5] rounded-[4px] text-[12px] text-[#aaaaaa] placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42B2B1]"
                                      />
                                    </div>
                                  </div>

                                  {/* CVV */}
                                  <div className="w-1/2 pr-2">
                                    <label className="block text-[12px] text-black font-poppins mb-1">
                                      CVV *
                                    </label>
                                    <input
                                      type="text"
                                      value={cardData.cvv}
                                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                                      placeholder="000"
                                      maxLength={3}
                                      className="w-full h-[39px] px-3 border border-[#b5b5b5] rounded-[4px] text-[12px] text-[#aaaaaa] placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42B2B1]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="w-[691px] flex-shrink-0">
                <h2 className="text-[32px] font-semibold text-black font-poppins mb-6">
                  Order Summary
                </h2>
                <div className="border-t border-[#dddddd] pt-6">
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {CART_ITEMS.map((item) => (
                      <div key={item.id} className="border border-[#dddddd] rounded-[8px] p-4 relative">
                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="absolute top-4 right-4 w-[22px] h-[22px] flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-black" strokeWidth={2} />
                        </button>

                        <div className="flex gap-4">
                          {/* Product Image */}
                          <div className="w-[151px] h-[109px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                            <div className="w-20 h-20 bg-black/10 rounded" />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1">
                            <h3 className="text-[20px] font-medium text-black font-poppins mb-2 pr-8">
                              {item.name}
                            </h3>
                            <p className="text-[12px] font-medium text-black font-poppins mb-4">
                              {item.brand}
                            </p>
                            <p className="text-[16px] font-medium text-black font-poppins mb-2">
                              Qty: {item.quantity}
                            </p>
                          </div>

                          {/* Price */}
                          <div>
                            <p className="text-[24px] font-semibold text-[#1a4747] font-poppins">
                              SAR {item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-[24px] font-poppins">
                      <span className="text-black">Subtotal</span>
                      <span className="text-black">SAR {subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[24px] font-poppins">
                      <span className="text-black">VAT (15%)</span>
                      <span className="text-black">SAR {vat}</span>
                    </div>
                    <div className="flex justify-between text-[24px] font-poppins">
                      <span className="text-black">Shipping</span>
                      <span className="text-black">SAR {shipping}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-[#b3e0e0] rounded-[10px] p-4 mb-6">
                    <div className="flex justify-between text-[24px] font-semibold text-[#1a4747] font-poppins">
                      <span>Total</span>
                      <span>SAR {total}</span>
                    </div>
                  </div>

                  {/* Process Payment Button */}
                  <button
                    onClick={handleProcessPayment}
                    className="w-full h-[54px] bg-[#42B2B1] hover:bg-[#358e8e] text-white rounded-[4px] flex items-center justify-center gap-2 transition-colors font-poppins"
                  >
                    <ShoppingBag className="w-6 h-6" strokeWidth={2} />
                    <span className="text-[20px]">Process the Payment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
