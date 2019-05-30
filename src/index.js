import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import reducer from './reducer/index.js';
import {createAPI} from './api';
import {Operation} from "./reducer/data/data";
import {Operation as UserOperation} from "./reducer/user/user";

import App from './components/app/app';

import withScreenSwitch from './hocs/with-screen-switch/with-screen-switch';

const mainContainer = document.querySelector(`.main`);

const settings = {
  gameTime: 5,
  errorCount: 11,
};

const AppWrapped = withScreenSwitch(App);

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  /* eslint-enable */

  store.dispatch(Operation.loadQuestions());
  store.dispatch(UserOperation.checkAuthorization());

  ReactDOM.render(
      <Provider store={store}>
        <AppWrapped
          errorCount={settings.errorCount}
          gameTime={settings.gameTime}
        />
      </Provider>,
      mainContainer
  );
};

init();
