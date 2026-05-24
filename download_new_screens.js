const fs = require('fs');
const https = require('https');
const path = require('path');

const screensFilePath = 'C:\\Users\\sudxx\\.gemini\\antigravity\\brain\\62a31479-e827-49a6-8b5d-1c88afb003ae\\.system_generated\\steps\\935\\output.txt';
const outputDir = path.join(__dirname, 'frontend', 'src', 'new_screens');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadScreens() {
  try {
    const content = fs.readFileSync(screensFilePath, 'utf8');
    const data = JSON.parse(content);
    
    if (!data.screens) {
      console.log('No screens found in JSON');
      return;
    }

    for (const screen of data.screens) {
      if (screen.htmlCode && screen.htmlCode.downloadUrl) {
        // Уберем недопустимые символы из названия
        const safeTitle = screen.title.replace(/[^a-zA-Z0-9а-яА-ЯёЁ\s\-]/g, '').trim().replace(/\s+/g, '_');
        const device = screen.deviceType || 'UNKNOWN';
        const fileName = `stitch_${safeTitle}_${device}.html`;
        const filePath = path.join(outputDir, fileName);
        
        console.log(`Downloading ${screen.title} to ${fileName}...`);
        
        await new Promise((resolve, reject) => {
          https.get(screen.htmlCode.downloadUrl, (res) => {
            let htmlData = '';
            res.on('data', chunk => htmlData += chunk);
            res.on('end', () => {
              fs.writeFileSync(filePath, htmlData);
              console.log(`Saved ${fileName}`);
              resolve();
            });
          }).on('error', reject);
        });
      }
    }
    console.log('All downloads completed.');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

downloadScreens();
