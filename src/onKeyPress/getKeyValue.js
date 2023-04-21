function getKeyValue(char, options) {
  const { keyCode, shiftKey, isCaps } = options;
  const lang = window.localStorage.getItem("lang");
  let value = "";
  if (char instanceof Object) {
    value = char[lang];
  } else if (keyCode === "Enter") {
    value = "\n";
  } else if (keyCode === "Tab") {
    value = "    ";
  } else {
    value = char;
  }

  if (shiftKey) {
    return isCaps ? value.toLowerCase() : value;
  }

  return isCaps ? value : value.toLowerCase();
}

export default getKeyValue;