import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import products data
const productsFilePath = path.join(rootDir, 'src/data/products.ts');
const productsFileContent = fs.readFileSync(productsFilePath, 'utf-8');

// Parse products manually or using tsx
async function runAudit() {
  const { PRODUCTS_DATA } = await import('../src/data/products.ts');

  console.log(`\n==============================================`);
  console.log(`TOTAL PRODUCTS IN CATALOGUE: ${PRODUCTS_DATA.length}`);
  console.log(`==============================================\n`);

  let validImageCount = 0;
  let missingImageCount = 0;
  let realStatusCount = 0;
  let pendingStatusCount = 0;
  const brokenPaths = [];
  const validProducts = [];
  const pendingProducts = [];

  PRODUCTS_DATA.forEach((p, index) => {
    const rawImagePath = p.image || '';
    const cleanPath = rawImagePath.startsWith('/') ? rawImagePath.slice(1) : rawImagePath;
    const fullDiskPath = path.join(rootDir, 'public', cleanPath);
    const exists = fs.existsSync(fullDiskPath) && fs.statSync(fullDiskPath).isFile();

    if (exists) {
      validImageCount++;
      if (p.imageStatus === 'real') {
        realStatusCount++;
        validProducts.push({ id: p.id, brand: p.brand, name: p.name, path: p.image });
      } else {
        pendingStatusCount++;
        pendingProducts.push({ id: p.id, brand: p.brand, name: p.name, path: p.image, reason: 'File exists but imageStatus is pending' });
      }
    } else {
      missingImageCount++;
      brokenPaths.push({ id: p.id, brand: p.brand, name: p.name, path: p.image });
    }
  });

  console.log(`SUMMARY:`);
  console.log(`- Total products: ${PRODUCTS_DATA.length}`);
  console.log(`- Products with existing files on disk: ${validImageCount}`);
  console.log(`  - Marked as 'real': ${realStatusCount}`);
  console.log(`  - Marked as 'pending': ${pendingStatusCount}`);
  console.log(`- Products with non-existent/broken image paths: ${missingImageCount}`);

  console.log(`\n--- PRODUCTS WITH REAL IMAGE STATUS (${validProducts.length}) ---`);
  validProducts.forEach(p => console.log(`  ✓ [${p.brand}] ${p.id} -> ${p.path}`));

  console.log(`\n--- PRODUCTS MARKED AS PENDING (${pendingProducts.length}) ---`);
  pendingProducts.forEach(p => console.log(`  ⏳ [${p.brand}] ${p.id} (${p.name}) -> ${p.path} [${p.reason}]`));

  if (brokenPaths.length > 0) {
    console.log(`\n--- BROKEN / MISSING IMAGE PATHS (${brokenPaths.length}) ---`);
    brokenPaths.forEach(p => console.log(`  ✗ [${p.brand}] ${p.id} -> ${p.path}`));
  }
}

runAudit().catch(console.error);
