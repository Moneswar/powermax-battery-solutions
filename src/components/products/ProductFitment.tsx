import React from 'react';
import { Product } from '../../types';

interface ProductFitmentProps {
  product: Product;
  className?: string;
  maxItems?: number;
}

export const ProductFitment: React.FC<ProductFitmentProps> = ({
  product,
  className = '',
  maxItems = 3,
}) => {
  const vehicles = product.suitableVehicles || [];

  if (vehicles.length === 0) {
    return (
      <div id={`fitment-${product.id}`} className={`text-xs text-[#667085] line-clamp-1 ${className}`}>
        <strong className="font-semibold text-[#172033]">Fits: </strong>Standard {product.voltage} systems
      </div>
    );
  }

  const displayedList = vehicles.slice(0, maxItems).join(', ');
  const hasMore = vehicles.length > maxItems;

  return (
    <div id={`fitment-${product.id}`} className={`text-xs text-[#667085] line-clamp-1 leading-snug ${className}`}>
      <strong className="font-semibold text-[#172033]">Fits: </strong>
      <span>{displayedList}</span>
      {hasMore && <span className="text-[#94A3B8]"> & more</span>}
    </div>
  );
};
