import React from 'react';
import renderer from 'react-test-renderer';
import GameOverScreen from './game-over-screen';
import {BrowserRouter, Switch, Route} from "react-router-dom";

describe(`Test GameOverScreen`, () => {
  it(`renderer`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Switch>
              <Route render={() => {
                return <GameOverScreen onRelaunchButtonClick={jest.fn()} />;
              }} />
            </Switch>
          </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
