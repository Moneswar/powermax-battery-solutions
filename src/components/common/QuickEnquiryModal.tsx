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
          <div className="w-16 h-16 bg-[#EAF6EA] text-[#2E8B35] rounded-full flex items-center justify-center mx-auto border border-[#2E8B35]/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-[#172033]">Enquiry Received!</h4>
          <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed font-medium">
            Thank you, <span className="font-bold text-[#172033]">{formData.name}</span>. Our battery specialist will contact you on{' '}
            <span className="font-bold text-[#172033]">{formData.phone}</span> within 15 minutes during operating hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp Now
            </button>
            <button
              onClick={resetForm}
              className="px-5 py-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E5E7EB] text-[#172033] font-bold text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Top Info Banner if product */}
          {product && (
            <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl flex items-center justify-between text-xs text-[#667085]">
              <div>
                <span className="font-bold text-[#172033] block">{product.brand} {product.name}</span>
                <span>{product.voltage} • {product.capacity} • {product.warrantyMonths}M Warranty</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#EAF6EA] text-[#1F6B2A] font-bold border border-[#2E8B35]/20">
                In Stock
              </span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-xl bg-[#FEE2E2] border border-[#DC2626]/25 text-[#991B1B] text-xs font-bold">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#172033] mb-1">
                Your Full Name <span className="text-[#DC2626]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs sm:text-sm text-[#172033] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#2E8B35]"
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
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs sm:text-sm text-[#172033] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#2E8B35]"
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
                placeholder="e.g. rahul@example.com"
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs sm:text-sm text-[#172033] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#2E8B35]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#172033] mb-1">
                Vehicle Make / Model / Requirement
              </label>
              <input
                type="text"
                name="vehicleOrApp"
                value={formData.vehicleOrApp}
                onChange={handleChange}
                placeholder="e.g. Maruti Swift Petrol / Luminous Inverter"
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs sm:text-sm text-[#172033] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#2E8B35]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#172033] mb-1">
              Your Message or Specific Query
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide your location in Bangalore or any other details..."
              className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs sm:text-sm text-[#172033] placeholder-[#94A3B8] focus:outline-hidden focus:border-[#2E8B35]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-5 rounded-xl bg-[#2E8B35] hover:bg-[#1F6B2A] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};
