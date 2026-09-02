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
      <div id={`fitment-${product.id}`} className={`text-xs text-neutral-400 ${className}`}>
        <strong className="font-bold text-white">Suitable for: </strong>Standard {product.voltage} systems and compatible installations.
      </div>
    );
  }

  const displayedList = vehicles.slice(0, maxItems).join(', ');
  const hasMore = vehicles.length > maxItems;

  return (
    <div id={`fitment-${product.id}`} className={`text-xs text-neutral-300 leading-relaxed ${className}`}>
      <strong className="font-bold text-white">Suitable for: </strong>
      <span className="text-neutral-300">{displayedList}</span>
      {hasMore && <span className="text-neutral-400"> & more</span>}
    </div>
  );
};
