export type BatteryApplication =
  | 'Car'
  | 'Bike'
  | 'Scooter'
  | 'SUV'
  | 'Commercial Vehicle'
  | 'Truck'
  | 'Bus'
  | 'Tractor'
  | 'Auto Rickshaw'
  | 'EV'
  | 'Inverter'
  | 'UPS'
  | 'Solar'
  | 'Industrial'
  | 'Telecom'
  | 'Emergency Backup'
  | 'Heavy Equipment'
  | 'Other';

export type BatteryTechnology =
  | 'Lead Acid'
  | 'Flooded Lead Acid'
  | 'Maintenance Free'
  | 'AGM'
  | 'GEL'
  | 'VRLA'
  | 'Tubular'
  | 'Tall Tubular'
  | 'Flat Plate'
  | 'Deep Cycle'
  | 'Lithium-ion'
  | 'LiFePO4';

export type BatteryCategory =
  | 'Automotive'
  | 'Two-Wheeler'
  | 'Commercial'
  | 'Agricultural'
  | 'EV / Clean Energy'
  | 'Inverter & Home UPS'
  | 'Industrial & Telecom'
  | 'Solar Storage'
  | 'Specialized Power';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  modelCode: string;
  image: string; // Primary authentic product photograph path
  images?: string[]; // Authentic multi-angle / detail gallery images (only distinct real angles)
  imageStatus?: 'real' | 'pending'; // 'real' only for authentic photographs, 'pending' when authentic photo is awaited
  imageOrigin?: string; // Optional source attribution (e.g., 'Official Manufacturer Catalog')
  imageAlt?: string; // Descriptive SEO alt text
  category: BatteryCategory;
  application: BatteryApplication;
  technology: BatteryTechnology;
  voltage: string; // e.g. "12V", "24V", "48V"
  capacity: string; // e.g. "55Ah", "150Ah"
  capacityNumeric: number; // for numeric sorting/filtering
  cca?: string; // Cold Cranking Amps e.g. "480 CCA"
  warrantyMonths: number; // e.g. 36
  warrantyDetails: string; // e.g. "24 Months Free Replacement + 12 Months Pro-rata"
  dimensions: string; // e.g. "242 x 175 x 190 mm"
  weight?: string; // e.g. "14.5 kg"
  terminalLayout: string; // e.g. "Left (+), Right (-)" or "DIN Standard"
  casingType?: string; // e.g. "Heavy Duty Polypropylene"
  shortDescription: string;
  fullDescription: string;
  features: string[];
  suitableVehicles: string[];
  inStock: boolean;
  featured?: boolean;
  colorTheme: {
    primaryColor: string; // Hex for battery body visualization
    accentColor: string; // Lid or badge accent
    lidColor?: string;
    labelStyle?: 'modern' | 'industrial' | 'high-tech';
  };
  relatedProductIds?: string[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  founded?: string;
  origin: string;
  logoBg: string;
  logoTextColor: string;
  accentColor: string;
  isAuthorizedDealer: boolean;
  specialties: string[];
  featuredProductCount: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  turnaroundTime: string;
  coverage: string;
  keyBenefits: string[];
  processSteps: { title: string; desc: string }[];
  ctaLabel: string;
}

export interface PowerFinderQuery {
  vehicleType: string;
  brand: string;
  model: string;
  yearOrSpec: string;
}

export interface PowerFinderOption {
  type: string;
  brands: {
    name: string;
    models: {
      name: string;
      yearsOrSpecs: string[];
      recommendedProductId: string;
    }[];
  }[];
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  phoneDisplay: string;
  secondaryPhone?: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  primaryColorHex: string;
  stats: {
    yearsExperience: string;
    happyCustomers: string;
    brandsCount: string;
    satisfactionRate: string;
    batteriesReplaced: string;
  };
}

export interface FilterState {
  search: string;
  category: string;
  brand: string;
  application: string;
  technology: string;
  voltage: string;
  minCapacity: number;
  maxCapacity: number;
  inStockOnly: boolean;
  sortBy: 'popularity' | 'capacity-asc' | 'capacity-desc' | 'warranty-desc' | 'name-asc';
  viewMode: 'grid' | 'list';
}

export interface EnquiryData {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  vehicleOrApp?: string;
  message?: string;
  preferredContact?: 'phone' | 'whatsapp' | 'email';
  productId?: string;
  productName?: string;
}
