class Button {
  constructor(props) {
    this.code = props.code;
    this.character = props.character;
    this.altCharacter = props.altCharacter;
    this.show = props.show;
    this.element = this.createElement();
    this.childElement = this.createChildElement();
  }

  getCharacter = (type) => {
    const language = window.localStorage.getItem('lang');
    const character = this[type];
    return character instanceof Object ? character[language] : character;
  };

  animate = (e) => {
    e.preventDefault();
    const element = document.querySelector(`.btn[data-key="${this.code}"]`);
    if (e.type === 'keydown') {
      element.classList.add('btn_active');
    } else {
      element.classList.remove('btn_active');
    }
  };

  createElement = () => {
    const element = document.createElement('button');
    element.classList.add('btn');
    element.dataset.key = this.code;
    element.textContent = this.getCharacter('character');
    return element;
  };

  createChildElement = () => {
    const childElement = this.altCharacter ? document.createElement('div') : null;
    if (childElement) {
      childElement.classList.add('btn__uppercase');
      childElement.textContent = this.getCharacter('altCharacter');
      this.element.append(childElement);
    }
    return childElement;
  };

  updateContent = () => {
    const { element, childElement, getCharacter } = this;
    element.textContent = getCharacter('character');
    if (childElement) {
      childElement.textContent = getCharacter('altCharacter');
      element.append(childElement);
    }
  };

  render = (parent) => {
    if (this.code === 'CapsLock') {
      const indicator = document.createElement('div');
      indicator.classList.add('btn__caps-indicator');
      this.element.append(indicator);
    }
    parent.append(this.element);
  };
}

export default Button;
