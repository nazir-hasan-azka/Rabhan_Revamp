'use client';

import * as React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { ProductDetailModal } from '@/components/marketplace/ProductDetailModal';
import Image from 'next/image';

const CATEGORIES = [
  { id: 'all', name: 'All Products', count: 20 },
  { id: 'panels', name: 'Solar Panels', count: 5 },
  { id: 'inverters', name: 'Inverters', count: 5 },
  { id: 'batteries', name: 'Batteries', count: 5 },
  { id: 'systems', name: 'Full Systems', count: 5 },
];

const PRODUCTS = [
  {
    id: '1',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    category: 'Solar Panel',
    brand: 'Sunny',
    price: 500,
    image: '/products/solar-panel.jpg',
    inStock: true,
    discount: {
      percentage: 55,
      savings: 214,
    },
    description: 'Premium monocrystalline solar panel with excellent efficiency and durability. Perfect for residential and commercial installations.',
    specifications: {
      operatingVoltage: '52.2V/work43.3V',
      workingCurrent: 'A ≥13.93',
      operatingTemp: '-40°C ~ +85°C',
      dimensions: '2278 x 1134 x 30 mm',
      weight: '27KG',
      warranty: '25 years',
    },
  },
  {
    id: '2',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    category: 'Solar Panel',
    brand: 'Sunny',
    price: 500,
    image: '/products/solar-panel.jpg',
    inStock: true,
    discount: {
      percentage: 55,
      savings: 214,
    },
    description: 'Premium monocrystalline solar panel with excellent efficiency and durability. Perfect for residential and commercial installations.',
    specifications: {
      operatingVoltage: '52.2V/work43.3V',
      workingCurrent: 'A ≥13.93',
      operatingTemp: '-40°C ~ +85°C',
      dimensions: '2278 x 1134 x 30 mm',
      weight: '27KG',
      warranty: '25 years',
    },
  },
  {
    id: '3',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    category: 'Solar Panel',
    brand: 'Sunny',
    price: 500,
    image: '/products/solar-panel.jpg',
    inStock: true,
    discount: {
      percentage: 55,
      savings: 214,
    },
    description: 'Premium monocrystalline solar panel with excellent efficiency and durability. Perfect for residential and commercial installations.',
    specifications: {
      operatingVoltage: '52.2V/work43.3V',
      workingCurrent: 'A ≥13.93',
      operatingTemp: '-40°C ~ +85°C',
      dimensions: '2278 x 1134 x 30 mm',
      weight: '27KG',
      warranty: '25 years',
    },
  },
  {
    id: '4',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    category: 'Solar Panel',
    brand: 'Sunny',
    price: 500,
    image: '/products/solar-panel.jpg',
    inStock: true,
    discount: {
      percentage: 55,
      savings: 214,
    },
    description: 'Premium monocrystalline solar panel with excellent efficiency and durability. Perfect for residential and commercial installations.',
    specifications: {
      operatingVoltage: '52.2V/work43.3V',
      workingCurrent: 'A ≥13.93',
      operatingTemp: '-40°C ~ +85°C',
      dimensions: '2278 x 1134 x 30 mm',
      weight: '27KG',
      warranty: '25 years',
    },
  },
  {
    id: '5',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    category: 'Solar Panel',
    brand: 'Sunny',
    price: 500,
    image: '/products/solar-panel.jpg',
    inStock: true,
    discount: {
      percentage: 55,
      savings: 214,
    },
    description: 'Premium monocrystalline solar panel with excellent efficiency and durability. Perfect for residential and commercial installations.',
    specifications: {
      operatingVoltage: '52.2V/work43.3V',
      workingCurrent: 'A ≥13.93',
      operatingTemp: '-40°C ~ +85°C',
      dimensions: '2278 x 1134 x 30 mm',
      weight: '27KG',
      warranty: '25 years',
    },
  },
  {
    id: '6',
    name: 'Sunny P-550 High Efficiency Solar Panel',
    category: 'Solar Panel',
    brand: 'Sunny',
    price: 500,
    image: '/products/solar-panel.jpg',
    inStock: true,
    discount: {
      percentage: 55,
      savings: 214,
    },
    description: 'Premium monocrystalline solar panel with excellent efficiency and durability. Perfect for residential and commercial installations.',
    specifications: {
      operatingVoltage: '52.2V/work43.3V',
      workingCurrent: 'A ≥13.93',
      operatingTemp: '-40°C ~ +85°C',
      dimensions: '2278 x 1134 x 30 mm',
      weight: '27KG',
      warranty: '25 years',
    },
  },
];

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [productSearch, setProductSearch] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState<typeof PRODUCTS[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleProductClick = (product: typeof PRODUCTS[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (productId: string, quantity: number) => {
    console.log('Adding to cart:', productId, 'Quantity:', quantity);
    // Here you would implement cart functionality
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
                Solar Product Marketplace
              </h1>
              <p className="text-[16px] text-[#666666] font-poppins">
                Browse and purchase high-quality solar products from verified contractors
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#dddddd] mb-8" />

            {/* Content Layout */}
            <div className="flex gap-8">
              {/* Left Sidebar - Categories */}
              <div className="w-[271px] flex-shrink-0">
                <h3 className="text-[20px] font-medium text-black font-poppins mb-6">
                  Products by Category
                </h3>

                {/* Category List */}
                <div className="space-y-0">
                  {CATEGORIES.map((category, index) => (
                    <React.Fragment key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className="w-full flex items-center justify-between py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {/* Checkbox */}
                          <div className={`
                            w-5 h-5 border flex items-center justify-center
                            ${selectedCategory === category.id ? 'border-[#42B2B1]' : 'border-[#aaaaaa]'}
                          `}>
                            {selectedCategory === category.id && (
                              <div className="w-3.5 h-3.5 bg-[#42B2B1]" />
                            )}
                          </div>
                          
                          {/* Category Name */}
                          <span className={`text-[16px] font-poppins ${
                            selectedCategory === category.id ? 'font-medium text-black' : 'text-[#aaaaaa]'
                          }`}>
                            {category.name}
                          </span>
                        </div>

                        {/* Count */}
                        <span className={`text-[16px] font-medium font-poppins ${
                          selectedCategory === category.id ? 'text-[#222222]' : 'text-[#aaaaaa]'
                        }`}>
                          {category.count}
                        </span>
                      </button>

                      {/* Divider */}
                      {index < CATEGORIES.length - 1 && (
                        <div className="border-t border-[#dddddd]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Right Content - Products */}
              <div className="flex-1">
                {/* Search Bar */}
                <div className="mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      placeholder="Search the Solar Product"
                      className="w-[337px] h-[45px] px-4 border border-[#b5b5b5] rounded-[10px] text-[12px] text-[#aaaaaa] placeholder:text-[#aaaaaa] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                    />
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PRODUCTS.map((product) => (
                    <div
                      key={product.id}
                      className="border border-[#dddddd] rounded-[8px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      {/* Product Image */}
                      <div className="relative h-[246px] bg-gray-100">
                        {/* Discount Badge */}
                        {product.discount && (
                          <div className="absolute top-3 left-3 bg-[#22bb33] text-white px-2 py-1 rounded text-[10px] font-semibold font-poppins">
                            {product.discount.percentage}%
                            <div className="text-[8px]">SR {product.discount.savings}</div>
                          </div>
                        )}

                        {/* Stock Badge */}
                        {product.inStock && (
                          <div className="absolute top-3 right-3 bg-[#007d7d] text-white px-2 py-1 rounded-[8px] text-[12px] font-semibold font-poppins">
                            In Stock
                          </div>
                        )}

                        {/* Product Image - Placeholder */}
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                          <div className="w-32 h-32 bg-black/10 rounded-lg" />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        {/* Category */}
                        <p className="text-[12px] font-medium text-black font-poppins mb-1">
                          Category: {product.category}
                        </p>

                        {/* Brand */}
                        <p className="text-[12px] font-medium text-black font-poppins mb-3">
                          {product.brand}
                        </p>

                        {/* Product Name */}
                        <h3 className="text-[20px] font-semibold text-black font-poppins mb-3 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <p className="text-[24px] font-semibold text-[#1a4747] font-poppins mb-4">
                          SAR {product.price}
                        </p>

                        {/* Add to Cart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product.id, 1);
                          }}
                          className="w-full h-[48px] bg-[#42B2B1] hover:bg-[#358e8e] text-white rounded-[4px] flex items-center justify-center gap-2 transition-colors font-poppins"
                        >
                          <ShoppingCart className="w-6 h-6" strokeWidth={2} />
                          <span className="text-[20px]">Add the Cart</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
