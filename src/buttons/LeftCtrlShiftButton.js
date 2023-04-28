import changeLanguage from '../../utils/changeLanguage.js';
import Button from './Button.js';

class LeftCtrlShiftButton extends Button {
  constructor(props) {
    super(props);
    this.changeLanguage = changeLanguage;
  }

  onPress = ({ e, buttons }) => {
    const { shiftKey, ctrlKey, repeat } = e;
    const isShift = this.code === 'ShiftLeft' && ctrlKey && !repeat;
    const isControl = this.code === 'ControlLeft' && shiftKey && !repeat;

    if (isShift || isControl) {
      const currentLanguage = window.localStorage.getItem('lang');
      const language = currentLanguage === 'en' ? 'ua' : 'en';
      this.changeLanguage(buttons, language);
    }
  };
}

export default LeftCtrlShiftButton;
