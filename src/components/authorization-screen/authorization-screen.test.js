import React from 'react';
import renderer from 'react-test-renderer';

import {AuthorizationScreen} from './authorization-screen';

describe(`Test authorizationScreen`, () => {
  it(`renderer`, () => {
    const tree = renderer.create(<AuthorizationScreen
      signIn={jest.fn()}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
