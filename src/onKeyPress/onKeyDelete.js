function onKeyDelete(key) {
  const textarea = document.querySelector(".textarea");
  const { selectionStart, selectionEnd, value } = textarea;

  const onValueChange = (start, end) => textarea.value = value.slice(0, start) + value.slice(end);
  const setSelection = (start, end) => {
    textarea.selectionStart = start;
    textarea.selectionEnd =  end;
  }

  if (selectionStart === selectionEnd) {
    if (key === "Backspace" && selectionStart > 0) {
      onValueChange(selectionStart - 1, selectionEnd);
      setSelection(selectionStart - 1, selectionEnd - 1);
    } if (key === "Delete") {
      onValueChange(selectionStart, selectionEnd + 1);
      setSelection(selectionStart, selectionEnd);
    }
  } else {
    onValueChange(selectionStart, selectionEnd);
    setSelection(selectionStart, selectionStart);
  }
}

export default onKeyDelete;