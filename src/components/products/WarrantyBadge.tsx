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

  // Distinct border & text color styles matching brand identity in reference image
  let colorStyles = 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40';

  if (brandLower.includes('amaron')) {
    colorStyles = 'border-[#22c55e]/40 text-[#22c55e] bg-[#22c55e]/10 shadow-[0_0_12px_rgba(34,197,94,0.12)]';
  } else if (brandLower.includes('exide')) {
    colorStyles = 'border-[#ef4444]/40 text-[#ef4444] bg-[#ef4444]/10 shadow-[0_0_12px_rgba(239,68,68,0.12)]';
  } else if (brandLower.includes('bosch')) {
    colorStyles = 'border-blue-500/40 text-blue-400 bg-blue-950/40 shadow-[0_0_12px_rgba(59,130,246,0.12)]';
  } else if (brandLower.includes('luminous')) {
    colorStyles = 'border-sky-500/40 text-sky-400 bg-sky-950/40 shadow-[0_0_12px_rgba(14,165,233,0.12)]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    colorStyles = 'border-[#3b82f6]/40 text-[#3b82f6] bg-[#3b82f6]/10 shadow-[0_0_12px_rgba(59,130,246,0.12)]';
  } else if (brandLower.includes('okaya')) {
    colorStyles = 'border-sky-500/40 text-sky-400 bg-sky-950/40 shadow-[0_0_12px_rgba(14,165,233,0.12)]';
  } else if (brandLower.includes('livguard')) {
    colorStyles = 'border-amber-500/40 text-amber-400 bg-amber-950/40 shadow-[0_0_12px_rgba(217,119,6,0.12)]';
  } else if (brandLower.includes('microtek')) {
    colorStyles = 'border-red-500/40 text-red-400 bg-red-950/40 shadow-[0_0_12px_rgba(239,68,68,0.12)]';
  }

  const displayWarranty = months > 0 ? `${months} Months Warranty` : 'Warranty: Verified';

  return (
    <div
      id={`warranty-badge-${product.id}`}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide backdrop-blur-md transition-all ${colorStyles} ${className}`}
    >
      <Shield className="w-3.5 h-3.5 shrink-0" />
      <span className="whitespace-nowrap">{displayWarranty}</span>
    </div>
  );
};
