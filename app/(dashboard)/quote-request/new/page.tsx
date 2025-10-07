'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, User, Users, CheckCircle, Calendar, Briefcase, Building2, MapPin, Mail, Star, Info, Home } from 'lucide-react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

const STEPS = [
  { id: 1, name: 'Basic Information', icon: User },
  { id: 2, name: 'Select Contractors', icon: Users },
  { id: 3, name: 'Final Submission', icon: CheckCircle },
];

// Mock contractor data
const CONTRACTORS = [
  {
    id: '1',
    name: 'Azkashine',
    initials: 'AZ',
    email: 'fayazrahman@azkashine.com',
    location: 'Riyadh, Riyadh Region',
    rating: 4.5,
    reviews: 10,
    coverage: 'Partial',
    experience: 5,
    projects: 5,
    scheduled: null,
  },
  {
    id: '2',
    name: 'Azkashine',
    initials: 'AZ',
    email: 'fayazrahman@azkashine.com',
    location: 'Riyadh, Riyadh Region',
    rating: 4.5,
    reviews: 10,
    coverage: 'Partial',
    experience: 5,
    projects: 5,
    scheduled: 'Sept 16 / 09:30',
  },
  {
    id: '3',
    name: 'Azkashine',
    initials: 'AZ',
    email: 'fayazrahman@azkashine.com',
    location: 'Riyadh, Riyadh Region',
    rating: 4.5,
    reviews: 10,
    coverage: 'Partial',
    experience: 5,
    projects: 5,
    scheduled: null,
  },
  {
    id: '4',
    name: 'Azkashine',
    initials: 'AZ',
    email: 'fayazrahman@azkashine.com',
    location: 'Riyadh, Riyadh Region',
    rating: 4.5,
    reviews: 10,
    coverage: 'Partial',
    experience: 5,
    projects: 5,
    scheduled: null,
  },
  {
    id: '5',
    name: 'Azkashine',
    initials: 'AZ',
    email: 'fayazrahman@azkashine.com',
    location: 'Riyadh, Riyadh Region',
    rating: 4.5,
    reviews: 10,
    coverage: 'Partial',
    experience: 5,
    projects: 5,
    scheduled: null,
  },
];

