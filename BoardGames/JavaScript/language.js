import languageLib from './languageLib.js';

const userLanguage = document.getElementById('selector');
const searchInput = document.querySelector('.search');

let defLang = 'ukr';

// Отримання вибраної мови з localStorage
userLanguage.value = localStorage.getItem('selector');

// Перевіряємо чи була зміна мови до цього
if (!userLanguage.value) {
    userLanguage.value = defLang;
} else {
    defLang = userLanguage.value;
}

// Оновлення мови на сторінці
function updatePageLanguage() {
    const elementsToUpd = document.querySelectorAll('[data-lang-key]');
    elementsToUpd.forEach(el => {
            // Отримання ключа тексту для перекладу
            const langKey = el.getAttribute('data-lang-key');
            // Отримання перекладу за ключем langKey з відповідної бібліотеки мов

            const translatedText = languageLib[userLanguage.value][langKey] || '';

            el.textContent = translatedText;
        })
        // Оновлення плейсхолдера для поля пошуку
    const placeholderKey = searchInput.getAttribute('data-lang-key');
    const translatedPlaceholder = languageLib[userLanguage.value][placeholderKey] || '';
    searchInput.setAttribute('placeholder', translatedPlaceholder);
}
updatePageLanguage();

// Обробник події зміни мови
userLanguage.onchange = () => {
    // Збереження вибраної мови в localStorage
    localStorage.setItem('selector', userLanguage.value);
    // Виклик функції для оновлення тексту на сторінці
    updatePageLanguage();
}



export default defLang;