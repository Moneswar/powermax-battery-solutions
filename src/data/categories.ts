import { BatteryCategory } from '../types';

export interface CategoryInfo {
  id: BatteryCategory;
  title: string;
  shortDesc: string;
  tag: string;
  iconName: string; // lucide icon identifier
  badgeCount: number;
  highlightSpecs: string;
  colorAccent: string;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'Automotive',
    title: 'Car & SUV Batteries',
    shortDesc: 'High cranking power with heat-resistant calcium-silver alloy plates for standard, premium & start-stop vehicles.',
    tag: 'Automotive',
    iconName: 'Car',
    badgeCount: 28,
    highlightSpecs: '12V • 35Ah – 100Ah • Up to 72M Warranty',
    colorAccent: 'from-red-600 to-rose-700',
  },
  {
    id: 'Two-Wheeler',
    title: 'Motorcycle & Scooter',
    shortDesc: 'Ultra-compact, maintenance-free AGM and VRLA batteries engineered for high vibration resistance and instant ignition.',
    tag: '2-Wheeler',
    iconName: 'Bike',
    badgeCount: 18,
    highlightSpecs: '12V • 2.5Ah – 14Ah • Spill-proof VRLA',
    colorAccent: 'from-amber-600 to-orange-600',
  },
  {
    id: 'Commercial',
    title: 'Truck & Bus Fleet',
    shortDesc: 'Heavy-duty cycle batteries with reinforced grid architecture built for continuous long-haul journeys and severe loads.',
    tag: 'Commercial',
    iconName: 'Truck',
    badgeCount: 16,
    highlightSpecs: '12V / 24V • 100Ah – 220Ah • Extreme Duty',
    colorAccent: 'from-blue-600 to-cyan-700',
  },
  {
    id: 'Inverter & Home UPS',
    title: 'Inverter & Home Backup',
    shortDesc: 'Tall tubular and flat plate deep-cycle batteries for long, uninterrupted power outages in residential & office environments.',
    tag: 'Home Power',
    iconName: 'Zap',
    badgeCount: 22,
    highlightSpecs: '12V • 100Ah – 250Ah • 99.99% Pure Lead',
    colorAccent: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'Agricultural',
    title: 'Tractor & Farm Equipment',
    shortDesc: 'Rugged vibration-resistant batteries for tractors, harvesters, and heavy-duty agricultural machinery.',
    tag: 'Agriculture',
    iconName: 'Tractor',
    badgeCount: 12,
    highlightSpecs: '12V • 65Ah – 120Ah • High CCA',
    colorAccent: 'from-yellow-600 to-amber-700',
  },
  {
    id: 'EV / Clean Energy',
    title: 'EV & Electric Mobility',
    shortDesc: 'Advanced Lithium Iron Phosphate (LiFePO4) & auxiliary 12V packs for e-scooters, electric autos, and EV accessories.',
    tag: 'Electric',
    iconName: 'BatteryCharging',
    badgeCount: 14,
    highlightSpecs: '12V / 48V / 60V • 2000+ Cycles • Fast Charge',
    colorAccent: 'from-violet-600 to-purple-700',
  },
  {
    id: 'Solar Storage',
    title: 'Solar Inverter Batteries',
    shortDesc: 'Specialized deep-discharge solar tubular and lithium batteries designed for off-grid and hybrid photovoltaic systems.',
    tag: 'Renewable',
    iconName: 'Sun',
    badgeCount: 15,
    highlightSpecs: 'C10 Rating • High Cycling Capacity • 5Y Warranty',
    colorAccent: 'from-orange-500 to-amber-600',
  },
  {
    id: 'Industrial & Telecom',
    title: 'Industrial UPS & Telecom',
    shortDesc: 'Stationary VRLA and AGM batteries for data centers, medical equipment, cellular towers, and central power banks.',
    tag: 'Industrial',
    iconName: 'Server',
    badgeCount: 15,
    highlightSpecs: '2V / 12V Cells • 26Ah – 2000Ah • Flame Retardant',
    colorAccent: 'from-neutral-600 to-neutral-800',
  },
];
