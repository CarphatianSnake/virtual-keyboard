import renderFooter from '../footer/renderFooter.js';

function changeLang(e, buttons) {
  function getLanguage() {
    const { target, code } = e;

    let language = '';

    if (target.dataset.lang) {
      language = target.dataset.lang;
    }
    if (target.parentElement.dataset.lang) {
      language = target.parentElement.dataset.lang;
    }
    if (code === 'ShiftLeft' || code === 'ControlLeft') {
      const lang = window.localStorage.getItem('lang');
      language = lang === 'en' ? 'ua' : 'en';
    }
    return language;
  }

  const lang = getLanguage(e);

  if (lang) {
    window.localStorage.setItem('lang', lang);

    const languages = document.querySelectorAll('.lang__ico__container');

    languages.forEach((lng) => {
      lng.classList.remove('lang_active');
    });

    const targetLangElement = document.querySelector(`.lang__ico__container[data-lang=${lang}]`);
    targetLangElement.classList.add('lang_active');

    Object.keys(buttons).forEach((key) => {
      buttons[key].updateContent();
    });

    document.querySelector('.footer').remove();
    const app = document.querySelector('.app');
    renderFooter(app);
  }
}

export default changeLang;
