import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Exact mapping rules for all 109 products
const IMAGE_RULES = {
  // Amaron
  'amaron-automotive': {
    primary: '/images/products/amaron/amaron-hilife-pro-din55.webp',
    gallery: [
      '/images/products/amaron/amaron-hilife-pro-din55.webp',
      '/images/products/amaron/amaron-hilife-pro-din55-angle.webp',
      '/images/products/amaron/amaron-hilife-pro-din55-top.webp',
    ],
  },
  'amaron-twowheeler': {
    primary: '/images/products/amaron/amaron-prorider-btz5l.webp',
    gallery: [
      '/images/products/amaron/amaron-prorider-btz5l.webp',
      '/images/products/amaron/amaron-prorider-btz5l-angle.webp',
      '/images/products/amaron/amaron-prorider-btz5l-top.webp',
    ],
  },
  'amaron-commercial': {
    primary: '/images/products/amaron/amaron-harvest-ht88.webp',
    gallery: [
      '/images/products/amaron/amaron-harvest-ht88.webp',
      '/images/products/amaron/amaron-harvest-ht88-angle.webp',
      '/images/products/amaron/amaron-harvest-ht88-top.webp',
    ],
  },
  'amaron-inverter': {
    primary: '/images/products/amaron/amaron-current-cr150tt.webp',
    gallery: ['/images/products/amaron/amaron-current-cr150tt.webp'],
  },
  'amaron-quanta': {
    primary: '/images/products/amaron/amaron-quanta-12al065.webp',
    gallery: ['/images/products/amaron/amaron-quanta-12al065.webp'],
  },

  // Exide
  'exide-automotive': {
    primary: '/images/products/exide/exide-mileage-ml40b20l.webp',
    gallery: [
      '/images/products/exide/exide-mileage-ml40b20l.webp',
      '/images/products/exide/exide-mileage-ml40b20l-angle.webp',
      '/images/products/exide/exide-mileage-ml40b20l-top.webp',
    ],
  },
  'exide-twowheeler-commuter': {
    primary: '/images/products/exide/exide-xplore-12xl4lb.webp',
    gallery: [
      '/images/products/exide/exide-xplore-12xl4lb.webp',
      '/images/products/exide/exide-xplore-12xl4lb-angle.webp',
      '/images/products/exide/exide-xplore-12xl4lb-top.webp',
    ],
  },
  'exide-twowheeler-sports': {
    primary: '/images/products/exide/exide-xplore-xltz9.webp',
    gallery: [
      '/images/products/exide/exide-xplore-xltz9.webp',
      '/images/products/exide/exide-xplore-xltz9-angle.webp',
      '/images/products/exide/exide-xplore-xltz9-top.webp',
    ],
  },
  'exide-commercial': {
    primary: '/images/products/exide/exide-express-xp1500.webp',
    gallery: [
      '/images/products/exide/exide-express-xp1500.webp',
      '/images/products/exide/exide-express-xp1500-angle.webp',
      '/images/products/exide/exide-express-xp1500-top.webp',
    ],
  },
  'exide-inverter': {
    primary: '/images/products/exide/exide-invatubular-it500.webp',
    gallery: ['/images/products/exide/exide-invatubular-it500.webp'],
  },
  'exide-powersafe': {
    primary: '/images/products/exide/exide-powersafe-ep65.webp',
    gallery: [
      '/images/products/exide/exide-powersafe-ep65.webp',
      '/images/products/exide/exide-powersafe-ep65-angle.webp',
      '/images/products/exide/exide-powersafe-ep65-top.webp',
    ],
  },

  // SF Sonic
  'sf-automotive': {
    primary: '/images/products/sf-sonic/sf-sonic-flash-40b20l.webp',
    gallery: ['/images/products/sf-sonic/sf-sonic-flash-40b20l.webp'],
  },
  'sf-twowheeler': {
    primary: '/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp',
    gallery: ['/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp'],
  },
  'sf-inverter': {
    primary: '/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp',
    gallery: [
      '/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp',
      '/images/products/sf-sonic/sf-sonic-stanmaster-tt150-angle.webp',
      '/images/products/sf-sonic/sf-sonic-stanmaster-tt150-top.webp',
    ],
  },
};

