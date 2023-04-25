function onTextChange(start, end, text = "") {
  const textarea = document.querySelector(".textarea");
  const { value } = textarea;
  textarea.value = value.slice(0, start) + text + value.slice(end);
}

export default onTextChange;