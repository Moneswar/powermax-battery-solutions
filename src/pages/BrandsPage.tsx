import React from 'react';
import { BRANDS_DATA } from '../data/brands';
import { PRODUCTS_DATA } from '../data/products';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BrandsPageProps {
  onNavigateHome: () => void;
  onSelectBrand: (brandName: string) => void;
  onNavigateProductsWithFilter: (brandName: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onNavigateHome,
  onSelectBrand,
  onNavigateProductsWithFilter,
}) => {
  return (
    <>
      <SeoHead
        title="Authorized Battery Brands – Amaron, Exide, Bosch, SF Sonic, Luminous"
        description="Official tier-1 dealership for Amaron, Exide, SF Sonic, Luminous, Okaya, Microtek, Livguard, and Bosch. 100% genuine factory-sealed stock with paperless warranty."
      />

      <div id="brands-page" className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'Authorized Brands' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE BANNER */}
          <div className="py-10 border-b border-neutral-800 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>OFFICIAL TIER-1 DISTRIBUTOR</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              INDIA'S MOST TRUSTED <br />
              <span className="text-red-500">BATTERY MANUFACTURERS.</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
              We partner directly with leading battery makers to ensure every unit is factory-fresh, barcode-verifiable, and fully backed by pan-India replacement guarantees.
            </p>
          </div>

          {/* BRAND CARDS GRID */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRANDS_DATA.map((brand) => {
              const brandProducts = PRODUCTS_DATA.filter((p) => p.brand === brand.name);
              return (
                <div
                  key={brand.id}
                  className="bg-neutral-900/80 rounded-3xl border border-neutral-800 p-8 hover:border-red-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 font-black text-white text-xl tracking-tight">
                        {brand.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-neutral-400">
                          Est. {brand.founded || '1990'}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                          Authorized
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-mono uppercase text-red-400 font-bold">
                        {brand.tagline}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                        {brand.description}
                      </p>
                    </div>

                    {/* Key Brand Specialties */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold block">
                        Core Brand Strengths:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                        {brand.specialties.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Brand Bottom Action Strip */}
                  <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                    <div className="text-xs">
                      <span className="text-neutral-400 block">Origin</span>
                      <strong className="text-emerald-400">{brand.origin}</strong>
                    </div>

                    <button
                      onClick={() => onNavigateProductsWithFilter(brand.name)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      <span>Explore {brand.name} ({brandProducts.length} Models)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Genuine Guarantee Banner */}
          <div className="mt-8 p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">100% Counterfeit-Free Guarantee</h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Every product comes with a registered manufacturer serial number, warranty registration, and tax invoice.
                </p>
              </div>
            </div>
            <a
              href="tel:+919876543210"
              className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold whitespace-nowrap"
            >
              Verify Serial With Specialist
            </a>
          </div>

        </div>
      </div>
    </>
  );
};
