const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
const fileContent = fs.readFileSync(productsFilePath, 'utf8');

// Regex for JSON-like properties inside products.ts
const blockRegex = /{\s*"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"brand":\s*"([^"]+)"[\s\S]*?"modelCode":\s*"([^"]*)"[\s\S]*?"image":\s*"([^"]+)"/g;

const products = [];
let match;
while ((match = blockRegex.exec(fileContent)) !== null) {
  products.push({
    id: match[1],
    name: match[2],
    brand: match[3],
    modelCode: match[4],
    image: match[5],
  });
}

console.log(`Total parsed products: ${products.length}`);

const publicDir = path.join(__dirname, '..', 'public');
let existsCount = 0;
let missingCount = 0;
const brandCounts = {};
const missingList = [];

const auditDetails = products.map((p, idx) => {
  brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1;
  const relPath = p.image.startsWith('/') ? p.image.slice(1) : p.image;
  const fullPath = path.join(publicDir, relPath);
  const exists = fs.existsSync(fullPath);
  if (exists) {
    existsCount++;
  } else {
    missingCount++;
    missingList.push({ id: p.id, brand: p.brand, name: p.name, image: p.image, path: fullPath });
  }

  return {
    index: idx + 1,
    id: p.id,
    brand: p.brand,
    name: p.name,
    image: p.image,
    existsOnDisk: exists,
  };
});

console.log('Brand breakdown:', brandCounts);
console.log(`Images existing on disk: ${existsCount}`);
console.log(`Images missing on disk: ${missingCount}`);
if (missingList.length > 0) {
  console.log('Missing images sample:', missingList.slice(0, 5));
}

fs.writeFileSync(
  path.join(__dirname, '..', 'audit_report.json'),
  JSON.stringify({ total: products.length, brandCounts, existsCount, missingCount, missingList, products: auditDetails }, null, 2)
);
