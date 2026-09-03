import React from 'react';
import { Zap, Battery, Gauge, Layers, ShieldCheck } from 'lucide-react';
import { Product } from '../../types';

interface ProductSpecsProps {
  product: Product;
  className?: string;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ product, className = '' }) => {
  const brandLower = product.brand.toLowerCase();

  let iconColor = 'text-[#2E8B35]';

  if (brandLower.includes('amaron')) {
    iconColor = 'text-[#2E8B35]';
  } else if (brandLower.includes('exide')) {
    iconColor = 'text-[#DC2626]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    iconColor = 'text-[#2563EB]';
  }

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
      className={`w-full rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-2 sm:p-2.5 transition-colors ${className}`}
    >
      <div className="grid grid-cols-4 gap-1 text-center items-center">
        
        {/* Column 1: VOLTAGE */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <Zap className={`w-3 h-3 ${iconColor}`} />
            <span className="text-xs sm:text-[13px] font-bold text-[#172033] tracking-tight">
              {product.voltage}
            </span>
          </div>
          <span className="text-[10px] text-[#667085] font-medium mt-0.5 tracking-tight">
            Voltage
          </span>
        </div>

        {/* Column 2: CAPACITY */}
        <div className="flex flex-col items-center justify-center border-l border-[#E2E8F0]">
          <div className="flex items-center gap-1">
            <Battery className={`w-3 h-3 ${iconColor}`} />
            <span className="text-xs sm:text-[13px] font-bold text-[#172033] tracking-tight">
              {product.capacity}
            </span>
          </div>
          <span className="text-[10px] text-[#667085] font-medium mt-0.5 tracking-tight">
            Capacity
          </span>
        </div>

        {/* Column 3: CCA or Rating */}
        <div className="flex flex-col items-center justify-center border-l border-[#E2E8F0]">
          <div className="flex items-center gap-1">
            {thirdCol.isCca ? (
              <Zap className={`w-3 h-3 ${iconColor}`} />
            ) : (
              <Gauge className={`w-3 h-3 ${iconColor}`} />
            )}
            <span className="text-xs sm:text-[13px] font-bold text-[#172033] tracking-tight truncate max-w-[55px]">
              {thirdCol.value}
            </span>
          </div>
          <span className="text-[10px] text-[#667085] font-medium mt-0.5 tracking-tight">
            {thirdCol.label}
          </span>
        </div>

        {/* Column 4: TYPE / TECHNOLOGY */}
        <div className="flex flex-col items-center justify-center border-l border-[#E2E8F0]">
          <div className="flex items-center gap-1">
            {product.technology === 'AGM' ? (
              <span className={`text-xs sm:text-[13px] font-bold ${iconColor} leading-none`}>
                AGM
              </span>
            ) : product.technology === 'Maintenance Free' ? (
              <>
                <ShieldCheck className={`w-3 h-3 ${iconColor}`} />
                <span className="text-xs sm:text-[13px] font-bold text-[#172033] tracking-tight">MF</span>
              </>
            ) : (
              <>
                <Layers className={`w-3 h-3 ${iconColor}`} />
                <span className="text-xs sm:text-[13px] font-bold text-[#172033] tracking-tight truncate max-w-[55px]">
                  {formatTechDisplay()}
                </span>
              </>
            )}
          </div>
          <span className="text-[10px] text-[#667085] font-medium mt-0.5 tracking-tight">
            {hasCca ? 'Type' : 'Tech'}
          </span>
        </div>

      </div>
    </div>
  );
};
