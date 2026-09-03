import React, { useState, useMemo } from 'react';
import { POWER_FINDER_DATA } from '../../data/powerFinderData';
import { PRODUCTS_DATA } from '../../data/products';
import { ProductImage } from '../common/ProductImage';
import { Product } from '../../types';
import {
  Car,
  Bike,
  Zap,
  Truck,
  Sun,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

interface PowerFinderProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (product: Product) => void;
}

export const PowerFinder: React.FC<PowerFinderProps> = ({
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const [selectedType, setSelectedType] = useState<string>('Car');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedSpec, setSelectedSpec] = useState<string>('');

  // Get data object for current vehicle/app type
  const currentTypeData = useMemo(() => {
    return POWER_FINDER_DATA.find((item) => item.type === selectedType) || POWER_FINDER_DATA[0];
  }, [selectedType]);

  // Available brands for current type
  const availableBrands = useMemo(() => {
    return currentTypeData?.brands || [];
  }, [currentTypeData]);

  // Available models for current brand
  const currentBrandData = useMemo(() => {
    if (!selectedBrand && availableBrands.length > 0) return availableBrands[0];
    return availableBrands.find((b) => b.name === selectedBrand) || availableBrands[0];
  }, [selectedBrand, availableBrands]);

  // Available models list
  const availableModels = useMemo(() => {
    return currentBrandData?.models || [];
  }, [currentBrandData]);

  // Current model data
  const currentModelData = useMemo(() => {
    if (!selectedModel && availableModels.length > 0) return availableModels[0];
    return availableModels.find((m) => m.name === selectedModel) || availableModels[0];
  }, [selectedModel, availableModels]);

  // Available specs / years
  const availableSpecs = useMemo(() => {
    return currentModelData?.yearsOrSpecs || [];
  }, [currentModelData]);

  // Recommended product resolution
  const recommendedProduct = useMemo(() => {
    const targetId = currentModelData?.recommendedProductId || 'amaron-hilife-pro-din55';
    return PRODUCTS_DATA.find((p) => p.id === targetId) || PRODUCTS_DATA[0];
  }, [currentModelData]);

  const vehicleTypeTabs = [
    { id: 'Car', label: 'Car & SUV', icon: Car },
    { id: 'Bike', label: 'Bike & Scooter', icon: Bike },
    { id: 'Inverter', label: 'Home Inverter', icon: Zap },
    { id: 'Solar', label: 'Solar Storage', icon: Sun },
    { id: 'Truck', label: 'Commercial Truck', icon: Truck },
    { id: 'Tractor', label: 'Tractor / Agri', icon: Truck },
    { id: 'Auto Rickshaw', label: 'Auto Rickshaw / EV', icon: Zap },
  ];

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedSpec('');
  };

  const handleReset = () => {
    setSelectedType('Car');
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedSpec('');
  };

  return (
    <section id="power-finder" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Smart Battery Finder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Find Your Exact Compatible Battery
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] font-medium">
            Select your vehicle or application below to instantly discover genuine manufacturer-recommended batteries with exact capacity and fitment specifications.
          </p>
        </div>

        {/* MAIN FINDER CARD */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xs p-6 sm:p-8 lg:p-10">
          
          {/* 1. VEHICLE / APPLICATION TYPE SELECTOR TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-8">
            {vehicleTypeTabs.map((tab) => {
              const IconComp = tab.icon;
              const isSelected = selectedType === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTypeChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#DC2626] text-white shadow-sm shadow-[#DC2626]/25'
                      : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 2. THREE-STEP DROPDOWNS (LEFT 7 COLUMNS) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* STEP 1: SELECT BRAND / MAKE */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-[10px] font-black flex items-center justify-center">1</span>
                    <span>Make / Brand</span>
                  </label>
                  <select
                    value={selectedBrand || availableBrands[0]?.name || ''}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setSelectedModel('');
                      setSelectedSpec('');
                    }}
                    className="w-full px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-hidden focus:border-[#DC2626] cursor-pointer"
                  >
                    {availableBrands.map((b) => (
                      <option key={b.name} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* STEP 2: SELECT MODEL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-[10px] font-black flex items-center justify-center">2</span>
                    <span>Model</span>
                  </label>
                  <select
                    value={selectedModel || availableModels[0]?.name || ''}
                    onChange={(e) => {
                      setSelectedModel(e.target.value);
                      setSelectedSpec('');
                    }}
                    className="w-full px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-hidden focus:border-[#DC2626] cursor-pointer"
                  >
                    {availableModels.map((m) => (
                      <option key={m.name} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* STEP 3: FUEL / SPEC / YEAR */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-[10px] font-black flex items-center justify-center">3</span>
                    <span>Variant / Fuel</span>
                  </label>
                  <select
                    value={selectedSpec || availableSpecs[0] || ''}
                    onChange={(e) => setSelectedSpec(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-hidden focus:border-[#DC2626] cursor-pointer"
                  >
                    {availableSpecs.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Selection Summary */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>
                    Selected: {currentBrandData?.name} {currentModelData?.name} ({selectedSpec || availableSpecs[0] || 'Standard'})
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Selection</span>
                </button>
              </div>
            </div>

            {/* 3. RECOMMENDED BATTERY CARD (RIGHT 5 COLUMNS) */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full border border-[#DC2626]/20">
                  Recommended Fitment
                </span>
                <span className="text-xs font-bold text-[#0F172A]">{recommendedProduct.warrantyMonths}M Warranty</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-28 h-24 bg-white rounded-xl border border-[#E2E8F0] p-1 flex items-center justify-center shrink-0">
                  <ProductImage
                    product={recommendedProduct}
                    aspectRatio="square"
                    className="h-full w-full bg-transparent border-0"
                    priority={false}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] leading-snug">
                    {recommendedProduct.name}
                  </h4>
                  <p className="text-xs text-[#64748B] font-semibold mt-1">
                    {recommendedProduct.capacity} • {recommendedProduct.voltage} • {recommendedProduct.brand}
                  </p>
                  <p className="text-[11px] text-[#16A34A] font-bold mt-1">
                    ✓ OEM Certified Fitment
                  </p>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectProduct(recommendedProduct)}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] hover:bg-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenEnquiry(recommendedProduct)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
