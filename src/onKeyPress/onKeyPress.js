import buttons from "../../assets/data/buttons.js";
import getKeyCode from "./getKeyCode.js";
import getKeyValue from "./getKeyValue.js";

function onKeyPress(e, caps) {
  const { shiftKey } = e;
  const isCaps = caps.get;
  const keyCode = getKeyCode(e);
  const lang = window.localStorage.getItem("lang");
  const textarea = document.querySelector(".textarea");
  const btn = buttons.find((button) => button.code === keyCode);

  if (keyCode === "CapsLock") {
    caps.set = !isCaps;
  }

  if (btn) {
    const { character, show, altCharacter } = btn;

    if (show) {
      const options = { keyCode, shiftKey, isCaps };
      let char = "";
      if (shiftKey) {
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