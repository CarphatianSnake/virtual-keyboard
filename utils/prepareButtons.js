import buttons from '../assets/data/buttons.js';
import Button from '../src/keyboard/Button.js';

const prepareButtons = () => buttons.map((btn) => new Button(btn));

export default prepareButtons;
