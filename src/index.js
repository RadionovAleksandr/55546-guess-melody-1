import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer';

import App from './components/app/app';
import questions from './mocks/questions';

const store = createStore(reducer);
const mainContainer = document.querySelector(`.main`);

const settings = {
  gameTime: 5,
  errorCount: 1,
};

const init = (questionsList) => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          errorCount={settings.errorCount}
          gameTime={settings.gameTime}
          questions={questionsList}
        />
      </Provider>,
      mainContainer
  );
};

init(questions);
