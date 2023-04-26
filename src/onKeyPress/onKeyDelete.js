import onTextChange from '../../utils/onTextChange.js';
import setSelection from '../../utils/setSelection.js';

function onKeyDelete(key, selectionState) {
  const textarea = document.querySelector('.textarea');
  const { selectionStart, selectionEnd } = textarea;

  if (key === 'Backspace' && selectionStart > 0) {
    const start = selectionStart === selectionEnd ? selectionStart - 1 : selectionStart;
    onTextChange(start, selectionEnd);
    setSelection(start, selectionState);
  }
  if (key === 'Delete') {
    const end = selectionStart === selectionEnd ? selectionEnd + 1 : selectionEnd;
    onTextChange(selectionStart, end);
    setSelection(selectionStart, selectionState);
  }
}

export default onKeyDelete;
