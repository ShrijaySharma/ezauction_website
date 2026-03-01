import sharp from 'sharp';
import fs from 'fs';

async function testSharpMetadata() {
    try {
        // create a simple red image
        const redImg = await sharp({
            create: {
                width: 800,
                height: 1000,
                channels: 4,
                background: { r: 255, g: 0, b: 0, alpha: 1 } // red
            }
        })
            .png()
            .toBuffer();

        console.log('Original image created.');

        const webpBuffer = await sharp(redImg)
            .resize(800, 1000, { fit: 'cover' })
            .webp({ quality: 75 })
            .withMetadata(false) // strip metadata
            .toBuffer();

        fs.writeFileSync('test_red.webp', webpBuffer);
        console.log('WebP image saved as test_red.webp with size:', webpBuffer.length);
    } catch (err) {
        console.error('Error:', err);
    }
}

testSharpMetadata();
