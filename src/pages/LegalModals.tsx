import React from 'react';
import { Modal } from '../components/common/Modal';
import { SITE_CONFIG } from '../config/siteConfig';

interface LegalModalsProps {
  privacyOpen: boolean;
  termsOpen: boolean;
  onClosePrivacy: () => void;
  onCloseTerms: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  privacyOpen,
  termsOpen,
  onClosePrivacy,
  onCloseTerms,
}) => {
  return (
    <>
      {/* PRIVACY POLICY MODAL */}
      <Modal
        isOpen={privacyOpen}
        onClose={onClosePrivacy}
        title="Privacy Policy"
        maxWidth="2xl"
      >
        <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
          <p className="font-semibold text-white">
            Last Updated: January {new Date().getFullYear()}
          </p>

          <p>
            At {SITE_CONFIG.businessName}, we respect your personal privacy. This Privacy Policy details how we handle the contact details and vehicle information provided when requesting battery consultations, quotes, or doorstep service bookings.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">1. Information We Collect</h4>
          <p>
            When you submit an enquiry through our website or contact us via WhatsApp/Phone, we collect basic contact information (Name, Phone number, Email address, and Vehicle/Inverter model specifications) solely for technical fitment matching and service dispatch.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">2. How We Use Your Data</h4>
          <p>
            Your information is used strictly to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-400">
            <li>Provide accurate battery pricing quotes and OEM recommendations.</li>
            <li>Dispatch doorstep fitment technicians to your specified location.</li>
            <li>Register official manufacturer warranty certificates.</li>
            <li>We do NOT sell, rent, or trade your personal data with third-party advertising brokers.</li>
          </ul>

          <h4 className="font-bold text-white text-sm pt-2">3. Warranty & Serial Registration</h4>
          <p>
            To activate your manufacturer warranty (Amaron, Exide, Luminous, etc.), your battery serial number and phone number are registered on the respective brand portal for paperless pan-India claims.
          </p>

          <div className="pt-4 border-t border-neutral-800 flex justify-end">
            <button
              onClick={onClosePrivacy}
              className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs"
            >
              Close Policy
            </button>
          </div>
        </div>
      </Modal>

      {/* TERMS & CONDITIONS MODAL */}
      <Modal
        isOpen={termsOpen}
        onClose={onCloseTerms}
        title="Terms & Conditions of Service"
        maxWidth="2xl"
      >
        <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
          <p className="font-semibold text-white">
            Terms of Service & Warranty Guidelines
          </p>

          <p>
            By utilizing the technical advisory services, purchasing products, or booking doorstep battery installations from {SITE_CONFIG.businessName}, you agree to the following terms:
          </p>

          <h4 className="font-bold text-white text-sm pt-2">1. 100% Genuine OEM Product Guarantee</h4>
          <p>
            All batteries distributed by {SITE_CONFIG.businessName} are authentic, brand new, and factory-sealed. We do not sell reconditioned, counterfeit, or grey-market goods.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">2. Manufacturer Warranty Fulfillment</h4>
          <p>
            Warranty terms (Free Replacement + Pro-Rata periods) are strictly honored as per the respective manufacturer's published guidelines. Physical damage, external case burns, tampering, or incorrect vehicle application void warranty coverage.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">3. Old Battery Scrap Buyback & Exchange</h4>
          <p>
            Exchange discounts advertised are contingent upon the surrender of an equivalent old lead-acid battery of matching capacity rating. Collected scrap batteries are processed exclusively through authorized pollution-controlled recycling facilities.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">4. Doorstep Installation & Safety Standards</h4>
          <p>
            Doorstep installation is offered across designated city zones. Technicians employ OBD-II memory savers to protect vehicle electrical settings. Vehicle owners are advised to verify vehicle starter motor condition prior to fitment.
          </p>

          <div className="pt-4 border-t border-neutral-800 flex justify-end">
            <button
              onClick={onCloseTerms}
              className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs"
            >
              I Understand & Agree
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
