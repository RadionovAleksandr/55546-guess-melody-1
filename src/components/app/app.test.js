import React from 'react';

import renderer from 'react-test-renderer';
import App from './app';
import {snapshotURL} from '../audio-component/audio-component';

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: snapshotURL,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: snapshotURL,
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
