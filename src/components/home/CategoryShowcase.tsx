import React from 'react';
import { CATEGORIES_DATA } from '../../data/categories';
import { BatteryCategory } from '../../types';
import {
  Car,
  Bike,
  Truck,
  Zap,
  Sun,
  Server,
  BatteryCharging,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory: (cat: BatteryCategory) => void;
  onViewAllProducts: () => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
  onViewAllProducts,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return Car;
      case 'Bike':
        return Bike;
      case 'Truck':
        return Truck;
      case 'Zap':
        return Zap;
      case 'Sun':
        return Sun;
      case 'Server':
        return Server;
      case 'BatteryCharging':
        return BatteryCharging;
      default:
        return Zap;
    }
  };

  return (
    <section id="categories-section" className="py-20 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEDICATED POWER DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              POWER FOR EVERY APPLICATION
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-xl">
              From everyday city commutes to high-capacity industrial power banks, explore precision-engineered batteries designed for peak performance.
            </p>
          </div>

          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 group cursor-pointer"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-600/10 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.colorAccent} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div className="space-y-4">
                  {/* Icon & Count */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-neutral-300 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800">
                      {cat.badgeCount} Models
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-2 leading-relaxed line-clamp-2">
                      {cat.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Technical Spec Highlight & Link */}
                <div className="pt-5 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-300 truncate max-w-[170px]">
                    {cat.highlightSpecs}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-red-400 group-hover:border-red-500/40 transition-colors shrink-0">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
