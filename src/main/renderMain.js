import renderTextarea from '../textarea/renderTextarea.js';
import renderKeyboard from '../keyboard/renderKeyboard.js';

function renderMain(parent, buttons) {
  const main = document.createElement('main');
  main.classList.add('main');
  renderTextarea(main);
  renderKeyboard(main, buttons);
  parent.append(main);
}

export default renderMain;
