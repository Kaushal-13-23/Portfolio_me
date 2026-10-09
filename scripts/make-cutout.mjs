import sharp from 'sharp';

const inputPath = 'C:/Users/hp/.gemini/antigravity-ide/brain/f9123658-b888-4ee9-bf10-8b7d6eb93af8/kaushal_greenscreen_1791575885670.jpg';

const image = sharp(inputPath);
const { width, height } = await image.metadata();

const raw = await image.removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);

for (let i = 0; i < width * height; i++) {
  const r = raw[i * 3];
  const g = raw[i * 3 + 1];
  const b = raw[i * 3 + 2];

  const maxRB = Math.max(r, b);
  const greenDominance = g - maxRB;

  let alpha = 255;
  let outR = r;
  let outG = g;
  let outB = b;

  if (greenDominance > 24) {
    // Solid green screen background
    alpha = 0;
  } else if (greenDominance > 6) {
    // Transition edge: calculate feathered alpha
    const factor = (greenDominance - 6) / 18; // 0 to 1
    alpha = Math.round(255 * (1 - factor));
    // Spill suppression: cap green to max(r, b)
    outG = maxRB;
  } else if (g > maxRB) {
    // Mild spill on edge hair / collar
    outG = Math.round((g + maxRB) / 2);
  }

  rgba[i * 4] = outR;
  rgba[i * 4 + 1] = outG;
  rgba[i * 4 + 2] = outB;
  rgba[i * 4 + 3] = alpha;
}

await sharp(rgba, { raw: { width, height, channels: 4 } })
  .png()
  .toFile('pic.png');

console.log('Refined cutout saved to pic.png!');
