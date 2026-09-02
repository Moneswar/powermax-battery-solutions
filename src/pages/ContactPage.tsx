import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../config/siteConfig';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleOrModel: '',
    serviceType: 'Car Battery Replacement',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMsg('Please provide a valid contact number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SeoHead
        title="Contact Us & Showroom Location – Doorstep Battery Service"
        description={`Get in touch with ${SITE_CONFIG.businessName}. Call ${SITE_CONFIG.phone} or visit our battery diagnostics showroom in ${SITE_CONFIG.city}. Open 7 days a week.`}
      />

      <div id="contact-page" className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'Contact Us & Store Location' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HERO BANNER */}
          <div className="py-10 border-b border-neutral-800 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" />
              <span>DIRECT TECHNICAL HOTLINE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              CONNECT WITH OUR <br />
              <span className="text-red-500">BATTERY SPECIALISTS.</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
              Whether you need urgent emergency jumpstart assistance, doorstep installation, inverter load audits, or battery exchange valuation, our team is standing by.
            </p>
          </div>

          {/* QUICK DIRECT CONTACT CARDS */}
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-neutral-800">
            {/* 1. Phone Card */}
            <div className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-mono">Direct Phone Call</h3>
                <p className="text-xs text-neutral-400 mt-1">Instant voice assistance & technician dispatch</p>
              </div>
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 pt-2"
              >
                <span>{SITE_CONFIG.phoneDisplay}</span>
                <span>→</span>
              </a>
            </div>

            {/* 2. WhatsApp Card */}
            <div className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-mono">WhatsApp Chat</h3>
                <p className="text-xs text-neutral-400 mt-1">Send car photos, location pins & ask quotes</p>
              </div>
              <a
                href={QUICK_CONTACT_LINKS.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <span>Chat Now (Instant Reply)</span>
                <span>→</span>
              </a>
            </div>

            {/* 3. Showroom Location Card */}
            <div className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-mono">Diagnostics Hub</h3>
                <p className="text-xs text-neutral-400 mt-1">{SITE_CONFIG.address}, {SITE_CONFIG.city}</p>
              </div>
              <a
                href={SITE_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 pt-2"
              >
                <span>Open in Google Maps</span>
                <span>→</span>
              </a>
            </div>

            {/* 4. Operating Hours Card */}
            <div className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase font-mono">Operating Hours</h3>
                <p className="text-xs text-neutral-400 mt-1">{SITE_CONFIG.openingHours.weekdays}</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 pt-2">
                Open 7 Days a Week
              </span>
            </div>
          </div>

          {/* FORM & MAP / SHOWROOM ROW */}
          <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: INTERACTIVE CONTACT FORM */}
            <div className="lg:col-span-7 bg-neutral-900/90 p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                Send an Online Technical Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill in your details and vehicle/requirement. We will call you within 15 minutes with verified pricing and availability.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Your request has been routed to our field manager. We will contact you at{' '}
                    <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        vehicleOrModel: '',
                        serviceType: 'Car Battery Replacement',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-neutral-800 text-neutral-200 text-xs font-bold hover:bg-neutral-700"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-950/80 border border-red-800 text-red-300 text-xs rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Verma"
                        className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Contact Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vikram@example.com"
                        className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Required Service
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 transition-colors cursor-pointer"
                      >
                        <option value="Car Battery Replacement">Car & SUV Battery Replacement</option>
                        <option value="Bike Battery Replacement">Motorcycle / Scooter Battery</option>
                        <option value="Inverter Battery Setup">Inverter & Tubular Battery Setup</option>
                        <option value="Emergency Jumpstart">Emergency Roadside Jumpstart</option>
                        <option value="Battery Health Testing">Free Digital Health Diagnosis</option>
                        <option value="Commercial Fleet">Commercial Fleet / Truck Management</option>
                        <option value="Solar Battery Sizing">Solar Rooftop Storage Sizing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Vehicle Make / Model or Equipment Info
                    </label>
                    <input
                      type="text"
                      name="vehicleOrModel"
                      value={formData.vehicleOrModel}
                      onChange={handleChange}
                      placeholder="e.g. Maruti Swift Dzire 2020 / Luminous 1100VA Inverter"
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Location Details or Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Need doorstep installation near Koramangala / Asking exchange price for old 35Ah battery..."
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-red-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Submit Enquiry & Request Call'}</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Your contact info is strictly confidential and never shared.</span>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: MAP / SHOWROOM HUB DETAILS */}
            <div className="lg:col-span-5 space-y-6">
              {/* Map Placeholder Card with Real Navigation link */}
              <div className="bg-neutral-900/90 p-6 rounded-3xl border border-neutral-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">Showroom & Service Center</h3>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Live Diagnostics Bay
                  </span>
                </div>

                {/* Styled Map Graphic Canvas Placeholder */}
                <div className="w-full h-48 bg-neutral-950 rounded-2xl border border-neutral-800 relative overflow-hidden flex flex-col items-center justify-center text-center p-4 bg-grid-pattern group">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/50 flex items-center justify-center text-red-500 mb-2 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <strong className="text-white text-xs block">{SITE_CONFIG.businessName}</strong>
                  <span className="text-[11px] text-neutral-400">{SITE_CONFIG.address}, {SITE_CONFIG.city}</span>

                  <a
                    href={SITE_CONFIG.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold shadow-md hover:bg-red-500 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions in Google Maps</span>
                  </a>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-300 pt-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Physical Store Address</strong>
                      <span className="text-neutral-400">{SITE_CONFIG.address}, {SITE_CONFIG.landmark}, {SITE_CONFIG.city} - {SITE_CONFIG.pincode}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Showroom Timings</strong>
                      <span className="text-neutral-400">{SITE_CONFIG.openingHours.weekdays} | {SITE_CONFIG.openingHours.sunday}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Email Correspondence</strong>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-neutral-400 hover:text-white">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Callout */}
              <div className="bg-neutral-900/60 p-6 rounded-3xl border border-neutral-800 space-y-2 text-xs">
                <span className="text-[10px] font-mono uppercase text-red-400 font-bold block">
                  Rapid Doorstep Delivery Areas:
                </span>
                <p className="text-neutral-300 leading-relaxed">
                  We provide 30-minute doorstep battery delivery and fitting across all major zones including Koramangala, Indiranagar, HSR Layout, Whitefield, Jayanagar, Electronic City, and surrounding metropolitan limits.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
