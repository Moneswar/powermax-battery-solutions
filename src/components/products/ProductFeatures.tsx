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
    checkColor = 'text-[#3b82f6]';
  } else if (brandLower.includes('livguard')) {
    checkColor = 'text-[#f59e0b]';
  } else if (brandLower.includes('okaya')) {
    checkColor = 'text-[#10b981]';
  } else if (brandLower.includes('microtek')) {
    checkColor = 'text-[#ef4444]';
  }

  // Format features into clean short phrases matching reference image
  const formatShortFeature = (feat: string) => {
    if (feat.includes('SilvenX') || feat.includes('Silver')) return 'Silver Alloy';
    if (feat.includes('Magic Eye') || feat.includes('indicator')) return 'Charge Eye';
    if (feat.includes('Zero') || feat.includes('zero')) return 'Zero Maintenance';
    if (feat.includes('cranking') || feat.includes('Cranking')) return 'High Cranking';
    if (feat.includes('Vibration') || feat.includes('vibration')) return 'Vibration Resistant';
    if (feat.includes('Start-Stop') || feat.includes('AGM')) return 'Start-Stop Ready';
    if (feat.includes('leak-proof') || feat.includes('Sealed')) return 'Spill-Proof';
    if (feat.includes('Long Life') || feat.includes('Long Service')) return 'Long Life';
    if (feat.includes('recharge') || feat.includes('Recharge')) return 'Fast Recharge';
    if (feat.includes('backup') || feat.includes('Backup')) return 'High Backup';
    if (feat.includes('Reliable') || feat.includes('reliable')) return 'Reliable';
    if (feat.includes('Heavy') || feat.includes('heavy')) return 'Heavy Duty';
    if (feat.includes('Dust') || feat.includes('dust')) return 'Dust Proof';
    if (feat.includes('Grid') || feat.includes('X3D')) return 'X3D Grid';
    if (feat.includes('Power') || feat.includes('power')) return 'High Power';
    if (feat.includes('Performance') || feat.includes('performance')) return 'High Performance';
    if (feat.includes('Extra Life') || feat.includes('life')) return 'Extra Life';
    return feat.length > 20 ? feat.slice(0, 18) + '...' : feat;
  };

  const rawFeatures = product.features || [];
  const featuresList = rawFeatures.slice(0, maxFeatures);

  if (featuresList.length === 0) {
    return null;
  }

  return (
    <div
      id={`features-list-${product.id}`}
      className={`w-full flex items-center justify-between text-[10.5px] font-medium text-neutral-300 ${className}`}
    >
      {featuresList.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-1 min-w-0">
          <Check className={`w-3 h-3 shrink-0 ${checkColor}`} />
          <span className="truncate">{formatShortFeature(feature)}</span>
        </div>
      ))}
    </div>
  );
};
