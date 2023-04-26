function getKeyCode(e) {
  const { code, target } = e;
  if (code) {
    return code;
  }
  const { key } = target.dataset;
  if (key) {
    return key;
  }
  return target.parentElement.dataset.key;
}

export default getKeyCode;
