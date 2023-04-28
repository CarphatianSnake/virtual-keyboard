import renderFooter from '../src/renderApp/renderFooter.js';

function changeLang(buttons, lang) {
  window.localStorage.setItem('lang', lang);

  const languages = document.querySelectorAll('.lang__ico__container');

  languages.forEach((lng) => {
    lng.classList.remove('lang_active');
  });

  const targetLangElement = document.querySelector(`.lang__ico__container[data-lang=${lang}]`);
  targetLangElement.classList.add('lang_active');

  Object.keys(buttons).forEach((key) => {
    if (key !== 'CapsLock') {
      buttons[key].updateContent();
    }
  });

  document.querySelector('.footer').remove();
  const app = document.querySelector('.app');
  renderFooter(app);
}

export default changeLang;
