import React from 'react';
import { Shield } from 'lucide-react';
import { Product } from '../../types';

interface WarrantyBadgeProps {
  product: Product;
  className?: string;
}

export const WarrantyBadge: React.FC<WarrantyBadgeProps> = ({ product, className = '' }) => {
  const months = product.warrantyMonths;
  const brandLower = product.brand.toLowerCase();

  let colorStyles = 'border-[#E5E7EB] text-[#172033] bg-[#F8FAFC]';

  if (brandLower.includes('amaron')) {
    colorStyles = 'border-[#2E8B35]/25 text-[#1F6B2A] bg-[#EAF6EA]';
  } else if (brandLower.includes('exide')) {
    colorStyles = 'border-[#DC2626]/25 text-[#991B1B] bg-[#FEE2E2]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    colorStyles = 'border-[#2563EB]/25 text-[#1E40AF] bg-[#EFF6FF]';
  }

  const displayWarranty = months > 0 ? `${months}M Warranty` : 'Verified Warranty';

  return (
    <div
      id={`warranty-badge-${product.id}`}
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] font-bold tracking-tight transition-all ${colorStyles} ${className}`}
    >
      <Shield className="w-3 h-3 shrink-0" />
      <span className="whitespace-nowrap">{displayWarranty}</span>
    </div>
  );
};
