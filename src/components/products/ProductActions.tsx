import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Product } from '../../types';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';

interface ProductActionsProps {
  product: Product;
  onDetailsClick: (product: Product) => void;
  onEnquireClick?: (product: Product) => void;
  className?: string;
}

export const ProductActions: React.FC<ProductActionsProps> = ({
  product,
  onDetailsClick,
  onEnquireClick,
  className = '',
}) => {
  const brandLower = product.brand.toLowerCase();

  // Dynamic button color matching reference image
  let enquireBgClass = 'bg-[#16a34a] hover:bg-[#15803d] text-white shadow-[#16a34a]/30';

  if (brandLower.includes('amaron')) {
    enquireBgClass = 'bg-[#16a34a] hover:bg-[#15803d] text-white shadow-[0_4px_14px_rgba(22,163,74,0.35)]';
  } else if (brandLower.includes('exide')) {
    enquireBgClass = 'bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)]';
  } else if (brandLower.includes('bosch')) {
    enquireBgClass = 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)]';
  } else if (brandLower.includes('luminous')) {
    enquireBgClass = 'bg-[#16a34a] hover:bg-[#15803d] text-white shadow-[0_4px_14px_rgba(22,163,74,0.35)]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    enquireBgClass = 'bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)]';
  } else if (brandLower.includes('okaya')) {
    enquireBgClass = 'bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-[0_4px_14px_rgba(2,132,199,0.35)]';
  } else if (brandLower.includes('livguard')) {
    enquireBgClass = 'bg-[#16a34a] hover:bg-[#15803d] text-white shadow-[0_4px_14px_rgba(22,163,74,0.35)]';
  } else if (brandLower.includes('microtek')) {
    enquireBgClass = 'bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)]';
  }

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEnquireClick) {
      onEnquireClick(product);
      return;
    }
    const message = `Hello, I am interested in the ${product.brand} ${product.name} (${product.modelCode || ''}, ${product.capacity}, ${product.voltage}) battery. Please provide availability and price.`;
    window.open(QUICK_CONTACT_LINKS.whatsappUrl(message), '_blank');
  };

  const handleDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDetailsClick(product);
  };

  return (
    <div id={`actions-${product.id}`} className={`grid grid-cols-2 gap-3 w-full ${className}`}>
      
      {/* DETAILS BUTTON */}
      <button
        id={`btn-details-${product.id}`}
        type="button"
        onClick={handleDetails}
        className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-850 text-white font-semibold text-xs sm:text-sm border border-neutral-700/80 hover:border-neutral-600 transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
      >
        <span>Details</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* ENQUIRE / WHATSAPP BUTTON */}
      <button
        id={`btn-enquire-${product.id}`}
        type="button"
        onClick={handleWhatsAppDirect}
        className={`flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${enquireBgClass}`}
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>Enquire</span>
      </button>

    </div>
  );
};
