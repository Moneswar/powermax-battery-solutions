import { BatteryCategory } from '../types';

export interface CategoryInfo {
  id: BatteryCategory;
  title: string;
  shortDesc: string;
  tag: string;
  iconName: string;
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
    badgeCount: 24,
    highlightSpecs: '12V • 35Ah – 100Ah • Up to 66M Warranty',
    colorAccent: 'from-red-600 to-rose-700',
  },
  {
    id: 'Two-Wheeler',
    title: 'Motorcycle & Scooter Batteries',
    shortDesc: 'Ultra-compact, maintenance-free AGM and VRLA batteries engineered for high vibration resistance and instant ignition.',
    tag: '2-Wheeler',
    iconName: 'Bike',
    badgeCount: 13,
    highlightSpecs: '12V • 2.5Ah – 14Ah • Spill-proof VRLA',
    colorAccent: 'from-amber-600 to-orange-600',
  },
  {
    id: 'Three-Wheeler',
    title: 'Three-Wheeler Batteries',
    shortDesc: 'Rugged batteries tailored for commercial passenger and cargo 3-wheelers and auto-rickshaws.',
    tag: '3-Wheeler',
    iconName: 'Car',
    badgeCount: 5,
    highlightSpecs: '12V • 32Ah – 35Ah • High Reliability',
    colorAccent: 'from-emerald-600 to-green-700',
  },
  {
    id: 'Commercial',
    title: 'Truck & Bus Batteries',
    shortDesc: 'Heavy-duty cycle batteries with reinforced grid architecture built for continuous long-haul journeys and severe loads.',
    tag: 'Commercial',
    iconName: 'Truck',
    badgeCount: 14,
    highlightSpecs: '12V • 100Ah – 200Ah • Extreme Duty',
    colorAccent: 'from-blue-600 to-cyan-700',
  },
  {
    id: 'Agricultural',
    title: 'Tractor & Farm Batteries',
    shortDesc: 'Rugged vibration-resistant batteries for tractors, harvesters, and heavy-duty agricultural machinery.',
    tag: 'Agriculture',
    iconName: 'Tractor',
    badgeCount: 8,
    highlightSpecs: '12V • 65Ah – 100Ah • High Cranking Torque',
    colorAccent: 'from-yellow-600 to-amber-700',
  },
  {
    id: 'Inverter & Home UPS',
    title: 'Inverter & Home Backup',
    shortDesc: 'Tall tubular and flat plate deep-cycle lead-acid batteries for long, uninterrupted power backup.',
    tag: 'Home Power',
    iconName: 'Zap',
    badgeCount: 12,
    highlightSpecs: '12V • 100Ah – 200Ah • 99.99% Pure Lead',
    colorAccent: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'Solar Storage',
    title: 'Solar Batteries',
    shortDesc: 'Specialized C10 deep-discharge solar tubular lead-acid batteries for off-grid and hybrid photovoltaic systems.',
    tag: 'Renewable',
    iconName: 'Sun',
    badgeCount: 7,
    highlightSpecs: 'C10 Rated • 100Ah – 200Ah • 60M Warranty',
    colorAccent: 'from-orange-500 to-amber-600',
  },
  {
    id: 'E-Rickshaw',
    title: 'E-Rickshaw Batteries',
    shortDesc: 'Heavy-duty deep-cycle tubular traction lead-acid batteries for passenger auto-rickshaws and cargo loaders.',
    tag: 'Electric 3W',
    iconName: 'BatteryCharging',
    badgeCount: 5,
    highlightSpecs: '12V • 120Ah – 135Ah • High Daily Mileage',
    colorAccent: 'from-violet-600 to-purple-700',
  },
  {
    id: 'Industrial & Telecom',
    title: 'UPS & Industrial Batteries',
    shortDesc: 'Stationary VRLA, AGM and SMF batteries for online UPS, data centers, telecom, and critical backup banks.',
    tag: 'Industrial',
    iconName: 'Server',
    badgeCount: 14,
    highlightSpecs: '12V • 7Ah – 200Ah • UL Flame Retardant',
    colorAccent: 'from-neutral-600 to-neutral-800',
  },
  {
    id: 'Generator & Genset',
    title: 'Generator / Genset Batteries',
    shortDesc: 'High instantaneous cranking current batteries engineered for diesel and gas generator starting systems.',
    tag: 'Genset',
    iconName: 'Zap',
    badgeCount: 8,
    highlightSpecs: '12V • 88Ah – 180Ah • Instant Ignition',
    colorAccent: 'from-rose-600 to-red-700',
  },
];
