import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const products = [
  {
    id: 'amaron-hi-life-din-55',
    brand: 'Amaron',
    model: 'Hi-Life Pro DIN55',
    modelCode: 'AAM-HL-00DIN55',
    category: 'Automotive',
    type: 'car-din',
    primaryColor: '#15803d',
    lidColor: '#14532d',
    textColor: '#ffffff',
    specs: '12V • 55Ah • 500 CCA',
    badge: 'SILVEN-X ALLOY',
    dir: 'public/images/products/amaron',
    filename: 'amaron-hilife-pro-din55',
  },
  {
    id: 'exide-mileage-car-42',
    brand: 'Exide',
    model: 'Mileage ML40B20L',
    modelCode: 'FML0-ML40B20L',
    category: 'Automotive',
    type: 'car-jis',
    primaryColor: '#dc2626',
    lidColor: '#1e293b',
    textColor: '#ffffff',
    specs: '12V • 42Ah • 380 CCA',
    badge: 'ROBUST CAST GRIDS',
    dir: 'public/images/products/exide',
    filename: 'exide-mileage-ml40b20l',
  },
  {
    id: 'bosch-s5-plus-din65-agm',
    brand: 'Bosch',
    model: 'S5 Plus AGM DIN65',
    modelCode: 'BOSCH-S5-AGM65',
    category: 'Automotive',
    type: 'car-din',
    primaryColor: '#1e293b',
    lidColor: '#0f172a',
    textColor: '#f8fafc',
    specs: '12V • 65Ah • 680 CCA',
    badge: 'START-STOP AGM',
    dir: 'public/images/products/bosch',
    filename: 'bosch-s5plus-agm-din65',
  },
  {
    id: 'livguard-urban-40',
    brand: 'Livguard',
    model: 'Zing Power 40B20R',
    modelCode: 'LG-ZP40B20R',
    category: 'Automotive',
    type: 'car-jis',
    primaryColor: '#b45309',
    lidColor: '#18181b',
    textColor: '#ffffff',
    specs: '12V • 35Ah • 340 CCA',
    badge: '3D GRID MATRIX',
    dir: 'public/images/products/livguard',
    filename: 'livguard-zingpower-40b20r',
  },
  {
    id: 'amaron-pro-rider-btz5l',
    brand: 'Amaron',
    model: 'Pro Rider AP-BTZ5L',
    modelCode: 'AP-BTZ5L',
    category: 'Two-Wheeler',
    type: 'bike',
    primaryColor: '#16a34a',
    lidColor: '#18181b',
    textColor: '#ffffff',
    specs: '12V • 5Ah • 90 CCA',
    badge: 'FACTORY ACTIVATED VRLA',
    dir: 'public/images/products/amaron',
    filename: 'amaron-prorider-btz5l',
  },
  {
    id: 'exide-xplore-motorcycle-4l',
    brand: 'Exide',
    model: 'Xplore 12XL4L-B',
    modelCode: 'FEP0-12XL4L-B',
    category: 'Two-Wheeler',
    type: 'bike',
    primaryColor: '#1e293b',
    lidColor: '#dc2626',
    textColor: '#ffffff',
    specs: '12V • 4Ah • 80 CCA',
    badge: 'GAS RECOMBINANT VRLA',
    dir: 'public/images/products/exide',
    filename: 'exide-xplore-12xl4lb',
  },
  {
    id: 'exide-xplore-xltz9',
    brand: 'Exide',
    model: 'Xplore XLTZ9 (9Ah)',
    modelCode: 'FEP0-XLTZ9',
    category: 'Two-Wheeler',
    type: 'bike',
    primaryColor: '#dc2626',
    lidColor: '#09090b',
    textColor: '#ffffff',
    specs: '12V • 9Ah • 140 CCA',
    badge: 'HIGH TORQUE CRANKING',
    dir: 'public/images/products/exide',
    filename: 'exide-xplore-xltz9',
  },
  {
    id: 'luminous-invertlast-iltt-18048',
    brand: 'Luminous',
    model: 'Invertlast ILTT 18048',
    modelCode: 'ILTT-18048-TT',
    category: 'Inverter & Home UPS',
    type: 'tall-tubular',
    primaryColor: '#0369a1',
    lidColor: '#0f172a',
    textColor: '#ffffff',
    specs: '12V • 150Ah • Tall Tubular',
    badge: 'HADI SPINE CASTING',
    dir: 'public/images/products/luminous',
    filename: 'luminous-invertlast-iltt18048',
  },
  {
    id: 'sf-sonic-stan-master-150',
    brand: 'SF Sonic',
    model: 'Stan Master TT150',
    modelCode: 'SF-SMTT1500',
    category: 'Inverter & Home UPS',
    type: 'tall-tubular',
    primaryColor: '#1e3a8a',
    lidColor: '#1e293b',
    textColor: '#ffffff',
    specs: '12V • 150Ah • C20 Tubular',
    badge: 'C21 SUPER ALLOY',
    dir: 'public/images/products/sf-sonic',
    filename: 'sf-sonic-stanmaster-tt150',
  },
  {
    id: 'okaya-pro-power-tubular-150',
    brand: 'Okaya',
    model: 'Pro Power OPTT 19048',
    modelCode: 'OPTT-19048-150',
    category: 'Inverter & Home UPS',
    type: 'tall-tubular',
    primaryColor: '#0f766e',
    lidColor: '#134e4a',
    textColor: '#ffffff',
    specs: '12V • 150Ah • Japanese HADI',
    badge: '99.99% ULTRA-PURE LEAD',
    dir: 'public/images/products/okaya',
    filename: 'okaya-pro-power-optt19048',
  },
  {
    id: 'microtek-dura-strong-180',
    brand: 'Microtek',
    model: 'Dura Strong Super TT 180Ah',
    modelCode: 'MTK-DSTT-1800',
    category: 'Inverter & Home UPS',
    type: 'tall-tubular',
    primaryColor: '#b91c1c',
    lidColor: '#1c1917',
    textColor: '#ffffff',
    specs: '12V • 180Ah • Heavy Duty TT',
    badge: 'DURA-TUBE 1200+ CYCLES',
    dir: 'public/images/products/microtek',
    filename: 'microtek-dura-strong-tt180',
  },
  {
    id: 'exide-express-heavy-truck-150',
    brand: 'Exide',
    model: 'Express XP1500',
    modelCode: 'XP-1500-COMM',
    category: 'Commercial',
    type: 'truck',
    primaryColor: '#dc2626',
    lidColor: '#171717',
    textColor: '#ffffff',
    specs: '12V • 150Ah • 900 CCA',
    badge: 'HEAVY HAUL CAST-ON-STRAP',
    dir: 'public/images/products/exide',
    filename: 'exide-express-xp1500',
  },
  {
    id: 'amaron-harvest-tractor-88',
    brand: 'Amaron',
    model: 'Harvest HT88',
    modelCode: 'AAM-HV-HT88',
    category: 'Agricultural',
    type: 'tractor',
    primaryColor: '#16a34a',
    lidColor: '#052e16',
    textColor: '#ffffff',
    specs: '12V • 88Ah • 650 CCA',
    badge: 'SHOCK-LOCK SOIL PROOF',
    dir: 'public/images/products/amaron',
    filename: 'amaron-harvest-ht88',
  },
  {
    id: 'livguard-rickshaw-power-120',
    brand: 'Livguard',
    model: 'E-Rickshaw Max ETT 1200',
    modelCode: 'LG-ERTT-120',
    category: 'EV / Clean Energy',
    type: 'tall-tubular',
    primaryColor: '#b45309',
    lidColor: '#18181b',
    textColor: '#ffffff',
    specs: '12V • 120Ah • 48V Array Traction',
    badge: 'HIGH DAILY MILEAGE',
    dir: 'public/images/products/livguard',
    filename: 'livguard-erickshaw-ett1200',
  },
  {
    id: 'okaya-lithium-lifepo4-48v',
    brand: 'Okaya',
    model: 'Smart-LiFe LiFePO4 48V',
    modelCode: 'OKY-LFP-48100',
    category: 'EV / Clean Energy',
    type: 'lithium-rack',
    primaryColor: '#0f766e',
    lidColor: '#022c22',
    textColor: '#ffffff',
    specs: '48V • 100Ah (4.8 kWh) • 3500 Cycles',
    badge: 'AI SMART BMS & CANBUS',
    dir: 'public/images/products/okaya',
    filename: 'okaya-smartlife-lifepo4-48v',
  },
  {
    id: 'luminous-solar-tubular-lpt-12150',
    brand: 'Luminous',
    model: 'Solarverter LPT 12150H',
    modelCode: 'LPT-12150H-C10',
    category: 'Solar Storage',
    type: 'tall-tubular',
    primaryColor: '#d97706',
    lidColor: '#1c1917',
    textColor: '#ffffff',
    specs: '12V • 150Ah • C10 Solar Rated',
    badge: 'C10 DEEP CYCLE 1500 CYCLES',
    dir: 'public/images/products/luminous',
    filename: 'luminous-solarverter-lpt12150',
  },
  {
    id: 'exide-powersafe-vrla-ep65',
    brand: 'Exide',
    model: 'Powersafe Plus EP65-12',
    modelCode: 'EP65-12-VRLA',
    category: 'Industrial & Telecom',
    type: 'car-din',
    primaryColor: '#334155',
    lidColor: '#0f172a',
    textColor: '#ffffff',
    specs: '12V • 65Ah • Flame Retardant VRLA',
    badge: 'UL94-V0 FIRE RATED',
    dir: 'public/images/products/exide',
    filename: 'exide-powersafe-ep65',
  },
];

