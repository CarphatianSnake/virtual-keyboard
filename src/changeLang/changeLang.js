import renderKeyboard from "../keyboard/renderKeyboard.js";

function changeLang(e) {

  function getLanguage(e) {
    const { target, code } = e;

    if (target.dataset.lang) {
      return target.dataset.lang
    }
    if (target.parentElement.dataset.lang) {
      return target.parentElement.dataset.lang
    }
    if (code === "ShiftLeft" || code === "ControlLeft") {
      const lang = window.localStorage.getItem("lang");
      return lang === "en" ? "ua" : "en";
    }
  }

  const lang = getLanguage(e);

  if (lang) {
    window.localStorage.setItem("lang", lang);

    const languages = document.querySelectorAll(".lang__ico__container");

    languages.forEach((lang) => {
      lang.classList.remove("lang_active");
    })

    const targetLangElement = document.querySelector(`.lang__ico__container[data-lang=${lang}]`);
    targetLangElement.classList.add("lang_active");
    document.querySelector(".keyboard").remove();
    const main = document.querySelector(".main");
    renderKeyboard(main);
  }
}

export default changeLang;