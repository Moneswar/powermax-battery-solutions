import React from 'react';
import { BatteryCharging, ArrowLeft, Home, Search } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
}) => {
  return (
    <div id="not-found-page" className="min-h-screen bg-[#F7F9F7] text-[#172033] pt-28 pb-20 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#EAF6EA] border border-[#2E8B35]/25 text-[#2E8B35] flex items-center justify-center mx-auto shadow-sm">
          <BatteryCharging className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase text-[#2E8B35] tracking-wider">
            Error 404: Circuit Disconnected
          </span>
          <h1 className="text-4xl font-extrabold text-[#172033] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
            The battery model or page you are looking for has been relocated or is temporarily offline. Let us guide you back to full power.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={onNavigateProducts}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#172033] border border-[#E5E7EB] font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            <Search className="w-4 h-4 text-[#2E8B35]" />
            <span>Browse Battery Catalogue</span>
          </button>
        </div>
      </div>
    </div>
  );
};
