import Button from './Button.js';

class CapsLockButton extends Button {
  constructor(props) {
    super(props);
    this.childElement = this.createChildElement();
  }

  updateContent = (isCaps) => {
    if (isCaps) {
      this.childElement.classList.add('btn__caps-indicator_active');
    } else {
      this.childElement.classList.remove('btn__caps-indicator_active');
    }
  };

  createChildElement = () => {
    const childElement = document.createElement('div');
    childElement.classList.add('btn__caps-indicator');
    this.element.append(childElement);
    return childElement;
  };

  onPress = ({ caps }) => {
    caps.set(!caps.get);
    this.updateContent(caps.get);
  };
}

export default CapsLockButton;
