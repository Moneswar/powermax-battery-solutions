import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const IMAGES_TO_FETCH = [
  {
    url: 'https://amaron-prod-images.s3.ap-south-1.amazonaws.com/styles/product_detail_img_450x350/s3/inv-battery-front-image/Tubular%20Battery_Front%20side_2.jpg',
    out: 'public/images/products/amaron/amaron-current-cr150tt.webp',
    brand: 'amaron',
    isWhiteBg: true,
  },
  {
    url: 'https://www.exidecare.com/assets/ProductImages/home_invatubular_battery.jpg',
    out: 'public/images/products/exide/exide-invatubular-it500.webp',
    brand: 'exide',
    isWhiteBg: true,
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2022/4/UD/GO/UK/23959351/sf-sonic-mk1440-tz4-mobiker-battery-500x500.jpg',
    out: 'public/images/products/sf-sonic/sf-sonic-mobiker-tz9.webp',
    brand: 'sf-sonic',
    isWhiteBg: true,
  },
  {
    url: 'https://5.imimg.com/data5/GY/QT/YW/SELLER-2028164/sf-sonic-flash-start-car-battery-ffs0-fs1080-105d31l-r-85ah-500x500.png',
    out: 'public/images/products/sf-sonic/sf-sonic-flash-40b20l.webp',
    brand: 'sf-sonic',
    isWhiteBg: true,
  },
  {
    url: 'https://amaronquanta.com/wp-content/uploads/2022/03/Small-VRLA-Banner.jpg',
    out: 'public/images/products/amaron/amaron-quanta-12al065.webp',
    brand: 'amaron',
    isWhiteBg: false,
  },
];

async function removeWhiteBg(inputBuffer, threshold = 240) {
  const image = sharp(inputBuffer);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Simple corner flood-fill for transparent extraction
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBg(idx) {
    const r = data[idx * 4];
    const g = data[idx * 4 + 1];
    const b = data[idx * 4 + 2];
    return r >= threshold && g >= threshold && b >= threshold;
  }

  // Push 4 corners
  const corners = [0, width - 1, (height - 1) * width, (height - 1) * width + (width - 1)];
  for (const c of corners) {
    if (isBg(c) && !visited[c]) {
      visited[c] = 1;
      queue.push(c);
    }
  }

  while (queue.length > 0) {
    const idx = queue.pop();
    data[idx * 4 + 3] = 0; // Transparent

    const x = idx % width;
    const y = Math.floor(idx / width);

    const neighbors = [
      x > 0 ? idx - 1 : -1,
      x < width - 1 ? idx + 1 : -1,
      y > 0 ? idx - width : -1,
      y < height - 1 ? idx + width : -1,
    ];

    for (const n of neighbors) {
      if (n !== -1 && !visited[n] && isBg(n)) {
        visited[n] = 1;
        queue.push(n);
      }
    }
  }

  return sharp(data, { raw: { width, height, channels } }).trim();
}

async function processAll() {
  for (const item of IMAGES_TO_FETCH) {
    console.log(`Fetching ${item.url}...`);
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.error(`Failed to fetch ${item.url}: ${res.status}`);
        continue;
      }
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      let processed;
      if (item.isWhiteBg) {
        processed = await removeWhiteBg(buffer, 235);
      } else {
        processed = sharp(buffer).trim();
      }

      const outPath = path.join(rootDir, item.out);
      await processed
        .webp({ quality: 95, effort: 6 })
        .toFile(outPath);

      console.log(`Saved transparent image to ${outPath}`);
    } catch (err) {
      console.error(`Error processing ${item.url}:`, err);
    }
  }
}

processAll();
