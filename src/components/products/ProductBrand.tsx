import React from 'react';
import { Product } from '../../types';

interface ProductBrandProps {
  product: Product;
  className?: string;
}

export const ProductBrand: React.FC<ProductBrandProps> = ({ product, className = '' }) => {
  const brand = product.brand;
  const brandUpper = brand.toUpperCase();

  if (brandUpper.includes('AMARON')) {
    return (
      <div id={`brand-${product.id}`} className={`flex items-center gap-1.5 ${className}`}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider bg-[#EAF6EA] text-[#2E8B35] border border-[#2E8B35]/25">
          AMARON
        </span>
      </div>
    );
  }

  if (brandUpper.includes('EXIDE')) {
    return (
      <div id={`brand-${product.id}`} className={`flex items-center gap-1.5 ${className}`}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider bg-[#FEE2E2] text-[#DC2626] border border-[#DC2626]/25">
          EXIDE
        </span>
      </div>
    );
  }

  if (brandUpper.includes('SF SONIC') || brandUpper.includes('SF-SONIC') || brandUpper.includes('SFSONIC')) {
    return (
      <div id={`brand-${product.id}`} className={`flex items-center gap-1.5 ${className}`}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]/25">
          SF SONIC
        </span>
      </div>
    );
  }

  if (brandUpper.includes('BOSCH')) {
    return (
      <div id={`brand-${product.id}`} className={`flex items-center gap-1.5 ${className}`}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider bg-[#F0F9FF] text-[#0284C7] border border-[#0284C7]/25">
          BOSCH
        </span>
      </div>
    );
  }

  if (brandUpper.includes('LIVGUARD')) {
    return (
      <div id={`brand-${product.id}`} className={`flex items-center gap-1.5 ${className}`}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider bg-[#FEF3C7] text-[#D97706] border border-[#D97706]/25">
          LIVGUARD
        </span>
      </div>
    );
  }

  return (
    <div id={`brand-${product.id}`} className={`flex items-center gap-1.5 ${className}`}>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider bg-[#F3F6F4] text-[#172033] border border-[#E5E7EB]">
        {brandUpper}
      </span>
    </div>
  );
};
