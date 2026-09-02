import React from 'react';
import { ShieldCheck, Award, Wrench, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Products',
      desc: 'Direct factory distribution with valid barcode seals, official hologram warranties, and verified manufacturing dates.',
      color: 'text-red-500',
      bgGlow: 'bg-red-500/10',
    },
    {
      icon: Award,
      title: 'Top Trusted Brands',
      desc: 'Authorized dealership for India’s premium manufacturers including Amaron, Exide, Bosch, SF Sonic, and Luminous.',
      color: 'text-amber-500',
      bgGlow: 'bg-amber-500/10',
    },
    {
      icon: Wrench,
      title: 'Expert Guidance & Fitment',
      desc: 'Trained automotive technicians utilize digital conductance analyzers, memory savers, and OEM torque standards.',
      color: 'text-blue-500',
      bgGlow: 'bg-blue-500/10',
    },
    {
      icon: RefreshCw,
      title: 'Hassle-Free Warranty',
      desc: 'Immediate paperless warranty processing, replacement assistance, and maximum fair market scrap value on old batteries.',
      color: 'text-emerald-500',
      bgGlow: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-neutral-900 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
            WHY POWERMAX?
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            COMMITTED TO UNCOMPROMISING QUALITY
          </p>
          <p className="text-sm sm:text-base text-neutral-300">
            We are dedicated to providing genuine products, transparent guidance, and dependable after-sales care.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bgGlow} border border-white/10 flex items-center justify-center ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guaranteed Service SLA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Stats Counter Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">{SITE_CONFIG.stats.yearsExperience}</div>
            <div className="text-xs font-mono uppercase text-neutral-400 mt-1">Years of Trust</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-red-500">{SITE_CONFIG.stats.happyCustomers}</div>
            <div className="text-xs font-mono uppercase text-neutral-400 mt-1">Satisfied Customers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">{SITE_CONFIG.stats.brandsCount}</div>
            <div className="text-xs font-mono uppercase text-neutral-400 mt-1">Authorized Brands</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">{SITE_CONFIG.stats.satisfactionRate}</div>
            <div className="text-xs font-mono uppercase text-neutral-400 mt-1">Positive Rating</div>
          </div>
        </div>

      </div>
    </section>
  );
};
