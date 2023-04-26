import renderHeader from './header/renderHeader.js';
import renderMain from './main/renderMain.js';
import renderFooter from './footer/renderFooter.js';
import onKeyPress from './onKeyPress/onKeyPress.js';
import onClickHandler from './onClickHandler/onClickHandler.js';
import State from '../utils/State.js';
import changeLang from './changeLang/changeLang.js';
import prepareButtons from '../utils/prepareButtons.js';

const selectionState = new State(0);
const caps = new State(false);
const buttons = prepareButtons();

const app = document.createElement('div');
app.classList.add('app');
document.body.append(app);
renderHeader(app);
renderMain(app, buttons);
renderFooter(app);

document.addEventListener('click', (e) => {
  onClickHandler(e, caps, selectionState, buttons);
});

window.addEventListener('keydown', (e) => {
  const { code } = e;

  const button = buttons.find((btn) => btn.code === code);
  if (button) {
    button.animate(e);
  }

  onKeyPress(e, caps, selectionState);
});

window.addEventListener('keyup', (e) => {
  const { code, shiftKey, ctrlKey } = e;

  const button = buttons.find((btn) => btn.code === code);

  if (button) {
    button.animate(e);
    if (code === 'ControlLeft' && shiftKey) {
      changeLang(e, buttons);
    }
    if (code === 'ShiftLeft' && ctrlKey) {
      changeLang(e, buttons);
    }
  }
});
