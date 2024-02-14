let english = true;

const locales = ["en-GB","ar-SA","zh-CN","de-DE","es-ES","fr-FR","hi-IN","it-IT","in-ID","ja-JP","ko-KR","nl-NL","no-NO","pl-PL","pt-BR","sv-SE","fi-FI","th-TH","tr-TR","uk-UA","vi-VN","ru-RU","he-IL"];

function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
       ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
    : "";
}

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
  const intlLocale = new Intl.Locale(locale);
  const langName = new Intl.DisplayNames([locale], {
    type: "language",
  }).of(intlLocale.language);

  dropdownContent.innerHTML = "";

  const otherLocales = locales.filter((loc) => loc !== locale);
  otherLocales.forEach((otherLocale) => {
    const otherIntlLocale = new Intl.Locale(otherLocale);
    const otherLangName = new Intl.DisplayNames([otherLocale], {
      type: "language",
    }).of(otherIntlLocale.language);

    const listEl = document.createElement("li");
    listEl.innerHTML = `<span class="lang-name">${otherLangName}</span><img src="${getFlagSrc(
      otherIntlLocale.region
    )}" />`;
    listEl.value = otherLocale;
    listEl.addEventListener("mousedown", function () {
      setSelectedLocale(otherLocale);
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(
    intlLocale.region
  )}" /><span class="lang-name">${langName}</span><span class="arrow-down"></span>`;
}

setSelectedLocale(locales[0]);
const browserLang = new Intl.Locale(navigator.language).language;
for (const locale of locales) {
  const localeLang = new Intl.Locale(locale).language;
  if (localeLang === browserLang) {
    setSelectedLocale(locale);
  }
}

// Función para cambiar el idioma
function changeLanguage(value) {
    // Obtener todos los elementos con clase 'english' y 'spanish'
    // const englishElements = document.querySelectorAll('.english');
    // const spanishElements = document.querySelectorAll('.spanish');

    // // Alternar la visibilidad de los elementos
    // englishElements.forEach(element => {
    //     element.classList.toggle('hidden');
    // });

    // spanishElements.forEach(element => {
    //     element.classList.toggle('hidden');
    // });

    // const languageToggle = document.getElementById('language-selector');
    // const currentLanguage = languageToggle.textContent.trim();
    // const newLanguage = currentLanguage === 'Español' ? 'English' : 'Español';
    // languageToggle.textContent = newLanguage;

    // english = !english;
}

// Agregar evento de clic al botón de cambio de idioma
document.getElementById('language-selector').addEventListener('click', changeLanguage);