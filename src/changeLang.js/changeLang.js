import renderKeyboard from "../keyboard/renderKeyboard.js";

function changeLang(e) {
  const { target } = e;

  function getLangContainer(target) {
    if (target.dataset.lang) {
      return target;
    }
    if (target.parentElement.dataset.lang) {
      return target.parentElement;
    }
    return;
  }

  const langContainer = getLangContainer(target);

  if (langContainer) {
    const test = [...langContainer.parentElement.children];

    test.forEach((elem) => {
      elem.classList.remove("lang_active");
    });

    langContainer.classList.add("lang_active");

    window.localStorage.setItem("lang", langContainer.dataset.lang);

    document.querySelector(".keyboard").remove();

    const main = document.querySelector(".main");

    renderKeyboard(main);

  }
}

export default changeLang;