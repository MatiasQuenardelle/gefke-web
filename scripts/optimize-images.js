const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const MAX_SIZE_BYTES = 200 * 1024; // 200KB target

// Image files to optimize
const imagesToOptimize = [
  'CristianGefke.png',
  'CristianGefke.jpeg',
  'handshake.jpg',
  'lumipop.png',
  'obsidian.png',
  'obsidian1.png',
  'premier.png',
  'services/move.jpg',
  'services/business.jpg',
  'services/housing.jpg',
  'services/family.jpg',
];

async function getFileSizeKB(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024).toFixed(1);
  } catch {
    return 'N/A';
  }
}

async function optimizeImage(inputPath, outputPath, format = 'webp') {
  const inputBuffer = fs.readFileSync(inputPath);
  let quality = 85;
  let outputBuffer;

  // Iteratively reduce quality until under target size
  while (quality >= 20) {
    if (format === 'webp') {
      outputBuffer = await sharp(inputBuffer)
        .webp({ quality, effort: 6 })
        .toBuffer();
    } else if (format === 'jpeg') {
      outputBuffer = await sharp(inputBuffer)
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();
    } else if (format === 'png') {
      outputBuffer = await sharp(inputBuffer)
        .png({ quality, compressionLevel: 9 })
        .toBuffer();
    }

    if (outputBuffer.length <= MAX_SIZE_BYTES) {
      break;
    }
    quality -= 5;
  }

  // If still too large, resize the image
  if (outputBuffer.length > MAX_SIZE_BYTES) {
    const metadata = await sharp(inputBuffer).metadata();
    let scale = 0.9;

    while (outputBuffer.length > MAX_SIZE_BYTES && scale >= 0.3) {
      const newWidth = Math.round(metadata.width * scale);

      if (format === 'webp') {
        outputBuffer = await sharp(inputBuffer)
          .resize(newWidth)
          .webp({ quality: Math.max(quality, 60), effort: 6 })
          .toBuffer();
      } else if (format === 'jpeg') {
        outputBuffer = await sharp(inputBuffer)
          .resize(newWidth)
          .jpeg({ quality: Math.max(quality, 60), mozjpeg: true })
          .toBuffer();
      }

      scale -= 0.1;
    }
  }

  fs.writeFileSync(outputPath, outputBuffer);
  return outputBuffer.length;
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('============================\n');
  console.log(`Target: All images under ${MAX_SIZE_BYTES / 1024}KB\n`);

  const results = [];

  for (const imagePath of imagesToOptimize) {
    const fullInputPath = path.join(IMAGES_DIR, imagePath);

    if (!fs.existsSync(fullInputPath)) {
      console.log(`⚠️  Skipping ${imagePath} - file not found`);
      continue;
    }

    const ext = path.extname(imagePath).toLowerCase();
    const baseName = path.basename(imagePath, ext);
    const dirName = path.dirname(imagePath);
    const outputDir = path.join(IMAGES_DIR, dirName);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const originalSize = await getFileSizeKB(fullInputPath);
    console.log(`Processing: ${imagePath} (${originalSize}KB)`);

    // Create WebP version
    const webpOutputPath = path.join(outputDir, `${baseName}.webp`);
    const webpSize = await optimizeImage(fullInputPath, webpOutputPath, 'webp');
    const webpSizeKB = (webpSize / 1024).toFixed(1);

    // Also create optimized version of original format for fallback
    let fallbackSize = originalSize;
    if (ext === '.jpg' || ext === '.jpeg') {
      const jpegOutputPath = path.join(outputDir, `${baseName}-optimized.jpg`);
      const jpegSize = await optimizeImage(fullInputPath, jpegOutputPath, 'jpeg');
      fallbackSize = (jpegSize / 1024).toFixed(1);
      // Replace original with optimized version
      fs.copyFileSync(jpegOutputPath, fullInputPath);
      fs.unlinkSync(jpegOutputPath);
    } else if (ext === '.png') {
      // For PNG, we'll use WebP as primary and keep original as fallback
      // But also create an optimized PNG if it's too large
      if (parseFloat(originalSize) > 200) {
        const pngBuffer = await sharp(fs.readFileSync(fullInputPath))
          .resize({ width: 800, withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9 })
          .toBuffer();

        if (pngBuffer.length < fs.statSync(fullInputPath).size) {
          fs.writeFileSync(fullInputPath, pngBuffer);
          fallbackSize = (pngBuffer.length / 1024).toFixed(1);
        }
      }
    }

    const savings = ((1 - webpSize / (parseFloat(originalSize) * 1024)) * 100).toFixed(1);

    results.push({
      file: imagePath,
      original: originalSize,
      webp: webpSizeKB,
      savings: savings,
    });

    console.log(`  ✅ WebP: ${webpSizeKB}KB (${savings}% savings)`);
    console.log(`  📁 Fallback: ${fallbackSize}KB\n`);
  }

  console.log('\n📊 Summary');
  console.log('==========');
  console.log('\nFile                          | Original | WebP    | Savings');
  console.log('------------------------------|----------|---------|--------');

  for (const r of results) {
    const fileName = r.file.padEnd(29);
    const original = `${r.original}KB`.padEnd(8);
    const webp = `${r.webp}KB`.padEnd(7);
    console.log(`${fileName} | ${original} | ${webp} | ${r.savings}%`);
  }

  // Verify all files are under 200KB
  console.log('\n\n✅ Verification - WebP files under 200KB:');
  let allUnder200 = true;
  for (const imagePath of imagesToOptimize) {
    const ext = path.extname(imagePath);
    const baseName = path.basename(imagePath, ext);
    const dirName = path.dirname(imagePath);
    const webpPath = path.join(IMAGES_DIR, dirName, `${baseName}.webp`);

    if (fs.existsSync(webpPath)) {
      const size = await getFileSizeKB(webpPath);
      const status = parseFloat(size) <= 200 ? '✅' : '❌';
      if (parseFloat(size) > 200) allUnder200 = false;
      console.log(`  ${status} ${baseName}.webp: ${size}KB`);
    }
  }

  if (allUnder200) {
    console.log('\n🎉 All WebP images are under 200KB!');
  } else {
    console.log('\n⚠️  Some images are still over 200KB - may need manual review');
  }
}

main().catch(console.error);
