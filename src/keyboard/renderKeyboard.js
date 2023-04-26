import buttons from '../../assets/data/buttons.js';
import Button from './Button.js';

function renderKeyboard(parent) {
  const keyboard = document.createElement('section');
  keyboard.classList.add('keyboard');
  buttons.forEach((btn) => {
    const button = new Button(btn);
    button.render(keyboard);
  });
  parent.append(keyboard);
}

export default renderKeyboard;
