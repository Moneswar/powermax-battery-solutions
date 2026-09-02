import { PowerFinderOption } from '../types';

export const POWER_FINDER_DATA: PowerFinderOption[] = [
  {
    type: 'Car',
    brands: [
      {
        name: 'Maruti Suzuki',
        models: [
          {
            name: 'Swift / Swift Dzire (Petrol)',
            yearsOrSpecs: ['2018 - Present', '2012 - 2017', '2005 - 2011'],
            recommendedProductId: 'exide-mileage-car-42',
          },
          {
            name: 'Baleno / Glanza (Petrol)',
            yearsOrSpecs: ['2015 - Present', 'DualJet Smart Hybrid'],
            recommendedProductId: 'exide-mileage-car-42',
          },
          {
            name: 'Alto 800 / K10 / Celerio / WagonR',
            yearsOrSpecs: ['All Petrol & CNG Variants'],
            recommendedProductId: 'livguard-urban-40',
          },
          {
            name: 'Brezza / Grand Vitara (Petrol / Hybrid)',
            yearsOrSpecs: ['2020 - Present', '2016 - 2020 (Diesel)'],
            recommendedProductId: 'amaron-hi-life-din-55',
          },
        ],
      },
      {
        name: 'Hyundai',
        models: [
          {
            name: 'Creta (Petrol & Diesel)',
            yearsOrSpecs: ['2020 - Present (Gen 2)', '2015 - 2019 (Gen 1)'],
            recommendedProductId: 'amaron-hi-life-din-55',
          },
          {
            name: 'Grand i10 Nios / Aura / i20',
            yearsOrSpecs: ['2019 - Present', '2014 - 2019'],
            recommendedProductId: 'exide-mileage-car-42',
          },
          {
            name: 'Verna (Petrol & Diesel CRDi)',
            yearsOrSpecs: ['2023 - Present (Turbo)', '2017 - 2022'],
            recommendedProductId: 'amaron-hi-life-din-55',
          },
        ],
      },
      {
        name: 'Tata Motors',
        models: [
          {
            name: 'Nexon / Altroz (Diesel)',
            yearsOrSpecs: ['2020 - Present', '2017 - 2020'],
            recommendedProductId: 'amaron-hi-life-din-55',
          },
          {
            name: 'Tiago / Tigor (Petrol / iCNG)',
            yearsOrSpecs: ['2016 - Present (Revotron 1.2L)'],
            recommendedProductId: 'exide-mileage-car-42',
          },
          {
            name: 'Harrier / Safari (Kryotec 2.0L Diesel)',
            yearsOrSpecs: ['2019 - Present'],
            recommendedProductId: 'bosch-s5-plus-din65-agm',
          },
        ],
      },
      {
        name: 'Honda',
        models: [
          {
            name: 'City / Elevate / Amaze (Petrol)',
            yearsOrSpecs: ['5th Gen (2020 - Present)', '4th Gen (2014 - 2020)'],
            recommendedProductId: 'exide-mileage-car-42',
          },
          {
            name: 'City (Diesel i-DTEC)',
            yearsOrSpecs: ['2014 - 2020 (Diesel)'],
            recommendedProductId: 'amaron-hi-life-din-55',
          },
        ],
      },
      {
        name: 'Volkswagen / Skoda',
        models: [
          {
            name: 'Polo / Vento / Taigun / Kushaq / Slavia',
            yearsOrSpecs: ['1.0 TSI / 1.5 TSI Petrol', '1.5 TDI Diesel'],
            recommendedProductId: 'amaron-hi-life-din-55',
          },
        ],
      },
      {
        name: 'BMW / Mercedes / Audi',
        models: [
          {
            name: '3 Series / C-Class / A4 / GLA / Q3',
            yearsOrSpecs: ['Start-Stop & AGM Requirement (2015 - Present)'],
            recommendedProductId: 'bosch-s5-plus-din65-agm',
          },
        ],
      },
    ],
  },
  {
    type: 'Bike',
    brands: [
      {
        name: 'Honda Two-Wheelers',
        models: [
          {
            name: 'Activa 5G / 6G / 125',
            yearsOrSpecs: ['BS6 (2020 - Present)', 'BS4 (2015 - 2019)'],
            recommendedProductId: 'amaron-pro-rider-btz5l',
          },
          {
            name: 'CB Shine / SP 125 / Unicorn 160',
            yearsOrSpecs: ['All Self-Start Models'],
            recommendedProductId: 'amaron-pro-rider-btz5l',
          },
          {
            name: 'H’ness CB350 / CB350RS',
            yearsOrSpecs: ['2020 - Present'],
            recommendedProductId: 'exide-xplore-xltz9',
          },
        ],
      },
      {
        name: 'Royal Enfield',
        models: [
          {
            name: 'Classic 350 / Bullet 350 / Meteor 350 (J-Series)',
            yearsOrSpecs: ['2021 - Present (J-Series)', '2012 - 2020 (UCE BS4/BS3)'],
            recommendedProductId: 'exide-xplore-xltz9',
          },
          {
            name: 'Himalayan 411 / Scram 411 / 450',
            yearsOrSpecs: ['Adventure High-Output'],
            recommendedProductId: 'exide-xplore-xltz9',
          },
          {
            name: 'Interceptor 650 / Continental GT 650',
            yearsOrSpecs: ['2018 - Present'],
            recommendedProductId: 'exide-xplore-xltz9',
          },
        ],
      },
      {
        name: 'Hero MotoCorp',
        models: [
          {
            name: 'Splendor Plus (Self-Start) / Passion Pro',
            yearsOrSpecs: ['i3S Smart Start', 'Standard Electric Start'],
            recommendedProductId: 'amaron-pro-rider-btz5l',
          },
          {
            name: 'HF Deluxe / Glamour 125',
            yearsOrSpecs: ['All Self-Start Editions'],
            recommendedProductId: 'exide-xplore-motorcycle-4l',
          },
        ],
      },
      {
        name: 'Bajaj Auto',
        models: [
          {
            name: 'Pulsar 150 / 180 / 220F',
            yearsOrSpecs: ['Twin Spark DTS-i'],
            recommendedProductId: 'amaron-pro-rider-btz5l',
          },
          {
            name: 'Dominar 400 / 250',
            yearsOrSpecs: ['2017 - Present'],
            recommendedProductId: 'exide-xplore-xltz9',
          },
        ],
      },
      {
        name: 'TVS Motor',
        models: [
          {
            name: 'Jupiter 110 / 125 / Ntorq 125',
            yearsOrSpecs: ['SmartXonnect & Standard'],
            recommendedProductId: 'amaron-pro-rider-btz5l',
          },
          {
            name: 'Apache RTR 160 4V / 200 4V',
            yearsOrSpecs: ['Race Edition'],
            recommendedProductId: 'amaron-pro-rider-btz5l',
          },
        ],
      },
    ],
  },
  {
    type: 'Inverter',
    brands: [
      {
        name: 'Residential Backup (1BHK / 2BHK)',
        models: [
          {
            name: 'Standard Home UPS (800VA – 1100VA)',
            yearsOrSpecs: ['4–6 Hours Backup (3 Fans + 4 Lights + TV + Wi-Fi)'],
            recommendedProductId: 'luminous-invertlast-iltt-18048',
          },
          {
            name: 'Budget Compact Solution',
            yearsOrSpecs: ['2–4 Hours Short Power Cut Backup'],
            recommendedProductId: 'sf-sonic-stan-master-150',
          },
        ],
      },
      {
        name: 'Large Home / Villa (3BHK / 4BHK)',
        models: [
          {
            name: 'Heavy Load UPS (1500VA – 2200VA / 24V Double Battery)',
            yearsOrSpecs: ['8–12 Hours Backup (Refrigerator + Fans + PCs + TV)'],
            recommendedProductId: 'microtek-dura-strong-180',
          },
          {
            name: 'Ultra Pure HADI Long Life',
            yearsOrSpecs: ['Maximum 7+ Year Durability'],
            recommendedProductId: 'okaya-pro-power-tubular-150',
          },
        ],
      },
      {
        name: 'Commercial Office & Clinics',
        models: [
          {
            name: 'High Inrush Continuous Backup',
            yearsOrSpecs: ['Workstations, POS Terminals, Clinic Lighting'],
            recommendedProductId: 'luminous-invertlast-iltt-18048',
          },
        ],
      },
    ],
  },
  {
    type: 'Solar',
    brands: [
      {
        name: 'Solar Rooftop & Off-Grid',
        models: [
          {
            name: 'Off-Grid Solar PCU Inverter (1kW – 3kW)',
            yearsOrSpecs: ['C10 Deep Discharge Tubular Bank (150Ah)'],
            recommendedProductId: 'luminous-solar-tubular-lpt-12150',
          },
          {
            name: 'Next-Gen Lithium Solar ESS Microgrid (48V)',
            yearsOrSpecs: ['LiFePO4 4.8kWh Rack Module (3500+ Cycles)'],
            recommendedProductId: 'okaya-lithium-lifepo4-48v',
          },
        ],
      },
    ],
  },
  {
    type: 'Truck',
    brands: [
      {
        name: 'Commercial Fleets (Tata / Ashok Leyland / BharatBenz)',
        models: [
          {
            name: 'Heavy Haulage Trucks (16-Wheeler / 10-Wheeler)',
            yearsOrSpecs: ['Multi-Axle Cargo & Tippers (150Ah Heavy Duty)'],
            recommendedProductId: 'exide-express-heavy-truck-150',
          },
          {
            name: 'Intercity Luxury Sleeper Buses (Volvo / Scania)',
            yearsOrSpecs: ['High Passenger Cabin Aircon & Entertainment Load'],
            recommendedProductId: 'exide-express-heavy-truck-150',
          },
        ],
      },
    ],
  },
  {
    type: 'Tractor',
    brands: [
      {
        name: 'Agricultural Machinery (Mahindra / John Deere / Swaraj)',
        models: [
          {
            name: 'Farm Tractors (35 HP to 75 HP)',
            yearsOrSpecs: ['Mud Shock & Vibration Resistant 88Ah'],
            recommendedProductId: 'amaron-harvest-tractor-88',
          },
        ],
      },
    ],
  },
  {
    type: 'Auto Rickshaw',
    brands: [
      {
        name: 'E-Rickshaw & Passenger 3-Wheelers',
        models: [
          {
            name: 'Electric 48V Auto Rickshaw (Set of 4)',
            yearsOrSpecs: ['Deep Cycle Tubular Max Kilometers (120Ah)'],
            recommendedProductId: 'livguard-rickshaw-power-120',
          },
        ],
      },
    ],
  },
  {
    type: 'UPS',
    brands: [
      {
        name: 'Data Center & Medical Online UPS',
        models: [
          {
            name: 'Online High Frequency UPS (10kVA – 80kVA)',
            yearsOrSpecs: ['VRLA Flame-Retardant 12V 65Ah Sealed Modules'],
            recommendedProductId: 'exide-powersafe-vrla-ep65',
          },
        ],
      },
    ],
  },
];
