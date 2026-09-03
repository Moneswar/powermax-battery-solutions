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
    <section id="categories-section" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Dedicated Power Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Batteries For Every Need
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl font-medium">
              From everyday personal transport to heavy industrial & inverter power backup, browse precision-engineered batteries.
            </p>
          </div>

          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] group cursor-pointer"
          >
            <span>Explore All Batteries</span>
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
                className="group relative bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#DC2626]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Icon & Count */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] border border-[#DC2626]/20 flex items-center justify-center text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0]">
                      {cat.badgeCount || 10}+ Models
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed line-clamp-2 font-medium">
                      {cat.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#DC2626] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Browse Range</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