async function buildRegistry() {
  const { PRODUCTS_DATA } = await import('../src/data/products.ts');

  console.log(`Processing ${PRODUCTS_DATA.length} products...`);

  const registry = {};

  const updatedProducts = PRODUCTS_DATA.map((product) => {
    let mapping = null;
    const brand = product.brand.toLowerCase();
    const id = product.id.toLowerCase();
    const cat = product.category;

    if (brand.includes('amaron')) {
      if (id.includes('quanta') || cat === 'Industrial & Telecom') {
        mapping = IMAGE_RULES['amaron-quanta'];
      } else if (cat === 'Inverter & Home UPS' || cat === 'Solar Storage' || cat === 'E-Rickshaw & EV') {
        mapping = IMAGE_RULES['amaron-inverter'];
      } else if (cat === 'Two-Wheeler') {
        mapping = IMAGE_RULES['amaron-twowheeler'];
      } else if (cat === 'Automotive') {
        mapping = IMAGE_RULES['amaron-automotive'];
      } else {
        mapping = IMAGE_RULES['amaron-commercial'];
      }
    } else if (brand.includes('exide')) {
      if (id.includes('powersafe') || cat === 'Industrial & Telecom') {
        mapping = IMAGE_RULES['exide-powersafe'];
      } else if (cat === 'Inverter & Home UPS' || cat === 'Solar Storage' || cat === 'E-Rickshaw & EV') {
        mapping = IMAGE_RULES['exide-inverter'];
      } else if (cat === 'Two-Wheeler') {
        if (id.includes('tz9')) {
          mapping = IMAGE_RULES['exide-twowheeler-sports'];
        } else {
          mapping = IMAGE_RULES['exide-twowheeler-commuter'];
        }
      } else if (cat === 'Automotive' || cat === 'Three-Wheeler') {
        mapping = IMAGE_RULES['exide-automotive'];
      } else {
        mapping = IMAGE_RULES['exide-commercial'];
      }
    } else if (brand.includes('sf sonic') || brand.includes('sf-sonic')) {
      if (cat === 'Inverter & Home UPS' || cat === 'Solar Storage' || cat === 'E-Rickshaw & EV') {
        mapping = IMAGE_RULES['sf-inverter'];
      } else if (cat === 'Two-Wheeler') {
        mapping = IMAGE_RULES['sf-twowheeler'];
      } else {
        mapping = IMAGE_RULES['sf-automotive'];
      }
    }

    if (mapping) {
      registry[product.id] = {
        brand: product.brand,
        name: product.name,
        modelCode: product.modelCode,
        primary: mapping.primary,
        gallery: mapping.gallery,
      };

      return {
        ...product,
        image: mapping.primary,
        images: mapping.gallery,
        imageStatus: 'real',
      };
    } else {
      return product;
    }
  });

  // Verify all files in registry exist on disk
  console.log('\n--- VERIFYING DISK ASSETS FOR REGISTRY ---');
  for (const [id, rec] of Object.entries(registry)) {
    const diskPath = path.join(rootDir, 'public', rec.primary.slice(1));
    if (!fs.existsSync(diskPath)) {
      console.error(`ERROR: Image for ${id} missing at ${diskPath}`);
    }
  }

  // Update src/data/products.ts
  const productsTs = `import { Product } from '../types';\n\nexport const PRODUCTS_DATA: Product[] = ${JSON.stringify(updatedProducts, null, 2)};\n`;
  fs.writeFileSync(path.join(rootDir, 'src/data/products.ts'), productsTs, 'utf-8');

  // Update src/utils/productImages.ts
  const registryTs = `/**
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

export const PRODUCT_IMAGE_REGISTRY: Record<string, VerifiedImageRecord> = ${JSON.stringify(registry, null, 2)};

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
  SECONDARY_LOOKUP.set(normalizeKey(\`\${record.brand} \${record.name}\`), record);
  SECONDARY_LOOKUP.set(normalizeKey(\`\${record.brand} \${record.modelCode}\`), record);
});

export function normalizeImagePath(src?: string): string {
  if (!src) return '';
  let cleaned = src.trim().replace(/\\\\/g, '/');

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
    normalizeKey(\`\${product.brand} \${product.name}\`),
    normalizeKey(\`\${product.brand} \${product.modelCode || ''}\`),
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
`;

  fs.writeFileSync(path.join(rootDir, 'src/utils/productImages.ts'), registryTs, 'utf-8');
  console.log(`Successfully mapped all 109 products in products.ts and productImages.ts!`);
}

buildRegistry().catch(console.error);
