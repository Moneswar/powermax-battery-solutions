import React from 'react';
import { SERVICES_DATA } from '../../data/services';
import { Service } from '../../types';
import {
  Wrench,
  Truck,
  Activity,
  Zap,
  RotateCw,
  AlertTriangle,
  ShieldCheck,
  Sun,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface HomeServicesProps {
  onSelectService: (service: Service) => void;
  onViewAllServices: () => void;
}

export const HomeServices: React.FC<HomeServicesProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return Wrench;
      case 'Truck':
        return Truck;
      case 'Activity':
        return Activity;
      case 'Zap':
        return Zap;
      case 'RotateCw':
        return RotateCw;
      case 'AlertTriangle':
        return AlertTriangle;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Sun':
        return Sun;
      default:
        return Wrench;
    }
  };

  return (
    <section id="services-summary" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Full Technical Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Essential Battery Services
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl font-medium">
              Professional doorstep fitment, computerized load diagnostics, and green recycling handled by factory-trained technicians.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#DC2626] hover:text-[#B91C1C] group cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.slice(0, 4).map((srv) => {
            const Icon = getServiceIcon(srv.iconName);
            return (
              <div
                key={srv.id}
                onClick={() => onSelectService(srv)}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#DC2626]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col justify-between cursor-pointer group shadow-xs"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] border border-[#DC2626]/20 flex items-center justify-center text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 font-medium">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#DC2626]">{srv.turnaroundTime}</span>
                  <span className="font-bold text-[#64748B] group-hover:text-[#0F172A] transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
