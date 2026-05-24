const fs = require('fs');
const path = require('path');

const fixMain = () => {
    const p = path.join(__dirname, 'frontend', 'src', 'main.tsx');
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace('launchParams.initDataRaw', 'String(launchParams.initDataRaw)');
    fs.writeFileSync(p, content);
};

const fixExplore = () => {
    const p = path.join(__dirname, 'frontend', 'src', 'pages', 'Explore.tsx');
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/onclick=/gi, 'onClick=');
    fs.writeFileSync(p, content);
};

const fixPomodoro = () => {
    const p = path.join(__dirname, 'frontend', 'src', 'pages', 'Pomodoro.tsx');
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/onclick=/gi, 'onClick=');
    fs.writeFileSync(p, content);
};

const fixSettings = () => {
    const p = path.join(__dirname, 'frontend', 'src', 'pages', 'Settings.tsx');
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/checked="checked"/g, 'defaultChecked={true}');
    fs.writeFileSync(p, content);
};

try { fixMain(); } catch (e) { console.error(e); }
try { fixExplore(); } catch (e) { console.error(e); }
try { fixPomodoro(); } catch (e) { console.error(e); }
try { fixSettings(); } catch (e) { console.error(e); }

console.log('Fixed typescript issues.');
