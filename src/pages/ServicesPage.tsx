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
  onSelectService,
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

      <div id="services-page" className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'Our Services' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HERO BANNER */}
          <div className="py-10 border-b border-neutral-800 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CERTIFIED TECHNICIANS & FIELD RIGS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              FULL-SPECTRUM <br />
              <span className="text-red-500">BATTERY CARE SERVICES.</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
              We go beyond selling batteries. From precision electronic diagnostics to safe OBD-II vehicle memory preservation and emergency roadside assistance, our technicians protect your investment.
            </p>
          </div>

          {/* SERVICES DIRECTORY GRID */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-neutral-800">
            {SERVICES_DATA.map((srv) => {
              const Icon = getServiceIcon(srv.iconName);
              const isSelected = selectedService.id === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-neutral-900 border-red-500 shadow-xl shadow-red-600/10 scale-[1.02]'
                      : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                      {srv.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">{srv.turnaroundTime}</span>
                    <span className={`font-bold ${isSelected ? 'text-red-400' : 'text-neutral-500'}`}>
                      Select →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ACTIVE SERVICE DEEP DIVE SPOTLIGHT */}
          {(() => {
            const Icon = getServiceIcon(selectedService.iconName);
            return (
              <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-neutral-800">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-red-400 font-bold uppercase">
                        Active Service Selection
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {selectedService.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>

                  {/* Step-by-Step Procedure */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase text-neutral-400 font-bold">
                      Standard Operating Procedure:
                    </h4>
                    <div className="space-y-2.5">
                      {selectedService.processSteps.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3 text-xs sm:text-sm text-neutral-200"
                        >
                          <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <strong className="text-white block">{step.title}</strong>
                            <span className="text-xs text-neutral-400">{step.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => onBookService(selectedService)}
                      className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/25 transition-all cursor-pointer hover:scale-105"
                    >
                      {selectedService.ctaLabel || 'Book This Service Now'}
                    </button>

                    <a
                      href={QUICK_CONTACT_LINKS.callUrl}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-bold text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4 text-red-400" />
                      <span>Direct Hotline Call</span>
                    </a>
                  </div>
                </div>

                {/* Service SLA Highlights Box */}
                <div className="lg:col-span-5 bg-neutral-900/90 p-6 sm:p-8 rounded-3xl border border-neutral-800 space-y-6 shadow-2xl">
                  <h3 className="text-base font-bold text-white border-b border-neutral-800 pb-3">
                    Service Guarantees & SLAs
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Response Time SLA:</strong>
                        <span className="text-neutral-400">{selectedService.turnaroundTime}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Coverage Area:</strong>
                        <span className="text-neutral-400">{selectedService.coverage}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Key Advantages:</strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-neutral-400 text-xs">
                          {selectedService.keyBenefits.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-red-400 font-bold block">
                      Emergency Breakdown?
                    </span>
                    <p className="text-neutral-400">
                      If you are stranded on the road with a dead battery, mention your GPS location on WhatsApp for priority emergency dispatch.
                    </p>
                    <a
                      href={QUICK_CONTACT_LINKS.whatsappUrl(
                        `Emergency Breakdown Jumpstart Request! My vehicle is stopped at:`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Send Live Location on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </>
  );
};
