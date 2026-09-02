import React from 'react';
import { Product } from '../../types';

interface ProductBrandProps {
  product: Product;
  className?: string;
}

export const ProductBrand: React.FC<ProductBrandProps> = ({ product, className = '' }) => {
  const brand = product.brand;
  const brandUpper = brand.toUpperCase();

  // Custom typography and slogans for top authentic battery manufacturers
  if (brandUpper.includes('AMARON')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <div className="flex items-center gap-1">
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#22c55e] font-sans">
            AMARON
          </span>
          <span className="text-[10px] text-[#22c55e] font-bold -mt-2">®</span>
        </div>
        <span className="text-[9px] font-black tracking-widest text-[#22c55e]/90 uppercase -mt-0.5">
          LASTS LONG, REALLY LONG.
        </span>
      </div>
    );
  }

  if (brandUpper.includes('EXIDE')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <div className="flex items-center gap-1">
          <span className="text-xl sm:text-2xl font-black tracking-wider text-[#ef4444] font-sans italic">
            EXIDE
          </span>
        </div>
        <span className="text-[9px] font-bold tracking-widest text-neutral-300 uppercase -mt-0.5">
          WHAT DRIVES YOU
        </span>
      </div>
    );
  }

  if (brandUpper.includes('BOSCH')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <div className="flex items-center gap-2">
          {/* Bosch iconic double-circle armature symbol */}
          <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full border border-white" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#ef4444] font-sans">
            BOSCH
          </span>
        </div>
        <span className="text-[9px] font-medium tracking-wide text-neutral-400 -mt-0.5 pl-7">
          Invented for life
        </span>
      </div>
    );
  }

  if (brandUpper.includes('LUMINOUS')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0284c7] font-sans">
          LUMINOUS
        </span>
        <span className="text-[9px] font-semibold tracking-wider text-neutral-300 uppercase -mt-0.5">
          KHUSHIYON KA GHAR
        </span>
      </div>
    );
  }

  if (brandUpper.includes('SF SONIC') || brandUpper.includes('SF-SONIC')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <div className="flex items-baseline gap-1">
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#3b82f6] font-sans italic">
            SF
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#ef4444] font-sans italic">
            SONIC
          </span>
        </div>
        <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase -mt-0.5">
          POWER THAT NEVER DIES
        </span>
      </div>
    );
  }

  if (brandUpper.includes('LIVGUARD')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#f59e0b] font-sans italic">
          LIVGUARD
        </span>
        <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase -mt-0.5">
          ENERGY UNLIMITED
        </span>
      </div>
    );
  }

  if (brandUpper.includes('OKAYA')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <span className="text-xl sm:text-2xl font-black tracking-wider text-[#14b8a6] font-sans">
          OKAYA
        </span>
        <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase -mt-0.5">
          POWER TO EMPOWER
        </span>
      </div>
    );
  }

  if (brandUpper.includes('MICROTEK')) {
    return (
      <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
        <span className="text-xl sm:text-2xl font-black tracking-wide text-[#dc2626] font-sans">
          MICROTEK
        </span>
        <span className="text-[9px] font-medium tracking-widest text-neutral-400 uppercase -mt-0.5">
          TECHNOLOGY WE LIVE BY
        </span>
      </div>
    );
  }

  return (
    <div id={`brand-${product.id}`} className={`flex flex-col ${className}`}>
      <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-100 font-sans uppercase">
        {brand}
      </span>
      <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase -mt-0.5">
        OEM BATTERY
      </span>
    </div>
  );
};
