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

  // Distinct border & text color styles matching brand identity
  let colorStyles = 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40 shadow-emerald-950/30';

  if (brandLower.includes('amaron')) {
    colorStyles = 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40 shadow-[0_0_12px_rgba(16,185,129,0.15)]';
  } else if (brandLower.includes('exide')) {
    colorStyles = 'border-amber-500/40 text-amber-300 bg-amber-950/40 shadow-[0_0_12px_rgba(245,158,11,0.15)]';
  } else if (brandLower.includes('bosch')) {
    colorStyles = 'border-blue-500/40 text-blue-400 bg-blue-950/40 shadow-[0_0_12px_rgba(59,130,246,0.15)]';
  } else if (brandLower.includes('luminous')) {
    colorStyles = 'border-sky-500/40 text-sky-400 bg-sky-950/40 shadow-[0_0_12px_rgba(14,165,233,0.15)]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    colorStyles = 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40 shadow-[0_0_12px_rgba(16,185,129,0.15)]';
  } else if (brandLower.includes('livguard')) {
    colorStyles = 'border-amber-500/40 text-amber-400 bg-amber-950/40 shadow-[0_0_12px_rgba(217,119,6,0.15)]';
  } else if (brandLower.includes('okaya')) {
    colorStyles = 'border-teal-500/40 text-teal-300 bg-teal-950/40 shadow-[0_0_12px_rgba(20,184,166,0.15)]';
  } else if (brandLower.includes('microtek')) {
    colorStyles = 'border-red-500/40 text-red-400 bg-red-950/40 shadow-[0_0_12px_rgba(239,68,68,0.15)]';
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
