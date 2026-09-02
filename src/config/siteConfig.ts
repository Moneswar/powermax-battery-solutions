import { SiteConfig } from '../types';

export const SITE_CONFIG: SiteConfig = {
  businessName: 'PowerMax Battery Solutions',
  tagline: 'POWER IN MOTION',
  subTagline: 'Reliable battery solutions for vehicles, homes, and demanding industrial power applications.',
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  secondaryPhone: '+91 91234 56789',
  whatsapp: '+919876543210',
  whatsappDisplay: '+91 98765 43210',
  email: 'contact@powermaxbatteries.com',
  address: '123, Power House Road, Automotive Hub, Near Central Flyover',
  landmark: 'Opposite Metro Pillar 142',
  city: 'Bengaluru',
  state: 'Karnataka',
  pincode: '560001',
  country: 'India',
  openingHours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 5:00 PM',
  },
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.885448332158!2d77.59129977507664!3d12.97919838733698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=PowerMax+Battery+Solutions',
  primaryColorHex: '#DC2626', // High impact automotive red accent
  stats: {
    yearsExperience: '14+',
    happyCustomers: '45,000+',
    brandsCount: '12+',
    satisfactionRate: '99.4%',
    batteriesReplaced: '75,000+',
  },
};

export const QUICK_CONTACT_LINKS = {
  callUrl: `tel:${SITE_CONFIG.phone}`,
  whatsappUrl: (msg?: string) =>
    `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      msg || 'Hello PowerMax, I would like to enquire about battery solutions.'
    )}`,
  emailUrl: (subject?: string) =>
    `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      subject || 'Enquiry: Battery Requirement'
    )}`,
};
