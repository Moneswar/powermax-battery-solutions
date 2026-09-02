/**
 * Centralized Product Image Registry & Resolution System
 * PowerMax Battery Solutions
 * 
 * Provides verified OEM product image mapping, multi-angle gallery lookup,
 * and Vercel-compatible path normalization.
 */

import { Product } from '../types';

export interface VerifiedImageRecord {
  primary: string;
  gallery: string[];
  brand: 'Amaron' | 'Exide' | 'SF Sonic' | string;
  modelCode?: string;
  name: string;
}

export const PRODUCT_IMAGE_REGISTRY: Record<string, VerifiedImageRecord> = {
  "amaron-hilife-pro-din55": {
    "brand": "Amaron",
    "name": "Amaron Hi-Life Pro DIN55",
    "modelCode": "AAM-HL-00DIN55",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-pro-42b20l": {
    "brand": "Amaron",
    "name": "Amaron Pro 42B20L",
    "modelCode": "AAM-PR-0042B20L",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-flo-42b20l": {
    "brand": "Amaron",
    "name": "Amaron Flo 42B20L",
    "modelCode": "AAM-FL-0042B20L",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-go-38b20l": {
    "brand": "Amaron",
    "name": "Amaron Go 38B20L",
    "modelCode": "AAM-GO-0038B20L",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-flo-55d23l": {
    "brand": "Amaron",
    "name": "Amaron Flo 55D23L",
    "modelCode": "AAM-FL-055D23L",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-pro-din65": {
    "brand": "Amaron",
    "name": "Amaron Pro DIN65",
    "modelCode": "AAM-PR-00DIN65",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-pro-din74": {
    "brand": "Amaron",
    "name": "Amaron Pro DIN74",
    "modelCode": "AAM-PR-00DIN74",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-go-din80": {
    "brand": "Amaron",
    "name": "Amaron Go DIN80",
    "modelCode": "AAM-GO-00DIN80",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-pro-din100": {
    "brand": "Amaron",
    "name": "Amaron Pro DIN100",
    "modelCode": "AAM-PR-0DIN100",
    "primary": "/images/products/amaron/amaron-hilife-pro-din55.webp",
    "gallery": [
      "/images/products/amaron/amaron-hilife-pro-din55.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-angle.webp",
      "/images/products/amaron/amaron-hilife-pro-din55-top.webp"
    ]
  },
  "amaron-prorider-btz4l": {
    "brand": "Amaron",
    "name": "Amaron Pro Rider AP-BTZ4L",
    "modelCode": "AP-BTZ4L",
    "primary": "/images/products/amaron/amaron-prorider-btz5l.webp",
    "gallery": [
      "/images/products/amaron/amaron-prorider-btz5l.webp",
      "/images/products/amaron/amaron-prorider-btz5l-angle.webp",
      "/images/products/amaron/amaron-prorider-btz5l-top.webp"
    ]
  },
  "amaron-prorider-btz5l": {
    "brand": "Amaron",
    "name": "Amaron Pro Rider AP-BTZ5L",
    "modelCode": "AP-BTZ5L",
    "primary": "/images/products/amaron/amaron-prorider-btz5l.webp",
    "gallery": [
      "/images/products/amaron/amaron-prorider-btz5l.webp",
      "/images/products/amaron/amaron-prorider-btz5l-angle.webp",
      "/images/products/amaron/amaron-prorider-btz5l-top.webp"
    ]
  },
  "amaron-prorider-btz7l": {
    "brand": "Amaron",
    "name": "Amaron Pro Rider AP-BTZ7L",
    "modelCode": "AP-BTZ7L",
    "primary": "/images/products/amaron/amaron-prorider-btz5l.webp",
    "gallery": [
      "/images/products/amaron/amaron-prorider-btz5l.webp",
      "/images/products/amaron/amaron-prorider-btz5l-angle.webp",
      "/images/products/amaron/amaron-prorider-btz5l-top.webp"
    ]
  },
  "amaron-prorider-btz9l": {
    "brand": "Amaron",
    "name": "Amaron Pro Rider AP-BTZ9L",
    "modelCode": "AP-BTZ9L",
    "primary": "/images/products/amaron/amaron-prorider-btz5l.webp",
    "gallery": [
      "/images/products/amaron/amaron-prorider-btz5l.webp",
      "/images/products/amaron/amaron-prorider-btz5l-angle.webp",
      "/images/products/amaron/amaron-prorider-btz5l-top.webp"
    ]
  },
  "amaron-prorider-bt12l": {
    "brand": "Amaron",
    "name": "Amaron Pro Rider AP-BT12L",
    "modelCode": "AP-BT12L",
    "primary": "/images/products/amaron/amaron-prorider-btz5l.webp",
    "gallery": [
      "/images/products/amaron/amaron-prorider-btz5l.webp",
      "/images/products/amaron/amaron-prorider-btz5l-angle.webp",
      "/images/products/amaron/amaron-prorider-btz5l-top.webp"
    ]
  },
  "amaron-hiway-3w-32ah": {
    "brand": "Amaron",
    "name": "Amaron Hiway 3W 32Ah",
    "modelCode": "AAM-HW-3W32",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-hiway-3w-35ah": {
    "brand": "Amaron",
    "name": "Amaron Hiway 3W 35Ah MF",
    "modelCode": "AAM-HW-3W35",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-hiway-hc100": {
    "brand": "Amaron",
    "name": "Amaron Hiway HC100",
    "modelCode": "AAM-HW-HC100",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-hiway-hc130": {
    "brand": "Amaron",
    "name": "Amaron Hiway HC130",
    "modelCode": "AAM-HW-HC130",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-hiway-hc150": {
    "brand": "Amaron",
    "name": "Amaron Hiway HC150",
    "modelCode": "AAM-HW-HC150",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-hiway-hc180": {
    "brand": "Amaron",
    "name": "Amaron Hiway HC180",
    "modelCode": "AAM-HW-HC180",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-hiway-hc200": {
    "brand": "Amaron",
    "name": "Amaron Hiway HC200",
    "modelCode": "AAM-HW-HC200",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-harvest-ht65": {
    "brand": "Amaron",
    "name": "Amaron Harvest HT65",
    "modelCode": "AAM-HV-HT65",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-harvest-ht88": {
    "brand": "Amaron",
    "name": "Amaron Harvest HT88",
    "modelCode": "AAM-HV-HT88",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-harvest-ht100": {
    "brand": "Amaron",
    "name": "Amaron Harvest HT100",
    "modelCode": "AAM-HV-HT100",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-current-cr150tt": {
    "brand": "Amaron",
    "name": "Amaron Current CR150TT",
    "modelCode": "AAM-CR-150TT",
    "primary": "/images/products/amaron/amaron-current-cr150tt.webp",
    "gallery": [
      "/images/products/amaron/amaron-current-cr150tt.webp"
    ]
  },
  "amaron-current-cr200tt": {
    "brand": "Amaron",
    "name": "Amaron Current CR200TT",
    "modelCode": "AAM-CR-200TT",
    "primary": "/images/products/amaron/amaron-current-cr150tt.webp",
    "gallery": [
      "/images/products/amaron/amaron-current-cr150tt.webp"
    ]
  },
  "amaron-shield-cr1500tt": {
    "brand": "Amaron",
    "name": "Amaron Shield CR1500TT",
    "modelCode": "AAM-SH-150TT",
    "primary": "/images/products/amaron/amaron-current-cr150tt.webp",
    "gallery": [
      "/images/products/amaron/amaron-current-cr150tt.webp"
    ]
  },
  "amaron-current-short-tubular-150": {
    "brand": "Amaron",
    "name": "Amaron Current Short Tubular 150Ah",
    "modelCode": "AAM-CR-150ST",
    "primary": "/images/products/amaron/amaron-current-cr150tt.webp",
    "gallery": [
      "/images/products/amaron/amaron-current-cr150tt.webp"
    ]
  },
  "amaron-solar-volt-100ah": {
    "brand": "Amaron",
    "name": "Amaron Solar Volt 100Ah C10",
    "modelCode": "AAM-SV-100C10",
    "primary": "/images/products/amaron/amaron-current-cr150tt.webp",
    "gallery": [
      "/images/products/amaron/amaron-current-cr150tt.webp"
    ]
  },
  "amaron-solar-volt-150ah": {
    "brand": "Amaron",
    "name": "Amaron Solar Volt 150Ah C10",
    "modelCode": "AAM-SV-150C10",
    "primary": "/images/products/amaron/amaron-current-cr150tt.webp",
    "gallery": [
      "/images/products/amaron/amaron-current-cr150tt.webp"
    ]
  },
  "amaron-solar-volt-200ah": {
    "brand": "Amaron",
    "name": "Amaron Solar Volt 200Ah C10",
    "modelCode": "AAM-SV-200C10",
    "primary": "/images/products/amaron/amaron-current-cr150tt.webp",
    "gallery": [
      "/images/products/amaron/amaron-current-cr150tt.webp"
    ]
  },
  "amaron-brute-er120": {
    "brand": "Amaron",
    "name": "Amaron Brute E-Rickshaw 120Ah",
    "modelCode": "AAM-BT-ER120",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-brute-er135": {
    "brand": "Amaron",
    "name": "Amaron Brute E-Rickshaw 135Ah",
    "modelCode": "AAM-BT-ER135",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-quanta-12al007": {
    "brand": "Amaron",
    "name": "Amaron Quanta 12V 7Ah VRLA",
    "modelCode": "12AL007",
    "primary": "/images/products/amaron/amaron-quanta-12al065.webp",
    "gallery": [
      "/images/products/amaron/amaron-quanta-12al065.webp"
    ]
  },
  "amaron-quanta-12al026": {
    "brand": "Amaron",
    "name": "Amaron Quanta 12V 26Ah VRLA",
    "modelCode": "12AL026",
    "primary": "/images/products/amaron/amaron-quanta-12al065.webp",
    "gallery": [
      "/images/products/amaron/amaron-quanta-12al065.webp"
    ]
  },
  "amaron-quanta-12al042": {
    "brand": "Amaron",
    "name": "Amaron Quanta 12V 42Ah VRLA",
    "modelCode": "12AL042",
    "primary": "/images/products/amaron/amaron-quanta-12al065.webp",
    "gallery": [
      "/images/products/amaron/amaron-quanta-12al065.webp"
    ]
  },
  "amaron-quanta-12al065": {
    "brand": "Amaron",
    "name": "Amaron Quanta 12V 65Ah VRLA",
    "modelCode": "12AL065",
    "primary": "/images/products/amaron/amaron-quanta-12al065.webp",
    "gallery": [
      "/images/products/amaron/amaron-quanta-12al065.webp"
    ]
  },
  "amaron-quanta-12al100": {
    "brand": "Amaron",
    "name": "Amaron Quanta 12V 100Ah VRLA",
    "modelCode": "12AL100",
    "primary": "/images/products/amaron/amaron-quanta-12al065.webp",
    "gallery": [
      "/images/products/amaron/amaron-quanta-12al065.webp"
    ]
  },
  "amaron-quanta-12al150": {
    "brand": "Amaron",
    "name": "Amaron Quanta 12V 150Ah VRLA",
    "modelCode": "12AL150",
    "primary": "/images/products/amaron/amaron-quanta-12al065.webp",
    "gallery": [
      "/images/products/amaron/amaron-quanta-12al065.webp"
    ]
  },
  "amaron-genpro-gp88": {
    "brand": "Amaron",
    "name": "Amaron Genpro GP88",
    "modelCode": "AAM-GP-0088",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-genpro-gp120": {
    "brand": "Amaron",
    "name": "Amaron Genpro GP120",
    "modelCode": "AAM-GP-0120",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "amaron-hiway-genset-180": {
    "brand": "Amaron",
    "name": "Amaron Hiway Genset 180Ah",
    "modelCode": "AAM-HW-GEN180",
    "primary": "/images/products/amaron/amaron-harvest-ht88.webp",
    "gallery": [
      "/images/products/amaron/amaron-harvest-ht88.webp",
      "/images/products/amaron/amaron-harvest-ht88-angle.webp",
      "/images/products/amaron/amaron-harvest-ht88-top.webp"
    ]
  },
  "exide-mileage-ml40b20l": {
    "brand": "Exide",
    "name": "Exide Mileage ML40B20L",
    "modelCode": "FML0-ML40B20L",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-epiq-35l": {
    "brand": "Exide",
    "name": "Exide Epiq EPIQ35L",
    "modelCode": "EPIQ-35L",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-matrix-mt35l": {
    "brand": "Exide",
    "name": "Exide Matrix MT35L",
    "modelCode": "FMT0-MT35L",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-mileage-mldin50": {
    "brand": "Exide",
    "name": "Exide Mileage MLDIN50",
    "modelCode": "FML0-MLDIN50",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-matrix-mtdin55": {
    "brand": "Exide",
    "name": "Exide Matrix MTDIN55",
    "modelCode": "FMT0-MTDIN55",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-mileage-mldin65": {
    "brand": "Exide",
    "name": "Exide Mileage MLDIN65",
    "modelCode": "FML0-MLDIN65",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-matrix-mtdin74": {
    "brand": "Exide",
    "name": "Exide Matrix MTDIN74",
    "modelCode": "FMT0-MTDIN74",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-cabby-cb35l": {
    "brand": "Exide",
    "name": "Exide Cabby CB35L",
    "modelCode": "FCB0-CB35L",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-gold-din100": {
    "brand": "Exide",
    "name": "Exide Gold DIN100",
    "modelCode": "FGL0-GLDIN100",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-xplore-12xl2.5lc": {
    "brand": "Exide",
    "name": "Exide Xplore 12XL2.5L-C",
    "modelCode": "FEP0-12XL2.5LC",
    "primary": "/images/products/exide/exide-xplore-12xl4lb.webp",
    "gallery": [
      "/images/products/exide/exide-xplore-12xl4lb.webp",
      "/images/products/exide/exide-xplore-12xl4lb-angle.webp",
      "/images/products/exide/exide-xplore-12xl4lb-top.webp"
    ]
  },
  "exide-xplore-12xl4lb": {
    "brand": "Exide",
    "name": "Exide Xplore 12XL4L-B",
    "modelCode": "FEP0-12XL4LB",
    "primary": "/images/products/exide/exide-xplore-12xl4lb.webp",
    "gallery": [
      "/images/products/exide/exide-xplore-12xl4lb.webp",
      "/images/products/exide/exide-xplore-12xl4lb-angle.webp",
      "/images/products/exide/exide-xplore-12xl4lb-top.webp"
    ]
  },
  "exide-xplore-12xl5lb": {
    "brand": "Exide",
    "name": "Exide Xplore 12XL5L-B",
    "modelCode": "FEP0-12XL5LB",
    "primary": "/images/products/exide/exide-xplore-12xl4lb.webp",
    "gallery": [
      "/images/products/exide/exide-xplore-12xl4lb.webp",
      "/images/products/exide/exide-xplore-12xl4lb-angle.webp",
      "/images/products/exide/exide-xplore-12xl4lb-top.webp"
    ]
  },
  "exide-xplore-xltz9": {
    "brand": "Exide",
    "name": "Exide Xplore XLTZ9",
    "modelCode": "FEP0-XLTZ9",
    "primary": "/images/products/exide/exide-xplore-xltz9.webp",
    "gallery": [
      "/images/products/exide/exide-xplore-xltz9.webp",
      "/images/products/exide/exide-xplore-xltz9-angle.webp",
      "/images/products/exide/exide-xplore-xltz9-top.webp"
    ]
  },
  "exide-xplore-12xl14la2": {
    "brand": "Exide",
    "name": "Exide Xplore 12XL14L-A2",
    "modelCode": "FEP0-12XL14LA2",
    "primary": "/images/products/exide/exide-xplore-12xl4lb.webp",
    "gallery": [
      "/images/products/exide/exide-xplore-12xl4lb.webp",
      "/images/products/exide/exide-xplore-12xl4lb-angle.webp",
      "/images/products/exide/exide-xplore-12xl4lb-top.webp"
    ]
  },
  "exide-auto-32ah": {
    "brand": "Exide",
    "name": "Exide Auto 32Ah",
    "modelCode": "FAU0-AU32",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-cabby-3w-35ah": {
    "brand": "Exide",
    "name": "Exide Cabby 3W 35Ah",
    "modelCode": "FCB0-3W35",
    "primary": "/images/products/exide/exide-mileage-ml40b20l.webp",
    "gallery": [
      "/images/products/exide/exide-mileage-ml40b20l.webp",
      "/images/products/exide/exide-mileage-ml40b20l-angle.webp",
      "/images/products/exide/exide-mileage-ml40b20l-top.webp"
    ]
  },
  "exide-express-xp1000": {
    "brand": "Exide",
    "name": "Exide Express XP1000",
    "modelCode": "FXP0-XP1000",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-express-xp1300": {
    "brand": "Exide",
    "name": "Exide Express XP1300",
    "modelCode": "FXP0-XP1300",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-express-xp1500": {
    "brand": "Exide",
    "name": "Exide Express XP1500",
    "modelCode": "FXP0-XP1500",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-express-xp1800": {
    "brand": "Exide",
    "name": "Exide Express XP1800",
    "modelCode": "FXP0-XP1800",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-express-xp2000": {
    "brand": "Exide",
    "name": "Exide Express XP2000",
    "modelCode": "FXP0-XP2000",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-gold-commercial-130": {
    "brand": "Exide",
    "name": "Exide Gold Commercial 130Ah",
    "modelCode": "FGL0-GL130",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-jai-kisan-jk65": {
    "brand": "Exide",
    "name": "Exide Jai Kisan JK65",
    "modelCode": "FJK0-JK65",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-jai-kisan-jk88": {
    "brand": "Exide",
    "name": "Exide Jai Kisan JK88",
    "modelCode": "FJK0-JK88",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-jai-kisan-jk100": {
    "brand": "Exide",
    "name": "Exide Jai Kisan JK100",
    "modelCode": "FJK0-JK100",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-invamaster-imtt1500": {
    "brand": "Exide",
    "name": "Exide InvaMaster IMTT1500",
    "modelCode": "FIM0-IMTT1500",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-invatubular-it500": {
    "brand": "Exide",
    "name": "Exide InvaTubular IT500",
    "modelCode": "FIT0-IT500",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-invamaster-imtt2000": {
    "brand": "Exide",
    "name": "Exide InvaMaster IMTT2000",
    "modelCode": "FIM0-IMTT2000",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-tubemaster-tm500": {
    "brand": "Exide",
    "name": "Exide Tubemaster TM500",
    "modelCode": "FTM0-TM500",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-invaplus-ip1000": {
    "brand": "Exide",
    "name": "Exide InvaPlus IP1000",
    "modelCode": "FIP0-IP1000",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-solar-tubemaster-100": {
    "brand": "Exide",
    "name": "Exide Solar Tubemaster 100Ah C10",
    "modelCode": "FST0-ST1000",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-solar-tubemaster-150": {
    "brand": "Exide",
    "name": "Exide Solar Tubemaster 150Ah C10",
    "modelCode": "FST0-ST1500",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-solar-tubemaster-200": {
    "brand": "Exide",
    "name": "Exide Solar Tubemaster 200Ah C10",
    "modelCode": "FST0-ST2000",
    "primary": "/images/products/exide/exide-invatubular-it500.webp",
    "gallery": [
      "/images/products/exide/exide-invatubular-it500.webp"
    ]
  },
  "exide-e-ride-120ah": {
    "brand": "Exide",
    "name": "Exide E-Ride Tubular 120Ah",
    "modelCode": "FER0-ER1200",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-e-ride-plus-135ah": {
    "brand": "Exide",
    "name": "Exide E-Ride Plus 135Ah",
    "modelCode": "FER0-ER1350",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-powersafe-ep7-12": {
    "brand": "Exide",
    "name": "Exide Powersafe Plus EP7-12",
    "modelCode": "FEP0-EP7-12",
    "primary": "/images/products/exide/exide-powersafe-ep65.webp",
    "gallery": [
      "/images/products/exide/exide-powersafe-ep65.webp",
      "/images/products/exide/exide-powersafe-ep65-angle.webp",
      "/images/products/exide/exide-powersafe-ep65-top.webp"
    ]
  },
  "exide-powersafe-ep26-12": {
    "brand": "Exide",
    "name": "Exide Powersafe Plus EP26-12",
    "modelCode": "FEP0-EP26-12",
    "primary": "/images/products/exide/exide-powersafe-ep65.webp",
    "gallery": [
      "/images/products/exide/exide-powersafe-ep65.webp",
      "/images/products/exide/exide-powersafe-ep65-angle.webp",
      "/images/products/exide/exide-powersafe-ep65-top.webp"
    ]
  },
  "exide-powersafe-ep42-12": {
    "brand": "Exide",
    "name": "Exide Powersafe Plus EP42-12",
    "modelCode": "FEP0-EP42-12",
    "primary": "/images/products/exide/exide-powersafe-ep65.webp",
    "gallery": [
      "/images/products/exide/exide-powersafe-ep65.webp",
      "/images/products/exide/exide-powersafe-ep65-angle.webp",
      "/images/products/exide/exide-powersafe-ep65-top.webp"
    ]
  },
  "exide-powersafe-ep65": {
    "brand": "Exide",
    "name": "Exide Powersafe Plus EP65-12",
    "modelCode": "FEP0-EP65-12",
    "primary": "/images/products/exide/exide-powersafe-ep65.webp",
    "gallery": [
      "/images/products/exide/exide-powersafe-ep65.webp",
      "/images/products/exide/exide-powersafe-ep65-angle.webp",
      "/images/products/exide/exide-powersafe-ep65-top.webp"
    ]
  },
  "exide-powersafe-ep100-12": {
    "brand": "Exide",
    "name": "Exide Powersafe Plus EP100-12",
    "modelCode": "FEP0-EP100-12",
    "primary": "/images/products/exide/exide-powersafe-ep65.webp",
    "gallery": [
      "/images/products/exide/exide-powersafe-ep65.webp",
      "/images/products/exide/exide-powersafe-ep65-angle.webp",
      "/images/products/exide/exide-powersafe-ep65-top.webp"
    ]
  },
  "exide-genplus-gp88": {
    "brand": "Exide",
    "name": "Exide Genplus GP88",
    "modelCode": "FGP0-GP88",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-genplus-gp120": {
    "brand": "Exide",
    "name": "Exide Genplus GP120",
    "modelCode": "FGP0-GP120",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "exide-express-genset-180": {
    "brand": "Exide",
    "name": "Exide Express Genset 180Ah",
    "modelCode": "FXP0-GEN180",
    "primary": "/images/products/exide/exide-express-xp1500.webp",
    "gallery": [
      "/images/products/exide/exide-express-xp1500.webp",
      "/images/products/exide/exide-express-xp1500-angle.webp",
      "/images/products/exide/exide-express-xp1500-top.webp"
    ]
  },
  "sf-sonic-flash-40b20l": {
    "brand": "SF Sonic",
    "name": "SF Sonic Flash 40B20L",
    "modelCode": "FSF0-FL40B20L",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-power48-42b20l": {
    "brand": "SF Sonic",
    "name": "SF Sonic Power 48 42B20L",
    "modelCode": "FSF0-PW42B20L",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-flash-din55": {
    "brand": "SF Sonic",
    "name": "SF Sonic Flash DIN55",
    "modelCode": "FSF0-FLDIN55",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-cruiser-din65": {
    "brand": "SF Sonic",
    "name": "SF Sonic Sonic Cruiser DIN65",
    "modelCode": "FSF0-SCDIN65",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-flash-din74": {
    "brand": "SF Sonic",
    "name": "SF Sonic Flash DIN74",
    "modelCode": "FSF0-FLDIN74",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-mobiker-4lb": {
    "brand": "SF Sonic",
    "name": "SF Sonic Mobiker 4L-B",
    "modelCode": "FSF0-MB4LB",
    "primary": "/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp"
    ]
  },
  "sf-sonic-mobiker-5lb": {
    "brand": "SF Sonic",
    "name": "SF Sonic Mobiker 5L-B",
    "modelCode": "FSF0-MB5LB",
    "primary": "/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp"
    ]
  },
  "sf-sonic-mobiker-tz9": {
    "brand": "SF Sonic",
    "name": "SF Sonic Mobiker TZ9",
    "modelCode": "FSF0-MBTZ9",
    "primary": "/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp"
    ]
  },
  "sf-sonic-3w-super-32ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic 3-Wheeler Super 32Ah",
    "modelCode": "FSF0-3W32",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-trucker-100ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Trucker 100Ah",
    "modelCode": "FSF0-TK1000",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-trucker-150ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Trucker 150Ah",
    "modelCode": "FSF0-TK1500",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-trucker-180ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Trucker 180Ah",
    "modelCode": "FSF0-TK1800",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-farm-master-75ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Farm Master 75Ah",
    "modelCode": "FSF0-FM750",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-farm-master-88ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Farm Master 88Ah",
    "modelCode": "FSF0-FM880",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-stanmaster-tt150": {
    "brand": "SF Sonic",
    "name": "SF Sonic Stan Master TT150",
    "modelCode": "SF-SMTT1500",
    "primary": "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-angle.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-top.webp"
    ]
  },
  "sf-sonic-stanmaster-tt200": {
    "brand": "SF Sonic",
    "name": "SF Sonic Stan Master TT200",
    "modelCode": "SF-SMTT2000",
    "primary": "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-angle.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-top.webp"
    ]
  },
  "sf-sonic-powerbox-150": {
    "brand": "SF Sonic",
    "name": "SF Sonic Power Box 150Ah",
    "modelCode": "FSF0-PB1500",
    "primary": "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-angle.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-top.webp"
    ]
  },
  "sf-sonic-solar-150ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Solar Stan Master 150Ah C10",
    "modelCode": "FSF0-SL1500",
    "primary": "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-angle.webp",
      "/images/products/sf-sonic/sf-sonic-stanmaster-tt150-top.webp"
    ]
  },
  "sf-sonic-e-rickshaw-120ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic E-Rickshaw Super 120Ah",
    "modelCode": "FSF0-ER1200",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-vrla-7.2ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic VRLA 12V 7.2Ah",
    "modelCode": "FSF0-VR7-12",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-vrla-26ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic VRLA 12V 26Ah",
    "modelCode": "FSF0-VR26-12",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-vrla-65ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic VRLA 12V 65Ah",
    "modelCode": "FSF0-VR65-12",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-genset-88ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Genset Master 88Ah",
    "modelCode": "FSF0-GS880",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  },
  "sf-sonic-genset-120ah": {
    "brand": "SF Sonic",
    "name": "SF Sonic Genset Master 120Ah",
    "modelCode": "FSF0-GS1200",
    "primary": "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp",
    "gallery": [
      "/images/products/sf-sonic/sf-sonic-flash-40b20l.webp"
    ]
  }
};

