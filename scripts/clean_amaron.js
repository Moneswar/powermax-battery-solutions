import sharp from 'sharp';

async function floodFillClean() {
  const inputPath = 'e:/projects for clients/powermax-battery-solutions/public/images/products-original-backup/amaron/amaron-hilife-pro-din55.webp';
  const outputPath = 'e:/projects for clients/powermax-battery-solutions/public/images/products/amaron/amaron-hilife-pro-din55.webp';

  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // 2D visited map
  const visited = new Uint8Array(width * height);
  const isBg = new Uint8Array(width * height);

  // Helper to check if a pixel is background (white, off-white, light grey, or very light watermark)
  function isBackgroundPixel(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // Check brightness and color
    // Background is near white or light grey shadow
    const brightness = (r + g + b) / 3;
    
    // Pure or near white background
    if (r > 220 && g > 220 && b > 220) return true;
    if (brightness > 215) return true;
    
    // Bottom floor shadow / watermark on white
    if (brightness > 160 && Math.abs(r - g) < 25 && Math.abs(g - b) < 25 && Math.abs(r - b) < 25) {
      // It is a neutral grey/white shadow
      return true;
    }
    
    // Light greenish watermark outside the battery (very high brightness)
    if (brightness > 200) return true;

    return false;
  }

  // Queue for flood fill from borders
  const queue = [];

  // Seed with all border pixels
  for (let x = 0; x < width; x++) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
  }
  for (let y = 0; y < height; y++) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
  }

  let head = 0;
  while (head < queue.length) {
    const [x, y] = queue[head++];
    const pos = y * width + x;

    if (visited[pos]) continue;
    visited[pos] = 1;

    if (isBackgroundPixel(x, y)) {
      isBg[pos] = 1;

      // Check 4 neighbours
      if (x > 0 && !visited[pos - 1]) queue.push([x - 1, y]);
      if (x < width - 1 && !visited[pos + 1]) queue.push([x + 1, y]);
      if (y > 0 && !visited[pos - width]) queue.push([x, y - 1]);
      if (y < height - 1 && !visited[pos + width]) queue.push([x, y + 1]);
    }
  }

  // Also clean the bottom shadow area specifically
  for (let y = Math.floor(height * 0.84); y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const brightness = (r + g + b) / 3;
      // Below the green base of the battery
      if (x < width * 0.28 || x > width * 0.92 || brightness > 150) {
        isBg[y * width + x] = 1;
      }
    }
  }

  // Build RGBA output
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;

    if (isBg[i]) {
      rgba[dstIdx] = 0;
      rgba[dstIdx + 1] = 0;
      rgba[dstIdx + 2] = 0;
      rgba[dstIdx + 3] = 0;
    } else {
      rgba[dstIdx] = data[srcIdx];
      rgba[dstIdx + 1] = data[srcIdx + 1];
      rgba[dstIdx + 2] = data[srcIdx + 2];
      rgba[dstIdx + 3] = channels === 4 ? data[srcIdx + 3] : 255;
    }
  }

  const cleaned = sharp(rgba, {
    raw: { width, height, channels: 4 }
  });

  await cleaned.trim().webp({ quality: 95, alphaQuality: 100 }).toFile(outputPath);
  console.log('Saved perfect floodfill Amaron image!');
}

floodFillClean().catch(console.error);
