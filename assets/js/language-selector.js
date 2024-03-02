// const locales = ["en-GB","ar-SA","zh-CN","de-DE","es-ES","fr-FR","hi-IN","it-IT","in-ID","ja-JP","ko-KR","nl-NL","no-NO","pl-PL","pt-BR","sv-SE","fi-FI","th-TH","tr-TR","uk-UA","vi-VN","ru-RU","he-IL"];
const locales = ["en-GB","es-ES"];
const allowedBrowserLocales = ["en","es"];
const localeToLanguage = {
  "en-GB": "english",
  "es-ES": "spanish",
  // "ar-SA": "Arabic",
  // "zh-CN": "Chinese (Simplified)",
  // "de-DE": "German",
};

const LanguageEnum = {
  ENGLISH: {name: 'english', locale:'en-GB', browserLocale:'en'},
  SPANISH: {name: 'spanish', locale:'es-ES', browserLocale:'es' },
};

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");
let currentLanguage;

function getFlagSrc(countryCode) {
  return /^[A-Z]{2}$/.test(countryCode)
       ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
    : "";
}

function updateProjectLinksLangs() {
  const links = document.querySelectorAll(".gallery a");
  const defaultLocale = currentLanguage.locale;

  links.forEach(link => {
    let url = link.href;

    if (url.includes("?")) {
      url = url.replace(/(lang=)[^\&]+/, `$1${defaultLocale}`);
    } else {
      url += `?lang=${defaultLocale}`;
    }

    link.href = url;
  });
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

function setDefaultLanguage() {
  let defaultLocale;

  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  if (langParam && locales.includes(langParam)) {
    defaultLocale = langParam;
  } else {
    const browserLang = new Intl.Locale(navigator.language).language;
    if (allowedBrowserLocales.includes(browserLang)) {
      defaultLocale = browserLang;
    } else {
      defaultLocale = locales[0];
    }
  }

  currentLanguage = Object.values(LanguageEnum).find(lang => (lang.locale === defaultLocale || lang.browserLocale === defaultLocale));
  setSelectedLocale(currentLanguage.locale);
  hideNonDefaultLanguageElements();
  updateProjectLinksLangs();
}

function hideNonDefaultLanguageElements() {
  const nonDefaultLanguageClasses = Object.values(LanguageEnum)
    .filter(lang => lang.locale !== currentLanguage.locale)
    .map(lang => lang.name);

  nonDefaultLanguageClasses.forEach(className => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
      element.classList.add('hidden');
    });
  });
}

function changeLanguage(locale) {
  
  if (locale === currentLanguage.locale) return;
  
  const elementsToHide = document.querySelectorAll(`.${currentLanguage.name}`);
  elementsToHide.forEach(element => {
      element.classList.add('hidden');
  });

  currentLanguage = (locale === LanguageEnum.ENGLISH.locale) ? LanguageEnum.ENGLISH : LanguageEnum.SPANISH;

  const elementsToShow = document.querySelectorAll(`.${currentLanguage.name}`);
  elementsToShow.forEach(element => {
      element.classList.remove('hidden');
  });

  updateProjectLinksLangs();
}

setDefaultLanguage();