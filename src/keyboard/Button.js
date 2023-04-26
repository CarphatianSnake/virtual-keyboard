class Button {
  constructor(props) {
    this.code = props.code;
    this.character = props.character;
    this.altCharacter = props.altCharacter;
    this.show = props.show;
  }

  getCharacter = (type) => {
    const language = window.localStorage.getItem('lang');
    const character = this[type];
    return character instanceof Object ? character[language] : character;
  };

  render = (parent) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = this.getCharacter('character');
    button.dataset.key = this.code;
    if (this.altCharacter) {
      const upperCase = document.createElement('div');
      upperCase.classList.add('btn__uppercase');
      upperCase.textContent = this.getCharacter('altCharacter');
      button.append(upperCase);
    }
    if (this.code === 'CapsLock') {
      const indicator = document.createElement('div');
      indicator.classList.add('btn__caps-indicator');
      button.append(indicator);
    }
    parent.append(button);
  };
}

export default Button;
