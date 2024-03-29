import renderApp from './renderApp/renderApp.js';
import changeLang from '../utils/changeLanguage.js';
import State from '../utils/State.js';
import prepareButtons from '../utils/prepareButtons.js';

function app() {
  const appLanguage = window.localStorage.getItem('lang');
  if (!appLanguage) {
    window.localStorage.setItem('lang', 'en');
  }
  const selectionState = new State(0);
  const capsState = new State(false);
  const buttons = prepareButtons();
  const options = { buttons, selectionState, capsState };

  renderApp(buttons);

  document.addEventListener('click', (e) => {
    const textarea = document.querySelector('.textarea');
    const { key, lang } = e.target.dataset;
    textarea.focus();
    if (e.target.classList.contains('textarea')) {
      selectionState.set(textarea.selectionStart);
    }
    if (lang) {
      changeLang(buttons, lang);
    }
    if (key) {
      const { onPress } = buttons[key];
      if (onPress) {
        onPress({ e, ...options });
      }
    }
  });

  window.addEventListener('keydown', (e) => {
    const { code } = e;
    if (buttons[code]) {
      const { animate, onPress } = buttons[code];
      animate(e);
      if (onPress) {
        onPress({ e, ...options });
      }
    }
  });

  window.addEventListener('keyup', (e) => {
    const { code } = e;
    if (buttons[code]) {
      buttons[code].animate(e);
    }
  });
}

export default app;
