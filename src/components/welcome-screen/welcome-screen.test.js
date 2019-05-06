import React from 'react';
import renderer from 'react-test-renderer';
import WelcomScreen from './welcome-screen.jsx';

describe(`Test WelcomScreen`, () => {
  it(`Test WelcomScreen renderer`, () => {
    const tree = renderer
      .create(<WelcomScreen time={0} errorCount={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
