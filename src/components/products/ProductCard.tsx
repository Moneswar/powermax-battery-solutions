import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../../types';
import { ProductBrand } from './ProductBrand';
import { WarrantyBadge } from './WarrantyBadge';
import { ProductImage } from '../common/ProductImage';
import { ProductSpecs } from './ProductSpecs';
import { ProductFitment } from './ProductFitment';
import { ProductFeatures } from './ProductFeatures';
import { ProductActions } from './ProductActions';
import { StockStatus } from './StockStatus';
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

  // Subtle ambient glow tint on card hover
  let hoverBorderClass = 'hover:border-neutral-700 hover:shadow-2xl';
  let ambientGlowColor = 'rgba(255, 255, 255, 0.03)';

  if (brandLower.includes('amaron')) {
    hoverBorderClass = 'hover:border-[#22c55e]/50 hover:shadow-[0_12px_36px_rgba(34,197,94,0.12)]';
    ambientGlowColor = 'rgba(34, 197, 94, 0.05)';
  } else if (brandLower.includes('exide')) {
    hoverBorderClass = 'hover:border-[#ef4444]/50 hover:shadow-[0_12px_36px_rgba(239,68,68,0.12)]';
    ambientGlowColor = 'rgba(239, 68, 68, 0.05)';
  } else if (brandLower.includes('bosch')) {
    hoverBorderClass = 'hover:border-[#3b82f6]/50 hover:shadow-[0_12px_36px_rgba(59,130,246,0.12)]';
    ambientGlowColor = 'rgba(59, 130, 246, 0.05)';
  } else if (brandLower.includes('luminous')) {
    hoverBorderClass = 'hover:border-[#0284c7]/50 hover:shadow-[0_12px_36px_rgba(2,132,199,0.12)]';
    ambientGlowColor = 'rgba(2, 132, 199, 0.05)';
  } else if (brandLower.includes('livguard')) {
    hoverBorderClass = 'hover:border-[#f59e0b]/50 hover:shadow-[0_12px_36px_rgba(245,158,11,0.12)]';
    ambientGlowColor = 'rgba(245, 158, 11, 0.05)';
  } else if (brandLower.includes('okaya')) {
    hoverBorderClass = 'hover:border-[#14b8a6]/50 hover:shadow-[0_12px_36px_rgba(20,184,166,0.12)]';
    ambientGlowColor = 'rgba(20, 184, 166, 0.05)';
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
      className={`group relative flex flex-col justify-between bg-gradient-to-b from-[#0e131b] via-[#0a0d13] to-[#07090e] rounded-3xl border border-neutral-800/80 p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden ${hoverBorderClass} ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 0%, ${ambientGlowColor}, transparent 60%), linear-gradient(180deg, #0e131b 0%, #07090e 100%)`,
      }}
    >
      {/* 1. TOP HEADER: BRAND (LEFT) & WARRANTY (RIGHT) */}
      <div className="flex items-start justify-between gap-2 w-full mb-3">
        <ProductBrand product={product} />
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <WarrantyBadge product={product} />
          {showCompare && onToggleCompare && (
            <div className="opacity-80 group-hover:opacity-100 transition-opacity">
              <CompareButton
                product={product}
                isCompared={isCompared}
                onToggleCompare={onToggleCompare}
              />
            </div>
          )}
        </div>
      </div>

      {/* 2. PRODUCT NAME & APPLICATION SUBTITLE */}
      <div className="mb-4">
        <h3
          id={`title-${product.id}`}
          className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug line-clamp-1 group-hover:text-amber-200 transition-colors"
          title={product.name}
        >
          {product.name}
        </h3>
        <p className="text-xs text-neutral-400 font-medium mt-0.5 flex items-center gap-1.5">
          <span>{product.application}</span>
          <span className="text-neutral-600 font-bold">•</span>
          <span>{product.technology}</span>
        </p>
      </div>

      {/* 3. REAL PRODUCT PHOTOGRAPH STAGE */}
      <div className="my-auto py-2 w-full flex items-center justify-center">
        <ProductImage
          product={product}
          aspectRatio="4/3"
          className="h-56 sm:h-64 w-full bg-transparent border-0"
          imageClassName="transition-transform duration-500 group-hover:scale-108"
          priority={priorityImage}
        />
      </div>

      {/* 4. SPECIFICATIONS STRIP (VOLTAGE | CAPACITY | CCA | TECH) */}
      <div className="mt-4 mb-3 w-full">
        <ProductSpecs product={product} />
      </div>

      {/* 5. FITMENT INFO */}
      <div className="mb-4 min-h-[36px] flex items-center">
        <ProductFitment product={product} maxItems={3} />
      </div>

      {/* 6. ACTION BUTTONS (DETAILS & ENQUIRE) */}
      <div className="mb-3 w-full">
        <ProductActions
          product={product}
          onDetailsClick={onSelectProduct}
          onEnquireClick={onOpenEnquiry}
        />
      </div>

      {/* 7. BOTTOM VERIFIED KEY FEATURES CHECKLIST */}
      <div className="pt-3 border-t border-neutral-800/60 w-full flex items-center justify-between">
        <ProductFeatures product={product} maxFeatures={3} />
      </div>
    </motion.div>
  );
};
