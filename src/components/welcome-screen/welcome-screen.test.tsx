import * as React from 'react';
import * as renderer from 'react-test-renderer';
import WelcomScreen from './welcome-screen';

describe(`Test WelcomScreen`, () => {
  it(`Test WelcomScreen renderer`, () => {
    const tree = renderer
      .create(<WelcomScreen gameTime={0} errorCount={0} onClick={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
