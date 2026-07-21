/**
 * Regenerate web-optimized images from the untouched originals in
 * ./source-images into client/public/images as high-quality WebP.
 *
 * Sizes are ~2x the on-screen display size so they stay crisp on Retina
 * screens while WebP keeps the file size small. Re-runnable: `npm run optimize-images`.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Self-contained sources live inside this project so the whole folder is portable.
const ORIG = path.join(ROOT, "source-images", "brand-photos");
const GEN = path.join(ROOT, "source-images", "ai-campaign");
const OUT = path.join(ROOT, "client", "public", "images");

fs.mkdirSync(OUT, { recursive: true });

const WEBP = { quality: 82, effort: 5 };

// [sourceFile, sourceDir, outputBasename, maxWidth]
const JOBS = [
  // Full-bleed background scenes (up to ~2x on large/Retina screens)
  ["gen-hero-branded.png", GEN, "gen-hero-branded", 2400],
  ["gen-hero-cinematic.png", GEN, "gen-hero-cinematic", 2400],
  ["gen-dark-texture.png", GEN, "gen-dark-texture", 2400],
  ["gen-atelier-craft.png", GEN, "gen-atelier-craft", 2400],
  // Section / editorial images
  ["gen-gifting-hands.png", GEN, "gen-gifting-hands", 1600],
  ["gen-festive-scene.png", GEN, "gen-festive-scene", 1600],
  ["gen-ribbon-detail.png", GEN, "gen-ribbon-detail", 1600],
  ["gen-occasions-flatlay.png", GEN, "gen-occasions-flatlay", 1600],
  ["gen-vitrine.png", GEN, "gen-vitrine", 1600],
  ["gen-branded-bottle-hero.png", GEN, "gen-branded-bottle-hero", 1600],
  ["gen-branded-unboxing.png", GEN, "gen-branded-unboxing", 1600],
  ["gen-branded-ritual-table.png", GEN, "gen-branded-ritual-table", 1600],
  // Brand hero photos + story
  ["hero-1.jpg", ORIG, "hero-1", 2000],
  ["hero-2.jpg", ORIG, "hero-2", 2000],
  ["hero-3.jpg", ORIG, "hero-3", 2000],
  ["story-craft.jpg", ORIG, "story-craft", 2000],
  // Product cards (~720px display -> 2x = ~1440)
  ["noor.jpg", ORIG, "noor", 1440],
  ["neelam.jpg", ORIG, "neelam", 1440],
  ["triveni.jpg", ORIG, "triveni", 1440],
  ["tri-rasa.jpg", ORIG, "tri-rasa", 1440],
  ["chaar_ratna.jpg", ORIG, "chaar_ratna", 1600],
  // Refill cards (small)
  ["refill_saffron_rose.jpg", ORIG, "refill_saffron_rose", 1000],
  ["refill_himalayan_jasmine.jpg", ORIG, "refill_himalayan_jasmine", 1000],
  ["refill_royal_blue_oolong.jpg", ORIG, "refill_royal_blue_oolong", 1000],
  ["refill_midnight_vanilla_chai.jpg", ORIG, "refill_midnight_vanilla_chai", 1000],
];

async function run() {
  let total = 0;
  for (const [src, dir, base, width] of JOBS) {
    const input = path.join(dir, src);
    const output = path.join(OUT, `${base}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp(WEBP)
      .toFile(output);
    const kb = (fs.statSync(output).size / 1024).toFixed(0);
    total += fs.statSync(output).size;
    console.log(`  ${base}.webp  ${width}w  ${kb} KB`);
  }

  // Logo: crisp WebP with transparency for in-app use + small PNG for the favicon.
  await sharp(path.join(ORIG, "logo.png"))
    .resize({ width: 512, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6 })
    .toFile(path.join(OUT, "logo.webp"));
  await sharp(path.join(ORIG, "logo.png"))
    .resize({ width: 256, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, "logo.png"));

  // Dedicated social share image (JPEG for maximum scraper compatibility).
  await sharp(path.join(GEN, "gen-hero-branded.png"))
    .resize({ width: 1200, height: 630, fit: "cover" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(path.join(OUT, "og-image.jpg"));

  console.log(`\nDone. ${JOBS.length} WebP images, total ${(total / 1024 / 1024).toFixed(1)} MB (+ logo + og-image).`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
