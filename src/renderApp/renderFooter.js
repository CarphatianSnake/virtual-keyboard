import footerData from '../../assets/data/footerData.js';

function renderFooter(parent) {
  const language = window.localStorage.getItem('lang');
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  function renderFooterElements(data) {
    data.forEach((content) => {
      const element = document.createElement('p');
      element.textContent = content[language];
      footer.append(element);
    });
  }

  renderFooterElements(footerData);

  parent.append(footer);
}

export default renderFooter;
