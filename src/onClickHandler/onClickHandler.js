import changeLang from "../changeLang/changeLang.js";
import onKeyPress from "../onKeyPress/onKeyPress.js";

function onClickHandler(e, caps) {
  changeLang(e);
  onKeyPress(e, caps);
}

export default onClickHandler;