import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

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
  const api = createAPI(() => {
    history.pushState(null, null, `/login`);
    store.dispatch(UserOperation.requireAuthorization(true));
  });

  const store = createStore(
      reducer,
      composeWithDevTools(
          applyMiddleware(thunk.withExtraArgument(api))
      )
  );

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
