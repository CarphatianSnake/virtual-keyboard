import changeLang from "../changeLang/changeLang.js";
import onKeyPress from "../onKeyPress/onKeyPress.js";

function onClickHandler(e, caps, selectionState) {

  const textarea = document.querySelector(".textarea");
  if (e.target.classList.contains("textarea")) {
    selectionState.set = textarea.selectionStart;
  }

  changeLang(e);
  onKeyPress(e, caps, selectionState);
}

export default onClickHandler;