export function normalizeKey(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[®™]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

const SECONDARY_LOOKUP = new Map<string, VerifiedImageRecord>();

Object.entries(PRODUCT_IMAGE_REGISTRY).forEach(([id, record]) => {
  SECONDARY_LOOKUP.set(normalizeKey(id), record);
  SECONDARY_LOOKUP.set(normalizeKey(record.name), record);
  if (record.modelCode) {
    SECONDARY_LOOKUP.set(normalizeKey(record.modelCode), record);
  }
  SECONDARY_LOOKUP.set(normalizeKey(`${record.brand} ${record.name}`), record);
  SECONDARY_LOOKUP.set(normalizeKey(`${record.brand} ${record.modelCode}`), record);
});

export function normalizeImagePath(src?: string): string {
  if (!src) return '';
  let cleaned = src.trim().replace(/\\/g, '/');

  if (cleaned.startsWith('http://') || cleaned.startsWith('https://') || cleaned.startsWith('data:')) {
    return cleaned;
  }

  if (cleaned.startsWith('public/')) {
    cleaned = cleaned.slice(7);
  } else if (cleaned.startsWith('/public/')) {
    cleaned = cleaned.slice(8);
  }

  if (!cleaned.startsWith('/')) {
    cleaned = '/' + cleaned;
  }

  return cleaned;
}

export interface ProductImageResolution {
  hasRealImage: boolean;
  primaryImage: string;
  galleryImages: string[];
  isPending: boolean;
  verifiedRecord?: VerifiedImageRecord;
}

export function resolveProductImage(
  productOrId?: Product | string | null,
  fallbackSrc?: string
): ProductImageResolution {
  if (!productOrId) {
    const norm = normalizeImagePath(fallbackSrc);
    return {
      hasRealImage: Boolean(norm),
      primaryImage: norm,
      galleryImages: norm ? [norm] : [],
      isPending: !norm,
    };
  }

  if (typeof productOrId === 'string') {
    const rawId = productOrId;
    if (PRODUCT_IMAGE_REGISTRY[rawId]) {
      const rec = PRODUCT_IMAGE_REGISTRY[rawId];
      return {
        hasRealImage: true,
        primaryImage: rec.primary,
        galleryImages: rec.gallery,
        isPending: false,
        verifiedRecord: rec,
      };
    }

    const normKey = normalizeKey(rawId);
    if (SECONDARY_LOOKUP.has(normKey)) {
      const rec = SECONDARY_LOOKUP.get(normKey)!;
      return {
        hasRealImage: true,
        primaryImage: rec.primary,
        galleryImages: rec.gallery,
        isPending: false,
        verifiedRecord: rec,
      };
    }

    const normFallback = normalizeImagePath(fallbackSrc || rawId);
    return {
      hasRealImage: false,
      primaryImage: normFallback,
      galleryImages: normFallback ? [normFallback] : [],
      isPending: true,
    };
  }

  const product = productOrId;

  if (product.id && PRODUCT_IMAGE_REGISTRY[product.id]) {
    const rec = PRODUCT_IMAGE_REGISTRY[product.id];
    return {
      hasRealImage: true,
      primaryImage: rec.primary,
      galleryImages: rec.gallery,
      isPending: false,
      verifiedRecord: rec,
    };
  }

  const candidateKeys = [
    normalizeKey(product.id),
    normalizeKey(product.modelCode || ''),
    normalizeKey(product.name),
    normalizeKey(`${product.brand} ${product.name}`),
    normalizeKey(`${product.brand} ${product.modelCode || ''}`),
  ];

  for (const key of candidateKeys) {
    if (key && SECONDARY_LOOKUP.has(key)) {
      const rec = SECONDARY_LOOKUP.get(key)!;
      return {
        hasRealImage: true,
        primaryImage: rec.primary,
        galleryImages: rec.gallery,
        isPending: false,
        verifiedRecord: rec,
      };
    }
  }

  if (product.imageStatus === 'real' && product.image) {
    const norm = normalizeImagePath(product.image);
    const gallery = (product.images && product.images.length > 0)
      ? product.images.map(normalizeImagePath)
      : [norm];
    return {
      hasRealImage: Boolean(norm),
      primaryImage: norm,
      galleryImages: gallery,
      isPending: false,
    };
  }

  const normPrimary = normalizeImagePath(product.image || fallbackSrc);
  return {
    hasRealImage: false,
    primaryImage: normPrimary,
    galleryImages: normPrimary ? [normPrimary] : [],
    isPending: true,
  };
}
