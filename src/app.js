import renderHeader from './header/renderHeader.js';
import renderMain from './main/renderMain.js';
import renderFooter from './footer/renderFooter.js';
import onKeyPress from './onKeyPress/onKeyPress.js';
import onClickHandler from './onClickHandler/onClickHandler.js';
import prevDefault from '../utils/prevDefault.js';
import State from '../utils/State.js';
import changeLang from './changeLang/changeLang.js';

const selectionState = new State(0);
const caps = new State(false);

const app = document.createElement('div');
app.classList.add('app');
document.body.append(app);
renderHeader(app);
renderMain(app);
renderFooter(app);

document.addEventListener('click', (e) => {
  onClickHandler(e, caps, selectionState);
});

window.addEventListener('keydown', (e) => {
  const { code } = e;

  onKeyPress(e, caps, selectionState);

  prevDefault(e);

  const pressedButton = document.querySelector(`.btn[data-key="${code}"]`);

  if (pressedButton) {
    pressedButton.classList.add('btn_active');
  }
});

window.addEventListener('keyup', (e) => {
  const { code, shiftKey, ctrlKey } = e;

  prevDefault(e);

  const pressedButton = document.querySelector(`.btn[data-key="${code}"]`);

  if (pressedButton) {
    pressedButton.classList.remove('btn_active');
    if (code === 'ControlLeft' && shiftKey) {
      changeLang(e);
    }
    if (code === 'ShiftLeft' && ctrlKey) {
      changeLang(e);
    }
  }
});
