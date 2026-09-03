import React from 'react';
import { BRANDS_DATA } from '../data/brands';
import { PRODUCTS_DATA } from '../data/products';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Award, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface BrandsPageProps {
  onNavigateHome: () => void;
  onSelectBrand: (brandName: string) => void;
  onNavigateProductsWithFilter: (brandName: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onNavigateHome,
  onNavigateProductsWithFilter,
}) => {
  return (
    <>
      <SeoHead
        title="Authorized Battery Brands – Amaron, Exide, SF Sonic"
        description="Official authorized dealership for Amaron, Exide, and SF Sonic. 100% genuine factory-sealed stock with official paperless warranties."
      />

      <div id="brands-page" className="min-h-screen bg-[#F7F9F7] text-[#172033] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'Authorized Brands' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE BANNER */}
          <div className="py-10 border-b border-[#E5E7EB] space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6EA] border border-[#2E8B35]/25 text-[#1F6B2A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2E8B35]" />
              <span>Official Tier-1 Authorized Partner</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#172033] tracking-tight">
              India's Most Trusted <br />
              <span className="text-[#2E8B35]">Battery Manufacturers.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#667085] max-w-3xl leading-relaxed font-medium">
              We partner directly with leading battery makers to ensure every unit is factory-fresh, barcode-verifiable, and fully backed by authorized warranty replacement guarantees.
            </p>
          </div>

          {/* BRAND CARDS GRID */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRANDS_DATA.slice(0, 3).map((brand) => {
              const brandProducts = PRODUCTS_DATA.filter((p) => p.brand.toLowerCase() === brand.name.toLowerCase());
              const brandLower = brand.name.toLowerCase();

              let badgeBg = 'bg-[#EAF6EA] text-[#1F6B2A] border-[#2E8B35]/25';
              let actionBtnBg = 'bg-[#2E8B35] hover:bg-[#1F6B2A] text-white';

              if (brandLower.includes('exide')) {
                badgeBg = 'bg-[#FEE2E2] text-[#991B1B] border-[#DC2626]/25';
                actionBtnBg = 'bg-[#DC2626] hover:bg-[#B91C1C] text-white';
              } else if (brandLower.includes('sf sonic')) {
                badgeBg = 'bg-[#EFF6FF] text-[#1E40AF] border-[#2563EB]/25';
                actionBtnBg = 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white';
              }

              return (
                <div
                  key={brand.id}
                  className="bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-8 hover:shadow-lg transition-all duration-300 shadow-xs flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-4 py-1.5 rounded-xl border font-black text-lg tracking-tight ${badgeBg}`}>
                        {brand.name}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#EAF6EA] text-[#1F6B2A] border border-[#2E8B35]/20 text-xs font-bold">
                        Authorized
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wide text-[#2E8B35]">
                        {brand.tagline}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
                        {brand.description}
                      </p>
                    </div>

                    {/* Key Brand Specialties */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085] block">
                        Core Brand Strengths:
                      </span>
                      <div className="space-y-1.5 text-xs text-[#4B5563]">
                        {brand.specialties.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8B35] shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Brand Bottom Action Strip */}
                  <div className="pt-6 border-t border-[#F0F2F5] flex items-center justify-between">
                    <div className="text-xs">
                      <span className="text-[#667085] block">Catalogue</span>
                      <strong className="text-[#172033] font-bold">{brandProducts.length} Models</strong>
                    </div>

                    <button
                      onClick={() => onNavigateProductsWithFilter(brand.name)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer ${actionBtnBg}`}
                    >
                      <span>Explore Range</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Genuine Guarantee Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF6EA] border border-[#2E8B35]/20 flex items-center justify-center text-[#2E8B35] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#172033]">100% Counterfeit-Free Guarantee</h3>
                <p className="text-xs text-[#667085] mt-0.5">
                  Every product comes with a registered manufacturer serial number, warranty registration, and tax invoice.
                </p>
              </div>
            </div>
            <a
              href="tel:+919876543210"
              className="px-6 py-3 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white text-xs font-bold whitespace-nowrap shadow-xs"
            >
              Verify Serial With Specialist
            </a>
          </div>

        </div>
      </div>
    </>
  );
};
