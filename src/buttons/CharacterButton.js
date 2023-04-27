import onTextChange from '../../utils/onTextChange.js';
import setSelection from '../../utils/setSelection.js';
import Button from './Button.js';

class CharacterButton extends Button {
  constructor(props) {
    super(props);
    this.onTextChange = onTextChange;
    this.setSelection = setSelection;
  }

  getKeyValue = (character, shiftKey, isCaps) => {
    const language = window.localStorage.getItem('lang');
    let value = '';

    if (character instanceof Object) {
      value = character[language];
    } else if (this.code === 'Enter') {
      value = '\n';
    } else if (this.code === 'Tab') {
      value = '    ';
    } else {
      value = character;
    }

    if (shiftKey) {
      return isCaps ? value.toLowerCase() : value;
    }

    return isCaps ? value : value.toLowerCase();
  };

  onPress = ({ e, caps, selectionState }) => {
    const lang = window.localStorage.getItem('lang');
    const textarea = document.querySelector('.textarea');
    const { character, altCharacter } = this;
    let char = '';

    if (e.shiftKey && altCharacter) {
      if (altCharacter instanceof Object) {
        char = altCharacter[lang] ? altCharacter : character;
      } else {
        char = altCharacter;
      }
    } else {
      char = character;
    }

    const keyValue = this.getKeyValue(char, e.shiftKey, caps.get);
    const position = selectionState.get;
    this.setSelection(position, selectionState);
    this.onTextChange(position, position, keyValue);
    selectionState.set(position + keyValue.length);
    this.setSelection(selectionState.get, selectionState);

    textarea.focus();
  };
}

export default CharacterButton;
