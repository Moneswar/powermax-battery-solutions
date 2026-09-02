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
  maxFeatures = 3,
}) => {
  const brandLower = product.brand.toLowerCase();

  let checkColor = 'text-emerald-400';
  if (brandLower.includes('amaron')) {
    checkColor = 'text-[#22c55e]';
  } else if (brandLower.includes('exide')) {
    checkColor = 'text-[#ef4444]';
  } else if (brandLower.includes('bosch')) {
    checkColor = 'text-[#38bdf8]';
  } else if (brandLower.includes('luminous')) {
    checkColor = 'text-[#00e5ff]';
  } else if (brandLower.includes('sf sonic') || brandLower.includes('sf-sonic')) {
    checkColor = 'text-[#ef4444]';
  } else if (brandLower.includes('livguard')) {
    checkColor = 'text-[#14b8a6]';
  } else if (brandLower.includes('okaya')) {
    checkColor = 'text-[#10b981]';
  } else if (brandLower.includes('microtek')) {
    checkColor = 'text-[#ef4444]';
  }

  // Extract concise feature highlights
  const featuresList = (product.features || []).slice(0, maxFeatures);

  if (featuresList.length === 0) {
    return null;
  }

  // Format features into clean short phrases if necessary
  const formatShortFeature = (feat: string) => {
    if (feat.includes('SilvenX') || feat.includes('Silver')) return 'Silver Alloy Grids';
    if (feat.includes('Magic Eye') || feat.includes('indicator')) return 'Charge Eye Sensor';
    if (feat.includes('Zero') || feat.includes('zero')) return 'Zero Maintenance';
    if (feat.includes('cranking') || feat.includes('Cranking')) return 'High Cranking Power';
    if (feat.includes('Vibration') || feat.includes('vibration')) return 'High Durability';
    if (feat.includes('Start-Stop') || feat.includes('AGM')) return 'Start-Stop Ready';
    if (feat.includes('leak-proof') || feat.includes('Sealed')) return 'Spill-Proof Casing';
    if (feat.includes('Life') || feat.includes('life')) return 'Long Service Life';
    if (feat.includes('recharge') || feat.includes('Recharge')) return 'Fast Recharge';
    if (feat.includes('backup') || feat.includes('Backup')) return 'Extended Backup';
    // Otherwise limit length
    return feat.length > 24 ? feat.slice(0, 22) + '...' : feat;
  };

  return (
    <div
      id={`features-list-${product.id}`}
      className={`w-full flex items-center justify-between gap-1 text-[11px] font-medium text-neutral-300 ${className}`}
    >
      {featuresList.map((feature, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-1 min-w-0">
            <Check className={`w-3.5 h-3.5 shrink-0 ${checkColor}`} />
            <span className="truncate">{formatShortFeature(feature)}</span>
          </div>
          {idx < featuresList.length - 1 && (
            <span className="text-neutral-700 font-mono select-none px-0.5">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
