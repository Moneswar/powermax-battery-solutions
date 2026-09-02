import React from 'react';
import { BRANDS_DATA } from '../../data/brands';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface BrandShowcaseProps {
  onSelectBrand: (brandName: string) => void;
  onViewAllBrands: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({
  onSelectBrand,
  onViewAllBrands,
}) => {
  return (
    <section id="brand-showcase" className="py-20 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>AUTHORIZED DISTRIBUTION PARTNERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              INDIA'S LEADING BATTERY BRANDS
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-xl">
              100% genuine factory warranty, paperless registration, and authorized replacement support across all leading manufacturers.
            </p>
          </div>

          <button
            onClick={onViewAllBrands}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 group cursor-pointer"
          >
            <span>Explore All Brands</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.name)}
              className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Brand Name Banner & Warranty Pill */}
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 font-black text-white text-base tracking-tight group-hover:text-red-400 transition-colors">
                    {brand.name}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800">
                    Est. {brand.founded || '1990'}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase text-red-400 font-bold">
                    {brand.tagline}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed line-clamp-3">
                    {brand.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{brand.origin}</span>
                </div>
                <span className="text-xs font-bold text-red-400 group-hover:text-white transition-colors">
                  View Models →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
