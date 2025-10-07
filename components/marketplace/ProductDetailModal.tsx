'use client';

import * as React from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    category: string;
    brand: string;
    price: number;
    image: string;
    inStock: boolean;
    discount?: {
      percentage: number;
      savings: number;
    };
    description?: string;
    specifications?: {
      operatingVoltage?: string;
      workingCurrent?: string;
      operatingTemp?: string;
      dimensions?: string;
      weight?: string;
      warranty?: string;
    };
  };
  onAddToCart: (productId: string, quantity: number) => void;
}

export function ProductDetailModal({ isOpen, onClose, product, onAddToCart }: ProductDetailModalProps) {
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart(product.id, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/10 backdrop-blur-[15px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white h-full w-[1061px] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 left-10 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors z-10"
        >
          <X className="w-6 h-6 text-black" strokeWidth={2} />
        </button>

        {/* Content */}
        <div className="p-10 pt-20">
          {/* Product Image & Info Row */}
          <div className="flex gap-8 mb-12">
            {/* Product Image */}
            <div className="relative w-[563px] h-[423px] flex-shrink-0">
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-3 left-3 bg-[#22bb33] text-white px-3 py-2 rounded text-[12px] font-semibold font-poppins leading-tight z-10">
                  <div className="text-[14px]">{product.discount.percentage}%</div>
                  <div className="text-[10px]">SR {product.discount.savings}</div>
                </div>
              )}

              {/* Stock Badge */}
              {product.inStock && (
                <div className="absolute top-3 right-3 bg-[#007d7d] text-white px-3 py-1 rounded-[8px] text-[12px] font-semibold font-poppins z-10">
                  In Stock
                </div>
              )}

              {/* Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 rounded">
                <div className="w-48 h-48 bg-black/10 rounded-lg" />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1">
              {/* Product Name */}
              <h2 className="text-[24px] font-medium text-black font-poppins mb-6 leading-tight">
                {product.name}
              </h2>

              {/* Discount Percentage */}
              {product.discount && (
                <p className="text-[20px] font-semibold text-black font-poppins mb-4">
                  (-{product.discount.percentage}%)
                </p>
              )}

              {/* Category */}
              <p className="text-[16px] font-medium text-black font-poppins mb-2">
                Category: {product.category}
              </p>

              {/* Brand */}
              <p className="text-[16px] font-medium text-black font-poppins mb-8">
                {product.brand}
              </p>

              {/* Price */}
              <p className="text-[38px] font-semibold text-[#1a4747] font-poppins mb-8">
                SAR {product.price}
              </p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <p className="text-[16px] font-medium text-black font-poppins mb-2">
                  Quantity:
                </p>
                <div className="flex items-center gap-2">
                  {/* Minus Button */}
                  <button
                    onClick={decrementQuantity}
                    className="w-8 h-8 bg-[#dddddd] border border-[#dddddd] rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <Minus className="w-5 h-5 text-[#666666]" strokeWidth={2} />
                  </button>

                  {/* Quantity Display */}
                  <div className="w-[60px] h-8 border border-[#dddddd] rounded flex items-center justify-center">
                    <span className="text-[20px] text-black font-poppins">
                      {quantity}
                    </span>
                  </div>

                  {/* Plus Button */}
                  <button
                    onClick={incrementQuantity}
                    className="w-8 h-8 bg-[#dddddd] border border-[#dddddd] rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <Plus className="w-5 h-5 text-[#666666]" strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full h-[48px] bg-[#42B2B1] hover:bg-[#358e8e] text-white rounded-[4px] flex items-center justify-center gap-2 transition-colors font-poppins"
              >
                <Plus className="w-6 h-6" strokeWidth={2} />
                <span className="text-[20px]">Add the Cart</span>
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-10">
            <h3 className="text-[20px] font-medium text-black font-poppins mb-4">
              Description:
            </h3>
            <div className="border-t border-[#dddddd] pt-4">
              <p className="text-[20px] text-black font-poppins leading-[32px]">
                {product.description || 'Premium monocrystalline solar panel with excellent efficiency and durability. Perfect for residential and commercial installations.'}
              </p>
            </div>
          </div>

          {/* Specifications Section */}
          {product.specifications && (
            <div>
              <h3 className="text-[20px] font-medium text-black font-poppins mb-4">
                Specifications
              </h3>
              <div className="border-t border-[#dddddd] pt-6">
                <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
                  {product.specifications.operatingVoltage && (
                    <>
                      <span className="text-[20px] font-medium text-black font-poppins">
                        Operating Voltage
                      </span>
                      <span className="text-[20px] text-black font-poppins">
                        : {product.specifications.operatingVoltage}
                      </span>
                    </>
                  )}
                  {product.specifications.workingCurrent && (
                    <>
                      <span className="text-[20px] font-medium text-black font-poppins">
                        Working Current
                      </span>
                      <span className="text-[20px] text-black font-poppins">
                        : {product.specifications.workingCurrent}
                      </span>
                    </>
                  )}
                  {product.specifications.operatingTemp && (
                    <>
                      <span className="text-[20px] font-medium text-black font-poppins">
                        Operating Temperature
                      </span>
                      <span className="text-[20px] text-black font-poppins">
                        : {product.specifications.operatingTemp}
                      </span>
                    </>
                  )}
                  {product.specifications.dimensions && (
                    <>
                      <span className="text-[20px] font-medium text-black font-poppins">
                        Dimensions
                      </span>
                      <span className="text-[20px] text-black font-poppins">
                        : {product.specifications.dimensions}
                      </span>
                    </>
                  )}
                  {product.specifications.weight && (
                    <>
                      <span className="text-[20px] font-medium text-black font-poppins">
                        Weight
                      </span>
                      <span className="text-[20px] text-black font-poppins">
                        : {product.specifications.weight}
                      </span>
                    </>
                  )}
                  {product.specifications.warranty && (
                    <>
                      <span className="text-[20px] font-medium text-black font-poppins">
                        Warranty
                      </span>
                      <span className="text-[20px] text-black font-poppins">
                        : {product.specifications.warranty}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
