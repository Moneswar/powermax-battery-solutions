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
  const isVehicle =
    product.category === 'Automotive' ||
    product.category === 'Two-Wheeler' ||
    product.category === 'Commercial' ||
    product.category === 'Agricultural';

  const prefix = isVehicle ? 'Fits' : 'Suitable for';
  const vehicles = product.suitableVehicles || [];

  if (vehicles.length === 0) {
    return (
      <div id={`fitment-${product.id}`} className={`text-xs text-neutral-400 ${className}`}>
        <span className="font-bold text-neutral-300">{prefix}:</span> Standard {product.voltage} systems and compatible installations.
      </div>
    );
  }

  const displayedList = vehicles.slice(0, maxItems).join(', ');
  const hasMore = vehicles.length > maxItems;

  return (
    <div id={`fitment-${product.id}`} className={`text-xs text-neutral-300 leading-relaxed ${className}`}>
      <span className="font-bold text-white">{prefix}: </span>
      <span className="text-neutral-300">{displayedList}</span>
      {hasMore && <span className="text-neutral-400"> and more.</span>}
    </div>
  );
};
