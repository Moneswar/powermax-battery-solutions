import React, { useState, useEffect, useRef } from 'react';
import { BatteryCharging, ShieldCheck } from 'lucide-react';
import { Product } from '../../types';
import { resolveProductImage, normalizeImagePath } from '../../utils/productImages';

export interface ProductImageProps {
  /** The full product object */
  product?: Product;
  /** Direct image source path if not passing product */
  src?: string;
  /** Descriptive alt text */
  alt?: string;
  /** Brand name for fallback */
  brand?: string;
  /** Model name or code for fallback */
  model?: string;
  modelCode?: string;
  /** Image status flag: 'real' | 'pending' */
  imageStatus?: 'real' | 'pending';
  /** Selected gallery index if product has multiple images */
  selectedImageIndex?: number;
  /** Outer container class */
  className?: string;
  /** Image element class */
  imageClassName?: string;
  /** Aspect ratio preset */
  aspectRatio?: '4/3' | 'square' | 'video' | 'auto';
  /** High priority eager loading (e.g. for hero / above-the-fold cards) */
  priority?: boolean;
  /** Optional subtle floating motion (recommended for Hero / Featured only) */
  floatAnimation?: boolean;
  /** Click handler */
  onImageClick?: () => void;
  /** Whether to render showroom ambient stage */
  showStage?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  src,
  alt,
  brand: customBrand,
  model: customModel,
  modelCode: customModelCode,
  selectedImageIndex = 0,
  className = '',
  imageClassName = '',
  aspectRatio = '4/3',
  priority = false,
  floatAnimation = false,
  onImageClick,
  showStage = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Derive active image source from central resolution system
  const imageResolution = resolveProductImage(product, src);
  let resolvedSrc = imageResolution.primaryImage;
  if (
    imageResolution.galleryImages &&
    imageResolution.galleryImages.length > selectedImageIndex &&
    imageResolution.galleryImages[selectedImageIndex]
  ) {
    resolvedSrc = imageResolution.galleryImages[selectedImageIndex];
  } else if (!resolvedSrc && src) {
    resolvedSrc = normalizeImagePath(src);
  }

  // Reset error state and check if image is already completed in cache
  useEffect(() => {
    setImageError(false);
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [resolvedSrc]);

  const brandName = product?.brand || customBrand || imageResolution.verifiedRecord?.brand || 'Battery';
  const modelName = product?.name || customModel || product?.modelCode || customModelCode || imageResolution.verifiedRecord?.name || '';

  const altText =
    alt ||
    product?.imageAlt ||
    `${brandName} ${modelName} ${product?.capacity || ''} ${product?.voltage || ''} Battery`.trim();

  const aspectClass = {
    '4/3': 'aspect-[4/3]',
    'square': 'aspect-square',
    'video': 'aspect-video',
    'auto': 'h-full min-h-[190px]',
  }[aspectRatio];

  const isRealImage = imageResolution.hasRealImage;
  const showImage = Boolean(resolvedSrc) && !imageError && isRealImage;

  return (
    <div
      id={product ? `product-image-container-${product.id}` : undefined}
      className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl flex items-center justify-center p-3 sm:p-4 group select-none bg-[#F8FAFC]/80 border border-[#F1F5F9] transition-all duration-300 ${className}`}
      onClick={onImageClick}
    >
      {/* 1. Subtle Ecommerce Photography Natural Ground Shadow */}
      {showStage && (
        <div className="absolute inset-x-8 bottom-3 sm:bottom-4 h-4 pointer-events-none flex items-center justify-center">
          <div className="w-3/4 h-2.5 rounded-full bg-slate-900/10 blur-xs transition-all duration-400 ease-out group-hover:scale-105 group-hover:bg-slate-900/15" />
        </div>
      )}

      {/* 2. Battery Image with smooth 400ms fade-in, natural depth, and 1.04x hover elevation */}
      {showImage ? (
        <div
          className={`relative z-10 w-full h-full flex items-center justify-center pointer-events-none animate-battery-fade-in ${
            floatAnimation ? 'animate-battery-float' : ''
          }`}
        >
          <img
            ref={imgRef}
            src={resolvedSrc}
            alt={altText}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            className={`max-h-full max-w-full w-auto object-contain transition-all duration-400 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1.5 filter drop-shadow-[0_8px_16px_rgba(15,23,42,0.10)] group-hover:drop-shadow-[0_14px_24px_rgba(15,23,42,0.16)] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${imageClassName}`}
          />
        </div>
      ) : (
        /* 3. Branded Authentic Fallback Card */
        <div className="relative z-10 w-full h-full max-h-[175px] rounded-xl border border-[#E2E8F0] bg-white shadow-xs flex flex-col items-center justify-center p-3.5 text-center">
          <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] text-[#DC2626] flex items-center justify-center mb-2 shadow-xs">
            <BatteryCharging className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-[#1E293B] tracking-tight line-clamp-1">
            {brandName} {modelName}
          </span>
          <span className="text-[10px] font-medium text-[#64748B] mt-0.5">
            Authentic Photo Verification
          </span>
          <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]">
            <ShieldCheck className="w-3 h-3 text-[#16A34A]" />
            <span>100% Genuine OEM Unit</span>
          </div>
        </div>
      )}
    </div>
  );
};
