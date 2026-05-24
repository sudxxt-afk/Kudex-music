const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(html) {
    // Удаляем скрипты и стили
    let jsx = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    jsx = jsx.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    
    // Извлекаем только содержимое body, если оно есть
    const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (bodyMatch) {
        jsx = bodyMatch[1];
    }
    
    // Заменяем class на className
    jsx = jsx.replace(/class=/g, 'className=');
    
    // Заменяем for на htmlFor
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // Закрываем пустые теги
    const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
    voidTags.forEach(tag => {
        const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    });
    
    // Преобразуем атрибуты SVG в camelCase
    const svgAttrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'stroke-miterlimit'];
    svgAttrs.forEach(attr => {
        const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
        const regex = new RegExp(`${attr}=`, 'gi');
        jsx = jsx.replace(regex, `${camel}=`);
    });
    
    // Обработка инлайн стилей (очень базовая)
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        if (!p1.trim()) return '';
        // Временное решение: убрать инлайн стили, чтобы избежать ошибок парсинга JSX, 
        // кроме font-variation-settings, который мы заменим на обычный класс или пропустим.
        // Для простоты удалим style
        return ''; 
    });
    
    // Обработка комментариев (<!-- --> -> {/* */})
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    return jsx;
}

const inputDir = path.join(__dirname, 'frontend', 'src', 'new_screens');
const outputDir = path.join(__dirname, 'frontend', 'src', 'jsx_screens');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
    if (file.endsWith('.html')) {
        const html = fs.readFileSync(path.join(inputDir, file), 'utf8');
        const jsx = convertHtmlToJsx(html);
        fs.writeFileSync(path.join(outputDir, file.replace('.html', '.jsx')), jsx);
        console.log(`Converted ${file}`);
    }
});
