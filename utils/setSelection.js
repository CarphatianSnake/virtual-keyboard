function setSelection(position, selectionState) {
  const textarea = document.querySelector('.textarea');
  textarea.selectionStart = position;
  textarea.selectionEnd = position;
  selectionState.set(position);
}

export default setSelection;
