import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images/optimized';

const OPTIMIZATIONS = {
  'hero-bg': { width: 1920, quality: 80 },
  'conley-monk': { width: 400, quality: 80 },
  'american-legion': { width: 800, quality: 80 },
  'tuskegee-airmen': { width: 800, quality: 80 },
};

async function optimizeImages() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });

    const files = await readdir(INPUT_DIR);
    const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

    console.log('Optimizing images...\n');

    for (const file of imageFiles) {
      const inputPath = join(INPUT_DIR, file);
      const stats = await stat(inputPath);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

      // Skip small files and the optimized directory
      if (stats.size < 100000) continue;

      const nameWithoutExt = basename(file, extname(file));
      const config = Object.entries(OPTIMIZATIONS).find(([key]) =>
        nameWithoutExt.toLowerCase().includes(key.toLowerCase())
      );

      const width = config ? config[1].width : 1200;
      const quality = config ? config[1].quality : 80;

      // Create WebP version
      const outputPath = join(OUTPUT_DIR, `${nameWithoutExt}.webp`);

      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality })
        .toFile(outputPath);

      const outputStats = await stat(outputPath);
      const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - outputStats.size / stats.size) * 100).toFixed(0);

      console.log(`${file}`);
      console.log(`  ${sizeMB}MB -> ${outputSizeMB}MB (${savings}% smaller)`);
      console.log('');
    }

    console.log('Done! Optimized images saved to public/images/optimized/');

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

optimizeImages();
