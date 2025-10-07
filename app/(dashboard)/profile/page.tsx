'use client';

import * as React from 'react';
import { User, Home, Briefcase, Settings, CheckCircle2, MapPin, ChevronDown } from 'lucide-react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

type TabType = 'personal' | 'property' | 'employment' | 'preferences';

interface TabConfig {
  id: TabType;
  name: string;
  icon: typeof User;
}

const TABS: TabConfig[] = [
  { id: 'personal', name: 'Personal', icon: User },
  { id: 'property', name: 'Property', icon: Home },
  { id: 'employment', name: 'Employment', icon: Briefcase },
  { id: 'preferences', name: 'Preferences', icon: Settings },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState<TabType>('preferences');
  const [formData, setFormData] = React.useState({
    // Personal
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    region: '',
    city: '',
    district: '',
    streetAddress: '',
    postalCode: '',
    landmark: '',
    gpsCoordinates: '',
    // Property
    propertyType: '',
    propertyOwnership: '',
    roofSize: '',
    monthlyConsumption: '',
    meterNumber: '',
    // Employment
    employmentStatus: '',
    employerName: '',
    jobTitle: '',
    monthlyIncome: '',
    yearsEmployed: '',
  });

  // Preferences state
  const [preferences, setPreferences] = React.useState({
    language: 'en', // 'en' or 'ar'
    emailNotifications: true,
    smsNotifications: true,
    marketingCommunications: true,
  });

  const profileCompletion = 25;

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceToggle = (field: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleLanguageToggle = () => {
    setPreferences(prev => ({
      ...prev,
      language: prev.language === 'en' ? 'ar' : 'en',
    }));
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
          setFormData(prev => ({
            ...prev,
            gpsCoordinates: coords,
            landmark: 'Auto-filled from GPS',
          }));
          console.log('Location obtained:', coords);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
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
                Profile Setting
              </h1>
              <p className="text-[16px] text-[#666666] font-poppins">
                Manage your KYC documents and track verification status
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="flex gap-8">
              {/* Left Sidebar - Tabs */}
              <div className="w-[338px] flex-shrink-0">
                <div className="border border-[#dddddd] rounded-[8px] overflow-hidden">
                  {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center ${
                          isActive ? 'bg-[#f5ffff]' : 'bg-white hover:bg-gray-50'
                        } transition-colors`}
                      >
                        {/* Active Indicator */}
                        {isActive && (
                          <div className="w-[10px] h-[40px] bg-[#42b2b1] flex-shrink-0" />
                        )}
                        {!isActive && <div className="w-[10px] h-[40px] flex-shrink-0" />}

                        {/* Content */}
                        <div className="flex-1 flex items-center gap-4 px-4 py-3">
                          <Icon
                            className={`w-6 h-6 ${
                              isActive ? 'text-[#42b2b1]' : 'text-[#aaaaaa]'
                            }`}
                            strokeWidth={2}
                          />
                          <span
                            className={`text-[16px] font-poppins ${
                              isActive ? 'text-[#42b2b1]' : 'text-[#aaaaaa]'
                            }`}
                          >
                            {tab.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1">
                {/* Profile Card */}
                <div className="border border-[#dddddd] rounded-[8px] p-6 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {/* Avatar */}
                      <div className="w-[136px] h-[136px] bg-[#68c1c1] rounded-full flex items-center justify-center">
                        <span className="text-[62px] text-white font-poppins">
                          FR
                        </span>
                      </div>

                      {/* User Info */}
                      <div>
                        <h2 className="text-[24px] text-black font-poppins mb-2">
                          Fayaz rahman
                        </h2>
                        <p className="text-[12px] text-[#aaaaaa] font-poppins mb-4">
                          fayazrahman.@azkashine.com
                        </p>
                        <div className="mb-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[12px] text-[#222222] font-poppins">
                              Profile Completed
                            </span>
                            <span className="text-[12px] text-[#222222] font-poppins">
                              {profileCompletion}%
                            </span>
                          </div>
                          {/* Progress Bar */}
                          <div className="w-[297px] h-[10px] bg-[#cccccc] rounded-[10px] overflow-hidden">
                            <div
                              className="h-full bg-[#42b2b1] rounded-[10px]"
                              style={{ width: `${profileCompletion}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Complete Verification Badge */}
                    <div className="bg-[#b3e0e0] flex items-center gap-2 px-3 py-2 rounded-[8px]">
                      <CheckCircle2 className="w-3 h-3 text-[#222222]" strokeWidth={2} />
                      <span className="text-[12px] text-[#222222] font-poppins">
                        Complete Verification
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="border border-[#dddddd] rounded-[8px] p-8">
                  {/* Personal Tab */}
                  {activeTab === 'personal' && (
                    <>
                      {/* Personal Section */}
                      <div className="mb-10">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-[32px] font-semibold text-black font-poppins">
                            Personal
                          </h3>
                          <button className="bg-[#cccccc] hover:bg-[#bbbbbb] px-4 py-2 rounded-[8px] text-[12px] text-[#222222] font-poppins transition-colors">
                            Edit
                          </button>
                        </div>
                        <div className="border-t border-[#dddddd] pt-6">
                          <div className="grid grid-cols-3 gap-6">
                            {/* First Name */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                First Name *
                              </label>
                              <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                placeholder="Enter First Name"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>

                            {/* Last Name */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                Last Name *
                              </label>
                              <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                placeholder="Enter Last Name"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>

                            {/* Phone Number */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                Phone Number *
                              </label>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                placeholder="Enter Phone Number"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>

                            {/* Email Address */}
                            <div className="col-span-3">
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                placeholder="Enter Email Address"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Address Section */}
                      <div className="mb-10">
                        <h3 className="text-[32px] font-semibold text-black font-poppins mb-6">
                          Address
                        </h3>
                        <div className="border-t border-[#dddddd] pt-6">
                          <div className="grid grid-cols-3 gap-6">
                            {/* Region */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                Region *
                              </label>
                              <div className="relative">
                                <select
                                  value={formData.region}
                                  onChange={(e) => handleChange('region', e.target.value)}
                                  className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 appearance-none"
                                >
                                  <option>Select the option</option>
                                  <option>Riyadh</option>
                                  <option>Jeddah</option>
                                  <option>Dammam</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#222222] pointer-events-none" />
                              </div>
                            </div>

                            {/* City */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                City
                              </label>
                              <input
                                type="text"
                                value={formData.city}
                                onChange={(e) => handleChange('city', e.target.value)}
                                placeholder="Enter your City"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>

                            {/* District */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                District
                              </label>
                              <input
                                type="text"
                                value={formData.district}
                                onChange={(e) => handleChange('district', e.target.value)}
                                placeholder="Enter your district"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>

                            {/* Street Address */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                Street Address
                              </label>
                              <input
                                type="text"
                                value={formData.streetAddress}
                                onChange={(e) => handleChange('streetAddress', e.target.value)}
                                placeholder="Enter your address"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>

                            {/* Postal Code */}
                            <div className="col-span-2">
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                Postal Code
                              </label>
                              <input
                                type="text"
                                value={formData.postalCode}
                                onChange={(e) => handleChange('postalCode', e.target.value)}
                                placeholder="Enter Post Code"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Location Information Section */}
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-[32px] font-semibold text-black font-poppins">
                            Location Information
                          </h3>
                          <button
                            onClick={handleGetLocation}
                            className="bg-[#007d7d] hover:bg-[#006666] flex items-center gap-2 px-4 py-2 rounded-[8px] text-[12px] text-white font-poppins transition-colors"
                          >
                            <MapPin className="w-4 h-4" strokeWidth={2} />
                            Get My Location
                          </button>
                        </div>
                        <div className="border-t border-[#dddddd] pt-6">
                          <div className="grid grid-cols-2 gap-6">
                            {/* Landmark */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                Landmark
                              </label>
                              <input
                                type="text"
                                value={formData.landmark}
                                onChange={(e) => handleChange('landmark', e.target.value)}
                                placeholder="Click 'Get My Location' to auto-fill"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>

                            {/* GPS Coordinates */}
                            <div>
                              <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                                GPS Coordinates
                              </label>
                              <input
                                type="text"
                                value={formData.gpsCoordinates}
                                onChange={(e) => handleChange('gpsCoordinates', e.target.value)}
                                placeholder="Click 'Get My Location' to auto-fill"
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Property Tab */}
                  {activeTab === 'property' && (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[32px] font-semibold text-black font-poppins">
                          Property
                        </h3>
                        <button className="bg-[#cccccc] hover:bg-[#bbbbbb] px-4 py-2 rounded-[8px] text-[12px] text-[#222222] font-poppins transition-colors">
                          Edit
                        </button>
                      </div>
                      <div className="border-t border-[#dddddd] pt-6">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Property Type */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Property Type
                            </label>
                            <div className="relative">
                              <select
                                value={formData.propertyType}
                                onChange={(e) => handleChange('propertyType', e.target.value)}
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 appearance-none"
                              >
                                <option>Select the option</option>
                                <option>Villa</option>
                                <option>Apartment</option>
                                <option>Commercial</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#222222] pointer-events-none" />
                            </div>
                          </div>

                          {/* Property Ownership */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Property Ownership
                            </label>
                            <div className="relative">
                              <select
                                value={formData.propertyOwnership}
                                onChange={(e) => handleChange('propertyOwnership', e.target.value)}
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 appearance-none"
                              >
                                <option>Select the option</option>
                                <option>Owned</option>
                                <option>Rented</option>
                                <option>Leased</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#222222] pointer-events-none" />
                            </div>
                          </div>

                          {/* Roof Size */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Roof Size (m2)
                            </label>
                            <input
                              type="text"
                              value={formData.roofSize}
                              onChange={(e) => handleChange('roofSize', e.target.value)}
                              placeholder="Roof area in square meters"
                              className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                            />
                          </div>

                          {/* Monthly Electricity Consumption */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Monthly Electricity Consumption (kWh)
                            </label>
                            <div className="relative">
                              <select
                                value={formData.monthlyConsumption}
                                onChange={(e) => handleChange('monthlyConsumption', e.target.value)}
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 appearance-none"
                              >
                                <option>Select the option</option>
                                <option>0-500 kWh</option>
                                <option>500-1000 kWh</option>
                                <option>1000-2000 kWh</option>
                                <option>2000+ kWh</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#222222] pointer-events-none" />
                            </div>
                          </div>

                          {/* Electricity Meter Number */}
                          <div className="col-span-2">
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Electricity Meter Number
                            </label>
                            <input
                              type="text"
                              value={formData.meterNumber}
                              onChange={(e) => handleChange('meterNumber', e.target.value)}
                              placeholder="Enter meter number"
                              className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Employment Tab */}
                  {activeTab === 'employment' && (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[32px] font-semibold text-black font-poppins">
                          Employment
                        </h3>
                        <button className="bg-[#cccccc] hover:bg-[#bbbbbb] px-4 py-2 rounded-[8px] text-[12px] text-[#222222] font-poppins transition-colors">
                          Edit
                        </button>
                      </div>
                      <div className="border-t border-[#dddddd] pt-6">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Employment Status */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Employment Status
                            </label>
                            <div className="relative">
                              <select
                                value={formData.employmentStatus}
                                onChange={(e) => handleChange('employmentStatus', e.target.value)}
                                className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 appearance-none"
                              >
                                <option>Select the option</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Self-employed</option>
                                <option>Retired</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#222222] pointer-events-none" />
                            </div>
                          </div>

                          {/* Employer Name */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Employer Name
                            </label>
                            <input
                              type="text"
                              value={formData.employerName}
                              onChange={(e) => handleChange('employerName', e.target.value)}
                              placeholder="Enter employer name"
                              className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                            />
                          </div>

                          {/* Job Title */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Job Title
                            </label>
                            <input
                              type="text"
                              value={formData.jobTitle}
                              onChange={(e) => handleChange('jobTitle', e.target.value)}
                              placeholder="Enter your job title"
                              className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                            />
                          </div>

                          {/* Monthly Income */}
                          <div>
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Monthly Income
                            </label>
                            <input
                              type="text"
                              value={formData.monthlyIncome}
                              onChange={(e) => handleChange('monthlyIncome', e.target.value)}
                              placeholder="Enter monthly income SAR"
                              className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                            />
                          </div>

                          {/* Years Employed */}
                          <div className="col-span-2">
                            <label className="block text-[16px] font-medium text-black font-poppins mb-2">
                              Years Employed
                            </label>
                            <input
                              type="text"
                              value={formData.yearsEmployed}
                              onChange={(e) => handleChange('yearsEmployed', e.target.value)}
                              placeholder="Years with current employer"
                              className="w-full h-[48px] px-4 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preferences Tab */}
                  {activeTab === 'preferences' && (
                    <div>
                      <h3 className="text-[32px] font-semibold text-black font-poppins mb-6">
                        Preferences
                      </h3>
                      <div className="border-t border-[#dddddd] pt-6">
                        <div className="space-y-8">
                          {/* Preferred Language */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-[20px] font-medium text-black font-poppins">
                              Preferred Language
                            </h4>
                            <button
                              onClick={handleLanguageToggle}
                              className={`relative w-[77px] h-[41px] rounded-[20px] border border-[#dddddd] transition-colors ${
                                preferences.language === 'en' ? 'bg-[#42b2b1]' : 'bg-[#42b2b1]'
                              }`}
                            >
                              <div
                                className={`absolute top-[4px] w-[35px] h-[34px] bg-[#f5ffff] rounded-[20px] transition-all ${
                                  preferences.language === 'en' ? 'right-[4px]' : 'left-[4px]'
                                }`}
                              />
                              <div className="absolute inset-0 flex items-center justify-between px-2 text-[12px] font-medium">
                                <span className={preferences.language === 'ar' ? 'text-[#1a4747]' : 'text-[#b3e0e0]'}>
                                  العربية
                                </span>
                                <span className={preferences.language === 'en' ? 'text-[#1a4747]' : 'text-[#b3e0e0]'}>
                                  EN
                                </span>
                              </div>
                            </button>
                          </div>

                          {/* Email Notifications */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-[20px] font-medium text-black font-poppins">
                              Email Notifications
                            </h4>
                            <button
                              onClick={() => handlePreferenceToggle('emailNotifications')}
                              className={`relative w-[77px] h-[41px] rounded-[20px] border border-[#dddddd] transition-colors ${
                                preferences.emailNotifications ? 'bg-[#42b2b1]' : 'bg-[#aaaaaa]'
                              }`}
                            >
                              <div
                                className={`absolute top-[4px] w-[35px] h-[34px] bg-[#f5ffff] rounded-[20px] transition-all ${
                                  preferences.emailNotifications ? 'right-[4px]' : 'left-[4px]'
                                }`}
                              />
                            </button>
                          </div>

                          {/* SMS Notifications */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-[20px] font-medium text-black font-poppins">
                              SMS Notifications
                            </h4>
                            <button
                              onClick={() => handlePreferenceToggle('smsNotifications')}
                              className={`relative w-[77px] h-[41px] rounded-[20px] border border-[#dddddd] transition-colors ${
                                preferences.smsNotifications ? 'bg-[#42b2b1]' : 'bg-[#aaaaaa]'
                              }`}
                            >
                              <div
                                className={`absolute top-[4px] w-[35px] h-[34px] bg-[#f5ffff] rounded-[20px] transition-all ${
                                  preferences.smsNotifications ? 'right-[4px]' : 'left-[4px]'
                                }`}
                              />
                            </button>
                          </div>

                          {/* Marketing Communications */}
                          <div className="flex items-center justify-between">
                            <h4 className="text-[20px] font-medium text-black font-poppins">
                              Marketing Communications
                            </h4>
                            <button
                              onClick={() => handlePreferenceToggle('marketingCommunications')}
                              className={`relative w-[77px] h-[41px] rounded-[20px] border border-[#dddddd] transition-colors ${
                                preferences.marketingCommunications ? 'bg-[#42b2b1]' : 'bg-[#aaaaaa]'
                              }`}
                            >
                              <div
                                className={`absolute top-[4px] w-[35px] h-[34px] bg-[#f5ffff] rounded-[20px] transition-all ${
                                  preferences.marketingCommunications ? 'right-[4px]' : 'left-[4px]'
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
