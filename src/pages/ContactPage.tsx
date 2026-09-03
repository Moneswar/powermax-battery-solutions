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
  Sparkles,
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

      <div id="contact-page" className="min-h-screen bg-[#F7F9F7] text-[#172033] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[{ label: 'Contact Us & Store Location' }]}
            onNavigateHome={onNavigateHome}
          />

          {/* PAGE HERO BANNER */}
          <div className="py-10 border-b border-[#E5E7EB] space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6EA] border border-[#2E8B35]/25 text-[#1F6B2A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2E8B35]" />
              <span>Direct Customer Support & Dispatch</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#172033] tracking-tight">
              Connect with Our <br />
              <span className="text-[#2E8B35]">Battery Specialists.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#667085] max-w-3xl leading-relaxed font-medium">
              Whether you need urgent emergency jumpstart assistance, doorstep installation, inverter load audits, or battery exchange valuation, our team is standing by.
            </p>
          </div>

          {/* QUICK DIRECT CONTACT CARDS */}
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-[#E5E7EB]">
            {/* 1. Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] text-[#2E8B35] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#172033] uppercase">Direct Call</h3>
                <p className="text-xs text-[#667085] mt-1">Instant voice assistance & technician dispatch</p>
              </div>
              <a
                href={QUICK_CONTACT_LINKS.callUrl}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8B35] hover:text-[#1F6B2A] pt-2"
              >
                <span>{SITE_CONFIG.phoneDisplay}</span>
                <span>→</span>
              </a>
            </div>

            {/* 2. WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] text-[#2E8B35] flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#172033] uppercase">WhatsApp Chat</h3>
                <p className="text-xs text-[#667085] mt-1">Send car photos, location pins & ask quotes</p>
              </div>
              <a
                href={QUICK_CONTACT_LINKS.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8B35] hover:text-[#1F6B2A] pt-2"
              >
                <span>Chat Online</span>
                <span>→</span>
              </a>
            </div>

            {/* 3. Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] text-[#2E8B35] flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#172033] uppercase">Email Support</h3>
                <p className="text-xs text-[#667085] mt-1">For corporate quotations and fleet audits</p>
              </div>
              <a
                href={QUICK_CONTACT_LINKS.emailUrl()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8B35] hover:text-[#1F6B2A] pt-2 truncate"
              >
                <span className="truncate">{SITE_CONFIG.email}</span>
                <span>→</span>
              </a>
            </div>

            {/* 4. Showroom Location */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] space-y-3 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF6EA] text-[#2E8B35] flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#172033] uppercase">Store Location</h3>
                <p className="text-xs text-[#667085] mt-1">Central Flyover, Bangalore</p>
              </div>
              <a
                href={SITE_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8B35] hover:text-[#1F6B2A] pt-2"
              >
                <span>Get Directions</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* MAIN FORM & MAP SECTION */}
          <div className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT: INTERACTIVE CONTACT & BOOKING FORM */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#EAF6EA] text-[#2E8B35] rounded-full flex items-center justify-center mx-auto border border-[#2E8B35]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#172033]">Booking Request Received!</h3>
                  <p className="text-sm text-[#667085] max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#172033]">{formData.name}</span>. Our technician will review your vehicle details and call you back immediately on <span className="font-bold text-[#172033]">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white font-bold text-xs shadow-xs cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#172033]">
                      Schedule a Service or Request Battery Quotation
                    </h2>
                    <p className="text-xs text-[#667085] mt-1 font-medium">
                      Fill out your vehicle or battery details and our team will get back to you within 15 minutes.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-[#FEE2E2] border border-[#DC2626]/20 text-[#991B1B] text-xs font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#172033] mb-1">
                        Full Name <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#172033] focus:outline-hidden focus:border-[#2E8B35]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#172033] mb-1">
                        Phone Number <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#172033] focus:outline-hidden focus:border-[#2E8B35]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#172033] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#172033] focus:outline-hidden focus:border-[#2E8B35]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#172033] mb-1">
                        Service Required
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#172033] focus:outline-hidden focus:border-[#2E8B35] cursor-pointer"
                      >
                        <option value="Car Battery Replacement">Car Battery Doorstep Replacement</option>
                        <option value="Bike Battery Replacement">Bike / Two-Wheeler Battery</option>
                        <option value="Inverter Installation">Home Inverter & UPS Battery</option>
                        <option value="Battery Health Diagnostics">Digital Health & CCA Testing</option>
                        <option value="Emergency Jumpstart">Emergency Jump Start Assistance</option>
                        <option value="Old Battery Exchange Scrap">Old Battery Scrap Exchange</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1">
                      Vehicle Make / Model or Equipment Type
                    </label>
                    <input
                      type="text"
                      name="vehicleOrModel"
                      value={formData.vehicleOrModel}
                      onChange={handleChange}
                      placeholder="e.g. Hyundai Creta Diesel 2021 / Exide Inva Tubular 150Ah"
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#172033] focus:outline-hidden focus:border-[#2E8B35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172033] mb-1">
                      Location / Notes
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your area in Bangalore (e.g. Indiranagar, Whitefield, Koramangala)..."
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-[#172033] focus:outline-hidden focus:border-[#2E8B35]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Send Request'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: STORE HOURS & MAP INFORMATION */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] space-y-5 shadow-xs">
                <h3 className="text-lg font-bold text-[#172033] border-b border-[#F0F2F5] pb-3">
                  Store Hours & Availability
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2E8B35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#172033] block font-bold">Weekdays (Monday – Saturday)</strong>
                      <span className="text-[#667085]">9:00 AM – 8:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2E8B35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#172033] block font-bold">Sundays & Public Holidays</strong>
                      <span className="text-[#667085]">10:00 AM – 5:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#2E8B35] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#172033] block font-bold">Emergency Mobile Breakdown</strong>
                      <span className="text-[#667085]">Emergency hotline dispatch available 24/7</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F2F5] flex items-center justify-between">
                  <span className="text-xs text-[#667085] font-semibold">Store Status</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EAF6EA] text-[#1F6B2A] text-xs font-bold border border-[#2E8B35]/20">
                    Open Now
                  </span>
                </div>
              </div>

              {/* Showroom Address Box */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] space-y-4 shadow-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2E8B35] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-bold text-[#172033] block">{SITE_CONFIG.businessName}</strong>
                    <span className="text-xs text-[#667085] block mt-1 leading-relaxed">
                      {SITE_CONFIG.address}, {SITE_CONFIG.landmark}, {SITE_CONFIG.city} - {SITE_CONFIG.pincode}
                    </span>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#172033] text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#2E8B35]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
