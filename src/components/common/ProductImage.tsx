import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BatteryCharging } from 'lucide-react';
import { Product } from '../../types';
import { resolveProductImage, normalizeImagePath } from '../../utils/productImages';

export interface ProductImageProps {
  /** The full product object */
  product?: Product;
  /** Direct image source path if not passing product */
  src?: string;
  /** Descriptive alt text */
  alt?: string;
  /** Brand name for fallback / lighting */
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
  /** Click handler */
  onImageClick?: () => void;
  /** Whether to render showroom ambient stage */
  showStage?: boolean;
}

// Brand-tailored lighting profiles according to specifications:
// Amaron -> green, Exide -> red, Bosch -> blue, Livguard -> green/teal,
// Luminous -> blue/green, SF Sonic -> blue, Okaya -> green/cyan, Microtek -> blue/red
export interface BrandLightingTheme {
  primary: string;
  secondary: string;
  coreNeon: string;
  secondaryNeon: string;
  glowRgba: string;
  ambientRgba: string;
  floorRgba: string;
  backGlow: string;
}

export function getBrandLighting(brandName?: string, colorThemePrimary?: string): BrandLightingTheme {
  const brand = (brandName || '').toLowerCase();

  // 1. Amaron -> vibrant neon green
  if (brand.includes('amaron')) {
    return {
      primary: '#22c55e',
      secondary: '#16a34a',
      coreNeon: '#22c55e',
      secondaryNeon: '#15803d',
      glowRgba: 'rgba(34, 197, 94, 0.45)',
      ambientRgba: 'rgba(34, 197, 94, 0.18)',
      floorRgba: 'rgba(34, 197, 94, 0.85)',
      backGlow: 'radial-gradient(circle at 50% 45%, rgba(34, 197, 94, 0.40) 0%, rgba(34, 197, 94, 0.12) 50%, transparent 70%)',
    };
  }

  // 2. Exide -> vibrant fiery red
  if (brand.includes('exide')) {
    return {
      primary: '#ef4444',
      secondary: '#dc2626',
      coreNeon: '#ef4444',
      secondaryNeon: '#b91c1c',
      glowRgba: 'rgba(239, 68, 68, 0.45)',
      ambientRgba: 'rgba(239, 68, 68, 0.18)',
      floorRgba: 'rgba(239, 68, 68, 0.85)',
      backGlow: 'radial-gradient(circle at 50% 45%, rgba(239, 68, 68, 0.38) 0%, rgba(239, 68, 68, 0.12) 50%, transparent 70%)',
    };
  }

  // 3. Bosch -> electric royal blue
  if (brand.includes('bosch')) {
    return {
      primary: '#38bdf8',
      secondary: '#2563eb',
      coreNeon: '#38bdf8',
      secondaryNeon: '#1d4ed8',
      glowRgba: 'rgba(56, 189, 248, 0.45)',
      ambientRgba: 'rgba(37, 99, 235, 0.18)',
      floorRgba: 'rgba(56, 189, 248, 0.85)',
      backGlow: 'radial-gradient(circle at 50% 45%, rgba(56, 189, 248, 0.40) 0%, rgba(37, 99, 235, 0.12) 50%, transparent 70%)',
    };
  }

  // 4. Livguard -> green/teal
  if (brand.includes('livguard')) {
    return {
      primary: '#14b8a6',
      secondary: '#10b981',
      coreNeon: '#14b8a6',
      secondaryNeon: '#0f766e',
      glowRgba: 'rgba(20, 184, 166, 0.45)',
      ambientRgba: 'rgba(16, 185, 129, 0.18)',
      floorRgba: 'rgba(20, 184, 166, 0.85)',
      backGlow: 'radial-gradient(circle at 50% 45%, rgba(20, 184, 166, 0.40) 0%, rgba(16, 185, 129, 0.12) 50%, transparent 70%)',
    };
  }

  // 5. Luminous -> vibrant cyan / blue-green
  if (brand.includes('luminous')) {
    return {
      primary: '#00e5ff',
      secondary: '#0284c7',
      coreNeon: '#00e5ff',
      secondaryNeon: '#0369a1',
      glowRgba: 'rgba(0, 229, 255, 0.45)',
      ambientRgba: 'rgba(2, 132, 199, 0.18)',
      floorRgba: 'rgba(0, 229, 255, 0.85)',
      backGlow: 'radial-gradient(circle at 50% 45%, rgba(0, 229, 255, 0.40) 0%, rgba(2, 132, 199, 0.12) 50%, transparent 70%)',
    };
  }

  // 6. SF Sonic -> electric blue
  if (brand.includes('sf sonic') || brand.includes('sf-sonic') || brand.includes('sfsonic')) {
    return {
      primary: '#3b82f6',
      secondary: '#1d4ed8',
      coreNeon: '#3b82f6',
      secondaryNeon: '#1e40af',
      glowRgba: 'rgba(59, 130, 246, 0.45)',
      ambientRgba: 'rgba(29, 78, 216, 0.18)',
      floorRgba: 'rgba(59, 130, 246, 0.85)',
      backGlow: 'radial-gradient(circle at 50% 45%, rgba(59, 130, 246, 0.40) 0%, rgba(29, 78, 216, 0.12) 50%, transparent 70%)',
    };
  }

  // 7. Okaya -> emerald / cyan neon
  if (brand.includes('okaya')) {
    return {
      primary: '#10b981',
      secondary: '#06b6d4',
      coreNeon: '#10b981',
      secondaryNeon: '#047857',
      glowRgba: 'rgba(16, 185, 129, 0.45)',
      ambientRgba: 'rgba(6, 182, 212, 0.18)',
      floorRgba: 'rgba(16, 185, 129, 0.85)',
      backGlow: 'radial-gradient(circle at 50% 45%, rgba(16, 185, 129, 0.40) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 70%)',
    };
  }

  // 8. Microtek -> dual blue-red neon
  if (brand.includes('microtek')) {
    return {
      primary: '#3b82f6',
      secondary: '#ef4444',
      coreNeon: '#3b82f6',
      secondaryNeon: '#ef4444',
      glowRgba: 'rgba(59, 130, 246, 0.45)',
      ambientRgba: 'rgba(239, 68, 68, 0.18)',
      floorRgba: 'rgba(59, 130, 246, 0.85)',
      backGlow: 'radial-gradient(circle at 35% 45%, rgba(59, 130, 246, 0.38) 0%, transparent 60%), radial-gradient(circle at 65% 50%, rgba(239, 68, 68, 0.32) 0%, transparent 60%)',
    };
  }

  // Fallback
  return {
    primary: colorThemePrimary || '#38bdf8',
    secondary: '#1d4ed8',
    coreNeon: '#38bdf8',
    secondaryNeon: '#1d4ed8',
    glowRgba: 'rgba(56, 189, 248, 0.35)',
    ambientRgba: 'rgba(59, 130, 246, 0.12)',
    floorRgba: 'rgba(56, 189, 248, 0.75)',
    backGlow: 'radial-gradient(circle at 50% 45%, rgba(56, 189, 248, 0.35) 0%, transparent 70%)',
  };
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  src,
  alt,
  brand: customBrand,
  model: customModel,
  modelCode: customModelCode,
  imageStatus: _customImageStatus,
  selectedImageIndex = 0,
  className = '',
  imageClassName = '',
  aspectRatio = '4/3',
  priority = false,
  onImageClick,
  showStage = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Derive active image source from central resolution system
  const imageResolution = resolveProductImage(product, src);
  let resolvedSrc = imageResolution.primaryImage;
  if (imageResolution.galleryImages && imageResolution.galleryImages.length > selectedImageIndex && imageResolution.galleryImages[selectedImageIndex]) {
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
    'auto': 'h-full min-h-[200px]',
  }[aspectRatio];

  const lighting = getBrandLighting(brandName, product?.colorTheme?.primaryColor);
  const isRealImage = imageResolution.hasRealImage;
  const showImage = Boolean(resolvedSrc) && !imageError && isRealImage;

  return (
    <div
      id={product ? `product-image-container-${product.id}` : undefined}
      className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl flex items-center justify-center p-3 sm:p-4 group select-none ${className}`}
      onClick={onImageClick}
    >
      {showStage && (
        <>
          {/* 1. Deep Studio Stage Dark Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1420]/70 via-[#070a10]/90 to-[#020407] pointer-events-none rounded-2xl" />

          {/* 2. Top Softbox Overhead Studio Light Accent */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_75%)] pointer-events-none" />

          {/* 3. Intense Brand Ambient Back-Glow (halo behind the battery) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-80 group-hover:opacity-100 blur-2xl"
            style={{
              background: lighting.backGlow,
            }}
          />

          {/* 4. VIBRANT SHOWROOM FLOOR UNDERGLOW & NEON REFLECTION (under the battery) */}
          {/* 4a. Wide Ambient Floor Reflection Spill */}
          <div
            className="absolute inset-x-2 bottom-1 h-12 pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
            style={{
              background: `radial-gradient(ellipse 85% 100% at 50% 50%, ${lighting.floorRgba} 0%, transparent 80%)`,
            }}
          />

          {/* 4b. Bright Core Neon Ellipse Flare */}
          <div
            className="absolute inset-x-8 bottom-2.5 h-6 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500 blur-[4px]"
            style={{
              background: `radial-gradient(ellipse 80% 100% at 50% 50%, ${lighting.coreNeon} 0%, ${lighting.secondaryNeon} 55%, transparent 85%)`,
            }}
          />

          {/* 4c. Ultra-Bright Center Specular Core */}
          <div
            className="absolute inset-x-16 bottom-3 h-2.5 pointer-events-none opacity-95 group-hover:opacity-100 transition-opacity duration-500 blur-[1.5px]"
            style={{
              background: `radial-gradient(ellipse 65% 100% at 50% 50%, #ffffff 0%, ${lighting.coreNeon} 65%, transparent 90%)`,
            }}
          />

          {/* 4d. Dark Contact Occlusion Shadow directly beneath battery base */}
          <div className="absolute inset-x-12 bottom-3.5 h-3 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.65)_60%,transparent_85%)] blur-[1.5px] pointer-events-none" />
        </>
      )}

      {/* 5. Cleanly Isolated Battery Product Image */}
      {showImage ? (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {!imageLoaded && (
            <div className="absolute inset-4 rounded-xl bg-neutral-900/30 animate-pulse flex items-center justify-center pointer-events-none">
              <BatteryCharging className="w-6 h-6 text-neutral-700 animate-pulse" />
            </div>
          )}

          <motion.img
            ref={imgRef}
            id={product ? `img-photo-${product.id}` : undefined}
            src={resolvedSrc}
            alt={altText}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              if ((import.meta as any).env?.DEV) {
                console.warn(`[ProductImage] Failed to load battery image: "${resolvedSrc}" for ${brandName} ${modelName}`);
              }
              setImageError(true);
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              scale: imageLoaded ? 1 : 0.96,
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`w-full h-full max-h-[92%] object-contain filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] saturate-[1.08] contrast-[1.05] transition-transform duration-500 group-hover:scale-[1.05] ${imageClassName}`}
          />
        </div>
      ) : (
        /* Real Product Image Coming Soon Stage */
        <div
          id={product ? `coming-soon-image-${product.id}` : undefined}
          className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#0a0f18]/60 rounded-xl border border-[#1d273a]/70 backdrop-blur-xs shadow-inner"
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 shadow-lg border border-white/5"
            style={{
              backgroundColor: lighting.coreNeon ? `${lighting.coreNeon}20` : 'rgba(255,255,255,0.05)',
              borderColor: lighting.coreNeon ? `${lighting.coreNeon}40` : 'rgba(255,255,255,0.1)',
            }}
          >
            <BatteryCharging
              className="w-6 h-6 animate-pulse"
              style={{ color: lighting.coreNeon || '#9ca3af' }}
            />
          </div>
          <span className="text-[11px] font-mono uppercase font-black tracking-widest text-white mb-0.5">
            {brandName}
          </span>
          <span className="text-[10px] font-mono text-neutral-400 truncate max-w-[190px] mb-2 font-medium">
            {modelName}
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111724] border border-[#222e44] text-[9px] font-mono font-bold text-amber-400/90 tracking-wide uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>REAL IMAGE COMING SOON</span>
          </div>
        </div>
      )}
    </div>
  );
};
