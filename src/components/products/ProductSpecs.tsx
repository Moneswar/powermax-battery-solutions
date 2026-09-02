import React from 'react';
import { Zap, Battery, Sparkles, ShieldCheck, Gauge, Layers } from 'lucide-react';
import { Product } from '../../types';

interface ProductSpecsProps {
  product: Product;
  className?: string;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ product, className = '' }) => {
  const brandLower = product.brand.toLowerCase();

  // Determine strip border accent matching reference cards
  let stripBorderClass = 'border-neutral-800 hover:border-neutral-700';
  let accentColorClass = 'text-amber-400';
  let voltageIconColor = 'text-emerald-400';
  let capacityIconColor = 'text-emerald-400';
  let ccaIconColor = 'text-emerald-400';
  let techIconColor = 'text-emerald-400';

  if (brandLower.includes('amaron')) {
    stripBorderClass = 'border-[#22c55e]/30 bg-neutral-950/80';
    accentColorClass = 'text-[#22c55e]';
    voltageIconColor = 'text-[#22c55e]';
    capacityIconColor = 'text-[#22c55e]';
    ccaIconColor = 'text-[#22c55e]';
    techIconColor = 'text-[#22c55e]';
  } else if (brandLower.includes('exide')) {
    stripBorderClass = 'border-[#ef4444]/35 bg-neutral-950/80';
    accentColorClass = 'text-[#ef4444]';
    voltageIconColor = 'text-[#ef4444]';
    capacityIconColor = 'text-[#ef4444]';
    ccaIconColor = 'text-[#ef4444]';
    techIconColor = 'text-[#ef4444]';
  } else if (brandLower.includes('bosch')) {
    stripBorderClass = 'border-[#3b82f6]/35 bg-neutral-950/80';
    accentColorClass = 'text-[#3b82f6]';
    voltageIconColor = 'text-[#3b82f6]';
    capacityIconColor = 'text-[#3b82f6]';
    ccaIconColor = 'text-[#3b82f6]';
    techIconColor = 'text-[#3b82f6]';
  } else if (brandLower.includes('luminous')) {
    stripBorderClass = 'border-[#0284c7]/35 bg-neutral-950/80';
    accentColorClass = 'text-[#0284c7]';
    voltageIconColor = 'text-[#0284c7]';
    capacityIconColor = 'text-[#0284c7]';
    ccaIconColor = 'text-[#0284c7]';
    techIconColor = 'text-[#0284c7]';
  } else if (brandLower.includes('livguard')) {
    stripBorderClass = 'border-[#f59e0b]/35 bg-neutral-950/80';
    accentColorClass = 'text-[#f59e0b]';
    voltageIconColor = 'text-[#f59e0b]';
    capacityIconColor = 'text-[#f59e0b]';
    ccaIconColor = 'text-[#f59e0b]';
    techIconColor = 'text-[#f59e0b]';
  } else if (brandLower.includes('okaya')) {
    stripBorderClass = 'border-[#14b8a6]/35 bg-neutral-950/80';
    accentColorClass = 'text-[#14b8a6]';
    voltageIconColor = 'text-[#14b8a6]';
    capacityIconColor = 'text-[#14b8a6]';
    ccaIconColor = 'text-[#14b8a6]';
    techIconColor = 'text-[#14b8a6]';
  }

  // Format 3rd column: CCA if present, otherwise cycle rating or format
  const thirdCol = {
    value: product.cca ? product.cca.replace(' CCA', '') : product.technology === 'LiFePO4' ? '3500+' : 'C20',
    label: product.cca ? 'CCA' : product.technology === 'LiFePO4' ? 'Cycles' : 'Rating',
  };

  return (
    <div
      id={`specs-strip-${product.id}`}
      className={`w-full rounded-2xl border p-3.5 backdrop-blur-md shadow-inner transition-colors duration-300 ${stripBorderClass} ${className}`}
    >
      <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center items-center">
        
        {/* Column 1: VOLTAGE */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <Zap className={`w-3.5 h-3.5 ${voltageIconColor}`} />
            <span className="text-xs sm:text-sm font-black text-white tracking-tight">
              {product.voltage}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium mt-0.5 tracking-tight">
            Voltage
          </span>
        </div>

        {/* Column 2: CAPACITY */}
        <div className="flex flex-col items-center justify-center border-l border-neutral-800/80">
          <div className="flex items-center gap-1">
            <Battery className={`w-3.5 h-3.5 ${capacityIconColor}`} />
            <span className="text-xs sm:text-sm font-black text-white tracking-tight">
              {product.capacity}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium mt-0.5 tracking-tight">
            Capacity
          </span>
        </div>

        {/* Column 3: CCA or Verified Spec */}
        <div className="flex flex-col items-center justify-center border-l border-neutral-800/80">
          <div className="flex items-center gap-1">
            <Gauge className={`w-3.5 h-3.5 ${ccaIconColor}`} />
            <span className="text-xs sm:text-sm font-black text-white tracking-tight">
              {thirdCol.value}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium mt-0.5 tracking-tight">
            {thirdCol.label}
          </span>
        </div>

        {/* Column 4: TECHNOLOGY */}
        <div className="flex flex-col items-center justify-center border-l border-neutral-800/80">
          <div className="flex items-center gap-1">
            {product.technology === 'AGM' ? (
              <span className={`px-1 rounded text-[10px] font-black border border-current leading-none py-0.5 ${techIconColor}`}>
                AGM
              </span>
            ) : product.technology.includes('Tubular') ? (
              <Layers className={`w-3.5 h-3.5 ${techIconColor}`} />
            ) : (
              <ShieldCheck className={`w-3.5 h-3.5 ${techIconColor}`} />
            )}
          </div>
          <span className="text-[10px] text-neutral-300 font-medium mt-0.5 tracking-tight truncate max-w-full px-0.5">
            {product.technology}
          </span>
        </div>

      </div>
    </div>
  );
};
