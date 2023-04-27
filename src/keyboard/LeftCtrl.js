import changeLang from '../changeLang/changeLang.js';
import Button from './Button.js';

class LeftCtrl extends Button {
  constructor(props) {
    super(props);
    this.changeLang = changeLang;
  }

  onPress = ({ e, buttons }) => {
    if (e.shiftKey && !e.repeat) {
      this.changeLang(e, buttons);
    }
  };
}

export default LeftCtrl;
