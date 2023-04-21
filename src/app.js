import buttons from "../assets/data/buttons.js";

import renderHeader from "./header/renderHeader.js";
import renderMain from "./main/renderMain.js";
import changeLang from "./changeLang.js/changeLang.js";

const app = document.createElement("div");
app.classList.add("app");
document.body.append(app);
renderHeader(app);
renderMain(app);

let caps = false;

function prevDefault(e) {
  if (e.code !== "F5") {
    e.preventDefault();
  }
}

document.addEventListener("click", changeLang);

window.addEventListener("keydown", (e) => {

  const { code, shiftKey } = e;

  const lang = window.localStorage.getItem("lang");
  const textarea = document.querySelector(".textarea");

  const btn = buttons.find((button) => button.code === code);

  if (btn) {
    const { character, show, altCharacter } = btn;

    if (code === "CapsLock") {
      caps = !caps;
    }

    if (show) {
      let value = "";

      if (shiftKey && altCharacter) {
        if (altCharacter instanceof Object) {
          value = altCharacter[lang];
        } else {
          value = altCharacter;
        }
      } else if (character instanceof Object) {
        value = character[lang];
      } else if (code === "Enter") {
        value = "\n";
      } else {
        value = character;
      }

      textarea.value += shiftKey || caps ? value : value.toLowerCase();
    }
  }

  prevDefault(e);

  const pressedButton = document.querySelector(`.btn[data-key="${code}"]`);
  
  if (pressedButton) {
    pressedButton.classList.add("btn_active");
  }

})

window.addEventListener("keyup", (e) => {

  const { code } = e;

  prevDefault(e);

  const pressedButton = document.querySelector(`.btn[data-key="${code}"]`);

  if (pressedButton) {
    pressedButton.classList.remove("btn_active");
  }

})