export default function NewQuoteRequestPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [selectedContractors, setSelectedContractors] = React.useState<string[]>(['1', '2', '3']);
  
  // Form state
  const [formData, setFormData] = React.useState({
    systemSize: '6',
    serviceArea: 'Riyadh',
    installationLocation: '',
    contactPhone: '+966564321078',
    propertyType: 'Villa',
    roofType: 'Flat Roof',
    roofOrientation: 'South',
    hasShading: false,
    notes: '',
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleContractor = (id: string) => {
    setSelectedContractors(prev => {
      if (prev.includes(id)) {
        return prev.filter(cId => cId !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form
      console.log('Submitting quote request:', { formData, selectedContractors });
      // Here you would call your API
      router.push('/quote-request');
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      router.push('/quote-request');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    router.push('/quote-request');
  };

  const getSelectedContractorsList = () => {
    return CONTRACTORS.filter(c => selectedContractors.includes(c.id));
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
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={handleBack}
                className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-black" strokeWidth={2} />
              </button>
              <h1 className="text-[32px] font-semibold text-black font-poppins">
                New Request
              </h1>
            </div>

            {/* Step Indicator */}
            <div className="mb-12">
              <div className="relative flex items-center justify-between max-w-[1609px]">
                {STEPS.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;
                  
                  return (
                    <React.Fragment key={step.id}>
                      {/* Step Circle */}
                      <div className="flex flex-col items-center relative z-10">
                        <div
                          className={`
                            w-[44px] h-[44px] rounded-full flex items-center justify-center
                            ${isActive || isCompleted ? 'bg-[#42B2B1]' : 'bg-[#d9d9d9]'}
                          `}
                        >
                          <Icon 
                            className={`w-6 h-6 ${isActive || isCompleted ? 'text-white' : 'text-[#aaaaaa]'}`}
                            strokeWidth={2}
                          />
                        </div>
                        <p
                          className={`
                            mt-3 text-[12px] font-poppins whitespace-nowrap
                            ${isActive || isCompleted ? 'font-medium text-[#222222]' : 'font-normal text-[#aaaaaa]'}
                          `}
                        >
                          {step.name}
                        </p>
                      </div>

                      {/* Connecting Line */}
                      {index < STEPS.length - 1 && (
                        <div className={`flex-1 h-[4px] rounded-lg mx-4 -mt-8 ${isCompleted ? 'bg-[#42B2B1]' : 'bg-[#d9d9d9]'}`} />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#dddddd] mb-6" />

            {/* Section Title & Description */}
            <div className="mb-8">
              <h2 className="text-[20px] font-semibold text-black font-poppins mb-2">
                {STEPS[currentStep - 1].name}
              </h2>
              <p className="text-[12px] text-[#666666] font-poppins">
                {currentStep === 1 && 'Tell us about your property and system requirements'}
                {currentStep === 2 && 'Choose exactly 3 contractors from your area for property inspection and quotes'}
                {currentStep === 3 && 'Review your selections and complete your quote request'}
              </p>
            </div>

            {/* Step Content */}
            {currentStep === 1 && (
              <div className="space-y-6 max-w-[1609px]">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* System Size */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-black font-poppins">
                      System Size (kWp)
                    </label>
                    <input
                      type="text"
                      value={formData.systemSize}
                      onChange={(e) => handleInputChange('systemSize', e.target.value)}
                      className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#444444] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                    />
                  </div>

                  {/* Service Area */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-black font-poppins">
                      Service Area
                    </label>
                    <select
                      value={formData.serviceArea}
                      onChange={(e) => handleInputChange('serviceArea', e.target.value)}
                      className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#444444] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 appearance-none bg-white cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23888888%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:24px_24px] bg-[right_12px_center] bg-no-repeat pr-12"
                    >
                      <option value="Riyadh">Riyadh</option>
                      <option value="Jeddah">Jeddah</option>
                      <option value="Dammam">Dammam</option>
                      <option value="Mecca">Mecca</option>
                      <option value="Medina">Medina</option>
                    </select>
                  </div>
                </div>

                {/* Installation Location - Full Width */}
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-black font-poppins">
                    Installation Location
                  </label>
                  <textarea
                    value={formData.installationLocation}
                    onChange={(e) => handleInputChange('installationLocation', e.target.value)}
                    placeholder="Full Address including district, city and region"
                    rows={4}
                    className="p-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#444444] placeholder:text-[#444444] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 resize-none"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="max-w-[1609px] space-y-4">
                {/* Selection Counter & Filter */}
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-medium text-[#222222] font-poppins">
                    {selectedContractors.length} / 3 contractors selected
                  </p>
                  <button className="h-8 px-3 bg-[#cccccc] rounded-[8px] text-[12px] text-[#222222] font-poppins">
                    Filter
                  </button>
                </div>

                {/* Warning Banner */}
                <div className="flex items-start gap-3 bg-[#f3bd71] border border-[#f0ad4e] rounded-[4px] p-3">
                  <Info className="w-4 h-4 text-[#60451f] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-[12px] font-medium text-[#60451f] font-poppins">
                    <strong>Important: Penalty Agreement</strong> (By proceeding, you agree that if you don't continue with any contractor after inspections, a penalty fee will apply (1% will be paid to contractors as compensation).
                  </p>
                </div>

                {/* Contractor List */}
                <div className="space-y-2">
                  {CONTRACTORS.map((contractor) => {
                    const isSelected = selectedContractors.includes(contractor.id);
                    
                    return (
                      <div
                        key={contractor.id}
                        className={`
                          h-[81px] rounded-[8px] border flex items-center gap-4 px-6 cursor-pointer transition-colors
                          ${isSelected ? 'bg-[#f5ffff] border-[#007d7d]' : 'bg-white border-[#dddddd] hover:bg-gray-50'}
                        `}
                        onClick={() => toggleContractor(contractor.id)}
                      >
                        {/* Checkbox */}
                        <div className={`
                          w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0
                          ${isSelected ? 'border-[#42B2B1]' : 'border-gray-400'}
                        `}>
                          {isSelected && (
                            <div className="w-[10px] h-[10px] rounded-full bg-[#42B2B1]" />
                          )}
                        </div>

                        {/* Avatar */}
                        <div className="w-[48px] h-[48px] bg-[#42B2B1] rounded-[4px] flex items-center justify-center flex-shrink-0">
                          <span className="text-[20px] text-[#006464] font-poppins">
                            {contractor.initials}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 grid grid-cols-[1fr_auto_auto_auto_auto] gap-8 items-center">
                          {/* Name & Contact */}
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-[20px] font-medium text-[#222222] font-poppins truncate">
                                {contractor.name}
                              </h3>
                              <div className="flex items-center gap-1 flex-shrink-0">
                                <Star className="w-[14px] h-[14px] fill-yellow-400 text-yellow-400" strokeWidth={0} />
                                <span className="text-[12px] font-medium text-[#222222] font-poppins">
                                  {contractor.rating} ({contractor.reviews})
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-[12px] text-[#888888] font-poppins">
                              <div className="flex items-center gap-1">
                                <Mail className="w-3 h-3" strokeWidth={2} />
                                <span className="truncate">{contractor.email}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" strokeWidth={2} />
                                <span className="truncate">{contractor.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Coverage */}
                          <div className="text-[16px] font-medium text-[#f0ad4e] font-poppins whitespace-nowrap">
                            {contractor.coverage}
                          </div>

                          {/* Experience */}
                          <div className="flex items-center gap-2 text-[16px] font-medium text-[#222222] font-poppins whitespace-nowrap">
                            <Briefcase className="w-5 h-5" strokeWidth={2} />
                            <span>Experience: {contractor.experience} years</span>
                          </div>

                          {/* Projects */}
                          <div className="flex items-center gap-2 text-[16px] font-medium text-[#222222] font-poppins whitespace-nowrap">
                            <Building2 className="w-5 h-5" strokeWidth={2} />
                            <span>Projects: {contractor.projects}</span>
                          </div>

                          {/* Schedule Button */}
                          <div className="flex-shrink-0">
                            {contractor.scheduled ? (
                              <div className="flex items-center gap-2 h-[39px] px-4 bg-[#bde6f2] rounded-[4px]">
                                <Calendar className="w-5 h-5 text-[#377385]" strokeWidth={2} />
                                <span className="text-[16px] font-medium text-[#377385] font-poppins whitespace-nowrap">
                                  Scheduled: {contractor.scheduled}
                                </span>
                              </div>
                            ) : (
                              <button 
                                className={`flex items-center gap-2 h-[39px] px-4 rounded-[4px] text-white font-poppins whitespace-nowrap ${
                                  isSelected ? 'bg-[#22bb33]' : 'bg-[#499ab2]'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle schedule click
                                }}
                              >
                                <Calendar className="w-5 h-5" strokeWidth={2} />
                                <span className="text-[20px]">Schedule</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="max-w-[1920px] space-y-8">
                {/* Contractors Selected */}
                <div className="space-y-4">
                  <h3 className="text-[20px] font-semibold text-black font-poppins">
                    Contractors selected
                  </h3>
                  <div className="flex gap-3">
                    {getSelectedContractorsList().map((contractor) => (
                      <div
                        key={contractor.id}
                        className="h-[42px] bg-white border border-[#dddddd] rounded-[8px] flex items-center gap-2 px-3"
                      >
                        <div className="w-[32px] h-[32px] bg-[#42B2B1] rounded-[4px] flex items-center justify-center">
                          <span className="text-[16px] text-[#006464] font-poppins">
                            {contractor.initials}
                          </span>
                        </div>
                        <span className="text-[20px] font-medium text-[#222222] font-poppins">
                          {contractor.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#dddddd]" />

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* LEFT COLUMN */}
                  <div className="space-y-8">
                    {/* System & Contact */}
                    <div className="border border-[#dddddd] rounded-[8px] p-6 space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <User className="w-6 h-6 text-black" strokeWidth={2} />
                        <h3 className="text-[20px] font-semibold text-black font-poppins">
                          System & Contact
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-[16px] font-medium text-black font-poppins">
                            System Size (kwp)
                          </label>
                          <div className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] flex items-center">
                            <span className="text-[16px] text-[#222222] font-poppins">
                              {formData.systemSize}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[16px] font-medium text-black font-poppins">
                            Service Area
                          </label>
                          <div className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] flex items-center justify-between">
                            <span className="text-[16px] text-[#222222] font-poppins">
                              {formData.serviceArea}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[16px] font-medium text-black font-poppins">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.contactPhone}
                          onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                          className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="border border-[#dddddd] rounded-[8px] p-6 space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-6 h-6 text-black" strokeWidth={2} />
                        <h3 className="text-[20px] font-semibold text-black font-poppins">
                          Location
                        </h3>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[16px] font-medium text-black font-poppins">
                          Installation Location
                        </label>
                        <textarea
                          value={formData.installationLocation}
                          onChange={(e) => handleInputChange('installationLocation', e.target.value)}
                          placeholder="Write something"
                          rows={3}
                          className="p-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="space-y-8">
                    {/* Property Details */}
                    <div className="border border-[#dddddd] rounded-[8px] p-6 space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Home className="w-6 h-6 text-black" strokeWidth={2} />
                        <h3 className="text-[20px] font-semibold text-black font-poppins">
                          Property Details
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-[16px] font-medium text-black font-poppins">
                            Property Type
                          </label>
                          <select
                            value={formData.propertyType}
                            onChange={(e) => handleInputChange('propertyType', e.target.value)}
                            className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23222222%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:24px_24px] bg-[right_12px_center] bg-no-repeat pr-12"
                          >
                            <option value="Villa">Villa</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Commercial">Commercial</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[16px] font-medium text-black font-poppins">
                            Roof Type
                          </label>
                          <select
                            value={formData.roofType}
                            onChange={(e) => handleInputChange('roofType', e.target.value)}
                            className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23222222%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:24px_24px] bg-[right_12px_center] bg-no-repeat pr-12"
                          >
                            <option value="Flat Roof">Flat Roof</option>
                            <option value="Pitched Roof">Pitched Roof</option>
                            <option value="Metal Roof">Metal Roof</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[16px] font-medium text-black font-poppins">
                          Roof Orientation
                        </label>
                        <select
                          value={formData.roofOrientation}
                          onChange={(e) => handleInputChange('roofOrientation', e.target.value)}
                          className="h-[48px] px-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#222222] font-poppins focus:outline-none focus:border-[#42B2B1] appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23222222%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:24px_24px] bg-[right_12px_center] bg-no-repeat pr-12"
                        >
                          <option value="South">South</option>
                          <option value="North">North</option>
                          <option value="East">East</option>
                          <option value="West">West</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <div className={`
                          w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center cursor-pointer
                          ${formData.hasShading ? 'border-[#42B2B1]' : 'border-gray-400'}
                        `}
                          onClick={() => handleInputChange('hasShading', !formData.hasShading)}
                        >
                          {formData.hasShading && (
                            <div className="w-[10px] h-[10px] rounded-full bg-[#42B2B1]" />
                          )}
                        </div>
                        <label 
                          className="text-[16px] text-black font-poppins cursor-pointer"
                          onClick={() => handleInputChange('hasShading', !formData.hasShading)}
                        >
                          Property has shading issues (trees, buildings, etc.)
                        </label>
                      </div>
                    </div>

                    {/* Other Information */}
                    <div className="border border-[#dddddd] rounded-[8px] p-6 space-y-4">
                      <h3 className="text-[20px] font-semibold text-black font-poppins">
                        Other Information
                      </h3>

                      <div className="flex flex-col gap-2">
                        <label className="text-[16px] font-medium text-black font-poppins">
                          Notes (Optional)
                        </label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          placeholder="Any Specification requirements, questions or preferences....."
                          rows={3}
                          className="p-3 border border-[#dddddd] rounded-[4px] text-[16px] text-[#888888] placeholder:text-[#888888] font-poppins focus:outline-none focus:border-[#42B2B1] focus:ring-2 focus:ring-[#42B2B1]/20 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-12 max-w-[1609px]">
              {/* Cancel Button */}
              <button
                onClick={handleCancel}
                className="h-[48px] w-[140px] border-2 border-[#007d7d] text-[#222222] rounded-[8px] text-[20px] font-poppins hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>

              {/* Next/Submit Button */}
              <button
                onClick={handleNext}
                disabled={currentStep === 2 && selectedContractors.length !== 3}
                className={`h-[48px] px-6 rounded-[4px] text-[20px] font-poppins flex items-center gap-2 transition-colors ${
                  currentStep === 2 && selectedContractors.length !== 3
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#42B2B1] hover:bg-[#358e8e] text-white'
                }`}
              >
                {currentStep === 3 ? 'Submit Request' : currentStep === 2 ? 'Proceed with Quote Request' : 'Select Your Contractor'}
                <ChevronRight className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
