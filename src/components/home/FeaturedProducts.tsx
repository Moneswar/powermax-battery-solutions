import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { Product } from '../../types';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (product: Product) => void;
  onViewAll: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onOpenEnquiry,
  onViewAll,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Automotive' | 'Two-Wheeler' | 'Inverter & Home UPS'>('All');

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (activeFilter === 'All') return p.featured;
    return p.category === activeFilter;
  });

  return (
    <section id="featured-products" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>High-Demand OEM Fitments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Featured Batteries
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl font-medium">
              Top-rated batteries trusted by vehicle owners, commercial fleet operators, and homeowners nationwide.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Automotive', 'Two-Wheeler', 'Inverter & Home UPS'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#DC2626] text-white shadow-sm shadow-[#DC2626]/25'
                    : 'bg-white text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                {filter === 'All' ? 'All In-Demand' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.slice(0, 6).map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onOpenEnquiry={onOpenEnquiry}
              showCompare={true}
              priorityImage={idx < 3}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-bold text-sm border border-[#E2E8F0] hover:border-[#DC2626]/50 shadow-xs hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
          >
            <Layers className="w-4 h-4 text-[#DC2626]" />
            <span>Explore Complete Catalogue (109 Batteries)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
