import getKeyValue from '../../utils/getKeyValue.js';
import onTextChange from '../../utils/onTextChange.js';
import setSelection from '../../utils/setSelection.js';
import Button from './Button.js';

class CharacterButton extends Button {
  constructor(props) {
    super(props);
    this.getKeyValue = getKeyValue;
    this.onTextChange = onTextChange;
    this.setSelection = setSelection;
  }

  onPress = ({ e, caps, selectionState }) => {
    const lang = window.localStorage.getItem('lang');
    const textarea = document.querySelector('.textarea');
    const options = {
      keyCode: this.code,
      shiftKey: e.shiftKey,
      isCaps: caps.get,
    };
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

    const keyValue = this.getKeyValue(char, options);
    const position = selectionState.get;
    this.setSelection(position, selectionState);
    this.onTextChange(position, position, keyValue);
    selectionState.set(position + keyValue.length);
    this.setSelection(selectionState.get, selectionState);

    textarea.focus();
  };
}

export default CharacterButton;
