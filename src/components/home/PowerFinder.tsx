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
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { QUICK_CONTACT_LINKS } from '../../config/siteConfig';

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
    const targetId = currentModelData?.recommendedProductId || 'amaron-hi-life-din-55';
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
    { id: 'UPS', label: 'Industrial UPS', icon: Zap },
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
    <section id="power-finder" className="py-20 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIGNATURE POWER FINDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            FIND YOUR PERFECT BATTERY
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Select your vehicle make or application specifications below to instantly identify the exact OEM-matched battery capacity, dimensions, and warranty options.
          </p>
        </div>

        {/* APPLICATION TYPE QUICK SELECTOR PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar justify-start lg:justify-center mb-8">
          {vehicleTypeTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTypeChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 border border-red-500 scale-105'
                    : 'bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* INTERACTIVE SELECTION GRID & RECOMMENDATION CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* STEP-BY-STEP FILTER SELECTORS */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Step 1: Choose Details
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-neutral-400 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              </div>

              {/* SELECT 1: BRAND */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                  1. Select Brand / Category:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableBrands.map((b) => {
                    const isSelected = (selectedBrand || availableBrands[0]?.name) === b.name;
                    return (
                      <button
                        key={b.name}
                        onClick={() => {
                          setSelectedBrand(b.name);
                          setSelectedModel('');
                          setSelectedSpec('');
                        }}
                        className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-red-600/15 border-red-500 text-white font-bold'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate">{b.name}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SELECT 2: MODEL */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                  2. Select Vehicle / System Model:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableModels.map((m) => {
                    const isSelected = (selectedModel || availableModels[0]?.name) === m.name;
                    return (
                      <button
                        key={m.name}
                        onClick={() => {
                          setSelectedModel(m.name);
                          setSelectedSpec('');
                        }}
                        className={`p-3 rounded-xl text-left text-xs font-medium transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-red-600/15 border-red-500 text-white font-bold'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate">{m.name}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SELECT 3: YEAR OR SPEC */}
              {availableSpecs.length > 0 && (
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                    3. Generation / Specification Sub-Variant:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableSpecs.map((spec) => {
                      const isSelected = (selectedSpec || availableSpecs[0]) === spec;
                      return (
                        <button
                          key={spec}
                          onClick={() => setSelectedSpec(spec)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400 text-neutral-950 border-amber-300 font-bold'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          {spec}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Assistance callout */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-neutral-500" />
                <span>Can't locate your model? We stock 100+ vehicle variants.</span>
              </div>
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="text-red-400 font-bold hover:underline"
              >
                Call Specialist
              </a>
            </div>
          </div>

          {/* RECOMMENDED BATTERY SHOWCASE CARD */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-950 to-neutral-900 p-6 sm:p-8 rounded-2xl border border-red-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Top Match Tag */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                EXACT FIT RECOMMENDED
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {recommendedProduct.modelCode}
              </span>
            </div>

            {/* Real Product Photograph Render */}
            <div className="my-auto py-3 flex items-center justify-center">
              <ProductImage
                product={recommendedProduct}
                aspectRatio="4/3"
                className="h-56 sm:h-64 w-full bg-transparent border-0"
              />
            </div>

            {/* Product Details & Specs */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div>
                <div className="text-xs font-mono uppercase text-red-400 font-bold">
                  {recommendedProduct.brand} • {recommendedProduct.category}
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {recommendedProduct.name}
                </h4>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-3 gap-2 bg-neutral-900/80 p-3 rounded-xl border border-neutral-800 text-center">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block">VOLTAGE</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{recommendedProduct.voltage}</span>
                </div>
                <div className="border-x border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-400 block">CAPACITY</span>
                  <span className="text-xs sm:text-sm font-bold text-amber-400">{recommendedProduct.capacity}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block">WARRANTY</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400">{recommendedProduct.warrantyMonths}M</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => onSelectProduct(recommendedProduct)}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenEnquiry(recommendedProduct)}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 font-bold text-xs border border-neutral-700 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enquire Price</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-neutral-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Includes Free Terminal Clamping & Alternator Check</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
