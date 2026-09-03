import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Product } from '../../types';
import { QUICK_CONTACT_LINKS } from '../../config/siteConfig';

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

  let detailsBtnClass = 'border-[#2E8B35] text-[#2E8B35] hover:bg-[#2E8B35] hover:text-white';
  let enquireBtnClass = 'bg-[#2E8B35] hover:bg-[#1F6B2A] text-white';

  if (brandLower.includes('amaron')) {
    detailsBtnClass = 'border-[#2E8B35] text-[#2E8B35] hover:bg-[#2E8B35] hover:text-white';
    enquireBtnClass = 'bg-[#2E8B35] hover:bg-[#1F6B2A] text-white';
  } else if (brandLower.includes('exide')) {
    detailsBtnClass = 'border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white';
    enquireBtnClass = 'bg-[#DC2626] hover:bg-[#B91C1C] text-white';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    detailsBtnClass = 'border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white';
    enquireBtnClass = 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white';
  }

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEnquireClick) {
      onEnquireClick(product);
      return;
    }
    const message = `Hello PowerMax, I am interested in the ${product.brand} ${product.name} (${product.modelCode || ''}, ${product.capacity}, ${product.voltage}) battery. Please provide availability and price.`;
    window.open(QUICK_CONTACT_LINKS.whatsappUrl(message), '_blank');
  };

  const handleDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDetailsClick(product);
  };

  return (
    <div id={`actions-${product.id}`} className={`grid grid-cols-2 gap-2 w-full ${className}`}>
      
      {/* DETAILS BUTTON */}
      <button
        id={`btn-details-${product.id}`}
        type="button"
        onClick={handleDetails}
        className={`flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl font-bold text-xs border transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] ${detailsBtnClass}`}
      >
        <span>View Details</span>
      </button>

      {/* ENQUIRE / WHATSAPP BUTTON */}
      <button
        id={`btn-enquire-${product.id}`}
        type="button"
        onClick={handleWhatsAppDirect}
        className={`flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl font-bold text-xs shadow-xs transition-all duration-200 cursor-pointer active:scale-[0.98] ${enquireBtnClass}`}
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>Enquire</span>
      </button>

    </div>
  );
};
