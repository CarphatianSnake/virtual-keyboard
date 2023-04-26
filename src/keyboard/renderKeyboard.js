function renderKeyboard(parent, buttons) {
  const keyboard = document.createElement('section');
  keyboard.classList.add('keyboard');
  buttons.forEach((btn) => {
    btn.render(keyboard);
  });
  parent.append(keyboard);
}

export default renderKeyboard;
