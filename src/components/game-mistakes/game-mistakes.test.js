import React from 'react';
import renderer from 'react-test-renderer';

import GameMistakes from './game-mistakes';

describe(`Test GameMistakes`, () => {
  it(`test renderer`, () => {
    const tree = renderer.create(<GameMistakes mistakes={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
