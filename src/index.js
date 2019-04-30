import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const mainContainer = document.querySelector(`.main`);

const init = () => {
  ReactDOM.render(
      <App />,
      mainContainer
  );
};

init();
