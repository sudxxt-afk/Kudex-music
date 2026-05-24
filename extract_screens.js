const fs = require('fs');
const https = require('https');
const path = require('path');

const outputFiles = [
  { name: 'Sidebar', path: '../../brain/62a31479-e827-49a6-8b5d-1c88afb003ae/.system_generated/steps/659/output.txt' },
  { name: 'PlayerBar', path: '../../brain/62a31479-e827-49a6-8b5d-1c88afb003ae/.system_generated/steps/666/output.txt' },
  { name: 'Home', path: '../../brain/62a31479-e827-49a6-8b5d-1c88afb003ae/.system_generated/steps/667/output.txt' },
  { name: 'Library', path: '../../brain/62a31479-e827-49a6-8b5d-1c88afb003ae/.system_generated/steps/668/output.txt' },
  { name: 'Settings', path: '../../brain/62a31479-e827-49a6-8b5d-1c88afb003ae/.system_generated/steps/669/output.txt' },
  { name: 'Login', path: '../../brain/62a31479-e827-49a6-8b5d-1c88afb003ae/.system_generated/steps/670/output.txt' }
];

async function extract() {
  for (const file of outputFiles) {
    try {
      const content = fs.readFileSync(path.resolve(__dirname, file.path), 'utf8');
      const data = JSON.parse(content);
      
      let htmlUrl = '';
      if (data.outputComponents) {
        for (const comp of data.outputComponents) {
          if (comp.design && comp.design.screens && comp.design.screens.length > 0) {
            const screen = comp.design.screens[0];
            if (screen.htmlCode && screen.htmlCode.downloadUrl) {
              htmlUrl = screen.htmlCode.downloadUrl;
              break;
            }
          }
        }
      }
      
      if (htmlUrl) {
        console.log(`Downloading HTML for ${file.name}...`);
        await new Promise((resolve, reject) => {
          https.get(htmlUrl, (res) => {
            let htmlData = '';
            res.on('data', chunk => htmlData += chunk);
            res.on('end', () => {
              fs.writeFileSync(`frontend/src/stitch_${file.name}.html`, htmlData);
              console.log(`Saved frontend/src/stitch_${file.name}.html`);
              resolve();
            });
          }).on('error', reject);
        });
      } else {
        console.log(`No downloadUrl found for ${file.name}`);
      }
    } catch (err) {
      console.error(`Error processing ${file.name}:`, err.message);
    }
  }
}

extract();
