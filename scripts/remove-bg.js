const Jimp = require('jimp');
const path = require('path');

async function removeBackground() {
  const inputPath = path.join(process.cwd(), 'public/logo-brush.png');
  const outputPath = path.join(process.cwd(), 'public/logo-brush.png'); // Overwrite with transparent version
  
  console.log('Reading:', inputPath);
  try {
    const image = await Jimp.read(inputPath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // Calculate brightness
      const brightness = Math.max(red, green, blue);
      
      // Threshold: if pixel is very dark, make it transparent
      if (brightness < 30) {
        this.bitmap.data[idx + 3] = 0;
      } else {
        // Transparent based on brightness for smooth brush edges
        this.bitmap.data[idx + 3] = brightness;
        // Make sure it stays white
        this.bitmap.data[idx + 0] = 255;
        this.bitmap.data[idx + 1] = 255;
        this.bitmap.data[idx + 2] = 255;
      }
    });
    
    await image.writeAsync(outputPath);
    console.log('Success! Saved to:', outputPath);
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

removeBackground();
