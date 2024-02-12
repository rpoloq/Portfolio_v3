let english = true;

// Función para cambiar el idioma
function toggleLanguage() {
    // Obtener todos los elementos con clase 'english' y 'spanish'
    const englishElements = document.querySelectorAll('.english');
    const spanishElements = document.querySelectorAll('.spanish');

    // Alternar la visibilidad de los elementos
    englishElements.forEach(element => {
        element.classList.toggle('hidden');
    });

    spanishElements.forEach(element => {
        element.classList.toggle('hidden');
    });

    // Cambiar el texto del botón de idioma
    const languageToggle = document.getElementById('language-toggle');
    const currentLanguage = languageToggle.textContent.trim();
    const newLanguage = currentLanguage === 'Español' ? 'English' : 'Español';
    languageToggle.textContent = newLanguage;

    english = !english;
}

// Agregar evento de clic al botón de cambio de idioma
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);