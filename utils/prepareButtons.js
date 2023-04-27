import buttons from '../assets/data/buttons.js';
import Button from '../src/keyboard/Button.js';
import CharacterButton from '../src/keyboard/CharacterButton.js';
import LeftShift from '../src/keyboard/LeftShift.js';
import LeftCtrl from '../src/keyboard/LeftCtrl.js';
import Delete from '../src/keyboard/Delete.js';
import Backspace from '../src/keyboard/Backspace.js';
import CapsLock from '../src/keyboard/CapsLock.js';

const prepareButtons = () => {
  const btns = {};

  buttons.forEach((btn) => {
    if (btn.show) {
      btns[btn.code] = new CharacterButton(btn);
    } else {
      switch (btn.code) {
        case ('ShiftLeft'):
          btns[btn.code] = new LeftShift(btn);
          break;
        case ('ControlLeft'):
          btns[btn.code] = new LeftCtrl(btn);
          break;
        case ('Delete'):
          btns[btn.code] = new Delete(btn);
          break;
        case ('Backspace'):
          btns[btn.code] = new Backspace(btn);
          break;
        case ('CapsLock'):
          btns[btn.code] = new CapsLock(btn);
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
