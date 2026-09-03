import React from 'react';
import {
  ShieldCheck,
  Compass,
  Wrench,
  RefreshCw,
  Headphones,
  Grid,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Genuine Battery Products',
      desc: '100% factory original batteries with verified barcode seals, manufacturer serial numbers, and authentic warranty cards.',
    },
    {
      icon: Compass,
      title: 'Expert Battery Selection',
      desc: 'Personalized battery matching for your specific vehicle make, driving conditions, and electrical load requirements.',
    },
    {
      icon: Wrench,
      title: 'Reliable Installation',
      desc: 'Professional technicians perform proper terminal cleaning, anti-corrosion greasing, and charging system diagnostics.',
    },
    {
      icon: RefreshCw,
      title: 'Warranty Assistance',
      desc: 'Seamless paperless warranty registration with hassle-free doorstep replacement support and fair scrap exchange value.',
    },
    {
      icon: Headphones,
      title: 'Fast Customer Support',
      desc: 'Quick turnaround response via Phone and WhatsApp with express delivery options across Bangalore.',
    },
    {
      icon: Grid,
      title: 'Multiple Battery Categories',
      desc: 'Comprehensive inventory ranging from two-wheelers and passenger cars to heavy commercial, solar, and home inverter batteries.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Why PowerMax</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Committed to Quality, Reliability & Speed
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] font-medium">
            Over a decade of trusted service delivering authentic automotive and industrial power solutions backed by certified expertise.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#DC2626]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] border border-[#DC2626]/20 flex items-center justify-center text-[#DC2626]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Counter Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xs">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#DC2626] block font-mono">
              {SITE_CONFIG.stats.yearsExperience}
            </span>
            <span className="text-xs font-bold text-[#0F172A] mt-1 block">Years Experience</span>
            <span className="text-[11px] text-[#64748B]">Automotive Diagnostics</span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#DC2626] block font-mono">
              {SITE_CONFIG.stats.happyCustomers}
            </span>
            <span className="text-xs font-bold text-[#0F172A] mt-1 block">Satisfied Clients</span>
            <span className="text-[11px] text-[#64748B]">Across Karnataka</span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#DC2626] block font-mono">
              {SITE_CONFIG.stats.batteriesReplaced}
            </span>
            <span className="text-xs font-bold text-[#0F172A] mt-1 block">Batteries Installed</span>
            <span className="text-[11px] text-[#64748B]">100% Genuine Certified</span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#DC2626] block font-mono">
              {SITE_CONFIG.stats.satisfactionRate}
            </span>
            <span className="text-xs font-bold text-[#0F172A] mt-1 block">Customer Rating</span>
            <span className="text-[11px] text-[#64748B]">Verified Feedback</span>
          </div>
        </div>

      </div>
    </section>
  );
};
