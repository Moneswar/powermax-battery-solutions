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
    <section id="home-contact-cta" className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-8 sm:p-12 lg:p-16 rounded-3xl border border-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Action message */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>EXPRESS BATTERY REPLACEMENT DISPATCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                WE'RE READY TO HELP YOU <br />
                <span className="text-red-500">POWER AHEAD.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Stuck with a dead battery? Need a high-backup inverter setup for summer? Speak directly with our master technicians for instant quotation and guaranteed 30-minute doorstep arrival.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={QUICK_CONTACT_LINKS.callUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 transition-all cursor-pointer hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 font-bold text-sm tracking-wide transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Request Callback</span>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-neutral-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero service charge on confirmed battery replacements.</span>
              </div>
            </div>

            {/* Right: Showroom Box */}
            <div className="lg:col-span-5 bg-neutral-900/90 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight border-b border-neutral-800 pb-3 flex items-center justify-between">
                <span>Showroom & Diagnostics Hub</span>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  OPEN NOW
                </span>
              </h3>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">{SITE_CONFIG.businessName}</span>
                    <span className="text-neutral-400">{SITE_CONFIG.address}, {SITE_CONFIG.landmark}, {SITE_CONFIG.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-200 block">{SITE_CONFIG.openingHours.weekdays}</span>
                    <span className="text-neutral-400">{SITE_CONFIG.openingHours.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={onContactClick}
                  className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Store Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={SITE_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-red-400 hover:text-red-300"
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
