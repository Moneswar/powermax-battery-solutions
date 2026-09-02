import { BatteryTechnology } from '../types';

export interface TechnologyInfo {
  id: BatteryTechnology;
  name: string;
  shortDesc: string;
  lifespanYears: string;
  maintenanceType: 'Zero Maintenance' | 'Low Maintenance' | 'Periodic Top-Up';
  dischargeDepth: string; // e.g. "80%"
  efficiency: string; // e.g. "95%"
  temperatureRange: string;
  internalAnatomy: {
    positivePlate: string;
    negativePlate: string;
    electrolyte: string;
    separator: string;
    casing: string;
  };
  pros: string[];
  bestUseCases: string[];
}

export const TECHNOLOGIES_DATA: Record<BatteryTechnology, TechnologyInfo> = {
  'Flooded Lead Acid': {
    id: 'Flooded Lead Acid',
    name: 'Flooded Conventional Lead-Acid',
    shortDesc: 'Time-tested heavy-duty flooded electrolyte battery with accessible vent caps for electrolyte maintenance and dependable surge currents.',
    lifespanYears: '3 – 5 Years',
    maintenanceType: 'Periodic Top-Up',
    dischargeDepth: '55%',
    efficiency: '82%',
    temperatureRange: '-15°C to +55°C',
    internalAnatomy: {
      positivePlate: 'Heavy-duty Antimony-Lead cast grid with lead dioxide active mass',
      negativePlate: 'High-purity sponge lead plate with expanders',
      electrolyte: 'Free liquid sulfuric acid (SG 1.250-1.280) with reserve reservoir',
      separator: 'Perforated microporous polyethylene / PVC envelope',
      casing: 'High-impact polypropylene container with removable vent plugs',
    },
    pros: [
      'Economical acquisition cost per Ah',
      'High tolerance to extreme operating temperatures',
      'Easily inspected and topped up for prolonged life',
      '100% recyclable with highest scrap trade-in value',
    ],
    bestUseCases: ['Commercial trucks & buses', 'Tractors & farm machinery', 'Industrial backup', 'E-Rickshaws'],
  },
  'Maintenance Free': {
    id: 'Maintenance Free',
    name: 'Maintenance-Free (MF) Silver Calcium',
    shortDesc: 'Hermetically sealed automotive lead-acid battery with silver-calcium alloy grids that eliminate water loss and resist internal corrosion.',
    lifespanYears: '4 – 6 Years',
    maintenanceType: 'Zero Maintenance',
    dischargeDepth: '50% – 60%',
    efficiency: '85%',
    temperatureRange: '-20°C to +65°C',
    internalAnatomy: {
      positivePlate: 'Silver-Calcium high-density expanded alloy grid',
      negativePlate: 'Calcium-Lead sponge alloy with carbon additives',
      electrolyte: 'Liquid sulfuric acid (SG 1.280) with anti-evaporation labyrinth lid',
      separator: 'Low-resistance microporous envelope polyethylene',
      casing: 'High-impact polypropylene copolymer with integrated flame arrestors',
    },
    pros: [
      'Zero electrolyte topping required during entire service life',
      'Ultra-low self-discharge rates during vehicle parking',
      'High cold-cranking amps for instantaneous ignition',
      'Integrated charge status hydrometer / magic eye indicator',
    ],
    bestUseCases: ['Passenger cars & SUVs', 'Modern two-wheelers', 'Light commercial vehicles', 'Standby gensets'],
  },
  'Tubular': {
    id: 'Tubular',
    name: 'Heavy-Duty Tubular Plate',
    shortDesc: 'Gauntlet-reinforced spine positive plates holding active oxide under high pressure, making it the supreme choice for deep-cycle inverter backup.',
    lifespanYears: '5 – 7 Years',
    maintenanceType: 'Low Maintenance',
    dischargeDepth: '80%',
    efficiency: '88%',
    temperatureRange: '-10°C to +55°C',
    internalAnatomy: {
      positivePlate: 'High-pressure die-cast spines encased in woven polyester gauntlet tubes',
      negativePlate: 'Reinforced flat plate with high-purity lead oxide',
      electrolyte: 'Free liquid sulfuric acid with high headroom electrolyte reserve',
      separator: 'Daramic dual microporous polyethylene separator',
      casing: 'Translucent PP copolymer with float level indicators',
    },
    pros: [
      'Withstands frequent and prolonged power outages without capacity loss',
      'Superb deep-discharge recovery back to 100% State-of-Charge',
      'Spine geometry prevents active mass shedding under cyclic thermal stress',
      'Extended water topping intervals with ceramic vent plugs',
    ],
    bestUseCases: ['Home inverters & UPS', 'Solar power storage', 'Commercial backup systems'],
  },
  'Tall Tubular': {
    id: 'Tall Tubular',
    name: 'Ultra Tall Tubular Max Backup',
    shortDesc: 'Extended height reservoir container holding 30% more electrolyte for cooler running and maximum backup hours during peak summer heat.',
    lifespanYears: '6 – 9 Years',
    maintenanceType: 'Low Maintenance',
    dischargeDepth: '80%',
    efficiency: '89%',
    temperatureRange: '-10°C to +55°C',
    internalAnatomy: {
      positivePlate: 'Extra-tall spine gauntlet tubular matrix with selenium lead alloy',
      negativePlate: 'Heavy pasted flat plate with lignin expanders',
      electrolyte: 'Extra high volume liquid electrolyte reserve',
      separator: 'Dual composite micro-fleece separator',
      casing: 'Extra tall translucent casing with ceramic micro-float gauges',
    },
    pros: [
      'Maximum backup duration under continuous heavy wattage loads',
      'Longest operating life in the lead-acid inverter battery category',
      'Superior thermal heat dissipation during prolonged hot cycles',
      'Exceptional performance in deep discharge regions',
    ],
    bestUseCases: ['Large homes & villas', 'Offices, clinics & labs', 'Solar off-grid power banks'],
  },
  'Flat Plate': {
    id: 'Flat Plate',
    name: 'High-Purity Flat Plate Inverter',
    shortDesc: 'Compact inverter battery with dense flat pasted lead plates providing fast recharge turnaround for short intermittent power cuts.',
    lifespanYears: '3 – 4 Years',
    maintenanceType: 'Low Maintenance',
    dischargeDepth: '60%',
    efficiency: '84%',
    temperatureRange: '-5°C to +50°C',
    internalAnatomy: {
      positivePlate: 'Flat pasted heavy lead-antimony grid',
      negativePlate: 'Flat sponge lead plate',
      electrolyte: 'Liquid sulfuric acid reserve',
      separator: 'Polyethylene microporous envelope separator',
      casing: 'Compact PP container with vent caps',
    },
    pros: [
      'Fast recharge turnaround between frequent power outages',
      'Compact footprint easily fits under furniture and inverter trolleys',
      'Budget-friendly price point for moderate backup needs',
    ],
    bestUseCases: ['Apartments with short power cuts', 'Small retail shop inverters', 'Light residential load'],
  },
  'AGM': {
    id: 'AGM',
    name: 'Absorbent Glass Mat (AGM)',
    shortDesc: 'Premium recombinant battery with micro-fiber glass separators that immobilize electrolyte, offering 3x the cycle life of standard batteries.',
    lifespanYears: '6 – 8 Years',
    maintenanceType: 'Zero Maintenance',
    dischargeDepth: '80%',
    efficiency: '92%',
    temperatureRange: '-30°C to +60°C',
    internalAnatomy: {
      positivePlate: 'High-tin corrosion-resistant cast grids',
      negativePlate: 'High-surface area active lead paste',
      electrolyte: '100% absorbed in boron-silicate glass fiber mat',
      separator: 'Ultra-thin compression glass micro-fiber fleece',
      casing: 'Reinforced ABS with one-way self-resealing safety valves',
    },
    pros: [
      'Engineered specifically for Start-Stop and regenerative braking vehicles',
      '100% spill-proof and mountable in any orientation (including inside cabin/trunk)',
      'Superior vibration resistance up to 20x higher than flooded designs',
      'Rapid recharge acceptance rate reduces alternator load and saves fuel',
    ],
    bestUseCases: ['Luxury Start-Stop cars', 'Performance motorcycles', 'Critical UPS & medical backup'],
  },
  'EFB': {
    id: 'EFB',
    name: 'Enhanced Flooded Battery (EFB)',
    shortDesc: 'Optimized flooded lead-acid battery with polyfleece scrim lining on positive plates for entry-level Start-Stop and micro-hybrid vehicles.',
    lifespanYears: '4 – 6 Years',
    maintenanceType: 'Zero Maintenance',
    dischargeDepth: '65%',
    efficiency: '88%',
    temperatureRange: '-20°C to +65°C',
    internalAnatomy: {
      positivePlate: 'High-tin calcium grid with polyester scrim wrap',
      negativePlate: 'Carbon-enhanced lead plate for high dynamic charge acceptance',
      electrolyte: 'Liquid sulfuric acid with acid mixing elements',
      separator: 'Special polyester scrim fleece envelope',
      casing: 'Reinforced polypropylene with labyrinth lid',
    },
    pros: [
      'Double the cyclic endurance of conventional flooded batteries',
      'Cost-effective solution for standard Start-Stop engine systems',
      'Excellent charge acceptance during short city commutes',
    ],
    bestUseCases: ['Standard Start-Stop vehicles', 'City taxis & commercial fleets', 'Vehicles with high electrical accessories'],
  },
  'VRLA': {
    id: 'VRLA',
    name: 'Valve Regulated Lead-Acid (VRLA)',
    shortDesc: 'Sealed maintenance-free lead-acid battery utilizing internal oxygen recombination cycle with safety pressure-relief valves.',
    lifespanYears: '4 – 7 Years',
    maintenanceType: 'Zero Maintenance',
    dischargeDepth: '70%',
    efficiency: '90%',
    temperatureRange: '-15°C to +50°C',
    internalAnatomy: {
      positivePlate: 'Heavy-duty Lead-Tin-Calcium grid alloy',
      negativePlate: 'High surface-area sponge lead plate',
      electrolyte: 'Immobilized AGM or gelled sulfuric acid',
      separator: 'Glass fiber with high oxygen diffusion permeability',
      casing: 'Flame-retardant UL94-V0 rated ABS casing',
    },
    pros: [
      'Zero acidic fumes or corrosive gas release during normal operation',
      'Ideal for sensitive server racks, telecom shelters, and indoor environments',
      'Stable performance across variable float voltages',
    ],
    bestUseCases: ['Online UPS systems', 'Telecom base stations', 'Security & fire alarm systems', 'Emergency lighting'],
  },
  'SMF': {
    id: 'SMF',
    name: 'Sealed Maintenance-Free (SMF)',
    shortDesc: 'Factory-activated sealed lead-acid battery designed for two-wheelers and automotive applications requiring zero water topping.',
    lifespanYears: '3 – 5 Years',
    maintenanceType: 'Zero Maintenance',
    dischargeDepth: '60%',
    efficiency: '86%',
    temperatureRange: '-20°C to +60°C',
    internalAnatomy: {
      positivePlate: 'Expanded lead-calcium grid alloy',
      negativePlate: 'High-density lead sponge plate',
      electrolyte: 'Liquid electrolyte sealed with patented valve system',
      separator: 'Microporous polyethylene envelope',
      casing: 'Sealed heat-bonded container',
    },
    pros: [
      'Factory charged and ready to install immediately',
      'Spill-proof design prevents motorcycle chassis and paint corrosion',
      'High cranking power in compact dimensions',
    ],
    bestUseCases: ['Motorcycles & scooters', 'ATVs', 'Genset starter packs'],
  },
  'Deep Cycle': {
    id: 'Deep Cycle',
    name: 'Deep Cycle Lead-Acid Storage',
    shortDesc: 'Specially formulated active material with dense plates designed to be discharged down to 20% capacity repeatedly without plate damage.',
    lifespanYears: '5 – 8 Years',
    maintenanceType: 'Low Maintenance',
    dischargeDepth: '80%',
    efficiency: '88%',
    temperatureRange: '-20°C to +55°C',
    internalAnatomy: {
      positivePlate: 'Thick heavy-cast grids with high-density lead dioxide paste',
      negativePlate: 'Reinforced active spongy lead plate',
      electrolyte: 'Liquid or immobilized acid with stratification resistance',
      separator: 'Heavy glass mat dual separator',
      casing: 'Industrial grade shock-proof reinforced container',
    },
    pros: [
      'High cyclic endurance under daily repetitive deep discharges',
      'Thick plates resist grid corrosion and structural breakdown',
      'Consistent power delivery over prolonged discharge curves',
    ],
    bestUseCases: ['Solar energy storage', 'E-Rickshaws', 'Golf carts', 'Floor cleaning equipment', 'Marine vessels'],
  },
};
