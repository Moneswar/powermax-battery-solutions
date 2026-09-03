import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../../types';
import { ProductBrand } from './ProductBrand';
import { WarrantyBadge } from './WarrantyBadge';
import { ProductImage } from '../common/ProductImage';
import { ProductSpecs } from './ProductSpecs';
import { ProductFitment } from './ProductFitment';
import { ProductActions } from './ProductActions';
import { CompareButton } from './CompareButton';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry?: (product: Product) => void;
  isCompared?: boolean;
  onToggleCompare?: (product: Product) => void;
  showCompare?: boolean;
  className?: string;
  priorityImage?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onOpenEnquiry,
  isCompared = false,
  onToggleCompare,
  showCompare = true,
  className = '',
  priorityImage = false,
}) => {
  const brandLower = product.brand.toLowerCase();

  // Subtle hover border highlight matching brand
  let hoverBorderClass = 'hover:border-[#DC2626]/40 hover:shadow-[0_12px_28px_rgba(220,38,38,0.08)]';
  if (brandLower.includes('amaron')) {
    hoverBorderClass = 'hover:border-[#16A34A]/40 hover:shadow-[0_12px_28px_rgba(22,163,74,0.08)]';
  } else if (brandLower.includes('exide')) {
    hoverBorderClass = 'hover:border-[#DC2626]/40 hover:shadow-[0_12px_28px_rgba(220,38,38,0.08)]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    hoverBorderClass = 'hover:border-[#2563EB]/40 hover:shadow-[0_12px_28px_rgba(37,99,235,0.08)]';
  }

  const handleCardClick = () => {
    onSelectProduct(product);
  };

  return (
    <motion.div
      id={`card-${product.id}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={handleCardClick}
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-5 transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-md ${hoverBorderClass} ${className}`}
    >
      {/* 1. BRAND (LEFT) + COMPARE (RIGHT) */}
      <div className="flex items-center justify-between gap-2 w-full mb-1">
        <ProductBrand product={product} />
        {showCompare && onToggleCompare && (
          <CompareButton
            product={product}
            isCompared={isCompared}
            onToggleCompare={onToggleCompare}
          />
        )}
      </div>

      {/* 2. PRODUCT NAME */}
      <h3
        id={`title-${product.id}`}
        className="text-[15px] sm:text-base font-bold text-[#0F172A] tracking-tight leading-snug line-clamp-1 group-hover:text-[#DC2626] transition-colors mt-1"
        title={product.name}
      >
        {product.name}
      </h3>

      {/* 3. CATEGORY / TECHNOLOGY SUBTITLE */}
      <p className="text-xs text-[#64748B] font-medium mt-0.5 mb-2 truncate">
        {product.category} • {product.technology}
      </p>

      {/* 4. LARGE HIGH-QUALITY BATTERY IMAGE */}
      <div className="my-auto py-1 w-full flex items-center justify-center">
        <ProductImage
          product={product}
          aspectRatio="4/3"
          className="h-44 sm:h-48 w-full bg-transparent border-0"
          priority={priorityImage}
        />
      </div>

      {/* 5. EASY-TO-SCAN SPECIFICATIONS STRIP (VOLTAGE | CAPACITY | CCA | TECH) */}
      <div className="mt-2 mb-2 w-full">
        <ProductSpecs product={product} />
      </div>

      {/* 6. SUITABLE FOR */}
      <div className="mb-2 min-h-[20px] flex items-center">
        <ProductFitment product={product} maxItems={2} />
      </div>

      {/* 7. WARRANTY BADGE */}
      <div className="mb-3 flex items-center">
        <WarrantyBadge product={product} />
      </div>

      {/* 8. ACTION BUTTONS: VIEW DETAILS & ENQUIRE */}
      <div className="w-full pt-2.5 border-t border-[#F1F5F9]">
        <ProductActions
          product={product}
          onDetailsClick={onSelectProduct}
          onEnquireClick={onOpenEnquiry}
        />
      </div>
    </motion.div>
  );
};
