import React from 'react';
import { Check } from 'lucide-react';
import { Product } from '../../types';

interface ProductFeaturesProps {
  product: Product;
  className?: string;
  maxFeatures?: number;
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  product,
  className = '',
  maxFeatures = 2,
}) => {
  const brandLower = product.brand.toLowerCase();

  let checkColor = 'text-[#2E8B35]';
  if (brandLower.includes('amaron')) {
    checkColor = 'text-[#2E8B35]';
  } else if (brandLower.includes('exide')) {
    checkColor = 'text-[#DC2626]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    checkColor = 'text-[#2563EB]';
  }

  const formatShortFeature = (feat: string) => {
    if (feat.includes('SilvenX') || feat.includes('Silver')) return 'Silver Inside Technology';
    if (feat.includes('Magic Eye') || feat.includes('indicator')) return 'Charge Status Eye';
    if (feat.includes('Zero') || feat.includes('zero')) return 'Zero Maintenance';
    if (feat.includes('cranking') || feat.includes('Cranking')) return 'High Cranking Power';
    if (feat.includes('Vibration') || feat.includes('vibration')) return 'Vibration Resistant';
    if (feat.includes('Start-Stop') || feat.includes('AGM')) return 'Start-Stop Ready';
    if (feat.includes('leak-proof') || feat.includes('Sealed')) return 'Spill-Proof Design';
    if (feat.includes('Long Life') || feat.includes('Long Service')) return 'Long Service Life';
    if (feat.includes('recharge') || feat.includes('Recharge')) return 'Fast Recharge Cycle';
    if (feat.includes('backup') || feat.includes('Backup')) return 'Extended Power Backup';
    if (feat.includes('Performance') || feat.includes('performance')) return 'High Performance';
    if (feat.includes('Tubular') || feat.includes('tubular')) return 'Tubular Technology';
    return feat.length > 24 ? feat.slice(0, 22) + '...' : feat;
  };

  const rawFeatures = product.features || [];
  const featuresList = rawFeatures.slice(0, maxFeatures);

  if (featuresList.length === 0) {
    return null;
  }

  return (
    <div
      id={`features-list-${product.id}`}
      className={`w-full flex flex-col gap-1 text-[11px] font-medium text-[#4B5563] ${className}`}
    >
      {featuresList.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-1.5 min-w-0">
          <Check className={`w-3.5 h-3.5 shrink-0 ${checkColor}`} />
          <span className="truncate">{formatShortFeature(feature)}</span>
        </div>
      ))}
    </div>
  );
};
