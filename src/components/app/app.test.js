import React from 'react';

import renderer from 'react-test-renderer';
import {App} from './app';
import {snapshotURL} from '../audio-component/audio-component';

const questions = [
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
];

const mockApp = {
  gameTime: 5
};

const mockStore = {
  step: -1,
  mistakes: 0
};

describe(`Test App`, () => {
  it(`Test App renderer`, () => {
    const tree = renderer
      .create(<App
        gameTime={mockApp.gameTime}
        questions={questions}

        step={mockStore.step}
        mistakes={mockStore.mistakes}

        renderScreen={jest.fn()}
        renderMistakes={jest.fn()}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
