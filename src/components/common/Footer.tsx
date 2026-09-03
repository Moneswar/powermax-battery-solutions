import React from 'react';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  BatteryCharging,
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
    { name: 'Industrial & Telecom Batteries', cat: 'Industrial & Telecom' },
  ];

  const servicesList = [
    'Express Doorstep Battery Fitment',
    'Free Digital Health & CCA Testing',
    'Emergency Breakdown Jump Start',
    'Inverter Battery Servicing',
    'Commercial Fleet Battery Support',
    'Old Battery Scrap Recycling',
  ];

  const brandsList = [
    'Amaron',
    'Exide',
    'SF Sonic',
  ];

  return (
    <footer id="main-footer" className="bg-white text-[#64748B] border-t border-[#E2E8F0] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E2E8F0]">
          
          {/* COLUMN 1: BRAND SUMMARY */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#DC2626] to-[#EF4444] p-0.5 flex items-center justify-center shadow-xs">
                <div className="w-full h-full bg-[#B91C1C] rounded-[10px] flex items-center justify-center">
                  <BatteryCharging className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline tracking-tight">
                  <span className="text-xl font-extrabold text-[#0F172A]">Power</span>
                  <span className="text-xl font-extrabold text-[#DC2626]">Max</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#64748B] block -mt-1">
                  Battery Solutions
                </span>
              </div>
            </div>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm font-medium">
              {SITE_CONFIG.subTagline} Your trusted authorized distributor for 100% genuine batteries, fast doorstep replacement, and certified technical diagnostics.
            </p>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0FDF4] border border-[#16A34A]/20 text-[#16A34A] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                100% Genuine Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] font-bold">
                <Clock className="w-4 h-4 text-[#DC2626]" />
                Fast Doorstep Arrival
              </span>
            </div>

            {/* Fast Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={QUICK_CONTACT_LINKS.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#16A34A] border border-[#25D366]/30 font-bold text-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: BATTERY RANGE */}
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Battery Range
            </h4>
            <ul className="space-y-2 text-xs">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat.cat}>
                  <button
                    onClick={() => onNavigate('products', { category: cat.cat })}
                    className="hover:text-[#DC2626] transition-colors cursor-pointer text-left font-medium flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#94A3B8]" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Services & Brands
            </h4>
            <ul className="space-y-2 text-xs mb-4">
              {servicesList.slice(0, 4).map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-[#DC2626] transition-colors cursor-pointer text-left font-medium flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#94A3B8]" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#0F172A] uppercase block mb-1.5">Authorized Brands</span>
              <div className="flex flex-wrap gap-1.5">
                {brandsList.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => onNavigate('products', { brand })}
                    className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-bold text-[#0F172A] hover:text-[#DC2626] hover:border-[#DC2626]/40 transition-colors cursor-pointer"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 4: STORE CONTACT */}
          <div>
            <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Store Information
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span className="leading-snug text-[#64748B]">
                  {SITE_CONFIG.address}, {SITE_CONFIG.city} - {SITE_CONFIG.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DC2626] shrink-0" />
                <a href={QUICK_CONTACT_LINKS.callUrl} className="hover:text-[#DC2626] font-semibold text-[#0F172A]">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DC2626] shrink-0" />
                <a href={QUICK_CONTACT_LINKS.emailUrl()} className="hover:text-[#DC2626] truncate font-semibold text-[#0F172A]">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span className="leading-snug">{SITE_CONFIG.openingHours.weekdays}</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved. Authorized Battery Supplier.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#0F172A] transition-colors cursor-pointer font-semibold"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#0F172A] transition-colors cursor-pointer font-semibold"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#DC2626] transition-colors cursor-pointer font-bold ml-2"
              title="Scroll to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
