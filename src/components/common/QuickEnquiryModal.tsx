import React, { useState } from 'react';
import { Modal } from './Modal';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';
import { Product, Service, EnquiryData } from '../../types';
import { Phone, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  service?: Service | null;
  defaultSubject?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  product,
  service,
  defaultSubject,
}) => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    email: '',
    vehicleOrApp: product ? `${product.brand} ${product.name}` : service?.title || '',
    subject: defaultSubject || (product ? `Enquiry for ${product.name}` : service ? `Service Booking: ${service.title}` : 'General Battery Consultation'),
    message: '',
    preferredContact: 'phone',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMsg('Please provide a valid phone number so our team can reach you.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi ${SITE_CONFIG.businessName}, I would like to enquire about ${
      product ? `${product.brand} ${product.name} (${product.capacity}, ${product.voltage})` : service ? `${service.title} Service` : 'battery options'
    }. My vehicle/requirement is: ${formData.vehicleOrApp || 'Automotive / Inverter'}.`;
    window.open(QUICK_CONTACT_LINKS.whatsappUrl(text), '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={resetForm}
      title={product ? `Enquire: ${product.name}` : service ? `Book Service: ${service.title}` : 'Quick Battery Enquiry'}
      maxWidth="lg"
    >
      {isSubmitted ? (
        <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white">Enquiry Received!</h4>
          <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our battery specialist will contact you on{' '}
            <span className="font-semibold text-white">{formData.phone}</span> within 15 minutes during operating hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp Now
            </button>
            <button
              onClick={resetForm}
              className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Top Info Banner if product */}
          {product && (
            <div className="p-3 bg-neutral-800/80 border border-neutral-700/60 rounded-xl flex items-center justify-between text-xs text-neutral-300">
              <div>
                <span className="font-bold text-white block">{product.brand} {product.name}</span>
                <span>{product.voltage} • {product.capacity} • {product.warrantyMonths}M Warranty</span>
              </div>
              <span className="px-2 py-1 rounded bg-red-600/20 text-red-400 font-mono font-bold border border-red-500/30">
                In Stock
              </span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-lg bg-red-950/80 border border-red-800 text-red-300 text-xs font-medium">
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
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-red-500 transition-colors"
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
                placeholder="rahul@example.com"
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Vehicle / Equipment Model
              </label>
              <input
                type="text"
                name="vehicleOrApp"
                value={formData.vehicleOrApp}
                onChange={handleChange}
                placeholder="e.g. Swift 2021 / 1500VA Inverter"
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              Message or Specific Requirements
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="Need doorstep installation in HSR Layout / Old battery exchange price inquiry..."
              className="w-full px-3.5 py-2 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-red-500 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-red-600/30 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Submitting...' : 'Send Fast Enquiry'}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Instead
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
            <span>Zero spam guarantee. Genuine authorized distributor advice.</span>
          </div>
        </form>
      )}
    </Modal>
  );
};
