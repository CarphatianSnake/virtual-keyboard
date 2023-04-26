import buttons from '../assets/data/buttons.js';
import Button from '../src/keyboard/Button.js';

const prepareButtons = () => {
  const btns = {};

  buttons.forEach((btn) => {
    btns[btn.code] = new Button(btn);
  });

  return btns;
};

export default prepareButtons;
