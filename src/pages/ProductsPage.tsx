import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { CATEGORIES_DATA } from '../data/categories';
import { BRANDS_DATA } from '../data/brands';
import { ProductCard } from '../components/products/ProductCard';
import { ProductImage } from '../components/common/ProductImage';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Product, BatteryCategory } from '../types';
import {
  Search,
  Filter,
  X,
  RotateCcw,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Check,
  ArrowLeftRight,
  ShieldCheck,
  Shield,
  Zap,
  CircleDollarSign,
  Truck,
  Headphones,
  Home,
  Sun,
  Server,
  Car,
  Bike,
  Tractor,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Square,
  CheckSquare,
  Sparkles,
} from 'lucide-react';
import { Modal } from '../components/common/Modal';

interface ProductsPageProps {
  initialCategory?: BatteryCategory | null;
  initialBrand?: string | null;
  onNavigateHome: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory,
  initialBrand,
  onNavigateHome,
  onSelectProduct,
  onOpenEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<BatteryCategory | 'All'>(
    initialCategory || 'All'
  );
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand || 'All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedVoltage, setSelectedVoltage] = useState<string>('All');
  const [selectedCapacityRange, setSelectedCapacityRange] = useState<string>('All');
  const [minCca, setMinCca] = useState<number>(0);
  const [minWarranty, setMinWarranty] = useState<number>(0);
  const [selectedApplication, setSelectedApplication] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'warranty' | 'capacity' | 'name'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Collapsible Accordion Sections in Desktop Sidebar
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    brand: true,
    tech: false,
    voltage: false,
    capacity: false,
    cca: false,
    application: false,
    warranty: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Comparison State (up to 3 products)
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Synchronize when initial props change
  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
    if (initialBrand) setSelectedBrand(initialBrand);
  }, [initialCategory, initialBrand]);

  const technologies = [
    'All',
    'Flooded Lead Acid',
    'Maintenance Free',
    'Tubular',
    'Tall Tubular',
    'Flat Plate',
    'AGM',
    'EFB',
    'VRLA',
    'SMF',
    'Deep Cycle',
  ];

  const voltages = ['All', '6V', '12V', '24V', '48V'];

  const capacityRanges = [
    { label: 'All Capacities', value: 'All' },
    { label: 'Up to 20Ah', value: '0-20' },
    { label: '21–50Ah', value: '21-50' },
    { label: '51–100Ah', value: '51-100' },
    { label: '101–150Ah', value: '101-150' },
    { label: '151–200Ah', value: '151-200' },
    { label: '200Ah+', value: '201+' },
  ];

  const ccaOptions = [
    { label: 'All CCA Ratings', value: 0 },
    { label: '300+ CCA', value: 300 },
    { label: '400+ CCA', value: 400 },
    { label: '500+ CCA', value: 500 },
    { label: '600+ CCA', value: 600 },
    { label: '800+ CCA', value: 800 },
  ];

  const warrantyOptions = [
    { label: 'All Warranties', value: 0 },
    { label: '36+ Months', value: 36 },
    { label: '48+ Months', value: 48 },
    { label: '60+ Months', value: 60 },
  ];

  const categoryTabList = [
    { id: 'All', label: 'All Batteries', icon: LayoutGrid },
    { id: 'Automotive', label: 'Car & SUV Batteries', icon: Car },
    { id: 'Two-Wheeler', label: 'Motorcycle & Scooter', icon: Bike },
    { id: 'Three-Wheeler', label: 'Three-Wheeler', icon: Car },
    { id: 'Commercial', label: 'Truck & Bus', icon: Truck },
    { id: 'Agricultural', label: 'Tractor & Farm', icon: Tractor },
    { id: 'Inverter & Home UPS', label: 'Inverter & Home Backup', icon: Home },
    { id: 'Solar Storage', label: 'Solar Batteries', icon: Sun },
    { id: 'E-Rickshaw', label: 'E-Rickshaw', icon: Zap },
    { id: 'Industrial & Telecom', label: 'UPS & Industrial', icon: Server },
    { id: 'Generator & Genset', label: 'Generator', icon: Zap },
  ];

  const sidebarApplications = [
    { id: 'Car', label: 'Car & SUV', icon: Car },
    { id: 'Bike', label: 'Motorcycle & Scooter', icon: Bike },
    { id: 'Three-Wheeler', label: 'Three-Wheeler', icon: Car },
    { id: 'Truck', label: 'Truck & Bus', icon: Truck },
    { id: 'Tractor', label: 'Tractor & Farm', icon: Tractor },
    { id: 'Inverter', label: 'Inverter & Home Backup', icon: Home },
    { id: 'Solar', label: 'Solar Batteries', icon: Sun },
    { id: 'E-Rickshaw', label: 'E-Rickshaw Batteries', icon: Zap },
    { id: 'UPS', label: 'UPS & Industrial', icon: Server },
    { id: 'Generator', label: 'Generator / Genset', icon: Zap },
  ];

  const primaryBrands = [
    { id: 'amaron', name: 'Amaron' },
    { id: 'exide', name: 'Exide' },
    { id: 'sf-sonic', name: 'SF Sonic' },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesModel = p.modelCode.toLowerCase().includes(q);
        const matchesCap = p.capacity.toLowerCase().includes(q);
        const matchesApp = p.application.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        const matchesVehicles = p.suitableVehicles?.some((v) => v.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesModel && !matchesCap && !matchesApp && !matchesCat && !matchesVehicles) {
          return false;
        }
      }

      // Category match
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Brand match
      if (selectedBrand !== 'All' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      // Technology match
      if (selectedTech !== 'All') {
        const techLower = selectedTech.toLowerCase().replace(/[\s-]/g, '');
        const pTechLower = p.technology.toLowerCase().replace(/[\s-]/g, '');
        if (!pTechLower.includes(techLower) && !techLower.includes(pTechLower)) {
          return false;
        }
      }

      // Voltage match
      if (selectedVoltage !== 'All' && p.voltage !== selectedVoltage) {
        return false;
      }

      // Capacity Range match
      if (selectedCapacityRange !== 'All') {
        const cap = p.capacityNumeric || parseInt(p.capacity) || 0;
        if (selectedCapacityRange === '0-20' && cap > 20) return false;
        if (selectedCapacityRange === '21-50' && (cap < 21 || cap > 50)) return false;
        if (selectedCapacityRange === '51-100' && (cap < 51 || cap > 100)) return false;
        if (selectedCapacityRange === '101-150' && (cap < 101 || cap > 150)) return false;
        if (selectedCapacityRange === '151-200' && (cap < 151 || cap > 200)) return false;
        if (selectedCapacityRange === '201+' && cap <= 200) return false;
      }

      // Min CCA match
      if (minCca > 0) {
        if (!p.cca) return false;
        const ccaVal = parseInt(p.cca.replace(/\D/g, '')) || 0;
        if (ccaVal < minCca) return false;
      }

      // Min Warranty match
      if (minWarranty > 0 && p.warrantyMonths < minWarranty) {
        return false;
      }

      // Application match
      if (selectedApplication !== 'All') {
        const appQ = selectedApplication.toLowerCase();
        const matchesApp = p.application.toLowerCase().includes(appQ);
        const matchesCat = p.category.toLowerCase().includes(appQ);
        if (!matchesApp && !matchesCat) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'warranty') return b.warrantyMonths - a.warrantyMonths;
      if (sortBy === 'capacity') {
        const capA = a.capacityNumeric || parseInt(a.capacity) || 0;
        const capB = b.capacityNumeric || parseInt(b.capacity) || 0;
        return capB - capA;
      }
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedTech,
    selectedVoltage,
    selectedCapacityRange,
    minCca,
    minWarranty,
    selectedApplication,
    sortBy,
  ]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedTech('All');
    setSelectedVoltage('All');
    setSelectedCapacityRange('All');
    setMinCca(0);
    setSelectedApplication('All');
    setMinWarranty(0);
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedBrand !== 'All' ||
    selectedTech !== 'All' ||
    selectedVoltage !== 'All' ||
    selectedCapacityRange !== 'All' ||
    minCca > 0 ||
    selectedApplication !== 'All' ||
    minWarranty > 0;

  const toggleCompare = (product: Product) => {
    if (compareList.some((p) => p.id === product.id)) {
      setCompareList(compareList.filter((p) => p.id !== product.id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare a maximum of 3 batteries simultaneously.');
        return;
      }
      setCompareList([...compareList, product]);
    }
  };

  return (
    <>
      <SeoHead
        title="All Battery Catalogue - Amaron, Exide, SF Sonic"
        description="Browse genuine automotive, commercial, bike, and inverter batteries with doorstep delivery, express installation, and official brand warranties."
      />

      <div id="products-page" className="min-h-screen bg-[#07090e] text-neutral-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'All Batteries' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HEADER: TITLE + COUNT + VIEW TOGGLES */}
          <div className="py-6 border-b border-[#1a2232]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  ALL BATTERIES
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
                  Explore reliable battery solutions for vehicles, homes, commercial and industrial applications.
                </p>
              </div>

              {/* View & Count Controls */}
              <div className="flex items-center gap-3 self-start md:self-end">
                <span className="text-xs font-mono text-neutral-400">
                  Showing <strong className="text-white font-bold">{filteredProducts.length}</strong> Products
                </span>

                {/* View Mode Toggle Buttons matching reference */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-xl transition-all cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                        : 'bg-[#0e131d] border border-[#1e2638] text-neutral-400 hover:text-white'
                    }`}
                    title="Grid View"
                    aria-label="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-xl transition-all cursor-pointer ${
                      viewMode === 'list'
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                        : 'bg-[#0e131d] border border-[#1e2638] text-neutral-400 hover:text-white'
                    }`}
                    title="List View"
                    aria-label="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* SEARCH BAR & SORT BY ROW */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-3.5">
              <div className="lg:col-span-8 relative">
                <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by battery model (e.g. DIN55, ML40B20L), car name (e.g. Swift, Creta), capacity (Ah), or brand..."
                  className="w-full pl-11 pr-10 py-3.5 bg-[#0b0f17] border border-[#1d273a] rounded-2xl text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-hidden focus:border-red-500 transition-colors shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div className="lg:col-span-4 flex items-center gap-3">
                <div className="w-full relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-4 py-3.5 bg-[#0b0f17] border border-[#1d273a] rounded-2xl text-white text-xs sm:text-sm focus:outline-hidden focus:border-red-500 cursor-pointer appearance-none pr-10 font-medium"
                  >
                    <option value="featured">Sort by: Recommended & Featured</option>
                    <option value="warranty">Sort by: Longest Warranty</option>
                    <option value="capacity">Sort by: Highest Capacity (Ah)</option>
                    <option value="name">Sort by: Brand / Model Name (A-Z)</option>
                  </select>
                  <SlidersHorizontal className="w-4 h-4 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Mobile Filter Trigger Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden px-4 py-3.5 bg-[#0b0f17] border border-[#1d273a] rounded-2xl text-white text-xs sm:text-sm flex items-center gap-2 cursor-pointer shrink-0 font-medium"
                >
                  <Filter className="w-4 h-4 text-red-500" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* HORIZONTAL CATEGORY PILL SCROLLER WITH ICONS MATCHING REFERENCE */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
              {categoryTabList.map((cat) => {
                const IconComp = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                        : 'bg-[#0c1017] text-neutral-300 hover:text-white hover:bg-[#141b27] border border-[#1d273a]'
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN TWO-COLUMN CONTENT AREA (FILTERS SIDEBAR + PRODUCTS GRID) */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            
            {/* DESKTOP SIDEBAR FILTERS ("Refine Catalogue") MATCHING REFERENCE EXACTLY */}
            <div className="hidden lg:block lg:col-span-3 bg-[#0d121c]/90 p-5 rounded-3xl border border-[#1d273a] space-y-4 sticky top-28 backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 border-b border-[#1a2232]">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Filter className="w-4 h-4 text-red-500" />
                  <span>Refine Catalogue</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetAllFilters}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Section 1: MANUFACTURER / BRAND */}
              <div>
                <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-2 font-bold tracking-wider">
                  MANUFACTURER / BRAND
                </label>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedBrand('All')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedBrand === 'All'
                        ? 'bg-red-600 text-white font-bold shadow-sm'
                        : 'text-neutral-300 hover:bg-[#141a27] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>All Brands</span>
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${selectedBrand === 'All' ? 'bg-red-700 text-white' : 'text-neutral-400 bg-[#070a10]'}`}>
                      {PRODUCTS_DATA.length}
                    </span>
                  </button>

                  {primaryBrands.map((b) => {
                    const count = PRODUCTS_DATA.filter(
                      (p) => p.brand.toLowerCase() === b.name.toLowerCase()
                    ).length;
                    const isSelected = selectedBrand.toLowerCase() === b.name.toLowerCase();
                    return (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBrand(isSelected ? 'All' : b.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#141d2c] border border-red-500/50 text-white font-bold'
                            : 'text-neutral-300 hover:bg-[#141a27] hover:text-white border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isSelected ? (
                            <CheckSquare className="w-3.5 h-3.5 text-red-500" />
                          ) : (
                            <Square className="w-3.5 h-3.5 text-neutral-500" />
                          )}
                          <span>{b.name}</span>
                        </div>
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${isSelected ? 'text-red-400 bg-red-950/40' : 'text-neutral-400 bg-[#070a10]'}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Accordion 2: BATTERY TECHNOLOGY */}
              <div className="border-t border-[#1a2232] pt-3">
                <button
                  type="button"
                  onClick={() => toggleSection('tech')}
                  className="w-full flex items-center justify-between text-[11px] font-mono uppercase text-neutral-400 hover:text-white font-bold tracking-wider cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
                    <span>BATTERY TECHNOLOGY</span>
                  </div>
                  {openSections.tech ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openSections.tech && (
                  <div className="relative mt-2">
                    <select
                      value={selectedTech}
                      onChange={(e) => setSelectedTech(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#070a10] border border-[#1d273a] rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 cursor-pointer appearance-none pr-8 font-medium"
                    >
                      {technologies.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Accordion 3: VOLTAGE SYSTEM */}
              <div className="border-t border-[#1a2232] pt-3">
                <button
                  type="button"
                  onClick={() => toggleSection('voltage')}
                  className="w-full flex items-center justify-between text-[11px] font-mono uppercase text-neutral-400 hover:text-white font-bold tracking-wider cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-neutral-400" />
                    <span>VOLTAGE SYSTEM</span>
                  </div>
                  {openSections.voltage ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openSections.voltage && (
                  <div className="grid grid-cols-5 gap-1 mt-2">
                    {voltages.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVoltage(v)}
                        className={`py-1.5 rounded-lg text-[11px] font-bold text-center border transition-all cursor-pointer ${
                          selectedVoltage === v
                            ? 'bg-red-600 border-red-500 text-white shadow-xs'
                            : 'bg-[#070a10] border-[#1d273a] text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 4: CAPACITY (Ah) */}
              <div className="border-t border-[#1a2232] pt-3">
                <button
                  type="button"
                  onClick={() => toggleSection('capacity')}
                  className="w-full flex items-center justify-between text-[11px] font-mono uppercase text-neutral-400 hover:text-white font-bold tracking-wider cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-neutral-400" />
                    <span>CAPACITY (Ah)</span>
                  </div>
                  {openSections.capacity ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openSections.capacity && (
                  <div className="space-y-1 mt-2">
                    {capacityRanges.map((rng) => {
                      const isSelected = selectedCapacityRange === rng.value;
                      const count = rng.value === 'All'
                        ? PRODUCTS_DATA.length
                        : PRODUCTS_DATA.filter((p) => {
                            const cap = p.capacityNumeric || parseInt(p.capacity) || 0;
                            if (rng.value === '0-20') return cap <= 20;
                            if (rng.value === '21-50') return cap >= 21 && cap <= 50;
                            if (rng.value === '51-100') return cap >= 51 && cap <= 100;
                            if (rng.value === '101-150') return cap >= 101 && cap <= 150;
                            if (rng.value === '151-200') return cap >= 151 && cap <= 200;
                            if (rng.value === '201+') return cap > 200;
                            return true;
                          }).length;

                      return (
                        <button
                          key={rng.value}
                          onClick={() => setSelectedCapacityRange(rng.value)}
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-red-600 text-white font-bold shadow-sm'
                              : 'text-neutral-300 hover:bg-[#141a27] hover:text-white'
                          }`}
                        >
                          <span>{rng.label}</span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isSelected ? 'bg-red-700 text-white' : 'text-neutral-500'}`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Accordion 5: CCA (Cold Cranking Amps) */}
              <div className="border-t border-[#1a2232] pt-3">
                <button
                  type="button"
                  onClick={() => toggleSection('cca')}
                  className="w-full flex items-center justify-between text-[11px] font-mono uppercase text-neutral-400 hover:text-white font-bold tracking-wider cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-neutral-400" />
                    <span>CCA (Cold Cranking Amps)</span>
                  </div>
                  {openSections.cca ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openSections.cca && (
                  <div className="space-y-1 mt-2">
                    {ccaOptions.map((opt) => {
                      const isSelected = minCca === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => setMinCca(opt.value)}
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-red-600 text-white font-bold'
                              : 'text-neutral-300 hover:bg-[#141a27] hover:text-white'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Accordion 6: APPLICATION */}
              <div className="border-t border-[#1a2232] pt-3">
                <button
                  type="button"
                  onClick={() => toggleSection('application')}
                  className="w-full flex items-center justify-between text-[11px] font-mono uppercase text-neutral-400 hover:text-white font-bold tracking-wider cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-neutral-400" />
                    <span>APPLICATION</span>
                  </div>
                  {openSections.application ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openSections.application && (
                  <div className="space-y-1 max-h-56 overflow-y-auto custom-scrollbar pr-1 mt-2">
                    {sidebarApplications.map((app) => {
                      const IconComp = app.icon;
                      const isSelected = selectedApplication === app.id;
                      const count = PRODUCTS_DATA.filter((p) => {
                        const appQ = app.id.toLowerCase();
                        return p.application.toLowerCase().includes(appQ) || p.category.toLowerCase().includes(appQ);
                      }).length;

                      return (
                        <button
                          key={app.id}
                          onClick={() => setSelectedApplication(isSelected ? 'All' : app.id)}
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-red-600 text-white font-bold'
                              : 'text-neutral-300 hover:bg-[#141a27] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
                            <span>{app.label}</span>
                          </div>
                          <span className={`text-[10px] font-mono ${isSelected ? 'text-white' : 'text-neutral-500'}`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Accordion 7: WARRANTY */}
              <div className="border-t border-[#1a2232] pt-3">
                <button
                  type="button"
                  onClick={() => toggleSection('warranty')}
                  className="w-full flex items-center justify-between text-[11px] font-mono uppercase text-neutral-400 hover:text-white font-bold tracking-wider cursor-pointer mb-2"
                >
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                    <span>WARRANTY</span>
                  </div>
                  {openSections.warranty ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {openSections.warranty && (
                  <div className="space-y-1.5 mt-2">
                    {warrantyOptions.map((opt) => {
                      const isSelected = minWarranty === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => setMinWarranty(opt.value)}
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#f59e0b] text-neutral-950 font-bold shadow-sm'
                              : 'text-neutral-300 hover:bg-[#141a27] hover:text-white'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Clear All Filters Action matching reference button */}
              <div className="pt-3 border-t border-[#1a2232]">
                <button
                  onClick={resetAllFilters}
                  className="w-full py-2.5 rounded-xl bg-[#070a10] hover:bg-[#111724] border border-[#1d273a] hover:border-red-500/50 text-neutral-300 hover:text-white text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear All Filters</span>
                </button>
              </div>

            </div>

            {/* PRODUCT RESULTS GRID (3-COLUMN ON DESKTOP, 2 ON TABLET, 1 ON MOBILE) */}
            <div className="lg:col-span-9">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-[#0d121c]/90 rounded-3xl border border-[#1d273a] space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#131926] flex items-center justify-center mx-auto text-neutral-500">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">No Matching Batteries Found</h3>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                    Try adjusting your search query or reset some filters to view our full catalogue of authentic batteries.
                  </p>
                  <button
                    onClick={resetAllFilters}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, idx) => {
                    const isComparing = compareList.some((p) => p.id === product.id);
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                        onOpenEnquiry={onOpenEnquiry}
                        isCompared={isComparing}
                        onToggleCompare={toggleCompare}
                        showCompare={true}
                        priorityImage={idx < 6}
                      />
                    );
                  })}
                </div>
              ) : (
                /* LIST VIEW WITH AUTHENTIC PRODUCT PHOTOGRAPHY */
                <div className="space-y-4">
                  {filteredProducts.map((product) => {
                    const isComparing = compareList.some((p) => p.id === product.id);
                    return (
                      <div
                        key={product.id}
                        className="bg-[#0d121c]/90 p-5 rounded-3xl border border-[#1d273a] hover:border-neutral-700 transition-all flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
                      >
                        <div className="flex items-center gap-5 w-full md:w-auto">
                          <div
                            onClick={() => onSelectProduct(product)}
                            className="w-28 h-28 bg-[#070a10] rounded-2xl border border-[#1d273a] flex items-center justify-center cursor-pointer shrink-0 p-2"
                          >
                            <ProductImage
                              product={product}
                              aspectRatio="square"
                              className="w-full h-full bg-transparent border-0"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono uppercase font-bold text-red-400">{product.brand}</span>
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold">
                                {product.warrantyMonths}M Warranty
                              </span>
                            </div>
                            <h3
                              onClick={() => onSelectProduct(product)}
                              className="text-lg font-bold text-white hover:text-red-400 cursor-pointer transition-colors mt-0.5"
                            >
                              {product.name}
                            </h3>
                            <p className="text-xs text-neutral-400 mt-1 font-mono">
                              {product.voltage} • {product.capacity} • {product.technology} {product.cca ? `• ${product.cca}` : ''}
                            </p>
                            {product.suitableVehicles && product.suitableVehicles.length > 0 && (
                              <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                                <strong className="text-neutral-300 font-semibold">Suitable for: </strong>
                                {product.suitableVehicles.slice(0, 3).join(', ')}...
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                          <button
                            onClick={() => toggleCompare(product)}
                            className={`p-3 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                              isComparing
                                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                                : 'bg-[#070a10] border-[#1d273a] text-neutral-400 hover:text-white'
                            }`}
                            title="Compare"
                          >
                            <ArrowLeftRight className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onSelectProduct(product)}
                            className="px-5 py-3 rounded-xl bg-[#111724] hover:bg-[#182133] text-white font-bold text-xs border border-[#1d273a] transition-colors cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => onOpenEnquiry(product)}
                            className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Enquire</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* BOTTOM TRUST BADGE BAR MATCHING REFERENCE IMAGE */}
          <div className="mt-12 pt-8 border-t border-[#1a2232]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center sm:text-left">
              
              {/* Badge 1: 100% Genuine Products */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white tracking-tight">100% Genuine Products</span>
              </div>

              {/* Badge 2: Best Price Guaranteed */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                  <CircleDollarSign className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white tracking-tight">Best Price Guaranteed</span>
              </div>

              {/* Badge 3: 36+ Months Warranty */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white tracking-tight">36+ Months Warranty</span>
              </div>

              {/* Badge 4: Fast Delivery */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white tracking-tight">Fast Delivery</span>
              </div>

              {/* Badge 5: Expert Support */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white tracking-tight">Expert Support</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FLOATING PRODUCT COMPARISON BAR */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0d121c]/95 border border-red-500/50 backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex items-center gap-4 animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-red-500" />
            <span className="text-xs font-bold text-white">
              {compareList.length} / 3 Batteries Selected
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {compareList.map((p) => (
              <span key={p.id} className="text-xs px-2.5 py-1 rounded bg-[#070a10] border border-[#1d273a] text-neutral-300">
                {p.brand} {p.name.split(' ')[0]}
              </span>
            ))}
          </div>

          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            Compare Specs
          </button>
          <button
            onClick={() => setCompareList([])}
            className="text-xs text-neutral-400 hover:text-white cursor-pointer"
          >
            Clear
          </button>
        </div>
      )}

      {/* MOBILE DRAWER FILTERS */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-neutral-950/95 backdrop-blur-xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Filter className="w-4 h-4 text-red-500" />
              <span>Refine Catalogue</span>
            </div>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-6 space-y-6">
            {/* Mobile Brand Filter */}
            <div>
              <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-2 font-bold">
                MANUFACTURER / BRAND
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setIsMobileFilterOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold ${
                    selectedBrand === 'All' ? 'bg-red-600 text-white font-bold' : 'text-neutral-300 hover:bg-[#141a27]'
                  }`}
                >
                  <span>All Brands</span>
                  <span>{PRODUCTS_DATA.length}</span>
                </button>
                {primaryBrands.map((b) => {
                  const count = PRODUCTS_DATA.filter((p) => p.brand.toLowerCase() === b.name.toLowerCase()).length;
                  const isSelected = selectedBrand.toLowerCase() === b.name.toLowerCase();
                  return (
                    <button
                      key={b.id}
                      onClick={() => {
                        setSelectedBrand(b.name);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold ${
                        isSelected ? 'bg-red-600 text-white font-bold' : 'text-neutral-300 hover:bg-[#141a27]'
                      }`}
                    >
                      <span>{b.name}</span>
                      <span>{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Tech Filter */}
            <div className="border-t border-[#1a2232] pt-4">
              <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-2 font-bold">
                BATTERY TECHNOLOGY
              </label>
              <select
                value={selectedTech}
                onChange={(e) => {
                  setSelectedTech(e.target.value);
                  setIsMobileFilterOpen(false);
                }}
                className="w-full px-3 py-2.5 bg-[#070a10] border border-[#1d273a] rounded-xl text-white text-xs font-medium"
              >
                {technologies.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Mobile Voltage Filter */}
            <div className="border-t border-[#1a2232] pt-4">
              <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-2 font-bold">
                VOLTAGE SYSTEM
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {voltages.map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setSelectedVoltage(v);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`py-2 rounded-xl text-xs font-bold border text-center ${
                      selectedVoltage === v ? 'bg-red-600 border-red-500 text-white' : 'bg-[#070a10] border-[#1d273a] text-neutral-300'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Capacity Filter */}
            <div className="border-t border-[#1a2232] pt-4">
              <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-2 font-bold">
                CAPACITY (Ah)
              </label>
              <div className="space-y-1">
                {capacityRanges.map((rng) => (
                  <button
                    key={rng.value}
                    onClick={() => {
                      setSelectedCapacityRange(rng.value);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold ${
                      selectedCapacityRange === rng.value ? 'bg-red-600 text-white font-bold' : 'text-neutral-300 hover:bg-[#141a27]'
                    }`}
                  >
                    <span>{rng.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Warranty Filter */}
            <div className="border-t border-[#1a2232] pt-4">
              <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-2 font-bold">
                MINIMUM WARRANTY
              </label>
              <div className="space-y-1.5">
                {warrantyOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setMinWarranty(opt.value);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold ${
                      minWarranty === opt.value ? 'bg-[#f59e0b] text-neutral-950 font-bold' : 'text-neutral-300 hover:bg-[#141a27]'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {minWarranty === opt.value && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-[#1a2232] space-y-2">
              <button
                onClick={() => {
                  resetAllFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-[#070a10] border border-[#1d273a] text-neutral-300 font-bold text-xs"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COMPARISON MODAL */}
      <Modal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        title="Side-by-Side Battery Comparison"
        maxWidth="4xl"
      >
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="p-3 text-neutral-400 font-mono uppercase">Attribute</th>
                {compareList.map((p) => (
                  <th key={p.id} className="p-3 text-white font-bold min-w-[200px]">
                    <div className="text-xs font-mono text-red-400">{p.brand}</div>
                    <div className="text-sm font-bold">{p.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-neutral-300">
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Product Image</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3">
                    <ProductImage product={p} aspectRatio="square" className="h-28 w-28 mx-auto" />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Voltage</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3 font-bold text-white">{p.voltage}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Capacity (Ah)</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3 font-bold text-amber-400">{p.capacity}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Cold Cranking Amps (CCA)</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3 text-white">{p.cca || 'N/A (Non-Cranking)'}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Technology</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3 text-white">{p.technology}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Official Warranty</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3 font-bold text-emerald-400">
                    {p.warrantyMonths} Months ({p.warrantyDetails})
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Dimensions</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3 font-mono text-neutral-300">{p.dimensions}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Terminal Layout</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3 text-neutral-300">{p.terminalLayout}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-neutral-400">Actions</td>
                {compareList.map((p) => (
                  <td key={p.id} className="p-3">
                    <button
                      onClick={() => {
                        setIsCompareModalOpen(false);
                        onOpenEnquiry(p);
                      }}
                      className="w-full py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs"
                    >
                      Enquire Now
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>

    </>
  );
};
