const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'farmer-mobile.png',
    width: 600,
    height: 600,
    text: 'Farmer using mobile app',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-avatar.png',
    width: 48,
    height: 48,
    text: 'AH',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-success.jpg',
    width: 600,
    height: 400,
    text: 'Success story',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-avatar-2.png',
    width: 48,
    height: 48,
    text: 'GW',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'impact-story.jpg',
    width: 600,
    height: 400,
    text: 'Community impact',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-1.jpg',
    width: 600,
    height: 400,
    text: 'John Kamau',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-2.jpg',
    width: 600,
    height: 400,
    text: 'Sarah Mwangi',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-3.jpg',
    width: 600,
    height: 400,
    text: 'David Ochieng',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-avatar-3.png',
    width: 48,
    height: 48,
    text: 'JK',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-avatar-4.png',
    width: 48,
    height: 48,
    text: 'SM',
    gradient: ['#22c55e', '#16a34a']
  },
  {
    name: 'farmer-avatar-5.png',
    width: 48,
    height: 48,
    text: 'DO',
    gradient: ['#22c55e', '#16a34a']
  }
];

async function generateImages() {
  const outputDir = path.join(__dirname, '../public/images');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const image of images) {
    const svg = `
      <svg width="${image.width}" height="${image.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${image.gradient[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${image.gradient[1]};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <circle cx="50%" cy="50%" r="40%" fill="white" opacity="0.1"/>
        <text x="50%" y="50%" font-family="Arial" font-size="${image.width > 100 ? '48' : '24'}" fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
          ${image.text}
        </text>
      </svg>
    `;

    const outputPath = path.join(outputDir, image.name);
    
    await sharp(Buffer.from(svg))
      .resize(image.width, image.height)
      .toFile(outputPath);
    
    console.log(`Generated ${image.name}`);
  }
}

generateImages().catch(console.error); 