import renderHeader from "./header/renderHeader.js";
import renderMain from "./main/renderMain.js";
import onKeyPress from "./onKeyPress/onKeyPress.js";
import onClickHandler from "./onClickHandler/onClickHandler.js";
import prevDefault from "../utils/prevDefault.js";
import CapsLock from "../utils/CapsLock.js";

const caps = new CapsLock();

const app = document.createElement("div");
app.classList.add("app");
document.body.append(app);
renderHeader(app);
renderMain(app);

document.addEventListener("click", (e) => {
  onClickHandler(e, caps);
});

window.addEventListener("keydown", (e) => {

  const { code } = e;

  onKeyPress(e, caps);

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