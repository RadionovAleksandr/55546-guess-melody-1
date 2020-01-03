import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen'

it('renderes correctly WelcomeScreen', () => {
  const tree = renderer.create(
    <WelcomeScreen
      Screen gameTime={0}
      errorCount={0}
    />).toJSON();
  expect(tree).toMatchSnapshot
});