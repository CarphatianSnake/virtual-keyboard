import buttons from "../../assets/data/buttons.js";
import getKeyCode from "./getKeyCode.js";
import getKeyValue from "./getKeyValue.js";
import onKeyDelete from "./onKeyDelete.js";

function onKeyPress(e, caps) {
  const { shiftKey } = e;
  const isCaps = caps.get;
  const keyCode = getKeyCode(e);
  const lang = window.localStorage.getItem("lang");
  const textarea = document.querySelector(".textarea");
  const btn = buttons.find((button) => button.code === keyCode);

  if (keyCode === "Backspace" || keyCode === "Delete") {
    onKeyDelete(keyCode);
  }

  if (keyCode === "CapsLock") {
    caps.set = !isCaps;
    const indicator = document.querySelector(".btn__caps-indicator");
    if (caps.get) {
      indicator.classList.add("btn__caps-indicator_active");
    } else {
      indicator.classList.remove("btn__caps-indicator_active");
    }
  }

  if (btn) {
    const { character, show, altCharacter } = btn;

    if (show) {
      const options = { keyCode, shiftKey, isCaps };
      let char = "";
      if (shiftKey && altCharacter) {
        if (altCharacter instanceof Object) {
          char = altCharacter[lang] ? altCharacter : character;
        } else {
          char = altCharacter;
        }
      } else {
        char = character;
      }
      
      textarea.value += getKeyValue(char, options);
    }
  }
}

export default onKeyPress;