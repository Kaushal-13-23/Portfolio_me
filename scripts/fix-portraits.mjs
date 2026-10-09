import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// pic.png is 1024x1024
// Kaushal's figure: x from 123 to 888, y from 97 to 1023. Center X = 505.
// 1. Crop tight portrait (approx 4:5 ratio) for Hero, Opening, and About
const portraitCrop = await sharp('pic.png')
  .extract({ left: 110, top: 70, width: 790, height: 954 })
  .toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(portraitCrop)
    .resize({ width: w })
    .webp({ quality: 94, alphaQuality: 96 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// 2. Crop square avatar focused on head & shoulders (y: 70 to 650, x: 215 to 795, size: 580x580)
const avatarCrop = await sharp('pic.png')
  .extract({ left: 215, top: 70, width: 580, height: 580 })
  .resize(320, 320)
  .webp({ quality: 94, alphaQuality: 96 })
  .toFile(`${OUT}/avatar-320.webp`);

// 3. Social share image (1200x630) with clean placement and NO "THE SERIES" text!
const ogPortrait = await sharp(portraitCrop)
  .resize({ height: 590 })
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
    { input: ogPortrait, top: 40, left: 680 },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="70" y="260" font-family="Impact, 'Arial Narrow', sans-serif" font-size="100" fill="#f4f1ec" letter-spacing="4">KAUSHAL</text>
        <text x="74" y="315" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="20" fill="#ff3d5a" letter-spacing="10">KUMAR SINGH</text>
        <text x="74" y="375" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="16" fill="#a7a6ad" letter-spacing="4">STUDENT LEADER • COMMUNITY BUILDER • EVENT COORDINATOR</text>
        <text x="74" y="415" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="15" fill="#e5132b" letter-spacing="2">PRESIDENCY UNIVERSITY, BENGALURU</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 92 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Fixed portraits, avatar-320.webp, and og-image.jpg successfully!');
