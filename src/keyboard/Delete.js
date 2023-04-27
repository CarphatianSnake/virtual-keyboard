import onTextChange from '../../utils/onTextChange.js';
import setSelection from '../../utils/setSelection.js';
import Button from './Button.js';

class Delete extends Button {
  constructor(props) {
    super(props);
    this.onTextChange = onTextChange;
    this.setSelection = setSelection;
  }

  onPress = ({ selectionState }) => {
    const textarea = document.querySelector('.textarea');
    const { selectionStart, selectionEnd } = textarea;
    const end = selectionStart === selectionEnd ? selectionEnd + 1 : selectionEnd;
    this.onTextChange(selectionStart, end);
    this.setSelection(selectionStart, selectionState);
  };
}

export default Delete;
