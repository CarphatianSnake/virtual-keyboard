function renderKeyboard(parent, buttons) {
  const keyboard = document.createElement('section');
  keyboard.classList.add('keyboard');

  Object.keys(buttons).forEach((key) => {
    buttons[key].render(keyboard);
  });

  parent.append(keyboard);
}

export default renderKeyboard;
