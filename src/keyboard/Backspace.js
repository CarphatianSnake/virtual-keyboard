import onTextChange from '../../utils/onTextChange.js';
import setSelection from '../../utils/setSelection.js';
import Button from './Button.js';

class Backspace extends Button {
  constructor(props) {
    super(props);
    this.onTextChange = onTextChange;
    this.setSelection = setSelection;
  }

  onPress = ({ selectionState }) => {
    const textarea = document.querySelector('.textarea');
    const { selectionStart, selectionEnd } = textarea;
    if (selectionStart !== selectionEnd || selectionStart > 0) {
      const start = selectionStart === selectionEnd ? selectionStart - 1 : selectionStart;
      this.onTextChange(start, selectionEnd);
      this.setSelection(start, selectionState);
    }
  };
}

export default Backspace;
