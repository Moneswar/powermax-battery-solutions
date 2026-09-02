import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const AUTHENTIC_IMAGE_MAP = {
  // Amaron
  'amaron-hilife-pro-din55': {
    image: '/images/products/amaron/amaron-hilife-pro-din55.webp',
    images: [
      '/images/products/amaron/amaron-hilife-pro-din55.webp',
      '/images/products/amaron/amaron-hilife-pro-din55-angle.webp',
      '/images/products/amaron/amaron-hilife-pro-din55-top.webp',
    ],
  },
  'amaron-prorider-btz5l': {
    image: '/images/products/amaron/amaron-prorider-btz5l.webp',
    images: [
      '/images/products/amaron/amaron-prorider-btz5l.webp',
      '/images/products/amaron/amaron-prorider-btz5l-angle.webp',
      '/images/products/amaron/amaron-prorider-btz5l-top.webp',
    ],
  },
  'amaron-harvest-ht88': {
    image: '/images/products/amaron/amaron-harvest-ht88.webp',
    images: [
      '/images/products/amaron/amaron-harvest-ht88.webp',
      '/images/products/amaron/amaron-harvest-ht88-angle.webp',
      '/images/products/amaron/amaron-harvest-ht88-top.webp',
    ],
  },

  // Exide
  'exide-mileage-ml40b20l': {
    image: '/images/products/exide/exide-mileage-ml40b20l.webp',
    images: [
      '/images/products/exide/exide-mileage-ml40b20l.webp',
      '/images/products/exide/exide-mileage-ml40b20l-angle.webp',
      '/images/products/exide/exide-mileage-ml40b20l-top.webp',
    ],
  },
  'exide-xplore-12xl4lb': {
    image: '/images/products/exide/exide-xplore-12xl4lb.webp',
    images: [
      '/images/products/exide/exide-xplore-12xl4lb.webp',
      '/images/products/exide/exide-xplore-12xl4lb-angle.webp',
      '/images/products/exide/exide-xplore-12xl4lb-top.webp',
    ],
  },
  'exide-xplore-xltz9': {
    image: '/images/products/exide/exide-xplore-xltz9.webp',
    images: [
      '/images/products/exide/exide-xplore-xltz9.webp',
      '/images/products/exide/exide-xplore-xltz9-angle.webp',
      '/images/products/exide/exide-xplore-xltz9-top.webp',
    ],
  },
  'exide-express-xp1500': {
    image: '/images/products/exide/exide-express-xp1500.webp',
    images: [
      '/images/products/exide/exide-express-xp1500.webp',
      '/images/products/exide/exide-express-xp1500-angle.webp',
      '/images/products/exide/exide-express-xp1500-top.webp',
    ],
  },
  'exide-powersafe-ep65': {
    image: '/images/products/exide/exide-powersafe-ep65.webp',
    images: [
      '/images/products/exide/exide-powersafe-ep65.webp',
      '/images/products/exide/exide-powersafe-ep65-angle.webp',
      '/images/products/exide/exide-powersafe-ep65-top.webp',
    ],
  },

  // SF Sonic
  'sf-sonic-stanmaster-tt150': {
    image: '/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp',
    images: [
      '/images/products/sf-sonic/sf-sonic-stanmaster-tt150.webp',
      '/images/products/sf-sonic/sf-sonic-stanmaster-tt150-angle.webp',
      '/images/products/sf-sonic/sf-sonic-stanmaster-tt150-top.webp',
    ],
  },
};

async function sanitizeProducts() {
  const { PRODUCTS_DATA } = await import('../src/data/products.ts');

  console.log(`Processing ${PRODUCTS_DATA.length} products in products.ts...`);

  const updatedProducts = PRODUCTS_DATA.map((p) => {
    const authentic = AUTHENTIC_IMAGE_MAP[p.id];
    if (authentic) {
      return {
        ...p,
        image: authentic.image,
        images: authentic.images,
        imageStatus: 'real',
      };
    } else {
      return {
        ...p,
        image: '',
        images: [],
        imageStatus: 'pending',
      };
    }
  });

  const outputTs = `import { Product } from '../types';\n\nexport const PRODUCTS_DATA: Product[] = ${JSON.stringify(updatedProducts, null, 2)};\n`;

  const targetPath = path.join(rootDir, 'src/data/products.ts');
  fs.writeFileSync(targetPath, outputTs, 'utf-8');
  console.log(`Successfully updated ${targetPath} with exact authentic image mappings!`);
}

sanitizeProducts().catch(console.error);
