import React from 'react';
import { SlidersHorizontal, Check } from 'lucide-react';
import { Product } from '../../types';

interface CompareButtonProps {
  product: Product;
  isCompared: boolean;
  onToggleCompare: (product: Product) => void;
  className?: string;
}

export const CompareButton: React.FC<CompareButtonProps> = ({
  product,
  isCompared,
  onToggleCompare,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleCompare(product);
  };

  return (
    <button
      id={`btn-compare-${product.id}`}
      type="button"
      onClick={handleClick}
      aria-label={isCompared ? 'Remove from compare' : 'Add to compare'}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all duration-200 cursor-pointer ${
        isCompared
          ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300'
          : 'bg-[#0e131d]/90 hover:bg-[#151c2a] border border-[#1e2638] text-neutral-400 hover:text-neutral-200'
      } ${className}`}
    >
      {isCompared ? (
        <>
          <Check className="w-3 h-3 text-amber-400" />
          <span>Comparing</span>
        </>
      ) : (
        <>
          <SlidersHorizontal className="w-3 h-3 text-neutral-400" />
          <span>Compare</span>
        </>
      )}
    </button>
  );
};
