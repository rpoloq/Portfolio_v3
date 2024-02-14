// const locales = ["en-GB","ar-SA","zh-CN","de-DE","es-ES","fr-FR","hi-IN","it-IT","in-ID","ja-JP","ko-KR","nl-NL","no-NO","pl-PL","pt-BR","sv-SE","fi-FI","th-TH","tr-TR","uk-UA","vi-VN","ru-RU","he-IL"];
const locales = ["en-GB","es-ES"];

const localeToLanguage = {
  "en-GB": "english",
  "es-ES": "spanish",
  // "ar-SA": "Arabic",
  // "zh-CN": "Chinese (Simplified)",
  // "de-DE": "German",
};

const LanguageEnum = {
  ENGLISH: {name: 'english', locale:'en-GB' },
  SPANISH: {name: 'spanish', locale:'es-ES' },
};

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");
let currentLanguage = LanguageEnum.SPANISH;

function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
       ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
    : "";
}

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
      changeLanguage(otherLocale)
    });
    dropdownContent.appendChild(listEl);
  });

  dropdownBtn.innerHTML = `<img src="${getFlagSrc(
    intlLocale.region
  )}" /><span class="lang-name">${langName}</span><span class="arrow-down"></span>`;
}

setSelectedLocale(locales[0]);
changeLanguage(locales[0])
const browserLang = new Intl.Locale(navigator.language).language;
for (const locale of locales) {
  const localeLang = new Intl.Locale(locale).language;
  if (localeLang === browserLang && localeLang !== currentLanguage.locale) {
    setSelectedLocale(locale);
    changeLanguage(locale)
  }
}

// Función para cambiar el idioma
function changeLanguage(locale) {
  
  if (locale === changeLanguage.locale) return;
  
  const elementsToHide = document.querySelectorAll(`.${currentLanguage.name}`);
  elementsToHide.forEach(element => {
      element.classList.add('hidden');
  });

  // Actualizar el idioma actual
  currentLanguage = (locale === LanguageEnum.ENGLISH.locale) ? LanguageEnum.ENGLISH : LanguageEnum.SPANISH;

  // Mostrar todos los elementos que corresponden al nuevo idioma
  const elementsToShow = document.querySelectorAll(`.${currentLanguage.name}`);
  elementsToShow.forEach(element => {
      element.classList.remove('hidden');
  });
}