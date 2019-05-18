import React from 'react';
import renderer from 'react-test-renderer';

import GameGenre from './game-genre';
import {snapshotURL} from '../audio-component/audio-component';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: snapshotURL,
        genre: `rock`,
      },
      {
        src: snapshotURL,
        genre: `blues`,
      },
      {
        src: snapshotURL,
        genre: `jazz`,
      },
      {
        src: snapshotURL,
        genre: `rock`,
      },
    ],
  },
};

describe(`Test GameGenre`, () => {
  it(`GameGenre is rendered correctly`, () => {
    const {question} = mock;
    const tree = renderer.create(<GameGenre
      onAnswer={jest.fn()}
      question={question}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
