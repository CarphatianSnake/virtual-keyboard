import renderHeader from './renderHeader.js';
import renderMain from './renderMain.js';
import renderFooter from './renderFooter.js';

function renderApp(buttons) {
  const app = document.createElement('div');
  app.classList.add('app');
  document.body.append(app);

  renderHeader(app);
  renderMain(app, buttons);
  renderFooter(app);
}

export default renderApp;
