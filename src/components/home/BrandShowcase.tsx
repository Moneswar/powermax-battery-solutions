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
    <section id="brand-showcase" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Authorized Distribution Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              India's Leading Battery Brands
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl font-medium">
              100% genuine manufacturer warranty, paperless warranty registration, and authorized express replacement.
            </p>
          </div>

          <button
            onClick={onViewAllBrands}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] group cursor-pointer"
          >
            <span>Explore All Brands</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS_DATA.slice(0, 3).map((brand) => {
            const brandLower = brand.name.toLowerCase();
            let badgeBg = 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20';
            let hoverBorder = 'hover:border-[#DC2626]/50';
            let tagColor = 'text-[#DC2626]';
            let arrowColor = 'text-[#DC2626]';

            if (brandLower.includes('amaron')) {
              badgeBg = 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/25';
              hoverBorder = 'hover:border-[#16A34A]/50';
              tagColor = 'text-[#16A34A]';
              arrowColor = 'text-[#16A34A]';
            } else if (brandLower.includes('exide')) {
              badgeBg = 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/25';
              hoverBorder = 'hover:border-[#DC2626]/50';
              tagColor = 'text-[#DC2626]';
              arrowColor = 'text-[#DC2626]';
            } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
              badgeBg = 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/25';
              hoverBorder = 'hover:border-[#2563EB]/50';
              tagColor = 'text-[#2563EB]';
              arrowColor = 'text-[#2563EB]';
            }

            return (
              <div
                key={brand.id}
                onClick={() => onSelectBrand(brand.name)}
                className={`bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] ${hoverBorder} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col justify-between cursor-pointer group`}
              >
                <div className="space-y-4">
                  {/* Brand Header */}
                  <div className="flex items-center justify-between">
                    <span className={`px-3.5 py-1 rounded-xl border text-sm font-bold tracking-wider ${badgeBg}`}>
                      {brand.name}
                    </span>
                    <span className="text-[11px] font-bold text-[#64748B] px-2.5 py-0.5 rounded-full bg-white border border-[#E2E8F0]">
                      Est. {brand.founded || '1990'}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xs font-bold uppercase tracking-wide ${tagColor}`}>
                      {brand.tagline}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed line-clamp-3 font-medium">
                      {brand.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                    <span>{brand.origin}</span>
                  </div>
                  <span className={`text-xs font-bold ${arrowColor} group-hover:underline transition-colors`}>
                    View Catalogue →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
