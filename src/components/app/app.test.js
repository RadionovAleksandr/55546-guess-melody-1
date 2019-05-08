import React from 'react';

import renderer from 'react-test-renderer';
import App from './app';

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};

describe(`Test App`, () => {
  it(`Test App renderer`, () => {
    const tree = renderer
      .create(<App gameTime={0} errorCount={0} questions={mock.questions} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
