const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'frontend', 'src', 'jsx_screens');
const outputDir = path.join(__dirname, 'frontend', 'src', 'pages');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function extractMainContent(filePath) {
    if (!fs.existsSync(filePath)) return '<div className="p-8 text-on-surface">Content not found</div>';
    const html = fs.readFileSync(filePath, 'utf8');
    const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/i;
    const match = html.match(mainRegex);
    if (match) {
        // Убираем классы из main, так как мы будем использовать этот контент внутри нашего <main> в AppLayout
        return match[1];
    }
    // Если main нет, ищем section
    const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/ig;
    let sections = '';
    let secMatch;
    while ((secMatch = sectionRegex.exec(html)) !== null) {
        sections += `<section>${secMatch[1]}</section>\n`;
    }
    if (sections) return sections;
    return '<div className="p-8 text-on-surface">Parsed content goes here</div>';
}

function createPage(componentName, jsxContent) {
    const content = `import React from 'react';

export const ${componentName}: React.FC = () => {
  return (
    <>
      ${jsxContent}
    </>
  );
};
`;
    fs.writeFileSync(path.join(outputDir, `${componentName}.tsx`), content);
}

// Home
createPage('Home', extractMainContent(path.join(inputDir, 'stitch_Главная_Kudex_Fixed_DESKTOP.jsx')));

// Library
createPage('Library', extractMainContent(path.join(inputDir, 'stitch_Медиатека_Melodix_DESKTOP.jsx')));

// Explore
createPage('Explore', extractMainContent(path.join(inputDir, 'stitch_Поиск_Kudex_Fixed_DESKTOP.jsx')));

// Integrations (We'll override components/IntegrationsView or create pages/Integrations)
createPage('Integrations', extractMainContent(path.join(inputDir, 'stitch_Интеграции_Kudex_Fixed_DESKTOP.jsx')));

// Pomodoro
createPage('Pomodoro', extractMainContent(path.join(inputDir, 'stitch_Таймер_Pomodoro_Kudex_DESKTOP.jsx')));

// Settings
createPage('Settings', extractMainContent(path.join(inputDir, 'stitch_Настройки_Kudex_Complete_DESKTOP.jsx')));

// Login
const loginJsx = fs.readFileSync(path.join(inputDir, 'stitch_Login_Kudex_Clean_DESKTOP.jsx'), 'utf8');
createPage('Login', loginJsx); // Login is the whole page, we might need to adjust this.

console.log('Pages built successfully!');
