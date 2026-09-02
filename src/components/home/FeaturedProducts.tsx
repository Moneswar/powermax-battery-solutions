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
    <section id="featured-products" className="py-20 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HIGH-DEMAND OEM FITMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              FEATURED BATTERIES
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-xl">
              Selected top-rated batteries trusted by millions of vehicle owners, fleet managers, and homeowners nationwide.
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
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {filter === 'All' ? 'All In-Demand' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: 3 columns on large screens with generous spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.slice(0, 6).map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onOpenEnquiry={onOpenEnquiry}
              showCompare={false}
              priorityImage={idx < 3}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm border border-neutral-700 hover:border-red-500/50 shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
          >
            <Layers className="w-4 h-4 text-red-500" />
            <span>Explore All Battery Models & Complete Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
