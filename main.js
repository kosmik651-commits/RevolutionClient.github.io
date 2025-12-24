/**
 * REVOLUTION CLIENT - Main Logic
 */

function showTab(tabId) {
    // 1. Скрываем все секции
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none'; // Дополнительная страховка
    });
    
    // 2. Убираем подсветку у всех ссылок
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Показываем нужную секцию
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
    }

    // 4. Подсвечиваем нажатую кнопку
    const targetLink = document.getElementById('link-' + tabId);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    
    // 5. Плавный скролл вверх
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Проверка работы скрипта при загрузке
document.addEventListener('DOMContentLoaded', () => {
    console.log("Revolution Client Script Ready.");
});