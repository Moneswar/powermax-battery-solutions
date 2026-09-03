import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../config/siteConfig';
import {
  ShieldCheck,
  Award,
  Wrench,
  RefreshCw,
  Phone,
  MessageCircle,
  Cpu,
  MapPin,
  Clock,
  Zap,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onNavigateProducts,
}) => {
  const milestones = [
    { year: '2009', title: 'Founded with 1 Hub', desc: 'Started as an authorized single-outlet dealership committed to eliminating grey-market and counterfeit batteries.' },
    { year: '2014', title: 'Digital Testing Pioneer', desc: 'First local provider to introduce digital conductance load analyzers and zero-error vehicle memory savers.' },
    { year: '2019', title: 'Doorstep Rapid Fleet', desc: 'Launched dedicated mobile fitment units offering under-30-minute breakdown jumpstart and home delivery.' },
    { year: '2024', title: 'Solar & Clean Tech Expansion', desc: 'Expanded into commercial solar storage, telecom VRLA backup, and next-gen tubular modules.' },
  ];

  return (
    <>
      <SeoHead
        title="About Us – Authorized Battery Specialists & Precision Diagnostics"
        description={`Learn more about ${SITE_CONFIG.businessName}, your trusted authorized dealer for genuine automotive, inverter, solar, and industrial batteries since 2009.`}
      />

      <div id="about-page" className="min-h-screen bg-[#F7F9F7] text-[#172033] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'About Us' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HERO BANNER */}
          <div className="py-12 border-b border-[#E5E7EB] space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6EA] border border-[#2E8B35]/25 text-[#1F6B2A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2E8B35]" />
              <span>The PowerMax Standard</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#172033] tracking-tight">
              Engineered for Power. <br />
              <span className="text-[#2E8B35]">Trusted for Reliability.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] max-w-3xl leading-relaxed font-medium">
              For more than 15 years, {SITE_CONFIG.businessName} has been the benchmark for genuine battery distribution, advanced electrical diagnostics, and reliable emergency doorstep fitment across {SITE_CONFIG.city}.
            </p>
          </div>

          {/* MISSION & CORE PHILOSOPHY */}
          <div className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-[#E5E7EB]">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
                Our Founding Promise: <br />
                Zero Counterfeits, 100% Genuine Care.
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                Modern automobiles and home backup power systems are technologically sensitive. Sub-standard or refurbished batteries cause severe voltage spikes, ECU damage, and premature alternator failure.
              </p>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                At {SITE_CONFIG.businessName}, every battery in our showroom is sourced directly from certified manufacturing lines with authentic factory holographic seals, active digital serial barcodes, and fresh manufacturing dates.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <button
                  onClick={onNavigateProducts}
                  className="px-6 py-3 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                >
                  Explore Our Battery Catalog
                </button>
                <button
                  onClick={onNavigateContact}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#172033] border border-[#E5E7EB] font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Visit Showroom
                </button>
              </div>
            </div>

            {/* Diagnostic Rig Showcase Box */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] space-y-5 shadow-xs">
              <div className="flex items-center gap-3 border-b border-[#F0F2F5] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] border border-[#2E8B35]/20 flex items-center justify-center text-[#2E8B35]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#172033]">Precision Workshop Equipment</h3>
                  <span className="text-xs text-[#667085]">OEM Conductance & Load Analyzers</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[11px] font-bold uppercase text-[#667085] block">CCA Testing</span>
                  <span className="text-sm font-bold text-[#172033] mt-1 block">Digital Load Analysis</span>
                  <p className="text-[11px] text-[#667085] mt-0.5">Accurate Cold Cranking Amps verification</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[11px] font-bold uppercase text-[#667085] block">ECU Protection</span>
                  <span className="text-sm font-bold text-[#172033] mt-1 block">OBD-II Memory Savers</span>
                  <p className="text-[11px] text-[#667085] mt-0.5">Zero reset during battery swaps</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[11px] font-bold uppercase text-[#667085] block">Alternator Health</span>
                  <span className="text-sm font-bold text-[#172033] mt-1 block">Ripple Voltage Audit</span>
                  <p className="text-[11px] text-[#667085] mt-0.5">Prevents battery overcharging</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[11px] font-bold uppercase text-[#667085] block">Green Disposal</span>
                  <span className="text-sm font-bold text-[#172033] mt-1 block">CPCB Smelting Compliance</span>
                  <p className="text-[11px] text-[#667085] mt-0.5">100% closed-loop lead recycling</p>
                </div>
              </div>
            </div>
          </div>

          {/* TIMELINE MILESTONES */}
          <div className="py-14 border-b border-[#E5E7EB]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
                Our Journey of Growth
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] mt-1 font-medium">
                Pioneering quality, reliability, and fast doorstep service across Karnataka.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-3">
                  <span className="text-2xl font-black text-[#2E8B35] font-mono block">{m.year}</span>
                  <h3 className="text-base font-bold text-[#172033]">{m.title}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT & STORE HOURS CTA */}
          <div className="pt-14 text-center max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl font-black text-[#172033]">
              Need Expert Battery Guidance?
            </h3>
            <p className="text-xs sm:text-sm text-[#667085]">
              Speak directly with our senior technicians or visit our showroom near Central Flyover, Bangalore.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="px-6 py-3 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white font-bold text-xs shadow-xs"
              >
                Call {SITE_CONFIG.phoneDisplay}
              </a>
              <button
                onClick={onNavigateContact}
                className="px-6 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#172033] border border-[#E5E7EB] font-bold text-xs shadow-xs"
              >
                Store Location & Directions
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
