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
    <section id="services-summary" className="py-20 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FULL-SPECTRUM TECHNICAL SUPPORT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              COMPLETE BATTERY SERVICES
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-xl">
              From doorstep fitment and emergency breakdown assistance to solar power audits and eco-friendly scrap recycling.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 group cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.slice(0, 4).map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-2 leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{service.turnaroundTime}</span>
                  </div>
                  <span className="text-xs font-bold text-red-400 group-hover:text-white transition-colors">
                    Details →
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
