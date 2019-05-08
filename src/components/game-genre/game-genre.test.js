import React from 'react';
import renderer from 'react-test-renderer';

import GameGenre from './game-genre';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `test.mp3`,
        genre: `rock`,
      },
      {
        src: `test.mp3`,
        genre: `blues`,
      },
      {
        src: `test.mp3`,
        genre: `jazz`,
      },
      {
        src: `test.mp3`,
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
