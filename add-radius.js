const Jimp = require('jimp');

async function main() {
  const image = await Jimp.read('public/favicon.jpeg');
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  const radius = 40;
  
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let isOutside = false;
      
      // Top left
      if (x < radius && y < radius) {
        if (Math.pow(x - radius, 2) + Math.pow(y - radius, 2) > Math.pow(radius, 2)) isOutside = true;
      }
      // Top right
      else if (x >= w - radius && y < radius) {
        if (Math.pow(x - (w - radius) + 1, 2) + Math.pow(y - radius, 2) > Math.pow(radius, 2)) isOutside = true;
      }
      // Bottom left
      else if (x < radius && y >= h - radius) {
        if (Math.pow(x - radius, 2) + Math.pow(y - (h - radius) + 1, 2) > Math.pow(radius, 2)) isOutside = true;
      }
      // Bottom right
      else if (x >= w - radius && y >= h - radius) {
        if (Math.pow(x - (w - radius) + 1, 2) + Math.pow(y - (h - radius) + 1, 2) > Math.pow(radius, 2)) isOutside = true;
      }
      
      if (isOutside) {
        image.setPixelColor(0x00000000, x, y); // transparent
      }
    }
  }
  
  await image.writeAsync('public/favicon.png');
}
main();
