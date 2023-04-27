function renderFooter(parent) {
  const language = window.localStorage.getItem('lang');

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const os = document.createElement('p');
  if (language === 'en') {
    os.textContent = 'Keyboard was implemented on Windows OS base';
  }
  if (language === 'ua') {
    os.textContent = 'Клавіатура реалізована на базі ОС Windows';
  }
  footer.append(os);

  const langChange = document.createElement('p');
  if (language === 'en') {
    langChange.textContent = 'To change keyboard language use Ctrl + Shift combination or click on language flag';
  }
  if (language === 'ua') {
    langChange.textContent = 'Для зміни мови клавіатури скористайтеся комбінацієй Ctrl + Shift, або клікніть на прапорець мови';
  }
  footer.append(langChange);

  parent.append(footer);
}

export default renderFooter;
