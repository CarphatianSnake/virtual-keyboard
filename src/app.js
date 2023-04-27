import renderHeader from './header/renderHeader.js';
import renderMain from './main/renderMain.js';
import renderFooter from './footer/renderFooter.js';
import changeLang from './changeLang/changeLang.js';
import State from '../utils/State.js';
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
  const textarea = document.querySelector('.textarea');
  if (e.target.classList.contains('textarea')) {
    selectionState.set(textarea.selectionStart);
  }

  changeLang(e, buttons);

  const { key } = e.target.dataset;
  if (key) {
    const { onPress } = buttons[key];
    onPress({
      e, buttons, selectionState, caps,
    });
  }
});

window.addEventListener('keydown', (e) => {
  const { code } = e;

  if (buttons[code]) {
    const { animate, onPress } = buttons[code];
    animate(e);
    if (onPress) {
      onPress({
        e, buttons, selectionState, caps,
      });
    }
  }
});

window.addEventListener('keyup', (e) => {
  const { code } = e;

  if (buttons[code]) {
    buttons[code].animate(e);
  }
});
