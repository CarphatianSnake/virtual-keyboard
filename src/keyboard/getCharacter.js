function getCharacter(character) {
  const language = window.localStorage.getItem('lang');

  if (character instanceof Object) {
    const { en, ua } = character;

    if (language === 'ua') {
      return ua;
    }

    return en;
  }

  return character;
}

export default getCharacter;
