import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/app/app';
import questions from './mocks/questions';

const mainContainer = document.querySelector(`.main`);

const settings = {
  gameTime: 5,
  errorCount: 3,
};

const init = (questionsList) => {
  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={questionsList}
      />,
      mainContainer
  );
};

init(questions);
