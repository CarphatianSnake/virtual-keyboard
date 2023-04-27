import renderTextarea from './renderTextarea.js';
import renderKeyboard from './renderKeyboard.js';

function renderMain(parent, buttons) {
  const main = document.createElement('main');
  main.classList.add('main');
  renderTextarea(main);
  renderKeyboard(main, buttons);
  parent.append(main);
}

export default renderMain;
