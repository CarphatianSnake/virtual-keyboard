const buttons = [
  {
    code: 'KeyA',
    character: {
      en: 'A',
      ua: 'Ф',
    },
    show: true,
  },
  {
    code: 'KeyB',
    character: {
      en: 'B',
      ua: 'И',
    },
    show: true,
  },
  {
    code: 'KeyC',
    character: {
      en: 'C',
      ua: 'С',
    },
    show: true,
  },
  {
    code: 'KeyD',
    character: {
      en: 'D',
      ua: 'В',
    },
    show: true,
  },
  {
    code: 'KeyE',
    character: {
      en: 'E',
      ua: 'У',
    },
    show: true,
  },
  {
    code: 'KeyF',
    character: {
      en: 'F',
      ua: 'А',
    },
    show: true,
  },
  {
    code: 'KeyG',
    character: {
      en: 'G',
      ua: 'П',
    },
    show: true,
  },
  {
    code: 'KeyH',
    character: {
      en: 'H',
      ua: 'Р',
    },
    show: true,
  },
  {
    code: 'KeyI',
    character: {
      en: 'I',
      ua: 'Ш',
    },
    show: true,
  },
  {
    code: 'KeyJ',
    character: {
      en: 'J',
      ua: 'О',
    },
    show: true,
  },
  {
    code: 'KeyK',
    character: {
      en: 'K',
      ua: 'Л',
    },
    show: true,
  },
  {
    code: 'KeyL',
    character: {
      en: 'L',
      ua: 'Д',
    },
    show: true,
  },
  {
    code: 'KeyM',
    character: {
      en: 'M',
      ua: 'Ь',
    },
    show: true,
  },
  {
    code: 'KeyN',
    character: {
      en: 'N',
      ua: 'Т',
    },
    show: true,
  },
  {
    code: 'KeyO',
    character: {
      en: 'O',
      ua: 'Щ',
    },
    show: true,
  },
  {
    code: 'KeyP',
    character: {
      en: 'P',
      ua: 'З',
    },
    show: true,
  },
  {
    code: 'KeyQ',
    character: {
      en: 'Q',
      ua: 'Й',
    },
    show: true,
  },
  {
    code: 'KeyR',
    character: {
      en: 'R',
      ua: 'К',
    },
    show: true,
  },
  {
    code: 'KeyS',
    character: {
      en: 'S',
      ua: 'І',
    },
    show: true,
  },
  {
    code: 'KeyT',
    character: {
      en: 'T',
      ua: 'Е',
    },
    show: true,
  },
  {
    code: 'KeyU',
    character: {
      en: 'U',
      ua: 'Г',
    },
    show: true,
  },
  {
    code: 'KeyV',
    character: {
      en: 'V',
      ua: 'М',
    },
    show: true,
  },
  {
    code: 'KeyW',
    character: {
      en: 'W',
      ua: 'Ц',
    },
    show: true,
  },
  {
    code: 'KeyX',
    character: {
      en: 'X',
      ua: 'Ч',
    },
    show: true,
  },
  {
    code: 'KeyY',
    character: {
      en: 'Y',
      ua: 'Н',
    },
    show: true,
  },
  {
    code: 'KeyZ',
    character: {
      en: 'Z',
      ua: 'Я',
    },
    show: true,
  },
  {
    code: 'Space',
    character: ' ',
    show: true,
  },
  {
    code: 'Backquote',
    character: {
      en: '`',
      ua: "'",
    },
    altCharacter: {
      en: '~',
      ua: '₴',
    },
    show: true,
  },
  {
    code: 'Tab',
    character: 'Tab',
    show: true,
  },
  {
    code: 'CapsLock',
    character: 'CapsLock',
    show: false,
  },
  {
    code: 'ShiftLeft',
    character: 'Shift',
    show: false,
  },
  {
    code: 'ControlLeft',
    character: 'Ctrl',
    show: false,
  },
  {
    code: 'AltLeft',
    character: 'Alt',
    show: false,
  },
  {
    code: 'MetaLeft',
    character: 'Win',
    show: false,
  },
  {
    code: 'Digit1',
    character: '1',
    altCharacter: '!',
    show: true,
  },
  {
    code: 'Digit2',
    character: '2',
    altCharacter: {
      en: '@',
      ua: '"',
    },
    show: true,
  },
  {
    code: 'Digit3',
    character: '3',
    altCharacter: {
      en: '#',
      ua: '№',
    },
    show: true,
  },
  {
    code: 'Digit4',
    character: '4',
    altCharacter: {
      en: '$',
      ua: ';',
    },
    show: true,
  },
  {
    code: 'Digit5',
    character: '5',
    altCharacter: '%',
    show: true,
  },
  {
    code: 'Digit6',
    character: '6',
    altCharacter: {
      en: '^',
      ua: ':',
    },
    show: true,
  },
  {
    code: 'Digit7',
    character: '7',
    altCharacter: {
      en: '&',
      ua: '?',
    },
    show: true,
  },
  {
    code: 'Digit8',
    character: '8',
    altCharacter: '*',
    show: true,
  },
  {
    code: 'Digit9',
    character: '9',
    altCharacter: '(',
    show: true,
  },
  {
    code: 'Digit0',
    character: '0',
    altCharacter: ')',
    show: true,
  },
  {
    code: 'Minus',
    character: '-',
    altCharacter: '_',
    show: true,
  },
  {
    code: 'Equal',
    character: '=',
    altCharacter: '+',
    show: true,
  },
  {
    code: 'Backspace',
    character: 'Backspace',
    show: false,
  },
  {
    code: 'Backslash',
    character: '\\',
    altCharacter: {
      en: '|',
      ua: '/',
    },
    show: true,
  },
  {
    code: 'BracketLeft',
    character: {
      en: '[',
      ua: 'Х',
    },
    altCharacter: {
      en: '{',
      ua: '',
    },
    show: true,
  },
  {
    code: 'BracketRight',
    character: {
      en: ']',
      ua: 'Ї',
    },
    altCharacter: {
      en: '}',
      ua: '',
    },
    show: true,
  },
  {
    code: 'Delete',
    character: 'Del',
    show: false,
  },
  {
    code: 'Semicolon',
    character: {
      en: ';',
      ua: 'Ж',
    },
    altCharacter: {
      en: ':',
      ua: '',
    },
    show: true,
  },
  {
    code: 'Quote',
    character: {
      en: "'",
      ua: 'Є',
    },
    altCharacter: {
      en: '"',
      ua: '',
    },
    show: true,
  },
  {
    code: 'Enter',
    character: 'Enter',
    show: true,
  },
  {
    code: 'Comma',
    character: {
      en: ',',
      ua: 'Б',
    },
    altCharacter: {
      en: '<',
      ua: '',
    },
    show: true,
  },
  {
    code: 'Period',
    character: {
      en: '.',
      ua: 'Ю',
    },
    altCharacter: {
      en: '>',
      ua: '',
    },
    show: true,
  },
  {
    code: 'Slash',
    character: {
      en: '/',
      ua: '.',
    },
    altCharacter: {
      en: '?',
      ua: ',',
    },
    show: true,
  },
  {
    code: 'ShiftRight',
    character: 'Shift',
    show: false,
  },
  {
    code: 'AltRight',
    character: 'Alt',
    show: false,
  },
  {
    code: 'ControlRight',
    character: 'Ctrl',
    show: false,
  },
  {
    code: 'ArrowUp',
    character: '↑',
    show: true,
  },
  {
    code: 'ArrowDown',
    character: '↓',
    show: true,
  },
  {
    code: 'ArrowRight',
    character: '→',
    show: true,
  },
  {
    code: 'ArrowLeft',
    character: '←',
    show: true,

  },
  {
    code: 'ContextMenu',
    character: '▤',
    show: false,
  },
];

export default buttons;
