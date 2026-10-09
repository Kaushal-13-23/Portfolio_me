import sharp from 'sharp';
import { mkdirSync, copyFileSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const srcImage = 'C:/Users/hp/.gemini/antigravity-ide/brain/f9123658-b888-4ee9-bf10-8b7d6eb93af8/kaushal_portrait_1791553537337.jpg';

// Save source photo
copyFileSync(srcImage, 'pic1.jpeg');

// Generate WebP portraits at different widths
for (const w of [1100, 720, 420]) {
  await sharp(srcImage)
    .resize({ width: w })
    .webp({ quality: 90 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Generate social share image (1200x630) on a dark cinematic backdrop
const portrait = await sharp(srcImage)
  .resize({ height: 580 })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#07070a',
  },
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="75%" cy="45%" r="48%">
            <stop offset="0%" stop-color="#e5132b" stop-opacity="0.5"/>
            <stop offset="60%" stop-color="#b81d24" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#07070a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="#07070a"/>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, top: 25, left: 700 },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="70" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="110" fill="#f4f1ec" letter-spacing="4">KAUSHAL</text>
        <text x="74" y="325" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
        <text x="74" y="380" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="16" fill="#a7a6ad" letter-spacing="4">STUDENT LEADER • COMMUNITY BUILDER • EVENT COORDINATOR</text>
        <text x="74" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="15" fill="#e5132b" letter-spacing="2">PRESIDENCY UNIVERSITY, BENGALURU</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Kaushal portraits and OG image generated successfully!');
