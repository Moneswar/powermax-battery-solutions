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
  ArrowRight,
  MessageCircle,
  RotateCcw,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Sparkles,
  Check,
  ArrowLeftRight,
  ShieldCheck,
  Zap,
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
  const [minWarranty, setMinWarranty] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'featured' | 'warranty' | 'capacity' | 'name'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
    'Lead Acid',
    'Flooded Lead Acid',
    'Maintenance Free',
    'AGM',
    'GEL',
    'VRLA',
    'Tubular',
    'Tall Tubular',
    'Flat Plate',
    'Deep Cycle',
    'Lithium-ion',
    'LiFePO4',
  ];

  const voltages = ['All', '12V', '24V', '48V'];
  const warrantyOptions = [
    { label: 'All Warranties', value: 0 },
    { label: '36+ Months', value: 36 },
    { label: '48+ Months', value: 48 },
    { label: '60+ Months', value: 60 },
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
        const matchesVehicles = p.suitableVehicles?.some((v) => v.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesModel && !matchesCap && !matchesApp && !matchesVehicles) {
          return false;
        }
      }

      // Category match
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Brand match
      if (selectedBrand !== 'All' && p.brand !== selectedBrand) {
        return false;
      }

      // Technology match
      if (selectedTech !== 'All' && p.technology !== selectedTech) {
        return false;
      }

      // Voltage match
      if (selectedVoltage !== 'All' && p.voltage !== selectedVoltage) {
        return false;
      }

      // Min Warranty match
      if (minWarranty > 0 && p.warrantyMonths < minWarranty) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'warranty') return b.warrantyMonths - a.warrantyMonths;
      if (sortBy === 'capacity') {
        const capA = parseInt(a.capacity) || 0;
        const capB = parseInt(b.capacity) || 0;
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
    minWarranty,
    sortBy,
  ]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedTech('All');
    setSelectedVoltage('All');
    setMinWarranty(0);
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedBrand !== 'All' ||
    selectedTech !== 'All' ||
    selectedVoltage !== 'All' ||
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
        title="All Battery Catalogue - Amaron, Exide, Bosch, Luminous, SF Sonic"
        description="Browse genuine automotive, commercial, bike, and inverter batteries with doorstep delivery, 30-min express installation, and official brand warranties."
      />

      <div id="products-page" className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'All Batteries' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HEADER */}
          <div className="py-8 border-b border-neutral-800">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OFFICIAL OEM BATTERY SHOWROOM</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  ALL BATTERIES
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl">
                  Explore reliable battery solutions for vehicles, homes, commercial and industrial applications.
                </p>
              </div>

              {/* View & Count Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-400">
                  Showing <strong className="text-white font-bold">{filteredProducts.length}</strong> Products
                </span>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'list' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* SEARCH BAR & QUICK CATEGORY FILTER BAR */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8 relative">
                <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by battery model (e.g. DIN55, ML40B20L), car name (e.g. Swift, Creta), capacity (Ah), or brand..."
                  className="w-full pl-12 pr-10 py-3.5 bg-neutral-900/90 border border-neutral-700/80 rounded-2xl text-white placeholder-neutral-500 text-sm focus:outline-hidden focus:border-red-500 transition-colors shadow-inner"
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
                    className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-2xl text-white text-sm focus:outline-hidden focus:border-red-500 cursor-pointer appearance-none"
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
                  className="lg:hidden px-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-2xl text-white text-sm flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <Filter className="w-4 h-4 text-red-500" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* HORIZONTAL CATEGORY CHIPS SCROLLER */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                }`}
              >
                All Categories
              </button>
              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                      : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN TWO-COLUMN CONTENT AREA (FILTERS SIDEBAR + PRODUCTS GRID) */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* DESKTOP SIDEBAR FILTERS */}
            <div className="hidden lg:block lg:col-span-3 bg-neutral-900/60 p-6 rounded-3xl border border-neutral-800/80 space-y-6 sticky top-28 backdrop-blur-md">
              <div className="flex items-center justify-between">
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

              {/* Filter 1: Brand */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2 font-bold">
                  Manufacturer / Brand
                </label>
                <div className="space-y-1 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                  <button
                    onClick={() => setSelectedBrand('All')}
                    className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      selectedBrand === 'All' ? 'bg-red-600 text-white font-bold' : 'text-neutral-300 hover:bg-neutral-800'
                    }`}
                  >
                    <span>All Brands</span>
                    <span className="text-[10px] font-mono opacity-80">{PRODUCTS_DATA.length}</span>
                  </button>
                  {BRANDS_DATA.map((b) => {
                    const count = PRODUCTS_DATA.filter((p) => p.brand === b.name).length;
                    const isSelected = selectedBrand === b.name;
                    return (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBrand(b.name)}
                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          isSelected ? 'bg-red-600 text-white font-bold' : 'text-neutral-300 hover:bg-neutral-800'
                        }`}
                      >
                        <span>{b.name}</span>
                        <span className="text-[10px] font-mono text-neutral-400">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filter 2: Technology */}
              <div className="border-t border-neutral-800 pt-4">
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2 font-bold">
                  Battery Technology
                </label>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 cursor-pointer"
                >
                  {technologies.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 3: Voltage */}
              <div className="border-t border-neutral-800 pt-4">
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2 font-bold">
                  Voltage System
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {voltages.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVoltage(v)}
                      className={`py-1.5 rounded-lg text-xs font-bold text-center border cursor-pointer ${
                        selectedVoltage === v
                          ? 'bg-red-600 border-red-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter 4: Warranty Tier */}
              <div className="border-t border-neutral-800 pt-4">
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-2 font-bold">
                  Minimum Warranty
                </label>
                <div className="space-y-1.5">
                  {warrantyOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setMinWarranty(opt.value)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                        minWarranty === opt.value
                          ? 'bg-amber-400 text-neutral-950 font-bold'
                          : 'text-neutral-300 hover:bg-neutral-800'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {minWarranty === opt.value && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badge In Sidebar */}
              <div className="border-t border-neutral-800 pt-4 text-xs text-neutral-400 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Genuine Barcoded Stock</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>Free Doorstep Fitment</span>
                </div>
              </div>
            </div>

            {/* PRODUCT RESULTS GRID (3-COLUMN ON DESKTOP, 2 ON TABLET, 1 ON MOBILE) */}
            <div className="lg:col-span-9">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-neutral-900/60 rounded-3xl border border-neutral-800 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                        className="bg-neutral-900/90 p-5 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
                      >
                        <div className="flex items-center gap-5 w-full md:w-auto">
                          <div
                            onClick={() => onSelectProduct(product)}
                            className="w-28 h-28 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-center cursor-pointer shrink-0 p-2"
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
                                <strong className="text-neutral-300 font-semibold">Fits: </strong>
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
                                : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                            }`}
                            title="Compare"
                          >
                            <ArrowLeftRight className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onSelectProduct(product)}
                            className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-750 text-white font-bold text-xs border border-neutral-700 transition-colors cursor-pointer"
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

        </div>
      </div>

      {/* FLOATING PRODUCT COMPARISON BAR */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-neutral-900/95 border border-red-500/50 backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex items-center gap-4 animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-red-500" />
            <span className="text-xs font-bold text-white">
              {compareList.length} / 3 Batteries Selected
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {compareList.map((p) => (
              <span key={p.id} className="text-xs px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
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
