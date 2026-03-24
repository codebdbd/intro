/**
 * Aite Ecosystem: Global Logic
 * Features: Crypto Copy, Language Routing, UI Interactivity
 */

// 1. Утилита копирования в буфер обмена
async function copy(text, element) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Визуальный отклик (используем классы из style.css)
        const trigger = element.querySelector('.copy-trigger');
        const originalText = trigger.innerText;
        
        element.classList.add('active');
        trigger.innerText = 'COPIED'; 
        
        setTimeout(() => {
            element.classList.remove('active');
            trigger.innerText = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

// 2. Переключатель языков (Маршрутизация по папкам)
function setLanguage(langCode) {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    // Ищем, в какой языковой папке мы сейчас (en, ru или ua)
    const langIndex = pathParts.findIndex(part => ['en', 'ru', 'ua'].includes(part));
    
    if (langIndex !== -1) {
        // Меняем только языковой сегмент в пути
        pathParts[langIndex] = langCode;
        window.location.pathname = pathParts.join('/');
    } else {
        // Если мы в корне или путь необычный — просто редирект в папку
        window.location.href = '/' + langCode + '/';
    }
}

// 3. Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aite Ecosystem: System Online');
    // Здесь можно добавить общие анимации или проверку состояния системы
});