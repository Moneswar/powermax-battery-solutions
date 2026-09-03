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
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10.5px] font-semibold transition-all duration-200 cursor-pointer ${
        isCompared
          ? 'bg-[#EAF6EA] border border-[#2E8B35]/40 text-[#1F6B2A]'
          : 'bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#667085] hover:text-[#172033]'
      } ${className}`}
    >
      {isCompared ? (
        <>
          <Check className="w-3 h-3 text-[#2E8B35]" />
          <span>Comparing</span>
        </>
      ) : (
        <>
          <SlidersHorizontal className="w-3 h-3 text-[#667085]" />
          <span>Compare</span>
        </>
      )}
    </button>
  );
};
