import changeLang from '../changeLang/changeLang.js';
import onKeyPress from '../onKeyPress/onKeyPress.js';

function onClickHandler(e, caps, selectionState, buttons) {
  const textarea = document.querySelector('.textarea');
  if (e.target.classList.contains('textarea')) {
    selectionState.set(textarea.selectionStart);
  }

  changeLang(e, buttons);
  onKeyPress(e, caps, selectionState);
}

export default onClickHandler;
