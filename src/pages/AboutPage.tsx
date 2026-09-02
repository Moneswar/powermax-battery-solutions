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
    { year: '2024', title: 'Solar & LiFePO4 Expansion', desc: 'Expanded into commercial solar microgrid storage, telecom VRLA backup, and next-gen lithium battery modules.' },
  ];

  return (
    <>
      <SeoHead
        title="About Us – Authorized Battery Specialists & Precision Diagnostics"
        description={`Learn more about ${SITE_CONFIG.businessName}, your trusted authorized dealer for genuine automotive, inverter, solar, and industrial batteries since 2009.`}
      />

      <div id="about-page" className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'About Us' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HERO BANNER */}
          <div className="py-12 border-b border-neutral-800 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" />
              <span>THE POWERMAX STANDARD</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              ENGINEERED FOR POWER. <br />
              <span className="text-red-500">TRUSTED FOR RELIABILITY.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
              For more than 15 years, {SITE_CONFIG.businessName} has been the benchmark for genuine battery distribution, advanced electrical diagnostics, and reliable emergency doorstep fitment across {SITE_CONFIG.city}.
            </p>
          </div>

          {/* MISSION & CORE PHILOSOPHY */}
          <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-neutral-800">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Founding Promise: <br />
                Zero Counterfeits, 100% Genuine Care.
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                The modern automobile and commercial power backup system are technologically sensitive. Sub-standard or refurbished batteries can cause severe voltage spikes, ECU damage, and premature alternator failure.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                At {SITE_CONFIG.businessName}, every battery in our showroom is sourced directly from certified manufacturing lines with authentic factory holographic seals, active digital serial barcodes, and fresh manufacturing dates.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onNavigateProducts}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Explore Our Battery Catalog
                </button>
                <button
                  onClick={onNavigateContact}
                  className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Visit Showroom
                </button>
              </div>
            </div>

            {/* Diagnostic Rig Showcase Box */}
            <div className="lg:col-span-6 bg-neutral-900/90 p-8 rounded-3xl border border-neutral-800 space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Certified Diagnostic Equipment</h3>
                  <span className="text-xs text-neutral-400 font-mono">Precision measurement, zero guesswork</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-white">Digital Conductance Analyzers:</strong> We test real-time Cold Cranking Amps (CCA) and internal plate resistance in under 30 seconds.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-white">OBD-II Computer Memory Savers:</strong> Protects vehicle clock, anti-theft PINs, audio presets, and engine ECM calibration during swap.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <div>
                    <strong className="text-white">Optical & Float Hydrometers:</strong> Precise specific gravity testing for tubular inverter and solar cells to maximize electrolyte longevity.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 CORE PILLARS DETAILED */}
          <div className="py-16 border-b border-neutral-800 space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-2">
                THE POWERMAX PILLARS
              </h2>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Built on Trust, Precision, and Speed
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">100% Genuine Stock</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Only authentic OEM stock with verifiable manufacturer warranties and clear serial codes.
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Authorized Partner</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Direct tier-1 partnership with Amaron, Exide, Luminous, Bosch, and SF Sonic.
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Master Technicians</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Factory-trained mechanics equipped with calibrated electrical testing instrumentation.
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Eco Recycling</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Responsible closed-loop lead recycling with maximum scrap discount returned directly to you.
                </p>
              </div>
            </div>
          </div>

          {/* COMPANY TIMELINE / MILESTONES */}
          <div className="py-16 border-b border-neutral-800 space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-2">
                OUR JOURNEY
              </h2>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                15+ Years of Steady Growth
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800 space-y-2">
                  <span className="text-2xl font-black text-red-500 font-mono block">
                    {m.year}
                  </span>
                  <h4 className="text-base font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STORE LOCATION & TIMINGS BANNER */}
          <div className="py-16 bg-neutral-900/90 rounded-3xl p-8 sm:p-12 border border-neutral-800 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Visit Our Diagnostic Showroom</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Drop by for a complimentary battery and charging system check. Our team is available 7 days a week with a fully stocked battery inventory.
              </p>

              <div className="space-y-2 text-xs text-neutral-300 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{SITE_CONFIG.address}, {SITE_CONFIG.landmark}, {SITE_CONFIG.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{SITE_CONFIG.openingHours.weekdays} | {SITE_CONFIG.openingHours.sunday}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={QUICK_CONTACT_LINKS.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
