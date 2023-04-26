import buttons from '../../assets/data/buttons.js';
import getKeyCode from './getKeyCode.js';
import getKeyValue from './getKeyValue.js';
import onKeyDelete from './onKeyDelete.js';
import onTextChange from '../../utils/onTextChange.js';
import setSelection from '../../utils/setSelection.js';

function onKeyPress(e, caps, selectionState) {
  const { shiftKey } = e;
  const isCaps = caps.get;
  const keyCode = getKeyCode(e);
  const lang = window.localStorage.getItem('lang');
  const textarea = document.querySelector('.textarea');
  const btn = buttons.find((button) => button.code === keyCode);
  const isDeleteAction = keyCode === 'Backspace' || keyCode === 'Delete';

  if (isDeleteAction) {
    onKeyDelete(keyCode, selectionState);
  }

  if (keyCode === 'CapsLock') {
    caps.set(!isCaps);
    const indicator = document.querySelector('.btn__caps-indicator');
    if (caps.get) {
      indicator.classList.add('btn__caps-indicator_active');
    } else {
      indicator.classList.remove('btn__caps-indicator_active');
    }
  }

  if (btn) {
    const { character, show, altCharacter } = btn;

    if (show) {
      const options = { keyCode, shiftKey, isCaps };
      let char = '';
      if (shiftKey && altCharacter) {
        if (altCharacter instanceof Object) {
          char = altCharacter[lang] ? altCharacter : character;
        } else {
          char = altCharacter;
        }
      } else {
        char = character;
      }

      const keyValue = getKeyValue(char, options);

      const position = selectionState.get;
      setSelection(position, selectionState);
      onTextChange(position, position, keyValue);
      selectionState.set(position + keyValue.length);
      setSelection(selectionState.get, selectionState);
    }
  }
  textarea.focus();
}

export default onKeyPress;