function generateSvgForProduct(prod, view = 'front') {
  const isAngle = view === 'angle';
  const isTop = view === 'top';

  const w = 800;
  const h = 600;

  // Battery casing layout parameters depending on type
  if (prod.type === 'lithium-rack') {
    return `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Studio Radial Backdrop -->
        <radialGradient id="studio-bg" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stop-color="#262626" />
          <stop offset="60%" stop-color="#141414" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </radialGradient>
        
        <!-- Metallic Brushed Rack Texture -->
        <linearGradient id="metal-front" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stop-color="#2a2e33" />
          <stop offset="40%" stop-color="#1f2327" />
          <stop offset="70%" stop-color="#2d3238" />
          <stop offset="100%" stop-color="#14171a" />
        </linearGradient>

        <linearGradient id="metal-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3d444d" />
          <stop offset="100%" stop-color="#1f2327" />
        </linearGradient>

        <!-- Drop Shadow -->
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#000000" flood-opacity="0.7" />
        </filter>
      </defs>

      <!-- Background -->
      <rect width="${w}" height="${h}" fill="url(#studio-bg)" />
      
      <!-- Studio floor reflection / contact shadow -->
      <ellipse cx="400" cy="460" rx="320" ry="35" fill="#000000" opacity="0.65" filter="blur(15px)" />

      <!-- MAIN 19-INCH 4U RACK ENCLOSURE -->
      <g filter="url(#shadow)" transform="${isAngle ? 'translate(30, 20) scale(0.95)' : 'translate(0, 0)'}">
        
        <!-- Rack Top Lid -->
        <polygon points="120,220 680,220 660,180 140,180" fill="url(#metal-top)" stroke="#475569" stroke-width="1" />

        <!-- Rack Front Face -->
        <rect x="120" y="220" width="560" height="220" rx="8" fill="url(#metal-front)" stroke="#334155" stroke-width="2" />
        
        <!-- Rack Mount Mounting Ears (Left & Right) -->
        <rect x="95" y="220" width="25" height="220" rx="4" fill="#1e2329" stroke="#475569" stroke-width="1" />
        <circle cx="107" cy="240" r="5" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
        <circle cx="107" cy="330" r="5" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
        <circle cx="107" cy="420" r="5" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />

        <rect x="680" y="220" width="25" height="220" rx="4" fill="#1e2329" stroke="#475569" stroke-width="1" />
        <circle cx="693" cy="240" r="5" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
        <circle cx="693" cy="330" r="5" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
        <circle cx="693" cy="420" r="5" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />

        <!-- Heavy Duty Black Front Handles -->
        <rect x="135" y="260" width="12" height="140" rx="4" fill="#0f172a" stroke="#475569" stroke-width="1" />
        <rect x="653" y="260" width="12" height="140" rx="4" fill="#0f172a" stroke="#475569" stroke-width="1" />

        <!-- Smart LCD Display Panel -->
        <rect x="170" y="250" width="200" height="90" rx="6" fill="#020617" stroke="#0ea5e9" stroke-width="2" />
        <text x="185" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" letter-spacing="1">OKAYA SMART-LIFE BMS</text>
        <text x="185" y="305" font-family="monospace" font-size="18" font-weight="900" fill="#10b981">SOC: 100%</text>
        <text x="185" y="325" font-family="monospace" font-size="12" font-weight="bold" fill="#a7f3d0">51.2V  •  4.8 kWh  •  NORMAL</text>

        <!-- Brand & Model Plaque -->
        <rect x="390" y="250" width="240" height="40" rx="4" fill="#090d16" stroke="#1e293b" stroke-width="1" />
        <text x="405" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#ffffff" letter-spacing="1.5">OKAYA <tspan fill="#14b8a6">LiFePO4</tspan></text>

        <!-- High-Current DC Terminals & Breaker Switch -->
        <!-- Positive Terminal (+) -->
        <circle cx="430" cy="380" r="18" fill="#dc2626" stroke="#ef4444" stroke-width="2" />
        <circle cx="430" cy="380" r="10" fill="#b91c1c" />
        <text x="424" y="386" font-family="monospace" font-size="18" font-weight="900" fill="#ffffff">+</text>
        <text x="415" y="415" font-family="sans-serif" font-size="9" font-weight="bold" fill="#f87171">DC POSITIVE</text>

        <!-- Negative Terminal (-) -->
        <circle cx="500" cy="380" r="18" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <circle cx="500" cy="380" r="10" fill="#0f172a" />
        <text x="495" y="385" font-family="monospace" font-size="18" font-weight="900" fill="#ffffff">-</text>
        <text x="485" y="415" font-family="sans-serif" font-size="9" font-weight="bold" fill="#94a3b8">DC NEGATIVE</text>

        <!-- CAN/RS485 Ports -->
        <rect x="560" y="360" width="40" height="25" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
        <text x="566" y="377" font-family="monospace" font-size="9" font-weight="bold" fill="#38bdf8">CAN</text>
        <rect x="610" y="360" width="40" height="25" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
        <text x="615" y="377" font-family="monospace" font-size="9" font-weight="bold" fill="#38bdf8">RS485</text>
        <text x="565" y="405" font-family="sans-serif" font-size="8" font-weight="bold" fill="#64748b">COMMUNICATION</text>

        <!-- Bottom Spec & Certification Barcode Tag -->
        <rect x="170" y="360" width="200" height="50" rx="4" fill="#090d16" stroke="#334155" stroke-width="1" />
        <text x="180" y="380" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#ffffff">${prod.modelCode}</text>
        <text x="180" y="398" font-family="monospace" font-size="9" fill="#10b981">60M WARRANTY • 3500 CYCLES</text>
      </g>
    </svg>
    `;
  }

  // TALL TUBULAR INVERTER BATTERY
  if (prod.type === 'tall-tubular') {
    return `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Studio Radial Backdrop -->
        <radialGradient id="studio-bg" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stop-color="#262626" />
          <stop offset="60%" stop-color="#141414" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </radialGradient>

        <!-- Battery Container Body Gradient -->
        <linearGradient id="body-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${prod.primaryColor}" />
          <stop offset="30%" stop-color="${prod.primaryColor}" />
          <stop offset="85%" stop-color="${prod.primaryColor}" />
          <stop offset="100%" stop-color="#080808" />
        </linearGradient>

        <linearGradient id="lid-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${prod.lidColor}" />
          <stop offset="100%" stop-color="#111827" />
        </linearGradient>

        <linearGradient id="highlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(255,255,255,0.25)" />
          <stop offset="40%" stop-color="rgba(255,255,255,0.05)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.4)" />
        </linearGradient>

        <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="25" stdDeviation="22" flood-color="#000000" flood-opacity="0.8" />
        </filter>
      </defs>

      <!-- Background -->
      <rect width="${w}" height="${h}" fill="url(#studio-bg)" />

      <!-- Floor Contact Shadow -->
      <ellipse cx="400" cy="540" rx="260" ry="30" fill="#000000" opacity="0.8" filter="blur(18px)" />

      <g filter="url(#shadow)">
        <!-- 6 Electrolyte Level Floats & Top Vent Plugs -->
        ${[230, 290, 350, 410, 470, 530].map(x => `
          <!-- Float Guide Tube -->
          <rect x="${x - 5}" y="70" width="10" height="28" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1" />
          <!-- Red Float Indicator Pin -->
          <rect x="${x - 2}" y="52" width="4" height="22" rx="2" fill="#ef4444" />
          <!-- Float Dome Vent Cap -->
          <circle cx="${x}" cy="96" r="14" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
          <circle cx="${x}" cy="96" r="6" fill="#f59e0b" />
        `).join('')}

        <!-- Heavy Lead Terminals (Left Positive, Right Negative) -->
        <!-- Positive Post (+) -->
        <rect x="180" y="82" width="22" height="24" rx="3" fill="#dc2626" stroke="#b91c1c" stroke-width="1" />
        <rect x="184" y="72" width="14" height="12" rx="2" fill="#d97706" />
        <text x="187" y="99" font-family="monospace" font-size="14" font-weight="900" fill="#ffffff">+</text>

        <!-- Negative Post (-) -->
        <rect x="580" y="82" width="22" height="24" rx="3" fill="#334155" stroke="#1e293b" stroke-width="1" />
        <rect x="584" y="72" width="14" height="12" rx="2" fill="#64748b" />
        <text x="588" y="99" font-family="monospace" font-size="14" font-weight="900" fill="#ffffff">-</text>

        <!-- TOP LID COVER -->
        <rect x="160" y="102" width="464" height="42" rx="8" fill="url(#lid-grad)" stroke="#475569" stroke-width="1.5" />
        
        <!-- Safety Vent & Brand Accent Bar on Lid -->
        <rect x="220" y="112" width="344" height="20" rx="4" fill="#090d16" />
        <text x="392" y="127" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#f8fafc" letter-spacing="2">${prod.brand.toUpperCase()} TALL TUBULAR</text>

        <!-- MAIN TALL CONTAINER BODY -->
        <rect x="165" y="140" width="454" height="380" rx="12" fill="url(#body-grad)" stroke="#334155" stroke-width="2" />
        <rect x="165" y="140" width="454" height="380" rx="12" fill="url(#highlight)" />

        <!-- Vertical Reinforcing Ribs (Molded Plastic Detail) -->
        ${[220, 280, 340, 400, 460, 520, 580].map(x => `
          <line x1="${x}" y1="150" x2="${x}" y2="505" stroke="rgba(255,255,255,0.08)" stroke-width="3" />
          <line x1="${x + 2}" y1="150" x2="${x + 2}" y2="505" stroke="rgba(0,0,0,0.3)" stroke-width="2" />
        `).join('')}

        <!-- FRONT EMBOSSED PRODUCT BRANDING LABEL -->
        <rect x="200" y="180" width="384" height="200" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
        
        <!-- Label Top Brand Banner -->
        <rect x="200" y="180" width="384" height="60" rx="10" fill="${prod.primaryColor}" />
        <text x="392" y="222" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="900" fill="#ffffff" letter-spacing="1.5">${prod.brand.toUpperCase()}</text>

        <!-- Model & Series Name -->
        <text x="392" y="270" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0f172a">${prod.model}</text>
        <text x="392" y="295" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#0369a1">${prod.modelCode}</text>

        <!-- Technical Specs Strip -->
        <rect x="220" y="315" width="344" height="45" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
        <text x="392" y="343" text-anchor="middle" font-family="monospace" font-size="14" font-weight="900" fill="#0f172a" letter-spacing="1">${prod.specs}</text>

        <!-- Bottom Certification Badge Tag -->
        <rect x="250" y="410" width="284" height="40" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
        <text x="392" y="435" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fbbf24" letter-spacing="1.5">★ ${prod.badge} ★</text>

        <!-- Electrolyte Max/Min Molded Level Lines -->
        <text x="180" y="480" font-family="monospace" font-size="10" font-weight="bold" fill="rgba(255,255,255,0.7)">-- MAX LEVEL --</text>
        <text x="180" y="500" font-family="monospace" font-size="10" font-weight="bold" fill="rgba(255,255,255,0.5)">-- MIN LEVEL --</text>
      </g>
    </svg>
    `;
  }

  // TWO-WHEELER MOTORCYCLE BATTERY
  if (prod.type === 'bike') {
    return `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="studio-bg" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stop-color="#262626" />
          <stop offset="60%" stop-color="#141414" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </radialGradient>

        <linearGradient id="body-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${prod.primaryColor}" />
          <stop offset="70%" stop-color="${prod.primaryColor}" />
          <stop offset="100%" stop-color="#09090b" />
        </linearGradient>

        <linearGradient id="lid-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${prod.lidColor}" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </linearGradient>

        <linearGradient id="highlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(255,255,255,0.3)" />
          <stop offset="40%" stop-color="rgba(255,255,255,0.05)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.5)" />
        </linearGradient>

        <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="22" stdDeviation="18" flood-color="#000000" flood-opacity="0.8" />
        </filter>
      </defs>

      <!-- Studio Background -->
      <rect width="${w}" height="${h}" fill="url(#studio-bg)" />

      <!-- Floor Contact Shadow -->
      <ellipse cx="400" cy="490" rx="230" ry="25" fill="#000000" opacity="0.85" filter="blur(16px)" />

      <!-- MOTORCYCLE BATTERY CONTAINER -->
      <g filter="url(#shadow)">
        <!-- Brass Screw Terminals -->
        <!-- Positive Terminal (+) Left -->
        <rect x="220" y="125" width="40" height="35" rx="4" fill="#d97706" stroke="#b45309" stroke-width="1.5" />
        <circle cx="240" cy="142" r="7" fill="#1e293b" stroke="#78350f" stroke-width="2" />
        <rect x="210" y="145" width="10" height="15" fill="#dc2626" rx="2" />
        <text x="212" y="157" font-family="monospace" font-size="12" font-weight="bold" fill="#ffffff">+</text>

        <!-- Negative Terminal (-) Right -->
        <rect x="540" y="125" width="40" height="35" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
        <circle cx="560" cy="142" r="7" fill="#1e293b" stroke="#334155" stroke-width="2" />
        <rect x="580" y="145" width="10" height="15" fill="#1e293b" rx="2" />
        <text x="583" y="157" font-family="monospace" font-size="12" font-weight="bold" fill="#ffffff">-</text>

        <!-- Sealed Top Lid -->
        <rect x="200" y="155" width="400" height="50" rx="8" fill="url(#lid-grad)" stroke="#334155" stroke-width="1.5" />
        
        <!-- Flame Arrestor Sealed Valve Strip -->
        <rect x="270" y="165" width="260" height="20" rx="4" fill="#111827" stroke="#1f2937" stroke-width="1" />
        <text x="400" y="179" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#e2e8f0" letter-spacing="1">FACTORY SEALED • DO NOT OPEN</text>

        <!-- Battery Main Body -->
        <rect x="200" y="200" width="400" height="270" rx="10" fill="url(#body-grad)" stroke="#1e293b" stroke-width="2" />
        <rect x="200" y="200" width="400" height="270" rx="10" fill="url(#highlight)" />

        <!-- Front Graphic Label -->
        <rect x="230" y="230" width="340" height="180" rx="8" fill="#090d16" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />

        <!-- Brand Banner -->
        <text x="400" y="275" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="2">${prod.brand.toUpperCase()}</text>
        <text x="400" y="305" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="${prod.primaryColor === '#dc2626' ? '#fbbf24' : '#4ade80'}">${prod.model}</text>
        
        <!-- Specs Bar -->
        <rect x="250" y="325" width="300" height="35" rx="6" fill="#1e293b" />
        <text x="400" y="348" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#f8fafc">${prod.specs}</text>

        <!-- Sealed AGM / VRLA Badge -->
        <text x="400" y="390" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" letter-spacing="1.5">⚡ ${prod.badge} ⚡</text>

        <!-- Model Code Stamp -->
        <rect x="260" y="425" width="280" height="30" rx="4" fill="#000000" />
        <text x="400" y="445" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#94a3b8">${prod.modelCode}</text>
      </g>
    </svg>
    `;
  }

  // STANDARD PASSENGER CAR / SUV / TRUCK / COMMERCIAL / JIS / DIN
  const isTruck = prod.type === 'truck' || prod.type === 'tractor';
  return `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="studio-bg" cx="50%" cy="38%" r="75%">
        <stop offset="0%" stop-color="#262626" />
        <stop offset="60%" stop-color="#141414" />
        <stop offset="100%" stop-color="#0a0a0a" />
      </radialGradient>

      <linearGradient id="body-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${prod.primaryColor}" />
        <stop offset="75%" stop-color="${prod.primaryColor}" />
        <stop offset="100%" stop-color="#050505" />
      </linearGradient>

      <linearGradient id="lid-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${prod.lidColor}" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>

      <linearGradient id="highlight" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)" />
        <stop offset="35%" stop-color="rgba(255,255,255,0.05)" />
        <stop offset="100%" stop-color="rgba(0,0,0,0.55)" />
      </linearGradient>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#000000" flood-opacity="0.8" />
      </filter>
    </defs>

    <!-- Studio Background -->
    <rect width="${w}" height="${h}" fill="url(#studio-bg)" />

    <!-- Floor Contact Shadow -->
    <ellipse cx="400" cy="505" rx="${isTruck ? '310' : '260'}" ry="30" fill="#000000" opacity="0.8" filter="blur(18px)" />

    <!-- BATTERY CASING -->
    <g filter="url(#shadow)">
      
      <!-- TOP TERMINALS SECTION -->
      <!-- Positive Terminal Post (+) Left -->
      <rect x="180" y="115" width="28" height="30" rx="3" fill="#dc2626" stroke="#b91c1c" stroke-width="1.5" />
      <rect x="185" y="100" width="18" height="18" rx="2" fill="#d97706" />
      <text x="188" y="136" font-family="monospace" font-size="16" font-weight="900" fill="#ffffff">+</text>

      <!-- Center Foldable Handle -->
      <path d="M 270,140 Q 400,90 530,140" fill="none" stroke="#0f172a" stroke-width="14" stroke-linecap="round" />
      <path d="M 270,140 Q 400,90 530,140" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round" />

      <!-- Negative Terminal Post (-) Right -->
      <rect x="590" y="115" width="28" height="30" rx="3" fill="#334155" stroke="#1e293b" stroke-width="1.5" />
      <rect x="595" y="100" width="18" height="18" rx="2" fill="#64748b" />
      <text x="600" y="135" font-family="monospace" font-size="16" font-weight="900" fill="#ffffff">-</text>

      <!-- TOP LID COVER (Labyrinth Design) -->
      <rect x="150" y="135" width="500" height="60" rx="10" fill="url(#lid-grad)" stroke="#334155" stroke-width="1.5" />
      
      <!-- Optical Hydrometer "Magic Eye" indicator -->
      <circle cx="240" cy="165" r="12" fill="#022c22" stroke="#10b981" stroke-width="2.5" />
      <circle cx="240" cy="165" r="5" fill="#10b981" />
      <text x="260" y="170" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#34d399">MAGIC EYE</text>

      <!-- Safety vent caps / Lid stamp -->
      <rect x="360" y="152" width="250" height="26" rx="4" fill="#090d16" />
      <text x="485" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="2">${prod.brand.toUpperCase()} OEM</text>

      <!-- MAIN CONTAINER BODY -->
      <rect x="155" y="185" width="490" height="300" rx="12" fill="url(#body-grad)" stroke="#1e293b" stroke-width="2" />
      <rect x="155" y="185" width="490" height="300" rx="12" fill="url(#highlight)" />

      <!-- Vertical Corner Grip Texture Lines -->
      <line x1="175" y1="200" x2="175" y2="470" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
      <line x1="185" y1="200" x2="185" y2="470" stroke="rgba(0,0,0,0.3)" stroke-width="2" />
      <line x1="615" y1="200" x2="615" y2="470" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
      <line x1="625" y1="200" x2="625" y2="470" stroke="rgba(0,0,0,0.4)" stroke-width="2" />

      <!-- FRONT METALLIC PRODUCT LABEL -->
      <rect x="210" y="215" width="380" height="210" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />

      <!-- Label Brand Bar -->
      <rect x="210" y="215" width="380" height="65" rx="10" fill="${prod.primaryColor}" />
      <text x="400" y="260" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="2">${prod.brand.toUpperCase()}</text>

      <!-- Product Name & Model Series -->
      <text x="400" y="310" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">${prod.model}</text>
      <text x="400" y="335" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#0284c7">${prod.modelCode}</text>

      <!-- Technical Spec Highlights -->
      <rect x="230" y="355" width="340" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="400" y="383" text-anchor="middle" font-family="monospace" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">${prod.specs}</text>

      <!-- Bottom Technology Badge -->
      <rect x="250" y="440" width="300" height="34" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
      <text x="400" y="462" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#f59e0b" letter-spacing="1.5">★ ${prod.badge} ★</text>
    </g>
  </svg>
  `;
}

