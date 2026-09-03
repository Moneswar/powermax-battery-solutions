import React from 'react';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';
import { Phone, MessageCircle, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface HomeContactCtaProps {
  onContactClick: () => void;
  onOpenEnquiry: () => void;
}

export const HomeContactCta: React.FC<HomeContactCtaProps> = ({
  onContactClick,
  onOpenEnquiry,
}) => {
  return (
    <section id="home-contact-cta" className="py-20 bg-white relative overflow-hidden border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#FEF2F2]/60 via-[#F8FAFC] to-[#FFFFFF] p-8 sm:p-12 lg:p-14 rounded-3xl border border-[#DC2626]/20 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Action message */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DC2626]/25 text-[#DC2626] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
                <span>Express Doorstep Delivery & Installation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
                Ready to Power Ahead with <br />
                <span className="text-[#DC2626]">PowerMax?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Stuck with a dead battery or need a high-capacity inverter battery setup? Speak directly with our battery technicians for an instant quote and guaranteed express doorstep arrival.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={QUICK_CONTACT_LINKS.callUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] font-bold text-sm tracking-wide transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#DC2626]" />
                  <span>Request Callback</span>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#64748B] pt-1 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                <span>Free health check & old battery scrap rebate included.</span>
              </div>
            </div>

            {/* Right: Showroom Box */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#0F172A] tracking-tight border-b border-[#F1F5F9] pb-3 flex items-center justify-between">
                <span>Showroom & Diagnostics Hub</span>
                <span className="text-[10px] font-bold text-[#16A34A] px-2.5 py-0.5 rounded-full bg-[#F0FDF4] border border-[#16A34A]/20">
                  OPEN NOW
                </span>
              </h3>

              <div className="space-y-3 text-xs text-[#64748B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A] block">{SITE_CONFIG.businessName}</span>
                    <span>{SITE_CONFIG.address}, {SITE_CONFIG.landmark}, {SITE_CONFIG.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0F172A] font-medium block">{SITE_CONFIG.openingHours.weekdays}</span>
                    <span>{SITE_CONFIG.openingHours.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                <button
                  onClick={onContactClick}
                  className="text-xs font-bold text-[#0F172A] hover:text-[#DC2626] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Store Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={SITE_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#DC2626] hover:underline"
                >
                  Directions →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
