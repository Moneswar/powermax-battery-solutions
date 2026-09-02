import React from 'react';
import { Zap, Battery, Gauge, Layers, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../../types';

interface ProductSpecsProps {
  product: Product;
  className?: string;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ product, className = '' }) => {
  const brandLower = product.brand.toLowerCase();

  // Determine strip border accent matching reference cards
  let stripBorderClass = 'border-[#1a2232] bg-[#070a10]/95';
  let iconColor = 'text-emerald-400';

  if (brandLower.includes('amaron')) {
    stripBorderClass = 'border-[#22c55e]/25 bg-[#05080e]/95';
    iconColor = 'text-[#22c55e]';
  } else if (brandLower.includes('exide')) {
    stripBorderClass = 'border-[#ef4444]/25 bg-[#05080e]/95';
    iconColor = 'text-[#ef4444]';
  } else if (brandLower.includes('bosch')) {
    stripBorderClass = 'border-[#3b82f6]/25 bg-[#05080e]/95';
    iconColor = 'text-[#38bdf8]';
  } else if (brandLower.includes('luminous')) {
    stripBorderClass = 'border-[#00e5ff]/25 bg-[#05080e]/95';
    iconColor = 'text-[#00e5ff]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    stripBorderClass = 'border-[#3b82f6]/25 bg-[#05080e]/95';
    iconColor = 'text-[#3b82f6]';
  } else if (brandLower.includes('okaya')) {
    stripBorderClass = 'border-[#10b981]/25 bg-[#05080e]/95';
    iconColor = 'text-[#10b981]';
  } else if (brandLower.includes('livguard')) {
    stripBorderClass = 'border-[#f59e0b]/25 bg-[#05080e]/95';
    iconColor = 'text-[#f59e0b]';
  } else if (brandLower.includes('microtek')) {
    stripBorderClass = 'border-[#dc2626]/25 bg-[#05080e]/95';
    iconColor = 'text-[#dc2626]';
  }

  // Format 3rd and 4th column according to battery category / CCA availability
  const hasCca = Boolean(product.cca);
  
  const thirdCol = {
    value: hasCca ? product.cca!.replace(' CCA', '') : product.technology === 'LiFePO4' ? '3500+' : 'C20',
    label: hasCca ? 'CCA' : product.technology === 'LiFePO4' ? 'Cycles' : 'Rating',
    isCca: hasCca,
  };

  const formatTechDisplay = () => {
    if (product.technology === 'Maintenance Free') return 'MF';
    if (product.technology === 'Tall Tubular') return 'Tall Tubular';
    if (product.technology === 'Flooded Lead Acid') return 'Flooded';
    return product.technology;
  };

  return (
    <div
      id={`specs-strip-${product.id}`}
      className={`w-full rounded-2xl border p-2.5 sm:p-3 shadow-inner transition-colors duration-300 ${stripBorderClass} ${className}`}
    >
      <div className="grid grid-cols-4 gap-1 text-center items-center">
        
        {/* Column 1: VOLTAGE */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <Zap className={`w-3.5 h-3.5 ${iconColor}`} />
            <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
              {product.voltage}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium mt-0.5 tracking-tight">
            Voltage
          </span>
        </div>

        {/* Column 2: CAPACITY */}
        <div className="flex flex-col items-center justify-center border-l border-neutral-800/60">
          <div className="flex items-center gap-1">
            <Battery className={`w-3.5 h-3.5 ${iconColor}`} />
            <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
              {product.capacity}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium mt-0.5 tracking-tight">
            Capacity
          </span>
        </div>

        {/* Column 3: CCA or Rating */}
        <div className="flex flex-col items-center justify-center border-l border-neutral-800/60">
          <div className="flex items-center gap-1">
            {thirdCol.isCca ? (
              <Zap className={`w-3.5 h-3.5 ${iconColor}`} />
            ) : (
              <Gauge className={`w-3.5 h-3.5 ${iconColor}`} />
            )}
            <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
              {thirdCol.value}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium mt-0.5 tracking-tight">
            {thirdCol.label}
          </span>
        </div>

        {/* Column 4: TYPE / TECHNOLOGY */}
        <div className="flex flex-col items-center justify-center border-l border-neutral-800/60">
          <div className="flex items-center gap-1">
            {product.technology === 'AGM' ? (
              <span className={`text-xs sm:text-[13px] font-bold ${iconColor} leading-none`}>
                AGM
              </span>
            ) : product.technology === 'Maintenance Free' ? (
              <>
                <ShieldCheck className={`w-3.5 h-3.5 ${iconColor}`} />
                <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">MF</span>
              </>
            ) : (
              <>
                <Layers className={`w-3.5 h-3.5 ${iconColor}`} />
                <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight truncate max-w-[62px]">
                  {formatTechDisplay()}
                </span>
              </>
            )}
          </div>
          <span className="text-[10px] text-neutral-400 font-medium mt-0.5 tracking-tight">
            {hasCca ? 'Type' : 'Technology'}
          </span>
        </div>

      </div>
    </div>
  );
};
