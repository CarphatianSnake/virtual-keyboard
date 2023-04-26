function renderHeader(parent) {
  let currentLang = window.localStorage.getItem('lang');

  if (!currentLang) {
    window.localStorage.setItem('lang', 'en');
    currentLang = 'en';
  }

  const header = document.createElement('header');
  header.classList.add('header');

  const language = document.createElement('ul');
  language.classList.add('lang');

  const langList = ['en', 'ua'];

  langList.forEach((lang) => {
    const container = document.createElement('li');
    container.classList.add('lang__ico__container');
    if (lang === currentLang) {
      container.classList.add('lang_active');
    }
    container.dataset.lang = lang;
    const flag = document.createElement('img');
    flag.classList.add('lang__ico');
    flag.src = `assets/img/${lang}.svg`;
    flag.alt = lang;
    flag.title = lang;
    container.append(flag);
    language.append(container);
  });

  header.append(language);
  parent.append(header);
}

export default renderHeader;
