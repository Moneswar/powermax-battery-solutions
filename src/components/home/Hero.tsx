import React from 'react';
import { ProductImage } from '../common/ProductImage';
import { PRODUCTS_DATA } from '../../data/products';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Award,
  Headphones,
  Zap,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onScrollToFinder: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onScrollToFinder,
  onContactClick,
}) => {
  // Use representative flagship battery for visualization (Amaron Hi-Life DIN55 / Exide Mileage)
  const heroProduct = PRODUCTS_DATA[0];
  const secondaryProduct = PRODUCTS_DATA[1];
  const thirdProduct = PRODUCTS_DATA[4]; // Inverter

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] pt-28 pb-16 lg:py-36 bg-neutral-950 overflow-hidden flex items-center bg-grid-pattern border-b border-neutral-800/80"
    >
      {/* Dynamic Ambient Energy Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: VALUE PROPOSITION & CONFIDENT HEADLINE */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-2">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>RELIABLE POWER. EVERY JOURNEY.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              POWER THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-500">
                MOVES YOU.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Engineered energy solutions for passenger vehicles, two-wheelers, heavy commercial fleets, and uninterrupted home power backup. Genuine products, certified fitment, and rapid local assistance.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-explore-products-btn"
                onClick={onExploreProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-find-battery-btn"
                onClick={onScrollToFinder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-100 border border-neutral-700 hover:border-neutral-600 font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer"
              >
                <Search className="w-4 h-4 text-red-400" />
                <span>Find Your Battery</span>
              </button>
            </div>

            {/* Trust Points Strip */}
            <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">100% Genuine</h4>
                  <p className="text-[11px] text-neutral-400">Direct from Brands</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Top Brands</h4>
                  <p className="text-[11px] text-neutral-400">Amaron, Exide, Bosch</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Expert Fitment</h4>
                  <p className="text-[11px] text-neutral-400">Doorstep & In-Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PREMIUM PRODUCT VISUALIZATION & TECHNICAL CALLOUTS */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            {/* Battery Showcase Stage */}
            <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
              
              {/* Product Photograph Stage */}
              <div className="relative z-20 w-full flex items-center justify-center p-4">
                <ProductImage
                  product={heroProduct}
                  aspectRatio="4/3"
                  className="h-72 sm:h-80 w-full max-w-[420px] bg-transparent border-0"
                  imageClassName="filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                  priority={true}
                />
              </div>

              {/* Floating Technical Spec Badges */}
              {/* Top Left Spec: 12V */}
              <div className="absolute top-4 -left-2 sm:-left-6 z-30 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md shadow-2xl animate-bounce [animation-duration:4s]">
                <div className="text-[10px] font-mono uppercase text-neutral-400">Voltage</div>
                <div className="text-sm font-black text-white flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>12V DC</span>
                </div>
              </div>

              {/* Top Right Spec: 55Ah */}
              <div className="absolute top-12 -right-2 sm:-right-4 z-30 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md shadow-2xl animate-bounce [animation-duration:4.5s]">
                <div className="text-[10px] font-mono uppercase text-neutral-400">Capacity</div>
                <div className="text-sm font-black text-amber-400">55 Ah</div>
              </div>

              {/* Bottom Center Spec: 66M Warranty */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-neutral-900/95 border border-red-500/40 backdrop-blur-md shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-white tracking-wide">
                  66 MONTHS WARRANTY
                </span>
              </div>

              {/* Subdued Platform Base Reflection */}
              <div className="w-4/5 h-6 bg-radial-gradient blur-md rounded-full -mt-2 opacity-80 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
