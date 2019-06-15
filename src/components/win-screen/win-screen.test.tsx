import * as React from 'react';

import * as renderer from 'react-test-renderer';
import WinScreen from './win-screen';
import {BrowserRouter, Switch, Route} from "react-router-dom";

describe(`Test WinScreen`, () => {
  it(`renderer`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Switch>
              <Route render={() => {
                return <WinScreen onReplayButtonClick={jest.fn()} mistakes={0} />;
              }} />
            </Switch>
          </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
