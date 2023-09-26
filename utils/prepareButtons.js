import buttons from '../assets/data/buttons.js';
import Button from '../src/buttons/Button.js';
import BackspaceButton from '../src/buttons/BackspaceButton.js';
import CapsLockButton from '../src/buttons/CapsLockButton.js';
import CharacterButton from '../src/buttons/CharacterButton.js';
import DeleteButton from '../src/buttons/DeleteButton.js';
import LeftCtrlShiftButton from '../src/buttons/LeftCtrlShiftButton.js';

const prepareButtons = () => {
  const btns = {};

  buttons.forEach((btn) => {
    if (btn.show) {
      btns[btn.code] = new CharacterButton(btn);
    } else {
      switch (btn.code) {
        case ('ShiftLeft'):
          btns[btn.code] = new LeftCtrlShiftButton(btn);
          break;
        case ('ControlLeft'):
          btns[btn.code] = new LeftCtrlShiftButton(btn);
          break;
        case ('Delete'):
          btns[btn.code] = new DeleteButton(btn);
          break;
        case ('Backspace'):
          btns[btn.code] = new BackspaceButton(btn);
          break;
        case ('CapsLock'):
          btns[btn.code] = new CapsLockButton(btn);
          break;
        default:
          btns[btn.code] = new Button(btn);
          break;
      }
    }
  });

  return btns;
};

export default prepareButtons;
