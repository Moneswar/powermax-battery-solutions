import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function syncProducts() {
  const { PRODUCTS_DATA } = await import('../src/data/products.ts');
  const { PRODUCT_IMAGE_REGISTRY } = await import('../src/utils/productImages.ts');

  console.log(`Syncing ${PRODUCTS_DATA.length} products with PRODUCT_IMAGE_REGISTRY...`);

  let matchedCount = 0;
  const updatedProducts = PRODUCTS_DATA.map((p) => {
    const reg = PRODUCT_IMAGE_REGISTRY[p.id];
    if (reg) {
      matchedCount++;
      return {
        ...p,
        image: reg.primary,
        images: reg.gallery,
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

  console.log(`Matched ${matchedCount} / ${PRODUCTS_DATA.length} products to authentic images!`);

  const outputTs = `import { Product } from '../types';\n\nexport const PRODUCTS_DATA: Product[] = ${JSON.stringify(updatedProducts, null, 2)};\n`;

  const targetPath = path.join(rootDir, 'src/data/products.ts');
  fs.writeFileSync(targetPath, outputTs, 'utf-8');
  console.log(`Updated ${targetPath} successfully!`);
}

syncProducts().catch(console.error);
