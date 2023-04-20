function renderTextarea(parent) {
  const textSection = document.createElement("section");
  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea");
  textSection.append(textarea);
  parent.append(textSection);
}

export default renderTextarea;