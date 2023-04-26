import onTextChange from '../../utils/onTextChange.js';
import setSelection from '../../utils/setSelection.js';

function onKeyDelete(key, selectionState) {
  const textarea = document.querySelector('.textarea');
  const { selectionStart, selectionEnd } = textarea;

  function action(start, end) {
    onTextChange(start, end);
    setSelection(start, selectionState);
  }

  if (key === 'Backspace') {
    if (selectionStart !== selectionEnd || selectionStart > 0) {
      const start = selectionStart === selectionEnd ? selectionStart - 1 : selectionStart;
      action(start, selectionEnd);
    }
  }
  if (key === 'Delete') {
    const end = selectionStart === selectionEnd ? selectionEnd + 1 : selectionEnd;
    action(selectionStart, end);
  }
}

export default onKeyDelete;
