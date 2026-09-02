import React from 'react';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';
import {
  Zap,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { BatteryCategory } from '../../types';

interface FooterProps {
  onNavigate: (page: string, params?: { category?: BatteryCategory; brand?: string }) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productCategories: { name: string; cat: BatteryCategory }[] = [
    { name: 'Car & SUV Batteries', cat: 'Automotive' },
    { name: 'Motorcycle & Scooter Batteries', cat: 'Two-Wheeler' },
    { name: 'Three-Wheeler Batteries', cat: 'Three-Wheeler' },
    { name: 'Inverter & Tall Tubular Batteries', cat: 'Inverter & Home UPS' },
    { name: 'Commercial Truck & Bus Batteries', cat: 'Commercial' },
    { name: 'Solar Storage Deep Cycle', cat: 'Solar Storage' },
    { name: 'Tractor & Farm Equipment', cat: 'Agricultural' },
    { name: 'E-Rickshaw Deep Cycle', cat: 'E-Rickshaw' },
    { name: 'Industrial & Online UPS VRLA', cat: 'Industrial & Telecom' },
    { name: 'Generator / Genset Batteries', cat: 'Generator & Genset' },
  ];

  const servicesList = [
    'Express Battery Replacement',
    'Doorstep Installation & Fitment',
    'Digital Battery Health Testing',
    'Emergency Breakdown Jump Start',
    'Inverter Specific Gravity Servicing',
    'Commercial Fleet Support',
    'Solar Battery Sizing Audit',
    'Old Battery Scrap Recycling',
  ];

  const brandsList = [
    'Amaron',
    'Exide',
    'SF Sonic',
    'Luminous',
    'Okaya',
    'Microtek',
    'Livguard',
    'Bosch',
  ];

  return (
    <footer id="main-footer" className="bg-neutral-950 text-neutral-300 border-t border-neutral-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* COLUMN 1: BRAND SUMMARY */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-700 to-rose-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-red-500 fill-red-500" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline tracking-tight">
                  <span className="text-xl font-extrabold text-white">POWER</span>
                  <span className="text-xl font-extrabold text-red-500">MAX</span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block -mt-1">
                  Battery Solutions
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.subTagline} Your trusted authorized partner for 100% genuine batteries, doorstep replacement, and certified technical diagnostics.
            </p>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Genuine Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">
                <Clock className="w-4 h-4 text-red-400" />
                Under 30 Min Fitment
              </span>
            </div>

            {/* Fast Action Buttons */}
            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={QUICK_CONTACT_LINKS.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold text-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS & CATEGORIES */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Battery Range
            </h4>
            <ul className="space-y-2 text-xs">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat.cat}>
                  <button
                    onClick={() => onNavigate('products', { category: cat.cat })}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-red-500 transition-colors" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-red-400 hover:text-red-300 font-semibold pt-1 flex items-center gap-1 cursor-pointer"
                >
                  View Complete Catalog →
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES & BRANDS */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Services & Brands
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesList.slice(0, 5).map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-red-500 transition-colors" />
                    <span>{srv}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h5 className="text-[11px] font-mono uppercase text-neutral-400 font-bold mb-2">
                Authorized Brands
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {brandsList.map((b) => (
                  <button
                    key={b}
                    onClick={() => onNavigate('brands')}
                    className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-red-500/50 hover:text-white transition-colors cursor-pointer"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 4: STORE CONTACT & HOURS */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Store Location
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address}, {SITE_CONFIG.landmark}, {SITE_CONFIG.city} - {SITE_CONFIG.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-300 font-medium">{SITE_CONFIG.openingHours.weekdays}</span>
                  <span className="block text-neutral-400">{SITE_CONFIG.openingHours.sunday}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM SUB-FOOTER */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved. Professional Battery Showcase & Diagnostics.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-neutral-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-neutral-200 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
