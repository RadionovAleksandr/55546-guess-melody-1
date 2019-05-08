import React from 'react';
import renderer from 'react-test-renderer';
import WelcomScreen from './welcome-screen';

describe(`Test WelcomScreen`, () => {
  it(`Test WelcomScreen renderer`, () => {
    const tree = renderer
      .create(<WelcomScreen time={0} errorCount={0} onButtonStartClick={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
