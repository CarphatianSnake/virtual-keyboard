import buttons from "../../assets/data/buttons.js";
import getCharacter from "./getCharacter.js";

function renderKeyboard(parent) {
  const keyboard = document.createElement("section");
  keyboard.classList.add("keyboard");
  buttons.forEach((btn) => {
    const { character, code, altCharacter } = btn;
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = getCharacter(character);
    button.dataset.key = code;
    if (altCharacter) {
      const upperCase = document.createElement("div");
      upperCase.classList.add("btn__uppercase");
      upperCase.textContent = getCharacter(altCharacter);
      button.append(upperCase);
    }
    keyboard.append(button);
  })
  parent.append(keyboard);
}

export default renderKeyboard;