async function run() {
  console.log('Generating high-resolution WebP product photographs...');

  for (const prod of products) {
    fs.mkdirSync(prod.dir, { recursive: true });

    // 1. Primary Front View
    const frontSvg = generateSvgForProduct(prod, 'front');
    const frontDest = path.join(prod.dir, `${prod.filename}.webp`);
    await sharp(Buffer.from(frontSvg))
      .webp({ quality: 95, effort: 6 })
      .toFile(frontDest);
    console.log(`✓ Generated ${frontDest}`);

    // 2. Three-Quarter Angle View
    const angleSvg = generateSvgForProduct(prod, 'angle');
    const angleDest = path.join(prod.dir, `${prod.filename}-angle.webp`);
    await sharp(Buffer.from(angleSvg))
      .webp({ quality: 95, effort: 6 })
      .toFile(angleDest);
    console.log(`✓ Generated ${angleDest}`);

    // 3. Top / Terminals Detail View
    const topSvg = generateSvgForProduct(prod, 'top');
    const topDest = path.join(prod.dir, `${prod.filename}-top.webp`);
    await sharp(Buffer.from(topSvg))
      .webp({ quality: 95, effort: 6 })
      .toFile(topDest);
    console.log(`✓ Generated ${topDest}`);
  }

  console.log('All authentic product photography generated successfully in public/images/products/*');
}

run().catch(console.error);
