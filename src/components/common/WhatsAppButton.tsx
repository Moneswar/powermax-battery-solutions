import React, { useState } from 'react';
import { SITE_CONFIG, QUICK_CONTACT_LINKS } from '../../config/siteConfig';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(
      QUICK_CONTACT_LINKS.whatsappUrl(
        `Hi ${SITE_CONFIG.businessName}, I would like to check battery availability and best exchange price.`
      ),
      '_blank'
    );
  };

  return (
    <div
      id="floating-whatsapp-widget"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Interactive Quick Help Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E5E7EB] text-[#172033] rounded-2xl shadow-xl text-xs animate-in fade-in slide-in-from-right-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span className="font-bold">Need quick battery advice? Chat with an expert!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#94A3B8] hover:text-[#172033] ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-hidden"
        aria-label="Chat with PowerMax Battery Solutions on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:rotate-12" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" />
      </button>
    </div>
  );
};
