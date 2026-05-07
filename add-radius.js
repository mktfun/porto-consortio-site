import sharp from 'sharp';

async function main() {
  const image = sharp('public/favicon.jpeg');
  const metadata = await image.metadata();
  
  const w = metadata.width;
  const h = metadata.height;
  const r = 40; // 40px radius
  
  const rect = Buffer.from(
    `<svg><rect x="0" y="0" width="${w}" height="${h}" rx="${r}" ry="${r}" /></svg>`
  );
  
  await image
    .composite([{ input: rect, blend: 'dest-in' }])
    .png()
    .toFile('public/favicon.png');
}
main().catch(console.error);
