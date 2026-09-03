import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Service } from '../types';
import {
  Wrench,
  Truck,
  Activity,
  Zap,
  RotateCw,
  AlertTriangle,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../config/siteConfig';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onSelectService: (service: Service) => void;
  onBookService: (service: Service) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onBookService,
}) => {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES_DATA[0]);

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
    <>
      <SeoHead
        title="Battery Services – Doorstep Installation, Digital Testing & Emergency Jumpstart"
        description="Comprehensive battery solutions: rapid 30-min doorstep fitment, electronic health diagnostics, inverter water top-up, commercial fleet management, and eco-friendly scrap recycling."
      />

      <div id="services-page" className="min-h-screen bg-[#F7F9F7] text-[#172033] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'Our Services' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HERO BANNER */}
          <div className="py-10 border-b border-[#E5E7EB] space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6EA] border border-[#2E8B35]/25 text-[#1F6B2A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2E8B35]" />
              <span>Certified Technicians & Express Mobile Vans</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#172033] tracking-tight">
              Full-Spectrum <br />
              <span className="text-[#2E8B35]">Battery Care Services.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#667085] max-w-3xl leading-relaxed font-medium">
              From precision digital diagnostics to safe OBD-II vehicle memory preservation and emergency roadside assistance, our technicians protect your vehicle and energy equipment.
            </p>
          </div>

          {/* SERVICES DIRECTORY GRID */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-[#E5E7EB]">
            {SERVICES_DATA.map((srv) => {
              const Icon = getServiceIcon(srv.iconName);
              const isSelected = selectedService.id === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-xs ${
                    isSelected
                      ? 'bg-white border-[#2E8B35] ring-2 ring-[#2E8B35]/20 shadow-md'
                      : 'bg-white border-[#E5E7EB] hover:border-[#CBD5E1]'
                  }`}
                >
                  <div className="space-y-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#2E8B35] text-white' : 'bg-[#EAF6EA] text-[#2E8B35]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#172033] tracking-tight">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed line-clamp-2">
                      {srv.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0F2F5] flex items-center justify-between text-xs">
                    <span className="text-[#2E8B35] font-bold">{srv.turnaroundTime}</span>
                    <span className="font-bold text-[#172033]">{srv.coverage}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SELECTED SERVICE SPOTLIGHT DETAILS */}
          <div className="py-12 bg-white rounded-3xl border border-[#E5E7EB] p-8 sm:p-10 shadow-xs mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6EA] text-[#1F6B2A] text-xs font-bold uppercase mb-2">
                    Service Spotlight
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#172033]">
                    {selectedService.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#667085] mt-2 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#667085] block">
                    What's Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4B5563]">
                    {selectedService.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2E8B35] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3.5">
                  <button
                    onClick={() => onBookService(selectedService)}
                    className="px-6 py-3.5 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Book {selectedService.title}</span>
                  </button>

                  <a
                    href={QUICK_CONTACT_LINKS.callUrl}
                    className="px-6 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#172033] border border-[#E5E7EB] font-bold text-xs transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#2E8B35]" />
                    <span>Call Hotline</span>
                  </a>
                </div>
              </div>

              {/* Service Meta Card */}
              <div className="lg:col-span-4 bg-[#F8FAFC] p-6 rounded-2xl border border-[#E5E7EB] space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#667085] border-b border-[#E5E7EB] pb-2">
                  Service Specifications
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#667085] block">Typical Turnaround</span>
                    <strong className="text-sm font-bold text-[#172033]">{selectedService.turnaroundTime}</strong>
                  </div>
                  <div>
                    <span className="text-[#667085] block">Service Coverage</span>
                    <strong className="text-sm font-bold text-[#2E8B35]">{selectedService.coverage}</strong>
                  </div>
                  <div>
                    <span className="text-[#667085] block">Availability</span>
                    <strong className="text-sm font-bold text-[#172033]">Monday – Sunday (Emergency 24/7 Hotline)</strong>
                  </div>
                  <div>
                    <span className="text-[#667085] block">Location</span>
                    <strong className="text-sm font-bold text-[#172033]">All Bangalore Zones</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
