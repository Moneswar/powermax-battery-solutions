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
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold ${className}`}
    >
      {product.inStock ? (
        <>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          <span className="text-emerald-400">In Stock</span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-amber-400">Availability: Contact Us</span>
        </>
      )}
    </div>
  );
};
