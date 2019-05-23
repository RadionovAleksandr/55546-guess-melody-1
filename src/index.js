import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer';

import App from './components/app/app';
import questions from './mocks/questions';

import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';

const mainContainer = document.querySelector(`.main`);

const settings = {
  gameTime: 5,
  errorCount: 1,
};

const AppWrapped = withScreenSwitch(App);

const init = (questionsList) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  ReactDOM.render(
      <Provider store={store}>
        <AppWrapped
          errorCount={settings.errorCount}
          gameTime={settings.gameTime}
          questions={questionsList}
        />
      </Provider>,
      mainContainer
  );
};

init(questions);
