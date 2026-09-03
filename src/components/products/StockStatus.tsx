import React from 'react';
import { Product } from '../../types';

interface StockStatusProps {
  product: Product;
  className?: string;
}

export const StockStatus: React.FC<StockStatusProps> = ({ product, className = '' }) => {
  return (
    <div
      id={`stock-status-${product.id}`}
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${className}`}
    >
      {product.inStock ? (
        <>
          <span className="w-2 h-2 rounded-full bg-[#2E8B35] animate-pulse" />
          <span className="text-[#1F6B2A]">In Stock</span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-[#D97706]" />
          <span className="text-[#B45309]">Availability: Contact Us</span>
        </>
      )}
    </div>
  );
};
